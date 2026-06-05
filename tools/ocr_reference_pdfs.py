#!/usr/bin/env python3
import argparse
import concurrent.futures
import hashlib
import os
import re
import shutil
import subprocess
import sys
import tempfile
from dataclasses import dataclass
from pathlib import Path
from typing import Optional


LANG = "chi_sim+chi_tra+eng"
DEFAULT_DPI = 180
LOW_TEXT_THRESHOLD = 20


@dataclass(frozen=True)
class OcrTask:
    pdf_path: Path
    page: int
    dpi: int
    temp_root: Path
    cache_dir: Path


def run_command(args: list[str], timeout: Optional[int] = None) -> subprocess.CompletedProcess[str]:
    return subprocess.run(
        args,
        stdout=subprocess.PIPE,
        stderr=subprocess.PIPE,
        text=True,
        timeout=timeout,
        check=False,
    )


def require_tool(name: str) -> str:
    path = shutil.which(name)
    if not path:
        raise RuntimeError(f"Missing required tool: {name}")
    return path


def sanitize_filename(name: str, max_len: int = 118) -> str:
    cleaned = re.sub(r"[\\/:*?\"<>|]+", "_", name)
    cleaned = re.sub(r"\s+", " ", cleaned).strip()
    cleaned = cleaned.strip(". ")
    if len(cleaned) <= max_len:
        return cleaned or "untitled"
    digest = hashlib.sha1(name.encode("utf-8")).hexdigest()[:10]
    return f"{cleaned[:max_len - 13].rstrip()}_{digest}"


def get_page_count(pdf_path: Path) -> int:
    result = run_command(["pdfinfo", str(pdf_path)])
    if result.returncode != 0:
        raise RuntimeError(result.stderr.strip() or "pdfinfo failed")
    for line in result.stdout.splitlines():
        if line.startswith("Pages:"):
            return int(line.split(":", 1)[1].strip())
    raise RuntimeError("Could not determine page count")


def ocr_page(task: OcrTask) -> tuple[int, str]:
    cache_path = task.cache_dir / f"page-{task.page:05d}.txt"
    if cache_path.exists() and cache_path.stat().st_size > 0:
        return task.page, cache_path.read_text(encoding="utf-8")

    page_dir = task.temp_root / f"page-{task.page:05d}"
    page_dir.mkdir(parents=True, exist_ok=True)
    image_prefix = page_dir / "page"
    image_path = page_dir / "page.png"

    render = run_command(
        [
            "pdftoppm",
            "-r",
            str(task.dpi),
            "-f",
            str(task.page),
            "-l",
            str(task.page),
            "-singlefile",
            "-png",
            str(task.pdf_path),
            str(image_prefix),
        ],
        timeout=180,
    )
    if render.returncode != 0 or not image_path.exists():
      # Keep a clear page-level marker instead of failing the entire book.
        shutil.rmtree(page_dir, ignore_errors=True)
        text = f"[OCR_RENDER_ERROR page={task.page}]\n{render.stderr.strip()}\n"
        cache_path.write_text(text, encoding="utf-8")
        return task.page, text

    ocr = run_command(
        [
            "tesseract",
            str(image_path),
            "stdout",
            "-l",
            LANG,
            "--psm",
            "3",
            "-c",
            "preserve_interword_spaces=1",
        ],
        timeout=240,
    )
    shutil.rmtree(page_dir, ignore_errors=True)

    if ocr.returncode != 0:
        text = f"[OCR_ERROR page={task.page}]\n{ocr.stderr.strip()}\n"
        cache_path.write_text(text, encoding="utf-8")
        return task.page, text

    text = ocr.stdout.replace("\r\n", "\n").strip()
    compact_text = re.sub(r"\s+", "", text)
    if len(compact_text) < LOW_TEXT_THRESHOLD:
        marker = "[IMAGE_OR_NON_TEXT_CONTENT: 此页可能主要为图片、地图、图表或非结构化内容，OCR 未识别出足够文本。]"
        text = f"{marker}\n{text}".strip()
    cache_path.write_text(text, encoding="utf-8")
    return task.page, text


def write_book_text(
    pdf_path: Path,
    output_path: Path,
    pages: list[tuple[int, str]],
    page_count: int,
) -> None:
    partial_path = output_path.with_suffix(output_path.suffix + ".partial")
    with partial_path.open("w", encoding="utf-8") as f:
        f.write(f"# OCR Text Extraction\n\n")
        f.write(f"Source PDF: {pdf_path}\n")
        f.write(f"Pages: {page_count}\n")
        f.write(f"Language: {LANG}\n")
        f.write("\n")
        f.write("Note: Scanned-page OCR text may contain recognition errors. Pages with very low recognized text are marked as image/non-text content.\n")
        f.write("\n")
        for page, text in sorted(pages, key=lambda item: item[0]):
            f.write(f"\n\n===== Page {page} / {page_count} =====\n\n")
            f.write(text.strip())
            f.write("\n")
    partial_path.replace(output_path)


def process_pdf(pdf_path: Path, output_dir: Path, index: int, total: int, workers: int, dpi: int, resume: bool) -> tuple[str, str]:
    stem = sanitize_filename(pdf_path.stem)
    digest = hashlib.sha1(str(pdf_path).encode("utf-8")).hexdigest()[:8]
    output_path = output_dir / f"{index:02d}_{stem}_{digest}.txt"
    if resume and output_path.exists() and output_path.stat().st_size > 0:
        print(f"[{index}/{total}] SKIP existing: {pdf_path.name}", flush=True)
        return pdf_path.name, "skipped"

    print(f"[{index}/{total}] Inspecting: {pdf_path.name}", flush=True)
    page_count = get_page_count(pdf_path)
    print(f"[{index}/{total}] OCR start: {page_count} pages", flush=True)

    completed_pages: list[tuple[int, str]] = []
    digest = hashlib.sha1(str(pdf_path).encode("utf-8")).hexdigest()[:8]
    page_cache_dir = output_dir / "_page_cache" / f"{index:02d}_{digest}"
    page_cache_dir.mkdir(parents=True, exist_ok=True)
    with tempfile.TemporaryDirectory(prefix=f"ocr_{index:02d}_") as temp_dir:
        temp_root = Path(temp_dir)
        tasks = [
            OcrTask(pdf_path=pdf_path, page=page, dpi=dpi, temp_root=temp_root, cache_dir=page_cache_dir)
            for page in range(1, page_count + 1)
        ]
        with concurrent.futures.ThreadPoolExecutor(max_workers=workers) as executor:
            future_to_page = {executor.submit(ocr_page, task): task.page for task in tasks}
            for done_count, future in enumerate(concurrent.futures.as_completed(future_to_page), 1):
                page = future_to_page[future]
                try:
                    completed_pages.append(future.result())
                except Exception as exc:
                    completed_pages.append((page, f"[OCR_EXCEPTION page={page}]\n{exc}\n"))
                if done_count % 10 == 0 or done_count == page_count:
                    print(f"[{index}/{total}] {pdf_path.name}: {done_count}/{page_count} pages", flush=True)

    write_book_text(pdf_path, output_path, completed_pages, page_count)
    print(f"[{index}/{total}] DONE: {output_path.name}", flush=True)
    return pdf_path.name, "done"


def main() -> int:
    parser = argparse.ArgumentParser(description="OCR scanned PDFs in a reference folder into separate text files.")
    parser.add_argument("--input", required=True, type=Path)
    parser.add_argument("--output", required=True, type=Path)
    parser.add_argument("--workers", type=int, default=max(1, min(4, (os.cpu_count() or 2) // 2)))
    parser.add_argument("--dpi", type=int, default=DEFAULT_DPI)
    parser.add_argument("--resume", action="store_true")
    args = parser.parse_args()

    require_tool("pdfinfo")
    require_tool("pdftoppm")
    require_tool("tesseract")

    input_dir = args.input.expanduser().resolve()
    output_dir = args.output.expanduser().resolve()
    output_dir.mkdir(parents=True, exist_ok=True)

    pdfs = sorted(input_dir.glob("*.pdf"), key=lambda path: path.name)
    if not pdfs:
        print(f"No PDFs found in {input_dir}", file=sys.stderr)
        return 1

    manifest_path = output_dir / "_manifest.txt"
    with manifest_path.open("w", encoding="utf-8") as manifest:
        manifest.write("OCR batch manifest\n")
        manifest.write(f"Input: {input_dir}\n")
        manifest.write(f"Output: {output_dir}\n")
        manifest.write(f"PDF count: {len(pdfs)}\n")
        manifest.write(f"Language: {LANG}\n")
        manifest.write(f"DPI: {args.dpi}\n")
        manifest.write(f"Workers: {args.workers}\n\n")

    statuses: list[tuple[str, str]] = []
    for index, pdf_path in enumerate(pdfs, 1):
        try:
            statuses.append(process_pdf(pdf_path, output_dir, index, len(pdfs), args.workers, args.dpi, args.resume))
        except Exception as exc:
            print(f"[{index}/{len(pdfs)}] FAILED: {pdf_path.name}: {exc}", flush=True)
            statuses.append((pdf_path.name, f"failed: {exc}"))

        with manifest_path.open("a", encoding="utf-8") as manifest:
            source, status = statuses[-1]
            manifest.write(f"{index:02d}. {status} - {source}\n")

    print(f"Manifest: {manifest_path}", flush=True)
    return 0


if __name__ == "__main__":
    raise SystemExit(main())

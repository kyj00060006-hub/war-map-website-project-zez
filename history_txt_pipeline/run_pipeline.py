#!/usr/bin/env python3
from __future__ import annotations

from pathlib import Path
from typing import Any

from src.chunker import chunk_text
from src.classifier import classify_source
from src.config import PipelineConfig, load_config
from src.logger import log_entry, now_iso
from src.reader import read_text_with_encoding
from src.scanner import scan_txt_files
from src.utils import normalize_text, possible_garbled_text, relpath, stable_file_id
from src.writer import (
    chunk_dir,
    ensure_output_dirs,
    normalized_path,
    write_batch_summary,
    write_chunks,
    write_logs,
    write_manifest,
    write_normalized,
    write_source_index,
)


MANIFEST_FIELDS = [
    "file_id",
    "file_name",
    "file_path",
    "relative_path",
    "file_size_mb",
    "char_count",
    "line_count",
    "modified_time",
    "status",
    "detected_encoding",
    "detected_category",
    "detected_war",
    "priority",
    "normalized_text_path",
    "chunk_dir",
    "notes",
    "error_message",
]


def empty_record(path: Path, config: PipelineConfig) -> dict[str, Any]:
    relative = relpath(path, config.input_dir)
    stat = path.stat()
    return {
        "file_id": stable_file_id(relative),
        "file_name": path.name,
        "file_path": str(path),
        "relative_path": relative,
        "file_size_mb": round(stat.st_size / 1024 / 1024, 3),
        "char_count": 0,
        "line_count": 0,
        "modified_time": str(int(stat.st_mtime)),
        "status": "pending",
        "detected_encoding": "",
        "detected_category": "uncertain",
        "detected_war": "unknown",
        "priority": "P3",
        "normalized_text_path": "",
        "chunk_dir": "",
        "notes": "",
        "error_message": "",
    }


def process_file(path: Path, config: PipelineConfig) -> tuple[dict[str, Any], list[dict[str, Any]]]:
    record = empty_record(path, config)
    logs: list[dict[str, Any]] = []
    try:
        text, encoding = read_text_with_encoding(path)
        normalized = normalize_text(text, config.normalize_whitespace, config.keep_original_line_breaks)
        preview = normalized[: config.preview_chars_for_classification]
        classification = classify_source(path.name, preview, len(normalized))
        record.update(
            {
                "char_count": len(normalized),
                "line_count": normalized.count("\n") + 1 if normalized else 0,
                "detected_encoding": encoding,
                "detected_category": classification.detected_category,
                "detected_war": classification.detected_war,
                "priority": classification.priority,
                "notes": classification.notes,
                "status": "processed",
            }
        )

        normalized_output = normalized_path(config.output_dir, record["detected_war"], record["file_id"], record["file_name"])
        chunks_output_dir = chunk_dir(config.output_dir, record["detected_war"], record["file_id"])
        record["normalized_text_path"] = str(normalized_output)
        record["chunk_dir"] = str(chunks_output_dir)

        if (
            config.skip_existing
            and not config.overwrite
            and normalized_output.exists()
            and chunks_output_dir.exists()
            and any(chunks_output_dir.glob("chunk_*.md"))
        ):
            record["status"] = "skipped"
            logs.append(log_entry(record["file_id"], record["file_name"], "skipped", "Existing outputs found."))
            return record, logs

        chunks = chunk_text(normalized, config.chunk_size_chars, config.chunk_overlap_chars)
        write_normalized(normalized_output, record, normalized, possible_garbled_text(normalized))
        write_chunks(chunks_output_dir, record, chunks)
        logs.append(log_entry(record["file_id"], record["file_name"], "processed", f"chunks={len(chunks)}"))
        return record, logs

    except Exception as exc:
        record["status"] = "failed"
        record["error_message"] = str(exc)
        logs.append(log_entry(record["file_id"], record["file_name"], "failed", str(exc)))
        return record, logs


def run(config: PipelineConfig) -> int:
    started_at = now_iso()
    files = scan_txt_files(config.input_dir, config.recursive)
    if config.limit:
        files = files[: config.limit]

    print(f"Input: {config.input_dir}")
    print(f"Output: {config.output_dir}")
    print(f"TXT files: {len(files)}")
    if config.dry_run:
        for path in files:
            record = empty_record(path, config)
            try:
                text, encoding = read_text_with_encoding(path)
                preview = text[: config.preview_chars_for_classification]
                classification = classify_source(path.name, preview, len(text))
                print(
                    f"[dry-run] {record['file_id']} {path.name} war={classification.detected_war} category={classification.detected_category} priority={classification.priority} encoding={encoding}"
                )
            except Exception as exc:
                print(f"[dry-run failed] {path.name}: {exc}")
        return 0

    ensure_output_dirs(config.output_dir)
    all_rows: list[dict[str, Any]] = []
    all_logs: list[dict[str, Any]] = []

    for index, path in enumerate(files, 1):
        print(f"[{index}/{len(files)}] {path.name}")
        row, logs = process_file(path, config)
        all_rows.append(row)
        all_logs.extend(logs)

    ended_at = now_iso()
    write_manifest(config.output_dir, all_rows)
    write_source_index(config.output_dir, all_rows)
    write_logs(config.output_dir, all_rows, all_logs, started_at, ended_at)
    write_batch_summary(config.output_dir, all_rows)
    print(f"Done: {config.output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(run(load_config()))

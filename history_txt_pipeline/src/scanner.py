from __future__ import annotations

from pathlib import Path


def should_skip_dir(path: Path) -> bool:
    return path.name.startswith(".") or path.name.startswith("_")


def should_skip_file(path: Path) -> bool:
    return path.name.startswith(".") or path.name.startswith("_")


def scan_txt_files(input_dir: Path, recursive: bool) -> list[Path]:
    if recursive:
        files: list[Path] = []
        for path in input_dir.rglob("*.txt"):
            if any(should_skip_dir(parent) for parent in path.relative_to(input_dir).parents if parent.name != "."):
                continue
            if should_skip_file(path):
                continue
            files.append(path)
        return sorted(files, key=lambda item: item.relative_to(input_dir).as_posix())

    return sorted(
        [path for path in input_dir.glob("*.txt") if path.is_file() and not should_skip_file(path)],
        key=lambda item: item.name,
    )

from __future__ import annotations

import argparse
import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, List, Optional, Union


@dataclass
class PipelineConfig:
    input_dir: Path
    output_dir: Path
    recursive: bool = True
    overwrite: bool = False
    skip_existing: bool = True
    preview_chars_for_classification: int = 12000
    chunk_size_chars: int = 12000
    chunk_overlap_chars: int = 800
    normalize_whitespace: bool = True
    keep_original_line_breaks: bool = True
    limit: Optional[int] = None
    dry_run: bool = False


DEFAULTS: Dict[str, Any] = {
    "input_dir": "~/Desktop/zez_project/ocr_text",
    "output_dir": "~/Desktop/zez_project/txt_pipeline_output",
    "recursive": True,
    "overwrite": False,
    "skip_existing": True,
    "preview_chars_for_classification": 12000,
    "chunk_size_chars": 12000,
    "chunk_overlap_chars": 800,
    "normalize_whitespace": True,
    "keep_original_line_breaks": True,
}


def expand_path(value: Union[str, Path]) -> Path:
    return Path(value).expanduser().resolve()


def load_json_config(path: Optional[str]) -> Dict[str, Any]:
    if not path:
        return {}
    config_path = expand_path(path)
    with config_path.open("r", encoding="utf-8") as f:
        return json.load(f)


def build_arg_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Scan, classify, normalize, and chunk TXT historical sources.")
    parser.add_argument("--config", help="Path to config JSON.")
    parser.add_argument("--input", dest="input_dir", help="Input TXT directory.")
    parser.add_argument("--output", dest="output_dir", help="Output directory.")
    parser.add_argument("--recursive", action="store_true", help="Scan subdirectories.")
    parser.add_argument("--no-recursive", dest="recursive", action="store_false", help="Do not scan subdirectories.")
    parser.set_defaults(recursive=None)
    parser.add_argument("--overwrite", action="store_true", help="Overwrite existing processed files.")
    parser.add_argument("--skip-existing", action="store_true", help="Skip files that already have outputs.")
    parser.add_argument("--no-skip-existing", dest="skip_existing", action="store_false")
    parser.set_defaults(skip_existing=None)
    parser.add_argument("--limit", type=int, help="Process only the first N TXT files.")
    parser.add_argument("--dry-run", action="store_true", help="Scan and classify only; do not write outputs.")
    return parser


def load_config(argv: Optional[List[str]] = None) -> PipelineConfig:
    parser = build_arg_parser()
    args = parser.parse_args(argv)
    raw = {**DEFAULTS, **load_json_config(args.config)}

    for key in [
        "input_dir",
        "output_dir",
        "recursive",
        "overwrite",
        "skip_existing",
        "limit",
        "dry_run",
    ]:
        value = getattr(args, key, None)
        if value is not None:
            raw[key] = value

    return PipelineConfig(
        input_dir=expand_path(raw["input_dir"]),
        output_dir=expand_path(raw["output_dir"]),
        recursive=bool(raw.get("recursive", True)),
        overwrite=bool(raw.get("overwrite", False)),
        skip_existing=bool(raw.get("skip_existing", True)),
        preview_chars_for_classification=int(raw.get("preview_chars_for_classification", 12000)),
        chunk_size_chars=int(raw.get("chunk_size_chars", 12000)),
        chunk_overlap_chars=int(raw.get("chunk_overlap_chars", 800)),
        normalize_whitespace=bool(raw.get("normalize_whitespace", True)),
        keep_original_line_breaks=bool(raw.get("keep_original_line_breaks", True)),
        limit=raw.get("limit"),
        dry_run=bool(raw.get("dry_run", False)),
    )

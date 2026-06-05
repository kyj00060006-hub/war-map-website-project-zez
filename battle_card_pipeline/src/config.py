from __future__ import annotations

import argparse
import json
from dataclasses import dataclass
from pathlib import Path
from typing import Any, Dict, Optional, Union


@dataclass
class Config:
    input_dir: Path
    output_dir: Path
    max_evidence_per_battle: int = 12
    snippet_radius_chars: int = 180
    min_priority: str = "P1"
    overwrite: bool = True
    dry_run: bool = False
    limit: Optional[int] = None


DEFAULTS: Dict[str, Any] = {
    "input_dir": "~/Desktop/zez_project/txt_pipeline_output",
    "output_dir": "~/Desktop/zez_project/battle_cards_output",
    "max_evidence_per_battle": 12,
    "snippet_radius_chars": 180,
    "min_priority": "P1",
    "overwrite": True,
}


def expand_path(value: Union[str, Path]) -> Path:
    return Path(value).expanduser().resolve()


def load_json(path: Optional[str]) -> Dict[str, Any]:
    if not path:
        return {}
    with expand_path(path).open("r", encoding="utf-8") as f:
        return json.load(f)


def build_parser() -> argparse.ArgumentParser:
    parser = argparse.ArgumentParser(description="Generate draft battle cards from TXT pipeline chunks.")
    parser.add_argument("--config", help="Path to config JSON.")
    parser.add_argument("--input", dest="input_dir", help="TXT pipeline output directory.")
    parser.add_argument("--output", dest="output_dir", help="Battle card output directory.")
    parser.add_argument("--max-evidence", dest="max_evidence_per_battle", type=int)
    parser.add_argument("--snippet-radius", dest="snippet_radius_chars", type=int)
    parser.add_argument("--min-priority", choices=["P0", "P1", "P2", "P3"], default=None)
    parser.add_argument("--overwrite", action="store_true")
    parser.add_argument("--no-overwrite", dest="overwrite", action="store_false")
    parser.set_defaults(overwrite=None)
    parser.add_argument("--limit", type=int, help="Limit number of battle seeds.")
    parser.add_argument("--dry-run", action="store_true")
    return parser


def load_config(argv: Optional[list[str]] = None) -> Config:
    parser = build_parser()
    args = parser.parse_args(argv)
    raw = {**DEFAULTS, **load_json(args.config)}
    for key in [
        "input_dir",
        "output_dir",
        "max_evidence_per_battle",
        "snippet_radius_chars",
        "min_priority",
        "overwrite",
        "limit",
        "dry_run",
    ]:
        value = getattr(args, key, None)
        if value is not None:
            raw[key] = value

    return Config(
        input_dir=expand_path(raw["input_dir"]),
        output_dir=expand_path(raw["output_dir"]),
        max_evidence_per_battle=int(raw.get("max_evidence_per_battle", 12)),
        snippet_radius_chars=int(raw.get("snippet_radius_chars", 180)),
        min_priority=str(raw.get("min_priority", "P1")),
        overwrite=bool(raw.get("overwrite", True)),
        dry_run=bool(raw.get("dry_run", False)),
        limit=raw.get("limit"),
    )

from __future__ import annotations

import shutil
from pathlib import Path
from typing import Dict, List

from src.battles import BATTLE_SEEDS, BattleSeed
from src.config import load_config
from src.evidence import Evidence, find_evidence_for_battle
from src.io_utils import read_json
from src.writer import write_outputs


def main() -> int:
    config = load_config()
    index_path = config.input_dir / "03_source_index" / "source_index.json"
    if not index_path.exists():
        raise FileNotFoundError(f"Missing source index: {index_path}")

    sources = read_json(index_path)
    battles: List[BattleSeed] = BATTLE_SEEDS[: config.limit] if config.limit else BATTLE_SEEDS

    print(f"Input: {config.input_dir}")
    print(f"Output: {config.output_dir}")
    print(f"Battle seeds: {len(battles)}")

    evidence_by_battle: Dict[str, List[Evidence]] = {}
    for index, battle in enumerate(battles, start=1):
        evidence = find_evidence_for_battle(
            battle=battle,
            sources=sources,
            max_evidence=config.max_evidence_per_battle,
            snippet_radius=config.snippet_radius_chars,
            min_priority=config.min_priority,
        )
        evidence_by_battle[battle.battle_id] = evidence
        print(f"[{index}/{len(battles)}] {battle.name}: {len(evidence)} evidence candidates")

    if config.dry_run:
        print("[dry-run] no files written")
        return 0

    if config.output_dir.exists() and config.overwrite:
        shutil.rmtree(config.output_dir)
    config.output_dir.mkdir(parents=True, exist_ok=True)
    write_outputs(config.output_dir, battles, evidence_by_battle)
    print(f"Done: {config.output_dir}")
    return 0


if __name__ == "__main__":
    raise SystemExit(main())


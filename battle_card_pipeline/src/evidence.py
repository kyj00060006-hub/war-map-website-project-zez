from __future__ import annotations

from dataclasses import asdict, dataclass
from pathlib import Path
from typing import Any, Dict, List

from .battles import BattleSeed
from .chunk_reader import read_chunk


PRIORITY_ORDER = {"P0": 0, "P1": 1, "P2": 2, "P3": 3}


@dataclass
class Evidence:
    battle_id: str
    battle_name: str
    war: str
    file_id: str
    file_name: str
    source_priority: str
    source_category: str
    chunk_index: str
    chunk_path: str
    score: int
    matched_terms: str
    snippet: str

    def to_dict(self) -> Dict[str, Any]:
        return asdict(self)


def priority_allowed(priority: str, min_priority: str) -> bool:
    return PRIORITY_ORDER.get(priority, 99) <= PRIORITY_ORDER.get(min_priority, 99)


def collect_snippet(text: str, term: str, radius: int) -> str:
    index = text.find(term)
    if index < 0:
        return ""
    start = max(0, index - radius)
    end = min(len(text), index + len(term) + radius)
    snippet = text[start:end].replace("\r", "").replace("\n", " ")
    return " ".join(snippet.split())


def score_text(text: str, aliases: List[str]) -> tuple[int, List[str]]:
    matched: List[str] = []
    score = 0
    for alias in aliases:
        count = text.count(alias)
        if count > 0:
            matched.append(alias)
            score += count * max(1, len(alias))
    return score, matched


def searchable_text(text: str) -> str:
    page_index = text.find("===== Page")
    if 0 <= page_index < 2500:
        text = text[page_index:]
    ignored_prefixes = ("# OCR Text Extraction", "Source PDF:", "Pages:", "Language:", "Note:")
    lines = [line for line in text.splitlines() if not line.strip().startswith(ignored_prefixes)]
    return "\n".join(lines)


def find_evidence_for_battle(
    battle: BattleSeed,
    sources: List[Dict[str, Any]],
    max_evidence: int,
    snippet_radius: int,
    min_priority: str,
) -> List[Evidence]:
    candidates: List[Evidence] = []
    for source in sources:
        if source.get("status") != "processed":
            continue
        if not priority_allowed(str(source.get("priority", "P3")), min_priority):
            continue
        source_war = str(source.get("detected_war", ""))
        source_name = str(source.get("file_name", ""))
        map_source_allowed = (
            source_war == "maps_or_atlas"
            and battle.war == "anti_japanese"
            and any(token in source_name for token in ["抗日", "1931-1945"])
        )
        if source_war != battle.war and not map_source_allowed:
            continue
        chunk_dir = Path(str(source.get("chunk_dir", "")))
        if not chunk_dir.exists():
            continue
        for chunk_path in sorted(chunk_dir.glob("chunk_*.md")):
            chunk = read_chunk(chunk_path)
            text = searchable_text(chunk["text"])
            score, matched = score_text(text, battle.aliases)
            if score <= 0:
                continue
            snippet = collect_snippet(text, matched[0], snippet_radius)
            candidates.append(
                Evidence(
                    battle_id=battle.battle_id,
                    battle_name=battle.name,
                    war=battle.war,
                    file_id=str(source.get("file_id", "")),
                    file_name=str(source.get("file_name", "")),
                    source_priority=str(source.get("priority", "")),
                    source_category=str(source.get("detected_category", "")),
                    chunk_index=str(chunk.get("chunk_index", "")),
                    chunk_path=str(chunk_path),
                    score=score,
                    matched_terms=", ".join(matched),
                    snippet=snippet,
                )
            )
    return sorted(candidates, key=lambda item: item.score, reverse=True)[:max_evidence]

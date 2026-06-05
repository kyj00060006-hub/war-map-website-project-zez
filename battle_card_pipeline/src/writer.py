from __future__ import annotations

from pathlib import Path
from typing import Dict, List

from .battles import BattleSeed
from .evidence import Evidence
from .io_utils import safe_filename, write_csv, write_json, write_text


def render_card(battle: BattleSeed, evidence: List[Evidence]) -> str:
    status = "draft" if evidence else "incomplete"
    priority = "P0" if evidence else "P2"
    rows = []
    for item in evidence:
        summary = item.snippet.replace("|", "\\|")
        rows.append(
            f"| 候选依据 | {item.file_name} | {item.chunk_path} | {summary} | 待人工复核；命中词：{item.matched_terms} |"
        )
    evidence_table = "\n".join(rows) if rows else "| 待补充 | 待补充 | 待补充 | 未在当前 chunk 集合中找到直接命中 | incomplete |"

    return f"""# 战役卡片

## 基本信息

- 战役名称：{battle.name}
- 别名：{", ".join(battle.aliases)}
- 所属战争：{battle.war}
- 所属阶段：{battle.stage_hint}
- 起始时间：待人工核定
- 结束时间：待人工核定
- 时间标签：待人工核定
- 地点：待人工核定
- 地理范围：待人工核定
- 地图坐标建议：待人工核定
- 优先级：{priority}
- 数据状态：{status}

## 参战双方

### A 方

- 名称：待人工核定
- 将领：待人工核定
- 部队番号：待人工核定
- 兵力：待人工核定
- 伤亡：待人工核定
- 资料来源：见“资料来源”

### B 方

- 名称：待人工核定
- 将领：待人工核定
- 部队番号：待人工核定
- 兵力：待人工核定
- 伤亡：待人工核定
- 资料来源：见“资料来源”

## 战役经过

1. 待人工依据资料整理。
2. 待人工依据资料整理。
3. 待人工依据资料整理。

## 战役结果

- 待人工核定。

## 历史意义

- 待人工核定。

## 地图可视化建议

- 战役点位：待人工核定
- 可显示城市：待人工核定
- 可显示交通线：待人工核定
- 可显示战线：待人工核定
- 可显示行军路线：待人工核定
- 可显示势力范围：待人工核定
- 可显示局部态势图：待人工核定
- 地形因素：待人工核定

## 资料来源

| 信息类型 | 来源文件 | 原始 TXT / chunk | 原文依据 / 摘要 | 可靠性备注 |
|---|---|---|---|---|
{evidence_table}
"""


def write_outputs(output_dir: Path, battles: List[BattleSeed], evidence_by_battle: Dict[str, List[Evidence]]) -> None:
    all_evidence = [item.to_dict() for items in evidence_by_battle.values() for item in items]
    for battle in battles:
        card_path = output_dir / "battle_cards" / battle.war / f"{safe_filename(battle.battle_id)}.md"
        write_text(card_path, render_card(battle, evidence_by_battle.get(battle.battle_id, [])))

    evidence_fields = [
        "battle_id",
        "battle_name",
        "war",
        "file_id",
        "file_name",
        "source_priority",
        "source_category",
        "chunk_index",
        "chunk_path",
        "score",
        "matched_terms",
        "snippet",
    ]
    write_csv(output_dir / "evidence_index" / "evidence_index.csv", all_evidence, evidence_fields)
    write_json(output_dir / "evidence_index" / "evidence_index.json", all_evidence)
    write_text(output_dir / "review_queue.md", render_review_queue(battles, evidence_by_battle))
    write_text(output_dir / "batch_summary.md", render_summary(battles, evidence_by_battle))


def render_review_queue(battles: List[BattleSeed], evidence_by_battle: Dict[str, List[Evidence]]) -> str:
    lines = ["# Battle Card Review Queue", ""]
    for battle in battles:
        count = len(evidence_by_battle.get(battle.battle_id, []))
        status = "draft" if count else "incomplete"
        lines.append(f"- [{status}] {battle.name} ({battle.battle_id}) - evidence candidates: {count}")
    return "\n".join(lines) + "\n"


def render_summary(battles: List[BattleSeed], evidence_by_battle: Dict[str, List[Evidence]]) -> str:
    total_evidence = sum(len(items) for items in evidence_by_battle.values())
    draft_count = sum(1 for battle in battles if evidence_by_battle.get(battle.battle_id))
    incomplete_count = len(battles) - draft_count
    lines = [
        "# Batch Summary",
        "",
        f"- Battle seeds: {len(battles)}",
        f"- Draft cards with evidence candidates: {draft_count}",
        f"- Incomplete cards without direct hits: {incomplete_count}",
        f"- Evidence candidates: {total_evidence}",
        "",
        "## Per Battle",
        "",
    ]
    for battle in battles:
        lines.append(f"- {battle.name}: {len(evidence_by_battle.get(battle.battle_id, []))}")
    return "\n".join(lines) + "\n"


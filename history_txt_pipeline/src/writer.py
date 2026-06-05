from __future__ import annotations

import csv
import json
from pathlib import Path
from typing import Any

from .utils import safe_name


WAR_DIRS = ["anti_japanese", "civil_war", "korean_war", "multi_or_uncertain", "maps_or_atlas", "unknown", "failed"]


def ensure_output_dirs(output_dir: Path) -> None:
    for subdir in ["00_manifest", "01_normalized_text", "02_chunks", "03_source_index", "04_processing_logs", "05_batch_reports", "06_ready_for_battle_cards"]:
        (output_dir / subdir).mkdir(parents=True, exist_ok=True)
    for war in WAR_DIRS:
        (output_dir / "01_normalized_text" / war).mkdir(parents=True, exist_ok=True)
        if war != "failed":
            (output_dir / "02_chunks" / war).mkdir(parents=True, exist_ok=True)


def normalized_path(output_dir: Path, detected_war: str, file_id: str, file_name: str) -> Path:
    return output_dir / "01_normalized_text" / detected_war / f"{file_id}__{safe_name(Path(file_name).stem)}.md"


def chunk_dir(output_dir: Path, detected_war: str, file_id: str) -> Path:
    return output_dir / "02_chunks" / detected_war / file_id


def write_normalized(path: Path, record: dict[str, Any], text: str, quality_warning: bool) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    warning = "\n[Text quality warning: possible encoding or OCR issue]\n\n" if quality_warning else ""
    content = f"""# Normalized Text Source

## Source Metadata

- file_id: {record["file_id"]}
- file_name: {record["file_name"]}
- original_path: {record["file_path"]}
- file_size_mb: {record["file_size_mb"]}
- char_count: {record["char_count"]}
- line_count: {record["line_count"]}
- detected_encoding: {record["detected_encoding"]}
- detected_war: {record["detected_war"]}
- detected_category: {record["detected_category"]}
- priority: {record["priority"]}
- processing_status: {record["status"]}

---

## Text

{warning}{text}
"""
    path.write_text(content, encoding="utf-8")


def write_chunks(base_dir: Path, record: dict[str, Any], chunks: list[dict[str, Any]]) -> None:
    base_dir.mkdir(parents=True, exist_ok=True)
    for chunk in chunks:
        path = base_dir / f"chunk_{chunk['index']:04d}.md"
        content = f"""# Text Chunk

## Chunk Metadata

- file_id: {record["file_id"]}
- file_name: {record["file_name"]}
- chunk_index: {chunk["index"]}
- char_start: {chunk["char_start"]}
- char_end: {chunk["char_end"]}
- detected_war: {record["detected_war"]}
- detected_category: {record["detected_category"]}

---

## Text

{chunk["text"]}
"""
        path.write_text(content, encoding="utf-8")


def write_csv(path: Path, rows: list[dict[str, Any]], fieldnames: list[str]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    with path.open("w", encoding="utf-8", newline="") as f:
        writer = csv.DictWriter(f, fieldnames=fieldnames, extrasaction="ignore")
        writer.writeheader()
        writer.writerows(rows)


def write_json(path: Path, data: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(data, ensure_ascii=False, indent=2), encoding="utf-8")


def write_source_index(output_dir: Path, rows: list[dict[str, Any]]) -> None:
    index_dir = output_dir / "03_source_index"
    summary = {
        "total": len(rows),
        "success": sum(1 for row in rows if row["status"] in ["processed", "skipped"]),
        "failed": sum(1 for row in rows if row["status"] == "failed"),
        "anti_japanese": sum(1 for row in rows if row.get("detected_war") == "anti_japanese"),
        "civil_war": sum(1 for row in rows if row.get("detected_war") == "civil_war"),
        "korean_war": sum(1 for row in rows if row.get("detected_war") == "korean_war"),
        "multi_or_uncertain": sum(1 for row in rows if row.get("detected_war") == "multi_or_uncertain"),
        "maps_or_atlas": sum(1 for row in rows if row.get("detected_war") == "maps_or_atlas"),
        "unknown": sum(1 for row in rows if row.get("detected_war") == "unknown"),
    }
    lines = [
        "# Source Index",
        "",
        "## Summary",
        "",
        f"- Total TXT files: {summary['total']}",
        f"- Successfully processed: {summary['success']}",
        f"- Failed: {summary['failed']}",
        f"- Anti-Japanese War: {summary['anti_japanese']}",
        f"- Civil War: {summary['civil_war']}",
        f"- Korean War: {summary['korean_war']}",
        f"- Multi or uncertain: {summary['multi_or_uncertain']}",
        f"- Maps or atlas: {summary['maps_or_atlas']}",
        f"- Unknown: {summary['unknown']}",
        "",
        "## Source Table",
        "",
        "| file_id | file_name | detected_war | detected_category | char_count | priority | normalized_text_path | chunk_dir | notes |",
        "|---|---|---|---|---:|---|---|---|---|",
    ]
    for row in rows:
        lines.append(
            "| {file_id} | {file_name} | {detected_war} | {detected_category} | {char_count} | {priority} | {normalized_text_path} | {chunk_dir} | {notes} |".format(
                **{key: str(row.get(key, "")).replace("|", "\\|") for key in [
                    "file_id",
                    "file_name",
                    "detected_war",
                    "detected_category",
                    "char_count",
                    "priority",
                    "normalized_text_path",
                    "chunk_dir",
                    "notes",
                ]}
            )
        )
    (index_dir / "source_index.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    write_json(index_dir / "source_index.json", rows)
    write_csv(index_dir / "source_index.csv", rows, list(rows[0].keys()) if rows else [])


def write_logs(output_dir: Path, rows: list[dict[str, Any]], logs: list[dict[str, Any]], started_at: str, ended_at: str) -> None:
    log_dir = output_dir / "04_processing_logs"
    summary = {
        "start_time": started_at,
        "end_time": ended_at,
        "total_files": len(rows),
        "success_count": sum(1 for row in rows if row["status"] in ["processed", "skipped"]),
        "failed_count": sum(1 for row in rows if row["status"] == "failed"),
        "skipped_count": sum(1 for row in rows if row["status"] == "skipped"),
        "logs": logs,
    }
    write_json(log_dir / "processing_log.json", summary)
    failed = [row for row in rows if row["status"] == "failed"]
    processing_lines = [
        "# Processing Log",
        "",
        f"- start_time: {started_at}",
        f"- end_time: {ended_at}",
        f"- total_files: {summary['total_files']}",
        f"- success_count: {summary['success_count']}",
        f"- failed_count: {summary['failed_count']}",
        f"- skipped_count: {summary['skipped_count']}",
        "",
    ]
    for log in logs:
        processing_lines.append(f"- {log['time']} [{log['status']}] {log['file_name']} {log.get('message', '')}")
    (log_dir / "processing_log.md").write_text("\n".join(processing_lines) + "\n", encoding="utf-8")
    failed_lines = ["# Failed Files", ""]
    for row in failed:
        failed_lines.append(f"- `{row['file_name']}`: {row.get('error_message', '')}")
    (log_dir / "failed_files.md").write_text("\n".join(failed_lines) + "\n", encoding="utf-8")


def write_manifest(output_dir: Path, rows: list[dict[str, Any]]) -> None:
    manifest_dir = output_dir / "00_manifest"
    write_json(manifest_dir / "txt_manifest.json", rows)
    write_csv(manifest_dir / "txt_manifest.csv", rows, list(rows[0].keys()) if rows else [])


def write_batch_summary(output_dir: Path, rows: list[dict[str, Any]]) -> None:
    report_dir = output_dir / "05_batch_reports"
    lines = [
        "# Batch Summary",
        "",
        f"- Total TXT files: {len(rows)}",
        f"- Processed/skipped: {sum(1 for row in rows if row['status'] in ['processed', 'skipped'])}",
        f"- Failed: {sum(1 for row in rows if row['status'] == 'failed')}",
        "",
        "## Priority Counts",
        "",
    ]
    for priority in ["P0", "P1", "P2", "P3"]:
        lines.append(f"- {priority}: {sum(1 for row in rows if row.get('priority') == priority)}")
    (report_dir / "batch_summary.md").write_text("\n".join(lines) + "\n", encoding="utf-8")
    ready = output_dir / "06_ready_for_battle_cards" / "README.md"
    ready.write_text(
        "# Ready For Battle Cards\n\nUse P0/P1 sources and chunks from this output as the input layer for reviewed Markdown battle cards. Do not write raw TXT directly into website data.\n",
        encoding="utf-8",
    )

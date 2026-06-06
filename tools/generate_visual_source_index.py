#!/usr/bin/env python3
from __future__ import annotations

import json
from dataclasses import dataclass
from pathlib import Path
from typing import Iterable

PROJECT_ROOT = Path(__file__).resolve().parents[1]
DEFAULT_SOURCE_ROOT = PROJECT_ROOT.parent / "figure"
OUTPUT_PATH = PROJECT_ROOT / "src" / "data" / "visualSources.ts"

WAR_RULES = [
    ("anti_japanese", ["抗日", "抗战", "七七", "平津", "平绥", "平汉", "津浦", "徐州", "淞沪", "太原", "武汉", "长沙", "南昌", "上高", "常德", "鄂西", "衡阳", "桂南", "晋南", "豫南", "豫湘桂", "河南会战", "湖南会战", "广西会战", "老河口", "滇西", "受降"]),
    ("civil_war", ["解放", "东北", "辽沈", "淮海", "平津战役", "邯郸", "莱芜", "渡江"]),
    ("korean_war", ["抗美援朝", "朝鲜", "上甘岭", "金城", "绞杀", "细菌"]),
]

BATTLE_RULES = [
    ("battle-shanghai-1937", ["淞沪"]),
    ("battle-xuzhou-1938", ["徐州", "台儿庄", "津浦"]),
    ("battle-wuhan-1938", ["武汉"]),
    ("battle-nanchang-1939", ["南昌会战", "南昌战役"]),
    ("battle-first-changsha-1939", ["第一次长沙", "长沙会战第一次"]),
    ("battle-south-guangxi-1939", ["桂南", "昆仑关"]),
    ("battle-south-henan-1941", ["豫南"]),
    ("battle-shanggao-1941", ["上高", "锦江"]),
    ("battle-south-shanxi-1941", ["晋南", "中条山"]),
    ("battle-second-changsha-1941", ["第二次长沙", "长沙会战第二次"]),
    ("battle-third-changsha-1941", ["第三次长沙", "长沙会战第三次"]),
    ("battle-west-hubei-1943", ["鄂西"]),
    ("battle-changde-1943", ["常德"]),
    ("battle-ichigo-1944", ["豫湘桂", "一号作战", "大陆打通"]),
    ("battle-henan-1944", ["河南会战", "豫中"]),
    ("battle-hunan-1944", ["湖南会战", "长衡"]),
    ("battle-fourth-changsha-1944", ["第四次长沙", "长沙会战第四次"]),
    ("battle-hengyang-1944", ["衡阳"]),
    ("battle-lingbao-1944", ["灵宝"]),
    ("battle-guangxi-1944", ["广西会战", "桂柳"]),
    ("battle-west-henan-north-hubei-1945", ["豫西鄂北", "老河口"]),
    ("battle-west-yunnan-1944", ["滇西"]),
    ("battle-liaoshen-1948", ["辽沈"]),
    ("battle-huaihai-1948", ["淮海"]),
    ("battle-pingjin-1948", ["平津战役", "北平"]),
    ("battle-shangganling-1952", ["上甘岭"]),
    ("battle-kumsong-1953", ["金城"]),
]

ASSET_TYPE_BY_SUFFIX = {
    ".jpg": "map-image",
    ".jpeg": "map-image",
    ".pdf": "reference-pdf",
}

@dataclass(frozen=True)
class VisualSourceAsset:
    id: str
    title: str
    kind: str
    warId: str | None
    battleId: str | None
    sourceGroup: str
    relativePath: str
    localPath: str
    extension: str
    sizeBytes: int
    status: str


def slugify(value: str) -> str:
    safe = []
    for char in value.lower():
        if char.isascii() and char.isalnum():
            safe.append(char)
        elif char in {"-", "_"}:
            safe.append(char)
        elif "\u4e00" <= char <= "\u9fff":
            safe.append(char)
        else:
            safe.append("-")
    slug = "".join(safe).strip("-")
    while "--" in slug:
        slug = slug.replace("--", "-")
    return slug or "asset"


def infer_by_rules(text: str, rules: Iterable[tuple[str, list[str]]]) -> str | None:
    for value, keywords in rules:
        if any(keyword in text for keyword in keywords):
            return value
    return None


def title_from_path(path: Path) -> str:
    return path.stem.replace("_", " ").strip()


def infer_battle_id(title: str, parts: tuple[str, ...]) -> str | None:
    title_match = infer_by_rules(title, BATTLE_RULES)
    if title_match:
        return title_match

    folder_text = " ".join(parts[:-1])
    folder_rules = [
        ("battle-liaoshen-1948", ["辽沈战役"]),
        ("battle-huaihai-1948", ["淮海战役"]),
        ("battle-pingjin-1948", ["平津战役"]),
        ("battle-shangganling-1952", ["上甘岭战役"]),
    ]
    return infer_by_rules(folder_text, folder_rules)


def collect_assets(source_root: Path) -> list[VisualSourceAsset]:
    if not source_root.exists():
        raise FileNotFoundError(f"source root not found: {source_root}")

    assets: list[VisualSourceAsset] = []
    seen_ids: dict[str, int] = {}
    for path in sorted(source_root.rglob("*"), key=lambda p: str(p.relative_to(source_root))):
        if not path.is_file():
            continue
        suffix = path.suffix.lower()
        if suffix not in ASSET_TYPE_BY_SUFFIX:
            continue
        rel = path.relative_to(source_root)
        parts = rel.parts
        if parts and parts[0] == "00_整理清单":
            continue
        text = " ".join(parts)
        title = title_from_path(path)
        status = "deferred" if parts and parts[0].startswith("99_") else "available"
        war_id = infer_by_rules(text, WAR_RULES)
        battle_id = infer_battle_id(title, parts)
        source_group = parts[0] if parts else "未分类"
        raw_id = slugify(str(rel.with_suffix("")))
        count = seen_ids.get(raw_id, 0) + 1
        seen_ids[raw_id] = count
        asset_id = raw_id if count == 1 else f"{raw_id}-{count}"
        assets.append(
            VisualSourceAsset(
                id=asset_id,
                title=title,
                kind=ASSET_TYPE_BY_SUFFIX[suffix],
                warId=war_id,
                battleId=battle_id,
                sourceGroup=source_group,
                relativePath=str(rel),
                localPath=str(path),
                extension=suffix.lstrip("."),
                sizeBytes=path.stat().st_size,
                status=status,
            )
        )
    return assets


def ts_value(value: object, indent: int = 0) -> str:
    return json.dumps(value, ensure_ascii=False, indent=indent)


def write_typescript(assets: list[VisualSourceAsset], output_path: Path, source_root: Path) -> None:
    serializable = [asset.__dict__ for asset in assets]
    counts = {
        "total": len(assets),
        "mapImages": sum(1 for asset in assets if asset.kind == "map-image"),
        "referencePdfs": sum(1 for asset in assets if asset.kind == "reference-pdf"),
        "available": sum(1 for asset in assets if asset.status == "available"),
        "deferred": sum(1 for asset in assets if asset.status == "deferred"),
    }
    content = (
        'import type { VisualSourceAsset } from "../types/war";\n\n'
        f'export const visualSourceRoot = {ts_value(str(source_root))};\n\n'
        f'export const visualSourceSummary = {ts_value(counts, 2)} as const;\n\n'
        f'export const visualSourceAssets: VisualSourceAsset[] = {ts_value(serializable, 2)};\n'
    )
    output_path.parent.mkdir(parents=True, exist_ok=True)
    output_path.write_text(content, encoding="utf-8")


def main() -> None:
    import argparse

    parser = argparse.ArgumentParser(description="Generate a TypeScript visual-source index from local JPG/PDF materials.")
    parser.add_argument("--source-root", type=Path, default=DEFAULT_SOURCE_ROOT)
    parser.add_argument("--output", type=Path, default=OUTPUT_PATH)
    args = parser.parse_args()

    assets = collect_assets(args.source_root)
    write_typescript(assets, args.output, args.source_root)
    print(f"indexed {len(assets)} visual source assets")
    print(f"output: {args.output}")


if __name__ == "__main__":
    main()

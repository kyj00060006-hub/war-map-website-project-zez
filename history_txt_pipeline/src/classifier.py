from __future__ import annotations

from collections import Counter
from dataclasses import dataclass


ANTI_JAPANESE = [
    "抗日战争",
    "抗战",
    "全面抗战",
    "正面战场",
    "敌后战场",
    "日军",
    "国民革命军",
    "中国远征军",
    "滇缅",
    "淞沪",
    "徐州会战",
    "武汉会战",
    "长沙会战",
    "豫湘桂",
    "一号作战",
    "河南会战",
    "湖南会战",
    "广西会战",
    "桂柳会战",
    "长衡会战",
    "常德会战",
    "浙赣会战",
    "缅北滇西",
]

CIVIL_WAR = [
    "解放战争",
    "人民解放军",
    "国民党军",
    "三大战役",
    "辽沈",
    "淮海",
    "平津",
    "渡江",
    "东北野战军",
    "华东野战军",
    "中原野战军",
    "西北野战军",
    "华北野战兵团",
]

KOREAN_WAR = [
    "朝鲜战争",
    "抗美援朝",
    "中国人民志愿军",
    "志愿军",
    "联合国军",
    "朝鲜人民军",
    "韩军",
    "三八线",
    "仁川",
    "长津湖",
    "上甘岭",
    "金城",
    "板门店",
]

MAPS = ["地图", "图册", "战役图", "态势图", "要图", "地形图", "军事地图"]
TITLE_ANTI_JAPANESE = ["一号作战", "河南会战", "湖南会战", "广西会战", "豫湘桂", "抗日", "抗战"]
TITLE_ANTI_JAPANESE.extend(["中国事变", "中国派遣军", "昭和二十", "长沙作战", "香港作战"])
TITLE_CIVIL_WAR = ["解放战争", "辽沈战役", "淮海战役", "平津战役", "渡江战役"]
TITLE_KOREAN_WAR = ["朝鲜战争", "抗美援朝", "长津湖", "上甘岭", "金城战役"]


@dataclass
class Classification:
    detected_war: str
    detected_category: str
    priority: str
    notes: str


def count_keywords(text: str, keywords: list[str]) -> int:
    return sum(text.count(keyword) for keyword in keywords)


def classify_source(file_name: str, preview_text: str, char_count: int) -> Classification:
    haystack = f"{file_name}\n{preview_text}"
    scores = Counter(
        {
            "anti_japanese": count_keywords(haystack, ANTI_JAPANESE),
            "civil_war": count_keywords(haystack, CIVIL_WAR),
            "korean_war": count_keywords(haystack, KOREAN_WAR),
            "maps_or_atlas": count_keywords(haystack, MAPS),
        }
    )

    title_is_map = any(token in file_name for token in ["地图", "图册", "Atlas", "atlas"])
    war_peak = max(scores["anti_japanese"], scores["civil_war"], scores["korean_war"])
    if title_is_map or (scores["maps_or_atlas"] >= 10 and scores["maps_or_atlas"] > war_peak):
        detected_war = "maps_or_atlas"
    elif any(token in file_name for token in TITLE_ANTI_JAPANESE):
        detected_war = "anti_japanese"
    elif any(token in file_name for token in TITLE_CIVIL_WAR):
        detected_war = "civil_war"
    elif any(token in file_name for token in TITLE_KOREAN_WAR):
        detected_war = "korean_war"
    else:
        war_scores = {key: value for key, value in scores.items() if key != "maps_or_atlas"}
        top_war, top_score = max(war_scores.items(), key=lambda item: item[1])
        positive_wars = [key for key, value in war_scores.items() if value > 0]
        if top_score == 0:
            detected_war = "unknown"
        elif len(positive_wars) > 1 and sorted(war_scores.values(), reverse=True)[0] - sorted(war_scores.values(), reverse=True)[1] <= 2:
            detected_war = "multi_or_uncertain"
        else:
            detected_war = top_war

    detected_category = detect_category(file_name, preview_text, scores)
    priority = detect_priority(detected_war, detected_category, char_count, scores)
    notes = f"keyword_scores={dict(scores)}"
    return Classification(detected_war, detected_category, priority, notes)


def detect_category(file_name: str, preview_text: str, scores: Counter) -> str:
    haystack = f"{file_name}\n{preview_text}"
    if any(token in file_name for token in ["地图", "图册", "Atlas", "atlas"]):
        return "map_or_atlas"
    if any(token in haystack for token in ["会战", "战役", "作战", "战斗"]):
        if any(token in file_name for token in ["会战", "作战", "战役"]):
            return "single_battle_study"
        return "battle_collection"
    if any(token in haystack for token in ["年表", "大事记", "纪事"]):
        return "chronology"
    if any(token in haystack for token in ["回忆", "口述", "访谈"]):
        return "memoir_or_oral_history"
    if any(token in haystack for token in ["论文", "研究", "学报"]):
        return "academic_paper"
    if any(token in haystack for token in ["OCR Text Extraction", "===== Page"]):
        return "raw_ocr_text"
    if len(preview_text.strip()) < 200:
        return "uncertain"
    return "general_history"


def detect_priority(detected_war: str, detected_category: str, char_count: int, scores: Counter) -> str:
    if char_count < 500 or detected_war == "unknown":
        return "P3"
    if detected_category in ["map_or_atlas", "battle_collection", "single_battle_study"]:
        return "P0"
    if detected_war in ["anti_japanese", "civil_war", "korean_war"] and max(scores.values() or [0]) >= 3:
        return "P1"
    if detected_war == "multi_or_uncertain":
        return "P2"
    return "P2"

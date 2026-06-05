from __future__ import annotations

from dataclasses import dataclass
from typing import List


@dataclass(frozen=True)
class BattleSeed:
    battle_id: str
    name: str
    aliases: List[str]
    war: str
    stage_hint: str


BATTLE_SEEDS: List[BattleSeed] = [
    BattleSeed("battle-shanghai-1937", "淞沪会战", ["淞沪会战", "上海会战", "上海战役"], "anti_japanese", "全面抗战初期"),
    BattleSeed("battle-xuzhou-1938", "徐州会战", ["徐州会战", "台儿庄", "徐州作战"], "anti_japanese", "全面抗战初期"),
    BattleSeed("battle-wuhan-1938", "武汉会战", ["武汉会战", "武汉作战"], "anti_japanese", "全面抗战初期"),
    BattleSeed("battle-yuxianggui-1944", "豫湘桂会战", ["豫湘桂会战", "一号作战", "河南会战", "湖南会战", "广西会战", "长衡会战", "桂柳会战"], "anti_japanese", "战略相持后期"),
    BattleSeed("battle-henan-1944", "河南会战", ["河南会战", "豫中会战", "豫中作战", "一号作战之一"], "anti_japanese", "战略相持后期"),
    BattleSeed("battle-hunan-1944", "湖南会战", ["湖南会战", "长衡会战", "一号作战之二"], "anti_japanese", "战略相持后期"),
    BattleSeed("battle-guangxi-1944", "广西会战", ["广西会战", "桂柳会战", "一号作战之三"], "anti_japanese", "战略相持后期"),
    BattleSeed("battle-changsha", "长沙作战 / 长沙会战", ["长沙作战", "长沙会战", "第三次长沙会战", "第四次长沙会战"], "anti_japanese", "战略相持期"),
    BattleSeed("battle-hong-kong-1941", "香港作战", ["香港作战", "香港保卫战", "香港战役"], "anti_japanese", "太平洋战争初期"),
    BattleSeed("battle-western-yunnan", "滇西反攻 / 中国远征军相关战役", ["滇西反攻", "中国远征军", "缅北滇西", "滇缅", "松山战役", "腾冲战役", "龙陵战役"], "anti_japanese", "战略反攻阶段"),
    BattleSeed("battle-central-plains-breakout", "中原突围", ["中原突围"], "civil_war", "解放战争初期"),
    BattleSeed("battle-menglianggu-1947", "孟良崮战役", ["孟良崮战役", "孟良崮"], "civil_war", "战略防御阶段"),
    BattleSeed("battle-liaoshen-1948", "辽沈战役", ["辽沈战役", "辽沈"], "civil_war", "战略决战阶段"),
    BattleSeed("battle-huaihai-1948", "淮海战役", ["淮海战役", "淮海"], "civil_war", "战略决战阶段"),
    BattleSeed("battle-yangtze-crossing-1949", "渡江战役", ["渡江战役", "渡江"], "civil_war", "战略追击阶段"),
    BattleSeed("battle-korean-war-outbreak-1950", "朝鲜战争爆发", ["朝鲜战争爆发", "朝鲜战争", "南朝鲜军", "北朝鲜军"], "korean_war", "战争爆发"),
    BattleSeed("battle-inchon-landing-1950", "仁川登陆", ["仁川登陆", "仁川登陸", "仁川"], "korean_war", "战争初期"),
    BattleSeed("battle-first-campaign-1950", "第一次战役", ["第一次战役", "第一次戰役", "志愿军第一次战役"], "korean_war", "中国人民志愿军入朝初期"),
    BattleSeed("battle-shangganling-1952", "上甘岭战役", ["上甘岭战役", "上甘岭", "五圣山"], "korean_war", "阵地战阶段"),
    BattleSeed("battle-kumsong-1953", "金城战役", ["金城战役", "金城反击战", "金城"], "korean_war", "停战前夕"),
]


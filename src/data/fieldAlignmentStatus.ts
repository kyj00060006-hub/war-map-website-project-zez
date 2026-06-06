import type { BattleFieldAlignmentSummary } from "../types/war";

export const fieldAlignmentPackageRoot = "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/07_字段级证据对齐_v2_ID映射修正版";

export const fieldAlignmentOverallSummary = {
  "totalBattles": 37,
  "readyFields": 312,
  "weakOrSharedFields": 206,
  "missingFields": 0,
  "reviewPackageRoot": "/Users/kongyujia/Desktop/zez_project/professional_review_package_v2_prefilled/07_字段级证据对齐_v2_ID映射修正版"
} as const;

export const battleFieldAlignmentSummaries: BattleFieldAlignmentSummary[] = [
  {
    "battleId": "battle-first-changsha-1939",
    "battleName": "第一次长沙会战",
    "warId": "anti_japanese",
    "reviewPriority": "P0_先核粒度错配风险",
    "readyFieldCount": 0,
    "weakOrSharedFieldCount": 14,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [
      "battle-changsha"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "先确认这些候选是否属于该具体战役；四次长沙/豫湘桂总览/中原突围尤其不能直接从总览采值。"
  },
  {
    "battleId": "battle-fourth-changsha-1944",
    "battleName": "第四次长沙会战",
    "warId": "anti_japanese",
    "reviewPriority": "P0_先核粒度错配风险",
    "readyFieldCount": 0,
    "weakOrSharedFieldCount": 14,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [
      "battle-changsha"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "先确认这些候选是否属于该具体战役；四次长沙/豫湘桂总览/中原突围尤其不能直接从总览采值。"
  },
  {
    "battleId": "battle-ichigo-1944",
    "battleName": "一号作战 / 豫湘桂会战总览",
    "warId": "anti_japanese",
    "reviewPriority": "P0_先核粒度错配风险",
    "readyFieldCount": 0,
    "weakOrSharedFieldCount": 14,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [
      "battle-yuxianggui-1944"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "先确认这些候选是否属于该具体战役；四次长沙/豫湘桂总览/中原突围尤其不能直接从总览采值。"
  },
  {
    "battleId": "battle-second-changsha-1941",
    "battleName": "第二次长沙会战",
    "warId": "anti_japanese",
    "reviewPriority": "P0_先核粒度错配风险",
    "readyFieldCount": 0,
    "weakOrSharedFieldCount": 14,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [
      "battle-changsha"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "先确认这些候选是否属于该具体战役；四次长沙/豫湘桂总览/中原突围尤其不能直接从总览采值。"
  },
  {
    "battleId": "battle-third-changsha-1941",
    "battleName": "第三次长沙会战",
    "warId": "anti_japanese",
    "reviewPriority": "P0_先核粒度错配风险",
    "readyFieldCount": 0,
    "weakOrSharedFieldCount": 14,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [
      "battle-changsha"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "先确认这些候选是否属于该具体战役；四次长沙/豫湘桂总览/中原突围尤其不能直接从总览采值。"
  },
  {
    "battleId": "battle-zhongyuan-breakout-1946",
    "battleName": "中原突围",
    "warId": "civil_war",
    "reviewPriority": "P0_先核粒度错配风险",
    "readyFieldCount": 4,
    "weakOrSharedFieldCount": 10,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 3,
    "aliasSourceIds": [
      "battle-central-plains-breakout"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "先确认这些候选是否属于该具体战役；四次长沙/豫湘桂总览/中原突围尤其不能直接从总览采值。"
  },
  {
    "battleId": "battle-south-henan-1941",
    "battleName": "豫南会战",
    "warId": "anti_japanese",
    "reviewPriority": "P1_低证据字段复核",
    "readyFieldCount": 1,
    "weakOrSharedFieldCount": 13,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 1,
    "aliasSourceIds": [],
    "priorityNote": "需人工补证或低证据复查",
    "recommendedAction": "先核 weak 字段，必要时回到 OCR 摘录或原 PDF/图册补证。"
  },
  {
    "battleId": "battle-hengyang-1944",
    "battleName": "衡阳会战",
    "warId": "anti_japanese",
    "reviewPriority": "P1_低证据字段复核",
    "readyFieldCount": 2,
    "weakOrSharedFieldCount": 12,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 4,
    "aliasSourceIds": [],
    "priorityNote": "需人工补证或低证据复查",
    "recommendedAction": "先核 weak 字段，必要时回到 OCR 摘录或原 PDF/图册补证。"
  },
  {
    "battleId": "battle-changde-1943",
    "battleName": "常德会战",
    "warId": "anti_japanese",
    "reviewPriority": "P1_低证据字段复核",
    "readyFieldCount": 3,
    "weakOrSharedFieldCount": 11,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "需人工补证或低证据复查",
    "recommendedAction": "先核 weak 字段，必要时回到 OCR 摘录或原 PDF/图册补证。"
  },
  {
    "battleId": "battle-lingbao-1944",
    "battleName": "灵宝战役",
    "warId": "anti_japanese",
    "reviewPriority": "P1_低证据字段复核",
    "readyFieldCount": 4,
    "weakOrSharedFieldCount": 10,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 3,
    "aliasSourceIds": [],
    "priorityNote": "需人工补证或低证据复查",
    "recommendedAction": "先核 weak 字段，必要时回到 OCR 摘录或原 PDF/图册补证。"
  },
  {
    "battleId": "battle-west-henan-north-hubei-1945",
    "battleName": "豫西鄂北会战",
    "warId": "anti_japanese",
    "reviewPriority": "P1_低证据字段复核",
    "readyFieldCount": 4,
    "weakOrSharedFieldCount": 10,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "需人工补证或低证据复查",
    "recommendedAction": "先核 weak 字段，必要时回到 OCR 摘录或原 PDF/图册补证。"
  },
  {
    "battleId": "battle-west-yunnan-1944",
    "battleName": "滇西反攻",
    "warId": "anti_japanese",
    "reviewPriority": "P1_ID映射来源复核",
    "readyFieldCount": 6,
    "weakOrSharedFieldCount": 8,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [
      "battle-western-yunnan"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "确认旧 ID/改名 ID 来源与当前网站战役完全对应。"
  },
  {
    "battleId": "battle-korean-outbreak-1950",
    "battleName": "朝鲜战争爆发",
    "warId": "korean_war",
    "reviewPriority": "P1_ID映射来源复核",
    "readyFieldCount": 11,
    "weakOrSharedFieldCount": 3,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [
      "battle-korean-war-outbreak-1950"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "确认旧 ID/改名 ID 来源与当前网站战役完全对应。"
  },
  {
    "battleId": "battle-incheon-1950",
    "battleName": "仁川登陆",
    "warId": "korean_war",
    "reviewPriority": "P1_ID映射来源复核",
    "readyFieldCount": 12,
    "weakOrSharedFieldCount": 2,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [
      "battle-inchon-landing-1950"
    ],
    "priorityNote": "使用上级/改名证据，必须核粒度",
    "recommendedAction": "确认旧 ID/改名 ID 来源与当前网站战役完全对应。"
  },
  {
    "battleId": "battle-guangxi-1944",
    "battleName": "广西会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 10,
    "weakOrSharedFieldCount": 4,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-henan-1944",
    "battleName": "河南会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 10,
    "weakOrSharedFieldCount": 4,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 4,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-menglianggu-1947",
    "battleName": "孟良崮战役",
    "warId": "civil_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 10,
    "weakOrSharedFieldCount": 4,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 5,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-hunan-1944",
    "battleName": "湖南会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 11,
    "weakOrSharedFieldCount": 3,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-fifth-campaign-1951",
    "battleName": "第五次战役",
    "warId": "korean_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 13,
    "weakOrSharedFieldCount": 1,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-fourth-campaign-1951",
    "battleName": "第四次战役",
    "warId": "korean_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 13,
    "weakOrSharedFieldCount": 1,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-south-guangxi-1939",
    "battleName": "桂南会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-xuzhou-1938",
    "battleName": "徐州会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-huaihai-1948",
    "battleName": "淮海战役",
    "warId": "civil_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 9,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-liaoshen-1948",
    "battleName": "辽沈战役",
    "warId": "civil_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 12,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-pingjin-1948",
    "battleName": "平津战役",
    "warId": "civil_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 14,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-yangtze-crossing-1949",
    "battleName": "渡江战役",
    "warId": "civil_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 6,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-first-campaign-1950",
    "battleName": "第一次战役",
    "warId": "korean_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-kumsong-1953",
    "battleName": "金城战役",
    "warId": "korean_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-second-campaign-1950",
    "battleName": "第二次战役",
    "warId": "korean_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-shangganling-1952",
    "battleName": "上甘岭战役",
    "warId": "korean_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-third-campaign-1950",
    "battleName": "第三次战役",
    "warId": "korean_war",
    "reviewPriority": "P2_可进入字段校对",
    "readyFieldCount": 14,
    "weakOrSharedFieldCount": 0,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "逐字段确认 confirmed_value；重点看日期、兵力、伤亡、结果是否有冲突口径。"
  },
  {
    "battleId": "battle-shanggao-1941",
    "battleName": "上高会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_常规复核",
    "readyFieldCount": 5,
    "weakOrSharedFieldCount": 9,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "需人工补证或低证据复查",
    "recommendedAction": "按字段表逐项确认，低置信字段保留为待复查。"
  },
  {
    "battleId": "battle-west-hubei-1943",
    "battleName": "鄂西会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_常规复核",
    "readyFieldCount": 5,
    "weakOrSharedFieldCount": 9,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 2,
    "aliasSourceIds": [],
    "priorityNote": "需人工补证或低证据复查",
    "recommendedAction": "按字段表逐项确认，低置信字段保留为待复查。"
  },
  {
    "battleId": "battle-nanchang-1939",
    "battleName": "南昌会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_常规复核",
    "readyFieldCount": 8,
    "weakOrSharedFieldCount": 6,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 7,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "按字段表逐项确认，低置信字段保留为待复查。"
  },
  {
    "battleId": "battle-shanghai-1937",
    "battleName": "淞沪会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_常规复核",
    "readyFieldCount": 8,
    "weakOrSharedFieldCount": 6,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 2,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "按字段表逐项确认，低置信字段保留为待复查。"
  },
  {
    "battleId": "battle-south-shanxi-1941",
    "battleName": "晋南会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_常规复核",
    "readyFieldCount": 9,
    "weakOrSharedFieldCount": 5,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "按字段表逐项确认，低置信字段保留为待复查。"
  },
  {
    "battleId": "battle-wuhan-1938",
    "battleName": "武汉会战",
    "warId": "anti_japanese",
    "reviewPriority": "P2_常规复核",
    "readyFieldCount": 9,
    "weakOrSharedFieldCount": 5,
    "missingFieldCount": 0,
    "evidenceItemsAvailable": 8,
    "aliasSourceIds": [],
    "priorityNote": "可进入字段校对",
    "recommendedAction": "按字段表逐项确认，低置信字段保留为待复查。"
  }
];

export function getFieldAlignmentSummaryByBattleId(battleId: string) {
  return battleFieldAlignmentSummaries.find((summary) => summary.battleId === battleId);
}

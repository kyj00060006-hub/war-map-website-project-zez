import type { War } from "../types/war";

export const wars: War[] = [
  {
    id: "anti_japanese",
    name: "中国人民抗日战争",
    shortName: "抗日战争",
    dateRange: "1931-1945",
    overview:
      "从局部抗战到全面抗战，再到战略反攻，是近现代中国战争史中持续时间长、战场范围广的重要时期。",
    themeColor: "#7f9d70",
  },
  {
    id: "civil_war",
    name: "全国解放战争",
    shortName: "解放战争",
    dateRange: "1946-1949",
    overview:
      "解放战争经历战略防御、战略进攻、战略决战与战略追击，战役空间由局部战区扩展到全国范围。",
    themeColor: "#b59b63",
  },
  {
    id: "korean_war",
    name: "朝鲜战争 / 抗美援朝",
    shortName: "抗美援朝",
    dateRange: "1950-1953",
    overview:
      "朝鲜战争呈现跨国战场、快速机动与阵地攻防并存的特点，适合通过时空关系展示战局变化。",
    themeColor: "#6f9cb8",
  },
];

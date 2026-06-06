import type { MapLayer } from "../types/war";

export const mapLayers: MapLayer[] = [
  {
    id: "cw-yangtze-crossing-route",
    warId: "civil_war",
    stageId: "cw_pursuit",
    type: "route",
    name: "渡江方向示意",
    description: "渡江方向概览路线，用于展示追歼阶段的主要空间走向。",
    coordinates: [
      [31.8, 117.2],
      [32.0, 118.1],
      [32.1, 118.8],
      [31.6, 119.4],
    ],
    style: {
      color: "#d4b15f",
      weight: 3,
      dashArray: "8 8",
      opacity: 0.75,
    },
  },
  {
    id: "kw-position-line",
    warId: "korean_war",
    stageId: "kw_position",
    type: "frontline",
    name: "阵地战阶段战线示意",
    description: "阵地战阶段战线概览，用于展示双方战线的大致走向。",
    coordinates: [
      [38.1, 126.3],
      [38.25, 127.0],
      [38.35, 127.6],
    ],
    style: {
      color: "#84bdd6",
      weight: 3,
      opacity: 0.85,
    },
  },
];

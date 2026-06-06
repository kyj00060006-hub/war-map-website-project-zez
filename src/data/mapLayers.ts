import type { MapLayer } from "../types/war";

export const mapLayers: MapLayer[] = [
  {
    id: "cw-yangtze-crossing-route-demo",
    warId: "civil_war",
    stageId: "cw_pursuit",
    type: "route",
    name: "渡江方向示意",
    description: "当前为概览路线，后续替换为经核验战役态势图层。",
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
    id: "kw-position-line-demo",
    warId: "korean_war",
    stageId: "kw_position",
    type: "frontline",
    name: "阵地战阶段战线示意",
    description: "当前为概览示意线，后续可替换为阶段化战线数据。",
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

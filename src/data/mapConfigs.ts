import type { WarMapConfig } from "../types/war";

const standardTile = {
  type: "standard-tile" as const,
  name: "OpenStreetMap Standard",
  url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  attribution: "&copy; OpenStreetMap contributors",
};

export const mapConfigs: WarMapConfig[] = [
  {
    warId: "anti_japanese",
    defaultCenter: [32.8, 110.5],
    defaultZoom: 5,
    minZoom: 3,
    maxZoom: 8,
    baseLayer: standardTile,
  },
  {
    warId: "civil_war",
    defaultCenter: [35.8, 112.8],
    defaultZoom: 5,
    minZoom: 3,
    maxZoom: 8,
    baseLayer: standardTile,
  },
  {
    warId: "korean_war",
    defaultCenter: [38.5, 126.5],
    defaultZoom: 7,
    minZoom: 5,
    maxZoom: 10,
    baseLayer: standardTile,
  },
];

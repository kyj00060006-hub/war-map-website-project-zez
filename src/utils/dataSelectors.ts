import { battles } from "../data/battles";
import { mapConfigs } from "../data/mapConfigs";
import { mapLayers } from "../data/mapLayers";
import { timelineStages } from "../data/timeline";
import { wars } from "../data/wars";
import type { WarId } from "../types/war";

export const getWarById = (warId: WarId) => wars.find((war) => war.id === warId);

export const getStagesByWarId = (warId: WarId) =>
  timelineStages.filter((stage) => stage.warId === warId);

export const getStageById = (stageId: string) =>
  timelineStages.find((stage) => stage.id === stageId);

export const getBattlesByWarId = (warId: WarId) =>
  battles.filter((battle) => battle.warId === warId);

export const getBattlesByWarAndStage = (warId: WarId, stageId: string) =>
  battles.filter((battle) => battle.warId === warId && battle.stageId === stageId);

export const getBattleById = (battleId: string) =>
  battles.find((battle) => battle.id === battleId);

export const getMapConfigByWarId = (warId: WarId) =>
  mapConfigs.find((config) => config.warId === warId);

export const getMapLayersByWarAndStage = (warId: WarId, stageId: string) =>
  mapLayers.filter((layer) => layer.warId === warId && layer.stageId === stageId);

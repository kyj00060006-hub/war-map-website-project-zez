import { battles } from "../data/battles";
import { mapConfigs } from "../data/mapConfigs";
import { mapLayers } from "../data/mapLayers";
import { timelineStages } from "../data/timeline";
import { wars } from "../data/wars";
import { visualSourceAssets } from "../data/visualSources";
import type { Battle, WarId } from "../types/war";

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

export const getVisualSourcesForBattle = (battle: Battle) => {
  const titleTerms = [battle.name, ...(battle.aliases ?? [])].filter(Boolean);

  const directMatches = visualSourceAssets.filter((asset) =>
    asset.battleId ? asset.battleId === battle.id : false,
  );

  const titleMatches = visualSourceAssets.filter((asset) => {
    if (asset.warId !== battle.warId || directMatches.includes(asset)) return false;
    const searchable = `${asset.title} ${asset.relativePath}`;
    return titleTerms.some((term) => searchable.includes(term));
  });

  return [...directMatches, ...titleMatches].slice(0, 8);
};

import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { useSearchParams } from "react-router-dom";
import { BattlePreviewModal } from "../components/map/BattlePreviewModal";
import { MapLegend } from "../components/map/MapLegend";
import { StageBattleList } from "../components/map/StageBattleList";
import { StageInfoPanel } from "../components/map/StageInfoPanel";
import { StageTimeline } from "../components/map/StageTimeline";
import { WarMap } from "../components/map/WarMap";
import { wars } from "../data/wars";
import type { Battle, WarId } from "../types/war";
import {
  getBattleById,
  getBattlesByWarAndStage,
  getHistoricalAnnotationsByWarAndStage,
  getMapLayersByWarAndStage,
  getStageById,
  getStagesByWarId,
  getWarById,
} from "../utils/dataSelectors";

function getDefaultStageId(warId: WarId) {
  const warStages = getStagesByWarId(warId);
  const firstStageWithBattles = warStages.find((stage) => getBattlesByWarAndStage(warId, stage.id).length > 0);
  return firstStageWithBattles?.id ?? warStages[0]?.id ?? "";
}

export function MapPage() {
  const [searchParams] = useSearchParams();
  const [activeWarId, setActiveWarId] = useState<WarId>("anti_japanese");
  const stages = useMemo(() => getStagesByWarId(activeWarId), [activeWarId]);
  const [activeStageId, setActiveStageId] = useState(() => getDefaultStageId("anti_japanese"));
  const [selectedBattle, setSelectedBattle] = useState<Battle | null>(null);
  const [focusedBattle, setFocusedBattle] = useState<Battle | null>(null);

  useEffect(() => {
    const battleId = searchParams.get("battle");
    if (!battleId) return;

    const battle = getBattleById(battleId);
    if (!battle) return;

    setActiveWarId(battle.warId);
    setActiveStageId(battle.stageId);
    setSelectedBattle(battle);
    setFocusedBattle(battle);
  }, [searchParams]);

  const activeWar = getWarById(activeWarId);
  const activeStage = getStageById(activeStageId);
  const stageBattles = getBattlesByWarAndStage(activeWarId, activeStageId);
  const stageLayers = getMapLayersByWarAndStage(activeWarId, activeStageId);
  const stageAnnotations = getHistoricalAnnotationsByWarAndStage(activeWarId, activeStageId);

  const handleBattleSelect = (battle: Battle) => {
    setFocusedBattle(battle);
    setSelectedBattle(battle);
  };

  const handleWarChange = (warId: WarId) => {
    setActiveWarId(warId);
    setActiveStageId(getDefaultStageId(warId));
    setSelectedBattle(null);
    setFocusedBattle(null);
  };

  const handleStageChange = (stageId: string) => {
    setActiveStageId(stageId);
    setSelectedBattle(null);
    setFocusedBattle(null);
  };

  return (
    <main className="map-page">
      <section className="map-topbar">
        <div>
          <p className="eyebrow">Operational Overview</p>
          <h1>战争地图总览</h1>
        </div>
        <div className="war-switcher" role="tablist" aria-label="战争切换">
          {wars.map((war) => (
            <button
              key={war.id}
              type="button"
              className={war.id === activeWarId ? "active" : ""}
              onClick={() => handleWarChange(war.id)}
              style={{ "--accent": war.themeColor } as CSSProperties}
            >
              <span>{war.dateRange}</span>
              {war.shortName}
            </button>
          ))}
        </div>
      </section>

      <section className="map-workspace">
        <WarMap
          activeWarId={activeWarId}
          activeStageId={activeStageId}
          focusedBattle={focusedBattle}
          onSelectBattle={handleBattleSelect}
        />
        <StageInfoPanel war={activeWar} stage={activeStage} battleCount={stageBattles.length} />
        <StageBattleList battles={stageBattles} onSelectBattle={handleBattleSelect} />
        <MapLegend annotationCount={stageAnnotations.length} layerCount={stageLayers.length} layers={stageLayers} />
      </section>

      <StageTimeline stages={stages} activeStageId={activeStageId} onStageChange={handleStageChange} />
      <BattlePreviewModal battle={selectedBattle} onClose={() => setSelectedBattle(null)} />
    </main>
  );
}

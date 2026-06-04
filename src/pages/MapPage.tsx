import { useEffect, useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { BattlePreviewModal } from "../components/map/BattlePreviewModal";
import { MapLegend } from "../components/map/MapLegend";
import { StageInfoPanel } from "../components/map/StageInfoPanel";
import { StageTimeline } from "../components/map/StageTimeline";
import { WarMap } from "../components/map/WarMap";
import { wars } from "../data/wars";
import type { Battle, WarId } from "../types/war";
import { getBattlesByWarAndStage, getMapLayersByWarAndStage, getStageById, getStagesByWarId, getWarById } from "../utils/dataSelectors";

function getDefaultStageId(warId: WarId) {
  const warStages = getStagesByWarId(warId);
  const firstStageWithBattles = warStages.find((stage) => getBattlesByWarAndStage(warId, stage.id).length > 0);
  return firstStageWithBattles?.id ?? warStages[0]?.id ?? "";
}

export function MapPage() {
  const [activeWarId, setActiveWarId] = useState<WarId>("anti_japanese");
  const stages = useMemo(() => getStagesByWarId(activeWarId), [activeWarId]);
  const [activeStageId, setActiveStageId] = useState(() => getDefaultStageId("anti_japanese"));
  const [selectedBattle, setSelectedBattle] = useState<Battle | null>(null);

  useEffect(() => {
    setActiveStageId(getDefaultStageId(activeWarId));
    setSelectedBattle(null);
  }, [activeWarId]);

  const activeWar = getWarById(activeWarId);
  const activeStage = getStageById(activeStageId);
  const stageBattles = getBattlesByWarAndStage(activeWarId, activeStageId);
  const stageLayers = getMapLayersByWarAndStage(activeWarId, activeStageId);

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
              onClick={() => setActiveWarId(war.id)}
              style={{ "--accent": war.themeColor } as CSSProperties}
            >
              <span>{war.dateRange}</span>
              {war.shortName}
            </button>
          ))}
        </div>
      </section>

      <section className="map-workspace">
        <WarMap activeWarId={activeWarId} activeStageId={activeStageId} onSelectBattle={setSelectedBattle} />
        <StageInfoPanel war={activeWar} stage={activeStage} battleCount={stageBattles.length} />
        <MapLegend layerCount={stageLayers.length} layers={stageLayers} />
      </section>

      <StageTimeline stages={stages} activeStageId={activeStageId} onStageChange={setActiveStageId} />
      <BattlePreviewModal battle={selectedBattle} onClose={() => setSelectedBattle(null)} />
    </main>
  );
}

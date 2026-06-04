import { useEffect } from "react";
import { MapContainer, useMap } from "react-leaflet";
import type { Battle, WarId } from "../../types/war";
import { getBattlesByWarAndStage, getMapConfigByWarId, getMapLayersByWarAndStage } from "../../utils/dataSelectors";
import { BaseMapLayer } from "./BaseMapLayer";
import { BattleMarkers } from "./BattleMarkers";
import { MapLayerRenderer } from "./MapLayerRenderer";

type WarMapProps = {
  activeWarId: WarId;
  activeStageId: string;
  onSelectBattle: (battle: Battle) => void;
};

function MapViewportSync({ activeWarId }: { activeWarId: WarId }) {
  const map = useMap();
  const config = getMapConfigByWarId(activeWarId);

  useEffect(() => {
    if (!config) return;
    map.flyTo(config.defaultCenter, config.defaultZoom, { duration: 0.8 });
  }, [activeWarId, config, map]);

  return null;
}

export function WarMap({ activeWarId, activeStageId, onSelectBattle }: WarMapProps) {
  const config = getMapConfigByWarId(activeWarId);
  const stageBattles = getBattlesByWarAndStage(activeWarId, activeStageId);
  const layers = getMapLayersByWarAndStage(activeWarId, activeStageId);

  if (!config) {
    return <div className="map-empty">缺少地图配置。</div>;
  }

  return (
    <div className="war-map-frame">
      <MapContainer
        className="war-map"
        center={config.defaultCenter}
        zoom={config.defaultZoom}
        minZoom={config.minZoom}
        maxZoom={config.maxZoom}
        maxBounds={config.bounds}
        scrollWheelZoom
      >
        <MapViewportSync activeWarId={activeWarId} />
        <BaseMapLayer config={config} />
        <MapLayerRenderer layers={layers} />
        <BattleMarkers battles={stageBattles} onSelectBattle={onSelectBattle} />
      </MapContainer>
    </div>
  );
}

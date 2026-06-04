import type { MapLayer } from "../../types/war";

type MapLegendProps = {
  layerCount: number;
  layers: MapLayer[];
};

export function MapLegend({ layerCount, layers }: MapLegendProps) {
  return (
    <aside className="map-legend" aria-label="地图图例">
      <h2>图例</h2>
      <div className="legend-item">
        <span className="legend-dot" />
        <span>战役点位</span>
      </div>
      <div className="legend-item">
        <span className="legend-line" />
        <span>预留战线 / 路线图层</span>
      </div>
      <p>当前阶段图层：{layerCount}</p>
      {layers.length ? (
        <ul>
          {layers.map((layer) => (
            <li key={layer.id}>{layer.name}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}

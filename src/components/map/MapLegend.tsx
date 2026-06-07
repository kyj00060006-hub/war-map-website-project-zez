import type { MapLayer } from "../../types/war";

type MapLegendProps = {
  annotationCount: number;
  layerCount: number;
  layers: MapLayer[];
};

export function MapLegend({ annotationCount, layerCount, layers }: MapLegendProps) {
  const layerTypeCounts = layers.reduce<Record<MapLayer["type"], number>>(
    (counts, layer) => ({
      ...counts,
      [layer.type]: counts[layer.type] + 1,
    }),
    {
      "control-area": 0,
      frontline: 0,
      route: 0,
      "troop-area": 0,
    },
  );

  const legendItems = [
    { key: "battle-marker", label: "战役点位", className: "legend-dot" },
    { key: "route", label: "行军 / 进攻路线", className: "legend-route", count: layerTypeCounts.route },
    { key: "frontline", label: "战线", className: "legend-frontline", count: layerTypeCounts.frontline },
    { key: "control-area", label: "势力范围", className: "legend-control-area", count: layerTypeCounts["control-area"] },
    { key: "troop-area", label: "部队部署区", className: "legend-troop-area", count: layerTypeCounts["troop-area"] },
    { key: "annotation", label: "历史标注", className: "legend-annotation", count: annotationCount },
  ];

  return (
    <aside className="map-legend" aria-label="地图图例">
      <h2>图例</h2>
      {legendItems.map((item) => (
        <div className="legend-item" key={item.key}>
          <span className={item.className} />
          <span>{item.label}</span>
          {"count" in item ? <small>{item.count}</small> : null}
        </div>
      ))}
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

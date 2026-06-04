import { Polygon, Polyline } from "react-leaflet";
import type { AreaMapLayer, MapLayer } from "../../types/war";

type MapLayerRendererProps = {
  layers: MapLayer[];
};

export function MapLayerRenderer({ layers }: MapLayerRendererProps) {
  return (
    <>
      {layers.map((layer) => {
        if (layer.type === "frontline" || layer.type === "route") {
          return (
            <Polyline
              key={layer.id}
              positions={layer.coordinates}
              pathOptions={{
                color: layer.style.color,
                weight: layer.style.weight,
                dashArray: layer.style.dashArray,
                opacity: layer.style.opacity,
              }}
            />
          );
        }

        const areaLayer = layer as AreaMapLayer;
        return (
          <Polygon
            key={areaLayer.id}
            positions={areaLayer.coordinates}
            pathOptions={{
              color: areaLayer.style.color,
              fillColor: areaLayer.style.fillColor,
              fillOpacity: areaLayer.style.fillOpacity,
              weight: areaLayer.style.weight,
            }}
          />
        );
      })}
    </>
  );
}

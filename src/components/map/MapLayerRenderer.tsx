import { memo } from "react";
import { Polygon, Polyline, Tooltip } from "react-leaflet";
import type { AreaMapLayer, MapLayer } from "../../types/war";

type MapLayerRendererProps = {
  layers: MapLayer[];
};

function MapLayerRendererComponent({ layers }: MapLayerRendererProps) {
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
            >
              <Tooltip sticky>
                <strong>{layer.name}</strong>
                {layer.description ? <span>{layer.description}</span> : null}
              </Tooltip>
            </Polyline>
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
          >
            <Tooltip sticky>
              <strong>{areaLayer.name}</strong>
              {areaLayer.description ? <span>{areaLayer.description}</span> : null}
            </Tooltip>
          </Polygon>
        );
      })}
    </>
  );
}

export const MapLayerRenderer = memo(MapLayerRendererComponent);

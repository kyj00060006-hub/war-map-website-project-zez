import { ImageOverlay, TileLayer } from "react-leaflet";
import type { WarMapConfig } from "../../types/war";

type BaseMapLayerProps = {
  config: WarMapConfig;
};

export function BaseMapLayer({ config }: BaseMapLayerProps) {
  const { baseLayer } = config;

  if (baseLayer.type === "image-overlay") {
    if (!baseLayer.imageUrl || !baseLayer.imageBounds) return null;
    return <ImageOverlay url={baseLayer.imageUrl} bounds={baseLayer.imageBounds} opacity={0.92} />;
  }

  if (baseLayer.type === "custom-tile" || baseLayer.type === "standard-tile") {
    if (!baseLayer.url) return null;
    return (
      <TileLayer
        url={baseLayer.url}
        attribution={baseLayer.attribution}
        keepBuffer={2}
        updateWhenIdle
        updateWhenZooming={false}
      />
    );
  }

  return null;
}

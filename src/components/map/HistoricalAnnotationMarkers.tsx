import L from "leaflet";
import { Marker, Tooltip } from "react-leaflet";
import type { HistoricalAnnotation } from "../../types/war";

type HistoricalAnnotationMarkersProps = {
  annotations: HistoricalAnnotation[];
};

const annotationIcon = new L.DivIcon({
  className: "historical-annotation-marker",
  html: "<span></span>",
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export function HistoricalAnnotationMarkers({ annotations }: HistoricalAnnotationMarkersProps) {
  return (
    <>
      {annotations.map((annotation) => (
        <Marker key={annotation.id} position={annotation.coordinates} icon={annotationIcon}>
          <Tooltip direction="top" offset={[0, -8]}>
            <strong>{annotation.label}</strong>
            {annotation.description ? <span>{annotation.description}</span> : null}
            {annotation.sourceNote ? <span>{annotation.sourceNote}</span> : null}
          </Tooltip>
        </Marker>
      ))}
    </>
  );
}

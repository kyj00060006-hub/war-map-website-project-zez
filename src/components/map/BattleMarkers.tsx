import L from "leaflet";
import { memo } from "react";
import { Marker, Tooltip } from "react-leaflet";
import type { Battle } from "../../types/war";

type BattleMarkersProps = {
  battles: Battle[];
  onSelectBattle: (battle: Battle) => void;
};

const battleIcon = new L.DivIcon({
  className: "battle-marker",
  html: "<span></span>",
  iconSize: [18, 18],
  iconAnchor: [9, 9],
});

function BattleMarkersComponent({ battles, onSelectBattle }: BattleMarkersProps) {
  return (
    <>
      {battles.map((battle) => (
        <Marker
          key={battle.id}
          position={battle.coordinates}
          icon={battleIcon}
          eventHandlers={{ click: () => onSelectBattle(battle) }}
        >
          <Tooltip direction="top" offset={[0, -8]}>
            {battle.name}
          </Tooltip>
        </Marker>
      ))}
    </>
  );
}

export const BattleMarkers = memo(BattleMarkersComponent);

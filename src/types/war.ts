export type WarId = "anti_japanese" | "civil_war" | "korean_war";

export type War = {
  id: WarId;
  name: string;
  shortName: string;
  dateRange: string;
  overview: string;
  themeColor: string;
};

export type TimelineStage = {
  id: string;
  warId: WarId;
  label: string;
  startDate: string;
  endDate?: string;
  dateLabel: string;
  summary: string;
};

export type BattleSide = {
  name: string;
  commanders?: string[];
  troops?: string;
  units?: string[];
  strength?: string;
  casualties?: string;
};

export type Battle = {
  id: string;
  warId: WarId;
  stageId: string;
  name: string;
  aliases?: string[];
  startDate: string;
  endDate?: string;
  dateLabel: string;
  location: string;
  coordinates: [number, number];
  overview: string;
  participants: {
    sideA: BattleSide;
    sideB: BattleSide;
  };
  process?: string[];
  result?: string;
  significance?: string;
  mapNotes?: string;
  image?: string;
  sources?: {
    title: string;
    page?: string;
    note?: string;
  }[];
  dataQuality?: {
    status: "draft" | "checked" | "conflicting" | "incomplete";
    notes?: string;
  };
};

export type WarMapConfig = {
  warId: WarId;
  defaultCenter: [number, number];
  defaultZoom: number;
  minZoom?: number;
  maxZoom?: number;
  bounds?: [[number, number], [number, number]];
  baseLayer: {
    type: "standard-tile" | "custom-tile" | "image-overlay";
    name: string;
    url?: string;
    attribution?: string;
    imageUrl?: string;
    imageBounds?: [[number, number], [number, number]];
  };
};

export type LineMapLayer = {
  id: string;
  warId: WarId;
  stageId: string;
  type: "frontline" | "route";
  name: string;
  description?: string;
  coordinates: [number, number][];
  style: {
    color: string;
    weight?: number;
    dashArray?: string;
    opacity?: number;
  };
};

export type AreaMapLayer = {
  id: string;
  warId: WarId;
  stageId: string;
  type: "control-area" | "troop-area";
  name: string;
  description?: string;
  coordinates: [number, number][];
  style: {
    color: string;
    fillColor: string;
    fillOpacity?: number;
    weight?: number;
  };
};

export type MapLayer = LineMapLayer | AreaMapLayer;

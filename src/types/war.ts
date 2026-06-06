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

export type VisualSourceAsset = {
  id: string;
  title: string;
  kind: "map-image" | "reference-pdf";
  warId: WarId | null;
  battleId: string | null;
  sourceGroup: string;
  relativePath: string;
  localPath: string;
  extension: string;
  sizeBytes: number;
  status: "available" | "deferred";
};

export type BattleReviewPackage = {
  battleId: string;
  websiteBattleIds: string[];
  battleName: string;
  warName: string;
  stageHint: string;
  sourceStatus: "prefilled_from_ocr" | "needs_source_material";
  confidence: string;
  evidenceCount: number;
  relatedImageCount: number;
  relatedPdfCount: number;
  reviewCardPath: string;
  evidenceCsvPath: string;
  ocrExcerptPath: string;
};

export type LiberationAtlasCandidate = {
  battleId: string;
  battleName: string;
  sequence: string;
  confidence: "strong" | "medium";
  pageTypeCandidate: string;
  matchedTerms: string[];
  titleCandidates: string[];
  ocrExcerpt: string;
  imagePath: string;
  publicImageUrl: string;
  rawTextPath: string;
  riskTags: string;
  reason: string;
  detectedPageNumber: string;
};

export type LiberationAtlasBattleCandidateSummary = {
  battleId: string;
  battleName: string;
  total: number;
  strong: number;
  medium: number;
  mapLike: number;
};

export type BattleFieldAlignmentSummary = {
  battleId: string;
  battleName: string;
  warId: WarId;
  reviewPriority: string;
  readyFieldCount: number;
  weakOrSharedFieldCount: number;
  missingFieldCount: number;
  evidenceItemsAvailable: number;
  aliasSourceIds: string[];
  priorityNote: string;
  recommendedAction: string;
};

export type BattleImageTimelineStep = {
  id: string;
  battleId: string;
  label: string;
  dateLabel: string;
  title: string;
  imageUrl: string;
  summary: string;
  sideA: {
    name: string;
    commanders?: string[];
    strength?: string;
    notes?: string;
  };
  sideB: {
    name: string;
    commanders?: string[];
    strength?: string;
    notes?: string;
  };
  keyLocations: string[];
  mapNotes: string;
  dataStatus: "draft" | "needs_review" | "checked";
};

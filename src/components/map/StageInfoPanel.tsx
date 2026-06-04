import type { TimelineStage, War } from "../../types/war";

type StageInfoPanelProps = {
  war?: War;
  stage?: TimelineStage;
  battleCount: number;
};

export function StageInfoPanel({ war, stage, battleCount }: StageInfoPanelProps) {
  if (!war || !stage) return null;

  return (
    <aside className="stage-info-panel">
      <p className="eyebrow">{war.shortName}</p>
      <h2>{stage.label}</h2>
      <p className="date-range">{stage.dateLabel}</p>
      <p>{stage.summary}</p>
      <dl>
        <div>
          <dt>当前战役点</dt>
          <dd>{battleCount}</dd>
        </div>
        <div>
          <dt>阶段 ID</dt>
          <dd>{stage.id}</dd>
        </div>
      </dl>
    </aside>
  );
}

import { useMemo, useState } from "react";
import type { BattleImageTimelineStep } from "../../types/war";

type BattleImageTimelineProps = {
  steps: BattleImageTimelineStep[];
};

function SideSnapshot({ label, side }: { label: string; side: BattleImageTimelineStep["sideA"] }) {
  return (
    <article className="timeline-side-snapshot">
      <span>{label}</span>
      <h4>{side.name}</h4>
      {side.commanders?.length ? <p>指挥：{side.commanders.join("、")}</p> : null}
      {side.strength ? <p>兵力：{side.strength}</p> : null}
      {side.notes ? <p>{side.notes}</p> : null}
    </article>
  );
}

export function BattleImageTimeline({ steps }: BattleImageTimelineProps) {
  const [activeStepId, setActiveStepId] = useState(steps[0]?.id ?? "");
  const [zoomMode, setZoomMode] = useState<"fit" | "wide" | "actual">("fit");
  const activeStep = useMemo(
    () => steps.find((step) => step.id === activeStepId) ?? steps[0],
    [activeStepId, steps],
  );

  if (!activeStep) return null;

  return (
    <section className="image-timeline-shell" aria-label="战役阶段图时间轴">
      <div className="image-timeline-stage">
        <div className="image-timeline-toolbar" aria-label="地图查看控制">
          <div>
            <button className={zoomMode === "fit" ? "active" : ""} onClick={() => setZoomMode("fit")} type="button">适应宽度</button>
            <button className={zoomMode === "wide" ? "active" : ""} onClick={() => setZoomMode("wide")} type="button">放大查看</button>
            <button className={zoomMode === "actual" ? "active" : ""} onClick={() => setZoomMode("actual")} type="button">原始尺寸</button>
          </div>
          <a href={activeStep.imageUrl} target="_blank" rel="noreferrer">打开原图</a>
        </div>
        <div className={`image-timeline-map-frame zoom-${zoomMode}`}>
          <img src={activeStep.imageUrl} alt={activeStep.title} />
        </div>
        <div className="image-timeline-controls" role="tablist" aria-label="阶段切换">
          {steps.map((step) => (
            <button
              className={step.id === activeStep.id ? "active" : ""}
              key={step.id}
              onClick={() => setActiveStepId(step.id)}
              type="button"
            >
              <span>{step.label}</span>
              <small>{step.dateLabel}</small>
            </button>
          ))}
        </div>
      </div>

      <aside className="image-timeline-info">
        <p className="eyebrow">Stage Map / {activeStep.dataStatus}</p>
        <h3>{activeStep.title}</h3>
        <p>{activeStep.summary}</p>
        <div className="timeline-side-grid">
          <SideSnapshot label="A 方" side={activeStep.sideA} />
          <SideSnapshot label="B 方" side={activeStep.sideB} />
        </div>
        <div className="timeline-key-locations">
          <span>关键地点</span>
          <div>
            {activeStep.keyLocations.map((location) => (
              <strong key={location}>{location}</strong>
            ))}
          </div>
        </div>
        <p className="timeline-map-note">{activeStep.mapNotes}</p>
      </aside>
    </section>
  );
}

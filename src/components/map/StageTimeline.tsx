import type { TimelineStage } from "../../types/war";

type StageTimelineProps = {
  stages: TimelineStage[];
  activeStageId: string;
  onStageChange: (stageId: string) => void;
};

export function StageTimeline({ stages, activeStageId, onStageChange }: StageTimelineProps) {
  return (
    <section className="stage-timeline" aria-label="阶段时间轴">
      {stages.map((stage) => (
        <button
          key={stage.id}
          className={stage.id === activeStageId ? "active" : ""}
          onClick={() => onStageChange(stage.id)}
          type="button"
        >
          <span>{stage.dateLabel}</span>
          {stage.label}
        </button>
      ))}
    </section>
  );
}

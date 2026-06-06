import type { Battle, BattleImageTimelineStep, BattleSide, VisualSourceAsset } from "../../types/war";
import { BattleImageTimeline } from "./BattleImageTimeline";
import { getStageById, getWarById } from "../../utils/dataSelectors";

type BattleDetailContentProps = {
  battle: Battle;
  imageTimelineSteps: BattleImageTimelineStep[];
  visualSources: VisualSourceAsset[];
};

function DetailSection({ title, children }: { title: string; children?: React.ReactNode }) {
  if (!children) return null;
  return (
    <section className="detail-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
}

function SidePanel({ side }: { side: BattleSide }) {
  return (
    <article className="side-panel">
      <h3>{side.name}</h3>
      {side.commanders?.length ? <p>将领：{side.commanders.join("、")}</p> : null}
      {side.units?.length ? <p>部队番号：{side.units.join("、")}</p> : null}
      {side.troops ? <p>部队：{side.troops}</p> : null}
      {side.strength ? <p>兵力：{side.strength}</p> : null}
      {side.casualties ? <p>伤亡：{side.casualties}</p> : null}
    </article>
  );
}

function getPublicDataStatus(status: NonNullable<Battle["dataQuality"]>["status"] | undefined) {
  if (status === "checked") return "已整理";
  if (status === "conflicting") return "多来源待辨析";
  if (status === "incomplete") return "资料补充中";
  return "资料整理中";
}

function VisualSourceList({ sources }: { sources: VisualSourceAsset[] }) {
  if (!sources.length) {
    return <p>当前页面优先展示战役叙述与阶段图，更多来源页码在资料整理中。</p>;
  }

  return (
    <div className="visual-source-grid">
      {sources.map((source) => (
        <article className="visual-source-item" key={source.id}>
          <div className="visual-source-heading">
            <span>{source.kind === "map-image" ? "JPG 地图" : "PDF 资料"}</span>
            <small>{(source.sizeBytes / 1024 / 1024).toFixed(1)} MB</small>
          </div>
          <h3>{source.title}</h3>
          <p>{source.sourceGroup}</p>
        </article>
      ))}
    </div>
  );
}

export function BattleDetailContent({ battle, imageTimelineSteps, visualSources }: BattleDetailContentProps) {
  const war = getWarById(battle.warId);
  const stage = getStageById(battle.stageId);

  return (
    <article className="battle-detail">
      <div className="detail-summary">
        <div>
          <p className="eyebrow">{war?.shortName} / {stage?.label}</p>
          <h1>{battle.name}</h1>
          {battle.aliases?.length ? <p className="muted">别名：{battle.aliases.join("、")}</p> : null}
          <p>{battle.overview}</p>
        </div>
        <dl>
          <div>
            <dt>起止时间</dt>
            <dd>{battle.dateLabel}</dd>
          </div>
          <div>
            <dt>地点</dt>
            <dd>{battle.location}</dd>
          </div>
          <div>
            <dt>地图定位</dt>
            <dd>{battle.coordinates[0].toFixed(4)}, {battle.coordinates[1].toFixed(4)}</dd>
          </div>
          <div>
            <dt>数据状态</dt>
            <dd>{getPublicDataStatus(battle.dataQuality?.status)}</dd>
          </div>
        </dl>
      </div>

      {imageTimelineSteps.length ? (
        <DetailSection title="阶段图时间轴">
          <BattleImageTimeline steps={imageTimelineSteps} />
        </DetailSection>
      ) : null}

      <DetailSection title="相关地图与资料">
        <VisualSourceList sources={visualSources} />
      </DetailSection>

      <DetailSection title="参战双方">
        <div className="sides-grid">
          <SidePanel side={battle.participants.sideA} />
          <SidePanel side={battle.participants.sideB} />
        </div>
      </DetailSection>

      <DetailSection title="战役经过">
        {battle.process?.length ? (
          <ol className="process-list">
            {battle.process.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        ) : null}
      </DetailSection>

      <DetailSection title="战役结果">
        {battle.result ? <p>{battle.result}</p> : null}
      </DetailSection>

      <DetailSection title="历史意义">
        {battle.significance ? <p>{battle.significance}</p> : null}
      </DetailSection>

      <DetailSection title="态势图说明">
        <div className="situation-placeholder">
          <span>地图说明</span>
          {battle.mapNotes ? <p>{battle.mapNotes}</p> : <p>后续可放置真实地形图、战线变化、部队部署或局部态势图。</p>}
        </div>
      </DetailSection>

      <DetailSection title="资料来源">
        {battle.sources?.length ? (
          <ul className="source-list">
            {battle.sources.map((source) => (
              <li key={`${source.title}-${source.page ?? ""}`}>
                {source.title}
                {source.page ? `，${source.page}` : ""}
                {source.note ? `：${source.note}` : ""}
              </li>
            ))}
          </ul>
        ) : (
          <p>当前战役来源页码仍在整理中，公开版先展示经过、结果和图册线索。</p>
        )}
      </DetailSection>
    </article>
  );
}

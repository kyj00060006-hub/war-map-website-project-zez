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
  if (status === "checked") return "资料已核验";
  if (status === "conflicting") return "资料待复核";
  if (status === "incomplete") return "资料不完整";
  return "草稿待核验";
}

function VisualSourceList({ sources }: { sources: VisualSourceAsset[] }) {
  if (!sources.length) {
    return <p>本页以战役叙述和阶段图为主，资料来源见页面下方说明。</p>;
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
          {battle.mapNotes ? <p>{battle.mapNotes}</p> : <p>本页结合战线变化、部队部署和局部态势图展示战役进程。</p>}
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
          <p>资料来源为项目整理的文本资料、图册页和公开展示地图。</p>
        )}
      </DetailSection>
    </article>
  );
}

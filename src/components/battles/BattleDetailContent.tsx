import type { BattleSide } from "../../types/war";
import type { Battle } from "../../types/war";
import { getStageById, getWarById } from "../../utils/dataSelectors";

type BattleDetailContentProps = {
  battle: Battle;
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

export function BattleDetailContent({ battle }: BattleDetailContentProps) {
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
            <dd>{battle.dataQuality?.status ?? "draft"}</dd>
          </div>
        </dl>
      </div>

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

      <DetailSection title="战役态势图预留">
        <div className="situation-placeholder">
          <span>Map / Situation Diagram Placeholder</span>
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
          <p>第一版 Demo 暂未录入正式来源，后续将补充资料来源与页码引用。</p>
        )}
      </DetailSection>

      <DetailSection title="数据质量说明">
        <p>{battle.dataQuality?.notes ?? "当前为 draft 样例数据，仅用于验证网站结构和交互流程。"}</p>
      </DetailSection>
    </article>
  );
}

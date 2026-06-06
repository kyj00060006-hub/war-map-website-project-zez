import type { Battle, BattleFieldAlignmentSummary, BattleImageTimelineStep, BattleReviewPackage, BattleSide, VisualSourceAsset } from "../../types/war";
import { BattleImageTimeline } from "./BattleImageTimeline";
import { getStageById, getWarById } from "../../utils/dataSelectors";

type BattleDetailContentProps = {
  battle: Battle;
  imageTimelineSteps: BattleImageTimelineStep[];
  reviewPackage?: BattleReviewPackage;
  fieldAlignment?: BattleFieldAlignmentSummary;
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

function getSourceStatusLabel(status: BattleReviewPackage["sourceStatus"]) {
  return status === "prefilled_from_ocr" ? "OCR 已预填，待校准" : "缺直接证据，待补材料";
}

function ReviewStatusPanel({ reviewPackage }: { reviewPackage?: BattleReviewPackage }) {
  if (!reviewPackage) {
    return (
      <div className="review-panel">
        <p className="status-pill status-pending">待建立审校包</p>
        <p>当前战役还没有关联到 OCR 预填卡。后续可补充到审校包后再接入。</p>
      </div>
    );
  }

  return (
    <div className="review-panel">
      <div className="review-status-row">
        <span className={`status-pill ${reviewPackage.sourceStatus === "prefilled_from_ocr" ? "status-ready" : "status-gap"}`}>
          {getSourceStatusLabel(reviewPackage.sourceStatus)}
        </span>
        <span className="status-pill">置信度：{reviewPackage.confidence}</span>
        <span className="status-pill">证据候选：{reviewPackage.evidenceCount}</span>
      </div>
      <dl className="review-paths">
        <div>
          <dt>预填资料卡</dt>
          <dd><code>{reviewPackage.reviewCardPath}</code></dd>
        </div>
        <div>
          <dt>证据表</dt>
          <dd><code>{reviewPackage.evidenceCsvPath}</code></dd>
        </div>
        <div>
          <dt>OCR摘录</dt>
          <dd><code>{reviewPackage.ocrExcerptPath}</code></dd>
        </div>
      </dl>
      <p className="muted">这个区块是校准工作台：正式内容回来后，只需要把确认后的日期、双方、过程、来源页码写回数据层。</p>
    </div>
  );
}

function FieldAlignmentPanel({ fieldAlignment }: { fieldAlignment?: BattleFieldAlignmentSummary }) {
  if (!fieldAlignment) {
    return (
      <div className="field-alignment-panel">
        <span className="status-pill status-pending">字段校准索引待接入</span>
        <p>当前战役还没有字段级证据对齐记录，页面会先保留草稿叙述。</p>
      </div>
    );
  }

  const isShared = fieldAlignment.aliasSourceIds.length > 0;

  return (
    <div className="field-alignment-panel">
      <div className="review-status-row">
        <span className={fieldAlignment.reviewPriority.startsWith("P0") ? "status-pill status-gap" : "status-pill status-ready"}>
          {fieldAlignment.reviewPriority}
        </span>
        <span className="status-pill">可用字段 {fieldAlignment.readyFieldCount}</span>
        <span className="status-pill">待复核字段 {fieldAlignment.weakOrSharedFieldCount}</span>
        <span className="status-pill">证据项 {fieldAlignment.evidenceItemsAvailable}</span>
      </div>
      <p>{fieldAlignment.recommendedAction}</p>
      {isShared ? (
        <p className="field-alignment-warning">
          使用映射来源：{fieldAlignment.aliasSourceIds.join("、")}。这些材料会作为历史科普候选，不直接覆盖具体战役粒度。
        </p>
      ) : null}
      <p className="muted">默认叙事口径：历史科普叙述；数字、伤亡、兵力、阶段边界保留待校准标记。</p>
    </div>
  );
}

function VisualSourceList({ sources }: { sources: VisualSourceAsset[] }) {
  if (!sources.length) {
    return <p>当前没有自动关联到明确地图或 PDF。可在素材审选表中手动补选。</p>;
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
          <code>{source.localPath}</code>
        </article>
      ))}
    </div>
  );
}

export function BattleDetailContent({ battle, imageTimelineSteps, reviewPackage, fieldAlignment, visualSources }: BattleDetailContentProps) {
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

      <DetailSection title="资料校准工作台">
        <ReviewStatusPanel reviewPackage={reviewPackage} />
      </DetailSection>

      <DetailSection title="内容校准状态">
        <FieldAlignmentPanel fieldAlignment={fieldAlignment} />
      </DetailSection>

      {imageTimelineSteps.length ? (
        <DetailSection title="阶段图时间轴">
          <BattleImageTimeline steps={imageTimelineSteps} />
        </DetailSection>
      ) : null}

      <DetailSection title="相关地图与 PDF 候选">
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
          <p>当前战役尚未写入页面级来源条目，请以资料校准工作台和字段级证据对齐表为准。</p>
        )}
      </DetailSection>

      <DetailSection title="数据质量说明">
        <p>{battle.dataQuality?.notes ?? "当前为历史科普草稿；数字、兵力、伤亡和阶段边界仍保留待校准状态。"}</p>
      </DetailSection>
    </article>
  );
}

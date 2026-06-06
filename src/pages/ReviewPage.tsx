import { Link } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";
import { battleReviewPackages, reviewPackageRoot } from "../data/battleReviewPackages";
import { fieldAlignmentOverallSummary, fieldAlignmentPackageRoot } from "../data/fieldAlignmentStatus";
import { getLiberationAtlasCandidatesByBattleId, liberationAtlasBattleSummaries, liberationAtlasCandidateSummary, liberationAtlasReviewRoot } from "../data/liberationAtlasCandidates";
import { visualSourceSummary } from "../data/visualSources";
import { getBattleById } from "../utils/dataSelectors";

const statusLabel = {
  prefilled_from_ocr: "OCR 已预填",
  needs_source_material: "待补材料",
} as const;

function getWebsiteBattleId(reviewPackage: (typeof battleReviewPackages)[number]) {
  if (getBattleById(reviewPackage.battleId)) return reviewPackage.battleId;
  return reviewPackage.websiteBattleIds.find((battleId) => getBattleById(battleId));
}

const urgentSourceIds = new Set(["battle-liaoshen-1948", "battle-huaihai-1948", "battle-pingjin-1948"]);

function getReviewPriority(reviewPackage: (typeof battleReviewPackages)[number]) {
  if (reviewPackage.sourceStatus === "needs_source_material") {
    return urgentSourceIds.has(reviewPackage.battleId) ? "P0" : "P1";
  }
  if (reviewPackage.confidence.includes("OCR候选")) {
    return reviewPackage.evidenceCount <= 3 ? "P1" : "P2";
  }
  return reviewPackage.evidenceCount <= 2 ? "P1" : "P3";
}

function getNextAction(reviewPackage: (typeof battleReviewPackages)[number]) {
  if (reviewPackage.sourceStatus === "needs_source_material") {
    return "先检查现有 PDF/图片候选能否 OCR 或定位页码；不足时再补权威资料。";
  }
  if (reviewPackage.confidence.includes("OCR候选")) {
    return "请专家核 OCR 候选：排除误命中，确认可采字段和来源页码。";
  }
  if (reviewPackage.relatedImageCount === 0) {
    return "事实字段常规校准，同时判断是否需要补地图/态势图。";
  }
  return "常规校准事实字段，并确认图片公开展示、图注和阶段划分。";
}

function getAtlasReviewAction(strong: number, medium: number) {
  if (strong >= 5) return "优先抽查强候选页，确认哪些可作为阶段图或正文来源。";
  if (strong > 0) return "先核强候选，再判断中候选是否只是背景提及。";
  if (medium > 0) return "逐页复核中候选，重点排除误命中和总览页错配。";
  return "暂未命中候选页，后续需要补材料或人工翻阅。";
}

export function ReviewPage() {
  const prefilledCount = battleReviewPackages.filter((item) => item.sourceStatus === "prefilled_from_ocr").length;
  const gapCount = battleReviewPackages.length - prefilledCount;
  const evidenceCount = battleReviewPackages.reduce((sum, item) => sum + item.evidenceCount, 0);
  const p0Count = battleReviewPackages.filter((item) => getReviewPriority(item) === "P0").length;
  const p1Count = battleReviewPackages.filter((item) => getReviewPriority(item) === "P1").length;
  const ocrCandidateCount = battleReviewPackages.filter((item) => item.confidence.includes("OCR候选")).length;
  const noVisualCount = battleReviewPackages.filter((item) => item.relatedImageCount === 0).length;

  const groupedPackages = battleReviewPackages.reduce<Record<string, typeof battleReviewPackages>>((groups, item) => {
    groups[item.warName] = groups[item.warName] ?? [];
    groups[item.warName].push(item);
    return groups;
  }, {});

  return (
    <PageShell
      eyebrow="Review Console"
      title="资料审校工作台"
      description="把 OCR 预填状态、缺口和地图/PDF素材集中放在一个页面。正式史实还没校准也没关系，页面结构可以先稳定下来。"
    >
      <section className="review-dashboard" aria-label="审校总览">
        <article>
          <span>战役资料卡</span>
          <strong>{battleReviewPackages.length}</strong>
          <p>{prefilledCount} 个已有 OCR 预填，{gapCount} 个需要补材料。</p>
        </article>
        <article>
          <span>OCR 证据候选</span>
          <strong>{evidenceCount}</strong>
          <p>用于快速定位原始 chunk 和预填资料卡。</p>
        </article>
        <article>
          <span>地图 / PDF 素材</span>
          <strong>{visualSourceSummary.total}</strong>
          <p>{visualSourceSummary.mapImages} 张 JPG，{visualSourceSummary.referencePdfs} 个 PDF。</p>
        </article>
        <article>
          <span>解放战争图册候选</span>
          <strong>{liberationAtlasCandidateSummary.total}</strong>
          <p>{liberationAtlasCandidateSummary.strong} 个强候选，覆盖 {liberationAtlasCandidateSummary.battleCount} 个重点战役。</p>
        </article>
        <article>
          <span>字段级校准</span>
          <strong>{fieldAlignmentOverallSummary.readyFields}</strong>
          <p>{fieldAlignmentOverallSummary.weakOrSharedFields} 个字段保留待复核，{fieldAlignmentOverallSummary.missingFields} 个缺口。</p>
        </article>
      </section>

      <section className="review-task-strip" aria-label="下一步任务概览">
        <article className="review-task-card task-urgent">
          <span>P0 缺口</span>
          <strong>{p0Count}</strong>
          <p>优先补辽沈、淮海、平津等解放战争文字资料。</p>
        </article>
        <article className="review-task-card">
          <span>P1 待处理</span>
          <strong>{p1Count}</strong>
          <p>包括缺材料、低证据数或 OCR 候选偏少的条目。</p>
        </article>
        <article className="review-task-card">
          <span>OCR 候选待核</span>
          <strong>{ocrCandidateCount}</strong>
          <p>只用于定位材料，不能直接当最终史实。</p>
        </article>
        <article className="review-task-card">
          <span>未配阶段图</span>
          <strong>{noVisualCount}</strong>
          <p>后续需要补图、筛图，或制作矢量/示意图。</p>
        </article>
      </section>

      <section className="review-package-root">
        <h2>审校包位置</h2>
        <code>{reviewPackageRoot}</code>
        <p>专家或你自己校准时，优先看这里的预填资料卡；网站页面只读取索引和状态，不把 OCR 当最终史实。</p>
      </section>

      <section className="review-package-root">
        <h2>字段校准包</h2>
        <code>{fieldAlignmentPackageRoot}</code>
        <p>默认按历史科普叙述推进；ready 字段可写入页面，weak/shared 字段保留待校准提示，避免把上级条目错配到分战役。</p>
      </section>


      <section className="liberation-atlas-review" aria-label="解放战争图册候选页">
        <div className="liberation-atlas-heading">
          <div>
            <p className="eyebrow">Civil War Atlas Candidates</p>
            <h2>解放战争图册候选页</h2>
            <p>这些是从新图册 OCR 和标题命中里提取的页码候选，只用于审查定位，尚未写入正式史实。</p>
          </div>
          <div className="liberation-atlas-stats" aria-label="图册候选统计">
            <span>强候选 {liberationAtlasCandidateSummary.strong}</span>
            <span>中候选 {liberationAtlasCandidateSummary.medium}</span>
            <span>地图/态势页 {liberationAtlasCandidateSummary.mapLike}</span>
          </div>
        </div>
        <dl className="review-item-paths atlas-review-paths">
          <div>
            <dt>审查包</dt>
            <dd><code>{liberationAtlasReviewRoot}</code></dd>
          </div>
          <div>
            <dt>判定表</dt>
            <dd><code>{liberationAtlasCandidateSummary.reviewTablePath}</code></dd>
          </div>
        </dl>
        <div className="liberation-atlas-grid">
          {liberationAtlasBattleSummaries.map((summary) => {
            const candidates = getLiberationAtlasCandidatesByBattleId(summary.battleId).slice(0, 4);
            return (
              <article className="liberation-atlas-card" key={summary.battleId}>
                <div className="liberation-atlas-card-heading">
                  <div>
                    <p className="review-item-kicker">{summary.battleId}</p>
                    <h3>{summary.battleName}</h3>
                  </div>
                  <span>{summary.total} 页</span>
                </div>
                <div className="review-item-badges">
                  <span className="status-pill status-ready">强 {summary.strong}</span>
                  <span className="status-pill">中 {summary.medium}</span>
                  <span className="status-pill">地图/态势 {summary.mapLike}</span>
                </div>
                <p className="review-next-action">下一步：{getAtlasReviewAction(summary.strong, summary.medium)}</p>
                <div className="atlas-candidate-list">
                  {candidates.map((candidate) => (
                    <div className="atlas-candidate-item" key={`${candidate.battleId}-${candidate.sequence}`}>
                      <div className="atlas-candidate-meta">
                        <strong>扫描页 {candidate.sequence}</strong>
                        <span>{candidate.confidence === "strong" ? "强候选" : "中候选"} / {candidate.pageTypeCandidate}</span>
                      </div>
                      <p>{candidate.titleCandidates[0] ?? candidate.matchedTerms.join("、")}</p>
                      <a className="atlas-candidate-thumb" href={candidate.publicImageUrl} target="_blank" rel="noreferrer">
                        <img loading="lazy" src={candidate.publicImageUrl} alt={`${candidate.battleName} 扫描页 ${candidate.sequence}`} />
                      </a>
                      <small>{candidate.ocrExcerpt}</small>
                      <code>{candidate.publicImageUrl}</code>
                    </div>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <div className="review-war-groups">
        {Object.entries(groupedPackages).map(([warName, packages]) => (
          <section className="review-war-group" key={warName}>
            <div className="review-war-heading">
              <h2>{warName}</h2>
              <span>{packages.length} 个战役</span>
            </div>
            <div className="review-item-list">
              {packages.map((reviewPackage) => {
                const websiteBattleId = getWebsiteBattleId(reviewPackage);
                const priority = getReviewPriority(reviewPackage);
                return (
                  <article className={`review-item review-priority-${priority.toLowerCase()}`} key={reviewPackage.battleId}>
                    <div>
                      <p className="review-item-kicker">{reviewPackage.stageHint}</p>
                      <h3>{reviewPackage.battleName}</h3>
                    </div>
                    <div className="review-item-badges">
                      <span className={`status-pill priority-pill priority-${priority.toLowerCase()}`}>{priority}</span>
                      <span className={reviewPackage.sourceStatus === "prefilled_from_ocr" ? "status-pill status-ready" : "status-pill status-gap"}>
                        {statusLabel[reviewPackage.sourceStatus]}
                      </span>
                      <span className="status-pill">{reviewPackage.confidence}</span>
                      <span className="status-pill">证据 {reviewPackage.evidenceCount}</span>
                      <span className="status-pill">图 {reviewPackage.relatedImageCount} / PDF {reviewPackage.relatedPdfCount}</span>
                    </div>
                    <p className="review-next-action">下一步：{getNextAction(reviewPackage)}</p>
                    <dl className="review-item-paths">
                      <div>
                        <dt>预填卡</dt>
                        <dd><code>{reviewPackage.reviewCardPath}</code></dd>
                      </div>
                      <div>
                        <dt>证据表</dt>
                        <dd><code>{reviewPackage.evidenceCsvPath}</code></dd>
                      </div>
                    </dl>
                    <div className="review-item-actions">
                      {websiteBattleId ? <Link to={`/battles/${websiteBattleId}`}>查看详情页</Link> : null}
                      <span>{reviewPackage.battleId}</span>
                    </div>
                  </article>
                );
              })}
            </div>
          </section>
        ))}
      </div>
    </PageShell>
  );
}

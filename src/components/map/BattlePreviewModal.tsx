import { Link } from "react-router-dom";
import type { Battle } from "../../types/war";
import { getStageById, getWarById } from "../../utils/dataSelectors";

type BattlePreviewModalProps = {
  battle: Battle | null;
  onClose: () => void;
};

export function BattlePreviewModal({ battle, onClose }: BattlePreviewModalProps) {
  if (!battle) return null;

  const war = getWarById(battle.warId);
  const stage = getStageById(battle.stageId);

  return (
    <div className="modal-backdrop" role="presentation" onClick={onClose}>
      <article className="battle-modal" role="dialog" aria-modal="true" aria-labelledby="battle-modal-title" onClick={(event) => event.stopPropagation()}>
        <button className="modal-close" type="button" onClick={onClose} aria-label="关闭战役预览">
          ×
        </button>
        <p className="eyebrow">
          {war?.shortName}
          {stage ? ` / ${stage.label}` : ""}
        </p>
        <h2 id="battle-modal-title">{battle.name}</h2>
        <dl>
          <div>
            <dt>时间</dt>
            <dd>{battle.dateLabel}</dd>
          </div>
          <div>
            <dt>地点</dt>
            <dd>{battle.location}</dd>
          </div>
        </dl>
        <p>{battle.overview}</p>
        <div className="modal-sides">
          <span>{battle.participants.sideA.name}</span>
          <span>vs</span>
          <span>{battle.participants.sideB.name}</span>
        </div>
        <Link className="primary-button" to={`/battles/${battle.id}`}>
          查看完整详情
        </Link>
      </article>
    </div>
  );
}

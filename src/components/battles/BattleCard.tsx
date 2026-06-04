import { Link } from "react-router-dom";
import type { Battle } from "../../types/war";
import { getStageById, getWarById } from "../../utils/dataSelectors";

type BattleCardProps = {
  battle: Battle;
};

export function BattleCard({ battle }: BattleCardProps) {
  const war = getWarById(battle.warId);
  const stage = getStageById(battle.stageId);

  return (
    <article className="battle-card">
      <div className="battle-card-meta">
        <span>{war?.shortName}</span>
        <span>{stage?.label}</span>
      </div>
      <h2>{battle.name}</h2>
      <p>{battle.overview}</p>
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
      <Link to={`/battles/${battle.id}`}>进入详情</Link>
    </article>
  );
}

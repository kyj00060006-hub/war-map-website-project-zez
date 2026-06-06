import type { Battle } from "../../types/war";

type StageBattleListProps = {
  battles: Battle[];
  onSelectBattle: (battle: Battle) => void;
};

export function StageBattleList({ battles, onSelectBattle }: StageBattleListProps) {
  return (
    <aside className="stage-battle-list" aria-label="当前阶段战役列表">
      <div className="panel-heading-row">
        <div>
          <p className="eyebrow">Stage Battles</p>
          <h2>当前阶段战役列表</h2>
        </div>
        <span>{battles.length}</span>
      </div>

      {battles.length ? (
        <div className="stage-battle-items">
          {battles.map((battle) => (
            <button key={battle.id} type="button" onClick={() => onSelectBattle(battle)}>
              <strong>{battle.name}</strong>
              <span>{battle.dateLabel}</span>
              <small>{battle.location}</small>
              <p>{battle.overview}</p>
            </button>
          ))}
        </div>
      ) : (
        <p className="empty-stage-message">当前阶段暂无独立战役条目。</p>
      )}
    </aside>
  );
}

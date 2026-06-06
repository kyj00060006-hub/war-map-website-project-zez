import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { BattleImageTimeline } from "../components/battles/BattleImageTimeline";
import { PageShell } from "../components/layout/PageShell";
import { battleImageTimelineSteps, getImageTimelineStepsByBattleId } from "../data/battleImageTimelines";
import { getBattleById, getWarById } from "../utils/dataSelectors";

const battleIdsWithTimelines = Array.from(new Set(battleImageTimelineSteps.map((step) => step.battleId)));

export function AtlasPage() {
  const [selectedBattleId, setSelectedBattleId] = useState(battleIdsWithTimelines[0] ?? "");
  const timelineSteps = useMemo(() => getImageTimelineStepsByBattleId(selectedBattleId), [selectedBattleId]);
  const selectedBattle = selectedBattleId ? getBattleById(selectedBattleId) : undefined;
  const selectedWar = selectedBattle ? getWarById(selectedBattle.warId) : undefined;

  return (
    <PageShell
      eyebrow="Stage Map Atlas"
      title="阶段图集"
      description="选择一个战役，用底部时间轴切换不同时期地图；右侧同步显示参战双方、关键地点和待校准说明。"
    >
      <section className="atlas-layout">
        <aside className="atlas-selector" aria-label="选择战役">
          <div className="atlas-selector-heading">
            <h2>选择战役</h2>
            <span>{battleIdsWithTimelines.length} 组时间轴</span>
          </div>
          <div className="atlas-battle-list">
            {battleIdsWithTimelines.map((battleId) => {
              const battle = getBattleById(battleId);
              const war = battle ? getWarById(battle.warId) : undefined;
              const stepCount = getImageTimelineStepsByBattleId(battleId).length;
              return (
                <button
                  className={battleId === selectedBattleId ? "active" : ""}
                  key={battleId}
                  onClick={() => setSelectedBattleId(battleId)}
                  type="button"
                >
                  <span>{battle?.name ?? battleId}</span>
                  <small>{war?.shortName ?? "未分类"} / {stepCount} 张阶段图</small>
                </button>
              );
            })}
          </div>
        </aside>

        <section className="atlas-viewer">
          <div className="atlas-viewer-heading">
            <div>
              <p className="eyebrow">{selectedWar?.shortName ?? "Timeline"}</p>
              <h2>{selectedBattle?.name ?? "阶段图"}</h2>
              {selectedBattle ? <p>{selectedBattle.dateLabel} / {selectedBattle.location}</p> : null}
            </div>
            {selectedBattle ? <Link to={`/battles/${selectedBattle.id}`}>进入战役详情</Link> : null}
          </div>
          {timelineSteps.length ? <BattleImageTimeline steps={timelineSteps} /> : <p className="empty-state">暂无阶段图。</p>}
        </section>
      </section>
    </PageShell>
  );
}

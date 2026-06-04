import type { WarId } from "../../types/war";
import { getStagesByWarId } from "../../utils/dataSelectors";
import { wars } from "../../data/wars";

type BattleFiltersProps = {
  selectedWarId: "all" | WarId;
  selectedStageId: "all" | string;
  searchTerm: string;
  onWarChange: (warId: "all" | WarId) => void;
  onStageChange: (stageId: "all" | string) => void;
  onSearchChange: (value: string) => void;
};

export function BattleFilters({
  selectedWarId,
  selectedStageId,
  searchTerm,
  onWarChange,
  onStageChange,
  onSearchChange,
}: BattleFiltersProps) {
  const stages = selectedWarId === "all" ? [] : getStagesByWarId(selectedWarId);

  return (
    <section className="battle-filters" aria-label="战役筛选">
      <label>
        战争
        <select
          value={selectedWarId}
          onChange={(event) => {
            onWarChange(event.target.value as "all" | WarId);
            onStageChange("all");
          }}
        >
          <option value="all">全部战争</option>
          {wars.map((war) => (
            <option key={war.id} value={war.id}>
              {war.shortName}
            </option>
          ))}
        </select>
      </label>
      <label>
        阶段
        <select
          value={selectedStageId}
          onChange={(event) => onStageChange(event.target.value)}
          disabled={selectedWarId === "all"}
        >
          <option value="all">全部阶段</option>
          {stages.map((stage) => (
            <option key={stage.id} value={stage.id}>
              {stage.label}
            </option>
          ))}
        </select>
      </label>
      <label className="search-field">
        搜索
        <input
          value={searchTerm}
          onChange={(event) => onSearchChange(event.target.value)}
          placeholder="战役名称、地点、概述"
        />
      </label>
    </section>
  );
}

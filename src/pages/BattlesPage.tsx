import { useMemo, useState } from "react";
import { BattleCard } from "../components/battles/BattleCard";
import { BattleFilters } from "../components/battles/BattleFilters";
import { PageShell } from "../components/layout/PageShell";
import { battles } from "../data/battles";
import type { WarId } from "../types/war";

export function BattlesPage() {
  const [selectedWarId, setSelectedWarId] = useState<"all" | WarId>("all");
  const [selectedStageId, setSelectedStageId] = useState<"all" | string>("all");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredBattles = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return battles.filter((battle) => {
      const warMatches = selectedWarId === "all" || battle.warId === selectedWarId;
      const stageMatches = selectedStageId === "all" || battle.stageId === selectedStageId;
      const searchMatches =
        !normalizedSearch ||
        [battle.name, battle.location, battle.overview, ...(battle.aliases ?? [])]
          .join(" ")
          .toLowerCase()
          .includes(normalizedSearch);

      return warMatches && stageMatches && searchMatches;
    });
  }, [searchTerm, selectedStageId, selectedWarId]);

  return (
    <PageShell
      eyebrow="Battle Archive"
      title="战役资料库"
      description="按战争和阶段浏览战役卡片。当前内容以历史科普叙述为主，并保留资料来源和图册状态。"
    >
      <BattleFilters
        selectedWarId={selectedWarId}
        selectedStageId={selectedStageId}
        searchTerm={searchTerm}
        onWarChange={setSelectedWarId}
        onStageChange={setSelectedStageId}
        onSearchChange={setSearchTerm}
      />
      <section className="battle-grid" aria-live="polite">
        {filteredBattles.map((battle) => (
          <BattleCard key={battle.id} battle={battle} />
        ))}
      </section>
      {!filteredBattles.length ? <p className="empty-state">没有找到匹配的战役。</p> : null}
    </PageShell>
  );
}

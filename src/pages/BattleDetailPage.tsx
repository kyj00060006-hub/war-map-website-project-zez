import { Link, Navigate, useParams } from "react-router-dom";
import { BattleDetailContent } from "../components/battles/BattleDetailContent";
import { getImageTimelineStepsByBattleId } from "../data/battleImageTimelines";
import { getFieldAlignmentSummaryByBattleId } from "../data/fieldAlignmentStatus";
import { getBattleById, getReviewPackageByBattleId, getVisualSourcesForBattle } from "../utils/dataSelectors";

export function BattleDetailPage() {
  const { battleId } = useParams();
  const battle = battleId ? getBattleById(battleId) : undefined;
  const reviewPackage = battle ? getReviewPackageByBattleId(battle.id) : undefined;
  const fieldAlignment = battle ? getFieldAlignmentSummaryByBattleId(battle.id) : undefined;
  const visualSources = battle ? getVisualSourcesForBattle(battle) : [];
  const imageTimelineSteps = battle ? getImageTimelineStepsByBattleId(battle.id) : [];

  if (!battle) {
    return <Navigate to="/battles" replace />;
  }

  return (
    <main className="detail-page">
      <nav className="detail-actions" aria-label="详情页导航">
        <Link to={`/map?battle=${battle.id}`}>返回地图</Link>
        <Link to="/battles">返回资料库</Link>
      </nav>
      <BattleDetailContent
        battle={battle}
        imageTimelineSteps={imageTimelineSteps}
        reviewPackage={reviewPackage}
        fieldAlignment={fieldAlignment}
        visualSources={visualSources}
      />
    </main>
  );
}

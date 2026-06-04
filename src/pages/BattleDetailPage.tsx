import { Link, Navigate, useParams } from "react-router-dom";
import { BattleDetailContent } from "../components/battles/BattleDetailContent";
import { getBattleById } from "../utils/dataSelectors";

export function BattleDetailPage() {
  const { battleId } = useParams();
  const battle = battleId ? getBattleById(battleId) : undefined;

  if (!battle) {
    return <Navigate to="/battles" replace />;
  }

  return (
    <main className="detail-page">
      <nav className="detail-actions" aria-label="详情页导航">
        <Link to={`/map?battle=${battle.id}`}>返回地图</Link>
        <Link to="/battles">返回资料库</Link>
      </nav>
      <BattleDetailContent battle={battle} />
    </main>
  );
}

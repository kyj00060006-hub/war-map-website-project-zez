import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { wars } from "../../data/wars";

export function WarIndexCards() {
  return (
    <section className="war-index-grid" aria-label="三大战争索引">
      {wars.map((war) => (
        <article key={war.id} className="war-card" style={{ "--accent": war.themeColor } as CSSProperties}>
          <div className="card-kicker">{war.dateRange}</div>
          <h2>{war.shortName}</h2>
          <p>{war.overview}</p>
          <Link to="/map">查看地图阶段</Link>
        </article>
      ))}
    </section>
  );
}

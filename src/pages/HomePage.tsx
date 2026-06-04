import { HeroSection } from "../components/home/HeroSection";
import { WarIndexCards } from "../components/home/WarIndexCards";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <section className="feature-band">
        <div>
          <p className="eyebrow">Core Demo</p>
          <h2>地图优先，资料库支撑，详情页扩展</h2>
        </div>
        <p>
          第一版使用少量示例战役验证架构：战争切换、阶段筛选、战役点位、预览弹窗、详情页与 Vercel SPA 部署适配。
        </p>
      </section>
      <WarIndexCards />
    </main>
  );
}

import { HeroSection } from "../components/home/HeroSection";
import { WarIndexCards } from "../components/home/WarIndexCards";

export function HomePage() {
  return (
    <main>
      <HeroSection />
      <section className="feature-band">
        <div>
          <p className="eyebrow">Research Atlas</p>
          <h2>地图优先，资料库支撑，详情页扩展</h2>
        </div>
        <p>
          本作品围绕战争阶段、战役资料、图册资料和资料来源状态组织内容，形成可浏览、可切换、可对照的历史科普叙述。
        </p>
      </section>
      <WarIndexCards />
    </main>
  );
}

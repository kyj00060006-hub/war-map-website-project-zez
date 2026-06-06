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
          当前版本围绕战争阶段、战役资料、图册候选和字段校准状态组织内容，先形成可浏览的历史科普叙述框架。
        </p>
      </section>
      <WarIndexCards />
    </main>
  );
}

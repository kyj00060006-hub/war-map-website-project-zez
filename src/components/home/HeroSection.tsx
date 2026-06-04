import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Modern Military Sandbox Archive</p>
        <h1>近现代战争时空可视化</h1>
        <p>
          以地图、阶段时间轴、战役资料库和详情页串联抗日战争、解放战争、朝鲜战争 / 抗美援朝的关键战役分布。
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/map">
            进入地图
          </Link>
          <Link className="secondary-button" to="/battles">
            查看战役资料库
          </Link>
        </div>
      </div>
      <div className="hero-panel" aria-label="功能摘要">
        <span>01 多战争切换</span>
        <span>02 阶段级时间轴</span>
        <span>03 战役点位预览</span>
        <span>04 结构化详情页</span>
      </div>
    </section>
  );
}

import { Link } from "react-router-dom";

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="eyebrow">Modern Military Sandbox Archive</p>
        <h1>近现代战争时空可视化</h1>
        <p>
          用阶段图时间轴切换不同时期地图，并同步呈现参战双方、关键地点、兵力与资料校准状态。
        </p>
        <div className="hero-actions">
          <Link className="primary-button" to="/atlas">
            进入阶段图集
          </Link>
          <Link className="secondary-button" to="/map">
            查看战争地图
          </Link>
          <Link className="secondary-button" to="/battles">
            战役资料库
          </Link>
        </div>
      </div>
      <div className="hero-panel" aria-label="功能摘要">
        <span>01 高清阶段图切换</span>
        <span>02 右侧战役数据同步</span>
        <span>03 OCR 预填待校准</span>
        <span>04 地图与资料库联动</span>
      </div>
    </section>
  );
}

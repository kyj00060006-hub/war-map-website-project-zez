import { PageShell } from "../components/layout/PageShell";

export function AboutPage() {
  return (
    <PageShell
      eyebrow="Project Notes"
      title="项目说明"
      description="本项目以历史科普叙述为主，结合地图、时间轴、图册和资料来源状态展示近现代战争进程。"
    >
      <section className="about-grid">
        <article>
          <h2>项目目标</h2>
          <p>通过地图、时间轴、战役资料库和详情页展示三场近现代战争的阶段演变和重要战役分布。</p>
        </article>
        <article>
          <h2>功能说明</h2>
          <p>当前版本支持多页面路由、战争切换、阶段筛选、战役点位预览、资料库筛选和结构化详情。</p>
        </article>
        <article>
          <h2>展示方式</h2>
          <p>网站以战争阶段、战役资料、地图图册和资料来源状态组织内容，便于按时间和空间理解战局变化。</p>
        </article>
        <article>
          <h2>数据来源说明</h2>
          <p>当前内容来自文本资料与图册页整理；兵力、伤亡、起止日期等数字资料项会随来源整理继续完善。</p>
        </article>
        <article>
          <h2>后续改进计划</h2>
          <p>后续可继续补充矢量化态势层、战线变化、势力范围、部队部署、交通线、城市节点和更完整来源页码。</p>
        </article>
      </section>
    </PageShell>
  );
}

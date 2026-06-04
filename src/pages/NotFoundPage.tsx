import { Link } from "react-router-dom";
import { PageShell } from "../components/layout/PageShell";

export function NotFoundPage() {
  return (
    <PageShell eyebrow="404" title="未找到页面" description="这个路线暂时没有对应内容。">
      <Link className="primary-button" to="/map">
        返回战争地图
      </Link>
    </PageShell>
  );
}

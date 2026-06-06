import { NavLink } from "react-router-dom";

const links = [
  { to: "/", label: "首页" },
  { to: "/map", label: "战争地图" },
  { to: "/battles", label: "战役资料库" },
  { to: "/atlas", label: "阶段图集" },
  { to: "/review", label: "审校工作台" },
  { to: "/about", label: "项目说明" },
];

export function SiteHeader() {
  return (
    <header className="site-header">
      <NavLink to="/" className="site-brand" aria-label="近现代战争时空可视化首页">
        <span className="brand-mark" />
        <span>War History Map</span>
      </NavLink>
      <nav className="site-nav" aria-label="主导航">
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} className={({ isActive }) => (isActive ? "active" : "")}>
            {link.label}
          </NavLink>
        ))}
      </nav>
    </header>
  );
}

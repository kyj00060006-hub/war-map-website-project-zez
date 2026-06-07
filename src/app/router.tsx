import { lazy, Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";

const HomePage = lazy(() => import("../pages/HomePage").then((module) => ({ default: module.HomePage })));
const MapPage = lazy(() => import("../pages/MapPage").then((module) => ({ default: module.MapPage })));
const BattlesPage = lazy(() => import("../pages/BattlesPage").then((module) => ({ default: module.BattlesPage })));
const AtlasPage = lazy(() => import("../pages/AtlasPage").then((module) => ({ default: module.AtlasPage })));
const BattleDetailPage = lazy(() =>
  import("../pages/BattleDetailPage").then((module) => ({ default: module.BattleDetailPage })),
);
const AboutPage = lazy(() => import("../pages/AboutPage").then((module) => ({ default: module.AboutPage })));
const NotFoundPage = lazy(() => import("../pages/NotFoundPage").then((module) => ({ default: module.NotFoundPage })));

export function AppRouter() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Suspense fallback={<main className="route-loading">正在载入页面...</main>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/map" element={<MapPage />} />
          <Route path="/battles" element={<BattlesPage />} />
          <Route path="/atlas" element={<AtlasPage />} />
          <Route path="/battles/:battleId" element={<BattleDetailPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
      <SiteFooter />
    </BrowserRouter>
  );
}

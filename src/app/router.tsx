import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { SiteFooter } from "../components/layout/SiteFooter";
import { SiteHeader } from "../components/layout/SiteHeader";
import { AboutPage } from "../pages/AboutPage";
import { BattleDetailPage } from "../pages/BattleDetailPage";
import { BattlesPage } from "../pages/BattlesPage";
import { HomePage } from "../pages/HomePage";
import { MapPage } from "../pages/MapPage";
import { NotFoundPage } from "../pages/NotFoundPage";

export function AppRouter() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/map" element={<MapPage />} />
        <Route path="/battles" element={<BattlesPage />} />
        <Route path="/battles/:battleId" element={<BattleDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/home" element={<Navigate to="/" replace />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <SiteFooter />
    </BrowserRouter>
  );
}

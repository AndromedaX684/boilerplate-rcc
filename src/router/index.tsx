import { Routes, Route } from "react-router-dom";
import HomePage from "@/pages/Home/HomePage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import NavbarLayout from "@/components/layout/Navbar";

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<NavbarLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Route>
    </Routes>
  );
}

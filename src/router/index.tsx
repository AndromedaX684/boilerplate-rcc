import type { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useAuth } from "@clerk/clerk-react";
import HomePage from "@/pages/Home/HomePage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import NavbarLayout from "@/components/layout/Navbar";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoaded, isSignedIn } = useAuth();

  if (!isLoaded) {
    return null;
  }

  return isSignedIn ? <>{children}</> : <Navigate to="/" replace />;
};

export default function AppRouter() {
  return (
    <Routes>
      <Route element={<NavbarLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}

import type { ReactNode } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { useConvexAuth } from "convex/react";
import HomePage from "@/pages/Home/HomePage";
import DashboardPage from "@/pages/Dashboard/DashboardPage";
import NavbarLayout from "@/components/layout/Navbar";
import NotFoundPage from "@/pages/NotFound/NotFoundPage";
import { Spinner } from "@/components/ui/spinner";

const ProtectedRoute = ({ children }: { children: ReactNode }) => {
  const { isLoading, isAuthenticated } = useConvexAuth();

  if (isLoading) {
    return (
      <div className="flex flex-1 items-center justify-center py-10">
        <Spinner className="size-6" />
      </div>
    );
  }

  return isAuthenticated ? <>{children}</> : <Navigate to="/" replace />;
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
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

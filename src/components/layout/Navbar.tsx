import { useState } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { SignIn, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

export default function NavbarLayout() {
  const [showSignIn, setShowSignIn] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const getVariant = (path: string) =>
    location.pathname === path ? "default" : "outline";

  return (
    <div className="flex min-h-screen flex-col">
      <header className="flex items-center justify-between border-b p-4">
        <nav className="flex gap-3">
          <Button variant={getVariant("/")} onClick={() => navigate("/")}>
            Home
          </Button>
          <Button
            variant={getVariant("/dashboard")}
            onClick={() => navigate("/dashboard")}
          >
            Dashboard
          </Button>
        </nav>
        <div className="flex items-center gap-3">
          <Unauthenticated>
            <Button onClick={() => setShowSignIn((value) => !value)}>
              {showSignIn ? "Close" : "Login"}
            </Button>
          </Unauthenticated>
          <Authenticated>
            <UserButton />
          </Authenticated>
          <AuthLoading>
            <Spinner />
          </AuthLoading>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6 p-8">
        <Unauthenticated>
          {showSignIn && (
            <div className="max-w-sm">
              <SignIn />
            </div>
          )}
        </Unauthenticated>
        <Authenticated>
          <div className="text-foreground">
            You are signed in. Replace this area with your dashboard content.
          </div>
        </Authenticated>
        <Outlet />
      </main>
    </div>
  );
}

import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, Unauthenticated, AuthLoading } from "convex/react";
import { Button } from "../ui/button";
import { Spinner } from "../ui/spinner";

export default function NavbarLayout() {
  const navigate = useNavigate();
  const location = useLocation();

  const getVariant = (path: string) =>
    location.pathname === path ? "default" : "outline";

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 flex items-center justify-between border-b shadow-md p-4">
        <div className="w-full flex items-center">
          <Unauthenticated>
            <div className="flex w-full items-center">
              <SignInButton mode="modal">
                <Button variant="default" className="ml-auto">
                  Sign In
                </Button>
              </SignInButton>
            </div>
          </Unauthenticated>

          <Authenticated>
            <div className="flex w-full items-center justify-between">
              {/* Left side */}
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

              {/* Right side */}
              <UserButton />
            </div>
          </Authenticated>

          <AuthLoading>
            <Spinner />
          </AuthLoading>
        </div>
      </header>
      <main className="flex flex-1 flex-col gap-6">
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

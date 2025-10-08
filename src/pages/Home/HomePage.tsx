import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Footer from "./components/footer";

export default function HomePage() {
  const navigate = useNavigate();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Home</h1>
      <p className="text-muted-foreground">
        This is a simple home page to help test the router setup.
      </p>
      <Button onClick={() => navigate("/dashboard")}>Go to Dashboard</Button>
      <Footer />
    </section>
  );
}

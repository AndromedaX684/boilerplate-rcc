import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  const navigate = useNavigate();

  return (
    <section className="space-y-4">
      <h1 className="text-3xl font-semibold">Dashboard</h1>
      <p className="text-muted-foreground">
        This is a placeholder dashboard view for verifying navigation.
      </p>
      <Button onClick={() => navigate("/")}>Back to Home</Button>
    </section>
  );
}

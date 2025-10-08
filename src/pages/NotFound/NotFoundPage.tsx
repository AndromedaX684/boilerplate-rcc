import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-6 text-center p-6">
      <h1 className="text-3xl font-semibold">
        These are not the droids you are looking for...
      </h1>
      <p className="max-w-xl text-muted-foreground">
        For one reason or another, this page is missing and returned a 404 error.
        Please let me know if something is wrong or go back home.
      </p>
      <Button onClick={() => navigate("/")}>Go back home</Button>
      <span className="text-sm text-muted-foreground uppercase tracking-wide">
        404
      </span>
    </div>
  );
}

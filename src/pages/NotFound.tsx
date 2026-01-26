import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-screen bg-hero-gradient flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-foreground mb-4">404</h1>
        <p className="text-xl text-muted-foreground mb-8">Page not found</p>
        <Link to="/">
          <Button variant="chrome" className="rounded-full px-6">
            Return Home
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

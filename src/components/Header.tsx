import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
      <Link to="/" className="text-xl font-semibold tracking-tight text-foreground">
        Studio Eight
      </Link>
      <nav className="hidden md:flex items-center gap-8">
        <Link 
          to="/for-businesses" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          For Businesses
        </Link>
        <Link 
          to="/for-creators" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          For Creators
        </Link>
        <a 
          href="#" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          In-House
        </a>
        <Link 
          to="/contact" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </Link>
      </nav>
      <Link to="/contact">
        <Button 
          variant="default" 
          className="rounded-full px-6 font-medium"
        >
          Book a Call
        </Button>
      </Link>
    </header>
  );
};

export default Header;

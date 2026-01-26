import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { NavLink } from "@/components/NavLink";
import Logo from "@/components/Logo";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
      <Logo />
      <nav className="hidden md:flex items-center gap-8">
        <NavLink 
          to="/for-businesses" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors relative py-1"
          activeClassName="text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground/60 after:rounded-full"
        >
          For Businesses
        </NavLink>
        <NavLink 
          to="/for-creators" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors relative py-1"
          activeClassName="text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground/60 after:rounded-full"
        >
          For Creators
        </NavLink>
        <NavLink 
          to="/our-apps" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors relative py-1"
          activeClassName="text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground/60 after:rounded-full"
        >
          Our Apps
        </NavLink>
        <NavLink 
          to="/contact" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors relative py-1"
          activeClassName="text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-foreground/60 after:rounded-full"
        >
          Contact
        </NavLink>
      </nav>
      <Link to="/contact">
        <Button 
          variant="chrome" 
          className="rounded-full px-6"
        >
          Let's work
        </Button>
      </Link>
    </header>
  );
};

export default Header;

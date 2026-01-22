import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
      <Link to="/" className="text-xl font-medium tracking-tight text-foreground">
        Studio Eight
      </Link>
      <nav className="flex items-center gap-8">
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
    </header>
  );
};

export default Header;

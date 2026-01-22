const Header = () => {
  return (
    <header className="flex items-center justify-between px-6 md:px-12 lg:px-24 py-6">
      <div className="text-xl font-medium tracking-tight text-foreground">
        Studio Eight
      </div>
      <nav className="flex items-center gap-8">
        <a 
          href="#" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          In-House
        </a>
        <a 
          href="#" 
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default Header;

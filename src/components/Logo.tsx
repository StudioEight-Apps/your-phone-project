import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 text-foreground hover:opacity-90 transition-opacity">
      {/* Stylized leaning "8" icon */}
      <svg 
        viewBox="0 0 40 60" 
        className="w-6 h-9 text-foreground"
        fill="none"
        aria-hidden="true"
      >
        {/* Upper loop */}
        <ellipse 
          cx="20" 
          cy="18" 
          rx="12" 
          ry="14" 
          stroke="currentColor" 
          strokeWidth="2.5"
          fill="none"
          transform="rotate(-12 20 18)"
        />
        {/* Lower loop */}
        <ellipse 
          cx="20" 
          cy="44" 
          rx="14" 
          ry="12" 
          stroke="currentColor" 
          strokeWidth="2.5"
          fill="none"
          transform="rotate(12 20 44)"
        />
      </svg>
      <span className="text-xl font-semibold tracking-tight">Studio Eight</span>
    </Link>
  );
};

export default Logo;

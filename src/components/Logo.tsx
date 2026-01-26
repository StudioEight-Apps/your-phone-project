import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
      {/* Stylized 8 / Infinity Symbol */}
      <svg 
        width="32" 
        height="32" 
        viewBox="0 0 100 100" 
        fill="none" 
        className="w-8 h-8"
      >
        <path
          d="M50 45C50 45 35 30 22 30C12 30 5 38 5 50C5 62 12 70 22 70C35 70 50 55 50 55C50 55 65 70 78 70C88 70 95 62 95 50C95 38 88 30 78 30C65 30 50 45 50 45Z"
          stroke="currentColor"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-foreground"
          fill="none"
        />
      </svg>
      <span className="text-lg font-semibold tracking-tight text-foreground">
        Studio Eight
      </span>
    </Link>
  );
};

export default Logo;

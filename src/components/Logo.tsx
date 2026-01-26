import { Link } from "react-router-dom";
import studioEightLogo from "@/assets/studio-eight-logo.png";

const Logo = () => {
  return (
    <Link to="/" className="flex items-center hover:opacity-90 transition-opacity">
      <img 
        src={studioEightLogo} 
        alt="Studio Eight" 
        className="h-10 w-auto"
      />
    </Link>
  );
};

export default Logo;

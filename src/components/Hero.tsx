import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 lg:py-24 min-h-[calc(100vh-88px)] overflow-hidden">
      {/* Background decorative "8" curves */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none w-[800px] h-[900px] md:w-[1000px] md:h-[1100px] lg:w-[1200px] lg:h-[1300px]"
        style={{ right: '-10%' }}
        aria-hidden="true"
      >
        <svg 
          viewBox="0 0 600 700" 
          fill="none" 
          className="w-full h-full"
          style={{ opacity: 0.06 }}
        >
          {/* Upper loop of the 8 */}
          <ellipse 
            cx="350" 
            cy="200" 
            rx="180" 
            ry="160" 
            stroke="currentColor" 
            strokeWidth="0.8"
            className="text-foreground"
            fill="none"
            transform="rotate(-15 350 200)"
          />
          <ellipse 
            cx="350" 
            cy="200" 
            rx="220" 
            ry="190" 
            stroke="currentColor" 
            strokeWidth="0.5"
            className="text-foreground"
            fill="none"
            transform="rotate(-12 350 200)"
          />
          <ellipse 
            cx="350" 
            cy="200" 
            rx="260" 
            ry="220" 
            stroke="currentColor" 
            strokeWidth="0.3"
            className="text-foreground"
            fill="none"
            transform="rotate(-10 350 200)"
          />
          
          {/* Lower loop of the 8 */}
          <ellipse 
            cx="320" 
            cy="500" 
            rx="200" 
            ry="170" 
            stroke="currentColor" 
            strokeWidth="0.8"
            className="text-foreground"
            fill="none"
            transform="rotate(15 320 500)"
          />
          <ellipse 
            cx="320" 
            cy="500" 
            rx="240" 
            ry="200" 
            stroke="currentColor" 
            strokeWidth="0.5"
            className="text-foreground"
            fill="none"
            transform="rotate(12 320 500)"
          />
          <ellipse 
            cx="320" 
            cy="500" 
            rx="280" 
            ry="230" 
            stroke="currentColor" 
            strokeWidth="0.3"
            className="text-foreground"
            fill="none"
            transform="rotate(10 320 500)"
          />
        </svg>
      </div>

      {/* Left content */}
      <div className="flex flex-col gap-6 max-w-xl mb-12 lg:mb-0 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold leading-tight tracking-tight text-foreground">
          AI-powered apps
          <br />
          for modern brands.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
          We design and build intelligent products that create direct, durable relationships with users.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Link to="/contact">
            <Button 
              variant="chrome" 
              size="lg"
              className="rounded-full px-8 py-6 text-base"
            >
              Let's work
            </Button>
          </Link>
          <Link to="/for-businesses">
            <Button 
              variant="outline" 
              size="lg"
              className="rounded-full px-8 py-6 text-base font-medium border-muted-foreground/30 hover:bg-secondary"
            >
              See How It Works
            </Button>
          </Link>
        </div>
      </div>

      {/* Right content - Phone mockup */}
      <div className="flex-shrink-0 z-10 relative">
        <div 
          className="absolute inset-0 -inset-x-20 -inset-y-10"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 50%, transparent 70%)',
            filter: 'blur(40px)',
          }}
        />
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;

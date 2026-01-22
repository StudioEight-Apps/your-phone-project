import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 lg:py-24 min-h-[calc(100vh-88px)] overflow-hidden">
      
      {/* Base background - warm off-white */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'hsl(40 20% 96%)',
        }}
      />

      {/* Subtle radial gradient - darker at edges, lighter behind phone */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 70% 80% at 65% 50%, transparent 0%, rgba(180, 170, 160, 0.15) 60%, rgba(160, 150, 140, 0.25) 100%)',
        }}
      />

      {/* Film grain overlay */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Studio Eight "8" SVG watermark */}
      <svg 
        className="absolute pointer-events-none select-none"
        style={{
          right: '-5%',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '700px',
          height: '900px',
          opacity: 0.08,
          mixBlendMode: 'multiply',
          filter: 'blur(3px)',
        }}
        viewBox="0 0 200 320"
        fill="none"
        aria-hidden="true"
      >
        {/* Upper loop of the 8 */}
        <ellipse 
          cx="100" 
          cy="85" 
          rx="65" 
          ry="70" 
          stroke="rgb(120, 115, 110)" 
          strokeWidth="8"
          fill="none"
        />
        {/* Lower loop of the 8 (slightly larger) */}
        <ellipse 
          cx="100" 
          cy="230" 
          rx="75" 
          ry="80" 
          stroke="rgb(120, 115, 110)" 
          strokeWidth="8"
          fill="none"
        />
      </svg>

      {/* Left content */}
      <div className="flex flex-col gap-6 max-w-xl mb-12 lg:mb-0 z-10">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-tight tracking-tight text-foreground">
          AI-powered apps
          <br />
          for modern brands.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
          We design and build intelligent products that create direct, durable relationships with users.
        </p>
        <div className="mt-2">
          <Button 
            variant="default" 
            size="lg"
            className="rounded-full px-8 py-6 text-base font-medium"
          >
            Work with Studio Eight
          </Button>
        </div>
      </div>

      {/* Right content - Phone with layered depth shadows */}
      <div className="flex-shrink-0 z-10 relative">
        {/* Outer halo shadow - large, soft */}
        <div 
          className="absolute -inset-32"
          style={{
            background: 'radial-gradient(ellipse 65% 60% at 50% 52%, rgba(60, 55, 50, 0.18) 0%, rgba(80, 75, 70, 0.08) 50%, transparent 80%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Tight dark shadow - directly behind phone */}
        <div 
          className="absolute -inset-8"
          style={{
            background: 'radial-gradient(ellipse 90% 85% at 50% 54%, rgba(30, 28, 25, 0.35) 0%, rgba(40, 38, 35, 0.15) 45%, transparent 75%)',
            filter: 'blur(25px)',
          }}
        />
        {/* Bottom drop shadow - grounding */}
        <div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[95%] h-28"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(25, 22, 20, 0.4) 0%, rgba(40, 38, 35, 0.15) 50%, transparent 80%)',
            filter: 'blur(22px)',
          }}
        />
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;

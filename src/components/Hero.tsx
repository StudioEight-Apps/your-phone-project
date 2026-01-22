import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 lg:py-24 min-h-[calc(100vh-88px)] overflow-hidden">
      {/* Background "8" - atmospheric, blurred */}
      <div 
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 pointer-events-none select-none"
        aria-hidden="true"
      >
        <span 
          className="text-[600px] md:text-[800px] lg:text-[1000px] font-bold text-foreground leading-none block"
          style={{ 
            opacity: 0.04,
            filter: 'blur(8px)',
            fontFamily: 'Inter, sans-serif',
            fontWeight: 600
          }}
        >
          8
        </span>
      </div>

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

      {/* Right content - Phone mockup */}
      <div className="flex-shrink-0 z-10">
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;

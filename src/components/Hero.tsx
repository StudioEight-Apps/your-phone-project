import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 lg:py-24 min-h-[calc(100vh-88px)] overflow-hidden">
      {/* Background "8" formed through shadow and depth - upper loop */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '5%',
          top: '8%',
          width: '500px',
          height: '420px',
        }}
        aria-hidden="true"
      >
        {/* Outer shadow layer */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse 100% 90% at 50% 50%, rgba(120, 110, 100, 0.06) 0%, rgba(100, 90, 80, 0.03) 40%, transparent 70%)',
            filter: 'blur(50px)',
            transform: 'rotate(-12deg)',
          }}
        />
        {/* Mid shadow layer */}
        <div 
          className="absolute inset-[15%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 100% 85% at 50% 50%, rgba(80, 75, 70, 0.08) 0%, rgba(90, 85, 80, 0.04) 50%, transparent 75%)',
            filter: 'blur(35px)',
            transform: 'rotate(-8deg)',
          }}
        />
        {/* Inner depth */}
        <div 
          className="absolute inset-[30%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(60, 55, 50, 0.05) 0%, transparent 60%)',
            filter: 'blur(25px)',
          }}
        />
      </div>

      {/* Background "8" - lower loop */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '0%',
          top: '45%',
          width: '550px',
          height: '480px',
        }}
        aria-hidden="true"
      >
        {/* Outer shadow layer */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse 95% 100% at 50% 50%, rgba(110, 100, 90, 0.07) 0%, rgba(90, 85, 75, 0.035) 45%, transparent 72%)',
            filter: 'blur(55px)',
            transform: 'rotate(10deg)',
          }}
        />
        {/* Mid shadow layer */}
        <div 
          className="absolute inset-[12%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 90% 95% at 50% 50%, rgba(75, 70, 65, 0.09) 0%, rgba(85, 80, 75, 0.045) 50%, transparent 78%)',
            filter: 'blur(40px)',
            transform: 'rotate(6deg)',
          }}
        />
        {/* Inner depth */}
        <div 
          className="absolute inset-[28%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(55, 50, 45, 0.06) 0%, transparent 65%)',
            filter: 'blur(28px)',
          }}
        />
      </div>

      {/* Connection shadow between loops */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '12%',
          top: '35%',
          width: '280px',
          height: '200px',
        }}
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% 50%, rgba(90, 85, 80, 0.05) 0%, transparent 60%)',
            filter: 'blur(45px)',
            transform: 'rotate(-5deg)',
          }}
        />
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

      {/* Right content - Phone mockup with enhanced shadow field */}
      <div className="flex-shrink-0 z-10 relative">
        {/* Outer ambient glow */}
        <div 
          className="absolute -inset-32"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(100, 95, 88, 0.12) 0%, rgba(90, 85, 80, 0.06) 35%, rgba(80, 75, 70, 0.02) 60%, transparent 80%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Mid shadow layer */}
        <div 
          className="absolute -inset-20"
          style={{
            background: 'radial-gradient(ellipse 65% 55% at 50% 52%, rgba(70, 65, 60, 0.14) 0%, rgba(60, 55, 50, 0.07) 40%, transparent 70%)',
            filter: 'blur(35px)',
          }}
        />
        {/* Close shadow for floating effect */}
        <div 
          className="absolute -inset-10"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 55%, rgba(50, 45, 42, 0.1) 0%, rgba(40, 38, 35, 0.04) 50%, transparent 75%)',
            filter: 'blur(25px)',
          }}
        />
        {/* Bottom shadow for grounding */}
        <div 
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[80%] h-24"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(45, 42, 38, 0.15) 0%, transparent 70%)',
            filter: 'blur(20px)',
          }}
        />
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;

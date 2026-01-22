import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 lg:py-24 min-h-[calc(100vh-88px)] overflow-hidden">
      
      {/* Base background - warm gray gradient */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, hsl(30 12% 92%) 0%, hsl(28 10% 88%) 100%)',
        }}
      />

      {/* THE "8" - Upper loop - soft cream dimensional shape */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '12%',
          top: '2%',
          width: '380px',
          height: '340px',
        }}
        aria-hidden="true"
      >
        {/* Outer glow - cream highlight */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse 100% 90% at 50% 50%, rgba(255, 252, 248, 0.7) 0%, rgba(250, 248, 244, 0.4) 40%, transparent 70%)',
            filter: 'blur(40px)',
            transform: 'rotate(-8deg)',
          }}
        />
        {/* Inner soft shape */}
        <div 
          className="absolute inset-[10%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 95% 85% at 50% 50%, rgba(255, 253, 250, 0.5) 0%, rgba(252, 250, 246, 0.25) 50%, transparent 75%)',
            filter: 'blur(25px)',
            transform: 'rotate(-5deg)',
          }}
        />
      </div>

      {/* THE "8" - Lower loop - larger, soft cream dimensional shape */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '5%',
          top: '35%',
          width: '480px',
          height: '420px',
        }}
        aria-hidden="true"
      >
        {/* Outer glow - cream highlight */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse 95% 100% at 50% 50%, rgba(255, 253, 250, 0.65) 0%, rgba(250, 248, 244, 0.35) 45%, transparent 72%)',
            filter: 'blur(45px)',
            transform: 'rotate(5deg)',
          }}
        />
        {/* Inner soft shape */}
        <div 
          className="absolute inset-[8%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 90% 95% at 50% 50%, rgba(255, 254, 252, 0.45) 0%, rgba(252, 250, 248, 0.2) 55%, transparent 78%)',
            filter: 'blur(30px)',
            transform: 'rotate(3deg)',
          }}
        />
      </div>

      {/* Subtle edge shadows on the "8" for depth */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '8%',
          top: '20%',
          width: '500px',
          height: '550px',
        }}
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 60% 50% at 65% 30%, transparent 40%, rgba(180, 170, 160, 0.08) 70%, transparent 90%)',
            filter: 'blur(30px)',
          }}
        />
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 55% 60% at 55% 75%, transparent 35%, rgba(170, 160, 150, 0.1) 65%, transparent 88%)',
            filter: 'blur(35px)',
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

      {/* Right content - Phone with strong shadow */}
      <div className="flex-shrink-0 z-10 relative">
        {/* Wide ambient shadow */}
        <div 
          className="absolute -inset-32"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 55%, rgba(120, 110, 100, 0.15) 0%, rgba(100, 90, 80, 0.08) 40%, transparent 70%)',
            filter: 'blur(50px)',
          }}
        />
        {/* Medium spread shadow */}
        <div 
          className="absolute -inset-20"
          style={{
            background: 'radial-gradient(ellipse 75% 65% at 50% 55%, rgba(80, 72, 65, 0.2) 0%, rgba(90, 82, 75, 0.1) 45%, transparent 75%)',
            filter: 'blur(35px)',
          }}
        />
        {/* Tight contact shadow */}
        <div 
          className="absolute -inset-8"
          style={{
            background: 'radial-gradient(ellipse 90% 80% at 50% 55%, rgba(50, 45, 40, 0.18) 0%, rgba(60, 55, 50, 0.08) 50%, transparent 75%)',
            filter: 'blur(20px)',
          }}
        />
        {/* Bottom drop shadow - strong grounding */}
        <div 
          className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[85%] h-20"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(40, 35, 30, 0.25) 0%, rgba(60, 55, 50, 0.1) 50%, transparent 80%)',
            filter: 'blur(15px)',
          }}
        />
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;

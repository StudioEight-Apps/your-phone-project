import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 lg:py-24 min-h-[calc(100vh-88px)] overflow-hidden">
      
      {/* Base background - warm neutral */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, hsl(35 10% 93%) 0%, hsl(30 8% 89%) 100%)',
        }}
      />

      {/* THE "8" - Upper loop shadow band */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '5%',
          top: '0%',
          width: '500px',
          height: '400px',
        }}
        aria-hidden="true"
      >
        {/* Outer curved shadow - forms upper arc */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 180deg at 50% 60%, transparent 0deg, rgba(70, 62, 55, 0.06) 60deg, rgba(60, 52, 45, 0.08) 120deg, rgba(70, 62, 55, 0.06) 180deg, transparent 240deg, transparent 360deg)',
            filter: 'blur(140px)',
            transform: 'rotate(-15deg) scaleX(1.3)',
          }}
        />
        {/* Inner depth shadow */}
        <div 
          className="absolute inset-[15%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 90% 80% at 50% 55%, transparent 30%, rgba(55, 48, 42, 0.05) 60%, transparent 85%)',
            filter: 'blur(120px)',
          }}
        />
      </div>

      {/* THE "8" - Lower loop shadow band (larger) */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '-2%',
          top: '35%',
          width: '580px',
          height: '480px',
        }}
        aria-hidden="true"
      >
        {/* Outer curved shadow - forms lower arc */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'conic-gradient(from 0deg at 50% 45%, transparent 0deg, rgba(65, 58, 50, 0.07) 70deg, rgba(55, 48, 42, 0.08) 140deg, rgba(65, 58, 50, 0.06) 200deg, transparent 270deg, transparent 360deg)',
            filter: 'blur(150px)',
            transform: 'rotate(10deg) scaleX(1.25)',
          }}
        />
        {/* Inner depth shadow */}
        <div 
          className="absolute inset-[12%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 85% 90% at 50% 50%, transparent 25%, rgba(50, 44, 38, 0.055) 55%, transparent 80%)',
            filter: 'blur(130px)',
          }}
        />
      </div>

      {/* Connection shadow - waist of the 8 */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '12%',
          top: '32%',
          width: '280px',
          height: '220px',
        }}
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 60% at 50% 50%, rgba(60, 54, 48, 0.065) 0%, transparent 70%)',
            filter: 'blur(100px)',
          }}
        />
      </div>

      {/* Ambient light pushing through - makes 8 readable */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '8%',
          top: '10%',
          width: '400px',
          height: '320px',
        }}
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 55%, rgba(255, 253, 250, 0.25) 0%, transparent 55%)',
            filter: 'blur(80px)',
          }}
        />
      </div>
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '2%',
          top: '45%',
          width: '450px',
          height: '380px',
        }}
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 50% 50%, rgba(255, 254, 252, 0.22) 0%, transparent 50%)',
            filter: 'blur(90px)',
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

      {/* Right content - Phone with layered depth shadows */}
      <div className="flex-shrink-0 z-10 relative">
        {/* Outer atmospheric shadow - very large, light */}
        <div 
          className="absolute -inset-48"
          style={{
            background: 'radial-gradient(ellipse 60% 55% at 50% 52%, rgba(90, 80, 72, 0.12) 0%, rgba(80, 72, 65, 0.06) 45%, transparent 75%)',
            filter: 'blur(80px)',
          }}
        />
        {/* Mid shadow - reinforces 8 edge */}
        <div 
          className="absolute -inset-32"
          style={{
            background: 'radial-gradient(ellipse 70% 62% at 50% 54%, rgba(70, 62, 55, 0.16) 0%, rgba(60, 54, 48, 0.08) 40%, transparent 70%)',
            filter: 'blur(55px)',
          }}
        />
        {/* Close shadow - darker, tighter */}
        <div 
          className="absolute -inset-16"
          style={{
            background: 'radial-gradient(ellipse 80% 70% at 50% 55%, rgba(50, 44, 40, 0.22) 0%, rgba(55, 50, 45, 0.1) 45%, transparent 72%)',
            filter: 'blur(35px)',
          }}
        />
        {/* Tight edge shadow */}
        <div 
          className="absolute -inset-6"
          style={{
            background: 'radial-gradient(ellipse 95% 85% at 50% 54%, rgba(40, 36, 32, 0.15) 0%, rgba(45, 40, 36, 0.06) 50%, transparent 70%)',
            filter: 'blur(18px)',
          }}
        />
        {/* Bottom drop shadow - grounding */}
        <div 
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[90%] h-24"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(35, 32, 28, 0.28) 0%, rgba(50, 45, 40, 0.12) 45%, transparent 75%)',
            filter: 'blur(20px)',
          }}
        />
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;

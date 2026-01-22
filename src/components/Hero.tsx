import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 lg:py-24 min-h-[calc(100vh-88px)] overflow-hidden">
      
      {/* Background gradient - off-white to warm gray with directional lighting */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, hsl(40 25% 97%) 0%, hsl(35 18% 94%) 40%, hsl(30 15% 90%) 100%)',
        }}
      />
      
      {/* Vignette for depth - edges darker, center lighter */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 55% 50%, transparent 30%, rgba(90, 80, 70, 0.06) 70%, rgba(70, 60, 50, 0.12) 100%)',
        }}
      />
      
      {/* Directional light from top-left */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 50%, rgba(60,55,50,0.04) 100%)',
        }}
      />

      {/* THE "8" - Upper loop shadow mass */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '8%',
          top: '5%',
          width: '420px',
          height: '380px',
        }}
        aria-hidden="true"
      >
        {/* Core shadow mass */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse 90% 85% at 45% 50%, rgba(75, 65, 55, 0.12) 0%, rgba(85, 75, 65, 0.07) 35%, rgba(95, 85, 75, 0.03) 60%, transparent 80%)',
            filter: 'blur(40px)',
            transform: 'rotate(-10deg)',
          }}
        />
        {/* Inner depth */}
        <div 
          className="absolute inset-[20%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 40% 50%, rgba(55, 48, 42, 0.1) 0%, rgba(65, 58, 52, 0.05) 50%, transparent 75%)',
            filter: 'blur(30px)',
            transform: 'rotate(-8deg)',
          }}
        />
        {/* Light falloff on shadow edge */}
        <div 
          className="absolute inset-[-10%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 100% 90% at 55% 45%, transparent 40%, rgba(100, 90, 80, 0.04) 70%, transparent 90%)',
            filter: 'blur(50px)',
          }}
        />
      </div>

      {/* THE "8" - Lower loop shadow mass (larger, behind phone) */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '2%',
          top: '38%',
          width: '500px',
          height: '450px',
        }}
        aria-hidden="true"
      >
        {/* Core shadow mass */}
        <div 
          className="absolute inset-0 rounded-full"
          style={{
            background: 'radial-gradient(ellipse 85% 95% at 50% 55%, rgba(65, 58, 50, 0.14) 0%, rgba(80, 72, 62, 0.08) 40%, rgba(95, 88, 78, 0.035) 65%, transparent 85%)',
            filter: 'blur(45px)',
            transform: 'rotate(8deg)',
          }}
        />
        {/* Inner depth - darker center */}
        <div 
          className="absolute inset-[18%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse at 55% 55%, rgba(50, 44, 38, 0.12) 0%, rgba(60, 54, 48, 0.06) 45%, transparent 70%)',
            filter: 'blur(32px)',
            transform: 'rotate(5deg)',
          }}
        />
        {/* Fog/atmosphere around loop */}
        <div 
          className="absolute inset-[-15%] rounded-full"
          style={{
            background: 'radial-gradient(ellipse 110% 100% at 45% 60%, transparent 35%, rgba(90, 82, 72, 0.045) 65%, transparent 88%)',
            filter: 'blur(55px)',
          }}
        />
      </div>

      {/* THE "8" - Connection/waist between loops */}
      <div 
        className="absolute pointer-events-none select-none"
        style={{ 
          right: '15%',
          top: '32%',
          width: '200px',
          height: '180px',
        }}
        aria-hidden="true"
      >
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 70% at 50% 50%, rgba(70, 62, 55, 0.09) 0%, rgba(80, 72, 65, 0.04) 50%, transparent 75%)',
            filter: 'blur(35px)',
            transform: 'rotate(-3deg)',
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

      {/* Right content - Phone with layered shadow system */}
      <div className="flex-shrink-0 z-10 relative">
        {/* Outer atmospheric glow - soft, wide */}
        <div 
          className="absolute -inset-40"
          style={{
            background: 'radial-gradient(ellipse 65% 55% at 50% 52%, rgba(85, 75, 65, 0.1) 0%, rgba(75, 68, 58, 0.05) 40%, transparent 70%)',
            filter: 'blur(60px)',
          }}
        />
        {/* Mid shadow - medium spread */}
        <div 
          className="absolute -inset-24"
          style={{
            background: 'radial-gradient(ellipse 70% 60% at 50% 54%, rgba(60, 52, 45, 0.14) 0%, rgba(70, 62, 55, 0.07) 45%, transparent 75%)',
            filter: 'blur(40px)',
          }}
        />
        {/* Tight shadow - close to phone edges */}
        <div 
          className="absolute -inset-12"
          style={{
            background: 'radial-gradient(ellipse 85% 75% at 50% 55%, rgba(45, 40, 35, 0.16) 0%, rgba(55, 50, 45, 0.08) 40%, transparent 70%)',
            filter: 'blur(25px)',
          }}
        />
        {/* Edge shadow - creates separation */}
        <div 
          className="absolute -inset-4"
          style={{
            background: 'radial-gradient(ellipse 95% 90% at 50% 52%, rgba(35, 32, 28, 0.08) 0%, transparent 60%)',
            filter: 'blur(12px)',
          }}
        />
        {/* Bottom drop shadow - grounding */}
        <div 
          className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-[70%] h-16"
          style={{
            background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(40, 35, 30, 0.2) 0%, rgba(50, 45, 40, 0.08) 40%, transparent 70%)',
            filter: 'blur(18px)',
          }}
        />
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;

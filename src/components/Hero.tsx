import { Button } from "@/components/ui/button";
import PhoneMockup from "./PhoneMockup";

const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-12 lg:px-24 py-12 lg:py-24 min-h-[calc(100vh-88px)]">
      {/* Left content */}
      <div className="flex flex-col gap-6 max-w-xl mb-12 lg:mb-0">
        <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-medium leading-tight tracking-tight text-foreground">
          AI-powered apps
          <br />
          for modern brands.
        </h1>
        <p className="text-lg text-muted-foreground leading-relaxed max-w-md">
          We design and build intelligent products that create direct, durable relationships with users.
        </p>
        <div className="mt-2">
          <Button variant="hero" size="lg">
            Work with Studio Eight
          </Button>
        </div>
      </div>

      {/* Right content - Phone mockup */}
      <div className="flex-shrink-0">
        <PhoneMockup />
      </div>
    </section>
  );
};

export default Hero;

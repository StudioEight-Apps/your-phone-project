import { MessageSquare, Palette, Code, Rocket } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ProcessSection = () => {
  const steps = [
    {
      number: "01",
      icon: MessageSquare,
      title: "Discovery",
      description: "We go through discovery specific to your industry and define your customer's ideal user experience.",
    },
    {
      number: "02",
      icon: Palette,
      title: "Design",
      description: "Crafting intuitive interfaces and experiences that resonate with your users.",
    },
    {
      number: "03",
      icon: Code,
      title: "Development",
      description: "Building robust, scalable solutions with clean code and best practices.",
    },
    {
      number: "04",
      icon: Rocket,
      title: "Launch",
      description: "Deploying your product and ensuring everything runs smoothly from day one.",
    },
  ];

  return (
    <section className="px-6 md:px-12 lg:px-24 py-20 lg:py-32 border-t border-border">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-semibold text-foreground mb-4">
            Our Process
          </h2>
          <p className="text-lg text-muted-foreground max-w-xl mx-auto">
            We build products that give you a competitive advantage in your industry.
          </p>
        </div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6 mb-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              {/* Icon with number badge */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-full bg-secondary/50 border border-neon/20 flex items-center justify-center hover:border-neon/40 transition-colors">
                  <step.icon className="w-8 h-8 text-neon" />
                </div>
                <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-background border border-neon/30 text-xs font-medium text-neon flex items-center justify-center">
                  {step.number}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Link to="/contact">
            <Button 
              variant="chrome" 
              size="lg"
              className="rounded-full px-8 py-6 text-base"
            >
              Let's build your app
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

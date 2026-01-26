import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Check, Paintbrush, DollarSign, Building, Percent } from "lucide-react";

const ForCreators = () => {
  const messagingBlocks = [
    {
      icon: Paintbrush,
      title: "We handle design, development, and launch",
      description: "You've already built attention. Social platforms are noisy and fragile.",
    },
    {
      icon: DollarSign,
      title: "Monetize with monthly subscriptions",
      description: "We help creators dominate their niche by turning distribution into a product.",
    },
    {
      icon: Building,
      title: "Build equity in something you actually own",
      description: "Subscription-based apps with real ownership and long-term value.",
    },
    {
      icon: Percent,
      title: "50/50 Revenue Split",
      description: "We partner long term. You keep meaningful equity while sharing upside as the product scales.",
    },
  ];

  const valueProps = [
    "We handle design, development, and launch",
    "Monetize with monthly subscriptions",
    "Build equity in something you actually own",
  ];

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            You already have distribution.
            <br />
            Let's turn it into an asset.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We build the app. You focus on your audience.
          </p>
        </div>
      </section>

      {/* Value Cards Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 lg:py-24">
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl">
          {messagingBlocks.map((block, index) => (
            <div 
              key={index} 
              className="p-6 lg:p-8 rounded-2xl bg-secondary/30 border border-border hover:border-neon/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-full bg-neon/10 border border-neon/20 flex items-center justify-center mb-6 group-hover:bg-neon/15 transition-colors">
                <block.icon className="w-6 h-6 text-neon" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {block.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {block.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 md:px-12 lg:px-24 py-16 lg:py-24 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-semibold text-foreground mb-10">
            What we bring to the table
          </h2>
          <div className="flex flex-col gap-5 items-center">
            {valueProps.map((prop, index) => (
              <div key={index} className="flex items-center gap-4">
                <div className="flex-shrink-0 w-6 h-6 rounded-full bg-foreground flex items-center justify-center">
                  <Check className="w-4 h-4 text-background" />
                </div>
                <p className="text-lg text-foreground">
                  {prop}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 lg:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
            Ready to turn your audience into a business?
          </p>
          <Link to="/contact">
            <Button 
              variant="chrome" 
              size="lg"
              className="rounded-full px-8 py-6 text-base"
            >
              Let's work
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default ForCreators;

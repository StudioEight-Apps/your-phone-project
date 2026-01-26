import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Smartphone, BarChart3, Repeat } from "lucide-react";

const ForBusinesses = () => {
  const features = [
    {
      icon: Smartphone,
      title: "Promote intelligently",
      description: "Use smart notifications and in-app messaging to reach customers directly.",
    },
    {
      icon: BarChart3,
      title: "Understand behavior",
      description: "Track what users do inside your app and learn what actually drives retention.",
    },
    {
      icon: Repeat,
      title: "Increase repeat business",
      description: "Build habits, loyalty, and predictable revenue through direct engagement.",
    },
  ];

  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />
      
      {/* Hero Section */}
      <section className="px-6 md:px-12 lg:px-24 py-20 lg:py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight text-foreground mb-6">
            Own the relationship.
            <br />
            Not the algorithm.
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
            We design and build apps that give you a direct, durable channel to your customers and the data to compound it.
          </p>
        </div>
      </section>

      {/* 1-2-3 Features Section */}
      <section className="px-6 md:px-12 lg:px-24 py-16 lg:py-24">
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col gap-4">
              <div className="flex items-center gap-4 mb-2">
                <span className="text-4xl font-semibold text-muted-foreground/50">
                  {index + 1}
                </span>
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Closing Statement */}
      <section className="px-6 md:px-12 lg:px-24 py-20 lg:py-32 border-t border-border">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-2xl md:text-3xl font-medium text-foreground mb-8 leading-relaxed">
            "Users spend over 6 hours a day on their phones.
            <br />
            Meet them where they already are."
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

export default ForBusinesses;

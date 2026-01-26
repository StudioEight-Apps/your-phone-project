import { Link } from "react-router-dom";
import Header from "@/components/Header";
import whisperIcon from "@/assets/whisper-icon.png";
import moonyIcon from "@/assets/moony-icon.png";
import blueprintIcon from "@/assets/blueprint-icon.png";
import checkupIcon from "@/assets/checkup-icon.png";

interface Product {
  name: string;
  description: string;
  icon: string;
  statusLabel: string;
  statusColor: string;
  isLive: boolean;
  link?: string;
}

const products: Product[] = [
  {
    name: "Whisper",
    description: "An intelligent journaling app that learns you through your writing and speaks back to you throughout the day.",
    icon: whisperIcon,
    statusLabel: "Live on iOS",
    statusColor: "green",
    isLive: true,
    link: "/whisper"
  },
  {
    name: "Full Moon",
    description: "Personalized bedtime stories where your child's Moony character stars in every adventure.",
    icon: moonyIcon,
    statusLabel: "In Development",
    statusColor: "gray",
    isLive: false
  },
  {
    name: "Blueprint",
    description: "AI-powered nutrition, fitness tracking, and daily routines built to compound results.",
    icon: blueprintIcon,
    statusLabel: "In Development",
    statusColor: "gray",
    isLive: false
  },
  {
    name: "Checkup",
    description: "Head-to-head competitive gaming with real money on the line.",
    icon: checkupIcon,
    statusLabel: "Exited",
    statusColor: "red",
    isLive: false
  }
];

function ProductCard({ product }: { product: Product }) {
  const statusClasses = {
    green: 'bg-green-500/10 text-green-400 border-green-500/20',
    gray: 'bg-white/5 text-muted-foreground border-white/10',
    red: 'bg-red-500/10 text-red-400 border-red-500/20',
  };

  const content = (
    <div className="rounded-2xl p-6 lg:p-8 bg-secondary/30 border border-border hover:border-neon/30 transition-all duration-300 h-full group">
      <div className="w-16 h-16 rounded-2xl overflow-hidden mb-4 shadow-lg">
        <img src={product.icon} alt={`${product.name} icon`} className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-neon transition-colors">
        {product.name}
      </h3>
      <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
        {product.description}
      </p>
      <span className={`inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full border ${statusClasses[product.statusColor as keyof typeof statusClasses]}`}>
        {product.isLive && <span className="w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse"></span>}
        {product.statusLabel}
      </span>
    </div>
  );

  if (product.link) {
    return <Link to={product.link} className="block">{content}</Link>;
  }
  return <div className="cursor-default">{content}</div>;
}

const OurApps = () => {
  return (
    <div className="min-h-screen bg-hero-gradient">
      <Header />

      <div className="px-6 md:px-12 lg:px-24 py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
              Our Apps
            </h1>
            <p className="text-xl text-muted-foreground">
              Products built, owned, and operated by Studio Eight.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <ProductCard key={product.name} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurApps;

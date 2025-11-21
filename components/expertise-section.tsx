import {
  Beaker,
  Pill,
  Factory,
  Leaf,
  Flame,
  Atom,
  Utensils,
  Award,
  Blend,
  Shirt,
  Sparkles,
  Wine,
  Shield,
} from "lucide-react";
import Link from "next/link";

const expertiseAreas = [
  {
    icon: Blend,
    title: "Resin & Coating",
    href: "/expertise/resin-coating",
  },
  {
    icon: Beaker,
    title: "Petrochemistry",
    href: "/expertise/petrochemistry",
  },
  {
    icon: Factory,
    title: "Rubber",
    href: "/expertise/rubber",
  },
  {
    icon: Leaf,
    title: "Nutrition",
    href: "/expertise/nutrition",
  },
  {
    icon: Sparkles,
    title: "Cosmetic",
    href: "/expertise/cosmetic",
  },
  {
    icon: Wine,
    title: "Flavor",
    href: "/expertise/flavor",
  },
  {
    icon: Factory,
    title: "Industrial",
    href: "/expertise/industrial",
  },
  {
    icon: Shirt,
    title: "Textiles",
    href: "/expertise/textiles",
  },
  {
    icon: Utensils,
    title: "Food Chemicals",
    href: "/expertise/food-chemicals",
  },
  {
    icon: Flame,
    title: "Oil and Gas Production",
    href: "/expertise/oil-gas",
  },
  {
    icon: Atom,
    title: "Rare Earth Metal",
    href: "/expertise/rare-earth-metal",
  },
  {
    icon: Pill,
    title: "Pharmaceutical",
    href: "/expertise/pharmaceutical",
  },
  {
    icon: Shield,
    title: "Military Specifications",
    href: "/expertise/mil-spec",
  },
];

export function ExpertiseSection() {
  return (
    <section id="expertise" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Industry-Leading Expertise
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Specialized knowledge across diverse chemical sectors, backed by
            decades of technical expertise and regulatory compliance
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-7 gap-4 lg:gap-6">
          {expertiseAreas.map((area, index) => {
            const Icon = area.icon;
            return (
              <Link
                key={index}
                href={area.href}
                className="group relative bg-card border border-border rounded-xl p-6 hover:shadow-xl hover:border-accent hover:scale-105 transition-all duration-300 flex flex-col items-center justify-center text-center min-h-[140px]"
              >
                {/* Icon container with gradient background on hover */}
                <div className="flex items-center justify-center w-14 h-14 rounded-full bg-primary/10 text-primary group-hover:bg-gradient-to-br group-hover:from-primary group-hover:to-accent group-hover:text-white transition-all duration-300 mb-3 group-hover:scale-110">
                  <Icon className="h-7 w-7" />
                </div>

                {/* Title with better spacing */}
                <h3 className="text-sm font-semibold text-foreground leading-snug group-hover:text-primary transition-colors">
                  {area.title}
                </h3>

                {/* Subtle arrow indicator on hover */}
                <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                  {/* <svg
                    className="w-4 h-4 text-primary"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg> */}
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 14 14"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.66669 0.666687H12.6667M12.6667 0.666687V4.66669M12.6667 0.666687L5.33335 8.00002M10.6667 7.33335V11.3334C10.6667 11.687 10.5262 12.0261 10.2762 12.2762C10.0261 12.5262 9.68698 12.6667 9.33335 12.6667H2.00002C1.6464 12.6667 1.30726 12.5262 1.05721 12.2762C0.807163 12.0261 0.666687 11.687 0.666687 11.3334V4.00002C0.666687 3.6464 0.807163 3.30726 1.05721 3.05721C1.30726 2.80716 1.6464 2.66669 2.00002 2.66669H6.00002"
                      stroke="black"
                      strokeWidth="1.33333"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

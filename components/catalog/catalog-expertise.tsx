import {
  Beaker,
  Building2,
  Factory,
  Flame,
  Leaf,
  Pill,
  Flag as Flask,
  Wheat,
  Droplet,
  TestTube,
  Microscope,
  Waves,
  Atom,
  Sparkles,
} from "lucide-react"
import Link from "next/link"

const expertiseAreas = [
  { name: "Resin & Coating", icon: Droplet, href: "/expertise/resin-coating" },
  { name: "Rubber", icon: Building2, href: "/expertise/rubber" },
  { name: "Cosmetic", icon: Sparkles, href: "/expertise/cosmetic" },
  { name: "Industrial", icon: Factory, href: "/expertise/industrial" },
  { name: "Food Chemicals", icon: Wheat, href: "/expertise/food-chemicals" },
  { name: "Rare Earth Metal", icon: Atom, href: "/expertise/rare-earth-metal" },
  { name: "Military Specifications", icon: TestTube, href: "/expertise/mil-spec" },
  { name: "Petrochemistry", icon: Flame, href: "/expertise/petrochemistry" },
  { name: "Nutrition", icon: Leaf, href: "/expertise/nutrition" },
  { name: "Flavor", icon: Flask, href: "/expertise/flavor" },
  { name: "Textiles", icon: Waves, href: "/expertise/textiles" },
  { name: "Oil and Gas Production", icon: Beaker, href: "/expertise/oil-gas" },
  { name: "Pharmaceutical", icon: Pill, href: "/expertise/pharmaceutical" },
  { name: "Laboratory", icon: Microscope, href: "/expertise/laboratory" },
]

export function CatalogExpertise() {
  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Browse by Expertise</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore our specialized chemical products organized by industry expertise and application areas
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4">
          {expertiseAreas.map((area) => {
            const Icon = area.icon
            return (
              <Link
                key={area.name}
                href={area.href}
                className="group relative flex flex-col items-center justify-center p-6 bg-card rounded-lg border border-border hover:border-primary/50 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative mb-3">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <Icon className="relative h-8 w-8 text-primary group-hover:text-accent transition-colors duration-300" />
                </div>
                <span className="text-sm font-medium text-center text-foreground group-hover:text-primary transition-colors">
                  {area.name}
                </span>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}

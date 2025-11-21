import { Truck, Package, Settings, Globe } from "lucide-react";

const services = [
  {
    icon: Package,
    title: "Specialty Chemical Distribution",
    description:
      "Reliable bulk and specialty chemical distribution backed by strong supplier relationships, technical expertise, and fast, responsive customer support.",
    image: "/chemical-containers-warehouse-distribution.jpg",
  },
  {
    icon: Globe,
    title: "Global Sourcing & Outsourcing",
    description:
      "Seamless sourcing and outsourcing solutions for new and existing materials, delivering hard-to-find chemicals, flexible pack sizes, and competitive pricing.",
    image: "/global.png",
  },
  {
    icon: Truck,
    title: "Logistics & Supply Chain",
    description:
      "Nationwide warehousing, global shipping partnerships, and real-time tracking ensure fast, cost-efficient delivery from plant to facility.",
    image: "/supply.png",
  },
  {
    icon: Settings,
    title: "Custom Solutions",
    description:
      "Tailored chemical services including toll processing, spray drying, granulation, formulation assistance, and repackaging to meet exact specifications.",
    image: "/laboratory-scientist-custom-formulation.jpg",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 lg:py-28 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Comprehensive Chemical Solutions
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            End-to-end services designed to streamline your chemical supply
            chain and support your business growth
          </p>
        </div>

        <div className="grid md:grid-cols-2 2xl:grid-cols-4 gap-6 lg:gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            const hashMap: Record<string, string> = {
              "Specialty Chemical Distribution": "distribution",
              "Global Sourcing & Outsourcing": "sourcing",
              "Logistics & Supply Chain": "logistics",
              "Custom Solutions": "custom-manufacturing",
            };
            const hash = hashMap[service.title] || "";

            return (
              <a
                href={`/services#${hash}`}
                key={index}
                className="group bg-card border border-border rounded-lg overflow-hidden hover:shadow-xl transition-all duration-300 flex flex-col h-full"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 flex items-center justify-center w-12 h-12 rounded-lg bg-accent text-accent-foreground">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {service.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                    {service.description}
                  </p>
                  <span className="text-accent hover:text-accent/80 text-sm font-medium">
                    Learn more →
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

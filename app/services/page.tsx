import { Package, Globe, Truck, Settings, CheckCircle } from "lucide-react";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { QuoteSearchCard } from "@/components/quote-search-card";

export const metadata = {
  title: "Services | Chemical Distribution & Supply Chain Solutions",
  description:
    "End-to-end chemical sourcing, distribution, logistics, and custom manufacturing backed by decades of expertise.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={getImagePath(
              "/modern-chemical-industrial-plant-facility-pipes-to.jpg"
            )}
            alt="Chemical facility"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance text-primary-foreground">
              Comprehensive Chemical Supply Chain Solutions
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty max-w-4xl ">
              From sourcing to delivery, we integrate seamlessly into your
              operations to provide reliable materials, faster turnaround, and
              cost-effective solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Introduction with Stats */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Your Strategic Partner in Chemical Procurement
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over two decades, Parchem has strengthened supply chains for
              manufacturers, formulators, and industry partners worldwide. We
              combine deep market knowledge with full-service operational
              support.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">25+</div>
              <div className="text-muted-foreground">Years of Experience</div>
            </div>

            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">Global</div>
              <div className="text-muted-foreground">Sourcing Network</div>
            </div>
            <div className="bg-card border border-border rounded-xl p-8 text-center">
              <div className="text-4xl font-bold text-accent mb-2">
                100,000+
              </div>
              <div className="text-muted-foreground">Products Available</div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 1: Distribution */}
      <section
        id="distribution"
        className="py-16 lg:py-24 bg-muted/30 scroll-mt-20"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Image
                    src={getImagePath(
                      "/chemical-warehouse-distribution-drums-barrels-stor.jpg"
                    )}
                    alt="Chemical distribution warehouse"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                  <Package className="h-5 w-5" />
                  <span className="font-semibold">Service</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Specialty Chemical Distribution
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Dependable bulk and specialty chemical distribution supported
                  by vetted global partnerships and expert product knowledge.
                </p>

                <div className="space-y-4">
                  {[
                    "Robust network of domestic and international producers",
                    "Fast quote turnaround with technical support",
                    "Flexible packaging: drums, totes, bags, bulk formats",
                    "ISO 9001 quality assurance and spec matching",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 2: Global Sourcing */}
      <section
        id="sourcing"
        className="py-16 lg:py-24 bg-background scroll-mt-20"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                  <Globe className="h-5 w-5" />
                  <span className="font-semibold">Service</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Global Sourcing & Outsourcing
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Strategic supplier identification, cost negotiation, and
                  quality verification for both new and existing materials.
                </p>

                <div className="space-y-4">
                  {[
                    "Access to global manufacturers and niche producers",
                    "Expertise in rare, emerging, or custom materials",
                    "Multiple certifications: USDA Organic, Kosher, Non-GMO",
                    "Full regulatory compliance and documentation support",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Image
                    src={getImagePath("/global.png")}
                    alt="Global sourcing network"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 3: Logistics */}
      <section
        id="logistics"
        className="py-16 lg:py-24 bg-muted/30 scroll-mt-20"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Image
                    src={getImagePath(
                      "/chemical-logistics-truck-transportation-warehouse-.jpg"
                    )}
                    alt="Chemical logistics and transportation"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>

              <div>
                <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                  <Truck className="h-5 w-5" />
                  <span className="font-semibold">Service</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Logistics & Supply Chain
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  End-to-end logistics support with nationwide warehousing,
                  freight partnerships, and coordinated import/export services.
                </p>

                <div className="space-y-4">
                  {[
                    "National LTL and truckload agreements for cost efficiency",
                    "Import/export coordination with customs support",
                    "Strategic warehouse locations for regional distribution",
                    "Real-time tracking and proactive status updates",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service 4: Custom Manufacturing */}
      <section
        id="custom-manufacturing"
        className="py-16 lg:py-24 bg-background scroll-mt-20"
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <div className="inline-flex items-center gap-3 bg-accent/10 text-accent px-4 py-2 rounded-full mb-6">
                  <Settings className="h-5 w-5" />
                  <span className="font-semibold">Service</span>
                </div>
                <h2 className="text-4xl md:text-5xl font-bold mb-6">
                  Custom Manufacturing
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                  Toll processing and value-added services through trusted
                  partners to deliver materials tailored to your exact
                  specifications.
                </p>

                <div className="space-y-4">
                  {[
                    "Toll processing: spray drying, granulation, blending",
                    "Custom formulations and new product development",
                    "Synthesis of specialty chemicals and intermediates",
                    "Complete documentation and quality oversight",
                  ].map((item, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <CheckCircle className="h-6 w-6 text-accent flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative order-1 lg:order-2">
                <div className="aspect-[4/3] relative rounded-2xl overflow-hidden bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                  <Image
                    src={getImagePath(
                      "/chemical-manufacturing-equipment-processing-facili.jpg"
                    )}
                    alt="Custom chemical manufacturing"
                    fill
                    className="object-cover "
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-32 bg-gradient-to-br from-primary via-primary to-primary/90 text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[linear-gradient(30deg,transparent_24%,rgba(255,255,255,.05)_25%,rgba(255,255,255,.05)_26%,transparent_27%,transparent_74%,rgba(255,255,255,.05)_75%,rgba(255,255,255,.05)_76%,transparent_77%,transparent)] bg-[length:50px_50px]" />
        </div>
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Ready to Optimize Your Chemical Supply Chain?
              </h2>
              <p className="text-xl text-primary-foreground/90 mb-10 leading-relaxed">
                Partner with Parchem to reduce costs, improve reliability, and
                accelerate your operations.
              </p>
            </div>
            <QuoteSearchCard />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

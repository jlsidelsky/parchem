import Header from "@/components/header";
import Footer from "@/components/footer";
import { Button } from "@/components/ui/button";
import {
  CheckCircle2,
  Globe2,
  Truck,
  FileCheck,
  Building2,
  Package,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { QuoteSearchCard } from "@/components/quote-search-card";

export default function AboutPage() {
  const advantages = [
    {
      icon: Globe2,
      title: "Global Sourcing Network",
      description:
        "Access to trusted producers worldwide, including hard-to-find chemicals, intermediates, and specialty ingredients.",
    },
    {
      icon: Truck,
      title: "Reliable Logistics",
      description:
        "Nationwide warehousing, domestic freight partnerships, and coordinated international shipping provide fast, efficient delivery.",
    },
    {
      icon: FileCheck,
      title: "Technical & Regulatory Expertise",
      description:
        "Knowledgeable specialists ensure high-quality materials, compliance documentation, and informed support at every stage.",
    },
  ];

  const stats = [
    { icon: Building2, value: "25+", label: "Years of Experience" },
    { icon: Globe2, value: "Global", label: "Market Reach" },
    { icon: Package, value: "100K+", label: "Products" },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary via-primary/95 to-primary/90 text-primary-foreground overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <Image
            src={getImagePath(
              "/modern-chemical-laboratory-with-scientists.jpg"
            )}
            alt="Chemical Laboratory"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-block px-4 py-1.5 bg-[#EEEAE9] text-accent text-sm font-semibold rounded-full mb-6">
              About Parchem
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-balance">
              Global Specialty Chemical Distribution
            </h1>
            <p className="text-xl text-primary-foreground/90 leading-relaxed text-pretty">
              Trusted by manufacturers and formulators since 1999, we combine
              global sourcing reach, technical expertise, and reliable logistics
              to support complex chemical supply chains across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Who We Are Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Who We Are
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  For more than two decades, Parchem has served as a sourcing
                  and distribution partner for customers in pharmaceuticals,
                  nutrition, personal care, coatings, advanced materials, and
                  other specialty chemical markets.
                </p>
                <p>
                  Our team connects manufacturers with high-quality raw
                  materials from vetted domestic and international producers,
                  ensuring consistency, compliance, and long-term supply
                  security.
                </p>
                <p className="text-foreground font-medium">
                  We pride ourselves on responsiveness, deep product knowledge,
                  and a service-first approach that integrates seamlessly into
                  our customers' operations.
                </p>
              </div>
              <Button
                size="lg"
                asChild
                className="bg-accent hover:bg-accent/90 text-accent-foreground mt-8 group"
              >
                <Link href="/leadership">
                  Meet Our Team
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
            <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src={getImagePath(
                  "/professional-chemical-warehouse-team-with-safety-e.jpg"
                )}
                alt="Parchem Team"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Our Advantage Section */}
      <section className="py-20 lg:py-28 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Our Advantage
            </h2>
            <p className="text-lg text-muted-foreground">
              Parchem delivers the capabilities and reliability that modern
              supply chains demand
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((advantage, index) => {
              const Icon = advantage.icon;
              return (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 border border-border"
                >
                  <div className="w-14 h-14 rounded-lg bg-accent flex items-center justify-center mb-6">
                    <Icon className="w-7 h-7 text-accent-foreground" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {advantage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-20 lg:py-28 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl order-2 lg:order-1">
              <Image
                src={getImagePath(
                  "/quality-control-laboratory-testing-chemical-sample.jpg"
                )}
                alt="Quality Control"
                fill
                className="object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Certifications & Compliance
              </h2>
              <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                Parchem maintains strict quality and regulatory standards to
                support safe, compliant chemical distribution.
              </p>
              <div className="space-y-4">
                {[
                  "ISO 9001 Quality Management Certification",
                  "USDA Organic Certifications",
                  "Kosher Certifications",
                  "DEA and ATF Licensing",
                ].map((cert, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-6 h-6 text-accent shrink-0 mt-0.5" />
                    <span className="text-lg text-foreground">{cert}</span>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground mt-6 leading-relaxed">
                These certifications reinforce our commitment to quality,
                consistency, and responsible practices throughout the supply
                chain.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Parchem Today Stats */}
      <section className="py-20 lg:py-28 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <Image
            src={getImagePath(
              "/abstract-chemical-molecular-structure-pattern.jpg"
            )}
            alt="Background Pattern"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">
              Parchem Today
            </h2>
            <p className="text-xl text-primary-foreground/90">
              Delivering excellence in specialty chemical distribution
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center p-6 rounded-xl bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20"
                >
                  <Icon className="w-10 h-10 mx-auto mb-4 text-accent" />
                  <div className="text-4xl lg:text-5xl font-bold mb-2">
                    {stat.value}
                  </div>
                  <div className="text-lg text-primary-foreground/80">
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-br from-muted via-muted/50 to-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Discover How Parchem Can Support Your Sourcing Needs
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Connect with our team to discuss your chemical supply chain
              requirements
            </p>
          </div>
          <QuoteSearchCard />
        </div>
      </section>

      <Footer />
    </div>
  );
}

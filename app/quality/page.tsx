import type { Metadata } from "next"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Shield, CheckCircle2, FileCheck, Scale } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export const metadata: Metadata = {
  title: "Quality, Compliance & Certification | Parchem",
  description:
    "Parchem is committed to delivering safe, compliant, and high-quality specialty chemicals through industry-recognized certifications and rigorous verification practices.",
}

const certifications = [
  {
    name: "Non-GMO",
    image: "/images/non-gmo.webp",
    description:
      "Parchem supplies a wide range of verified non-GMO raw materials sourced from trusted suppliers. We require documentation confirming non-GMO status and can provide formal non-GMO statements upon request.",
  },
  {
    name: "USDA Organic",
    image: "/images/usda-organic.png",
    description:
      'Certified organic raw materials verified through OneCert Inc., ensuring products are manufactured, handled, and stored in certified organic facilities. Our "Twice Verified" process validates certification accuracy.',
  },
  {
    name: "ISO 9001:2015",
    image: "/images/iso.png",
    description:
      "Our ISO 9001:2015 certification reflects our commitment to a robust quality management system and continuous improvement through recurring internal audits and third-party evaluations.",
  },
  {
    name: "FDA Registered",
    image: "/images/fda.png",
    description:
      "Registered as a food facility, we source food-related raw materials exclusively from FDA-compliant suppliers and follow FSMA and FSVP requirements for complete supply chain safety.",
  },
  {
    name: "DEA Licensed",
    image: "/images/dea.png",
    description:
      "Registered with the Drug Enforcement Administration to handle List I and List II controlled substances with experienced compliance and accurate documentation.",
  },
  {
    name: "TTB Licensed",
    image: "/ttb-alcohol-tobacco-tax-trade-bureau-seal-logo.jpg",
    description:
      "Licensed by the Alcohol and Tobacco Tax and Trade Bureau to distribute specialty denatured alcohols with proper documentation and regulatory compliance.",
  },
  {
    name: "RSPO Member",
    image: "/images/rspo.png",
    description:
      "As an RSPO member, we provide responsibly sourced palm-based materials that meet environmental, social, and conservation standards through certified suppliers.",
  },
  {
    name: "Kosher Certified",
    image: "/images/kosher.png",
    description:
      'Kosher-certified ingredients through OK Kosher and other recognized agencies. Our "Twice Verified" system ensures documentation accuracy and kosher compliance for all applicable products.',
  },
]

const commitmentPoints = [
  {
    icon: Shield,
    title: "Authenticity Validation",
    description: "Strict processes to validate the authenticity of all certifications and supplier claims",
  },
  {
    icon: CheckCircle2,
    title: "Contamination Prevention",
    description: "Rigorous handling and storage protocols to prevent cross-contamination",
  },
  {
    icon: FileCheck,
    title: "Complete Traceability",
    description: "Full supply chain transparency with detailed documentation and tracking",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description: "Adherence to all applicable local, national, and international regulations",
  },
]

export default function QualityPage() {
  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative bg-primary text-primary-foreground py-20 lg:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/quality-control-laboratory-testing-chemical-sample.jpg')] bg-cover bg-center opacity-10" />
        <div className="container relative z-10 max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 bg-accent/20 text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-6">
            <Shield className="h-4 w-4" />
            Quality Assurance
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance">
            Quality, Compliance & Certification
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-3xl mx-auto text-pretty">
            Parchem is committed to delivering safe, compliant, and high-quality specialty chemicals through
            industry-recognized certifications and rigorous verification practices.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container max-w-4xl">
          <p className="text-lg text-muted-foreground leading-relaxed text-center">
            Our quality program is built on industry-recognized certifications, rigorous verification practices, and
            strict adherence to global regulatory standards. Whether you require organic, non-GMO, kosher,
            pharmaceutical, or controlled substances, Parchem ensures every product meets the proper specifications and
            documentation requirements.
          </p>
        </div>
      </section>

      {/* Certifications Grid */}
      <section className="py-16 lg:py-24">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Certifications</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Industry-leading certifications that demonstrate our commitment to quality, safety, and compliance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="group bg-card border border-border rounded-lg p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-28 h-28 mb-5 flex items-center justify-center bg-muted/50 rounded-full p-4 group-hover:bg-accent/10 transition-colors">
                    <Image
                      src={cert.image || "/placeholder.svg"}
                      alt={`${cert.name} certification`}
                      width={96}
                      height={96}
                      className="object-contain"
                    />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Compliance */}
      <section className="py-16 lg:py-24 bg-primary text-primary-foreground">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Commitment to Compliance</h2>
            <p className="text-lg text-primary-foreground/90 max-w-3xl mx-auto">
              Across all certifications and regulatory standards, Parchem maintains strict processes to ensure safety,
              authenticity, and complete traceability
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {commitmentPoints.map((point, index) => {
              const Icon = point.icon
              return (
                <div key={index} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent text-accent-foreground mb-4">
                    <Icon className="h-8 w-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{point.title}</h3>
                  <p className="text-sm text-primary-foreground/80">{point.description}</p>
                </div>
              )
            })}
          </div>

          <div className="mt-12 text-center">
            <p className="text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
              Customers receive accurate documentation, responsive support, and confidence that every material meets
              applicable safety and compliance requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-20 bg-muted/30">
        <div className="container max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Looking for Certified Raw Materials?</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Request a quote to discuss your quality requirements with our team
          </p>
          <Button asChild size="lg" className="text-lg px-8">
            <Link href="/#quote">Request a Quote</Link>
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  )
}

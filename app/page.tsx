import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ExpertiseSection } from "@/components/expertise-section";
import { ServicesSection } from "@/components/services-section";
import { QuoteSection } from "@/components/quote-section";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ExpertiseSection />
        <ServicesSection />
        <QuoteSection />
      </main>
      <Footer />
    </div>
  );
}

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CatalogHero } from "@/components/catalog/catalog-hero"
import { CatalogExpertise } from "@/components/catalog/catalog-expertise"
import { CatalogIndustries } from "@/components/catalog/catalog-industries"
import { CatalogFunctions } from "@/components/catalog/catalog-functions"

export default function CatalogPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <CatalogHero />
        <CatalogExpertise />
        <CatalogIndustries />
        <CatalogFunctions />
      </main>
      <Footer />
    </div>
  )
}

import { Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

export function CatalogHero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/chemical-warehouse-distribution-drums-barrels-stor.jpg"
          alt="Chemical warehouse distribution"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-16 md:py-24 text-primary-foreground">
        <nav className="flex items-center gap-2 text-sm text-primary-foreground/80 mb-6">
          <a
            href="/"
            className="hover:text-primary-foreground transition-colors"
          >
            Home
          </a>
          <span>/</span>
          <span className="text-primary-foreground">
            Chemical Products Catalog
          </span>
        </nav>

        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-balance text-primary-foreground">
            Chemical & Material Product Catalog
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 text-pretty">
            Browse our comprehensive catalog of specialty chemicals and raw
            materials. Search by industry, function, or expertise area.
          </p>

          {/* Search bar */}
          <div className="flex gap-3 max-w-2xl">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search by Chemical name, CAS# or Formula"
                className="pl-10 h-12 bg-white text-foreground border-0"
              />
            </div>
            <Button size="lg" variant="secondary" className="h-12 px-8">
              Get a Quote
            </Button>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-10 pt-6 border-t border-primary-foreground/20">
            <span className="text-sm text-primary-foreground/80">
              Certifications:
            </span>
            <div className="flex flex-wrap items-center gap-4">
              <Image
                src="/images/cert3-201.png"
                alt="Kosher Certified"
                width={40}
                height={40}
                className="h-10 w-10 object-contain bg-white rounded-full p-1"
              />
              <Image
                src="/images/cert2-201.png"
                alt="USDA Organic"
                width={40}
                height={40}
                className="h-10 w-10 object-contain bg-white rounded-full p-1"
              />
              <Image
                src="/images/cert4-201.png"
                alt="DEA Certified"
                width={40}
                height={40}
                className="h-10 w-10 object-contain bg-white rounded-full p-1"
              />
              <Image
                src="/images/iso.png"
                alt="NQA ISO Quality Management"
                width={40}
                height={40}
                className="h-10 w-10 object-contain bg-white rounded-full p-1"
              />
              <Image
                src="/images/cert5-201.png"
                alt="Department of Treasury"
                width={40}
                height={40}
                className="h-10 w-10 object-contain bg-white rounded-full p-1"
              />
              <Image
                src="/images/cert6-201.png"
                alt="Department of Justice"
                width={40}
                height={40}
                className="h-10 w-10 object-contain bg-white rounded-full p-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

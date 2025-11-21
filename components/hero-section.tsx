"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Shield, Award, Globe } from "lucide-react";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { useState } from "react";

export function HeroSection() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={getImagePath(
            "/modern-chemical-industrial-plant-facility-pipes-to.jpg"
          )}
          alt="Chemical plant facility"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-primary/95 via-primary/90 to-primary/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-6 pt-24 pb-20 lg:pt-32 lg:pb-32">
        <div className="max-w-4xl mx-auto">
          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6 mb-8">
            <div className="flex items-center gap-2 text-primary-foreground/90 text-sm">
              <Shield className="h-5 w-5" />
              <span>ISO Certified</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90 text-sm">
              <Award className="h-5 w-5" />
              <span>Industry Leader</span>
            </div>
            <div className="flex items-center gap-2 text-primary-foreground/90 text-sm">
              <Globe className="h-5 w-5" />
              <span>Global Distribution</span>
            </div>
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground text-center mb-6 text-balance leading-tight">
            Your Trusted Partner for Specialty Chemicals & Raw Materials
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/90 text-center mb-10 text-pretty max-w-3xl mx-auto">
            Decades of expertise in sourcing and distributing bulk chemicals.
            Trusted by industry leaders worldwide for quality, reliability, and
            unmatched technical support.
          </p>

          {/* Search Card */}
          <div className="bg-card rounded-xl shadow-2xl p-6 md:p-8 border border-border/50">
            <div className="flex items-center gap-3 mb-6">
              <Search className="h-6 w-6 text-accent" />
              <h2 className="text-2xl font-semibold text-card-foreground">
                Search for a Quote
              </h2>
            </div>

            <p className="text-muted-foreground mb-6">
              Enter a chemical name, synonym, or CAS® number to get started
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Input
                type="text"
                placeholder="e.g., Sodium Hydroxide, H2SO4, or 7732-18-5"
                className="flex-1 h-12 text-base bg-background"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Button className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-medium">
                Get a Quote
              </Button>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap items-center gap-4 mt-6 pt-6 border-t border-border">
              <span className="text-sm text-muted-foreground">
                Available certifications:
              </span>
              <div className="flex flex-wrap items-center gap-4">
                <Image
                  src={getImagePath("/images/cert3-201.png")}
                  alt="Kosher Certified"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <Image
                  src={getImagePath("/images/cert2-201.png")}
                  alt="USDA Organic"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <Image
                  src={getImagePath("/images/cert4-201.png")}
                  alt="DEA Certified"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <Image
                  src={getImagePath("/images/cert1-201.png")}
                  alt="NQA ISO Quality Management"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <Image
                  src={getImagePath("/images/cert5-201.png")}
                  alt="Department of Treasury"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
                <Image
                  src={getImagePath("/images/cert6-201.png")}
                  alt="Department of Justice"
                  width={48}
                  height={48}
                  className="h-12 w-12 object-contain"
                />
              </div>
            </div>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                25+
              </div>
              <div className="text-sm text-primary-foreground/80">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                Global
              </div>
              <div className="text-sm text-primary-foreground/80">
                Market Reach
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary-foreground mb-1">
                100K+
              </div>
              <div className="text-sm text-primary-foreground/80">Products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

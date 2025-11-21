"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const industries = [
  {
    letter: "A",
    items: [
      "Aerosols",
      "Adhesives",
      "Agricultural",
      "Animal Health",
      "Anti-Corrosives",
    ],
  },
  { letter: "B", items: ["Building Materials"] },
  {
    letter: "C",
    items: ["Cleaning", "Construction", "Coatings", "Cyanides Chemistry"],
  },
  {
    letter: "D",
    items: [
      "Deodorant",
      "Drilling Fluid",
      "Dyestuffs",
      "Electronics",
      "Fiber Items",
    ],
  },
  { letter: "E", items: ["Electronics"] },
  {
    letter: "F",
    items: [
      "Fiber Items",
      "Flavor & Fragrance",
      "Food Chemicals",
      "Fragrance",
      "Flooring",
      "Functional Polymers",
    ],
  },
  { letter: "H", items: ["Healthcare", "Hydraulic Fracturing"] },
  { letter: "I", items: ["Industrial", "Industrial Refining"] },
  { letter: "N", items: ["Nanotechnology", "Nutrition"] },
  { letter: "O", items: ["Organics", "Oil and Gas Production"] },
  {
    letter: "P",
    items: [
      "Paper and Printing",
      "Personal Care",
      "Petrochemistry",
      "Pharmaceutical",
      "Photography",
      "Plasticisers",
      "Plastics",
      "Plating",
    ],
  },
  {
    letter: "R",
    items: [
      "Refractory",
      "Research & Development",
      "Resin & Coating",
      "Rubber",
    ],
  },
  {
    letter: "S",
    items: [
      "Semiconductor Materials",
      "Solvents",
      "Specialty Chemicals",
      "Synthetic Rubbers",
    ],
  },
  { letter: "T", items: ["Textiles"] },
  { letter: "W", items: ["Waste Treatment"] },
];

export function CatalogIndustries() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredIndustries = industries
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section className="py-16 md:py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Industry
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            Find chemicals and materials tailored to your specific industry
            applications
          </p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Filter industries..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredIndustries.map((group) => (
            <div key={group.letter} className="space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary text-primary-foreground font-bold text-lg">
                  {group.letter}
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/industry/${item
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                      className="group flex items-center gap-2 text-foreground hover:text-accent transition-colors py-1"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground group-hover:bg-accent transition-colors" />
                      <span className="text-sm font-medium">{item}</span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="opacity-0 group-hover:opacity-100 transition-opacity text-accent"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {filteredIndustries.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No industries found matching "{searchTerm}"
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

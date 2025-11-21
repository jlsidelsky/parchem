"use client";

import { useState } from "react";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

const functions = [
  { letter: "2", items: ["2-Benzylphenanthrenes"] },
  {
    letter: "A",
    items: [
      "Acidulant",
      "Acid",
      "Acidifier",
      "Additive",
      "Adhesive",
      "Alkyl Isomeries",
      "Amino Acids",
      "Antimid",
      "Anti-Corrosive",
      "Anti-Foaming Agent",
      "Antibacterial",
      "Antioxidants",
      "Anticoagent",
      "Antifouling Agent",
      "Aromatic Chemicals",
    ],
  },
  {
    letter: "B",
    items: [
      "Baby additives",
      "Biocide",
      "Bulk Dopant Materials",
      "Bulk-flow preservatives",
      "Buffering Agents",
      "Bridging Agent",
      "Biotechnolog agents",
    ],
  },
  {
    letter: "C",
    items: [
      "Catalyst Or part in derivatives",
      "Catalyst",
      "Chemical Control",
      "Chemicals Intermediate",
      "Coil Inhibitors",
      "Circul Methods",
      "Clay Stabilizer",
      "Composite",
      "Crosslink Agent",
      "Curing Agent",
      "Cooling Agent",
      "Defoamers",
      "Diluents",
      "Dispernt",
      "Drying Fluid Additives",
      "Dyeing Fluid Salt Brines",
    ],
  },
  { letter: "D", items: ["Dyes and colors", "Drilling Fluid Additives"] },
  {
    letter: "E",
    items: [
      "Electron Blocking Molecules",
      "Electron chemicals",
      "Electron transport Materials",
      "Emulsifier",
      "Enzyme",
      "Epoxy Curing Agents",
      "Ether Methacrylates",
      "Etiquette & Emulsifiers",
    ],
  },
  {
    letter: "F",
    items: [
      "Fertilizers",
      "Flocculant",
      "Fluorescent Brightener Materials",
      "Foam Retardant",
      "Formation Modifying Additives",
      "Fragrance",
      "Friction Reducer",
      "Fungicides",
    ],
  },
  { letter: "G", items: ["Gelling Agent", "Green Dopant Materials"] },
  {
    letter: "H",
    items: [
      "Hardening Agents",
      "Hole Injection Materials",
      "Hole-transport Materials",
      "Humectants & Emollients",
      "Intermediates",
    ],
  },
  {
    letter: "I",
    items: [
      "Insulation Materials",
      "Intermediates for Thermal/Calorizers Paper",
      "Iron Control",
    ],
  },
  { letter: "L", items: ["Lubricant"] },
  { letter: "M", items: ["Metal deactivator", "Metallurking fluids"] },
  { letter: "N", items: ["Nutritional Additive"] },
  {
    letter: "O",
    items: [
      "Organic Electron Molecules",
      "Organic Intermediate",
      "Chelator",
      "Oxygen Scavenger",
    ],
  },
  {
    letter: "P",
    items: [
      "Paint Additive",
      "Paraffin Chemicals",
      "pH Adjusting Agent",
      "Phosphoramid Heat",
      "Photoactivator Materials",
      "Plasticizers",
      "Polymerization inhibitor",
      "Preservative",
      "Propellant",
    ],
  },
  {
    letter: "R",
    items: [
      "Raw Material",
      "Red Dopant Materials",
      "Reducing Agent",
      "Resins",
      "Rheological Modifier",
    ],
  },
  {
    letter: "S",
    items: [
      "Scale Inhibitor",
      "Shale Control",
      "Shale Inhibitor",
      "Solvents",
      "Subtiliaries",
      "Supplement",
      "Surfactant",
      "Sweeteners",
    ],
  },
  {
    letter: "T",
    items: [
      "Temperature Control Agent",
      "Thickeners",
      "Phosphoric derivatives",
    ],
  },
  { letter: "U", items: ["UV Absorber"] },
  { letter: "V", items: ["Viscosity Control", "Viscosity Modifier"] },
  { letter: "W", items: ["Weighing Agent"] },
];

export function CatalogFunctions() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredFunctions = functions
    .map((group) => ({
      ...group,
      items: group.items.filter((item) =>
        item.toLowerCase().includes(searchTerm.toLowerCase())
      ),
    }))
    .filter((group) => group.items.length > 0);

  return (
    <section className="py-16 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Browse by Function
          </h2>
          <p className="text-lg text-muted-foreground mb-6 max-w-2xl">
            Search for chemicals based on their functional properties and
            applications
          </p>

          <div className="relative max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Filter functions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-11"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {filteredFunctions.map((group) => (
            <div key={group.letter} className="space-y-3">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-accent text-accent-foreground font-bold text-lg">
                  {group.letter}
                </div>
                <div className="h-px flex-1 bg-border" />
              </div>
              <ul className="space-y-2">
                {group.items.map((item) => (
                  <li key={item}>
                    <Link
                      href={`/function/${item
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

        {filteredFunctions.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">
              No functions found matching "{searchTerm}"
            </p>
          </div>
        )}

        {/* Certification badges at bottom */}
        <div className="mt-16 pt-12 border-t border-border">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <img
              src="/images/cert3-201.png"
              alt="Kosher Certified"
              className="h-16 w-16 object-contain"
            />
            <img
              src="/images/cert2-201.png"
              alt="USDA Organic"
              className="h-16 w-16 object-contain"
            />
            <img
              src="/images/cert4-201.png"
              alt="DEA Certified"
              className="h-16 w-16 object-contain"
            />
            <img
              src="/images/cert1-201.png"
              alt="NQA ISO Quality Management"
              className="h-16 w-16 object-contain"
            />
            <img
              src="/images/cert5-201.png"
              alt="Department of Treasury"
              className="h-16 w-16 object-contain"
            />
            <img
              src="/images/cert6-201.png"
              alt="Department of Justice"
              className="h-16 w-16 object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

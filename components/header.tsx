"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Phone, Menu, Search, MapPin, Mail } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getImagePath } from "@/lib/utils";
import { useEffect, useState } from "react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Header height is 64px (h-16)
      setIsScrolled(window.scrollY > 64);
    };

    // Check initial scroll position
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80 border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container mx-auto px-4 lg:px-6">
          <div className="flex h-16 items-center justify-between gap-4">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <Image
                src={getImagePath("/parchem.svg")}
                alt="Parchem"
                width={120}
                height={28}
                className={`h-7 w-auto transition-all duration-300 ${
                  isScrolled ? "brightness-0" : "brightness-0 invert"
                }`}
              />
              <span
                className={`text-xl font-semibold transition-colors duration-300 ${
                  isScrolled ? "text-foreground" : "text-white"
                }`}
              >
                Parchem
              </span>
            </Link>

            {/* Search Bar - Only visible when scrolled */}
            {isScrolled && (
              <div className="hidden md:flex flex-1 mx-4">
                <div className="relative w-full">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    type="text"
                    placeholder="Search by chemical name, CAS#, or formula"
                    className="h-9 pl-10 text-sm bg-background border-border w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </div>
            )}

            {/* CTA Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <Button
                variant="ghost"
                size="sm"
                className={`hidden sm:flex gap-2 transition-colors duration-300 ${
                  isScrolled ? "" : "text-white hover:bg-white/10"
                }`}
              >
                <Phone className="h-4 w-4" />
                <span className="text-sm">1 (914) 654-6800</span>
              </Button>
              <Button
                className={`transition-all duration-300 ${
                  isScrolled
                    ? "bg-accent hover:bg-accent/90 text-accent-foreground"
                    : "bg-white text-black hover:bg-white/90"
                }`}
              >
                Get a Quote
              </Button>
              <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
                <SheetTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className={`transition-colors duration-300 ${
                      isScrolled ? "" : "text-white hover:bg-white/10"
                    }`}
                  >
                    <Menu className="h-5 w-5" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-full sm:max-w-md overflow-y-auto p-0"
                >
                  <div className="flex flex-col h-full">
                    <SheetHeader className="border-b border-border px-6 py-6">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <Image
                            src={getImagePath("/parchem.svg")}
                            alt="Parchem"
                            width={120}
                            height={28}
                            className="h-7 w-auto brightness-0"
                          />
                          <SheetTitle className="text-xl font-semibold">
                            Parchem
                          </SheetTitle>
                        </div>
                      </div>
                    </SheetHeader>

                    {/* Prominent Get a Quote Button */}
                    <div className="px-6 pt-6 pb-4 border-b border-border">
                      <Button
                        className="w-full h-12 bg-accent hover:bg-accent/90 text-accent-foreground font-semibold text-base"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Get a Quote
                      </Button>
                    </div>

                    <div className="flex-1 overflow-y-auto px-6 py-6 flex flex-col">
                      <div className="flex flex-col gap-8">
                        {/* Solutions Section */}
                        <div>
                          <h3 className="font-semibold text-lg mb-5 text-foreground">
                            Solutions
                          </h3>
                          <ul className="space-y-0.5">
                            <li>
                              <Link
                                href="/catalog"
                                className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors block py-2 px-2 rounded-lg hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Product Catalog
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#contact"
                                className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors block py-2 px-2 rounded-lg hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Quick Quote
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/services"
                                className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors block py-2 px-2 rounded-lg hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Services
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors block py-2 px-2 rounded-lg hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Supplier Portal
                              </Link>
                            </li>
                          </ul>
                        </div>

                        {/* Company Section */}
                        <div>
                          <h3 className="font-semibold text-lg mb-5 text-foreground">
                            Company
                          </h3>
                          <ul className="space-y-0.5">
                            <li>
                              <Link
                                href="/about"
                                className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors block py-2 px-2 rounded-lg hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                About Us
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="/leadership"
                                className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors block py-2 px-2 rounded-lg hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Leadership
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors block py-2 px-2 rounded-lg hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                Careers
                              </Link>
                            </li>
                            <li>
                              <Link
                                href="#"
                                className="text-base font-medium text-foreground hover:text-foreground/80 transition-colors block py-2 px-2 rounded-lg hover:bg-muted"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                News
                              </Link>
                            </li>
                          </ul>
                        </div>
                      </div>

                      {/* Contact Section - Pushed to bottom */}
                      <div className="mt-auto pt-6 border-t border-border">
                        <h3 className="font-medium text-sm mb-3 text-muted-foreground uppercase tracking-wide">
                          Contact
                        </h3>
                        <ul className="space-y-3">
                          <li className="flex items-start gap-3 text-xs text-muted-foreground">
                            <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-muted-foreground/60" />
                            <Link
                              href="https://www.google.com/maps/search/?api=1&query=415+Huguenot+Street,+New+Rochelle,+New+York+10801"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:text-muted-foreground transition-colors leading-relaxed"
                            >
                              415 Huguenot Street,
                              <br />
                              New Rochelle, New York 10801
                            </Link>
                          </li>
                          <li className="flex items-start gap-3 text-xs text-muted-foreground">
                            <Phone className="h-3.5 w-3.5 mt-0.5 flex-shrink-0 text-muted-foreground/60" />
                            <div className="flex flex-col gap-1.5">
                              <Link
                                href="tel:+19146546800"
                                className="hover:text-muted-foreground transition-colors"
                              >
                                <span className="text-muted-foreground/60">
                                  Main:{" "}
                                </span>
                                1 (914) 654-6800
                              </Link>
                              <Link
                                href="tel:+18002823982"
                                className="hover:text-muted-foreground transition-colors"
                              >
                                <span className="text-muted-foreground/60">
                                  Toll-free:{" "}
                                </span>
                                1-800-282-3982
                              </Link>
                            </div>
                          </li>
                          <li className="flex items-center gap-3 text-xs text-muted-foreground">
                            <Mail className="h-3.5 w-3.5 flex-shrink-0 text-muted-foreground/60" />
                            <Link
                              href="mailto:info@parchem.com"
                              className="hover:text-muted-foreground transition-colors"
                            >
                              info@parchem.com
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}

export default Header;

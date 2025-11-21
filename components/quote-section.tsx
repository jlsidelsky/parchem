'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useState } from 'react'

export function QuoteSection() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-foreground rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 container mx-auto px-4 lg:px-6">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground mb-4 text-balance">
              Get a Quick Quote Now
            </h2>
            <p className="text-lg text-primary-foreground/90 text-pretty">
              Enter a chemical name, synonym, or CAS® number below and we'll respond within 24 hours
            </p>
          </div>

          <div className="bg-card rounded-xl shadow-2xl p-6 md:p-8 border border-border/20">
            <div className="flex flex-col gap-4">
              <div className="flex flex-col sm:flex-row gap-3">
                <div className="relative flex-1">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                  <Input 
                    type="text"
                    placeholder="Search by chemical name, CAS#, or formula"
                    className="h-12 pl-10 text-base"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
                <Button className="h-12 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-medium whitespace-nowrap">
                  Get a Quote
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground text-center">
                Need help? Call us at <span className="font-medium text-foreground">1 (914) 654-6800</span> or email <span className="font-medium text-foreground">quotes@parchem.com</span>
              </p>
            </div>
          </div>

          {/* Additional Info */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12">
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-1">Fast Response</div>
              <div className="text-sm text-primary-foreground/80">Within 24 hours</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-1">Best Prices</div>
              <div className="text-sm text-primary-foreground/80">Competitive rates</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-primary-foreground mb-1">Quality Assured</div>
              <div className="text-sm text-primary-foreground/80">Certified products</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

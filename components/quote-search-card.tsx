'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import { useState } from 'react'

export function QuoteSearchCard() {
  const [searchQuery, setSearchQuery] = useState('')

  return (
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
  )
}


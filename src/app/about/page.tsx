import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "About Tippsy - A Social Connector for Bars and Nightlife",
  description: "Tippsy is a social connector designed to get you out of the house and into real conversations with real people—over a couple of drinks at a bar near you."
}

export default function AboutPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <Logo />
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 md:mb-16">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              About
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">About Tippsy</h1>
            <p className="text-xl text-muted-foreground">More Than a Match – It's an Experience</p>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-primary">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl mb-10 aspect-[16/9]">
              <Image 
                src="/images/tippsy-about.png" 
                alt="People enjoying time at a bar with Tippsy" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="lead text-lg dark:text-gray-200">
                  Tippsy isn't just another dating app. It's a social connector designed to get you out of the house 
                  and into real conversations with real people—over a couple of drinks at a bar near you. No more 
                  endless swiping, ghosting, or overthinking the perfect message. Just match, find a spot, and see 
                  where the night takes you.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 id="ditch-the-pressure" className="text-primary-foreground">Ditch the Pressure, Keep the Fun</h2>
                <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                  <p className="mb-0">
                    Traditional dating apps often pile on unnecessary expectations—long text convos, awkward first dates, 
                    and the feeling of being stuck in a commitment before you even meet. <strong>Tippsy cuts through all that.</strong> 
                    Our goal? Make it easy for you to connect with someone without the pressure. Grab a drink, have a laugh, 
                    and let the night unfold naturally.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="bars-the-perfect-meeting-place" className="text-primary-foreground">Bars: The Perfect Meeting Place</h2>
                <p>
                  Bars are more than just great social spots—they're safe, public spaces where you can enjoy 
                  yourself without worry. With ID checks, credit card records, and staff around, you're never 
                  truly alone. Whether you're looking for a casual drink, a new friend, or a potential spark, 
                  Tippsy makes meeting up simple and spontaneous.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 id="how-it-works" className="text-primary-foreground">How It Works</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">1</div>
                    <h3 className="text-lg font-semibold mb-1">Match Up</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">Find someone who shares your vibe.</p>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">2</div>
                    <h3 className="text-lg font-semibold mb-1">Pick a Spot</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">Tippsy helps you find a great bar between you and your match.</p>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">3</div>
                    <h3 className="text-lg font-semibold mb-1">Meet & Mingle</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">Put the phone away, grab a drink, and enjoy real conversation.</p>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <div className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary mb-2">4</div>
                    <h3 className="text-lg font-semibold mb-1">No Pressure</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400">No expectations. Just a great time.</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-6 shadow-sm border-amber-200 dark:border-amber-900/50 mt-10">
                <p className="font-medium text-lg mb-0 text-center">
                  <strong>Ready to stop texting and start living?</strong><br />
                  Download Tippsy and let the night take you somewhere exciting.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 
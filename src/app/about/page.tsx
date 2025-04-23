import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"
import { getAboutMetadata } from "@/lib/metadata"
import { Metadata } from "next"

export const metadata: Metadata = getAboutMetadata();

export default function AboutPage() {
  return (
    <>

      <main className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-primary/10 dark:from-gray-950 dark:via-gray-900 dark:to-primary/10 flex flex-col justify-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 py-12 md:py-20">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-primary/40 px-4 py-2 text-base font-semibold text-primary shadow-md mb-6">
              About
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent drop-shadow-lg">About Tippsy</h1>
            <p className="text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">More Than a Match – It's an Experience</p>
          </div>

          <section className="rounded-3xl shadow-2xl bg-white/90 dark:bg-gray-900/80 p-8 md:p-12 mb-16 border border-primary/10">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl mb-10 aspect-[16/9]">
              <Image 
                src="/images/tippsy-about.png" 
                alt="People enjoying time at a bar with Tippsy" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-14">
              <div className="space-y-4">
                <p className="lead text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium">
                  Tippsy isn't just another dating app. It's a social connector designed to get you out of the house 
                  and into real conversations with real people—over a couple of drinks at a bar near you. No more 
                  endless swiping, ghosting, or overthinking the perfect message. Just match, find a spot, and see 
                  where the night takes you.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 id="ditch-the-pressure" className="text-2xl md:text-3xl font-bold text-primary mb-2">Ditch the Pressure, Keep the Fun</h2>
                <div className="rounded-2xl border border-primary/10 p-6 bg-gradient-to-r from-primary/5 to-amber-100/30 dark:from-gray-800/80 dark:to-gray-900/70 shadow-md">
                  <p className="mb-0 text-base md:text-lg">
                    Traditional dating apps often pile on unnecessary expectations—long text convos, awkward first dates, 
                    and the feeling of being stuck in a commitment before you even meet. <strong>Tippsy cuts through all that.</strong> 
                    Our goal? Make it easy for you to connect with someone without the pressure. Grab a drink, have a laugh, 
                    and let the night unfold naturally.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="bars-the-perfect-meeting-place" className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-300 mb-2">Bars: The Perfect Meeting Place</h2>
                <div className="rounded-2xl border border-amber-200 dark:border-amber-900/30 p-6 bg-gradient-to-r from-amber-50/60 to-primary/5 dark:from-amber-950/30 dark:to-gray-900/70 shadow-lg">
                  <p className="mb-0 text-base md:text-lg">
                    Bars are more than just great social spots—they're <strong>safe, public spaces</strong> where you can enjoy 
                    yourself without worry. With ID checks, credit card records, and staff around, you're never 
                    truly alone. Whether you're looking for a casual drink, a new friend, or a potential spark, 
                    Tippsy makes meeting up <strong>simple and spontaneous</strong>.
                  </p>
                  <div className="grid gap-4 grid-cols-1 sm:grid-cols-3 mt-6">
                    <div className="rounded-lg bg-white/90 dark:bg-gray-800/80 p-4 text-center shadow hover:scale-105 transition-transform">
                      <p className="text-base font-semibold mb-0">✓ ID Verification</p>
                    </div>
                    <div className="rounded-lg bg-white/90 dark:bg-gray-800/80 p-4 text-center shadow hover:scale-105 transition-transform">
                      <p className="text-base font-semibold mb-0">✓ Public Environment</p>
                    </div>
                    <div className="rounded-lg bg-white/90 dark:bg-gray-800/80 p-4 text-center shadow hover:scale-105 transition-transform">
                      <p className="text-base font-semibold mb-0">✓ Staff Present</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="how-it-works" className="text-2xl md:text-3xl font-bold text-primary mb-6">How It Works</h2>
                <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                  <div className="rounded-2xl border border-primary/10 bg-white/95 dark:bg-gray-800/80 p-6 shadow-lg flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary mb-3 text-lg font-bold">1</div>
                    <h3 className="text-xl font-semibold mb-2">Match Up</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 text-center">Find someone who shares your vibe.</p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-white/95 dark:bg-gray-800/80 p-6 shadow-lg flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary mb-3 text-lg font-bold">2</div>
                    <h3 className="text-xl font-semibold mb-2">Pick a Spot</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 text-center">Tippsy helps you find a great bar between you and your match.</p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-white/95 dark:bg-gray-800/80 p-6 shadow-lg flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary mb-3 text-lg font-bold">3</div>
                    <h3 className="text-xl font-semibold mb-2">Meet & Mingle</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 text-center">Put the phone away, grab a drink, and enjoy real conversation.</p>
                  </div>
                  <div className="rounded-2xl border border-primary/10 bg-white/95 dark:bg-gray-800/80 p-6 shadow-lg flex flex-col items-center hover:shadow-2xl hover:scale-105 transition-transform">
                    <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/20 text-primary mb-3 text-lg font-bold">4</div>
                    <h3 className="text-xl font-semibold mb-2">No Pressure</h3>
                    <p className="text-base text-gray-700 dark:text-gray-300 text-center">No expectations. Just a great time.</p>
                  </div>
                </div>
              </div>
              
              <div className="rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-gradient-to-r from-amber-50/80 to-white/90 dark:from-amber-950/40 dark:to-gray-900/80 p-8 shadow-2xl mt-14">
                <p className="font-semibold text-xl md:text-2xl mb-0 text-center text-amber-900 dark:text-amber-200">
                  <strong>Ready to stop texting and start living?</strong><br />
                  Download Tippsy and let the night take you somewhere exciting.
                </p>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
} 
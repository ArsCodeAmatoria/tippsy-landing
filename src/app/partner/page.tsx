import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Partner With Tippsy - Advertising & Development Opportunities",
  description: "Explore partnership opportunities with Tippsy including bar advertising, alcohol brand promotion, and technical development collaborations."
}

export default function PartnerPage() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Link 
              href="/partner/es" 
              className="text-sm font-medium text-muted-foreground hover:text-primary"
            >
              Español
            </Link>
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Home
            </Link>
          </div>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 md:mb-16">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Partnership
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">Partner With Tippsy</h1>
            <p className="text-xl text-muted-foreground">Join us in transforming the social and nightlife experience</p>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-primary">
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="lead text-lg dark:text-gray-200">
                  Tippsy is creating a new social ecosystem connecting people and venues. We're looking 
                  for strategic partners who want to be part of this revolution in social networking and nightlife.
                </p>
              </div>
              
              <div className="space-y-4">
                <h2 id="venue-partnerships" className="text-primary-foreground">Bar & Venue Partnerships</h2>
                <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                  <p>
                    Join our network of featured venues and tap into a stream of new customers actively looking 
                    for great places to meet. Tippsy can help your establishment:
                  </p>
                  <ul className="mt-4">
                    <li>Increase foot traffic during slower periods</li>
                    <li>Attract a diverse audience of social app users</li>
                    <li>Create special promotions for Tippsy users</li>
                    <li>Gain visibility through our venue recommendation system</li>
                  </ul>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="brand-partnerships" className="text-primary-foreground">Alcohol & Beverage Brand Partnerships</h2>
                <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30 shadow-sm">
                  <p>
                    For alcohol and beverage brands, Tippsy offers unique advertising opportunities 
                    to reach an engaged audience of social drinkers:
                  </p>
                  <ul className="mt-4">
                    <li>Sponsored drink recommendations</li>
                    <li>In-app promotions and featured content</li>
                    <li>Brand integration in the social experience</li>
                    <li>Data-driven insights on consumer preferences</li>
                  </ul>
                  <p className="mt-4">
                    <strong>Note:</strong> All alcohol advertising strictly follows responsible marketing practices 
                    and age verification requirements.
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="tech-partnerships" className="text-primary-foreground">Technology Development Partnerships</h2>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Front-End Development</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      We're looking for partners skilled in:
                    </p>
                    <ul className="text-sm text-muted-foreground dark:text-gray-400 list-disc pl-5">
                      <li>Next.js</li>
                      <li>React</li>
                      <li>Tailwind CSS</li>
                      <li>TypeScript</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Mobile Development</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      We're building native experiences with:
                    </p>
                    <ul className="text-sm text-muted-foreground dark:text-gray-400 list-disc pl-5">
                      <li>Swift and SwiftUI for iOS</li>
                      <li>Kotlin and Jetpack Compose for Android</li>
                      <li>Cross-platform solutions</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Back-End Development</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      Our server-side tech includes:
                    </p>
                    <ul className="text-sm text-muted-foreground dark:text-gray-400 list-disc pl-5">
                      <li>Rust for performance-critical components</li>
                      <li>Node.js and TypeScript</li>
                      <li>PostgreSQL and Redis</li>
                    </ul>
                  </div>
                  
                  <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                    <h3 className="text-lg font-semibold mb-2">Design Partners</h3>
                    <p className="text-sm text-muted-foreground dark:text-gray-400 mb-2">
                      We value expertise in:
                    </p>
                    <ul className="text-sm text-muted-foreground dark:text-gray-400 list-disc pl-5">
                      <li>UI/UX design</li>
                      <li>Brand identity</li>
                      <li>Motion design</li>
                      <li>User testing and research</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="rounded-lg border bg-primary/5 dark:bg-primary-foreground/5 p-6 shadow-sm border-primary/20 dark:border-primary-foreground/20 mt-10">
                <h2 className="text-xl font-semibold mb-4 text-center">Get In Touch</h2>
                <p className="mb-4 text-center">
                  Interested in partnering with Tippsy? Contact our partnerships team to discuss opportunities.
                </p>
                <div className="flex justify-center">
                  <a 
                    href="mailto:tippsy.me.org@gmail.com" 
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
                  >
                    Contact: tippsy.me.org@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 
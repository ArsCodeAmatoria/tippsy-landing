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
                <h2 id="blockchain-partnerships" className="text-primary-foreground">Web3 & Blockchain Partnerships</h2>
                <div className="rounded-lg border p-4 bg-violet-50/50 dark:bg-violet-950/20 border-violet-200 dark:border-violet-900/30 shadow-sm">
                  <p>
                    Tippsy is pioneering the integration of blockchain technology for enhanced security, privacy, and user experience:
                  </p>
                  <ul className="mt-4">
                    <li><strong>Polkadot Decentralized Identity (DID)</strong> - Secure, self-sovereign digital identities for users</li>
                    <li><strong>Soulbound Tokens (SBTs)</strong> - Non-transferable tokens that represent user achievements and reputation</li>
                    <li><strong>Zero-Knowledge Proofs (ZKPs)</strong> - Privacy-preserving verification without revealing sensitive information</li>
                  </ul>
                  <p className="mt-4">
                    We're looking for partners with expertise in these technologies to help build the next generation of social applications.
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
                
                <div className="mt-6">
                  <h3 className="text-lg font-semibold mb-4">Technologies We Work With</h3>
                  <div className="flex flex-wrap gap-6 items-center justify-center mt-4 bg-card rounded-lg border p-6 dark:bg-gray-800/50">
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/nextjs-logo.svg"
                          alt="Next.js Logo"
                          fill
                          className="object-contain dark:brightness-200 dark:invert"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Next.js</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/rust-logo.svg"
                          alt="Rust Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Rust</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/polkadot-logo.svg"
                          alt="Polkadot Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Polkadot</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/react-logo.svg"
                          alt="React Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">React</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/tailwind-logo-light.svg"
                          alt="Tailwind CSS Logo"
                          fill
                          className="object-contain hidden dark:block"
                        />
                        <Image
                          src="/images/tech-logos/tailwind-logo-dark.svg"
                          alt="Tailwind CSS Logo"
                          fill
                          className="object-contain block dark:hidden"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Tailwind</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/nodejs-logo.svg"
                          alt="Node.js Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Node.js</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/fastapi-logo.svg"
                          alt="FastAPI Logo"
                          fill
                          className="object-contain"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">FastAPI</span>
                    </div>
                    
                    <div className="flex flex-col items-center">
                      <div className="h-12 w-12 relative mb-2">
                        <Image
                          src="/images/tech-logos/llama-logo.svg"
                          alt="Llama AI Logo"
                          fill
                          className="object-contain dark:invert"
                        />
                      </div>
                      <span className="text-xs text-muted-foreground">Llama AI</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h2 id="roadmap" className="text-primary-foreground">Tippsy Development Roadmap</h2>
                <div className="rounded-lg border bg-card p-4 shadow-sm dark:bg-gray-800/70 dark:border-gray-700">
                  <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                  
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 group-odd:order-1 group-even:order-1 dark:bg-slate-700 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-600 font-bold dark:text-slate-200">Q3</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-900 p-4 rounded-xl shadow-sm border border-slate-200 dark:border-slate-800">
                        <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">Q3 2024: Security & Authentication</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Implement Polkadot Decentralized Identity (DID) for secure user authentication</li>
                            <li>Develop backend Rust API with FastAPI integration for authentication flows</li>
                            <li>Create privacy-preserving Zero-Knowledge Proof verification system</li>
                            <li>Launch Soulbound Tokens (SBTs) for user achievements and reputation</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 group-odd:order-1 group-even:order-1 dark:bg-slate-700 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-600 font-bold dark:text-slate-200">Q4</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-950/30 dark:to-amber-900/30 p-4 rounded-xl shadow-sm border border-amber-200 dark:border-amber-800/30">
                        <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">Q4 2024: AI Integration & Social Discovery</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Integrate Llama AI for personalized venue recommendations</li>
                            <li>Launch AI-powered social matching algorithm</li>
                            <li>Build venue discovery features with AI-enhanced filtering</li>
                            <li>Develop personalized experience paths based on user preferences</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 group-odd:order-1 group-even:order-1 dark:bg-slate-700 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-600 font-bold dark:text-slate-200">Q1</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-violet-50 to-violet-100 dark:from-violet-950/30 dark:to-violet-900/30 p-4 rounded-xl shadow-sm border border-violet-200 dark:border-violet-800/30">
                        <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">Q1 2025: Mobile Apps & Venue Partnerships</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Release native mobile applications for iOS and Android</li>
                            <li>Launch venue partnership program with QR code check-ins</li>
                            <li>Implement in-app promotions and special offers for partners</li>
                            <li>Create analytics dashboard for venue partners</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
                    <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
                      <div className="flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 bg-slate-50 group-odd:order-1 group-even:order-1 dark:bg-slate-700 dark:border-slate-700 shadow-sm">
                        <span className="text-slate-600 font-bold dark:text-slate-200">Q2</span>
                      </div>
                      
                      <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/30 dark:to-green-900/30 p-4 rounded-xl shadow-sm border border-green-200 dark:border-green-800/30">
                        <div className="font-bold text-slate-800 dark:text-slate-100 mb-1">Q2 2025: Global Expansion & Brand Partnerships</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                          <ul className="list-disc pl-5 space-y-1 mt-1">
                            <li>Expand to major international markets</li>
                            <li>Launch brand partnership platform for alcohol and beverage companies</li>
                            <li>Implement sponsored recommendations with brand integration</li>
                            <li>Develop cross-platform analytics for measuring campaign effectiveness</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    
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
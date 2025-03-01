import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { getPartnerMetadata } from "@/lib/metadata"

export const metadata: Metadata = getPartnerMetadata();

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
            <p className="text-xl text-muted-foreground">Join us in transforming how people connect in the real world</p>
          </div>
          
          <div className="prose prose-gray max-w-none dark:prose-invert prose-headings:scroll-mt-28 prose-headings:font-bold prose-headings:tracking-tight prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border dark:prose-p:text-gray-300 dark:prose-li:text-gray-300 dark:prose-strong:text-white dark:prose-a:text-primary">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl mb-10 aspect-[16/9]">
              <Image 
                src="/images/tippsy-about.png" 
                alt="Tippsy Partnership Opportunities" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-10">
              <div className="space-y-4">
                <p className="lead text-lg dark:text-gray-200">
                  Tippsy is at the forefront of bringing people together in real-world settings, 
                  particularly in the vibrant atmosphere of bars and nightlife venues. We're 
                  looking for strategic partners who share our vision and want to be part of 
                  this social revolution.
                </p>
              </div>

              <div>
                <h2 id="bar-venue-partnerships" className="text-primary-foreground">Bar & Venue Partnerships</h2>
                <div className="rounded-lg border p-5 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700 mb-6">
                  <p className="mb-4">
                    As a Tippsy partner venue, you'll gain access to a new customer base actively 
                    looking for places to connect. Partner benefits include:
                  </p>
                  <ul className="space-y-2">
                    <li>Featured placement in the Tippsy app</li>
                    <li>Increased foot traffic during typically slower hours</li>
                    <li>Customer analytics and insights</li>
                    <li>Promotions and special event opportunities</li>
                    <li>Integration with your existing loyalty programs</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 id="alcohol-partnerships" className="text-primary-foreground">Alcohol & Beverage Brand Partnerships</h2>
                <div className="rounded-lg border p-5 bg-amber-50/50 dark:bg-amber-950/20 border-amber-200 dark:border-amber-900/30 shadow-sm mb-6">
                  <p className="mb-4">
                    For beverage brands looking to increase visibility and sales, Tippsy offers 
                    unique promotional opportunities directly at the point of consumption:
                  </p>
                  <ul className="space-y-2">
                    <li>In-app featured promotions and recommendations</li>
                    <li>Direct marketing to age-verified users</li>
                    <li>Sponsored events and meetups</li>
                    <li>Brand visibility in venue partnerships</li>
                    <li>Customer preference data and market insights</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 id="web3-blockchain" className="text-primary-foreground">Web3 & Blockchain Partnerships</h2>
                <div className="rounded-lg border p-5 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700 mb-6">
                  <p className="mb-4">
                    Tippsy embraces blockchain technology to enhance user experience and security. 
                    We're exploring partnerships in:
                  </p>
                  <ul className="space-y-2">
                    <li>Identity verification solutions</li>
                    <li>Loyalty token systems</li>
                    <li>Smart contract implementation for rewards</li>
                    <li>Decentralized social graph development</li>
                    <li>Crypto payment integrations for venue tab management</li>
                  </ul>
                </div>
              </div>

              <div>
                <h2 id="technology-development" className="text-primary-foreground">Technology Development Partnerships</h2>
                <div className="rounded-lg border p-5 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700 mb-6">
                  <p className="mb-4">
                    We're building Tippsy using modern technology and are open to collaborations 
                    with developers and tech companies interested in:
                  </p>
                  <ul className="space-y-2">
                    <li>API integrations</li>
                    <li>Location-based service enhancements</li>
                    <li>AI and machine learning for matchmaking</li>
                    <li>Security and privacy solutions</li>
                    <li>Mobile development innovations</li>
                  </ul>
                  <p className="mt-4">
                    Our tech stack includes:
                  </p>
                  <div className="grid grid-cols-3 md:grid-cols-5 gap-4 mt-4">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/nextjs-logo.svg" width={40} height={40} alt="Next.js" />
                      </div>
                      <p className="text-xs font-medium">Next.js</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/react-logo.svg" width={40} height={40} alt="React" />
                      </div>
                      <p className="text-xs font-medium">React</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image 
                          src="/images/tech-logos/tailwind-logo-dark.svg" 
                          width={40} 
                          height={40} 
                          alt="Tailwind CSS"
                          className="dark:hidden" 
                        />
                        <Image 
                          src="/images/tech-logos/tailwind-logo-light.svg" 
                          width={40} 
                          height={40} 
                          alt="Tailwind CSS"
                          className="hidden dark:block" 
                        />
                      </div>
                      <p className="text-xs font-medium">Tailwind</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/nodejs-logo.svg" width={40} height={40} alt="Node.js" />
                      </div>
                      <p className="text-xs font-medium">Node.js</p>
                    </div>
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/rust-logo.svg" width={40} height={40} alt="Rust" />
                      </div>
                      <p className="text-xs font-medium">Rust</p>
                    </div>
                  </div>
                  <div className="flex justify-center mt-6">
                    <div className="text-center">
                      <div className="flex justify-center mb-2">
                        <Image src="/images/tech-logos/llama-logo.svg" width={60} height={60} alt="LLaMA AI" />
                      </div>
                      <p className="text-xs font-medium">LLaMA AI</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-6 shadow-sm border-amber-200 dark:border-amber-900/50 mt-8">
                <h3 className="text-xl font-semibold mb-3 text-center">Ready to explore a partnership?</h3>
                <p className="text-center mb-4">
                  We're excited to discuss how we can work together to create meaningful 
                  real-world connections while growing your business.
                </p>
                <div className="flex justify-center">
                  <a
                    href="mailto:partners@tippsy.io"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                  >
                    Contact Our Partnership Team
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
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
      
      <main className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-primary/10 dark:from-gray-950 dark:via-gray-900 dark:to-primary/10 flex flex-col justify-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 py-12 md:py-20">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-primary/40 px-4 py-2 text-base font-semibold text-primary shadow-md mb-6">
              Partnership
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent drop-shadow-lg">Partner With Tippsy</h1>
            <p className="text-2xl text-muted-foreground font-medium max-w-2xl mx-auto">Join us in transforming how people connect in the real world</p>
          </div>

          <section className="rounded-3xl shadow-2xl bg-white/90 dark:bg-gray-900/80 p-8 md:p-12 mb-16 border border-primary/10">
            <div className="relative w-full rounded-xl overflow-hidden shadow-xl mb-10 aspect-[16/9]">
              <Image 
                src="/images/tippsy-partner.png" 
                alt="Tippsy Partnership Opportunities" 
                fill 
                className="object-cover"
                priority
              />
            </div>
            
            <div className="space-y-14">
              <div className="space-y-4">
                <p className="lead text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium">
                  Tippsy is at the forefront of bringing people together in real-world settings, 
                  particularly in the vibrant atmosphere of bars and nightlife venues. We're 
                  looking for strategic partners who share our vision and want to be part of 
                  this social revolution.
                </p>
              </div>

              <div>
                <h2 id="bar-venue-partnerships" className="text-2xl md:text-3xl font-bold text-primary mb-2">Bar & Venue Partnerships</h2>
                <div className="rounded-2xl border border-primary/10 p-6 bg-gradient-to-r from-primary/5 to-amber-100/30 dark:from-gray-800/80 dark:to-gray-900/70 shadow-md mb-8">

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
                <h2 id="alcohol-partnerships" className="text-2xl md:text-3xl font-bold text-amber-600 dark:text-amber-300 mb-2">Alcohol & Beverage Brand Partnerships</h2>
                <div className="rounded-2xl border border-amber-200 dark:border-amber-900/30 p-6 bg-gradient-to-r from-amber-50/60 to-primary/5 dark:from-amber-950/30 dark:to-gray-900/70 shadow-lg mb-8">
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
                <h2 id="web3-blockchain" className="text-2xl md:text-3xl font-bold text-primary mb-2">Web3 & Blockchain Partnerships</h2>
                <div className="rounded-2xl border border-primary/10 p-6 bg-gradient-to-r from-primary/5 to-amber-100/30 dark:from-gray-800/80 dark:to-gray-900/70 shadow-md mb-8">
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
                <h2 id="technology-development" className="text-2xl md:text-3xl font-bold text-primary mb-2">Technology Development Partnerships</h2>
                <div className="rounded-3xl border border-primary/10 p-8 md:p-12 bg-gradient-to-br from-primary/10 via-slate-100 to-amber-100/30 dark:from-gray-900 dark:via-gray-950 dark:to-primary/20 shadow-2xl">
  <h3 className="text-3xl md:text-4xl font-extrabold mb-6 bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent drop-shadow animate-gradient-x text-center">Technology Development Partnerships</h3>
  <p className="text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium text-center mb-8 max-w-2xl mx-auto">
    We're building Tippsy using modern technology and are open to collaborations with developers and tech companies interested in pushing boundaries.
  </p>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
    <div>
      <h4 className="text-xl font-semibold text-primary mb-4 text-center md:text-left">Collaboration Areas</h4>
      <ul className="space-y-3">
        <li className="flex items-center gap-3 rounded-xl bg-primary/10 dark:bg-primary/20 p-3 hover:bg-primary/20 transition">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2"/><path d="M7 9l5-5 5 5"/><path d="M12 4v12"/></svg>
          <span>API integrations</span>
        </li>
        <li className="flex items-center gap-3 rounded-xl bg-primary/10 dark:bg-primary/20 p-3 hover:bg-primary/20 transition">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z"/></svg>
          <span>Location-based service enhancements</span>
        </li>
        <li className="flex items-center gap-3 rounded-xl bg-primary/10 dark:bg-primary/20 p-3 hover:bg-primary/20 transition">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3l-13 13a2.121 2.121 0 0 1-3-3l13-13z"/></svg>
          <span>AI &amp; machine learning for matchmaking</span>
        </li>
        <li className="flex items-center gap-3 rounded-xl bg-primary/10 dark:bg-primary/20 p-3 hover:bg-primary/20 transition">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="7" rx="2"/><path d="M16 3v4"/><path d="M8 3v4"/></svg>
          <span>Security &amp; privacy solutions</span>
        </li>
        <li className="flex items-center gap-3 rounded-xl bg-primary/10 dark:bg-primary/20 p-3 hover:bg-primary/20 transition">
          <svg className="h-6 w-6 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect width="18" height="14" x="3" y="5" rx="2"/><path d="M8 21h8"/></svg>
          <span>Mobile development innovations</span>
        </li>
      </ul>
    </div>
    <div className="flex flex-col justify-center items-center">
      <h4 className="text-xl font-semibold text-primary mb-4 text-center">Our Tech Stack</h4>
      <ul className="w-full max-w-xs mx-auto rounded-xl bg-white/80 dark:bg-gray-900/80 border border-primary/10 shadow-lg p-6 space-y-3">
        <li className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">Next.js</li>
        <li className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">React</li>
        <li className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">Tailwind CSS</li>
        <li className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">Node.js</li>
        <li className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">Rust</li>
        <li className="text-base md:text-lg font-semibold text-gray-800 dark:text-gray-100 text-center">LLaMA AI</li>
      </ul>
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
          </section>
        </div>
      </main>
    </>
  )
} 
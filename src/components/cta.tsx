"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="bg-gray-800 py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tighter text-white md:text-4xl/tight lg:text-5xl">
            Ready to Experience Tippsy?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300 md:text-xl">
            Join our community today and be the first to know when we launch in your area.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-[#ff007F] hover:bg-[#d00068] text-white">
              <Link href="#contact">
                Join Waitlist
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-gray-400 text-gray-200 hover:bg-gray-700">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
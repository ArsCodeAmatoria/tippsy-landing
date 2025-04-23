"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function CTA() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-gray-900 to-amber-100/10 dark:from-gray-950 dark:via-gray-900 dark:to-primary/20">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="mx-auto max-w-xl text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent drop-shadow-xl mb-4 animate-gradient-x">
            Ready to Experience Tippsy?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-gray-300 md:text-xl">
            Join our community today and be the first to know when we launch in your area.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-gradient-to-r from-primary to-amber-500 hover:from-amber-500 hover:to-primary text-white shadow-lg transition-all duration-200">
              <Link href="#contact">
                Join Waitlist
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-primary/40 text-gray-200 hover:bg-primary/10 hover:text-primary transition-all duration-200">
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
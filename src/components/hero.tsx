"use client"

import * as React from "react"
import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden py-16 md:py-24 lg:py-32">
      <div className="container flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl space-y-6"
        >
          <h1 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
            Meet new people & find great bars with <span className="logo-font text-6xl md:text-7xl">Tippsy</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-lg text-muted-foreground md:text-xl">
            The social matchmaking app that connects you with new friends and helps you discover the best bars in your area.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button asChild size="lg" className="gap-2">
              <Link href="https://apps.apple.com" target="_blank">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-5 w-5"
                >
                  <path d="M12 19c-2.3 0-6.4-.2-8.1-.6-.7-.2-1.2-.7-1.4-1.4-.3-1.1-.5-3.4-.5-5s.2-3.9.5-5c.2-.7.7-1.2 1.4-1.4C5.6 5.2 9.7 5 12 5s6.4.2 8.1.6c.7.2 1.2.7 1.4 1.4.3 1.1.5 3.4.5 5s-.2 3.9-.5 5c-.2.7-.7 1.2-1.4 1.4-1.7.4-5.8.6-8.1.6z" />
                  <circle cx="12" cy="12" r="3" />
                  <path d="m19 12-7-5" />
                </svg>
                Download for iOS
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="#features">Learn More</Link>
            </Button>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 flex justify-center"
        >
          <div className="relative h-[500px] w-[250px] overflow-hidden rounded-[40px] border-8 border-foreground shadow-xl dark:border-background">
            <div className="absolute inset-0 flex items-center justify-center bg-slate-50 text-center text-sm">
              <p>iOS App Screenshot<br />(Replace with actual app screenshot)</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
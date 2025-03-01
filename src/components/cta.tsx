"use client"

import * as React from "react"
import Link from "next/link"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function CTA() {
  const { t } = useLanguage()
  
  return (
    <section className="bg-accent py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-2xl flex flex-col items-center justify-center space-y-6 text-center"
        >
          <h2 className="mx-auto max-w-xl text-3xl font-bold tracking-tighter text-accent-foreground md:text-4xl/tight lg:text-5xl">
            {t("cta.title")}
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-accent-foreground/80 md:text-xl">
            {t("cta.subtitle")}
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Button asChild size="lg" className="bg-foreground text-background hover:bg-foreground/90">
              <Link href="#contact">
                {t("cta.joinWaitlist")}
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild className="border-foreground text-foreground hover:bg-foreground/10">
              <Link href="#features">{t("cta.learnMore")}</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
} 
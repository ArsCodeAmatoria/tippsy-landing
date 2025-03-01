"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Users, MapPin, Beer, Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function Features() {
  const { t } = useLanguage()
  
  const features = [
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: t("features.social.title"),
      description: t("features.social.description"),
    },
    {
      icon: <MapPin className="h-10 w-10 text-primary" />,
      title: t("features.bars.title"),
      description: t("features.bars.description"),
    },
    {
      icon: <Beer className="h-10 w-10 text-primary" />,
      title: t("features.deals.title"),
      description: t("features.deals.description"),
    },
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: t("features.safety.title"),
      description: t("features.safety.description"),
    },
  ]

  return (
    <section id="features" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tighter md:text-4xl/tight">
              {t("features.title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
              {t("features.subtitle")}
            </p>
          </motion.div>
          <div className="mx-auto mt-16 grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center space-y-4 rounded-lg border p-6 text-center"
              >
                <div className="rounded-full bg-muted p-4">{feature.icon}</div>
                <h3 className="text-xl font-bold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Users, MapPin, Beer, Heart } from "lucide-react"

const features = [
  {
    icon: <Users className="h-10 w-10 text-primary" />,
    title: "Social Matchmaking",
    description: "Connect with like-minded people based on interests, location, and preferences.",
  },
  {
    icon: <MapPin className="h-10 w-10 text-primary" />,
    title: "Bar Discovery",
    description: "Find the best bars nearby with ratings, reviews, and real-time availability.",
  },
  {
    icon: <Beer className="h-10 w-10 text-primary" />,
    title: "Exclusive Deals",
    description: "Enjoy special discounts and promotions at partner bars and venues.",
  },
  {
    icon: <Heart className="h-10 w-10 text-primary" />,
    title: "Safe Community",
    description: "Verified profiles and community guidelines ensure a safe and respectful experience.",
  },
]

export function Features() {
  return (
    <section id="features" className="py-16 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
              Everything you need to enhance your social life
            </h2>
            <p className="mx-auto mt-4 max-w-[700px] text-muted-foreground md:text-xl">
              Tippsy combines social networking with bar discovery to create the ultimate nightlife companion.
            </p>
          </motion.div>
          <div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
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
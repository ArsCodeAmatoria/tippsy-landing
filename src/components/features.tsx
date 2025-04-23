"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Users, MapPin, Beer, Heart } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: <Users className="h-10 w-10 text-[#ff007F]" />,
      title: "Social Networking",
      description: "Connect with like-minded people who share your interests and preferences.",
    },
    {
      icon: <MapPin className="h-10 w-10 text-[#ff007F]" />,
      title: "Bar Discovery",
      description: "Find the best bars and venues in your area with our curated recommendations.",
    },
    {
      icon: <Beer className="h-10 w-10 text-[#ff007F]" />,
      title: "Exclusive Deals",
      description: "Get access to special promotions and happy hour deals only available to Tippsy users.",
    },
    {
      icon: <Heart className="h-10 w-10 text-[#ff007F]" />,
      title: "Safe Experiences",
      description: "Enjoy a secure and vetted community with features designed for your comfort and safety.",
    },
  ]

  return (
    <section id="features" className="py-20 md:py-32 bg-gradient-to-br from-primary/10 via-gray-900 to-amber-100/10 dark:from-gray-950 dark:via-gray-900 dark:to-primary/20">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className="mx-auto max-w-2xl text-4xl md:text-5xl font-extrabold tracking-tighter bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent drop-shadow-xl mb-4 animate-gradient-x">
              Why Choose Tippsy
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300 md:text-xl">
              Our app combines social networking with nightlife discovery to create memorable experiences.
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
                className="flex flex-col items-center space-y-4 rounded-2xl border border-primary/10 bg-gradient-to-r from-primary/10 to-amber-100/20 dark:from-gray-800/80 dark:to-gray-900/70 shadow-xl p-8 text-center transition-all duration-200 hover:scale-105 hover:shadow-2xl"
              >
                <div className="rounded-full bg-gray-900 p-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
} 
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
    <section id="features" className="py-16 md:py-24 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="w-full"
          >
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tighter text-white md:text-4xl/tight">
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
                className="flex flex-col items-center space-y-4 rounded-lg border border-gray-700 bg-gray-800 p-6 text-center"
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
"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const { t } = useLanguage()

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, you would handle the form submission here
    // For now, we'll just simulate a successful submission
    setSubmitted(true)
  }

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">{t("contact.title")}</h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground md:text-xl">
              {t("contact.subtitle")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-md"
          >
            <div className="rounded-lg border p-6 md:p-8">
              <h3 className="mb-4 text-xl font-bold">{t("contact.waitlistTitle")}</h3>
              <p className="mb-6 text-sm text-muted-foreground">
                {t("contact.waitlistInfo")}
              </p>
              
              {submitted ? (
                <div className="rounded-md bg-primary/10 p-4 text-center">
                  <p className="text-sm font-medium text-primary">
                    {t("contact.thanks")}
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      {t("contact.emailLabel")}
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={t("contact.emailPlaceholder")}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    <Send className="mr-2 h-4 w-4" /> {t("contact.submitBtn")}
                  </Button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
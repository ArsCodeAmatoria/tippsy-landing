"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"

export function Contact() {
  const [email, setEmail] = React.useState("")
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const { t } = useLanguage()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    
    try {
      const response = await fetch('/api/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }
      
      setSubmitted(true);
    } catch (err: any) {
      setError(err.message || 'Failed to subscribe. Please try again.');
      console.error('Subscription error:', err);
    } finally {
      setLoading(false);
    }
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
                  
                  {error && (
                    <div className="rounded-md bg-destructive/10 p-3">
                      <p className="text-sm font-medium text-destructive">{error}</p>
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full" disabled={loading}>
                    {loading ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Processing...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" /> {t("contact.submitBtn")}
                      </>
                    )}
                  </Button>
                  
                  {/* Mailchimp logo */}
                  <div className="mt-4 flex flex-col items-center justify-center">
                    <p className="text-xs text-muted-foreground mb-2">Powered by</p>
                    <Link 
                      href="https://mailchimp.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <div className="relative h-8 w-32">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 644 150" className="h-8 w-auto fill-current text-muted-foreground">
                          <path d="M133.5 107.2c-4.3 0-7.9-3.5-7.9-7.9 0-4.3 3.5-7.9 7.9-7.9 4.3 0 7.9 3.5 7.9 7.9 0 4.4-3.5 7.9-7.9 7.9zm0-28.5c-11.4 0-20.6 9.2-20.6 20.6 0 11.4 9.2 20.6 20.6 20.6 11.4 0 20.6-9.2 20.6-20.6 0-11.4-9.2-20.6-20.6-20.6zM40.9 150h-6.5V13C34.4 5.8 40.2 0 47.4 0h23.7v6.5H47.4c-3.6 0-6.5 2.9-6.5 6.5v137zM186.1 56.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h28.3V37c0-3.6-2.9-6.5-6.5-6.5h-28.3c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h28.3c10.8 0 19.6 8.8 19.6 19.6v6.5h17c7.2 0 13 5.8 13 13v28.4c0 7.2-5.8 13-13 13h-3.8v39.6c0 7.2-5.8 13-13 13h-47.8c-7.2 0-13-5.8-13-13V78h-3.8c-7.2 0-13-5.8-13-13V36.5c0-7.2 5.8-13 13-13h19.6v6.5h-19.6c-3.6 0-6.5 2.9-6.5 6.5v28.4c0 3.6 2.9 6.5 6.5 6.5h10.3v52.6c0 3.6 2.9 6.5 6.5 6.5h47.8c3.6 0 6.5-2.9 6.5-6.5V78h10.3c3.6 0 6.5-2.9 6.5-6.5v-28c0-3.6-2.9-6.5-6.5-6.5h-58.8V56.4h-.2zm86.6 37.3c0-20.5 16.7-37.3 37.3-37.3 20.5 0 37.3 16.7 37.3 37.3 0 20.5-16.7 37.3-37.3 37.3-20.5-.1-37.3-16.8-37.3-37.3zm37.3 30.7c17 0 30.7-13.8 30.7-30.7 0-17-13.8-30.7-30.7-30.7-17 0-30.7 13.8-30.7 30.7-.1 17 13.7 30.7 30.7 30.7zm73.2-61.5c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h61.7c3.6 0 6.5 2.9 6.5 6.5v23.4h-6.5V63.2h-61.7v75.2c0 3.6 2.9 6.5 6.5 6.5h48.5c3.6 0 6.5-2.9 6.5-6.5V115h6.5v23.4c0 7.2-5.8 13-13 13h-48.5c-7.2 0-13-5.8-13-13V63.2zm111.5 0c-7.2 0-13-5.8-13-13V36.5c0-7.2 5.8-13 13-13h61.8c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5h-61.8c-3.6 0-6.5 2.9-6.5 6.5v13.7c0 3.6 2.9 6.5 6.5 6.5h55.4c7.2 0 13 5.8 13 13v42.9c0 7.2-5.8 13-13 13h-2.6v13.7c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5v-13.7h-46.3v13.7c0 3.6-2.9 6.5-6.5 6.5s-6.5-2.9-6.5-6.5v-13.7h-1.7c-7.2 0-13-5.8-13-13V93.2c0-7.2 5.8-13 13-13h61.8c3.6 0 6.5 2.9 6.5 6.5s-2.9 6.5-6.5 6.5h-61.8c-3.6 0-6.5 2.9-6.5 6.5v42.9c0 3.6 2.9 6.5 6.5 6.5h68.8c3.6 0 6.5-2.9 6.5-6.5V93.2c0-3.6-2.9-6.5-6.5-6.5h-55.4zm58.4-49.3h6.5v16.3h-6.5V13.7zm9.8-6.5c0 3.6 2.9 6.5 6.5 6.5s6.5-2.9 6.5-6.5c0-3.6-2.9-6.5-6.5-6.5s-6.5 2.9-6.5 6.5zM631 49.9c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h6.5c3.6 0 6.5 2.9 6.5 6.5v93.6c0 3.6-2.9 6.5-6.5 6.5h-6.5c-3.6 0-6.5-2.9-6.5-6.5V49.9zm-30.7 0c-3.6 0-6.5-2.9-6.5-6.5s2.9-6.5 6.5-6.5h6.5c3.6 0 6.5 2.9 6.5 6.5v93.6c0 3.6-2.9 6.5-6.5 6.5h-6.5c-3.6 0-6.5-2.9-6.5-6.5V49.9z" fillRule="evenodd" clipRule="evenodd"/>
                        </svg>
                      </div>
                    </Link>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 
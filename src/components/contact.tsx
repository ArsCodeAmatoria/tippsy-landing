"use client"

import * as React from "react"
import { motion } from "framer-motion"
import { Send } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"

export function Contact() {
  const [email, setEmail] = React.useState("")
  const [ageVerified, setAgeVerified] = React.useState(false)
  const [submitted, setSubmitted] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!ageVerified) {
      setError("You must confirm you are of legal drinking age to continue.")
      return
    }
    
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

  // Render the age verification label with a link to Terms of Service
  const renderAgeVerificationLabel = () => {
    return (
      <>
        I confirm that I am of legal drinking age according to the regulations in my country of residence. By checking this box, I agree to the{' '}
        <Link href="/terms" className="text-primary hover:underline">
          Terms of Service
        </Link>
        {' '}and to receive occasional emails from Tippsy.
      </>
    );
  };

  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-3xl flex flex-col items-center justify-center space-y-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-white">Stay Updated</h2>
            <p className="mx-auto mt-4 max-w-2xl text-gray-300 md:text-xl">
              Join our waitlist to be the first to know when Tippsy launches in your area.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="w-full max-w-md"
          >
            <div className="rounded-lg border border-gray-700 bg-gray-800 p-6 md:p-8">
              <h3 className="mb-4 text-xl font-bold text-white">Join the Waitlist</h3>
              <p className="mb-6 text-sm text-gray-300">
                Be the first to experience Tippsy when we launch. We'll notify you as soon as we're available in your area.
              </p>
              
              {submitted ? (
                <div className="rounded-md bg-[#ff007F]/20 p-4 text-center">
                  <p className="text-sm font-medium text-[#ff007F]">
                    Thanks for signing up! We'll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-200">
                      Email Address
                    </label>
                    <input
                      type="email"
                      id="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                      className="w-full rounded-md border border-gray-700 bg-gray-900 px-3 py-2 text-sm text-gray-200 ring-offset-background placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff007F]"
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2 pt-2">
                    <div className="flex h-5 items-center">
                      <input
                        id="age-verification"
                        name="age-verification"
                        type="checkbox"
                        checked={ageVerified}
                        onChange={(e) => setAgeVerified(e.target.checked)}
                        className="h-4 w-4 rounded border-gray-600 text-[#ff007F] focus:ring-[#ff007F]"
                      />
                    </div>
                    <label htmlFor="age-verification" className="text-xs text-left text-gray-300">
                      {renderAgeVerificationLabel()}
                    </label>
                  </div>
                  
                  {error && (
                    <div className="rounded-md bg-red-900/30 p-3">
                      <p className="text-sm font-medium text-red-400">{error}</p>
                    </div>
                  )}
                  
                  <Button type="submit" className="w-full bg-[#ff007F] hover:bg-[#d00068]" disabled={loading}>
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
                        <Send className="mr-2 h-4 w-4" /> Subscribe
                      </>
                    )}
                  </Button>
                  
                  {/* Mailchimp logo */}
                  <div className="mt-6 flex flex-col items-center justify-center">
                    <Link 
                      href="https://mailchimp.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-block"
                    >
                      <Image 
                        src="/images/mailchimp-logo.png" 
                        alt="Powered by Mailchimp" 
                        width={200} 
                        height={40} 
                        style={{ height: 'auto' }}
                        className="max-w-[200px]"
                      />
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
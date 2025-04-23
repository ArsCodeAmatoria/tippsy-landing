import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { getPrivacyMetadata } from "@/lib/metadata"

export const metadata: Metadata = getPrivacyMetadata();

export default function PrivacyPolicy() {
  return (
    <>
      
      
      <main className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-primary/10 dark:from-gray-950 dark:via-gray-900 dark:to-primary/10 flex flex-col justify-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 py-12 md:py-20">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-primary/40 px-4 py-2 text-base font-semibold text-primary shadow-md mb-6">
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent drop-shadow-lg">Privacy Policy</h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          
          <section className="rounded-3xl shadow-2xl bg-white/90 dark:bg-gray-900/80 p-8 md:p-12 mb-16 border border-primary/10">
            <p className="lead text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium">
              At Tippsy, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
            
            <p className="mb-6">
              Please read this policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the application.
            </p>
            
            <h2 id="information-we-collect" className="text-2xl md:text-3xl font-bold text-primary mb-2">Information We Collect</h2>
            
            <h3 className="text-xl font-semibold text-primary mb-2">Personal Data</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-2 dark:text-gray-300">
              <li><strong>Register for our app</strong> - Creating an account with Tippsy</li>
              <li><strong>Sign up for our waitlist</strong> - Joining to be notified of launch</li>
              <li><strong>Create a user profile</strong> - Setting up your preferences and details</li>
              <li><strong>Participate in features</strong> - Using social and messaging functions</li>
              <li><strong>Contact us</strong> - Reaching out for customer service</li>
            </ul>
            
            <p className="mt-6">The personal information we may collect includes:</p>
            <ul className="space-y-2 dark:text-gray-300">
              <li><strong>Name</strong> - Your first and last name</li>
              <li><strong>Email address</strong> - For account creation and communication</li>
              <li><strong>Phone number</strong> - For verification and notifications</li>
              <li><strong>Date of birth</strong> - To verify you are of legal drinking age</li>
              <li><strong>Profile information</strong> - Such as interests and preferences</li>
              <li><strong>Location data</strong> - When using location-based features</li>
            </ul>
            
            <h3 className="text-xl font-semibold text-primary mt-8 mb-2">Usage Data</h3>
            <div className="space-y-4">
              <p>
                We may also collect information that your browser or device sends whenever 
                you visit our website or use our app:
              </p>
              <div className="rounded-2xl border border-primary/10 p-6 bg-gradient-to-r from-primary/5 to-amber-100/30 dark:from-gray-800/80 dark:to-gray-900/70 shadow-md mb-8">
                <ul className="space-y-2 dark:text-gray-300">
                  <li><strong>IP address</strong> - Your device's internet protocol address</li>
                  <li><strong>Browser details</strong> - Type, version, and settings</li>
                  <li><strong>Device information</strong> - Type, model, and operating system</li>
                  <li><strong>Usage patterns</strong> - Time spent on pages and features used</li>
                  <li><strong>Unique identifiers</strong> - Device ID and other technical markers</li>
                  <li><strong>Diagnostic data</strong> - Error reports and performance data</li>
                </ul>
              </div>
            </div>
            
            <h2 id="how-we-use-your-information" className="text-2xl md:text-3xl font-bold text-primary mb-2">How We Use Your Information</h2>
            <div className="space-y-4">
              <p>We may use the information we collect for various purposes, including to:</p>
              <div className="rounded-2xl border border-primary/10 p-6 bg-gradient-to-r from-primary/5 to-amber-100/30 dark:from-gray-800/80 dark:to-gray-900/70 shadow-md mb-8">
                <ul className="space-y-2 dark:text-gray-300 grid gap-2 md:grid-cols-2">
                  <li><strong>Provide our services</strong> - Delivering, maintaining, and improving our platform</li>
                  <li><strong>Personalize your experience</strong> - Creating and updating your account</li>
                  <li><strong>Connect users</strong> - Matching you with others based on preferences</li>
                  <li><strong>Recommend venues</strong> - Suggesting bars and events based on your interests</li>
                  <li><strong>Handle transactions</strong> - Processing payments and deals</li>
                  <li><strong>Communicate with you</strong> - Sending updates, messages, and marketing</li>
                  <li><strong>Offer support</strong> - Responding to your comments and questions</li>
                  <li><strong>Analyze usage</strong> - Monitoring patterns and trends to improve service</li>
                  <li><strong>Enhance security</strong> - Protecting our services and users</li>
                  <li><strong>Legal compliance</strong> - Meeting regulatory obligations</li>
                </ul>
              </div>
            </div>
            
            <h2 id="sharing-your-information" className="text-primary-foreground">Sharing Your Information</h2>
            <div className="space-y-4">
              <p>We may share your information with:</p>
              <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30">
                <ul className="space-y-3 dark:text-gray-300">
                  <li>
                    <strong className="block text-lg mb-1">Service Providers</strong>
                    <p className="mt-0">Third parties that perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</p>
                  </li>
                  
                  <li>
                    <strong className="block text-lg mb-1">Business Partners</strong>
                    <p className="mt-0">Bars, venues, and other businesses that partner with us to offer you special deals and experiences.</p>
                  </li>
                  
                  <li>
                    <strong className="block text-lg mb-1">Other Users</strong>
                    <p className="mt-0">Information you share publicly on the app will be visible to other users according to your privacy settings.</p>
                  </li>
                  
                  <li>
                    <strong className="block text-lg mb-1">Legal Requirements</strong>
                    <p className="mt-0">When required by law, such as to comply with a subpoena or similar legal process.</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <h2 id="your-data-protection-rights" className="text-primary-foreground">Your Data Protection Rights</h2>
            <div className="space-y-4">
              <p>Depending on your location, you may have the following rights:</p>
              <div className="rounded-2xl border border-primary/10 p-6 bg-gradient-to-r from-primary/5 to-amber-100/30 dark:from-gray-800/80 dark:to-gray-900/70 shadow-md mb-8">
                <ul className="space-y-2 dark:text-gray-300 grid gap-2 md:grid-cols-2">
                  <li><strong>Right to access</strong> - The right to access the personal information we have about you</li>
                  <li><strong>Right to rectification</strong> - The right to request correction of inaccurate personal information</li>
                  <li><strong>Right to erasure</strong> - The right to request deletion of your personal information</li>
                  <li><strong>Right to object</strong> - The right to object to processing of your personal information</li>
                  <li><strong>Right to data portability</strong> - The right to receive your data in a usable format</li>
                  <li><strong>Right to withdraw consent</strong> - The right to revoke permissions previously given</li>
                </ul>
              </div>
            </div>
            
            <h2 id="data-security" className="text-primary-foreground">Data Security</h2>
            <div className="space-y-4">
              <p>
                We implement appropriate technical and organizational measures to protect the security of your 
                personal information. These measures include encryption, access controls, and regular security reviews.
              </p>
              
              <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30">
                <p className="mb-0">
                  <strong>Please be aware that no method of transmission over the internet or method of electronic storage is 100% secure.</strong> While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee its absolute security.
                </p>
              </div>
            </div>
            
            <h2 id="age-restrictions" className="text-primary-foreground">Age Restrictions</h2>
            <div className="space-y-4">
              <p>
                Tippsy is intended for users who are of legal drinking age in their respective locations. 
                This is typically 21 years of age in the United States and 18 or 19 in many other countries.
              </p>
              
              <div className="rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-4 shadow-sm border-amber-200 dark:border-amber-900/50">
                <p className="font-medium mb-0">
                  <strong>We do not knowingly collect personal information from individuals under the legal drinking age.</strong> 
                  If we learn that we have collected personal information from an individual under the legal 
                  drinking age, we will take steps to delete that information promptly.
                </p>
              </div>
            </div>
            
            <h2 id="changes-to-this-privacy-policy" className="text-primary-foreground">Changes to This Privacy Policy</h2>
            <div className="space-y-4">
              <p>
                We reserve the right to update or change our Privacy Policy at any time. We will notify you of any 
                changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
              </p>
              
              <div className="rounded-2xl border border-primary/10 p-6 bg-gradient-to-r from-primary/5 to-amber-100/30 dark:from-gray-800/80 dark:to-gray-900/70 shadow-md mb-8">
                <p className="mb-0">
                  <strong>You are advised to review this Privacy Policy periodically for any changes.</strong> 
                  Changes to this Privacy Policy are effective when they are posted on this page.
                </p>
              </div>
            </div>
            
            <div className="rounded-2xl border border-primary/10 p-6 bg-gradient-to-r from-primary/5 to-amber-100/30 dark:from-gray-800/80 dark:to-gray-900/70 shadow-md mt-10">
              <h2 id="contact-us" className="mt-0 font-bold text-2xl">Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-0">
                <a href="mailto:privacy@tippsy.me" className="text-primary hover:underline font-medium text-lg">privacy@tippsy.me</a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
} 
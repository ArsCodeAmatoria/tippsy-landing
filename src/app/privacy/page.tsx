import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Privacy Policy - Tippsy",
  description: "Privacy Policy for the Tippsy social matchmaking app for bars and nightlife."
}

export default function PrivacyPolicy() {
  return (
    <>
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between py-4">
          <Logo />
          <Link 
            href="/" 
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Home
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-6 py-12 md:px-8 md:py-16">
        <div className="mx-auto max-w-3xl">
          <div className="mb-10 md:mb-16">
            <div className="inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary mb-4">
              Legal
            </div>
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">Privacy Policy</h1>
            <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-semibold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border">
            <p className="lead">
              At Tippsy, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our mobile application and website.
              Please read this policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the application.
            </p>
            
            <h2 id="information-we-collect">Information We Collect</h2>
            
            <h3>Personal Data</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul>
              <li>Register for our app</li>
              <li>Sign up for our waitlist</li>
              <li>Create a user profile</li>
              <li>Participate in features of our app</li>
              <li>Contact us for customer service</li>
            </ul>
            
            <p>The personal information we may collect includes:</p>
            <ul>
              <li>Name</li>
              <li>Email address</li>
              <li>Phone number</li>
              <li>Date of birth (to verify you are of legal drinking age)</li>
              <li>Profile information (such as interests, preferences)</li>
              <li>Location data (when using location-based features)</li>
            </ul>
            
            <h3>Usage Data</h3>
            <p>
              We may also collect information that your browser or device sends whenever 
              you visit our website or use our app:
            </p>
            <ul>
              <li>IP address</li>
              <li>Browser type and version</li>
              <li>Device type and model</li>
              <li>Operating system</li>
              <li>Time spent on pages</li>
              <li>Unique device identifiers</li>
              <li>Other diagnostic data</li>
            </ul>
            
            <h2 id="how-we-use-your-information">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul>
              <li>Provide, maintain, and improve our services</li>
              <li>Create and update your account</li>
              <li>Match you with other users based on your preferences</li>
              <li>Recommend bars and events based on your interests</li>
              <li>Process payments</li>
              <li>Send you updates, administrative messages, and marketing communications</li>
              <li>Respond to your comments and questions</li>
              <li>Monitor and analyze usage patterns and trends</li>
              <li>Protect the security and integrity of our services</li>
              <li>Comply with legal obligations</li>
            </ul>
            
            <h2 id="sharing-your-information">Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul>
              <li><strong>Service Providers:</strong> Third parties that perform services on our behalf, such as payment processing, data analysis, email delivery, and customer service.</li>
              <li><strong>Business Partners:</strong> Bars, venues, and other businesses that partner with us to offer you special deals and experiences.</li>
              <li><strong>Other Users:</strong> Information you share publicly on the app will be visible to other users according to your privacy settings.</li>
              <li><strong>Legal Requirements:</strong> When required by law, such as to comply with a subpoena or similar legal process.</li>
            </ul>
            
            <h2 id="your-data-protection-rights">Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul>
              <li>The right to access the personal information we have about you</li>
              <li>The right to request correction of inaccurate personal information</li>
              <li>The right to request deletion of your personal information</li>
              <li>The right to object to processing of your personal information</li>
              <li>The right to data portability</li>
              <li>The right to withdraw consent</li>
            </ul>
            
            <h2 id="data-security">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your 
              personal information. However, please be aware that no method of transmission over the 
              internet or method of electronic storage is 100% secure.
            </p>
            
            <h2 id="age-restrictions">Age Restrictions</h2>
            <p>
              Tippsy is intended for users who are of legal drinking age in their respective locations. 
              We do not knowingly collect personal information from individuals under the legal drinking age. 
              If we learn that we have collected personal information from an individual under the legal 
              drinking age, we will take steps to delete that information.
            </p>
            
            <h2 id="changes-to-this-privacy-policy">Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update or change our Privacy Policy at any time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
              You are advised to review this Privacy Policy periodically for any changes.
            </p>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm mt-10">
              <h2 id="contact-us" className="mt-0">Contact Us</h2>
              <p className="mb-0">
                If you have any questions about this Privacy Policy, please contact us at:
                <br />
                <a href="mailto:privacy@tippsy.app" className="text-primary hover:underline">privacy@tippsy.app</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 
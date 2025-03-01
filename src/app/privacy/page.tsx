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
        <div className="container mx-auto px-6 md:px-8 flex h-16 items-center justify-between">
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
            <div className="flex gap-3 mt-4">
              <span className="text-sm font-semibold">English</span>
              <Link href="/privacy/es" className="text-sm text-primary hover:underline">Español</Link>
            </div>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-bold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border">
            <p className="lead text-lg">
              At Tippsy, we take your privacy seriously. This Privacy Policy explains how we collect, 
              use, disclose, and safeguard your information when you use our mobile application and website.
            </p>
            
            <p className="mb-6">
              Please read this policy carefully. If you do not agree with the terms of this privacy policy, 
              please do not access the application.
            </p>
            
            <h2 id="information-we-collect" className="text-primary-foreground">Information We Collect</h2>
            
            <h3 className="font-bold">Personal Data</h3>
            <p>
              We may collect personal information that you voluntarily provide to us when you:
            </p>
            <ul className="space-y-2">
              <li><strong>Register for our app</strong> - Creating an account with Tippsy</li>
              <li><strong>Sign up for our waitlist</strong> - Joining to be notified of launch</li>
              <li><strong>Create a user profile</strong> - Setting up your preferences and details</li>
              <li><strong>Participate in features</strong> - Using social and messaging functions</li>
              <li><strong>Contact us</strong> - Reaching out for customer service</li>
            </ul>
            
            <p className="mt-6">The personal information we may collect includes:</p>
            <ul className="space-y-2">
              <li><strong>Name</strong> - Your first and last name</li>
              <li><strong>Email address</strong> - For account creation and communication</li>
              <li><strong>Phone number</strong> - For verification and notifications</li>
              <li><strong>Date of birth</strong> - To verify you are of legal drinking age</li>
              <li><strong>Profile information</strong> - Such as interests and preferences</li>
              <li><strong>Location data</strong> - When using location-based features</li>
            </ul>
            
            <h3 className="font-bold mt-8">Usage Data</h3>
            <p>
              We may also collect information that your browser or device sends whenever 
              you visit our website or use our app:
            </p>
            <ul className="space-y-2">
              <li><strong>IP address</strong> - Your device's internet protocol address</li>
              <li><strong>Browser details</strong> - Type, version, and settings</li>
              <li><strong>Device information</strong> - Type, model, and operating system</li>
              <li><strong>Usage patterns</strong> - Time spent on pages and features used</li>
              <li><strong>Unique identifiers</strong> - Device ID and other technical markers</li>
              <li><strong>Diagnostic data</strong> - Error reports and performance data</li>
            </ul>
            
            <h2 id="how-we-use-your-information" className="text-primary-foreground">How We Use Your Information</h2>
            <p>We may use the information we collect for various purposes, including to:</p>
            <ul className="space-y-2">
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
            
            <h2 id="sharing-your-information" className="text-primary-foreground">Sharing Your Information</h2>
            <p>We may share your information with:</p>
            <ul className="space-y-3">
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
            
            <h2 id="your-data-protection-rights" className="text-primary-foreground">Your Data Protection Rights</h2>
            <p>Depending on your location, you may have the following rights:</p>
            <ul className="space-y-2">
              <li><strong>Right to access</strong> - The right to access the personal information we have about you</li>
              <li><strong>Right to rectification</strong> - The right to request correction of inaccurate personal information</li>
              <li><strong>Right to erasure</strong> - The right to request deletion of your personal information</li>
              <li><strong>Right to object</strong> - The right to object to processing of your personal information</li>
              <li><strong>Right to data portability</strong> - The right to receive your data in a usable format</li>
              <li><strong>Right to withdraw consent</strong> - The right to revoke permissions previously given</li>
            </ul>
            
            <h2 id="data-security" className="text-primary-foreground">Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect the security of your 
              personal information. These measures include encryption, access controls, and regular security reviews.
            </p>
            
            <p>
              However, please be aware that no method of transmission over the 
              internet or method of electronic storage is 100% secure. While we strive to use commercially acceptable 
              means to protect your personal information, we cannot guarantee its absolute security.
            </p>
            
            <h2 id="age-restrictions" className="text-primary-foreground">Age Restrictions</h2>
            <p>
              Tippsy is intended for users who are of legal drinking age in their respective locations. 
              This is typically 21 years of age in the United States and 18 or 19 in many other countries.
            </p>
            
            <p>
              We do not knowingly collect personal information from individuals under the legal drinking age. 
              If we learn that we have collected personal information from an individual under the legal 
              drinking age, we will take steps to delete that information promptly.
            </p>
            
            <h2 id="changes-to-this-privacy-policy" className="text-primary-foreground">Changes to This Privacy Policy</h2>
            <p>
              We reserve the right to update or change our Privacy Policy at any time. We will notify you of any 
              changes by posting the new Privacy Policy on this page and updating the "Last Updated" date. 
            </p>
            
            <p>
              You are advised to review this Privacy Policy periodically for any changes. Changes to this 
              Privacy Policy are effective when they are posted on this page.
            </p>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm mt-10">
              <h2 id="contact-us" className="mt-0 font-bold text-2xl">Contact Us</h2>
              <p className="mb-2">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <p className="mb-0">
                <a href="mailto:privacy@tippsy.app" className="text-primary hover:underline font-medium text-lg">privacy@tippsy.app</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 
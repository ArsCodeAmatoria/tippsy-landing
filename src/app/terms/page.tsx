import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"
import { Metadata } from "next"
import { getTermsMetadata } from "@/lib/metadata"

export const metadata: Metadata = getTermsMetadata();

export default function TermsOfService() {
  return (
    <>
      
      
      <main className="min-h-screen w-full bg-gradient-to-b from-white via-slate-50 to-primary/10 dark:from-gray-950 dark:via-gray-900 dark:to-primary/10 flex flex-col justify-center">
        <div className="mx-auto max-w-3xl px-4 sm:px-8 py-12 md:py-20">
          <div className="mb-12 md:mb-20 text-center">
            <div className="inline-block rounded-full bg-gradient-to-r from-primary/20 to-primary/40 px-4 py-2 text-base font-semibold text-primary shadow-md mb-6">
              Legal
            </div>
            <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-gradient-to-r from-primary to-amber-500 bg-clip-text text-transparent drop-shadow-lg">Terms of Service</h1>
            <p className="text-xl text-muted-foreground font-medium max-w-2xl mx-auto mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          
          <section className="rounded-3xl shadow-2xl bg-white/90 dark:bg-gray-900/80 p-8 md:p-12 mb-16 border border-primary/10">
            <p className="lead text-lg md:text-xl text-gray-700 dark:text-gray-200 font-medium">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using 
              the Tippsy mobile application and website (the "Service") operated by Tippsy ("us", "we", or "our").
            </p>
            
            <p className="mb-6">
              Your access to and use of the Service is conditioned on your acceptance of and compliance with 
              these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <div className="my-8 rounded-lg border bg-amber-50 dark:bg-amber-950/50 p-6 shadow-sm dark:border-amber-900/50">
              <p className="font-medium mb-0 text-lg">
                <strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree 
                with any part of the terms, then you may not access the Service.</strong>
              </p>
            </div>
            
            <h2 id="age-requirements" className="text-2xl md:text-3xl font-bold text-primary mb-2">Age Requirements</h2>
            <div className="space-y-4">
              <p>
                Tippsy is intended for users who are of legal drinking age in their respective locations. 
                This is typically 21 years of age in the United States and 18 or 19 in many other countries.
              </p>
              
              <div className="rounded-2xl border border-amber-200 dark:border-amber-900/50 bg-gradient-to-r from-amber-50/80 to-white/90 dark:from-amber-950/40 dark:to-gray-900/80 p-6 shadow-2xl mb-8">
                <p className="font-medium mb-0">
                  <strong>By using Tippsy, you represent and warrant that you are of legal drinking age in your 
                  jurisdiction. We reserve the right to terminate your account if we discover that you are 
                  under the legal drinking age.</strong>
                </p>
              </div>
            </div>
            
            <h2 id="accounts" className="text-2xl md:text-3xl font-bold text-primary mb-2">Accounts</h2>
            <div className="space-y-4">
              <p>
                When you create an account with us, you must provide information that is accurate, complete, 
                and current at all times. Failure to do so constitutes a breach of the Terms, which may 
                result in immediate termination of your account on our Service.
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  <strong>You are responsible for safeguarding the password</strong> that you use to access the Service and for 
                  any activities or actions under your password. You agree not to disclose your password to any 
                  third party. You must notify us immediately upon becoming aware of any breach of security or 
                  unauthorized use of your account.
                </p>
              </div>
            </div>
            
            <h2 id="user-content" className="text-2xl md:text-3xl font-bold text-primary mb-2">User Content</h2>
            <div className="space-y-4">
              <p>
                Our Service allows you to post, link, store, share and otherwise make available certain 
                information, text, graphics, videos, or other material ("Content"). You are responsible for 
                the Content that you post on or through the Service, including its legality, reliability, 
                and appropriateness.
              </p>
              
              <p>
                By posting Content on or through the Service, you represent and warrant that:
              </p>
              <ul className="space-y-2 dark:text-gray-300">
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>You own the Content</strong> - The Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms.
                </li>
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>No rights violations</strong> - The posting of your Content does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.
                </li>
              </ul>
            </div>
            
            <h2 id="prohibited-conduct" className="text-primary-foreground">Prohibited Conduct</h2>
            <div className="space-y-4">
              <p>You agree not to engage in any of the following prohibited activities:</p>
              <div className="rounded-lg border p-4 bg-muted/30 dark:bg-gray-800/30 dark:border-gray-700">
                <ul className="space-y-2 dark:text-gray-300 grid gap-2 md:grid-cols-2">
                  <li><strong>Illegal activities</strong> - Using the Service for any illegal purpose or in violation of any local, state, national, or international law</li>
                  <li><strong>Harassment</strong> - Harassing, threatening, or intimidating any other users</li>
                  <li><strong>Impersonation</strong> - Impersonating another person or entity</li>
                  <li><strong>Offensive content</strong> - Posting content that is offensive, defamatory, obscene, or otherwise objectionable</li>
                  <li><strong>Intoxicated use</strong> - Using the Service while intoxicated or under the influence of substances</li>
                  <li><strong>Unsafe practices</strong> - Encouraging unsafe drinking practices</li>
                  <li><strong>Security circumvention</strong> - Attempting to circumvent any security features of the Service</li>
                  <li><strong>Multiple accounts</strong> - Creating multiple accounts for the purpose of abusing promotions or evading bans</li>
                </ul>
              </div>
            </div>
            
            <h2 id="intellectual-property" className="text-primary-foreground">Intellectual Property</h2>
            <div className="space-y-4">
              <p>
                The Service and its original content (excluding Content provided by users), features, and 
                functionality are and will remain the exclusive property of Tippsy and its licensors. 
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  The Service is protected by copyright, trademark, and other laws of both the United States and 
                  foreign countries. <strong>Our trademarks and trade dress may not be used</strong> in connection with any 
                  product or service without the prior written consent of Tippsy.
                </p>
              </div>
            </div>
            
            <h2 id="links-to-other-websites" className="text-primary-foreground">Links To Other Web Sites</h2>
            <div className="space-y-4">
              <p>
                Our Service may contain links to third-party websites or services that are not owned or 
                controlled by Tippsy.
              </p>
              
              <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30">
                <p className="mb-0">
                  <strong>Tippsy has no control over, and assumes no responsibility for</strong>, the content, privacy policies, 
                  or practices of any third-party websites or services. You further acknowledge and agree that 
                  Tippsy shall not be responsible or liable, directly or indirectly, for any damage or loss 
                  caused or alleged to be caused by or in connection with the use of or reliance on any such 
                  content, goods, or services available on or through any such websites or services.
                </p>
              </div>
            </div>
            
            <h2 id="termination" className="text-primary-foreground">Termination</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  <strong>We may terminate or suspend your account immediately</strong>, without prior notice or liability, for 
                  any reason whatsoever, including without limitation if you breach the Terms.
                </p>
              </div>
              
              <p>
                Upon termination, your right to use the Service will immediately cease. If you wish to 
                terminate your account, you may simply discontinue using the Service.
              </p>
            </div>
            
            <h2 id="limitation-of-liability" className="text-primary-foreground">Limitation of Liability</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4 bg-amber-50/50 dark:bg-amber-950/20 dark:border-amber-900/30">
                <p className="font-medium mb-0">
                  <strong>To the maximum extent permitted by applicable law</strong>, in no event shall Tippsy, its affiliates, 
                  agents, directors, employees, suppliers, or licensors be liable for any indirect, punitive, 
                  incidental, special, consequential, or exemplary damages, including without limitation 
                  damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of 
                  or relating to your use of, or inability to use, the Service.
                </p>
              </div>
            </div>
            
            <h2 id="disclaimers" className="text-primary-foreground">Disclaimers</h2>
            <div className="space-y-4">
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  <strong>Your use of the Service is at your sole risk.</strong> The Service is provided on an "AS IS" and "AS 
                  AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or 
                  implied, including, but not limited to, implied warranties of merchantability, fitness for a 
                  particular purpose, non-infringement or course of performance.
                </p>
              </div>
              
              <p>
                Tippsy, its subsidiaries, affiliates, and its licensors do not warrant that:
              </p>
              
              <ul className="space-y-2 dark:text-gray-300 grid gap-2 sm:grid-cols-2">
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Continuous service</strong> - The Service will function uninterrupted, secure or available at any particular time or location
                </li>
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Error correction</strong> - Any errors or defects will be corrected
                </li>
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Security guarantees</strong> - The Service is free of viruses or other harmful components
                </li>
                <li className="p-2 rounded-md bg-gray-50 dark:bg-gray-800/70">
                  <strong>Satisfaction</strong> - The results of using the Service will meet your requirements
                </li>
              </ul>
            </div>
            
            <h2 id="governing-law" className="text-primary-foreground">Governing Law</h2>
            <div className="space-y-4">
              <p>
                These Terms shall be governed and construed in accordance with the laws of the United States, 
                without regard to its conflict of law provisions.
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  Our failure to enforce any right or provision of these Terms will not be considered a waiver 
                  of those rights. If any provision of these Terms is held to be invalid or unenforceable by a 
                  court, the remaining provisions of these Terms will remain in effect.
                </p>
              </div>
            </div>
            
            <h2 id="alcohol-responsibility" className="text-primary-foreground">Alcohol Responsibility</h2>
            <div className="space-y-4">
              <p>
                Tippsy promotes responsible drinking and does not encourage excessive or underage alcohol 
                consumption. Users are expected to drink responsibly and in accordance with local laws and 
                regulations.
              </p>
              
              <div className="rounded-lg border bg-red-50 dark:bg-red-950/30 p-4 shadow-sm border-red-200 dark:border-red-900/50">
                <p className="font-medium mb-0">
                  <strong>Tippsy is not responsible for any damages or liabilities that may arise from the 
                  misuse of alcohol or intoxication. By using our Service, you agree to use alcohol responsibly
                  and to never drink and drive.</strong>
                </p>
              </div>
            </div>
            
            <h2 id="changes" className="text-primary-foreground">Changes to Terms</h2>
            <div className="space-y-4">
              <p>
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
                If a revision is material, we will try to provide at least 30 days' notice prior to any new 
                terms taking effect. What constitutes a material change will be determined at our sole discretion.
              </p>
              
              <div className="rounded-lg border p-4 bg-muted/40 dark:bg-gray-800/50 dark:border-gray-700">
                <p className="mb-0">
                  By continuing to access or use our Service after those revisions become effective, you agree 
                  to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
                </p>
              </div>
            </div>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm mt-10 dark:bg-gray-900 dark:border-gray-800">
              <h2 id="contact-us" className="mt-0 font-bold text-2xl">Contact Us</h2>
              <p className="mb-2">
                If you have any questions about these Terms, please contact us at:
              </p>
              <p className="mb-0">
                <a href="mailto:legal@tippsy.me" className="text-primary hover:underline font-medium text-lg">legal@tippsy.me</a>
              </p>
            </div>
          </section>
        </div>
      </main>
    </>
  )
} 
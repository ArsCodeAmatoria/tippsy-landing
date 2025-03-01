import * as React from "react"
import Link from "next/link"
import { Logo } from "@/components/logo"
import { ArrowLeft } from "lucide-react"

export const metadata = {
  title: "Terms of Service - Tippsy",
  description: "Terms of Service for the Tippsy social matchmaking app for bars and nightlife."
}

export default function TermsOfService() {
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
            <h1 className="text-4xl font-bold tracking-tight mb-6 md:text-5xl">Terms of Service</h1>
            <p className="text-muted-foreground mb-4">Last Updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
          </div>
          
          <div className="prose prose-gray dark:prose-invert max-w-none prose-headings:scroll-mt-28 prose-headings:font-semibold prose-h2:mt-10 prose-h2:text-2xl prose-h3:text-xl prose-img:rounded-md prose-img:border prose-img:bg-muted prose-pre:rounded-lg prose-pre:border">
            <p className="lead">
              Please read these Terms of Service ("Terms", "Terms of Service") carefully before using 
              the Tippsy mobile application and website (the "Service") operated by Tippsy ("us", "we", or "our").
            </p>
            
            <p>
              Your access to and use of the Service is conditioned on your acceptance of and compliance with 
              these Terms. These Terms apply to all visitors, users, and others who access or use the Service.
            </p>
            
            <div className="my-8 rounded-lg border bg-amber-50 dark:bg-amber-950/30 p-4">
              <p className="font-medium mb-0">
                <strong>By accessing or using the Service you agree to be bound by these Terms. If you disagree 
                with any part of the terms, then you may not access the Service.</strong>
              </p>
            </div>
            
            <h2 id="age-requirements">Age Requirements</h2>
            <p>
              Tippsy is intended for users who are of legal drinking age in their respective locations. 
              By using Tippsy, you represent and warrant that you are of legal drinking age in your 
              jurisdiction. We reserve the right to terminate your account if we discover that you are 
              under the legal drinking age.
            </p>
            
            <h2 id="accounts">Accounts</h2>
            <p>
              When you create an account with us, you must provide information that is accurate, complete, 
              and current at all times. Failure to do so constitutes a breach of the Terms, which may 
              result in immediate termination of your account on our Service.
            </p>
            
            <p>
              You are responsible for safeguarding the password that you use to access the Service and for 
              any activities or actions under your password. You agree not to disclose your password to any 
              third party. You must notify us immediately upon becoming aware of any breach of security or 
              unauthorized use of your account.
            </p>
            
            <h2 id="user-content">User Content</h2>
            <p>
              Our Service allows you to post, link, store, share and otherwise make available certain 
              information, text, graphics, videos, or other material ("Content"). You are responsible for 
              the Content that you post on or through the Service, including its legality, reliability, 
              and appropriateness.
            </p>
            
            <p>
              By posting Content on or through the Service, you represent and warrant that:
            </p>
            <ul>
              <li>The Content is yours (you own it) or you have the right to use it and grant us the rights and license as provided in these Terms.</li>
              <li>The posting of your Content on or through the Service does not violate the privacy rights, publicity rights, copyrights, contract rights or any other rights of any person.</li>
            </ul>
            
            <h2 id="prohibited-conduct">Prohibited Conduct</h2>
            <p>You agree not to engage in any of the following prohibited activities:</p>
            <ul>
              <li>Using the Service for any illegal purpose or in violation of any local, state, national, or international law</li>
              <li>Harassing, threatening, or intimidating any other users</li>
              <li>Impersonating another person or entity</li>
              <li>Posting content that is offensive, defamatory, obscene, or otherwise objectionable</li>
              <li>Using the Service while intoxicated or under the influence of substances</li>
              <li>Encouraging unsafe drinking practices</li>
              <li>Attempting to circumvent any security features of the Service</li>
              <li>Creating multiple accounts for the purpose of abusing promotions or evading bans</li>
            </ul>
            
            <h2 id="intellectual-property">Intellectual Property</h2>
            <p>
              The Service and its original content (excluding Content provided by users), features, and 
              functionality are and will remain the exclusive property of Tippsy and its licensors. The 
              Service is protected by copyright, trademark, and other laws of both the United States and 
              foreign countries. Our trademarks and trade dress may not be used in connection with any 
              product or service without the prior written consent of Tippsy.
            </p>
            
            <h2 id="links-to-other-websites">Links To Other Web Sites</h2>
            <p>
              Our Service may contain links to third-party websites or services that are not owned or 
              controlled by Tippsy.
            </p>
            
            <p>
              Tippsy has no control over, and assumes no responsibility for, the content, privacy policies, 
              or practices of any third-party websites or services. You further acknowledge and agree that 
              Tippsy shall not be responsible or liable, directly or indirectly, for any damage or loss 
              caused or alleged to be caused by or in connection with the use of or reliance on any such 
              content, goods, or services available on or through any such websites or services.
            </p>
            
            <h2 id="termination">Termination</h2>
            <p>
              We may terminate or suspend your account immediately, without prior notice or liability, for 
              any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            
            <p>
              Upon termination, your right to use the Service will immediately cease. If you wish to 
              terminate your account, you may simply discontinue using the Service.
            </p>
            
            <h2 id="limitation-of-liability">Limitation of Liability</h2>
            <p>
              To the maximum extent permitted by applicable law, in no event shall Tippsy, its affiliates, 
              agents, directors, employees, suppliers, or licensors be liable for any indirect, punitive, 
              incidental, special, consequential, or exemplary damages, including without limitation 
              damages for loss of profits, goodwill, use, data, or other intangible losses, arising out of 
              or relating to your use of, or inability to use, the Service.
            </p>
            
            <h2 id="disclaimers">Disclaimers</h2>
            <p>
              Your use of the Service is at your sole risk. The Service is provided on an "AS IS" and "AS 
              AVAILABLE" basis. The Service is provided without warranties of any kind, whether express or 
              implied, including, but not limited to, implied warranties of merchantability, fitness for a 
              particular purpose, non-infringement or course of performance.
            </p>
            
            <p>
              Tippsy, its subsidiaries, affiliates, and its licensors do not warrant that: (a) the Service 
              will function uninterrupted, secure or available at any particular time or location; (b) any 
              errors or defects will be corrected; (c) the Service is free of viruses or other harmful 
              components; or (d) the results of using the Service will meet your requirements.
            </p>
            
            <h2 id="governing-law">Governing Law</h2>
            <p>
              These Terms shall be governed and construed in accordance with the laws of the United States, 
              without regard to its conflict of law provisions.
            </p>
            
            <p>
              Our failure to enforce any right or provision of these Terms will not be considered a waiver 
              of those rights. If any provision of these Terms is held to be invalid or unenforceable by a 
              court, the remaining provisions of these Terms will remain in effect.
            </p>
            
            <h2 id="alcohol-responsibility">Alcohol Responsibility</h2>
            <p>
              Tippsy promotes responsible drinking and does not encourage excessive or underage alcohol 
              consumption. Users are expected to drink responsibly and in accordance with local laws and 
              regulations. Tippsy is not responsible for any damages or liabilities that may arise from the 
              misuse of alcohol or intoxication.
            </p>
            
            <h2 id="changes">Changes</h2>
            <p>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
              If a revision is material, we will try to provide at least 30 days' notice prior to any new 
              terms taking effect. What constitutes a material change will be determined at our sole discretion.
            </p>
            
            <p>
              By continuing to access or use our Service after those revisions become effective, you agree 
              to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </p>
            
            <div className="rounded-lg border bg-card p-6 shadow-sm mt-10">
              <h2 id="contact-us" className="mt-0">Contact Us</h2>
              <p className="mb-0">
                If you have any questions about these Terms, please contact us at:
                <br />
                <a href="mailto:legal@tippsy.app" className="text-primary hover:underline">legal@tippsy.app</a>
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  )
} 
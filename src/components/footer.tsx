"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { useLanguage } from "@/contexts/language-context"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  const { t, language } = useLanguage()
  
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-2xl flex flex-col items-center justify-center gap-6 text-center">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link href={language === "es" ? "/privacy/es" : "/privacy"} className="transition-colors hover:text-foreground">
              {t("footer.privacy")}
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href={language === "es" ? "/terms/es" : "/terms"} className="transition-colors hover:text-foreground">
              {t("footer.terms")}
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href="#contact" className="transition-colors hover:text-foreground">
              {t("footer.contact")}
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href={language === "es" ? "/about/es" : "/about"} className="transition-colors hover:text-foreground">
              {t("footer.about")}
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href={language === "es" ? "/partner/es" : "/partner"} className="transition-colors hover:text-foreground">
              {t("footer.partner")}
            </Link>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium text-muted-foreground">{t("footer.followUs")}</span>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/ArsCodeAmatoria/tippsy-landing" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t("footer.githubAria")}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://twitter.com/TippsyApp" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t("footer.twitterAria")}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://instagram.com/tippsyapp" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t("footer.instagramAria")}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/tippsyapp" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label={t("footer.linkedinAria")}
                className="rounded-full p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright").replace("2025", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  )
} 
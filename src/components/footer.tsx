"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { useLanguage } from "@/contexts/language-context"

export function Footer() {
  const { t } = useLanguage()
  
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-2xl flex flex-col items-center justify-center gap-6 text-center">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              {t("footer.privacy")}
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href="#" className="transition-colors hover:text-foreground">
              {t("footer.terms")}
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href="#" className="transition-colors hover:text-foreground">
              {t("footer.contact")}
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href="#" className="transition-colors hover:text-foreground">
              {t("footer.about")}
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            {t("footer.copyright").replace("2025", new Date().getFullYear().toString())}
          </p>
        </div>
      </div>
    </footer>
  )
} 
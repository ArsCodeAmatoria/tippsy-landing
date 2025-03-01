"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-provider"
import { Logo } from "@/components/logo"
import { LanguageSelector } from "@/components/language-selector"
import { useLanguage } from "@/contexts/language-context"

export function Header() {
  const { t } = useLanguage()
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-6 md:px-8 flex h-16 items-center">
        <div className="flex-1">
          <Logo />
        </div>
        <nav className="hidden items-center space-x-8 mr-8 md:flex">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.features")}
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.testimonials")}
          </Link>
          <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.pricing")}
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            {t("nav.contact")}
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <LanguageSelector />
          <ModeToggle />
          <Button asChild>
            <Link href="#contact">
              {t("cta.joinWaitlist")}
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 
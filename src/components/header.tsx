"use client"

import * as React from "react"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { ModeToggle } from "@/components/theme-provider"
import { Logo } from "@/components/logo"

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Logo />
        <nav className="hidden items-center space-x-6 md:flex">
          <Link href="#features" className="text-sm font-medium transition-colors hover:text-primary">
            Features
          </Link>
          <Link href="#testimonials" className="text-sm font-medium transition-colors hover:text-primary">
            Testimonials
          </Link>
          <Link href="#pricing" className="text-sm font-medium transition-colors hover:text-primary">
            Pricing
          </Link>
          <Link href="#contact" className="text-sm font-medium transition-colors hover:text-primary">
            Contact
          </Link>
        </nav>
        <div className="flex items-center space-x-4">
          <ModeToggle />
          <Button asChild>
            <Link href="https://apps.apple.com" target="_blank">
              Download App
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
} 
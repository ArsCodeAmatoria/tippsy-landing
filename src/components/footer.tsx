import * as React from "react"
import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-2xl flex flex-col items-center justify-center gap-6 text-center">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
            <Link href="#" className="transition-colors hover:text-foreground">
              Privacy Policy
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href="#" className="transition-colors hover:text-foreground">
              Terms & Conditions
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href="#" className="transition-colors hover:text-foreground">
              Contact
            </Link>
            <div className="h-4 w-px bg-border"></div>
            <Link href="#" className="transition-colors hover:text-foreground">
              About Us
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Tippsy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
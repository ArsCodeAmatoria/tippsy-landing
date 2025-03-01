import * as React from "react"
import Link from "next/link"
import { Logo } from "./logo"

export function Footer() {
  return (
    <footer className="border-t py-12 md:py-16">
      <div className="container flex flex-col items-center justify-center gap-4 text-center">
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
        <p className="mt-4 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Tippsy. All rights reserved.
        </p>
      </div>
    </footer>
  )
} 
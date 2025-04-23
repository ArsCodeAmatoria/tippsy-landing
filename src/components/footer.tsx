"use client"

import * as React from "react"
import Link from "next/link"
import { Logo } from "./logo"
import { Github, Twitter, Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-gray-800 py-12 md:py-16 bg-gray-900">
      <div className="container mx-auto px-6 md:px-8">
        <div className="mx-auto max-w-2xl flex flex-col items-center justify-center gap-6 text-center">
          <Logo />
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-gray-400">
            <Link href="/privacy" className="transition-colors hover:text-gray-200 hover:underline">
              Privacy Policy
            </Link>
            <div className="h-4 w-px bg-gray-700"></div>
            <Link href="/terms" className="transition-colors hover:text-gray-200 hover:underline">
              Terms of Service
            </Link>
            <div className="h-4 w-px bg-gray-700"></div>
            <Link href="#contact" className="transition-colors hover:text-gray-200 hover:underline">
              Contact
            </Link>
            <div className="h-4 w-px bg-gray-700"></div>
            <Link href="/about" className="transition-colors hover:text-gray-200 hover:underline">
              About Us
            </Link>
            <div className="h-4 w-px bg-gray-700"></div>
            <Link href="/partner" className="transition-colors hover:text-gray-200 hover:underline">
              Partner With Us
            </Link>
          </div>
          
          {/* Social Media Links */}
          <div className="flex flex-col items-center gap-3">
            <span className="text-sm font-medium text-gray-400">Follow Us</span>
            <div className="flex items-center gap-4">
              <a 
                href="https://github.com/Tippsy" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-[#ff007F] transition-colors"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/Tippsy_me" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-[#ff007F] transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="https://www.instagram.com/tippsy.me/" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-[#ff007F] transition-colors"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a 
                href="https://linkedin.com/company/tippsy" 
                target="_blank" 
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="rounded-full p-2 text-gray-400 hover:bg-gray-800 hover:text-[#ff007F] transition-colors"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <p className="text-sm text-gray-400">
            © {new Date().getFullYear()} Tippsy. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
} 
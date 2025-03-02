"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { Check } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { useLanguage, LanguageCode } from "@/contexts/language-context"

interface Language {
  code: LanguageCode
  name: string
  flag: string
}

const languages: Language[] = [
  {
    code: "en",
    name: "English",
    flag: "🇬🇧"
  },
  {
    code: "es",
    name: "Español",
    flag: "🇪🇸"
  }
]

export function LanguageSelector() {
  const { language: currentLang, setLanguage } = useLanguage()
  const [mounted, setMounted] = useState(false)

  // Handle hydration issues by only rendering after mount
  useEffect(() => {
    setMounted(true)
  }, [])

  const handleLanguageChange = (lang: Language) => {
    if (!mounted) return; // Don't do anything if not mounted yet
    
    setLanguage(lang.code)
    
    // Handle path-based language switching for specific pages
    const currentPath = window.location.pathname
    
    // Handle home page - this is the critical fix
    if (currentPath === '/' || currentPath === '/es') {
      if (lang.code === 'es' && currentPath !== '/es') {
        window.location.href = '/es';
      } else if (lang.code === 'en' && currentPath !== '/') {
        window.location.href = '/';
      }
      return;
    }
    
    // Check if we're on an about page
    if (currentPath === '/about' || currentPath === '/about/es') {
      // Redirect to the proper language version
      if (lang.code === 'es' && currentPath !== '/about/es') {
        window.location.href = '/about/es';
      } else if (lang.code === 'en' && currentPath !== '/about') {
        window.location.href = '/about';
      }
      return;
    }
    
    // Check if we're on partner page
    if (currentPath === '/partner' || currentPath === '/partner/es') {
      if (lang.code === 'es' && currentPath !== '/partner/es') {
        window.location.href = '/partner/es';
      } else if (lang.code === 'en' && currentPath !== '/partner') {
        window.location.href = '/partner';
      }
      return;
    }
    
    // Check if we're on terms page
    if (currentPath === '/terms' || currentPath === '/terms/es') {
      if (lang.code === 'es' && currentPath !== '/terms/es') {
        window.location.href = '/terms/es';
      } else if (lang.code === 'en' && currentPath !== '/terms') {
        window.location.href = '/terms';
      }
      return;
    }
    
    // Check if we're on privacy page
    if (currentPath === '/privacy' || currentPath === '/privacy/es') {
      if (lang.code === 'es' && currentPath !== '/privacy/es') {
        window.location.href = '/privacy/es';
      } else if (lang.code === 'en' && currentPath !== '/privacy') {
        window.location.href = '/privacy';
      }
      return;
    }
  }

  // Avoid hydration issues by not rendering on server
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full opacity-70">
        <span className="text-lg">🇬🇧</span>
        <span className="sr-only">Loading language selector</span>
      </Button>
    )
  }

  // Get the current selected language object
  const currentLanguage = languages.find(lang => lang.code === currentLang) || languages[0]

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
          <span className="text-lg">{currentLanguage.flag}</span>
          <span className="sr-only">Switch language</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            className={`flex items-center justify-between gap-2 ${currentLang === lang.code ? 'bg-muted' : ''}`}
            onClick={() => handleLanguageChange(lang)}
          >
            <div className="flex items-center gap-2">
              <span className="text-lg">{lang.flag}</span>
              <span>{lang.name}</span>
            </div>
            {currentLang === lang.code && <Check className="h-4 w-4" />}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  )
} 
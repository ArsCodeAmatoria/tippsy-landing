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
    setLanguage(lang.code)
  }

  // Avoid hydration issues by not rendering on server
  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full opacity-0">
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
"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { LanguageProvider } from "@/contexts/language-context"

type ThemeProviderProps = {
  children: React.ReactNode;
  [key: string]: any;
}

export function Providers({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemesProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <LanguageProvider>
        {children}
      </LanguageProvider>
    </NextThemesProvider>
  )
} 
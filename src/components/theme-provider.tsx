"use client"

import * as React from "react"
import { useTheme } from "next-themes"

export function ThemeProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const { setTheme } = useTheme()
  
  // Always use dark theme
  React.useEffect(() => {
    setTheme("dark")
  }, [setTheme])
  
  return (
    <div>
      {children}
    </div>
  )
} 
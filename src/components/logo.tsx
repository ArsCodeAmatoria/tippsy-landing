import * as React from "react"

export function Logo() {
  return (
    <div className="flex items-center">
      <span 
        className="text-3xl md:text-5xl font-bold tracking-wide" 
        style={{ 
          fontFamily: "'Mrs Sheppards', cursive", 
          color: "var(--primary)",
          fontWeight: "normal",
          letterSpacing: "0.02em"
        }}
      >
        Tippsy
      </span>
    </div>
  )
} 
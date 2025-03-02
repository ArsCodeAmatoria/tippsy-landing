import * as React from "react"

export function Logo() {
  return (
    <div className="flex items-center">
      <span 
        className="text-3xl md:text-5xl tracking-wide logo-font" 
        style={{ 
          fontFamily: "var(--font-mrs-sheppards)",
          fontWeight: "normal",
          color: "var(--primary)"
        }}
      >
        Tippsy
      </span>
    </div>
  )
} 
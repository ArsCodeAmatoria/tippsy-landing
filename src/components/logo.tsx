import * as React from "react"

export function Logo() {
  return (
    <div className="flex items-center">
      <span 
        className="text-3xl md:text-5xl tracking-wide logo-font" 
        style={{ 
          fontWeight: "normal"
        }}
      >
        Tippsy
      </span>
    </div>
  )
} 
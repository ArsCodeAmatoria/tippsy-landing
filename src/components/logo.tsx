import * as React from "react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center space-x-2">
      <span className="logo-font text-4xl font-bold">Tippsy</span>
    </Link>
  )
} 
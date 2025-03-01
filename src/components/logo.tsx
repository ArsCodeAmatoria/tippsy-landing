import * as React from "react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center pl-8">
      <span className="logo-font text-5xl font-bold tracking-wide">Tippsy</span>
    </Link>
  )
} 
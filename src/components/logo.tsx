import * as React from "react"
import Link from "next/link"

export function Logo() {
  return (
    <Link href="/" className="flex items-center pl-8">
      <span className="logo-font text-4xl font-bold tracking-normal">Tippsy</span>
    </Link>
  )
} 
"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">
        <Link href="/" className="font-mono text-xl tracking-tighter">
          Yoshihisa Kaino
        </Link>

        {/* <nav className="hidden md:flex gap-8">
          <Link href="#investments" className="font-mono text-sm text-white/70 hover:text-white transition-colors">
            INVESTMENTS
          </Link>
          <Link href="#companies" className="font-mono text-sm text-white/70 hover:text-white transition-colors">
            COMPANIES
          </Link>
        </nav> */}

        {/* <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {isMenuOpen && (
          <div className="absolute top-16 left-0 right-0 bg-black border-b border-white/10 p-4 md:hidden">
            <nav className="flex flex-col gap-4">
              <Link
                href="#investments"
                className="font-mono text-sm text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                INVESTMENTS
              </Link>
              <Link
                href="#companies"
                className="font-mono text-sm text-white/70 hover:text-white transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                COMPANIES
              </Link>
            </nav>
          </div>
        )} */}
      </div>
    </header>
  )
}


"use client"

import Link from "next/link"
import ThemeToggle from "@/components/theme-toggle"
import { useI18n } from "./i18n-provider"
import LangSwitcher from "./lang-switcher"

const sections = ["profile", "companies", "positions", "designs", "press"] as const

export default function Navbar() {
  const { t, locale } = useI18n()

  return (
    <header className="fixed top-0 z-50 w-full bg-background/85 px-4 backdrop-blur md:px-8">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between">
        <Link href={`/${locale}`} className="font-display text-xl tracking-tight">
          {t("hero.name")}
        </Link>

        <div className="flex items-center gap-6">
          <nav className="hidden items-center gap-6 md:flex">
            {sections.map((key) => (
              <Link
                key={key}
                href={`#${key}`}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {t(`nav.${key}`)}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3">
            <LangSwitcher />
            <ThemeToggle />
          </div>
        </div>
      </div>
    </header>
  )
}

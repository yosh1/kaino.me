"use client"

import ThemeToggle from "@/components/theme-toggle"
import { useI18n } from "./i18n-provider"
import LangSwitcher from "./lang-switcher"

const sections = ["profile", "career", "designs", "press"] as const

export default function Navbar() {
  const { t } = useI18n()

  return (
    <header className="px-5 pt-8 md:px-8">
      <div className="mx-auto max-w-5xl">
        <div className="flex items-center justify-end gap-4">
          <LangSwitcher />
          <ThemeToggle />
        </div>
        <nav className="mt-8 flex flex-wrap justify-center gap-x-10 gap-y-2">
          {sections.map((key) => (
            <a
              key={key}
              href={`#${key}`}
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              {t(`nav.${key}`)}
            </a>
          ))}
        </nav>
      </div>
    </header>
  )
}

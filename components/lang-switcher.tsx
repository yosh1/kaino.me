"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { locales, type Locale, isLocale } from "@/lib/i18n/config"
import { useI18n } from "./i18n-provider"

function replaceLocale(pathname: string, next: Locale) {
  const parts = pathname.split("/")
  if (parts.length > 1 && isLocale(parts[1]!)) {
    parts[1] = next
    return parts.join("/") || `/${next}`
  }
  return `/${next}${pathname.startsWith("/") ? "" : "/"}${pathname}`
}

export default function LangSwitcher() {
  const pathname = usePathname() || "/"
  const { locale, t } = useI18n()

  return (
    <div className="flex items-center font-mono text-xs" aria-label={t("navbar.switchLabel")}>
      {locales.map((l, i) => (
        <span key={l} className="flex items-center">
          {i > 0 ? <span className="px-1.5 text-muted-foreground">/</span> : null}
          <Link
            href={replaceLocale(pathname, l)}
            aria-current={l === locale ? "true" : undefined}
            className={
              l === locale
                ? "text-foreground"
                : "text-muted-foreground transition-colors hover:text-foreground"
            }
          >
            {l.toUpperCase()}
          </Link>
        </span>
      ))}
    </div>
  )
}

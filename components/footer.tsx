"use client"

import { useI18n } from "./i18n-provider"

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="px-4 md:px-8">
      <div className="mx-auto max-w-6xl border-t border-foreground/80 py-10">
        <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
          <p className="font-display text-lg">{t("hero.name")}</p>
          <p className="font-mono text-xs text-muted-foreground">
            © {new Date().getFullYear()} Yoshihisa Kaino. {t("footer.copyrightSuffix")}
          </p>
        </div>
      </div>
    </footer>
  )
}

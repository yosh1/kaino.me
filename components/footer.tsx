"use client"

import { useI18n } from "./i18n-provider"

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-foreground/60 font-mono">
            © {new Date().getFullYear()} Yoshihisa Kaino. {t("footer.copyrightSuffix")}
          </p>

          <p className="text-sm text-foreground/60 font-mono">{t("footer.byline")}</p>
        </div>
      </div>
    </footer>
  )
}

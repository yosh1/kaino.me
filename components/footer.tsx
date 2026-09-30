"use client"

import { useI18n } from "./i18n-provider"

export default function Footer() {
  const { t } = useI18n()
  return (
    <footer className="px-5 py-16 md:px-8">
      <p className="mx-auto max-w-5xl text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Yoshihisa Kaino. {t("footer.copyrightSuffix")}
      </p>
    </footer>
  )
}

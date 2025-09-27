"use client"

import { usePathname, useRouter } from "next/navigation"
import { locales, type Locale, isLocale } from "@/lib/i18n/config"
import { useI18n } from "./i18n-provider"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

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
  const router = useRouter()
  const { locale, t } = useI18n()

  function onChange(next: string) {
    if (isLocale(next)) {
      router.push(replaceLocale(pathname, next))
    }
  }

  return (
    <div className="flex items-center text-sm">
      <Select value={locale} onValueChange={onChange}>
        <SelectTrigger
          aria-label={locale === "ja" ? t("navbar.ja") : t("navbar.en")}
          className="w-9 h-9 px-0 justify-center [&>svg]:hidden"
        >
          <span aria-hidden="true" className="text-base">
            {locale === "ja" ? "🇯🇵" : "🇺🇸"}
          </span>
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="ja">🇯🇵 {t("navbar.ja")}</SelectItem>
          <SelectItem value="en">🇺🇸 {t("navbar.en")}</SelectItem>
        </SelectContent>
      </Select>
    </div>
  )
}

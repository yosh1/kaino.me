"use client"

import { createContext, useContext, useMemo } from "react"
import type { Dict } from "@/lib/i18n/dictionaries"
import type { Locale } from "@/lib/i18n/config"

type I18nContextValue = {
  locale: Locale
  t: <K extends Path<Dict>>(key: K) => PathValue<Dict, K>
}

const I18nContext = createContext<I18nContextValue | null>(null)

export function I18nProvider({
  locale,
  messages,
  children,
}: {
  locale: Locale
  messages: Dict
  children: React.ReactNode
}) {
  const value = useMemo<I18nContextValue>(() => {
    const t = (key: string) => key.split(".").reduce<any>((acc, part) => acc?.[part], messages)
    return { locale, t: t as any }
  }, [locale, messages])

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>
}

export function useI18n() {
  const ctx = useContext(I18nContext)
  if (!ctx) throw new Error("useI18n must be used within I18nProvider")
  return ctx
}

// Utility types to allow dot-path access with type inference
type Path<T, P extends string = ""> = T extends object
  ? {
      [K in Extract<keyof T, string>]: Path<T[K], P extends "" ? K : `${P}.${K}`>
    }[Extract<keyof T, string>]
  : P

type PathValue<T, K extends string> = K extends `${infer Head}.${infer Rest}`
  ? Head extends keyof T
    ? PathValue<T[Head], Rest>
    : never
  : K extends keyof T
  ? T[K]
  : never


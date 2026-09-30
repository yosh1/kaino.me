import type { Metadata } from 'next'
import '../globals.css'
import { I18nProvider } from '@/components/i18n-provider'
import { getDictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'
import { ThemeProvider } from "@/components/theme-provider"
import { Noto_Serif_JP, Source_Serif_4 } from "next/font/google"

const serifLatin = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif-latin", display: "swap" })
const serifJp = Noto_Serif_JP({ weight: ["400", "600"], variable: "--font-serif-jp", display: "swap", preload: false })

const meta = {
  ja: {
    title: "改野 由尚｜Yoshihisa Kaino",
    description:
      "株式会社プリファード 代表取締役／AIO総研株式会社 代表取締役／特定非営利活動法人ニュークリエイターオルグ 理事長",
  },
  en: {
    title: "Yoshihisa Kaino",
    description: "CEO of Preferred Inc. and AIO Research Institute Inc. Chairman of newCreator.org.",
  },
} as const

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const m = meta[locale] ?? meta.en
  return {
    metadataBase: new URL("https://kaino.me"),
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}`, languages: { ja: "/ja", en: "/en" } },
    openGraph: {
      type: "profile",
      url: `/${locale}`,
      siteName: "Yoshihisa Kaino",
      title: m.title,
      description: m.description,
      locale: locale === "ja" ? "ja_JP" : "en_US",
      images: [{ url: "/og.jpg", width: 1200, height: 630, alt: m.title }],
    },
    twitter: {
      card: "summary_large_image",
      site: "@yoshi1125hisa",
      title: m.title,
      description: m.description,
      images: ["/og.jpg"],
    },
  }
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode
  params: Promise<{ locale: Locale }>
}>) {
  const { locale } = await params
  const dict = await getDictionary(locale)

  return (
    <html lang={locale} suppressHydrationWarning className={`${serifLatin.variable} ${serifJp.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <I18nProvider locale={locale} messages={dict}>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

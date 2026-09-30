import type { Metadata } from 'next'
import '../globals.css'
import { I18nProvider } from '@/components/i18n-provider'
import { getDictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'
import { ThemeProvider } from "@/components/theme-provider"
import { SITE_URL, person } from "@/lib/profile/data"
import { Noto_Serif_JP, Source_Serif_4 } from "next/font/google"

const serifLatin = Source_Serif_4({ subsets: ["latin"], weight: ["400", "600"], variable: "--font-serif-latin", display: "swap" })
const serifJp = Noto_Serif_JP({ weight: ["400", "600"], variable: "--font-serif-jp", display: "swap", preload: false })

const meta = {
  ja: {
    title: "改野 由尚（かいの よしひさ）｜株式会社プリファード・AIO総研 代表取締役",
    description:
      "改野 由尚（Yoshihisa Kaino）の公式プロフィール。株式会社プリファード 代表取締役、AIO総研株式会社 代表取締役、特定非営利活動法人ニュークリエイターオルグ 理事長。生成AI・AI駆動開発・DX支援・STEAM教育に取り組む。経歴・事業・メディア掲載・登壇歴を掲載。",
  },
  en: {
    title: "Yoshihisa Kaino (改野 由尚) — CEO of Preferred Inc. and AIO Research Institute",
    description:
      "Official profile of Yoshihisa Kaino, CEO of Preferred Inc. and AIO Research Institute Inc., and Chairman of the NPO newCreator.org. Working on generative AI, AI-driven development, DX and STEAM education. Career, businesses, press and talks.",
  },
} as const

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params
  const m = meta[locale] ?? meta.en
  return {
    metadataBase: new URL(SITE_URL),
    title: m.title,
    description: m.description,
    alternates: { canonical: `/${locale}`, languages: { ja: "/ja", en: "/en", "x-default": "/" } },
    authors: [{ name: person.name[locale], url: SITE_URL }],
    creator: "Yoshihisa Kaino",
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

import type { Metadata } from 'next'
import '../globals.css'
import { I18nProvider } from '@/components/i18n-provider'
import { getDictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'
import { ThemeProvider } from "@/components/theme-provider"
import { Inter, Instrument_Serif, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google"

const sans = Inter({ subsets: ["latin"], variable: "--font-sans", display: "swap" })
const serif = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-serif", display: "swap" })
const sansJp = Noto_Sans_JP({ weight: ["400", "500", "700"], variable: "--font-sans-jp", display: "swap", preload: false })
const serifJp = Noto_Serif_JP({ weight: ["500", "600"], variable: "--font-serif-jp", display: "swap", preload: false })

export const metadata: Metadata = {
  title: '改野 由尚｜Yoshihisa Kaino',
  description: '株式会社プリファード 代表取締役／AIO総研株式会社 代表取締役／特定非営利活動法人ニュークリエイターオルグ 理事長',
  generator: 'Yoshihisa Kaino',
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
    <html lang={locale} suppressHydrationWarning className={`${sans.variable} ${serif.variable} ${sansJp.variable} ${serifJp.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <I18nProvider locale={locale} messages={dict}>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

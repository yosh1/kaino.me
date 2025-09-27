import type { Metadata } from 'next'
import '../globals.css'
import { I18nProvider } from '@/components/i18n-provider'
import { getDictionary } from '@/lib/i18n/dictionaries'
import type { Locale } from '@/lib/i18n/config'
import { ThemeProvider } from "@/components/theme-provider"

export const metadata: Metadata = {
  title: 'Yoshihisa Kaino',
  description: 'Yoshihisa Kaino',
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
    <html lang={locale} suppressHydrationWarning>
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <I18nProvider locale={locale} messages={dict}>{children}</I18nProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}

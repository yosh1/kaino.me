import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Yoshihisa Kaino',
  description: 'Yoshihisa Kaino',
  generator: 'Yoshihisa Kaino',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}

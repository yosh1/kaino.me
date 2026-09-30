import Navbar from "@/components/navbar"
import Hero from "@/components/hero"
import Companies from "@/components/companies"
import Designs from "@/components/designs"
import Skills from "@/components/skills"
import Press from "@/components/press"
import Footer from "@/components/footer"
import type { Locale } from "@/lib/i18n/config"
import { getDictionary } from "@/lib/i18n/dictionaries"
import { buildJsonLd } from "@/lib/profile/jsonld"

export default async function Home({ params }: { params: Promise<{ locale: Locale }> }) {
  const { locale } = await params
  const dict = await getDictionary(locale)
  const jsonLd = buildJsonLd(locale, dict.hero.bio.replace(/\n+/g, " "))

  return (
    <div className="min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }}
      />
      <Navbar />
      <main className="px-5 pt-16 md:px-8 md:pt-20">
        <div className="mx-auto max-w-5xl md:pl-40">
          <Hero />
          <Companies />
          <Skills />
          <Designs />
          <Press />
        </div>
      </main>
      <Footer />
    </div>
  )
}

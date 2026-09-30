import type { Locale } from "@/lib/i18n/config"
import {
  SITE_URL, LAST_UPDATED, person, sameAs, currentOrganizations, alumniOf, knowsAbout,
  careers, certifications,
} from "./data"

/** ProfilePage + Person + WebSite の構造化データ（schema.org）を組み立てる */
export function buildJsonLd(locale: Locale, bio: string) {
  const pageUrl = `${SITE_URL}/${locale}`
  const personId = `${SITE_URL}/#person`

  const personNode = {
    "@type": "Person",
    "@id": personId,
    name: person.name[locale],
    alternateName: [person.name.ja, person.name.en, person.kana, "改野由尚", "Kaino Yoshihisa"],
    givenName: locale === "ja" ? "由尚" : "Yoshihisa",
    familyName: locale === "ja" ? "改野" : "Kaino",
    url: pageUrl,
    image: `${SITE_URL}${person.image}`,
    email: `mailto:${person.email}`,
    description: bio,
    jobTitle: currentOrganizations.map((o) => `${o.role[locale]}, ${o.name[locale]}`),
    worksFor: currentOrganizations.map((o) => ({
      "@type": "Organization",
      name: o.name[locale],
      ...(o.url ? { url: o.url } : {}),
    })),
    alumniOf: alumniOf.map((a) => ({ "@type": "EducationalOrganization", name: a[locale], url: a.url })),
    birthDate: person.birthYear,
    birthPlace: { "@type": "Place", name: person.birthPlace[locale] },
    nationality: { "@type": "Country", name: "Japan" },
    knowsLanguage: ["ja", "en"],
    knowsAbout,
    hasCredential: certifications.map((c) => ({
      "@type": "EducationalOccupationalCredential",
      name: c.name[locale],
      dateCreated: c.date.replace(".", "-"),
    })),
    // schema.org の Role パターンで、在籍期間つきの所属を表す
    memberOf: careers
      .filter((c) => c.role)
      .map((c) => {
        const [start, end] = c.period.en.split(" - ")
        return {
          "@type": "OrganizationRole",
          roleName: c.role![locale],
          startDate: start.replace(".", "-"),
          ...(end && end !== "current" ? { endDate: end.replace(".", "-") } : {}),
          memberOf: { "@type": "Organization", name: c.name[locale] },
        }
      }),
    sameAs,
  }

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfilePage",
        "@id": `${pageUrl}#profilepage`,
        url: pageUrl,
        name: locale === "ja" ? `${person.name.ja}（${person.name.en}）のプロフィール` : `${person.name.en} — Profile`,
        inLanguage: locale === "ja" ? "ja-JP" : "en-US",
        dateModified: LAST_UPDATED,
        mainEntity: { "@id": personId },
        isPartOf: { "@id": `${SITE_URL}/#website` },
      },
      personNode,
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: `${person.name.ja}｜${person.name.en}`,
        inLanguage: ["ja-JP", "en-US"],
        publisher: { "@id": personId },
      },
    ],
  }
}

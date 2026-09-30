"use client"

import { Section, Entry } from "@/components/ui/section"
import { useI18n } from "./i18n-provider"

const certifications = [
  {
    name: { en: "Applied Information Technology Engineer Examination", ja: "応用情報技術者試験" },
    date: "2022.12",
  },
  {
    name: { en: "Information Technology Passport Examination", ja: "ITパスポート試験" },
    date: "2020.04",
  },
]

export default function Skills() {
  const { t, locale } = useI18n()

  return (
    <Section id="skills" title={t("skills.title") as string}>
      <p className="leading-relaxed">{t("skills.areas")}</p>
      <h3 className="mb-1 mt-6 text-sm text-muted-foreground">{t("skills.certifications")}</h3>
      <ul>
        {certifications.map((c) => (
          <Entry key={c.date} period={c.date}>
            {c.name[locale]}
          </Entry>
        ))}
      </ul>
    </Section>
  )
}

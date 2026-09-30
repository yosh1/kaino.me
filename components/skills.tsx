"use client"

import { Section, Entry } from "@/components/ui/section"
import { useI18n } from "./i18n-provider"
import { techs, certifications } from "@/lib/profile/data"

export default function Skills() {
  const { t, locale } = useI18n()

  return (
    <Section id="skills" title={t("skills.title") as string}>
      <p className="leading-relaxed">{t("skills.areas")}</p>

      <ul className="mt-6">
        {techs.map((s) => (
          <Entry key={s.category.en} period={s.category[locale]}>
            {s.items[locale]}
          </Entry>
        ))}
      </ul>

      <h3 className="mb-1 mt-8 text-sm text-muted-foreground">{t("skills.certifications")}</h3>
      <ul>
        {certifications.map((c) => (
          <Entry key={c.name.en} period={c.date}>
            {c.name[locale]}
          </Entry>
        ))}
      </ul>
    </Section>
  )
}

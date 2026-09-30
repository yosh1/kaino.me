"use client"

import { Section } from "@/components/ui/section"
import { useI18n } from "./i18n-provider"

export default function Profile() {
  const { t } = useI18n()
  const paragraphs = (t("hero.bio") as string).split("\n\n")

  return (
    <Section id="profile" index="01" title={t("profile.title") as string}>
      <div className="max-w-2xl space-y-6 text-base leading-loose text-foreground/85 md:text-lg md:leading-loose">
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
      </div>
    </Section>
  )
}

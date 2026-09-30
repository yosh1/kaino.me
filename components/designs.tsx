"use client"

import { Section, Entry } from "@/components/ui/section";
import { useI18n } from "./i18n-provider";
import { designs } from "@/lib/profile/data";

export default function Designs() {
  const { t, locale } = useI18n();

  return (
    <Section id="designs" title={t("designs.title") as string}>
      <ul>
        {designs.map((item) => (
          <Entry key={item.id} period={item.year[locale]}>
            <a href={item.link} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">
              {item.name[locale]}
            </a>
            <span className="text-muted-foreground">　{item.description[locale]}</span>
          </Entry>
        ))}
      </ul>
    </Section>
  )
}

"use client"

import { Section, Entry } from "@/components/ui/section";
import { useI18n } from "./i18n-provider";
import { careers } from "@/lib/profile/data";

export default function Companies() {
  const { t, locale } = useI18n();

  return (
    <Section id="career" title={t("career.title") as string}>
      <ul>
        {careers.map((item) => (
          <Entry key={item.name.en} period={item.period[locale]}>
            {item.name[locale]}
            {item.role ? <span className="text-muted-foreground">　{item.role[locale]}</span> : null}
          </Entry>
        ))}
      </ul>
    </Section>
  );
}

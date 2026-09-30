"use client"

import { Section, Entry } from "@/components/ui/section"
import { useI18n } from "./i18n-provider"

type Position = {
  org: { en: string; ja: string }
  role: { en: string; ja: string }
  period: { en: string; ja: string }
  current: boolean
}

const positions: Position[] = [
  {
    org: {
      en: "The Mathematics Certification Institute of Japan",
      ja: "公益財団法人日本数学検定協会",
    },
    role: { en: "AI Officer", ja: "AI Officer" },
    period: { en: "2025.12 - current", ja: "2025.12 - 現在" },
    current: true,
  },
  {
    org: {
      en: "Hiroshima Sakuragaoka High School (Matsumoto Gakuen)",
      ja: "学校法人松本学園 広島桜が丘高等学校",
    },
    role: { en: "Instructor, Programming Course", ja: "プログラミングコース講師" },
    period: { en: "2024.4 - 2026.3", ja: "2024.4 - 2026.3" },
    current: false,
  },
]

export default function Positions() {
  const { t, locale } = useI18n()

  const sorted = [...positions.filter((p) => p.current), ...positions.filter((p) => !p.current)]

  return (
    <Section id="positions" title={t("positions.title") as string}>
      <ul>
        {sorted.map((item) => (
          <Entry key={item.org.en} period={item.period[locale]}>
            {item.org[locale]}
            <span className="text-muted-foreground">　{item.role[locale]}</span>
          </Entry>
        ))}
      </ul>
    </Section>
  )
}

"use client"

import { Section, SubHeading } from "@/components/ui/section"
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

  const Row = ({ item }: { item: Position }) => (
    <li className="grid grid-cols-1 gap-1 border-b border-border py-5 sm:grid-cols-[1fr_auto] sm:items-center sm:gap-6">
      <div className="min-w-0">
        <p className="font-display text-xl leading-snug md:text-2xl">{item.org[locale]}</p>
        <p className="mt-1 text-sm text-muted-foreground">{item.role[locale]}</p>
      </div>
      <p className="font-mono text-xs tabular-nums text-muted-foreground sm:text-right">{item.period[locale]}</p>
    </li>
  )

  const groups = [
    { label: t("companies.current") as string, items: positions.filter((p) => p.current) },
    { label: t("companies.past") as string, items: positions.filter((p) => !p.current) },
  ].filter((g) => g.items.length)

  return (
    <Section id="positions" index="03" title={t("positions.title") as string}>
      <div className="space-y-14">
        {groups.map((g) => (
          <div key={g.label}>
            <SubHeading>{g.label}</SubHeading>
            <ul className="border-t border-border">
              {g.items.map((item) => (
                <Row key={item.org.en} item={item} />
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  )
}

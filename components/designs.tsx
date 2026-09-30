"use client"

import { Section, Entry } from "@/components/ui/section";
import { useI18n } from "./i18n-provider";

export default function Designs() {
  const { t, locale } = useI18n();
  const designs = [
    {
      id: 1,
      name: { en: "Slow Rush Coffee", ja: "Slow Rush Coffee" },
      year: { en: "2023 - Current", ja: "2023 - 現在" },
      description: {
        en: "Launched a cafe in Kamakura (Preferred Inc.)",
        ja: "鎌倉にカフェを立ち上げ（株式会社プリファード）",
      },
      link: "https://www.slowrush.jp/",
    },
    {
      id: 2,
      name: { en: "Preferred Estate", ja: "Preferred Estate" },
      year: { en: "2025 - Current", ja: "2025 - 現在" },
      description: {
        en: "Launched a real estate brokerage in Tokyo (Preferred Inc.)",
        ja: "東京で不動産事業を立ち上げ（株式会社プリファード）",
      },
      link: "https://estate.pref.co.jp/",
    },
    {
      id: 3,
      name: { en: "LC COFFEE", ja: "LC COFFEE" },
      year: { en: "2025 - Current", ja: "2025 - 現在" },
      description: {
        en: "E-commerce collaboration with Luxury Card (Preferred Inc.)",
        ja: "ラグジュアリーカードとのコラボレーションEC（株式会社プリファード）",
      },
      link: "https://slowrush.jp/store/lc-coffee",
    },
  ];

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

"use client"

import { Section, SectionHeader } from "@/components/ui/section";
import CardItem from "@/components/ui/card-item";
import { useI18n } from "./i18n-provider";

export default function Designs() {
  const { t, locale } = useI18n();
  const designs = [
    {
      id: 1,
      name: { en: "Slow Rush Coffee", ja: "Slow Rush Coffee" },
      year: { en: "2023 - Current", ja: "2023 - 現在" },
      description: {
        en: "Made a cafe in Kamakura, Japan (Preferred Inc.)",
        ja: "鎌倉にカフェを立ち上げ（株式会社プリファード）",
      },
      image: "https://www.slowrush.jp/ogp.png",
      tags: { en: ["Development", "Cafe"], ja: ["事業開発", "カフェ"] },
      link: "https://www.slowrush.jp/",
    },
    {
      id: 2,
      name: { en: "Miyabi Estate", ja: "みやび不動産" },
      year: { en: "2025 - Current", ja: "2025 - 現在" },
      description: {
        en: "Designed a real estate works in Tokyo, Japan (Preferred Inc.)",
        ja: "東京で不動産事業を立ち上げ（株式会社プリファード）",
      },
      image: "https://www.miyabifudosan.com/hero.jpeg",
      tags: { en: ["Development", "Estate"], ja: ["事業開発", "不動産"] },
      link: "https://www.miyabifudosan.com/",
    },
    {
      id: 3,
      name: { en: "LC COFFEE", ja: "LC COFFEE" },
      year: { en: "2025 - Current", ja: "2025 - 現在" },
      description: {
        en: "Collaboration EC with Luxury Card (Preferred Inc.)",
        ja: "ラグジュアリーカードとのコラボレーションEC（株式会社プリファード）",
      },
      image: "https://www.pref.co.jp/img/lc-coffee.png",
      tags: { en: ["Development", "EC"], ja: ["事業開発", "EC"] },
      link: "https://slowrush.jp/store/lc-coffee",
    },
  ];

  return (
    <Section id="designs">
      <SectionHeader title={t("designs.title") as string} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {designs.map((item) => (
          <CardItem
            key={item.id}
            href={item.link}
            image={item.image}
            title={item.name[locale]}
            subtitle={item.year[locale]}
            description={item.description[locale]}
            tags={item.tags[locale]}
            external
          />
        ))}
      </div>
    </Section>
  )
}

"use client"

import { Section, SectionHeader } from "@/components/ui/section";
import CardItem from "@/components/ui/card-item";
import { useI18n } from "./i18n-provider";

export default function Designs() {
  const { t } = useI18n();
  const designs = [
    {
      id: 1,
      name: "Slow Rush Coffee",
      year: "2023 - Current",
      description: "Made a cafe in Kamakura, Japan (Preferred Inc.)",
      image: "https://www.slowrush.jp/ogp.png",
      tags: ["Development", "Cafe"],
      link: "https://www.slowrush.jp/",
    },
    {
      id: 2,
      name: "Miyabi Estate",
      year: "2025 - Current",
      description: "Designed a real estate works in Tokyo, Japan (Preferred Inc.)",
      image: "https://www.miyabifudosan.com/hero.jpeg",
      tags: ["Development", "Estate"],
      link: "https://www.miyabifudosan.com/",
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
            title={item.name}
            subtitle={item.year}
            description={item.description}
            tags={item.tags}
            external
          />
        ))}
      </div>
    </Section>
  )
}

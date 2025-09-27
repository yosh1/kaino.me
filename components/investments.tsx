"use client"

import { Section, SectionHeader } from "@/components/ui/section";
import CardItem from "@/components/ui/card-item";
import { useI18n } from "./i18n-provider";

export default function Investments() {
  const { t } = useI18n();
  const investments = [
    {
      id: 1,
      name: "newCreator Inc.",
      year: "2023",
      description: "Invested in newCreator Inc., a STEAM education startup",
      image: "https://newcreator.jp//ogp.png",
      tags: ["Education", "STEM", "AI"],
    },
    {
      id: 2,
      name: "US Education Startups",
      year: "2024",
      description: "Invested in US education startups",
      image: "/placeholder.svg?height=200&width=300",
      tags: ["Education", "STEM", "AI"],
    },
  ];

  return (
    <Section id="investments">
      <SectionHeader title={t("investments.title") as string} />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {investments.map((item) => (
          <CardItem
            key={item.id}
            href="#"
            image={item.image}
            title={item.name}
            subtitle={item.year}
            description={item.description}
            tags={item.tags}
          />
        ))}
      </div>
    </Section>
  )
}

"use client"

import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Section } from "@/components/ui/section";
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
      name: { en: "Preferred Estate", ja: "Preferred Estate" },
      year: { en: "2025 - Current", ja: "2025 - 現在" },
      description: {
        en: "Designed a real estate works in Tokyo, Japan (Preferred Inc.)",
        ja: "東京で不動産事業を立ち上げ（株式会社プリファード）",
      },
      image: "/img/preferred-estate.jpg",
      tags: { en: ["Development", "Estate"], ja: ["事業開発", "不動産"] },
      link: "https://estate.pref.co.jp/",
    },
    {
      id: 3,
      name: { en: "LC COFFEE", ja: "LC COFFEE" },
      year: { en: "2025 - Current", ja: "2025 - 現在" },
      description: {
        en: "Collaboration EC with Luxury Card (Preferred Inc.)",
        ja: "ラグジュアリーカードとのコラボレーションEC（株式会社プリファード）",
      },
      image: "/img/lc-coffee.png",
      tags: { en: ["Development", "EC"], ja: ["事業開発", "EC"] },
      link: "https://slowrush.jp/store/lc-coffee",
    },
  ];

  return (
    <Section id="designs" index="04" title={t("designs.title") as string}>
      <ul className="grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2">
        {designs.map((item) => (
          <li key={item.id}>
            <Link href={item.link} target="_blank" rel="noopener noreferrer" className="group block">
              <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                <Image
                  src={item.image}
                  alt={item.name[locale]}
                  fill
                  sizes="(min-width: 640px) 33vw, 100vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="mt-4 flex items-baseline justify-between gap-4">
                <h3 className="font-display text-2xl leading-snug">{item.name[locale]}</h3>
                <ArrowUpRight className="h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-highlight" />
              </div>
              <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{item.description[locale]}</p>
              <p className="mt-2 font-mono text-xs text-muted-foreground">{item.year[locale]}</p>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}

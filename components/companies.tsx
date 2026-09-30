"use client"

import { Section, Entry } from "@/components/ui/section";
import { useI18n } from "./i18n-provider";

export default function Companies() {
  const { t, locale } = useI18n();
  const companies = [
    {
      id: 1,
      name: { en: "SKYWARD Inc.", ja: "株式会社SKYWARD" },
      year: { en: "2018", ja: "2018" },
      description: { en: "CTO", ja: "CTO" },
      current: false,
    },
    {
      id: 2,
      name: { en: "Bae8 Inc.", ja: "株式会社Bae8" },
      year: { en: "2018 - 2019", ja: "2018 - 2019" },
      description: { en: "CTO", ja: "CTO" },
      current: false,
    },
    {
      id: 3,
      name: { en: "newCreator.org", ja: "特定非営利活動法人ニュークリエイターオルグ" },
      year: { en: "2019 - current", ja: "2019 - 現在" },
      description: { en: "Founder, Chairman", ja: "創業者・理事長" },
      current: true,
    },
    {
      id: 4,
      name: { en: "Preferred Inc.", ja: "株式会社プリファード" },
      year: { en: "2022 - current", ja: "2022 - 現在" },
      description: { en: "Founder, CEO", ja: "創業者・代表取締役" },
      current: true,
    },
    {
      id: 5,
      name: { en: "newCreator Inc.", ja: "株式会社ニュークリエイター" },
      year: { en: "2023 - 2024", ja: "2023 - 2024" },
      description: { en: "Founder, CTO", ja: "創業者・CTO" },
      current: false,
    },
    {
      id: 6,
      name: { en: "XTEM Inc.", ja: "エクステム株式会社" },
      year: { en: "2024 - 2025", ja: "2024 - 2025" },
      description: { en: "Founder, CEO (Exited)", ja: "創業者・代表取締役（EXIT済）" },
      current: false,
    },
    {
      id: 8,
      name: { en: "AIO Research Institute Inc.", ja: "AIO総研株式会社" },
      year: { en: "2025 - current", ja: "2025 - 現在" },
      description: { en: "Founder, CEO", ja: "創業者・代表取締役" },
      current: true,
    },
  ];

  // 年度から開始年を抽出する関数
  const getStartYear = (yearString: string): number => {
    const match = yearString.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
  };

  // 時系列順にソートする関数
  const sortByYear = (a: typeof companies[0], b: typeof companies[0]): number => {
    const yearA = getStartYear(a.year.en);
    const yearB = getStartYear(b.year.en);
    return yearB - yearA; // 新しい順（降順）
  };


  return (
    <Section id="companies" title={t("companies.title") as string}>
      <ul>
        {[...companies].sort(sortByYear).map((item) => (
          <Entry key={item.id} period={item.year[locale]}>
            {item.name[locale]}
            <span className="text-muted-foreground">　{item.description[locale]}</span>
          </Entry>
        ))}
      </ul>
    </Section>
  )
}

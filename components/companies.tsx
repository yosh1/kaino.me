"use client"

import { Section, SectionHeader } from "@/components/ui/section";
import CardItem from "@/components/ui/card-item";
import { useI18n } from "./i18n-provider";

export default function Companies() {
  const { t, locale } = useI18n();
  const companies = [
    {
      id: 1,
      name: { en: "SKYWARD Inc.", ja: "株式会社SKYWARD" },
      year: { en: "2018", ja: "2018" },
      description: { en: "CTO", ja: "CTO" },
      image: "/img/skyward.png",
      tags: { en: ["Startups", "AI"], ja: ["スタートアップ", "AI"] },
      current: false,
    },
    {
      id: 2,
      name: { en: "Bae8 Inc.", ja: "株式会社Bae8" },
      year: { en: "2018 - 2019", ja: "2018 - 2019" },
      description: { en: "CTO", ja: "CTO" },
      image: "/img/bae8.png",
      tags: { en: ["Startups", "Web3"], ja: ["スタートアップ", "Web3"] },
      current: false,
    },
    {
      id: 3,
      name: { en: "newCreator.org", ja: "特定非営利活動法人ニュークリエイターオルグ" },
      year: { en: "2019 - current", ja: "2019 - 現在" },
      description: { en: "Founder, Chairman", ja: "創業者・理事長" },
      image: "/img/newcreator-org.svg",
      tags: { en: ["NPO", "Education"], ja: ["NPO", "教育"] },
      current: true,
    },
    {
      id: 4,
      name: { en: "Preferred Inc.", ja: "株式会社プリファード" },
      year: { en: "2022 - current", ja: "2022 - 現在" },
      description: { en: "Founder, CEO", ja: "創業者・代表取締役" },
      image: "/img/pref.svg",
      tags: { en: ["Venture", "Parallel"], ja: ["ベンチャー", "パラレル"] },
      current: true,
    },
    {
      id: 5,
      name: { en: "newCreator Inc.", ja: "株式会社ニュークリエイター" },
      year: { en: "2023 - 2024", ja: "2023 - 2024" },
      description: { en: "Founder, CTO", ja: "創業者・CTO" },
      image: "/img/newcreator-jp.svg",
      tags: { en: ["Startups", "AI", "Education"], ja: ["スタートアップ", "AI", "教育"] },
      current: false,
    },
    {
      id: 6,
      name: { en: "XTEM Inc.", ja: "エクステム株式会社" },
      year: { en: "2024 - 2025", ja: "2024 - 2025" },
      description: { en: "Founder, CEO (Exited)", ja: "創業者・代表取締役（EXIT済）" },
      image: "/img/xtem.png",
      tags: { en: ["Startups", "AI"], ja: ["スタートアップ", "AI"] },
      current: false,
    },
    {
      id: 8,
      name: { en: "AIO Research Institute Inc.", ja: "AIO総研株式会社" },
      year: { en: "2025 - current", ja: "2025 - 現在" },
      description: { en: "Founder, CEO", ja: "創業者・代表取締役" },
      image: "/img/aio.png",
      tags: { en: ["AI", "Research"], ja: ["AI", "研究"] },
      current: true,
    },
    {
      id: 7,
      name: { en: "SUPOTA Inc.", ja: "株式会社SUPOTA" },
      year: { en: "2019", ja: "2019" },
      description: { en: "CTO", ja: "CTO" },
      image: "/img/supota.png",
      tags: { en: ["Startups", "Sports", "Blockchain"], ja: ["スタートアップ", "スポーツ", "ブロックチェーン"] },
      current: false,
    },
    {
      id: 9,
      name: { en: "Preferred Agency Inc.", ja: "株式会社プリファードエージェンシー" },
      year: { en: "2024 - current", ja: "2024 - 現在" },
      description: { en: "CTO", ja: "CTO" },
      image: "/placeholder.svg?height=200&width=300",
      tags: { en: ["AI", "Advertising"], ja: ["AI", "広告"] },
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

  const currentCompanies = companies
    .filter(company => company.current)
    .sort(sortByYear);
  
  const pastCompanies = companies
    .filter(company => !company.current)
    .sort(sortByYear);

  const CompanyCard = ({ item }: { item: typeof companies[0] }) => (
    <CardItem
      href="#"
      image={item.image}
      title={item.name[locale]}
      subtitle={item.year[locale]}
      description={item.description[locale]}
      tags={item.tags[locale]}
    />
  );

  return (
    <Section id="companies">
      <SectionHeader title={t("companies.title") as string} />

      <div className="mb-16">
        <h3 className="text-2xl font-bold mb-8">{t("companies.current")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {currentCompanies.map((item) => (
            <CompanyCard key={item.id} item={item} />
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-2xl font-bold mb-8">{t("companies.past")}</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {pastCompanies.map((item) => (
            <CompanyCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </Section>
  )
}

"use client"

import { Section, SectionHeader } from "@/components/ui/section";
import CardItem from "@/components/ui/card-item";
import { useI18n } from "./i18n-provider";

export default function Companies() {
  const { t } = useI18n();
  const companies = [
    {
      id: 1,
      name: "SKYWARD Inc.",
      year: "2018",
      description: "CTO",
      image: "/img/skyward.png",
      tags: ["Startups", "AI"],
      current: false,
    },
    {
      id: 2,
      name: "Bae8 Inc.",
      year: "2018 - 2019",
      description: "CTO",
      image: "/img/bae8.png",
      tags: ["Startups", "Web3"],
      current: false,
    },
    {
      id: 3,
      name: "newCreator.org",
      year: "2019 - current",
      description: "Founder, Chairman",
      image: "/img/newcreator-org.svg",
      tags: ["NPO", "Education"],
      current: true,
    },
    {
      id: 4,
      name: "Preferred Inc.",
      year: "2022 - current",
      description: "Founder, CEO",
      image: "/img/pref.svg",
      tags: ["Venture", "Parallel"],
      current: true,
    },
    {
      id: 5,
      name: "newCreator Inc.",
      year: "2023 - 2024",
      description: "Founder, CEO",
      image: "/img/newcreator-jp.svg",
      tags: ["Startups", "AI", "Education"],
      current: false,
    },
    {
      id: 6,
      name: "XTEM Inc.",
      year: "2024 - current",
      description: "Founder, CEO",
      image: "/img/xtem.png",
      tags: ["Startups", "AI"],
      current: true,
    },
    {
      id: 7,
      name: "SUPOTA Inc.",
      year: "2019",
      description: "CTO",
      image: "/img/supota.png",
      tags: ["Startups", "Sports", "Blockchain"],
      current: false,
    },
  ];

  // 年度から開始年を抽出する関数
  const getStartYear = (yearString: string): number => {
    const match = yearString.match(/(\d{4})/);
    return match ? parseInt(match[1]) : 0;
  };

  // 時系列順にソートする関数
  const sortByYear = (a: typeof companies[0], b: typeof companies[0]): number => {
    const yearA = getStartYear(a.year);
    const yearB = getStartYear(b.year);
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
      title={item.name}
      subtitle={item.year}
      description={item.description}
      tags={item.tags}
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

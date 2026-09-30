"use client"

import { Section, Entry } from "@/components/ui/section";
import { useI18n } from "./i18n-provider";

type L = { en: string; ja: string };
type Career = { name: L; role: L; period: L };

// 創業した会社と、就いている役職・講師を 1 つの経歴にまとめる
const careers: Career[] = [
  {
    name: { en: "AdOps Inc.", ja: "株式会社AdOps" },
    role: { en: "Partner CTO", ja: "パートナーCTO" },
    period: { en: "2025.12 - current", ja: "2025.12 - 現在" },
  },
  {
    name: { en: "The Mathematics Certification Institute of Japan", ja: "公益財団法人日本数学検定協会" },
    role: { en: "AI Officer", ja: "AI Officer" },
    period: { en: "2025.12 - current", ja: "2025.12 - 現在" },
  },
  {
    name: { en: "AIO Research Institute Inc.", ja: "AIO総研株式会社" },
    role: { en: "Founder, CEO", ja: "創業者・代表取締役" },
    period: { en: "2025 - current", ja: "2025 - 現在" },
  },
  {
    name: { en: "XTEM Inc.", ja: "エクステム株式会社" },
    role: { en: "Founder, CEO (Exited)", ja: "創業者・代表取締役（EXIT済）" },
    period: { en: "2024 - 2025", ja: "2024 - 2025" },
  },
  {
    name: { en: "Hiroshima Sakuragaoka High School (Matsumoto Gakuen)", ja: "学校法人松本学園 広島桜が丘高等学校" },
    role: { en: "Instructor, Programming Course", ja: "プログラミングコース講師" },
    period: { en: "2024.4 - 2026.3", ja: "2024.4 - 2026.3" },
  },
  {
    name: { en: "newCreator Inc.", ja: "株式会社ニュークリエイター" },
    role: { en: "Founder, CTO", ja: "創業者・CTO" },
    period: { en: "2023 - 2024", ja: "2023 - 2024" },
  },
  {
    name: { en: "Preferred Inc.", ja: "株式会社プリファード" },
    role: { en: "Founder, CEO", ja: "創業者・代表取締役" },
    period: { en: "2022 - current", ja: "2022 - 現在" },
  },
  {
    name: { en: "newCreator.org", ja: "特定非営利活動法人ニュークリエイターオルグ" },
    role: { en: "Founder, Chairman", ja: "創業者・理事長" },
    period: { en: "2019 - current", ja: "2019 - 現在" },
  },
  {
    name: { en: "Bae8 Inc.", ja: "株式会社Bae8" },
    role: { en: "CTO", ja: "CTO" },
    period: { en: "2018 - 2019", ja: "2018 - 2019" },
  },
  {
    name: { en: "SKYWARD Inc.", ja: "株式会社SKYWARD" },
    role: { en: "CTO", ja: "CTO" },
    period: { en: "2018", ja: "2018" },
  },
];

export default function Companies() {
  const { t, locale } = useI18n();

  return (
    <Section id="career" title={t("career.title") as string}>
      <ul>
        {careers.map((item) => (
          <Entry key={item.name.en} period={item.period[locale]}>
            {item.name[locale]}
            <span className="text-muted-foreground">　{item.role[locale]}</span>
          </Entry>
        ))}
      </ul>
    </Section>
  );
}

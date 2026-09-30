"use client"

import { Section, Entry } from "@/components/ui/section";
import { useI18n } from "./i18n-provider";

type L = { en: string; ja: string };
type Career = { name: L; role?: L; period: L };

// 創業した会社・役職・講師・学歴を 1 つの経歴にまとめる（開始の新しい順）
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
    period: { en: "2025.10 - current", ja: "2025.10 - 現在" },
  },
  {
    name: { en: "XTEM Inc.", ja: "エクステム株式会社" },
    role: { en: "Founder, CEO (Exited)", ja: "創業者・代表取締役（EXIT済）" },
    period: { en: "2024.10 - 2025.11", ja: "2024.10 - 2025.11" },
  },
  {
    name: { en: "Hiroshima Sakuragaoka High School (Matsumoto Gakuen)", ja: "学校法人松本学園 広島桜が丘高等学校" },
    role: { en: "Instructor, Programming Course", ja: "プログラミングコース講師" },
    period: { en: "2024.04 - 2026.03", ja: "2024.04 - 2026.03" },
  },
  {
    name: { en: "newCreator Inc.", ja: "株式会社ニュークリエイター" },
    role: { en: "Founder, CTO", ja: "創業者・CTO" },
    period: { en: "2023.05 - 2024.12", ja: "2023.05 - 2024.12" },
  },
  {
    name: { en: "Preferred Inc.", ja: "株式会社プリファード" },
    role: { en: "Founder, CEO", ja: "創業者・代表取締役" },
    period: { en: "2022.11 - current", ja: "2022.11 - 現在" },
  },
  {
    name: { en: "Keio University", ja: "慶應義塾大学" },
    role: { en: "Faculty of Environment and Information Studies (Masui Lab)", ja: "環境情報学部（増井研究室）" },
    period: { en: "2020.04 - 2024.03", ja: "2020.04 - 2024.03" },
  },
  {
    name: { en: "newCreator.org", ja: "特定非営利活動法人ニュークリエイターオルグ" },
    role: { en: "Founder, Chairman", ja: "創業者・理事長" },
    period: { en: "2019.01 - current", ja: "2019.01 - 現在" },
  },
  {
    name: { en: "N High School (Kadokawa Dwango Gakuen)", ja: "角川ドワンゴ学園N高等学校" },
    role: { en: "Entrepreneurship Club, Active Learner", ja: "起業部・Active Learner認定" },
    period: { en: "2018.04 - 2020.03", ja: "2018.04 - 2020.03" },
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
  {
    name: { en: "Hyogo Prefectural Himeji Technical High School", ja: "兵庫県立姫路工業高等学校" },
    period: { en: "2017.04 - 2018.03", ja: "2017.04 - 2018.03" },
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
            {item.role ? <span className="text-muted-foreground">　{item.role[locale]}</span> : null}
          </Entry>
        ))}
      </ul>
    </Section>
  );
}

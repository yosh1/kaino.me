"use client"

import { Section, Entry } from "@/components/ui/section"
import { useI18n } from "./i18n-provider"

type L = { en: string; ja: string }

const techs: { category: L; items: L }[] = [
  {
    category: { en: "Languages", ja: "言語" },
    items: { en: "Python, TypeScript / JavaScript, Go, Java, Ruby, PHP, SQL", ja: "Python, TypeScript / JavaScript, Go, Java, Ruby, PHP, SQL" },
  },
  {
    category: { en: "Libraries", ja: "ライブラリ" },
    items: {
      en: "React, Next.js, Node.js, Express, Flask, Django, Ruby on Rails, TensorFlow, PyTorch",
      ja: "React, Next.js, Node.js, Express, Flask, Django, Ruby on Rails, TensorFlow, PyTorch",
    },
  },
  {
    category: { en: "Cloud", ja: "クラウド" },
    items: { en: "AWS, Google Cloud, Vercel, Docker, Kubernetes, Terraform", ja: "AWS, Google Cloud, Vercel, Docker, Kubernetes, Terraform" },
  },
  {
    category: { en: "Databases", ja: "DB" },
    items: { en: "PostgreSQL, MySQL, Redis, Cloudflare D1", ja: "PostgreSQL, MySQL, Redis, Cloudflare D1" },
  },
  {
    category: { en: "AI / LLM", ja: "AI・LLM" },
    items: {
      en: "LLM fine-tuning, RAG, AI agents, prompt engineering, NLP, Claude Agent SDK, Claude Code, Codex CLI",
      ja: "LLMファインチューニング, RAG構築, エージェント開発, プロンプトエンジニアリング, 自然言語処理, Claude Agent SDK, Claude Code, Codex CLI",
    },
  },
  {
    category: { en: "Business", ja: "ビジネス" },
    items: {
      en: "Startup management, product management, project management, agile development, UX/UI design, DX support",
      ja: "スタートアップ経営, プロダクトマネジメント, プロジェクトマネジメント, アジャイル開発, UX/UIデザイン, DX支援",
    },
  },
  {
    category: { en: "Marketing", ja: "マーケ" },
    items: {
      en: "Growth hacking, SEO, content marketing, data analysis (GA, BigQuery)",
      ja: "グロースハック, SEO, コンテンツマーケティング, データ分析（GA, BigQuery）",
    },
  },
]

const certifications: { name: L; date: string }[] = [
  { name: { en: "Salesforce Certified AI Associate", ja: "Salesforce Certified AI Associate" }, date: "2025.03" },
  { name: { en: "Salesforce Certified Administrator", ja: "Salesforce 認定アドミニストレーター" }, date: "2023.04" },
  { name: { en: "Applied Information Technology Engineer Examination", ja: "応用情報技術者試験" }, date: "2022.12" },
  { name: { en: "Fundamental Information Technology Engineer Examination", ja: "基本情報技術者試験" }, date: "2020.04" },
  { name: { en: "Information Technology Passport Examination", ja: "ITパスポート試験" }, date: "2020.04" },
  { name: { en: "TOEIC 720", ja: "TOEIC 720点" }, date: "2018.03" },
]

export default function Skills() {
  const { t, locale } = useI18n()

  return (
    <Section id="skills" title={t("skills.title") as string}>
      <p className="leading-relaxed">{t("skills.areas")}</p>

      <ul className="mt-6">
        {techs.map((s) => (
          <Entry key={s.category.en} period={s.category[locale]}>
            {s.items[locale]}
          </Entry>
        ))}
      </ul>

      <h3 className="mb-1 mt-8 text-sm text-muted-foreground">{t("skills.certifications")}</h3>
      <ul>
        {certifications.map((c) => (
          <Entry key={c.name.en} period={c.date}>
            {c.name[locale]}
          </Entry>
        ))}
      </ul>
    </Section>
  )
}

import { dictionaries } from "@/lib/i18n/dictionaries"
import {
  SITE_URL, LAST_UPDATED, person, socials, sameAs, currentOrganizations,
  careers, designs, techs, certifications, articles,
} from "@/lib/profile/data"

// AI（LLM）向けに、人物情報を 1 枚の Markdown にまとめて返す（https://llmstxt.org/）
export function GET() {
  const ja = dictionaries.ja
  const en = dictionaries.en
  const lines: string[] = []
  const push = (...l: string[]) => lines.push(...l)

  push(
    `# ${person.name.ja}（${person.name.en}）`,
    "",
    `> ${person.name.ja}（${person.kana} / ${person.name.en}）は、${currentOrganizations
      .slice(0, 3)
      .map((o) => `${o.name.ja} ${o.role.ja}`)
      .join("、")}。AI の社会実装・事業開発・STEAM 教育に取り組む。`,
    "",
    `- 公式サイト: ${SITE_URL}/ja （英語: ${SITE_URL}/en）`,
    `- 最終更新: ${LAST_UPDATED}`,
    "",
    "## 現在の役職",
    ...currentOrganizations.map((o) => `- ${o.name.ja} ${o.role.ja}${o.url ? `（${o.url}）` : ""}`),
    "",
    "## プロフィール",
    ja.hero.bio,
    "",
    "## 経歴",
    ...careers.map((c) => `- ${c.period.ja}　${c.name.ja}${c.role ? `　${c.role.ja}` : ""}`),
    "",
    "## 事業",
    ...designs.map((d) => `- [${d.name.ja}](${d.link})（${d.year.ja}）: ${d.description.ja}`),
    "",
    "## スキル",
    `- 領域: ${ja.skills.areas}`,
    ...techs.map((t) => `- ${t.category.ja}: ${t.items.ja}`),
    "",
    "## 資格",
    ...certifications.map((c) => `- ${c.date}　${c.name.ja}`),
    "",
    "## メディア掲載・登壇・受賞歴",
    ...[...articles]
      .sort((a, b) => b.date.localeCompare(a.date))
      .map((a) => `- ${a.date}　[${a.title}](${a.url})（${a.source}）`),
    "",
    "## 連絡先・リンク",
    ...socials.map((s) => `- ${s.label}: ${s.href.replace(/^mailto:/, "")}`),
    ...sameAs.filter((u) => !socials.some((s) => s.href === u)).map((u) => `- ${u}`),
    "",
    "## English summary",
    `${person.name.en} (${person.name.ja}) — ${en.hero.roles.join(" / ")}.`,
    "",
    en.hero.bio,
    "",
  )

  return new Response(lines.join("\n"), {
    headers: { "Content-Type": "text/markdown; charset=utf-8", "Cache-Control": "public, max-age=3600" },
  })
}

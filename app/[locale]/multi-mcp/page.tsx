import type { Metadata } from "next"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "multi-mcp — Yoshihisa Kaino",
  description:
    "複数アカウントの Slack / Gmail / Google カレンダーを横断検索する個人用ツール",
}

/**
 * multi-mcp の概要ページ。
 *
 * Google の OAuth 審査は、制限付きスコープ（gmail.readonly）を使うアプリに
 * 実在するホームページの URL を要求する。そのための公開ページ。
 */
export default async function MultiMcpPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const ja = locale === "ja"

  return (
    <main className="mx-auto max-w-2xl px-6 py-16 leading-relaxed">
      <h1 className="text-2xl font-semibold">multi-mcp</h1>
      <p className="mt-2 text-sm opacity-70">
        {ja
          ? "複数のアカウントに分かれた Slack / Gmail / Google カレンダーを、1つの MCP サーバーから横断して検索するための個人用ツールです。"
          : "A personal tool that searches across Slack workspaces, Gmail accounts, and Google Calendars from a single MCP server."}
      </p>

      <h2 className="mt-10 text-lg font-medium">{ja ? "何をするものか" : "What it does"}</h2>
      <p className="mt-2">
        {ja
          ? "複数の会社に関わっていると、同じ話題が別々の Slack ワークスペースやメールアカウントに散らばります。このツールは、それらをまとめて検索し、時系列に統合して返します。"
          : "When you work across multiple companies, the same topic is scattered across separate Slack workspaces and mail accounts. This tool searches them together and merges the results chronologically."}
      </p>
      <ul className="mt-4 list-disc space-y-1 pl-6">
        <li>{ja ? "接続済みの Slack ワークスペースを横断して検索する" : "Search across connected Slack workspaces"}</li>
        <li>{ja ? "接続済みの Gmail アカウントを横断して検索する" : "Search across connected Gmail accounts"}</li>
        <li>{ja ? "接続済みの Google カレンダーから予定を探す" : "Find events across connected Google Calendars"}</li>
      </ul>

      <h2 className="mt-10 text-lg font-medium">{ja ? "データの扱い" : "How data is handled"}</h2>
      <ul className="mt-4 list-disc space-y-2 pl-6">
        <li>
          <strong>{ja ? "読み取り専用です。" : "Read-only."}</strong>{" "}
          {ja
            ? "メールの送信・削除、Slack への投稿、予定の変更は一切行いません。"
            : "It never sends or deletes mail, posts to Slack, or modifies events."}
        </li>
        <li>
          <strong>{ja ? "データを保存しません。" : "No data is stored."}</strong>{" "}
          {ja
            ? "検索のたびに各サービスの API を呼び、結果をその場で返すだけです。"
            : "Each search calls the provider APIs directly and returns the results as-is."}
        </li>
        <li>
          {ja
            ? "アクセスは作者本人のアカウントに限られます。一般公開していません。"
            : "Access is limited to the author's own accounts. It is not offered publicly."}
        </li>
      </ul>

      <h2 className="mt-10 text-lg font-medium">{ja ? "詳細" : "More"}</h2>
      <p className="mt-2">
        <Link href={`/${locale}/multi-mcp/privacy`} className="underline">
          {ja ? "プライバシーポリシー" : "Privacy Policy"}
        </Link>
        {" · "}
        <a
          href="https://github.com/yosh1/multi-mcp"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
      </p>
    </main>
  )
}

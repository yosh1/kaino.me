import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

export const metadata: Metadata = {
  title: "Privacy Policy — multi-mcp",
  description: "multi-mcp における利用者情報の取り扱いについて",
}

/**
 * multi-mcp のプライバシーポリシー。
 *
 * Google の OAuth 審査に必要。実装の事実だけを書いている
 * （読み取り専用・データ非保存・第三者提供なし）。
 * 実装を変えたらここも直すこと。
 */
export default async function MultiMcpPrivacyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>
}) {
  const { locale } = await params
  const ja = locale === "ja"

  return ja ? <Ja /> : <En />
}

function Ja() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 leading-relaxed">
      <h1 className="text-2xl font-semibold">プライバシーポリシー</h1>
      <p className="mt-2 text-sm opacity-70">
        multi-mcp（以下「本ツール」）における利用者情報の取り扱いについて。
      </p>

      <Section title="1. 本ツールの位置づけ">
        本ツールは作者個人が自身のアカウントを横断して検索するために作成した
        個人用ツールであり、第三者に提供していません。
      </Section>

      <Section title="2. 取得する情報">
        <p>利用者が明示的に認可した場合にのみ、以下へアクセスします。</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li><code>gmail.readonly</code> — Gmail のメッセージの<strong>閲覧</strong></li>
          <li><code>calendar.readonly</code> — Google カレンダーの予定の<strong>閲覧</strong></li>
          <li><code>userinfo.email</code> — アカウントの取り違えを防ぐためのメールアドレス確認</li>
        </ul>
        <p className="mt-3">
          いずれも読み取り専用です。書き込み・送信・削除の権限は要求しません。
        </p>
      </Section>

      <Section title="3. 情報の利用目的">
        利用者自身が入力した検索条件に一致する情報を探し、その結果を利用者に
        返すためだけに使用します。それ以外の目的には利用しません。
      </Section>

      <Section title="4. 保存しないこと">
        <p>
          本ツールは<strong>メール本文・予定・メッセージを保存しません</strong>。
          検索のたびに各サービスの API を呼び出し、取得した内容をその場で返します。
          データベースや検索インデックスを持ちません。
        </p>
        <p className="mt-3">
          認証情報（OAuth のリフレッシュトークン）のみ、再認可の手間を省くために
          実行環境の暗号化されたシークレットストアに保管します。
        </p>
      </Section>

      <Section title="5. 第三者提供">
        <p>
          取得した情報を第三者に提供・販売・共有することはありません。
          広告配信や解析にも使用しません。
        </p>
        <p className="mt-3">
          情報の送信先は、検索対象である Google および Slack の API のみです。
        </p>
      </Section>

      <Section title="6. アクセス制御">
        本ツールのエンドポイントはトークン認証で保護されており、
        認証のないリクエストには一切応答しません。
      </Section>

      <Section title="7. 認可の取り消し">
        付与したアクセス権は{" "}
        <a
          href="https://myaccount.google.com/permissions"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Google アカウントの「サードパーティ製のアプリとサービス」
        </a>{" "}
        からいつでも取り消せます。取り消し後、本ツールは当該アカウントへ
        アクセスできなくなります。
      </Section>

      <Section title="8. お問い合わせ">
        本ポリシーに関するお問い合わせは{" "}
        <a
          href="https://github.com/yosh1/multi-mcp/issues"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub の Issue
        </a>{" "}
        にてお願いします。
      </Section>

      <p className="mt-10 text-sm opacity-60">制定日: 2026年9月22日</p>
    </main>
  )
}

function En() {
  return (
    <main className="mx-auto max-w-2xl px-6 py-16 leading-relaxed">
      <h1 className="text-2xl font-semibold">Privacy Policy</h1>
      <p className="mt-2 text-sm opacity-70">
        How multi-mcp handles user information.
      </p>

      <Section title="1. About this tool">
        multi-mcp is a personal tool built by the author to search across their own
        accounts. It is not offered to third parties.
      </Section>

      <Section title="2. Information accessed">
        <p>Only with the user&apos;s explicit authorization, it accesses:</p>
        <ul className="mt-3 list-disc space-y-1 pl-6">
          <li><code>gmail.readonly</code> — <strong>reading</strong> Gmail messages</li>
          <li><code>calendar.readonly</code> — <strong>reading</strong> Google Calendar events</li>
          <li><code>userinfo.email</code> — confirming the address, to avoid mixing up accounts</li>
        </ul>
        <p className="mt-3">
          All are read-only. No write, send, or delete permissions are requested.
        </p>
      </Section>

      <Section title="3. Purpose">
        Information is used solely to find items matching the search the user
        entered, and to return those results to the user. It is used for nothing else.
      </Section>

      <Section title="4. No storage">
        <p>
          <strong>Message bodies, events, and mail are never stored.</strong> Each
          search calls the provider APIs and returns what it receives. There is no
          database and no search index.
        </p>
        <p className="mt-3">
          Only credentials (OAuth refresh tokens) are kept, in the encrypted secret
          store of the runtime, so that re-authorization is not needed every time.
        </p>
      </Section>

      <Section title="5. No third-party sharing">
        <p>
          Information is never provided, sold, or shared with third parties, and is
          not used for advertising or analytics.
        </p>
        <p className="mt-3">
          The only destinations are the Google and Slack APIs being searched.
        </p>
      </Section>

      <Section title="6. Access control">
        The endpoint is protected by token authentication and does not respond to
        unauthenticated requests.
      </Section>

      <Section title="7. Revoking access">
        Access can be revoked at any time from{" "}
        <a
          href="https://myaccount.google.com/permissions"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          Third-party apps &amp; services
        </a>{" "}
        in your Google Account. After revoking, the tool can no longer access that account.
      </Section>

      <Section title="8. Contact">
        Please open an issue on{" "}
        <a
          href="https://github.com/yosh1/multi-mcp/issues"
          className="underline"
          rel="noopener noreferrer"
          target="_blank"
        >
          GitHub
        </a>
        .
      </Section>

      <p className="mt-10 text-sm opacity-60">Effective: September 22, 2026</p>
    </main>
  )
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mt-8">
      <h2 className="text-lg font-medium">{title}</h2>
      <div className="mt-2">{children}</div>
    </section>
  )
}

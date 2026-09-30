# SEO / AIO（AI 検索対策）の仕組みと運用

kaino.me を、Google 検索と AI 検索（ChatGPT・Claude・Perplexity・Google AI Overviews など）の両方で「改野 由尚」の一次情報源として扱ってもらうための設定。

## 正本のデータ

経歴・事業・スキル・資格・掲載は `lib/profile/data.ts` が唯一の正本。
ページ表示・構造化データ・llms.txt はすべてここから生成するので、**情報を変えるときはここだけ直す**。

内容を更新したら `LAST_UPDATED` も書き換える（sitemap と構造化データの更新日になる）。

## サイト側で入っているもの

| 仕組み | 場所 | 役割 |
|---|---|---|
| 構造化データ（JSON-LD） | `lib/profile/jsonld.ts` → `app/[locale]/page.tsx` | ProfilePage + Person + WebSite。別名（漢字・かな・英語）、所属（期間つき OrganizationRole）、学歴、資格、sameAs を持つ |
| llms.txt | `app/llms.txt/route.ts` → `/llms.txt` | AI 向けに全情報を 1 枚の Markdown で返す |
| robots.txt | `app/robots.ts` | 全クローラーと主要な AI クローラー（GPTBot, ClaudeBot, PerplexityBot, Google-Extended など）を明示的に許可 |
| sitemap.xml | `app/sitemap.ts` | ja / en の hreflang つき |
| メタデータ | `app/[locale]/layout.tsx` | 言語別の title / description / canonical / hreflang（x-default 含む）/ OGP / Twitter カード |

正規ドメインは `https://www.kaino.me`（`kaino.me` は www へ 308 リダイレクトされる）。canonical・OGP・sitemap はすべて www で出す。

## サイトの外でやること（効果が大きい順）

AI は複数のサイトで同じ情報が一致しているほど、その人物の情報を信頼して引用する。

1. **Google Search Console にサイトマップを送信する**（`https://www.kaino.me/sitemap.xml`）。所有権確認ファイルは `public/google0dcf55cace8e4adc.html`。
2. **外部プロフィールから kaino.me へリンクを張る**：X・LinkedIn・GitHub のプロフィール欄、pref.co.jp の役員紹介、aiosoken.com、newcreator.org、MIRABO の講師紹介。
3. **肩書き・経歴の表記を揃える**：pref.co.jp、LinkedIn、LAPRAS 等のプロフィール、職務経歴書で、社名・役職・期間の表記を kaino.me と一致させる。
4. **Wikidata に人物項目を作る**：Google のナレッジパネルや LLM の人物認識の元データになる。公式サイトとして kaino.me を登録する。
5. **掲載・登壇の実績を増やしたら `articles` に追記する**：第三者サイトからの言及が、AI が引用するときの裏付けになる。

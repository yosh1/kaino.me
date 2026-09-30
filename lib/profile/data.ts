// サイト全体で使う経歴・事業・掲載データ。ページ表示・構造化データ・llms.txt の共通の正本。

export type L = { en: string; ja: string };

export type Career = { name: L; role?: L; period: L };

// 創業した会社・役職・講師・学歴を 1 つの経歴にまとめる（開始の新しい順）
export const careers: Career[] = [
  {
    name: { en: "MIRABO (Qrad Inc.)", ja: "MIRABO（株式会社Qrad）" },
    role: { en: "Lead Instructor", ja: "代表講師" },
    period: { en: "2026.09 - current", ja: "2026.09 - 現在" },
  },
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
    name: { en: "Bae8 Inc.", ja: "株式会社Bae8" },
    role: { en: "CTO", ja: "CTO" },
    period: { en: "2018.09 - 2019.09", ja: "2018.09 - 2019.09" },
  },
  {
    name: { en: "SKYWARD Inc.", ja: "株式会社SKYWARD" },
    role: { en: "CTO", ja: "CTO" },
    period: { en: "2018.05 - 2018.10", ja: "2018.05 - 2018.10" },
  },
  {
    name: { en: "Freelance", ja: "フリーランス" },
    role: { en: "Web / mobile development, UX/UI design, DX support", ja: "Web・モバイル開発、UX/UIデザイン、DX支援" },
    period: { en: "2018.04 - 2022.10", ja: "2018.04 - 2022.10" },
  },
  {
    name: { en: "N High School (Kadokawa Dwango Gakuen)", ja: "角川ドワンゴ学園N高等学校" },
    role: { en: "Entrepreneurship Club, Active Learner", ja: "起業部・Active Learner認定" },
    period: { en: "2018.04 - 2020.03", ja: "2018.04 - 2020.03" },
  },
  {
    name: { en: "Hyogo Prefectural Himeji Technical High School", ja: "兵庫県立姫路工業高等学校" },
    period: { en: "2017.04 - 2018.03", ja: "2017.04 - 2018.03" },
  },
];

export const designs = [
  {
    id: 1,
    name: { en: "Slow Rush Coffee", ja: "Slow Rush Coffee" },
    year: { en: "2023 - Current", ja: "2023 - 現在" },
    description: {
      en: "Launched a cafe in Kamakura (Preferred Inc.)",
      ja: "鎌倉にカフェを立ち上げ（株式会社プリファード）",
    },
    link: "https://www.slowrush.jp/",
  },
  {
    id: 2,
    name: { en: "Preferred Estate", ja: "Preferred Estate" },
    year: { en: "2025 - Current", ja: "2025 - 現在" },
    description: {
      en: "Launched a real estate brokerage in Tokyo (Preferred Inc.)",
      ja: "東京で不動産事業を立ち上げ（株式会社プリファード）",
    },
    link: "https://estate.pref.co.jp/",
  },
  {
    id: 3,
    name: { en: "LC COFFEE", ja: "LC COFFEE" },
    year: { en: "2025 - Current", ja: "2025 - 現在" },
    description: {
      en: "E-commerce collaboration with Luxury Card (Preferred Inc.)",
      ja: "ラグジュアリーカードとのコラボレーションEC（株式会社プリファード）",
    },
    link: "https://slowrush.jp/store/lc-coffee",
  },
];

export const techs: { category: L; items: L }[] = [
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

export const certifications: { name: L; date: string }[] = [
  { name: { en: "Salesforce Certified AI Associate", ja: "Salesforce Certified AI Associate" }, date: "2025.03" },
  { name: { en: "Salesforce Certified Administrator", ja: "Salesforce 認定アドミニストレーター" }, date: "2023.04" },
  { name: { en: "Applied Information Technology Engineer Examination", ja: "応用情報技術者試験" }, date: "2022.12" },
  { name: { en: "Fundamental Information Technology Engineer Examination", ja: "基本情報技術者試験" }, date: "2020.04" },
  { name: { en: "Information Technology Passport Examination", ja: "ITパスポート試験" }, date: "2020.04" },
  { name: { en: "TOEIC 720", ja: "TOEIC 720点" }, date: "2018.03" },
]

export type Article = {
  date: string;
  title: string;
  source: string;
  url: string;
};

export const articles: Article[] = [
  {
    date: "2026-07-22",
    title:
      "microCMS Meetup 2026「microCMSで考える、AI時代のコンテンツ運用設計」に登壇しました",
    source: "microCMS Meetup 2026（connpass）",
    url: "https://microcms.connpass.com/event/394654/",
  },
  {
    date: "2025-09-24",
    title:
      "株式会社プリファード 改野由尚氏 特別講演 ーキャリアの正解は１つじゃない～プログラミングとAIが広げる可能性～",
    source: "桜が丘高等学校",
    url: "https://www.hsakuragaoka-h.ed.jp/News/detail/FNkLRUCQ",
  },
  {
    date: "2025-08-20",
    title:
      "【前回満点評価】寿司爆食い＋ClaudeCode/Difyで爆速AI開発実践講座交流会 に登壇しました",
    source: "connpass",
    url: "https://eichiii.connpass.com/event/362928/",
  },
  {
    date: "2025-07-23",
    title:
      "【会場参加あり】Difyで加速するAXの最前線 〜トップランナーが語るAI開発・導入・キャリア戦略〜 に登壇しました",
    source: "Peatix",
    url: "https://peatix.com/event/4489003/view",
  },
  {
    date: "2025-07-18",
    title:
      "営業の未来図 2025 - 売れる組織はAIをこう使う - 成功事例と実装の裏側 に登壇しました",
    source: "NEUROHUB（DXHR Inc.）",
    url: "https://dxhr.inc/neurohub/event/20250718",
  },
  {
    date: "2025-07-18",
    title:
      "「AI活用全盛のいま、現役エンジニアによるAI開発案件参画のリアル、具体像」に登壇しました",
    source: "NEUROHUB（DXHR Inc.）",
    url: "https://dxhr.inc/neurohub/event/250731",
  },
  {
    date: "2025-01-01",
    title:
      "月刊日本教育 令和7年1月号 新春特集「日本の将来を語る」生成AIを学校で活用するポイントは",
    source: "月刊日本教育（日本教育会）",
    url: "https://www.jse.or.jp/",
  },
  {
    date: "2025-01-24",
    title:
      "AI駆動開発(AI-Driven Development) 勉強会（第5回）に登壇しました ~AI エージェント駆動開発 × ATDD~",
    source: "connpass",
    url: "https://aid.connpass.com/event/340284/",
  },
  {
    date: "2025-06-12",
    title:
      "AIで変わるアプリケーション開発 〜Web・モバイルにおけるAIツール実践活用〜 @APPS JAPAN 2025 に登壇しました",
    source: "APPS JAPAN 2025",
    url: "https://forest.f2ff.jp/introduction/10470?project_id=20250601",
  },
  {
    date: "2024-06-17",
    title: "【安全な生成AIを子どもたちに】 AI共存時代の「学び」",
    source: "教育新聞",
    url: "https://www.kyobun.co.jp/article/2024061704",
  },
  {
    date: "2024-06-12",
    title: "【安全な生成AIを子どもたちに】 AIは目的ではなく手段",
    source: "教育新聞",
    url: "https://www.kyobun.co.jp/article/2024061207",
  },
  {
    date: "2024-06-10",
    title: "【安全な生成AIを子どもたちに】 学校が導入をためらう理由",
    source: "教育新聞",
    url: "https://www.kyobun.co.jp/article/2024061004",
  },
  {
    date: "2024-06-01",
    title:
      "月刊日本教育 令和6年6月号 私の視言「生成AIの学校での活用法」",
    source: "月刊日本教育（日本教育会）",
    url: "https://www.jse.or.jp/",
  },
  {
    date: "2024-02-12",
    title:
      "週刊教育資料 No.1735号（2024年2月12日号） 潮流 生成AIの学校での活用ポイント",
    source: "週刊教育資料",
    url: "http://www.kyoiku-shiryo.co.jp/archives/2939",
  },
  {
    date: "2024-02-05",
    title:
      "週刊教育資料 No.1734号（2024年2月5日号） 潮流 地域格差なく全ての子どもに学ぶ機会を",
    source: "週刊教育資料",
    url: "http://www.kyoiku-shiryo.co.jp/archives/2936",
  },
  {
    date: "2023-11-03",
    title:
      "shutomo 2023年11月号「IT教育を格差なく届けたい」",
    source: "shutomo（首都圏模試センター）",
    url: "https://www.syutoken-mosi.co.jp/column/shutomo/",
  },
  {
    date: "2023-10-30",
    title: "驚きの未来技術体験！プロンプト体験授業【課題研究ＡＩチャレンジ】 講師",
    source: "愛知県立春日井泉高等学校",
    url: "https://kasugaiizumi-h.jp/2023/10/30/%E9%A9%9A%E3%81%8D%E3%81%AE%E6%9C%AA%E6%9D%A5%E6%8A%80%E8%A1%93%E4%BD%93%E9%A8%93%EF%BC%81%E3%83%97%E3%83%AD%E3%83%B3%E3%83%97%E3%83%88%E4%BD%93%E9%A8%93%E6%8E%88%E6%A5%AD%E3%80%90%E8%AA%B2%E9%A1%8C/",
  },
  {
    date: "2023-10-27",
    title: "【中高生~大人】探究と生成AI 登壇",
    source: "探究学習塾エイスクール プロジェクト部",
    url: "https://peatix.com/event/3737164",
  },
  {
    date: "2023-07-14",
    title: "高校で チャットＧＰＴ の授業　便利だけど…先生苦笑い「宿題の結果を正確に…」【新潟市】",
    source: "NST 新潟総合テレビ",
    url: "https://news.nsttv.com/post/%E9%AB%98%E6%A0%A1%E3%81%A7%E3%83%81%E3%83%A3%E3%83%83%E3%83%88%EF%BD%87%EF%BD%90%EF%BD%94%E3%81%AE%E6%8E%88%E6%A5%AD%E3%80%80%E4%BE%BF%E5%88%A9%E3%81%A0%E3%81%91%E3%81%A9/",
  },
  {
    date: "2020-02-01",
    title: "ノエビアグリーン財団 インタビュー",
    source: "ノエビアグリーン財団",
    url: "https://www.noevirgreen.or.jp/grants/organization/interview/2020_02.htm",
  },
  {
    date: "2019-09-15",
    title: "日本ゲーム大賞2019「U18部門」 決勝大会",
    source: "日本ゲーム大賞",
    url: "https://u18.awards.cesa.or.jp/guidline2019/2019final/",
  },
  {
    date: "2019-02-18",
    title: "N高起業部、特別審査会の選考を終え、第二期メンバーが決定",
    source: "N高等学校",
    url: "https://nnn.ed.jp/news/7147/",
  },
  {
    date: "2019-01-04",
    title:
      "Heisei Transformations: Education shifting online, giving kids more options",
    source: "毎日新聞（英語版）",
    url: "https://mainichi.jp/english/articles/20190104/p2a/00m/0fe/025000c",
  },
  {
    date: "2018-08-13",
    title: "Maker Faire Tokyo 2018レポート #5：ヤングメイカーの襲来",
    source: "Make:zine（Maker Faire）",
    url: "https://makezine.jp/blog/2018/08/mft2018_report5_youngmakers.html",
  },
];

export const SITE_URL = "https://www.kaino.me";

// 内容を更新したら書き換える（sitemap と構造化データの更新日に使う）
export const LAST_UPDATED = "2026-09-30";

export const person = {
  name: { ja: "改野 由尚", en: "Yoshihisa Kaino" },
  kana: "かいの よしひさ",
  email: "yoshihisa.kaino@pref.co.jp",
  image: "/img/board.jpg",
  birthPlace: { ja: "兵庫県", en: "Hyogo, Japan" },
};

export const socials = [
  { label: "Email", href: `mailto:${person.email}` },
  { label: "X", href: "https://x.com/yoshi1125hisa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yoshihisak/" },
  { label: "GitHub", href: "https://github.com/yosh1" },
];

// 同一人物であることを検索エンジン・AI に示すための外部プロフィール
export const sameAs = [
  "https://x.com/yoshi1125hisa",
  "https://www.linkedin.com/in/yoshihisak/",
  "https://github.com/yosh1",
  "https://www.pref.co.jp/about/board",
  "https://mirabo.qrad.jp/",
];

// 現在の主な所属（構造化データの worksFor に使う）
export const currentOrganizations = [
  { name: { ja: "株式会社プリファード", en: "Preferred Inc." }, url: "https://www.pref.co.jp/", role: { ja: "代表取締役", en: "CEO" } },
  { name: { ja: "AIO総研株式会社", en: "AIO Research Institute Inc." }, url: "https://aiosoken.com/", role: { ja: "代表取締役", en: "CEO" } },
  { name: { ja: "特定非営利活動法人ニュークリエイターオルグ", en: "newCreator.org" }, url: "https://newcreator.org/", role: { ja: "理事長", en: "Chairman" } },
  { name: { ja: "株式会社AdOps", en: "AdOps Inc." }, url: "https://adops.co.jp/", role: { ja: "パートナーCTO", en: "Partner CTO" } },
  { name: { ja: "公益財団法人日本数学検定協会", en: "The Mathematics Certification Institute of Japan" }, url: "https://www.su-gaku.net/", role: { ja: "AI Officer", en: "AI Officer" } },
  { name: { ja: "MIRABO（株式会社Qrad）", en: "MIRABO (Qrad Inc.)" }, url: "https://mirabo.qrad.jp/", role: { ja: "代表講師", en: "Lead Instructor" } },
];

export const alumniOf = [
  { ja: "慶應義塾大学 環境情報学部", en: "Keio University, Faculty of Environment and Information Studies", url: "https://www.keio.ac.jp/" },
  { ja: "角川ドワンゴ学園 N高等学校", en: "N High School", url: "https://nnn.ed.jp/" },
];

export const knowsAbout = [
  "Generative AI", "LLM", "AI Agents", "RAG", "LLMO", "AI-Driven Development", "DX", "AX",
  "Product Management", "UX/UI Design", "STEAM Education", "Programming Education", "Startups",
];

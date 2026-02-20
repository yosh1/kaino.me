"use client"

import { Section, SectionHeader } from "@/components/ui/section";
import ListItem from "@/components/ui/list-item";
import { useI18n } from "./i18n-provider";

type Article = {
  date: string;
  title: string;
  source: string;
  url: string;
  image?: string;
};

const articles: Article[] = [
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
    image: "/img/press/gekkan-nihon-kyoiku-2025-01.jpg",
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
    image: "/img/press/gekkan-nihon-kyoiku-2024-06.jpg",
  },
  {
    date: "2024-02-12",
    title:
      "週刊教育資料 No.1735号（2024年2月12日号） 潮流 生成AIの学校での活用ポイント",
    source: "週刊教育資料",
    url: "http://www.kyoiku-shiryo.co.jp/archives/2939",
    image: "/img/press/shukan-kyoiku-shiryo-1735.jpg",
  },
  {
    date: "2024-02-05",
    title:
      "週刊教育資料 No.1734号（2024年2月5日号） 潮流 地域格差なく全ての子どもに学ぶ機会を",
    source: "週刊教育資料",
    url: "http://www.kyoiku-shiryo.co.jp/archives/2936",
    image: "/img/press/shukan-kyoiku-shiryo-1734.jpg",
  },
  {
    date: "2023-11-03",
    title:
      "shutomo 2023年11月号「IT教育を格差なく届けたい」",
    source: "shutomo（首都圏模試センター）",
    url: "https://www.syutoken-mosi.co.jp/column/shutomo/",
    image: "/img/press/shutomo-2023-11.jpg",
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

export default function Press() {
  const { t } = useI18n();
  const sorted = [...articles].sort(
    (b, a) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  const grouped: { year: string; items: Article[] }[] = [];
  for (const a of sorted) {
    const year = new Date(a.date).getFullYear().toString();
    const last = grouped[grouped.length - 1];
    if (!last || last.year !== year) {
      grouped.push({ year, items: [a] });
    } else {
      last.items.push(a);
    }
  }
  return (
    <Section id="press">
      <SectionHeader title={t("press.title") as string} />
      <div className="space-y-10">
        {grouped.map(({ year, items }) => (
          <div key={year}>
            <h3 className="text-2xl md:text-3xl font-bold tracking-tight">{year}</h3>
            <div className="mt-4 space-y-6">
              {items.map((a, i) => (
                <ListItem key={`${year}-${i}`} href={a.url} date={a.date} title={a.title} meta={a.source} image={a.image} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

import type { Locale } from "./config"

type Dict = {
  navbar: {
    brand: string
    switchLabel: string
    en: string
    ja: string
  }
  hero: {
    title: string
    roles: string[]
    bio: string
  }
  companies: {
    title: string
    current: string
    past: string
  }
  designs: {
    title: string
  }
  press: {
    title: string
  }
  footer: {
    copyrightSuffix: string
    byline: string
  }
}

const en: Dict = {
  navbar: {
    brand: "Yoshihisa Kaino",
    switchLabel: "Language",
    en: "English",
    ja: "日本語",
  },
  hero: {
    title: "Yoshihisa Kaino",
    roles: [
      "CEO, AIO Research Institute Inc.",
      "CEO, Preferred Inc.",
      "Chairman, newCreator.org",
    ],
    bio:
      "Studied programming, entrepreneurship, and business management at N High School, KADOKAWA DWANGO Educational Institute, where he was a member of the entrepreneurship club and received the Active Learner certification. Subsequently enrolled in the Faculty of Environment and Information Studies at Keio University, joining the Masui Laboratory (Global User Interface Design). Conducted research on new forms of user interfaces based on the belief that expanding human potential through computers requires user interfaces that can be controlled as intended.\n\nSince April 2018, he has been working as a freelancer in web engineering, UX/UI design, IT business process engineering, and IT implementation support (DX). Later, with business expansion, he incorporated Preferred Inc. As CEO, he drives business strategy, DX consulting, AI implementation support, and has launched own businesses including a café and real estate brokerage, also leading ISMS (ISO 27001) certification. In November 2024, he founded XTEM Inc. to promote AI-Driven Development training for major SIers and enterprises, successfully exiting the business within one year. In October 2025, he established AIO Research Institute Inc. to advance the social implementation of AI technology. As a life work, in 2019 he established newCreator.org, delivering programming and STEAM education to over 3,000 children at more than 50 schools nationwide, and providing training to over 500 educators. Since 2023, he has also focused on generative AI education.",
  },
  companies: {
    title: "Founded Companies",
    current: "Current",
    past: "Past",
  },
  designs: {
    title: "Designed Businesses",
  },
  press: {
    title: "Press, Talks, and Awards",
  },
  footer: {
    copyrightSuffix: "All rights reserved.",
    byline: "Design & Code by Yoshihisa Kaino",
  },
}

const ja: Dict = {
  navbar: {
    brand: "改野 由尚｜Yoshihisa Kaino",
    switchLabel: "言語",
    en: "English",
    ja: "日本語",
  },
  hero: {
    title: "改野 由尚｜Yoshihisa Kaino",
    roles: [
      "AIO総研株式会社 代表取締役",
      "株式会社プリファード 代表取締役",
      "特定非営利活動法人ニュークリエイターオルグ 理事長",
    ],
    bio: "角川ドワンゴ学園N高等学校にてプログラミング・起業・経営に関する学習を行ったほか、起業部に在籍。また、特待制度であるActive Learner認定を取得。続いて慶應義塾大学環境情報学部に入学し、増井研究会（全世界ユーザインタフェースデザイン）に所属。コンピュータによる人間の可能性拡大には思い通りに動かせるユーザインタフェースが必要であるという信念から新たなユーザインタフェースの形を研究。\n\n2018年4月よりWebエンジニアやUX/UIデザイン、IT導入支援（DX）などのフリーランスとして活動を開始。規模の拡大に伴い、株式会社プリファードとして法人化。代表取締役として経営戦略の策定から、DXコンサルティング、AI導入支援、自社事業（カフェ・不動産）の立ち上げまで幅広く手がけ、ISMS（ISO 27001）認証取得も主導。2024年11月にはAI駆動開発の普及を目的にエクステム株式会社を設立し、大手SIerや事業会社向けに研修を展開、事業開始から1年で売却に成功。2025年10月、AI技術の社会実装を推進するAIO総研株式会社を設立し、代表取締役に就任。ライフワークとして、2019年に特定非営利活動法人ニュークリエイターオルグを設立。全国50校以上で出張授業を行い、延べ3,000人以上の子どもたちにプログラミングやSTEAM教育を届けるほか、500人以上の教員向けに研修を実施。2023年からは生成AI教育にも注力している。",
  },
  companies: {
    title: "創業",
    current: "現在",
    past: "過去",
  },
  designs: {
    title: "事業デザイン",
  },
  press: {
    title: "メディア掲載・登壇・受賞歴",
  },
  footer: {
    copyrightSuffix: "All rights reserved.",
    byline: "Design & Code by Yoshihisa Kaino",
  },
};

const dictionaries: Record<Locale, Dict> = { en, ja }

export type { Dict }

export async function getDictionary(locale: Locale): Promise<Dict> {
  return dictionaries[locale]
}

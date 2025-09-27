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
  investments: {
    title: string
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
      "CEO, XTEM Inc.",
      "CEO, Preferred Inc.",
      "Chairman, newCreator.org",
    ],
    bio:
      "Studied programming, entrepreneurship, and business management at N High School, KADOKAWA DWANGO Educational Institute, where he was a member of the entrepreneurship club and received the Active Learner certification. Subsequently enrolled in the Faculty of Environment and Information Studies at Keio University, joining the Masui Laboratory (Global User Interface Design). Conducted research on new forms of user interfaces based on the belief that expanding human potential through computers requires user interfaces that can be controlled as intended.\n\nSince April 2018, he has been working as a freelancer in web engineering, UX/UI design, IT business process engineering, and IT implementation support (DX). Later, with business expansion, he incorporated Preferred Inc. As a life work, he focuses on STEAM education for children, promoting generative AI, and addressing educational disparities through visiting classes at middle and high schools nationwide, teacher training, and system development. In 2019, he established newCreator.org. In November 2024, he founded XTEM Inc. with the aim of promoting \"AI-Driven Development\" and AI agent training to create a world where AI becomes commonplace, leveraging his experience in education and system development.",
  },
  investments: {
    title: "Investments",
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
      "エクステム株式会社 代表取締役",
      "株式会社プリファード 代表取締役",
      "特定非営利活動法人ニュークリエイターオルグ 理事長",
    ],
    bio: "角川ドワンゴ学園N高等学校にてプログラミング・起業・経営に関する学習を行ったほか、起業部に在籍。また、特待制度であるActive Learner認定を取得。続いて慶應義塾大学環境情報学部に入学し、増井研究会（全世界ユーザインタフェースデザイン）に所属。コンピュータによる人間の可能性拡大には思い通りに動かせるユーザインタフェースが必要であるという信念から新たなユーザインタフェースの形を研究。\n\n2018年4月よりWebエンジニアやUX/UIデザイン、情シス・ビジネス設計（プロセスエンジニア）、IT導入支援（DX）などを行うフリーランスとして活動。その後、規模の拡大に伴い、株式会社プリファードとして法人成り。また、ライフワークとして子ども向けのSTEAM教育、生成AI関連の促進、格差の是正をめざし全国の中学校・高校への出張授業、教員研修、システム開発に取り組み、2019年に特定非営利活動法人ニュークリエイターオルグを設立。2024年11月、教育×システム開発の経験から、AIをエンジニアリング領域に取り入れる“AI駆動開発”の普及とAIエージェント研修によりAIが一般化される世界を目指しエクステム株式会社を立ち上げ。",
  },
  investments: {
    title: "投資先",
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

import type { Locale } from "./config"

type Dict = {
  navbar: {
    brand: string
    switchLabel: string
    en: string
    ja: string
  }
  nav: {
    profile: string
    career: string
    skills: string
    designs: string
    press: string
  }
  hero: {
    title: string
    name: string
    nameSub: string
    roles: string[]
    bio: string
  }
  profile: {
    title: string
  }
  career: {
    title: string
  }
  designs: {
    title: string
  }
  skills: {
    title: string
    areas: string
    certifications: string
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
  nav: {
    profile: "Profile",
    career: "Career",
    skills: "Skills",
    designs: "Businesses",
    press: "Press",
  },
  hero: {
    title: "Yoshihisa Kaino",
    name: "Yoshihisa Kaino",
    nameSub: "改野 由尚",
    roles: [
      "CEO, Preferred Inc.",
      "CEO, AIO Research Institute Inc.",
      "Chairman, newCreator.org",
    ],
    bio:
      "Born in 2001 in Hyogo, Japan. Graduated from N High School (Entrepreneurship Club, Active Learner certified) by Kadokawa Dwango Gakuen, and Keio University Faculty of Environment and Information Studies (Masui Lab).\n\nStarted freelancing as a web engineer, UX/UI designer, and IT adoption consultant (DX) in April 2018. As projects grew in scale, incorporated as Preferred Inc. in November 2022. As CEO, he oversees everything from management strategy, DX consulting, and AI adoption support to launching in-house businesses (café, real estate), and led the acquisition of ISMS (ISO 27001) certification.\n\nIn November 2024, founded XTEM Inc. to promote AI-driven development, delivering training programs to major system integrators and enterprises. Successfully sold the company within one year of launch. In October 2025, established AIO Research Institute Inc. to drive the social implementation of AI technology, serving as CEO.\n\nAs a lifelong mission, founded newCreator.org in 2019. Has delivered hands-on programming and STEAM education workshops at over 50 schools nationwide, reaching more than 3,000 children, and provided training to over 500 educators. Since 2023, has also focused on generative AI education.",
  },
  profile: {
    title: "Profile",
  },
  career: {
    title: "Career",
  },
  designs: {
    title: "Businesses",
  },
  press: {
    title: "Press, Talks, and Awards",
  },
  skills: {
    title: "Skills",
    areas: "AI / AX, strategy, new business development, consulting, PdM / PM, development, marketing",
    certifications: "Certifications",
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
  nav: {
    profile: "プロフィール",
    career: "経歴",
    skills: "スキル",
    designs: "事業",
    press: "掲載・登壇",
  },
  hero: {
    title: "改野 由尚｜Yoshihisa Kaino",
    name: "改野 由尚",
    nameSub: "Yoshihisa Kaino",
    roles: [
      "株式会社プリファード 代表取締役",
      "AIO総研株式会社 代表取締役",
      "特定非営利活動法人ニュークリエイターオルグ 理事長",
    ],
    bio: "2001年、兵庫県生まれ。角川ドワンゴ学園N高等学校（起業部・Active Learner認定）、慶應義塾大学環境情報学部（増井研究室）卒。\n\n2018年4月よりWebエンジニアやUX/UIデザイン、IT導入支援（DX）などのフリーランスとして活動を開始。取引規模の拡大に伴い、2022年11月に株式会社プリファードとして法人化。代表取締役として経営戦略の策定から、DXコンサルティング、AI導入支援、自社事業（カフェ・不動産）の立ち上げまで幅広く手がけ、ISMS（ISO 27001）認証の取得も主導。\n\n2024年11月にはAI駆動開発の普及を目的にエクステム株式会社を設立。大手SIerや事業会社向けに研修プログラムを展開し、事業開始から1年で売却に成功。2025年10月にはAI技術の社会実装を推進するAIO総研株式会社を設立し、代表取締役に就任。\n\nライフワークとして、2019年に特定非営利活動法人ニュークリエイターオルグを設立。全国50校以上で出張授業を行い、延べ3,000人以上の子どもたちにプログラミングやSTEAM教育を届けるほか、500人以上の教員向けに研修を実施。2023年からは生成AI教育にも注力している。",
  },
  profile: {
    title: "プロフィール",
  },
  career: {
    title: "経歴",
  },
  designs: {
    title: "事業デザイン",
  },
  press: {
    title: "メディア掲載・登壇・受賞歴",
  },
  skills: {
    title: "スキル・資格",
    areas: "AI・AX／戦略・新規事業立案／コンサルティング／PdM・PM／開発／マーケティング",
    certifications: "資格",
  },
  footer: {
    copyrightSuffix: "All rights reserved.",
    byline: "Design & Code by Yoshihisa Kaino",
  },
};

export const dictionaries: Record<Locale, Dict> = { en, ja }

export type { Dict }

export async function getDictionary(locale: Locale): Promise<Dict> {
  return dictionaries[locale]
}

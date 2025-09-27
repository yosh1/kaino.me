"use client"

import Link from "next/link"
import Image from "next/image"
import { Instagram, X, Linkedin, Github } from "lucide-react"
import { differenceInYears } from 'date-fns';
import { useI18n } from "./i18n-provider"

export default function Hero() {
  const age = differenceInYears(new Date(), new Date('2001-11-25'));
  const { t } = useI18n()

  return (
    <section className='pt-32 pb-20 md:pt-40 md:pb-32 px-4'>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 md:grid-cols-2 items-center gap-12'>
          <div className='space-y-6 order-2 md:order-1'>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tight'>
              {t("hero.title")}
            </h1>

            <div className='flex space-x-4'>
              <Link
                href='https://x.com/yoshi1125hisa'
                className='text-foreground/70 hover:text-foreground transition-colors'>
                <X className='h-6 w-6' />
                <span className='sr-only'>X (Twitter)</span>
              </Link>
              <Link
                href='https://www.instagram.com/yoshihisa.kaino/'
                className='text-foreground/70 hover:text-foreground transition-colors'>
                <Instagram className='h-6 w-6' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='https://www.linkedin.com/in/yoshihisa.k'
                className='text-foreground/70 hover:text-foreground transition-colors'>
                <Linkedin className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
              <Link
                href='https://github.com/yosh1'
                className='text-foreground/70 hover:text-foreground transition-colors'>
                <Github className='h-6 w-6' />
                <span className='sr-only'>GitHub</span>
              </Link>
            </div>

            <p className="text-foreground/70 text-xl md:text-2xl leading-relaxed font-bold">
              {t("hero.roles.0")}
              <br />
              {t("hero.roles.1")}
              <br />
              {t("hero.roles.2")}
            </p>

            <div className='max-w-3xl space-y-4 text-foreground/80 text-lg md:text-xl leading-relaxed'>
              <p className="whitespace-pre-line">{t("hero.bio")}</p>
            </div>

            {/* <hr className="border-white/10" />

            <p className="text-white/70 text-xl md:text-2xl leading-relaxed font-bold">
              エクステム株式会社 代表取締役
              <br />
              株式会社プリファード 代表取締役
              <br />
              特定非営利活動法人ニュークリエイターオルグ 理事長
            </p>

            <div className='max-w-3xl space-y-4 text-white/80 text-lg md:text-xl leading-relaxed'>
              <p className="text-white/80 text-lg md:text-xl leading-loose">
                角川ドワンゴ学園
                N高等学校にてプログラミング・起業・経営に関する学習を行ったほか、起業部に在籍。また、特待制度であるActive
                Learner認定を取得。
                <br />
                慶應義塾大学環境情報学部に入学し、増井研究会（全世界ユーザインタフェースデザイン）に所属、コンピュータによる人間の可能性拡大には思い通りに動かせるユーザインタフェースが必要であるという信念から新たなユーザインタフェースの形を研究。その後卒業。
                <br />
                <br />
                2018年4月よりWebエンジニアやUX/UIデザイン、情シス・ビジネス設計（プロセスエンジニア）、IT導入支援（DX）などを行うフリーランスとして活動。その後、規模の拡大に伴い、株式会社プリファードとして法人成り。また、ライフワークとして子ども向けのSTEAM教育、生成AI関連の促進、格差の是正をめざし全国の中学校・高校への出張授業、教員に向けた教員研修、システム構築に取り組み、2019年に特定非営利活動法人ニュークリエイターオルグを設立。
                2024年11月、教育×システム開発の経験から、AIをエンジニアリング領域に取り入れる
                "AI駆動開発" の普及 /
                AIエージェント研修でAIが一般化される世界を目指しエクステム株式会社を立ち上げ。
              </p>
            </div> */}
          </div>
          <div className='order-1 md:order-2'>
            <div className='max-w-md md:max-w-lg mx-auto'>
              <Image
                src="/img/board.jpg"
                alt="改野由尚の写真"
                width={800}
                height={800}
                priority
                className='w-full h-auto rounded-2xl shadow-lg object-cover'
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

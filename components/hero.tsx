import Link from "next/link"
import { Instagram, X, Linkedin, Github } from "lucide-react"
import { differenceInYears } from 'date-fns';

export default function Hero() {
  const age = differenceInYears(new Date(), new Date('2001-11-25'));

  return (
    <section className='pt-32 pb-20 md:pt-40 md:pb-32 px-4'>
      <div className='container max-w-7xl mx-auto'>
        <div className='grid grid-cols-1 gap-12'>
          <div className='space-y-6'>
            <h1 className='text-5xl md:text-7xl font-bold tracking-tight'>
              Yoshihisa Kaino
              {/* ｜改野 由尚 */}
            </h1>

            <div className='flex space-x-4'>
              <Link
                href='https://x.com/yoshi1125hisa'
                className='text-white/70 hover:text-white transition-colors'>
                <X className='h-6 w-6' />
                <span className='sr-only'>X (Twitter)</span>
              </Link>
              <Link
                href='https://www.instagram.com/yoshihisa.kaino/'
                className='text-white/70 hover:text-white transition-colors'>
                <Instagram className='h-6 w-6' />
                <span className='sr-only'>Instagram</span>
              </Link>
              <Link
                href='https://www.linkedin.com/in/yoshihisa.k'
                className='text-white/70 hover:text-white transition-colors'>
                <Linkedin className='h-6 w-6' />
                <span className='sr-only'>LinkedIn</span>
              </Link>
              <Link
                href='https://github.com/yosh1'
                className='text-white/70 hover:text-white transition-colors'>
                <Github className='h-6 w-6' />
                <span className='sr-only'>GitHub</span>
              </Link>
            </div>

            <p className="text-white/70 text-xl md:text-2xl leading-relaxed font-bold">
              CEO, XTEM Inc.
              <br />
              CEO, Preferred Inc.
              <br />
              Chairman, newCreator.org
            </p>

            <div className='max-w-3xl space-y-4 text-white/80 text-lg md:text-xl leading-relaxed'>
              <p>
                Studied programming, entrepreneurship, and business management at N High School, KADOKAWA DWANGO Educational Institute, where he was a member of the entrepreneurship club and received the Active Learner certification.
                <br />
                Subsequently enrolled in the Faculty of Environment and Information Studies at Keio University, joining the Masui Laboratory (Global User Interface Design).
                <br />
                Conducted research on new forms of user interfaces based on the belief that expanding human potential through computers requires user interfaces that can be controlled as intended.
                <br />
                <br />
                Since April 2018, he has been working as a freelancer in web engineering, UX/UI design, IT business process engineering, and IT implementation support (DX). Later, with business expansion, he incorporated Preferred Inc. As a life work, he focuses on STEAM education for children, promoting generative AI, and addressing educational disparities through visiting classes at middle and high schools nationwide, teacher training, and system development. In 2019, he established newCreator.org.
                In November 2024, he founded XTEM Inc. with the aim of promoting "AI-Driven Development" and AI agent training to create a world where AI becomes commonplace, leveraging his experience in education and system development.
              </p>
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
        </div>
      </div>
    </section>
  );
}


"use client"

import Image from "next/image"
import { useI18n } from "./i18n-provider"

const socials = [
  { label: "Email", href: "mailto:yoshihisa.kaino@pref.co.jp" },
  { label: "X", href: "https://x.com/yoshi1125hisa" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yoshihisak/" },
  { label: "GitHub", href: "https://github.com/yosh1" },
]

export default function Hero() {
  const { t } = useI18n()
  const roles = [t("hero.roles.0"), t("hero.roles.1"), t("hero.roles.2")] as string[]
  const paragraphs = (t("hero.bio") as string).split("\n\n")

  return (
    <section id="profile" className="scroll-mt-24">
      <h1 className="flex flex-wrap items-baseline gap-x-6 gap-y-1 text-2xl md:-ml-40 md:gap-x-0">
        <span className="text-highlight md:min-w-40 md:pr-6">{t("hero.name")}</span>
        <span className="text-muted-foreground">{t("hero.nameSub")}</span>
      </h1>

      <div className="mt-10 grid grid-cols-1 gap-10 md:grid-cols-[1fr_16rem]">
        <div className="order-2 md:order-1">
          <ul className="space-y-1">
            {roles.map((role) => (
              <li key={role}>{role}</li>
            ))}
          </ul>

          <ul className="mt-4 flex flex-wrap gap-x-5 gap-y-1 text-muted-foreground">
            {socials.map((s) => (
              <li key={s.label}>
                <a
                  href={s.href}
                  {...(s.href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="underline decoration-border underline-offset-4 transition-colors hover:text-foreground hover:decoration-foreground"
                >
                  {s.label}
                </a>
              </li>
            ))}
          </ul>

          <h2 className="mb-3 mt-16 text-muted-foreground">{t("profile.title")}</h2>
          <div className="space-y-4 leading-loose">
            {paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>

        <div className="order-1 md:order-2">
          <div className="relative aspect-[3/4] w-48 overflow-hidden rounded md:w-full">
            <Image
              src="/img/board.jpg"
              alt="改野由尚の写真"
              fill
              priority
              sizes="(min-width: 768px) 16rem, 12rem"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

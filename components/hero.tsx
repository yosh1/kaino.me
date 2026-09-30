"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { useI18n } from "./i18n-provider"

const socials = [
  { label: "X", href: "https://x.com/yoshi1125hisa" },
  { label: "Instagram", href: "https://www.instagram.com/yoshihisa.kaino/" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/yoshihisa.k" },
  { label: "GitHub", href: "https://github.com/yosh1" },
]

export default function Hero() {
  const { t } = useI18n()
  const roles = [t("hero.roles.0"), t("hero.roles.1"), t("hero.roles.2")] as string[]

  return (
    <section className="px-4 pb-16 pt-28 md:px-8 md:pb-24 md:pt-40">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-end gap-12 md:grid-cols-12 md:gap-8">
        <div className="order-2 md:order-1 md:col-span-7">
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            {t("hero.nameSub")}
          </p>
          <h1 className="font-display mt-4 text-6xl leading-[1.05] tracking-tight md:text-8xl">
            {t("hero.name")}
          </h1>

          <ul className="mt-10 border-t border-border">
            {roles.map((role) => (
              <li key={role} className="border-b border-border py-3 text-base md:text-lg">
                {role}
              </li>
            ))}
          </ul>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
            {socials.map((s) => (
              <li key={s.label}>
                <Link
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {s.label}
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="order-1 md:order-2 md:col-span-5">
          <div className="relative aspect-[4/5] w-2/3 max-w-xs overflow-hidden md:w-full md:max-w-none">
            <Image
              src="/img/board.jpg"
              alt="改野由尚の写真"
              fill
              priority
              sizes="(min-width: 768px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

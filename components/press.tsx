"use client"

import { Section, Entry } from "@/components/ui/section";
import { useI18n } from "./i18n-provider";
import { articles } from "@/lib/profile/data";

const MONTHS_EN = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

export default function Press() {
  const { t, locale } = useI18n();
  const sorted = [...articles].sort((a, b) => b.date.localeCompare(a.date));

  // 同じ年・同じ月が続くときは表示を省き、年表のように見せる
  let prevYear = "";
  let prevMonth = "";
  const rows = sorted.map((a) => {
    const [year, month] = a.date.split("-");
    const m = Number(month);
    const monthLabel = locale === "ja" ? `${m}月` : MONTHS_EN[m - 1];
    const showYear = year !== prevYear;
    const showMonth = showYear || month !== prevMonth;
    prevYear = year;
    prevMonth = month;
    return { a, year: showYear ? year : "", month: showMonth ? monthLabel : "" };
  });

  return (
    <Section id="press" title={t("press.title") as string}>
      <ul>
        {rows.map(({ a, year, month }, i) => (
          <Entry
            key={i}
            period={
              <span className="grid grid-cols-[3rem_1fr]">
                <span>{year}</span>
                <span>{month}</span>
              </span>
            }
          >
            <a href={a.url} target="_blank" rel="noopener noreferrer" className="underline decoration-border underline-offset-4 transition-colors hover:decoration-foreground">
              {a.title}
            </a>
            <span className="block text-sm text-muted-foreground">{a.source}</span>
          </Entry>
        ))}
      </ul>
    </Section>
  );
}

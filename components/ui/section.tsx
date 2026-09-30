"use client"

import { ReactNode } from "react";

/** グレーの小見出しと本文だけのシンプルなセクション */
export function Section({ id, title, children }: { id?: string; title: string; children: ReactNode }) {
  return (
    <section id={id} className="scroll-mt-24 pt-16">
      <h2 className="mb-3 text-muted-foreground">{title}</h2>
      {children}
    </section>
  );
}

/** 左に期間、右に内容を置く 1 行 */
export function Entry({ period, children }: { period?: ReactNode; children: ReactNode }) {
  return (
    <li className="grid grid-cols-[6.5rem_1fr] gap-x-4 py-1.5 leading-relaxed sm:grid-cols-[8rem_1fr]">
      <span className="tabular-nums text-muted-foreground">{period}</span>
      <div className="min-w-0">{children}</div>
    </li>
  );
}

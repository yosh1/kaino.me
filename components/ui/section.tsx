"use client"

import { ReactNode } from "react";

/**
 * エディトリアル調のセクション。
 * md 以上では左列に番号と見出し、右列に本文を置く 12 カラム構成。
 */
export function Section({
  id,
  index,
  title,
  children,
}: {
  id?: string;
  index?: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-20 px-4 md:px-8">
      <div className="mx-auto max-w-6xl border-t border-foreground/80 py-16 md:py-24">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-12 md:gap-8">
          <header className="md:col-span-4">
            <div className="md:sticky md:top-24">
              {index ? (
                <span className="font-mono text-xs tracking-widest text-highlight">{index}</span>
              ) : null}
              <h2 className="font-display mt-2 text-3xl leading-tight md:text-4xl">{title}</h2>
            </div>
          </header>
          <div className="min-w-0 md:col-span-8">{children}</div>
        </div>
      </div>
    </section>
  );
}

export function SubHeading({ children }: { children: ReactNode }) {
  return (
    <h3 className="mb-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
      {children}
    </h3>
  );
}

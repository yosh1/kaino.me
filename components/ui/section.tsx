"use client"

import { ReactNode } from "react";

export function Section({ id, children }: { id?: string; children: ReactNode }) {
  return (
    <section id={id} className="py-20 px-4 border-t border-border">
      <div className="container max-w-7xl mx-auto">{children}</div>
    </section>
  );
}

export function SectionHeader({ title, subtitle }: { title: string; subtitle?: string }) {
  return (
    <div className="mb-12">
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">{title}</h2>
      {subtitle ? (
        <p className="mt-2 text-foreground/70 md:text-lg">{subtitle}</p>
      ) : null}
    </div>
  );
}

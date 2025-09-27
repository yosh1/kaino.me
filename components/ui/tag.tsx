"use client"

import { ReactNode } from "react";

export default function Tag({ children }: { children: ReactNode }) {
  return (
    <span className="inline-block px-2 py-1 text-xs font-mono bg-foreground/10 text-foreground/90">
      {children}
    </span>
  );
}

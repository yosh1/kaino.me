"use client"

import { useTheme } from "next-themes"
import { Moon, Sun } from "lucide-react"
import { useEffect, useState } from "react"

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const isDark = (resolvedTheme || theme) === "dark"

  if (!mounted) return null

  return (
    <button
      type="button"
      aria-label="Toggle theme"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="inline-flex items-center justify-center rounded-md border border-border px-2.5 py-1.5 text-sm transition-colors hover:bg-accent hover:text-accent-foreground"
      >
    {
      /* シンプルなトグルボタン。必要に応じてUIコンポーネントへ差し替え可能 */
    }
      {isDark ? <Sun size={16} /> : <Moon size={16} />}
      <span className="sr-only">テーマ切替</span>
    </button>
  )
}


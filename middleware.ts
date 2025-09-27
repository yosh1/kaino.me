import { NextResponse, type NextRequest } from "next/server"
import { locales, defaultLocale, isLocale } from "./lib/i18n/config"

function getLocaleFromHeader(request: NextRequest) {
  const header = request.headers.get("accept-language")
  if (!header) return defaultLocale
  const preferred = header.split(",").map(s=>s.split(";")[0]!.trim())
  const found = preferred.find((p) => locales.includes(p as any))
  return (found && (found as any)) || defaultLocale
}

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl

  // Ignore next internals and assets
  if (
    pathname.startsWith("/_next") ||
    pathname.startsWith("/api") ||
    pathname.startsWith("/favicon") ||
    pathname.includes(".")
  ) {
    return
  }

  const segments = pathname.split("/")
  const maybeLocale = segments[1]

  if (!maybeLocale || !isLocale(maybeLocale)) {
    const locale = getLocaleFromHeader(request)
    const url = new URL(`/${locale}${pathname}`, request.url)
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: ["/:path*"],
}


import type { MetadataRoute } from "next"
import { locales } from "@/lib/i18n/config"
import { SITE_URL, LAST_UPDATED } from "@/lib/profile/data"

export default function sitemap(): MetadataRoute.Sitemap {
  const pages = ["", "/multi-mcp", "/multi-mcp/privacy"]

  return pages.flatMap((path) =>
    locales.map((l) => ({
      url: `${SITE_URL}/${l}${path}`,
      lastModified: LAST_UPDATED,
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : 0.3,
      alternates: {
        languages: Object.fromEntries(locales.map((x) => [x, `${SITE_URL}/${x}${path}`])),
      },
    })),
  )
}

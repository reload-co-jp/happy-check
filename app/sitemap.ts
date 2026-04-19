import type { MetadataRoute } from "next"

const baseUrl = "https://happy-check.reload.co.jp"

export const dynamic = "force-static"

const sitemap = (): MetadataRoute.Sitemap => [
  {
    url: `${baseUrl}/`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 1,
  },
]

export default sitemap

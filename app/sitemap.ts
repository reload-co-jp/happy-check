import type { MetadataRoute } from "next"

const baseUrl = "https://happy-check.reload.co.jp"

export const dynamic = "force-static"

const pages = [
  { path: "/", priority: 1 },
  { path: "/serotonin/", priority: 0.8 },
  { path: "/dopamine/", priority: 0.8 },
  { path: "/oxytocin/", priority: 0.8 },
  { path: "/endorphins/", priority: 0.8 },
]

const sitemap = (): MetadataRoute.Sitemap =>
  pages.map((page) => ({
    url: `${baseUrl}${page.path}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: page.priority,
  }))

export default sitemap

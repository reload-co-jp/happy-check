import type { MetadataRoute } from "next"

export const dynamic = "force-static"

const robots = (): MetadataRoute.Robots => ({
  rules: {
    userAgent: "*",
    allow: "/",
  },
  sitemap: "https://happy-check.reload.co.jp/sitemap.xml",
  host: "https://happy-check.reload.co.jp",
})

export default robots

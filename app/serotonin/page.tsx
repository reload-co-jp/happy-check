import { getAnalysisPage, HormoneAnalysisPage } from "../hormone-analysis"

const page = getAnalysisPage("serotonin")

export const metadata = {
  title: "セロトニンの分泌を定性的に振り返る方法 | 幸せホルモン紹介サイト",
  description:
    "セロトニンについて、睡眠、気分、消化、朝の活動などを記録しながら定性的に振り返る方法を紹介します。",
  alternates: {
    canonical: "/serotonin/",
  },
  openGraph: {
    title: "セロトニンの分泌を定性的に振り返る方法",
    description:
      "セロトニンについて、睡眠、気分、消化、朝の活動などを記録しながら定性的に振り返る方法を紹介します。",
    type: "article",
    locale: "ja_JP",
    siteName: "幸せホルモン紹介サイト",
    url: "https://happy-check.reload.co.jp/serotonin/",
  },
  twitter: {
    card: "summary_large_image",
    title: "セロトニンの分泌を定性的に振り返る方法",
    description: "睡眠、気分、消化、朝の活動を記録しながらセロトニンとの関係を振り返る方法。",
  },
}

const SerotoninPage = () => <HormoneAnalysisPage page={page} />

export default SerotoninPage

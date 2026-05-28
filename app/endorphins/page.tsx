import { getAnalysisPage, HormoneAnalysisPage } from "../hormone-analysis"

const page = getAnalysisPage("endorphins")

export const metadata = {
  title: "エンドルフィンの分泌を定性的に振り返る方法 | 幸せホルモン紹介サイト",
  description:
    "エンドルフィンについて、運動、笑い、痛み、疲労、気分の変化を記録しながら定性的に振り返る方法を紹介します。",
  alternates: {
    canonical: "/endorphins/",
  },
  openGraph: {
    title: "エンドルフィンの分泌を定性的に振り返る方法",
    description:
      "エンドルフィンについて、運動、笑い、痛み、疲労、気分の変化を記録しながら定性的に振り返る方法を紹介します。",
    type: "article",
    locale: "ja_JP",
    siteName: "幸せホルモン紹介サイト",
    url: "https://happy-check.reload.co.jp/endorphins/",
  },
  twitter: {
    card: "summary_large_image",
    title: "エンドルフィンの分泌を定性的に振り返る方法",
    description: "運動、笑い、痛み、疲労、気分の変化を記録しながらエンドルフィンとの関係を振り返る方法。",
  },
}

const EndorphinsPage = () => <HormoneAnalysisPage page={page} />

export default EndorphinsPage

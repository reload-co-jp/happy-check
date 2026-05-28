import { getAnalysisPage, HormoneAnalysisPage } from "../hormone-analysis"

const page = getAnalysisPage("oxytocin")

export const metadata = {
  title: "オキシトシンの分泌を定性的に振り返る方法 | 幸せホルモン紹介サイト",
  description:
    "オキシトシンについて、安心感、信頼、親密さ、人との交流後の変化を記録しながら定性的に振り返る方法を紹介します。",
  alternates: {
    canonical: "/oxytocin/",
  },
  openGraph: {
    title: "オキシトシンの分泌を定性的に振り返る方法",
    description:
      "オキシトシンについて、安心感、信頼、親密さ、人との交流後の変化を記録しながら定性的に振り返る方法を紹介します。",
    type: "article",
    locale: "ja_JP",
    siteName: "幸せホルモン紹介サイト",
    url: "https://happy-check.reload.co.jp/oxytocin/",
  },
  twitter: {
    card: "summary_large_image",
    title: "オキシトシンの分泌を定性的に振り返る方法",
    description: "安心感、信頼、親密さ、交流後の変化を記録しながらオキシトシンとの関係を振り返る方法。",
  },
}

const OxytocinPage = () => <HormoneAnalysisPage page={page} />

export default OxytocinPage

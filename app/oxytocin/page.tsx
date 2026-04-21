import { getAnalysisPage, HormoneAnalysisPage } from "../hormone-analysis"

const page = getAnalysisPage("oxytocin")

export const metadata = {
  title: "オキシトシンの分泌を定性的に振り返る方法 | 幸せホルモン紹介サイト",
  description:
    "オキシトシンについて、安心感、信頼、親密さ、人との交流後の変化を記録しながら定性的に振り返る方法を紹介します。",
}

const OxytocinPage = () => <HormoneAnalysisPage page={page} />

export default OxytocinPage

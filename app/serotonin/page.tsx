import { getAnalysisPage, HormoneAnalysisPage } from "../hormone-analysis"

const page = getAnalysisPage("serotonin")

export const metadata = {
  title: "セロトニンの分泌を定性的に振り返る方法 | 幸せホルモン紹介サイト",
  description:
    "セロトニンについて、睡眠、気分、消化、朝の活動などを記録しながら定性的に振り返る方法を紹介します。",
}

const SerotoninPage = () => <HormoneAnalysisPage page={page} />

export default SerotoninPage

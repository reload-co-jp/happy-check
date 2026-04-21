import { getAnalysisPage, HormoneAnalysisPage } from "../hormone-analysis"

const page = getAnalysisPage("dopamine")

export const metadata = {
  title: "ドーパミンの分泌を定性的に振り返る方法 | 幸せホルモン紹介サイト",
  description:
    "ドーパミンについて、やる気、達成感、注意、行動の始めやすさを記録しながら定性的に振り返る方法を紹介します。",
}

const DopaminePage = () => <HormoneAnalysisPage page={page} />

export default DopaminePage

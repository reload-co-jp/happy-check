import { getAnalysisPage, HormoneAnalysisPage } from "../hormone-analysis"

const page = getAnalysisPage("dopamine")

export const metadata = {
  title: "ドーパミンの分泌を定性的に振り返る方法 | 幸せホルモン紹介サイト",
  description:
    "ドーパミンについて、やる気、達成感、注意、行動の始めやすさを記録しながら定性的に振り返る方法を紹介します。",
  alternates: {
    canonical: "/dopamine/",
  },
  openGraph: {
    title: "ドーパミンの分泌を定性的に振り返る方法",
    description:
      "ドーパミンについて、やる気、達成感、注意、行動の始めやすさを記録しながら定性的に振り返る方法を紹介します。",
    type: "article",
    locale: "ja_JP",
    siteName: "幸せホルモン紹介サイト",
    url: "https://happy-check.reload.co.jp/dopamine/",
  },
  twitter: {
    card: "summary_large_image",
    title: "ドーパミンの分泌を定性的に振り返る方法",
    description: "やる気、達成感、注意、行動の始めやすさを記録しながらドーパミンとの関係を振り返る方法。",
  },
}

const DopaminePage = () => <HormoneAnalysisPage page={page} />

export default DopaminePage

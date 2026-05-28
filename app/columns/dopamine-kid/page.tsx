const baseUrl = "https://happy-check.reload.co.jp"
const pageUrl = `${baseUrl}/columns/dopamine-kid/`

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "「ドパガキ」の現象からみる、ドーパミン以外の幸せホルモンという選択肢",
  description:
    "SNSやゲームの刺激に慣れた「ドパガキ」現象を入口に、セロトニン・オキシトシン・エンドルフィンという3つの選択肢を一般向けに整理します。",
  inLanguage: "ja",
  url: pageUrl,
  author: {
    "@type": "Organization",
    name: "Reload, Inc.",
    url: "https://reload.co.jp/",
  },
  publisher: {
    "@type": "Organization",
    name: "幸せホルモン紹介サイト",
    url: `${baseUrl}/`,
  },
  isPartOf: {
    "@type": "WebSite",
    name: "幸せホルモン紹介サイト",
    url: `${baseUrl}/`,
  },
}

const breadcrumbJsonLd = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "トップ",
      item: `${baseUrl}/`,
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "コラム",
      item: `${baseUrl}/columns/`,
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "「ドパガキ」の現象からみる、ドーパミン以外の幸せホルモンという選択肢",
      item: pageUrl,
    },
  ],
}

const alternatives = [
  {
    id: "serotonin",
    name: "セロトニン",
    badge: "安定・落ち着き",
    description:
      "気分の土台や落ち着きのイメージで語られやすい物質です。朝の光を浴びること、生活リズムを整えること、軽い運動などと関連づけて紹介されることがあります。刺激の強さではなく、日常の継続性とともに語られるのが特徴です。",
    contrast:
      "ドーパミンが「今すぐ得る」報酬の文脈で語られるのに対し、セロトニンは積み重ねた安定感のイメージで紹介されやすいです。",
    href: "/serotonin/",
  },
  {
    id: "oxytocin",
    name: "オキシトシン",
    badge: "信頼・つながり",
    description:
      "人とのつながりや信頼感の文脈で紹介されることが多いホルモンです。ひとりで完結する刺激とは異なり、誰かと安心して過ごす時間や、ゆっくりした交流に関連づけて語られます。",
    contrast:
      "即座の報酬が得られるコンテンツ消費とは異なり、関係性の質や時間のかかるつながりに結びつけられやすいのが特徴です。",
    href: "/oxytocin/",
  },
  {
    id: "endorphins",
    name: "エンドルフィン",
    badge: "痛みの緩和・高揚感",
    description:
      "運動後の高揚感や、ストレスや痛みへの反応として話題にのぼる体内性オピオイドです。笑いや負荷のある活動とのセットで紹介されることがあります。スクリーンの前ではなく、体を使う場面で関連づけられやすいです。",
    contrast:
      "受け身で得られる刺激とは異なり、自分の体を動かすという能動的な行動と結びつけて語られる点が特徴的です。",
    href: "/endorphins/",
  },
]

export const metadata = {
  title:
    "「ドパガキ」の現象からみる、ドーパミン以外の幸せホルモンという選択肢 | 幸せホルモン紹介サイト",
  description:
    "SNSやゲームの刺激に慣れた「ドパガキ」現象を入口に、セロトニン・オキシトシン・エンドルフィンという3つの選択肢を一般向けに整理します。",
  alternates: {
    canonical: "/columns/dopamine-kid/",
  },
  openGraph: {
    title: "「ドパガキ」の現象からみる、ドーパミン以外の幸せホルモンという選択肢",
    description:
      "SNSやゲームの刺激に慣れた「ドパガキ」現象を入口に、セロトニン・オキシトシン・エンドルフィンという3つの選択肢を一般向けに整理します。",
    type: "article",
    locale: "ja_JP",
    siteName: "幸せホルモン紹介サイト",
  },
  twitter: {
    card: "summary_large_image",
    title: "「ドパガキ」の現象からみる、ドーパミン以外の幸せホルモンという選択肢",
    description:
      "セロトニン・オキシトシン・エンドルフィンを、ドーパミン依存への視点から整理します。",
  },
}

const DopamineKidPage = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />

      <section className="analysis-hero section-shell tone-dopamine">
        <a className="breadcrumb" href="/">
          トップへ戻る
        </a>
        <p className="eyebrow">コラム</p>
        <h1>「ドパガキ」の現象からみる、ドーパミン以外の幸せホルモンという選択肢</h1>
        <p className="hero-lead">
          SNSの通知、短い動画、ゲームの報酬画面——強い刺激に慣れるにつれて、穏やかな時間が物足りなく感じやすくなることがあります。
          この記事では「ドパガキ」という言葉を入口に、ドーパミン以外の3つの物質をやさしく整理します。
        </p>
        <p className="hero-note">
          このコラムは一般向けの教育コンテンツです。医療上の診断・治療を目的とするものではありません。
        </p>
      </section>

      <section className="section-shell analysis-section" id="what-is-dopamine-kid">
        <div className="section-heading">
          <p className="section-kicker">現象を知る</p>
          <h2>「ドパガキ」とはどんな状態のことか</h2>
        </div>
        <div className="analysis-grid">
          <article className="info-card">
            <h3>言葉の背景</h3>
            <p>
              「ドパガキ」は、ドーパミンの刺激に強く反応しやすくなった状態を指すインターネットスラングです。
              医学的な診断名ではありませんが、SNSや動画コンテンツ、ゲームなどから得られる即時報酬に慣れることで、
              刺激の少ない活動への関心が持ちにくくなるという現象を表す言葉として使われています。
            </p>
          </article>
          <article className="info-card">
            <h3>日常でみられる傾向</h3>
            <p>
              強い刺激がない状態を退屈に感じやすくなること、本や会話など時間のかかる活動に集中しにくくなること、
              次の報酬を探し続けるような感覚——これらは、高刺激コンテンツへの習慣的な接触と関連づけて語られることがあります。
              ただし、個人の状況や要因によって感じ方は大きく異なります。
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell analysis-section" id="dopamine-cycle">
        <div className="section-heading">
          <p className="section-kicker">ドーパミンの特性</p>
          <h2>ドーパミンが「幸せ」の全体像でない理由</h2>
        </div>
        <div className="analysis-grid">
          <article className="info-card">
            <h3>報酬の学習と期待</h3>
            <p>
              ドーパミンは、報酬を得たときだけでなく、報酬を「期待する」タイミングに関わるとされています。
              目標への前向きな気持ちや達成感のイメージで語られますが、慢性的に強い刺激にさらされると、
              より強い刺激を求めやすくなることが一般向けに紹介されることがあります。
            </p>
          </article>
          <article className="info-card">
            <h3>ドーパミンだけで語り切れない</h3>
            <p>
              「幸せ」と一般に呼ばれる状態は、ひとつの物質だけでは説明できません。
              気分の安定、人とのつながり、体を動かす充実感——これらはそれぞれ別の文脈で語られる物質と関連づけられています。
              ドーパミンを「悪者」にせず、補完的な視点を持つことが大切です。
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell" id="alternatives">
        <div className="section-heading">
          <p className="section-kicker">3つの選択肢</p>
          <h2>セロトニン・オキシトシン・エンドルフィンを整理する</h2>
        </div>
        <div className="card-grid">
          {alternatives.map((item) => (
            <article className={`hormone-card tone-${item.id}`} key={item.id}>
              <p className="card-badge">{item.badge}</p>
              <h3>{item.name}</h3>
              <p className="card-tagline">{item.description}</p>
              <p style={{ fontSize: "0.85em", marginTop: "0.75rem", opacity: 0.8 }}>
                {item.contrast}
              </p>
              <a className="card-link" href={item.href}>
                詳しく見る
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell analysis-section" id="balance">
        <div className="section-heading">
          <p className="section-kicker">考え方</p>
          <h2>「やめる」ではなく「バランスを見直す」という視点</h2>
        </div>
        <div className="analysis-grid">
          <article className="info-card">
            <h3>刺激を断つことが目的ではない</h3>
            <p>
              SNSやゲームをすべてやめることが解決策というわけではありません。
              ドーパミンに関わる活動も、学習や動機づけ、達成感といった文脈では日常に役立つ側面があります。
              問題になりやすいのは、ひとつの種類の刺激への一極集中です。
            </p>
          </article>
          <article className="info-card">
            <h3>「刺激の種類を広げる」という視点</h3>
            <p>
              セロトニンのイメージと関連する朝の活動や生活リズム、
              オキシトシンのイメージと関連する人との穏やかな時間、
              エンドルフィンのイメージと関連する運動や笑い——
              こうした活動を生活に組み込むことは、刺激の種類を広げるという観点で紹介されることがあります。
            </p>
          </article>
          <article className="info-card">
            <h3>効果の断定は慎重に</h3>
            <p>
              「これをすれば必ずセロトニンが増える」「運動でエンドルフィンが出るから気分が改善する」といった単純な断定は避けることが大切です。
              心身の状態は睡眠、体調、人間関係、環境など複数の要因で変わるため、
              ひとつの物質や行動だけで説明するのは難しいとされています。
            </p>
          </article>
          <article className="info-card">
            <h3>自分のパターンを観察する</h3>
            <p>
              「どんな活動のあとに気分が落ち着くか」「誰といると安心できるか」「どんな運動が続けやすいか」——
              こうした観察を日常のログとして残すことは、自分の状態を振り返る材料として活用できます。
              各ホルモンの詳細ページでは、定性的な観察方法を紹介しています。
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell analysis-section" id="reading-list">
        <div className="section-heading">
          <p className="section-kicker">関連ページ</p>
          <h2>各ホルモンの詳細を読む</h2>
        </div>
        <div className="intro-grid">
          {alternatives.map((item) => (
            <article className={`info-card tone-${item.id}`} key={item.id}>
              <h3>{item.name}のページ</h3>
              <p>
                {item.badge}のイメージと関連する日常のサインを、診断ではなく振り返りの材料として整理しています。
              </p>
              <a className="card-link" href={item.href}>
                ページを見る
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell notes" id="notes">
        <div className="section-heading">
          <p className="section-kicker">注意事項</p>
          <h2>一般向けの教育コンテンツとしてお読みください</h2>
        </div>
        <div className="notes-box">
          <p>
            このコラムは、「ドパガキ」という言葉を入口に幸せホルモンの多様な側面を整理した、一般向けの教育コンテンツです。
            医療上の診断、治療、助言の代替を目的とするものではありません。
          </p>
          <p>
            気分の落ち込み、集中困難、依存的な行動パターンが日常生活に支障をきたしている場合は、
            医療機関や専門家への相談をご検討ください。
          </p>
        </div>
      </section>
    </>
  )
}

export default DopamineKidPage

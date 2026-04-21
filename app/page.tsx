const hormones = [
  {
    id: "serotonin",
    name: "セロトニン",
    short: "安定・落ち着き",
    tagline: "気分の土台や落ち着きのイメージで語られやすい物質",
    summary:
      "気分や行動、記憶、消化管機能などに関わるとされ、一般向けには安定や落ち着きの文脈で紹介されることが多いです。",
    scenes: "朝のリズムを整えたいとき、穏やかに過ごしたいとき",
    example:
      "生活リズムが整っていて、気持ちが少し安定している感覚を説明するときに引き合いに出されます。",
    misunderstanding:
      "セロトニンだけで気分が決まるわけではなく、心身の状態は睡眠や環境、体調など複数の要因に左右されます。",
    keywords: ["安定", "落ち着き", "生活リズム", "腸との関わり"],
    caution: "脳だけの話ではなく、腸にも多く存在することが知られています。",
  },
  {
    id: "dopamine",
    name: "ドーパミン",
    short: "報酬・やる気",
    tagline: "達成感や期待、報酬の学習に結びつけて語られやすい物質",
    summary:
      "報酬系、動機づけ、注意、運動などに関わるとされ、一般向けにはやる気や達成感のイメージで紹介されます。",
    scenes: "目標に向かって頑張るとき、達成感を味わうとき",
    example:
      "タスクを終えたあとに『やり切った』と感じる場面を説明するときに、よく話題にのぼります。",
    misunderstanding:
      "快楽だけの物質ではなく、学習や期待、行動を後押しする仕組みの文脈でも語られます。",
    keywords: ["報酬", "動機づけ", "達成感", "注意"],
    caution: "『ドーパミンは悪い』のような単純化は避ける必要があります。",
  },
  {
    id: "oxytocin",
    name: "オキシトシン",
    short: "信頼・つながり",
    tagline: "人とのつながりの文脈で紹介されることが多いホルモン",
    summary:
      "出産や授乳に関わるホルモンとして知られ、人との信頼感や親密さの話題でも一般向けに紹介されることがあります。",
    scenes: "人と安心して過ごすとき、支え合いを感じるとき",
    example:
      "家族や友人といてほっとする感覚を説明する際に、関連づけて語られることがあります。",
    misunderstanding:
      "『愛情ホルモン』という呼び方だけで説明し切れるものではなく、文脈によって見え方が変わります。",
    keywords: ["信頼", "親密さ", "つながり", "安心感"],
    caution: "人間関係の悩みが、ひとつの物質だけで解決するわけではありません。",
  },
  {
    id: "endorphins",
    name: "エンドルフィン",
    short: "痛みの緩和・高揚感",
    tagline: "痛みやストレスの緩和、高揚感の文脈で語られやすい物質",
    summary:
      "痛みやストレスに反応して放出される体内性オピオイドで、気分の高まりや痛みのやわらぎに関連づけて紹介されます。",
    scenes: "運動後の高揚感、笑ったあとのすっきり感が話題になるとき",
    example:
      "運動を続けたあとに気分が前向きになる感覚を説明する場面で触れられやすいです。",
    misunderstanding:
      "エンドルフィンが出れば心の不調が治る、というような医療的断定はできません。",
    keywords: ["高揚感", "痛みの緩和", "運動", "ストレス時の反応"],
    caution: "一般向けの説明では『ランナーズハイ』と関連づけて紹介されることがあります。",
  },
] as const

const comparisonRows = [
  {
    label: "一言イメージ",
    values: ["安定・落ち着き", "報酬・やる気", "信頼・つながり", "痛みの緩和・高揚感"],
  },
  {
    label: "よく結び付けられる感覚",
    values: ["穏やかさ", "達成感や期待", "安心感や親密さ", "すっきり感や高まり"],
  },
  {
    label: "関連しやすい場面",
    values: ["朝の活動、生活リズム", "目標達成、学習", "人との交流", "運動、笑い、負荷のある場面"],
  },
  {
    label: "注意点",
    values: [
      "多いほど幸せと単純化しない",
      "快楽だけで説明しない",
      "愛情だけで説明しない",
      "医療的な効果を断定しない",
    ],
  },
]

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: "幸せホルモンとは？",
  description:
    "セロトニン、ドーパミン、オキシトシン、エンドルフィンの違いをやさしく紹介する静的サイトです。",
  inLanguage: "ja",
  about: hormones.map((hormone) => ({
    "@type": "Thing",
    name: hormone.name,
    description: hormone.summary,
  })),
}

const Page = () => {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="hero section-shell" id="top">
        <div className="hero-copy">
          <p className="eyebrow">やさしく学ぶ脳と体のはなし</p>
          <h1>幸せホルモンとは？</h1>
          <p className="hero-lead">
            セロトニン・ドーパミン・オキシトシン・エンドルフィンを、
            日常のイメージといっしょにやさしく整理した紹介ページです。
          </p>
          <p className="hero-note">
            「幸せホルモン」は一般向けの通称です。実際には役割や分類が異なり、
            心身の状態はひとつの物質だけで決まるものではありません。
          </p>
        </div>
        <nav aria-label="ホルモンへのショートカット" className="hero-nav">
          {hormones.map((hormone) => (
            <a className={`pill pill-${hormone.id}`} href={`#${hormone.id}`} key={hormone.id}>
              <span>{hormone.name}</span>
              <small>{hormone.short}</small>
            </a>
          ))}
        </nav>
      </section>

      <section className="section-shell intro" id="intro">
        <div className="section-heading">
          <p className="section-kicker">導入</p>
          <h2>「幸せホルモン」は4つの役割を覚える入口です</h2>
        </div>
        <div className="intro-grid">
          <article className="info-card">
            <h3>通称としてまとめられることが多い</h3>
            <p>
              セロトニンとドーパミンは神経伝達物質、オキシトシンはホルモン、
              エンドルフィンは体内性オピオイドとして説明されることがあります。
            </p>
          </article>
          <article className="info-card">
            <h3>イメージで違いをつかみやすい</h3>
            <p>
              一般向けには、安定、やる気、つながり、高揚感のような言葉で紹介されることが多く、
              学び始めの入口として役立ちます。
            </p>
          </article>
          <article className="info-card">
            <h3>体と心はもっと複雑</h3>
            <p>
              実際の状態は睡眠、体調、環境、人間関係など複数の要因で変わるため、
              ひとつの説明に決めつけないことが大切です。
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell overview" aria-labelledby="overview-title">
        <div className="section-heading">
          <p className="section-kicker">4種類の概要</p>
          <h2 id="overview-title">まずはカードでざっくり比較</h2>
        </div>
        <div className="card-grid">
          {hormones.map((hormone) => (
            <article className={`hormone-card tone-${hormone.id}`} key={hormone.id}>
              <p className="card-badge">{hormone.short}</p>
              <h3>{hormone.name}</h3>
              <p className="card-tagline">{hormone.tagline}</p>
              <ul className="keyword-list" aria-label={`${hormone.name}のキーワード`}>
                {hormone.keywords.map((keyword) => (
                  <li key={keyword}>{keyword}</li>
                ))}
              </ul>
              <a className="card-link" href={`/${hormone.id}/`}>
                定性的な分析方法を見る
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell details" aria-label="各ホルモンの詳細">
        {hormones.map((hormone) => (
          <article className={`detail-card tone-${hormone.id}`} id={hormone.id} key={hormone.id}>
            <div className="detail-header">
              <p className="section-kicker">詳細セクション</p>
              <h2>{hormone.name}</h2>
              <p className="detail-lead">{hormone.tagline}</p>
            </div>
            <div className="detail-grid">
              <div>
                <h3>基本説明</h3>
                <p>{hormone.summary}</p>
              </div>
              <div>
                <h3>イメージしやすい例</h3>
                <p>{hormone.example}</p>
              </div>
              <div>
                <h3>話題になりやすい場面</h3>
                <p>{hormone.scenes}</p>
              </div>
              <div>
                <h3>よくある誤解</h3>
                <p>{hormone.misunderstanding}</p>
              </div>
            </div>
            <div className="detail-footer">
              <p className="detail-caution">{hormone.caution}</p>
              <div className="detail-actions">
                <a href={`/${hormone.id}/`}>分析ページへ</a>
                <a href="#comparison">比較表へ戻る</a>
              </div>
            </div>
          </article>
        ))}
      </section>

      <section className="section-shell analysis-links" aria-labelledby="analysis-links-title">
        <div className="section-heading">
          <p className="section-kicker">定性的な分析</p>
          <h2 id="analysis-links-title">分泌の“傾向”を日常ログで振り返る</h2>
        </div>
        <div className="intro-grid">
          {hormones.map((hormone) => (
            <article className={`info-card tone-${hormone.id}`} key={hormone.id}>
              <h3>{hormone.name}の分析ページ</h3>
              <p>
                {hormone.short}
                のイメージと関連する日常のサインを、診断ではなく振り返りの材料として整理します。
              </p>
              <a className="card-link" href={`/${hormone.id}/`}>
                ページを見る
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell comparison" id="comparison">
        <div className="section-heading">
          <p className="section-kicker">比較</p>
          <h2>4つの違いを並べて見る</h2>
        </div>
        <div className="table-wrap" role="region" aria-label="幸せホルモンの比較表">
          <table>
            <thead>
              <tr>
                <th scope="col">比較軸</th>
                {hormones.map((hormone) => (
                  <th key={hormone.id} scope="col">
                    {hormone.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparisonRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  {row.values.map((value) => (
                    <td key={`${row.label}-${value}`}>{value}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      <section className="section-shell lifestyle" aria-labelledby="lifestyle-title">
        <div className="section-heading">
          <p className="section-kicker">日常との関係</p>
          <h2 id="lifestyle-title">生活の中ではこんなふうに関連づけて語られます</h2>
        </div>
        <div className="lifestyle-grid">
          <article className="info-card">
            <h3>朝の活動</h3>
            <p>
              朝日を浴びることや生活リズムを整えることは、一般向けにはセロトニンの話題と結び付けて紹介されることがあります。
            </p>
          </article>
          <article className="info-card">
            <h3>達成感</h3>
            <p>
              目標を立てて取り組み、終えたあとに感じる満足感は、ドーパミンの文脈で語られることが多いです。
            </p>
          </article>
          <article className="info-card">
            <h3>人との交流</h3>
            <p>
              安心して話せる相手がいることや、信頼関係のある時間は、オキシトシンのイメージと関連づけて説明されます。
            </p>
          </article>
          <article className="info-card">
            <h3>運動や笑い</h3>
            <p>
              運動後の前向きな気分や、たくさん笑ったあとのすっきり感は、エンドルフィンと関連づけて紹介されることがあります。
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell notes" id="notes">
        <div className="section-heading">
          <p className="section-kicker">注意事項</p>
          <h2>一般向けの教育コンテンツとしてお読みください</h2>
        </div>
        <div className="notes-box">
          <p>
            本サイトは、幸せホルモンと呼ばれる4つの物質をやさしく紹介する教育コンテンツです。
            医療上の診断、治療、助言の代替を目的とするものではありません。
          </p>
          <p>
            心身の不調が続く場合や日常生活に支障がある場合は、医療機関や専門家への相談をご検討ください。
          </p>
        </div>
      </section>

      <section className="section-shell about" id="about">
        <div className="section-heading">
          <p className="section-kicker">サイトについて</p>
          <h2>読みやすく違いをつかむための1ページサイトです</h2>
        </div>
        <div className="about-grid">
          <p>
            このサイトは、専門知識がなくても「幸せホルモン」という言葉の背景を理解しやすいよう、
            1ページで全体像を整理できる構成にしています。
          </p>
          <p>
            将来的には各物質ごとの個別ページやFAQを追加しやすいよう、導入、詳細、比較、注意事項を分けて設計しています。
          </p>
        </div>
      </section>
    </>
  )
}

export default Page

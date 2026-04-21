type AnalysisPage = {
  id: string
  slug: string
  name: string
  short: string
  lead: string
  overview: string
  observeTitle: string
  observeItems: string[]
  logItems: string[]
  interpretation: string[]
  avoid: string[]
  consult: string
  sources: { label: string; url: string }[]
}

export const analysisPages: AnalysisPage[] = [
  {
    id: "serotonin",
    slug: "/serotonin/",
    name: "セロトニン",
    short: "安定・落ち着き",
    lead: "気分、睡眠、消化、生活リズムの変化を日誌で見ながら、安定感との関係を振り返ります。",
    overview:
      "セロトニンは中枢神経だけでなく消化管などにも関わるとされます。家庭で分泌量を直接判断するのではなく、朝の活動、睡眠、気分の揺れ、消化の様子を同じ条件で記録し、傾向として眺める方法が安全です。",
    observeTitle: "観察しやすい定性的サイン",
    observeItems: [
      "朝の起きやすさ、日中の眠気、夜の寝つきなど生活リズムの変化",
      "落ち着き、焦りやすさ、気分の波などの主観的な安定感",
      "食欲、便通、お腹の張りなど消化まわりの変化",
      "日光を浴びた時間、屋外活動、軽い運動との関係",
    ],
    logItems: [
      "起床時刻、就寝時刻、睡眠の満足度を1から5で記録する",
      "朝に屋外へ出た時間と、その日の気分の落ち着きを並べて書く",
      "食事、便通、腹部の違和感を短いメモで残す",
      "気分が大きく揺れた場面と、その前後の睡眠・食事・予定を確認する",
    ],
    interpretation: [
      "数日単位ではなく、1から2週間ほどの流れで見ると生活リズムとの関係を捉えやすくなります。",
      "気分の安定だけでセロトニンの多少を決めつけず、睡眠不足やストレスなど別要因も一緒に見ます。",
      "消化の変化が続く場合は、脳内物質の話だけで説明しないようにします。",
    ],
    avoid: [
      "『落ち込む日はセロトニン不足』と決めつける",
      "サプリメントや食事だけで状態が必ず変わると考える",
      "長引く不調を自己分析だけで済ませる",
    ],
    consult:
      "気分の落ち込み、不眠、食欲不振、消化器症状が続く場合や、日常生活に支障がある場合は医療機関へ相談してください。",
    sources: [
      {
        label: "NIMH: Serotonin",
        url: "https://www.nimh.nih.gov/research/research-funded-by-nimh/rdoc/units/molecules/149897",
      },
      {
        label: "NCBI Bookshelf: Physiology, Serotonin",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK545168/",
      },
    ],
  },
  {
    id: "dopamine",
    slug: "/dopamine/",
    name: "ドーパミン",
    short: "報酬・やる気",
    lead: "やる気そのものではなく、期待、達成感、注意、行動の始めやすさを場面ごとに振り返ります。",
    overview:
      "ドーパミンは報酬、動機づけ、注意、運動など幅広い働きに関わるとされます。定性的には、何に期待を感じるか、行動を始めやすい条件は何か、達成後にどう感じるかを記録すると、自分の動機づけのパターンを理解しやすくなります。",
    observeTitle: "観察しやすい定性的サイン",
    observeItems: [
      "作業を始めるまでの重さ、先延ばしが起きやすい場面",
      "小さな達成後の満足感、次の行動へ移る勢い",
      "新しい刺激、報酬、締め切りへの反応",
      "集中の続きやすさ、注意がそれるタイミング",
    ],
    logItems: [
      "今日始めにくかった行動と、始められたきっかけを書く",
      "達成したことを小さく分解し、達成前後の気分を1から5で記録する",
      "通知、SNS、ゲーム、買い物など強い刺激に触れた時間をメモする",
      "集中が切れた時刻と、その直前の睡眠・空腹・環境を確認する",
    ],
    interpretation: [
      "やる気が低い日をドーパミンだけで説明せず、睡眠、疲労、タスク設計の影響も見ます。",
      "達成感が出やすい行動の共通点を探すと、無理なく始める条件を設計しやすくなります。",
      "強い刺激を求める傾向がある場合は、頻度や時間帯を記録すると生活への影響を見直せます。",
    ],
    avoid: [
      "『ドーパミン中毒』のような言葉で自分を決めつける",
      "快感や娯楽をすべて悪いものとして扱う",
      "集中できない理由を意志の弱さだけにする",
    ],
    consult:
      "極端な無気力、衝動的な行動、生活に支障が出る依存的な行動、運動の異変がある場合は専門家へ相談してください。",
    sources: [
      {
        label: "NCBI Bookshelf: Dopamine",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK535451/",
      },
      {
        label: "NCBI Bookshelf: Biochemistry, Dopamine Receptors",
        url: "https://www.ncbi.nlm.nih.gov/sites/books/n/statpearls/article-20660/",
      },
    ],
  },
  {
    id: "oxytocin",
    slug: "/oxytocin/",
    name: "オキシトシン",
    short: "信頼・つながり",
    lead: "人との関わりの量ではなく、安心感、信頼、親密さ、境界線の保ちやすさを振り返ります。",
    overview:
      "オキシトシンは出産や授乳に関わるホルモンとして知られ、人とのつながりの文脈でも紹介されます。定性的には、誰といると安心しやすいか、交流後に疲れや回復を感じるかなど、関係性の質を観察します。",
    observeTitle: "観察しやすい定性的サイン",
    observeItems: [
      "会話や接触のあとに安心感、緊張、疲労のどれが残るか",
      "信頼できる相手と過ごした時間の質",
      "孤独感、支えられている感覚、助けを求めやすさ",
      "産後や授乳期など、身体状況と感情の変化が重なる時期の様子",
    ],
    logItems: [
      "誰と、どのくらい、どんな形で関わったかを簡単に記録する",
      "交流前後の安心感と疲労感を1から5で書く",
      "ハグ、会話、共同作業、ペットとの時間など、心地よかった交流をメモする",
      "無理をして合わせた場面と、境界線を守れた場面を分けて振り返る",
    ],
    interpretation: [
      "人と会った量よりも、安心できたか、回復したか、負担が残ったかを重視します。",
      "つながりの感じ方は相手や状況に左右されるため、オキシトシンだけで説明しないようにします。",
      "産後や授乳期の不調は自己判断で抱え込まず、医療・助産・地域支援につなげる視点を持ちます。",
    ],
    avoid: [
      "『オキシトシンが出れば孤独が解決する』と考える",
      "人と会うほどよい、と量だけで判断する",
      "つらい関係性を我慢する理由にする",
    ],
    consult:
      "強い孤独感、不安、産後の気分の落ち込み、人間関係による安全上の不安がある場合は、早めに専門家や支援窓口へ相談してください。",
    sources: [
      {
        label: "NCBI Bookshelf: Oxytocin",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK507848/",
      },
    ],
  },
  {
    id: "endorphins",
    slug: "/endorphins/",
    name: "エンドルフィン",
    short: "痛みの緩和・高揚感",
    lead: "運動、笑い、ストレス後のすっきり感と、痛みや疲労の変化をセットで振り返ります。",
    overview:
      "エンドルフィンは痛みやストレスへの反応、運動後の高揚感などと関連づけて紹介されます。定性的には、負荷のある活動の前後で痛み、疲労、気分がどう変わったかを同じ尺度で記録します。",
    observeTitle: "観察しやすい定性的サイン",
    observeItems: [
      "運動や笑いのあとに気分が軽くなる感覚",
      "痛みやこわばりの主観的な変化",
      "ストレス場面のあとに回復するまでの時間",
      "高揚感のあとに疲れすぎていないか",
    ],
    logItems: [
      "運動の種類、時間、きつさを1から5で記録する",
      "活動前後の痛み、疲労、気分を同じ尺度で書く",
      "笑った時間、楽しかった活動、リラックスできた活動をメモする",
      "翌日の疲労や痛みの残り方も確認する",
    ],
    interpretation: [
      "運動直後の高揚感だけでなく、翌日の回復具合まで見ると無理のない負荷を探しやすくなります。",
      "痛みが軽く感じても原因が消えたとは限らないため、継続する痛みは別に扱います。",
      "気分が上がる活動を複数持っておくと、ひとつの方法に頼りすぎにくくなります。",
    ],
    avoid: [
      "痛みを我慢して運動すればよいと考える",
      "高揚感を求めて負荷を上げ続ける",
      "メンタルの不調が運動だけで治ると断定する",
    ],
    consult:
      "痛みが続く、運動後に症状が悪化する、気分の落ち込みが強い場合は医療機関や専門家へ相談してください。",
    sources: [
      {
        label: "NCBI Bookshelf: Biochemistry, Endorphin",
        url: "https://www.ncbi.nlm.nih.gov/books/NBK470306/",
      },
      {
        label: "Harvard Health: Endorphins",
        url: "https://www.health.harvard.edu/mind-and-mood/endorphins-the-brains-natural-pain-reliever",
      },
    ],
  },
]

export const getAnalysisPage = (id: string) => {
  const page = analysisPages.find((item) => item.id === id)

  if (!page) {
    throw new Error(`Unknown analysis page: ${id}`)
  }

  return page
}

export const HormoneAnalysisPage = ({ page }: { page: AnalysisPage }) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "MedicalWebPage",
    name: `${page.name}の定性的な分析方法`,
    description: page.lead,
    inLanguage: "ja",
    url: `https://happy-check.reload.co.jp${page.slug}`,
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className={`analysis-hero section-shell tone-${page.id}`}>
        <a className="breadcrumb" href="/">
          トップへ戻る
        </a>
        <p className="eyebrow">{page.short}</p>
        <h1>{page.name}の分泌を定性的に振り返る方法</h1>
        <p className="hero-lead">{page.lead}</p>
        <p className="hero-note">
          ここで紹介する方法は、分泌量を測定・診断するものではありません。日常の状態を整理し、
          医療相談やセルフケアの材料にするための一般向けガイドです。
        </p>
      </section>

      <section className="section-shell analysis-section">
        <div className="section-heading">
          <p className="section-kicker">前提</p>
          <h2>直接測定ではなく、傾向を安全に見る</h2>
        </div>
        <div className="analysis-grid">
          <article className="info-card">
            <h3>このページで見ること</h3>
            <p>{page.overview}</p>
          </article>
          <article className="info-card">
            <h3>できないこと</h3>
            <p>
              気分、行動、体調の変化から、{page.name}
              の分泌量を正確に推定することはできません。症状の診断や治療方針の判断にも使わないでください。
            </p>
          </article>
        </div>
      </section>

      <section className="section-shell analysis-section">
        <div className="section-heading">
          <p className="section-kicker">観察ポイント</p>
          <h2>{page.observeTitle}</h2>
        </div>
        <div className="method-grid">
          {page.observeItems.map((item) => (
            <article className="method-card" key={item}>
              <p>{item}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell analysis-section">
        <div className="section-heading">
          <p className="section-kicker">記録方法</p>
          <h2>1から2週間のログで、同じ尺度を使う</h2>
        </div>
        <ol className="step-list">
          {page.logItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      </section>

      <section className="section-shell analysis-section">
        <div className="section-heading">
          <p className="section-kicker">読み解き方</p>
          <h2>単独の原因にせず、背景と一緒に見る</h2>
        </div>
        <div className="analysis-grid">
          <article className="info-card">
            <h3>見るときのコツ</h3>
            <ul className="body-list">
              {page.interpretation.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
          <article className="info-card">
            <h3>避けたい判断</h3>
            <ul className="body-list">
              {page.avoid.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </article>
        </div>
      </section>

      <section className="section-shell notes">
        <div className="section-heading">
          <p className="section-kicker">相談の目安</p>
          <h2>不調が続くときは専門家へ</h2>
        </div>
        <div className="notes-box">
          <p>{page.consult}</p>
        </div>
      </section>

      <section className="section-shell analysis-section">
        <div className="section-heading">
          <p className="section-kicker">参考情報</p>
          <h2>内容作成時に参照した資料</h2>
        </div>
        <ul className="source-list">
          {page.sources.map((source) => (
            <li key={source.url}>
              <a href={source.url}>{source.label}</a>
            </li>
          ))}
        </ul>
      </section>
    </>
  )
}

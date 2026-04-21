import type { Metadata } from "next"
import "./reset.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://happy-check.reload.co.jp"),
  title: "幸せホルモンとは？ | セロトニン・ドーパミン・オキシトシン・エンドルフィンをやさしく解説",
  description:
    "幸せホルモンと呼ばれるセロトニン、ドーパミン、オキシトシン、エンドルフィンの違いを、初心者向けにやさしく比較して紹介します。",
  openGraph: {
    title: "幸せホルモンとは？",
    description:
      "セロトニン、ドーパミン、オキシトシン、エンドルフィンの役割の違いをやさしく学べる紹介サイトです。",
    type: "website",
    locale: "ja_JP",
    siteName: "幸せホルモン紹介サイト",
  },
  twitter: {
    card: "summary_large_image",
    title: "幸せホルモンとは？",
    description:
      "幸せホルモンと呼ばれる4つの物質を、日常のイメージといっしょに紹介します。",
  },
}

const navItems = [
  { href: "/#top", label: "トップ" },
  { href: "/serotonin/", label: "セロトニン" },
  { href: "/dopamine/", label: "ドーパミン" },
  { href: "/oxytocin/", label: "オキシトシン" },
  { href: "/endorphins/", label: "エンドルフィン" },
  { href: "/#comparison", label: "比較" },
  { href: "/#notes", label: "注意事項" },
]

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "幸せホルモン紹介サイト",
  url: "https://happy-check.reload.co.jp/",
  inLanguage: "ja",
}

const RootLayout = ({ children }: Readonly<{ children: React.ReactNode }>) => {
  return (
    <html lang="ja">
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <header className="site-header">
          <div className="header-inner">
            <a className="brand" href="#top">
              <span className="brand-mark">Happy Hormones</span>
              <span className="brand-name">幸せホルモン紹介サイト</span>
            </a>
            <nav aria-label="グローバルナビゲーション" className="site-nav">
              {navItems.map((item) => (
                <a href={item.href} key={item.href}>
                  {item.label}
                </a>
              ))}
            </nav>
          </div>
        </header>
        <main className="site-main">{children}</main>
        <footer className="site-footer">
          <div className="footer-inner">
            <p>幸せホルモンの違いを、一般向けにやさしく整理した静的サイトです。</p>
            <p>運営: Reload, Inc.</p>
          </div>
        </footer>
      </body>
    </html>
  )
}

export default RootLayout

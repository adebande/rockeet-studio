import Document, { Html, Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="fr">
        <Head>
        <meta charset="UTF-8"/>
        <meta property="og:url" content="https://rockeet.io" />
        <meta property="og:title" content="Rockeet.io"/>
        <meta property="og:description" content="Développement de sites internet, applications web et mobile." />
        <meta property="og:image" content="https://rockeet.io/fb-img.png"/>
        <script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-P32ZZQ0X08"
        />

        <script
          dangerouslySetInnerHTML={{
            __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'G-P32ZZQ0X08');
              `,
          }}
        />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

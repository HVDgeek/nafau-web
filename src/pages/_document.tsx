import Document, { Head, Html, Main, NextScript } from 'next/document'
import Analytics from 'components/Analitics'

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap"
            rel="stylesheet"
          />
          <link rel="preconnect" href="https://fonts.gstatic.com" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;300;400;500;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <script src="https://meet.jit.si/external_api.js"></script>
          <NextScript />
          <Analytics />
        </body>
      </Html>
    )
  }
}

import Document, { Head, Main, NextScript } from 'next/document'
import { flush } from '../styletron'
import {PORT, SERVER} from '../components/env'

export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const page = renderPage()
    const styletron = flush()
    const css = styletron ? styletron.getCss() : null
    return { ...page, css }
  }

  render () {
    return (
      <html>
        <Head>
          <title>Lumographe</title>
          <meta charset="utf-8"/>
          <style dangerouslySetInnerHTML={{__html: `
            @font-face {
              font-family: 'montserrat';
              src: url('/static/fonts/montserrat-semibold.woff2') format('woff2'),
                  url('/static/fonts/montserrat-semibold.woff') format('woff'),
                  url('/static/fonts/montserrat-semibold.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'calendas';
              src: url('/static/fonts/calendas_plus-webfont.woff2') format('woff2'),
                  url('/static/fonts/calendas_plus-webfont.woff') format('woff'),
                  url('/static/fonts/calendas_plus-webfont.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }

            @font-face {
              font-family: 'calendas';
              src: url('/static/fonts/calendas_plus_bold-webfont.woff2') format('woff2'),
                  url('/static/fonts/calendas_plus_bold-webfont.woff') format('woff'),
                  url('/static/fonts/calendas_plus_bold-webfont.ttf') format('truetype');
              font-weight: bold;
              font-style: normal;
            }

            @font-face {
              font-family: 'calendas';
              src: url('/static/fonts/calendas_plus_italic-webfont.woff2') format('woff2'),
                  url('/static/fonts/calendas_plus_italic-webfont.woff') format('woff'),
                  url('/static/fonts/calendas_plus_italic-webfont.ttf') format('truetype');
              font-weight: normal;
              font-style: italic;
            }

            body.font-calendas {
              font-family: calendas, serif;
              font-size: 1rem;
              font-smooth: 'always;
              -moz-osx-font-smoothing: grayscale;
              -webkit-font-smoothing: antialiased;
            }

            body.font-montserrat .font-montserrat {
              font-family: montserrat, sans-serif;
            }
            html {
              box-sizing: border-box;
            }
            body {
              background-color: #fff;
              font-family: TimesNewRoman, Times New Roman, Times, Baskerville, Georgia, serif;
              font-size: 1.05rem;
              margin: 0;
            }
            *,
            *::before,
            *::after { box-sizing: inherit; }
            `}} />
            <style className='_styletron_hydrate_' dangerouslySetInnerHTML={{ __html: this.props.css }} />
            <script dangerouslySetInnerHTML={{ __html:`env=${JSON.stringify({ PORT, SERVER })}` }}/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}

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
          <style className='_styletron_hydrate_' dangerouslySetInnerHTML={{ __html: this.props.css }} />
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
              font-family: 'ebgaramond';
              src: url('/static/fonts/ebgaramond12-regular-webfont.woff2') format('woff2'),
                  url('/static/fonts/ebgaramond12-regular-webfont.woff') format('woff'),
                  url('/static/fonts/ebgaramond12-regular-webfont.ttf') format('truetype');
              font-weight: normal;
              font-style: normal;
            }

            body.font-ebgaramond,
            body.font-ebgaramond .font-ebgaramond {
              font-family: ebgaramond, serif;
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
              margin: 0;
            }
            *,
            *::before,
            *::after { box-sizing: inherit; }
            `}} />
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

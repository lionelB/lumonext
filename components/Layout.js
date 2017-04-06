import React from "react"
import Head from 'next/head'
import { StyletronProvider } from 'styletron-react'
import getStyletron from '../lib/styletron'

import colors from '../lib/colors'
import { observe } from '../lib/font-observer'


// client code only
if (typeof window !== 'undefined') {
  observe();
}

export default ({ children, title="Lumographe" }) => (
  <StyletronProvider styletron={getStyletron()}>
    <div className="styletron">
      <Head>
        <title>{ title }</title>
      </Head>
      { children }
    </div>
  </StyletronProvider>
)

// @flow
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


class Layout extends React.Component {
  props: {
    title: string,
    children: React.Element<*>,
  }
  
  render() {
    const { title, children } = this.props
    return (
      <StyletronProvider styletron={getStyletron()}>
        <div className="styletron">
          <Head>
            <title>{title}</title>
          </Head>
          {children}
        </div>
      </StyletronProvider>
    )
  }
}

export default Layout

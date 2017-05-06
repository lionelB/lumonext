// @flow 
import React from 'react'
import { styled } from 'styletron-react'

import colors from '../../lib/colors'

class MailSvg extends React.Component {
  props: {
    className: string
  }

  render() {
    const { className } = this.props

    return (
      <svg className={className} viewBox="0 0 24 24">
        <title>Mail adress</title>
        <path fill="currentColor" d="M0 3v18h24V3H0zm6.62 7.93L2 16.63V7.2l4.62 3.75zM2.48 5h19.04L12 12.7 2.48 5zm5.7 7.2L12 15.3l3.83-3.12 5.6 6.82H2.67l5.52-6.8zm9.2-1.28L22 7.18v9.35l-4.62-5.6z" />
      </svg>
    )
  }
}

const Mail = styled(MailSvg, {
  display: 'block',
  width: '100%',
  height: '100%'
})

export default Mail

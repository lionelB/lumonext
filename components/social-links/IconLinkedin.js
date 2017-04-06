// @flow
import React from 'react'
import { styled } from 'styletron-react'

import colors from '../../lib/colors'

class LinkedInSvg extends React.Component {
  props: {
    className: string
  }

  render() {
    const { className } = this.props

    return (
      <svg className={className} viewBox="0 0 24 24">
        <title>Linked in</title>
        <path fill="currentColor" d="M4.98 3c0 1.38-1.1 2.5-2.48 2.5C1.13 5.5.02 4.38.02 3S1.12.5 2.5.5C3.87.5 4.98 1.62 4.98 3zM5 7.5H0v16h5v-16zm7.98 0H8v16H13v-8.4c0-4.67 6.03-5.05 6.03 0v8.4h5V13.37c0-7.88-8.92-7.6-11.02-3.7V7.5z"/>
      </svg>
    )
  }
}

const Linkedin = styled(LinkedInSvg, {
  display: 'block',
  height: '100%'
})

export default Linkedin

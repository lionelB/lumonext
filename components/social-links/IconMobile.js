// @flow
import React from 'react'
import { styled } from 'styletron-react'

import colors from '../../lib/colors'

class MobileSvg extends React.Component {
  props: {
    className: string
  }

  render() {
    const { className } = this.props

    return (
      <svg className={className} viewBox="0 0 24 24">
        <title>Mobile phone number</title>
        <path fill="currentColor" d="M19 2c0-1.1-.9-2-2-2H7C5.9 0 5 .9 5 2v20c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V2zm-8.5 0h3c.28 0 .5.22.5.5s-.22.5-.5.5h-3c-.28 0-.5-.22-.5-.5s.22-.5.5-.5zM12 22c-.55 0-1-.45-1-1s.45-1 1-1 1 .45 1 1-.45 1-1 1zm5-3H7V4.98h10V19z" />
      </svg>
    )
  }
}

const Mobile = styled(MobileSvg, {
  display: 'block',
  height: '100%'
})

export default Mobile

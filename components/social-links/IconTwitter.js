// @flow 
import React from 'react'
import { styled } from 'styletron-react'

import colors from '../../lib/colors'

class TwitterSvg extends React.Component {
  props: {
    className: string
  }

  render() {
    const { className } = this.props

    return (
      <svg className={className} viewBox="0 0 24 24">
        <title>Twitter</title>
        <path fill="currentColor" d="M21.17 5.58c1.02-.6 1.8-1.57 2.17-2.72-.95.56-2 .97-3.13 1.2-.9-.96-2.17-1.56-3.58-1.56-3.18 0-5.52 2.97-4.8 6.04-4.1-.2-7.72-2.16-10.15-5.14C.37 5.6 1 8.5 3.2 9.97c-.8-.02-1.57-.24-2.24-.6-.05 2.27 1.6 4.4 3.95 4.88-.68.2-1.44.23-2.2.08.62 1.96 2.43 3.38 4.6 3.42C5.2 19.38 2.6 20.1 0 19.8 2.18 21.2 4.77 22 7.55 22c9.14 0 14.3-7.72 14-14.64.95-.7 1.8-1.56 2.45-2.55-.88.4-1.83.67-2.83.78z" />
      </svg>
    )
  }
}

const Twitter = styled(TwitterSvg, {
  display: 'block',
  width: '100%',
  height: '100%'
})

export default Twitter

import React from 'react'
import { styled } from 'styletron-react'

import colors from '../../lib/colors'

const GithubSvg = ({className}) => (
  <svg className={className} viewBox="0 0 24 24">
    <title>Github</title>
    <path fill="currentColor" d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.4.6.1.8-.27.8-.6V20.6c-3.34.72-4.03-1.42-4.03-1.42-.55-1.4-1.34-1.75-1.34-1.75-1.08-.74.1-.72.1-.72 1.2.08 1.83 1.23 1.83 1.23 1.07 1.85 2.8 1.32 3.5 1 .1-.76.4-1.3.75-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.3.47-2.38 1.24-3.22-.13-.3-.54-1.52.12-3.17 0 0 1-.32 3.3 1.23.95-.26 1.98-.4 3-.4s2.05.14 3 .4C17.3 4.67 18.3 5 18.3 5c.66 1.65.25 2.87.12 3.17.77.84 1.24 1.9 1.24 3.22 0 4.6-2.8 5.63-5.48 5.93.43.37.82 1.1.82 2.22v3.3c0 .3.2.7.8.57C20.57 21.8 24 17.3 24 12c0-6.63-5.37-12-12-12z"/>
  </svg>
)

const Github = styled(GithubSvg, {
  display: 'block',
  height: '100%',
  width: 'auto',
})

export default Github

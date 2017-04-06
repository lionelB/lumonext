import React from 'react'
import { styled } from 'styletron-react'

export default styled('div', (props) => ({
  maxWidth: props.maxWidth || '56.5rem',
  margin: `${props.margin || '1rem'} auto`,
  lineHeight: 1.3,
  '@media (max-width: 40em)': {
    margin: `${props.margin} .5em`,
  } 
}))


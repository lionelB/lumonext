// @flow
import React from 'react'
import { styled } from 'styletron-react' 

export default styled('div', (props) => ({
  maxWidth: props.maxWidth || '56.5rem',
  margin: `${props.margin || '1rem'} auto`,
  lineHeight: 1.3,
}))


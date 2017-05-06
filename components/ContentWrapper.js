// @flow
import React from 'react'
import { styled } from 'styletron-react' 
export const BASE_WIDTH = '56.5rem'

export default styled('div', (props) => ({
  maxWidth: props.maxWidth || BASE_WIDTH,
  margin: `${props.margin || '1rem'} auto 0`,
  padding: '0 calc(2vw + 1rem)', 
  lineHeight: 1.3,
}))


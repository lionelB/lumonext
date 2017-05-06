import React from 'react'
import { styled } from 'styletron-react'
import colors from '../lib/colors'

export const A = styled('a', { 
  color: colors.black,
  textDecoration: 'none',
  transition: '.25s ease color',
  ':visited': {
    color: colors.black,
  },
  ':hover': {
    color: colors.green,
  }
}) 

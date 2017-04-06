// @flow
import React from "react"
import { styled } from 'styletron-react'
import colors from '../lib/colors'

export default class TopBorder extends React.Component {
  render() {
    return <Border />
  }
}

const Border = styled('div', {
    height: ".3em",
    background: `linear-gradient(-90deg, ${colors.green} 3%, ${colors.blue} 98%)`,
})

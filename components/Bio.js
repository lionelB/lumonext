// @flow
import React from "react"
import { styled } from "styletron-react"

import colors from '../lib/colors.js'
import ContentWrapper from './ContentWrapper'

class Bio extends React.Component {
  props: {
    content: string,
  }
  
  render() {
    const {content} = this.props
    const paragraphes = content.split(/\n/g).map((content, index) => (
      <p key={`p${index}`} dangerouslySetInnerHTML={{__html: content}}></p>
    ))

    return (
      <BioWrapper maxWidth={ '35rem' } margin={ '5em' }> { paragraphes } </BioWrapper>
    )
  }
} 


export default Bio
 
const BioWrapper = styled(ContentWrapper, {
  padding: '1em 0',
  padding: 0,
  lineHeight: 1.5,
  fontSize: '1.2em',
  color: colors.black,
})

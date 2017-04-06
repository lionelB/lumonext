import React from "react"
import {styled} from "styletron-react"

import colors from '../lib/colors.js'
import ContentWrapper from './ContentWrapper'

export default (props) => {
  const paragraphes = props.content.split(/\n/g).map((content, index) => (
    <p key={`p${index}`} dangerouslySetInnerHTML={{__html: content}}></p>
  ))

  return (
    <Bio maxWidth={ '35rem' } margin={ '5em' }> { paragraphes } </Bio>
  )
}


const Bio = styled(ContentWrapper, {
  padding: '1em 0',
  padding: 0,
  lineHeight: 1.5,
  fontSize: '1.2em',
  color: colors.black,
})

import React from "react"
import {styled} from "styletron-react"
import colors from './colors.js'

export default (props) => {
  const paragraphes = props.content.split(/\n/g).map((content, index) => (
    <p key={`p${index}`} dangerouslySetInnerHTML={{__html: content}}></p>
  ))

  return (
    <Bio> { paragraphes } </Bio>
  )
}


const Bio = styled('section', {
  maxWidth: ' 50rem',
  margin: 'auto',
  padding: '1em 0',
  maxWidth: '35rem',
  margin: '5em  auto 6em',
  padding: 0,
  lineHeight: 1.5,
  fontSize: '1.2em',
  color: colors.black,
})

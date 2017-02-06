import React from "react"
import {styled} from 'styletron-react'

import colors from './colors.js'
import ContentWrapper from './ContentWrapper'

const Title = (props) => {
  return (
    <Section>
      <TitleBorder top viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0v2L0 40V0h1440z" fill="#FFF" fillRule="evenodd" />
      </TitleBorder>
      <ContentWrapper>
        <SectionTitle>
          { props.children }
          <Dash />
        </SectionTitle>
      </ContentWrapper>
      <TitleBorder bottom viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 30v5H0V0l1440 30z" fill="#FFF" fillRule="evenodd" />
      </TitleBorder>
    </Section>
  )
}

export default Title

const Section = styled('div', {
  marginTop:'4rem',
  marginBottom:'4rem',
  letterSpacing: '.015em',
  position: 'relative',
  backgroundColor: colors.lightGray,
  overflow: 'hidden',
})

const TitleBorder = styled('svg', props => ({
  top: props.top ? '-1px' : 'auto',
  bottom: props.bottom ? '-1px' : 'auto',
  position: 'absolute'
}))

const SectionTitle = styled('h2', {
  position: 'relative',
  lineHeight: 1.04
})

const Dash = styled('div', props =>({
  display: 'block',
  position: 'absolute',
  left: 0,
  bottom: '-1rem',
  height: '.7rem',
  width: '5rem',
  backgroundColor: props.blue ? colors.blue : colors.green,
  display: 'block',
  textTransform: 'none',
}))

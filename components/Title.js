// @flow
import React from "react"
import {styled} from 'styletron-react'

import colors from '../lib/colors'
import ContentWrapper from './ContentWrapper'

type Props = {
  children?: React.Element<*>
}

class Title extends React.Component {
  props: {
    children?: React.Element<*>
  }
  render() {
    const { children } = this.props
    return (
      <TitleContent>
        <TitleBorder viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0v2L0 40V0h1440z" fill="#FFF" fillRule="evenodd" />
        </TitleBorder>
        <ContentWrapper>
          <SectionTitle>
            { children }
            <Dash />
          </SectionTitle>
        </ContentWrapper>
        <TitleBorder bottom viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 30v5H0V0l1440 30z" fill="#FFF" fillRule="evenodd" />
        </TitleBorder>
      </TitleContent>
    )
  }
}

export default Title

const TitleContent = styled('div', {
  margin:'4rem 0',
  letterSpacing: '.015em',
  position: 'relative',
  backgroundColor: colors.lightGray,
  overflow: 'hidden',
  lineHeight: 0
})

const TitleBorder = styled('svg', (props) => ({
  display: 'block',
  position: 'relative',
  top: props.bottom ? 'auto' : '-1px',
  bottom: props.bottom ? '-1px' : 'auto',
}))

const SectionTitle = styled('h2', {
  position: 'relative',
  lineHeight: 1.04,
  margin: '5.75rem 0'
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

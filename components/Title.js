// @flow
import React from "react"
import {styled} from 'styletron-react'

import colors from '../lib/colors'
import ContentWrapper from './ContentWrapper'
import injectVisible from '../lib/scroll-reveal'

import {cx} from '../lib/utils'
 
type Props = {
  heading: string,
  visible: boolean, 
  offsetTop: number,
  offsetBottom: number,
}
class Title extends React.Component<*, Props,*> {
  props: Props
  render() {
    const { heading, visible } = this.props  
    const [main, ...sub] = heading.split(' ') 
    return (<div>
      <TitleContent visible={visible}>
        <TitleBorder viewBox="0 0 1440 40" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 0v2L0 40V0h1440z" fill="#FFF" fillRule="evenodd" />
        </TitleBorder>
        <ContentWrapper>
          <SectionTitle>
            <OverflowText>
              <SectionTitleSmall visible={visible}>{ main }</SectionTitleSmall>
            </OverflowText>
            <SectionTitleBigStyled visible={visible}>{ sub.join(' ') }</SectionTitleBigStyled>
            <Dash visible={visible} />
          </SectionTitle>
        </ContentWrapper>
        <TitleBorder bottom viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg">
          <path d="M1440 30v5H0V0l1440 30z" fill="#FFF" fillRule="evenodd" />
        </TitleBorder>
      </TitleContent>
    </div>)
  }
}
 
export default injectVisible(Title)
const ease = 'cubic-bezier(.18, .84, .36, 1)'
const TitleContent = styled('div', props => {
  const animation = {
    transform: 'none',
    transition:`.3s ${ease} transform`,
    transformOrigin: 'center',
    opacity: 1,
  }
  return {
    margin:'4rem 0',
    letterSpacing: '.015em',
    position: 'relative',
    backgroundColor: colors.lightGray,
    overflow: 'hidden',
    lineHeight: 0,
    opacity:0,
    transform: 'scaleY(.1)',
    ...props.visible ? animation : {}
  }
})

const TitleBorder = styled('svg', props => ({
  display: 'block', 
  position: 'relative',
  top: props.bottom ? 'auto' : '-1px',
  bottom: props.bottom ? '-1px' : 'auto',
}))

const OverflowText = styled('div', (props) => ({
  paddingTop: '.2em',
  paddingBottom: '.2em',
  overflow: 'hidden',
  backgroundColor: props.color
}))

const SectionTitle = styled('h2', {
  position: 'relative',
  lineHeight: 1,
  margin: '5rem 0 5.5rem',
})

const SectionTitleSmall = styled('div', props => {
  const animation = {
    transform: 'none',
    transition:`.5s .3s ${ease} transform, .5s .3s ${ease} opacity`,
    transformOrigin: 'left bottom',
    opacity: 1,
  }

  return {
    opacity: 0,
    fontSize: '1.4em',
    transform: 'translateY(110%)',
    color:colors.gray,
    ...props.visible ? animation : {}
  }
})
const SectionTitleBig = ({className, children}) =>
  (<div className={cx(className, 'font-montserrat') }>{children}</div>)

const SectionTitleBigStyled = styled(SectionTitleBig, (props) => {
  const animation = {
    transform: 'none',
    opacity: 1,
    transition:`.5s .5s ${ease} transform, .5s .5s ${ease}`,
    transformOrigin: 'left center',
  }

  return {
    opacity: 0,
    color: colors.black,
    transform: 'translateX(10%)',
    fontSize: '1.9em',
    ...props.visible ? animation : {}
  }
})

const Dash = styled('div', props => {
  const visible = {
    transition: `.3s .9s ${ease} transform`,
    transform: 'none',
    transformOrigin: 'left center' 
  }

  return {
    transform: 'scaleX(0)',
    display: 'block',
    position: 'absolute',
    left: 0,
    bottom: '-1rem',
    height: '.7rem',
    width: '5rem',
    backgroundColor: props.blue ? colors.blue : colors.green,
    display: 'block',
    textTransform: 'none',
    ...props.visible ? visible : {},
  }
})

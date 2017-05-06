// @flow
import React from 'react'
import { styled } from 'styletron-react'
import type { SocialLink } from '../../lib/types'

import Mail from './IconMail'
import Mobile from './IconMobile'
import Twitter from './IconTwitter'
import Github from './IconGithub'
import Linkedin from './IconLinkedin'
import Hopwork from './IconHopwork'
import colors from '../../lib/colors' 

type Props = {
  links: SocialLink[]
}
class SocialLinks extends React.Component {
  props: Props 

  render() {
    const socialItems = this.props.links.reduce((acc, item) => {
      acc[item.name] = item
      return acc
    }, {})
    return (
      <List>
        <SmallItem><A href={socialItems.email.url}><Mail /></A></SmallItem>
        <SmallItem><A href={socialItems.mobile.url}><Mobile /></A></SmallItem>
        <SmallItem><A href={socialItems.twitter.url}><Twitter /></A></SmallItem>
        <SmallItem><A href={socialItems.linkedin.url}><Linkedin /></A></SmallItem>
        <SmallItem><A href={socialItems.github.url}><Github /></A></SmallItem>
        <BigItem><A href={socialItems.hopwork.url}><Hopwork /></A></BigItem>
      </List>
    )
  }
} 


const List = styled('ul', {
  lineHeight: 1.5,
  listStyleType: 'none',
  display: 'flex',
  flexWrap: 'wrap',
  margin: 0,  
  justifyContent: 'space-around', 
  paddingLeft: 0,
  color: colors.green,
})

const A = styled('a', { 
  color: colors.green,
  textDecoration: 'none',
  transition: '.25s ease color',
  ':visited': {
    color: colors.green, 
  },
  ':hover': {
    color: `${colors.blue} !important`
  }
}) 

const SmallItem = styled('li', {
  flex: '0 1 10%',
  margin: '.5rem 1rem',
  minWidth: '3rem',
  height: '3rem'
})

const BigItem = styled('li', {
  flex:'0 1 15%',
  margin: '0 1rem',
  minWidth: '8rem',
  
})

export default SocialLinks

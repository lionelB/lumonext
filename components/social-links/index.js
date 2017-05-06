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


class SocialLinks extends React.Component {
  props: { 
    links: SocialLink[]
  }
  render() {
    return (
      <List>
        <SmallItem><Mail /></SmallItem>
        <SmallItem><Mobile /></SmallItem>
        <SmallItem><Twitter /></SmallItem>
        <SmallItem><Linkedin /></SmallItem>
        <SmallItem><Github /></SmallItem>
        <BigItem><Hopwork /></BigItem>
      </List>
    )
  }
} 


const List = styled('ul', {
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  height: '3em',
  paddingLeft: 0,
  color: colors.green,
})

const SmallItem = styled('li', {
  flex: '0 0 auto',
})

const BigItem = styled('li', {
  flex:'0 0 auto',
})

export default SocialLinks

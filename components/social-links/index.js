import React from 'react'
import { styled } from 'styletron-react'

import Mail from './IconMail'
import Mobile from './IconMobile'
import Twitter from './IconTwitter'
import Github from './IconGithub'
import Linkedin from './IconLinkedin'
import Hopwork from './IconHopwork'

import colors from '../../lib/colors'

const socialLinks = props => (
  <List>
    <SmallItem><Mail /></SmallItem>
    <SmallItem><Mobile /></SmallItem>
    <SmallItem><Twitter /></SmallItem>
    <SmallItem><Linkedin /></SmallItem>
    <SmallItem><Github /></SmallItem>
    <BigItem><Hopwork /></BigItem>
  </List>
)



const List = styled('ul', {
  listStyleType: 'none',
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'stretch',
  justifyContent: 'space-around',
  height: '2em',
  paddingLeft: 0,
  color: colors.green,
})

const SmallItem = styled('li',  {
  flexBasis: 1,
  padding: '6px 0'
})

const BigItem = styled('li',  {
  flexBasis: 4,
})

export default socialLinks

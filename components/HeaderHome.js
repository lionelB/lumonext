// @flow
import React from "react"
import { styled } from 'styletron-react'

import Logo from './Logo'
import colors from '../lib/colors'
import { cx } from '../lib/utils'

export default () => (
  <Hero>
    <HeroWrapper>
      <HeroArtwork>
        <HeroLogo />
      </HeroArtwork>
      <HeroIdentity>
        <HeroTitleStyled>
          Lumographe
        </HeroTitleStyled>
        <HeroSubtitleStyled>
          Développement web &amp; mobile
        </HeroSubtitleStyled>
      </HeroIdentity>
    </HeroWrapper>
    <HeroAvatar>
      <Avatar src="/static/img/avatar-2x.jpg" alt="une photo de lionelb" />
    </HeroAvatar>
    <HeroBottom xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 20">
      <path fill="#fff" d="M0,18 C0,18 290,0 720,1 C1150,1 1440,18 1440,18 L1440,20 L0,20 L0,18 Z" />
    </HeroBottom>
  </Hero>
)
const Hero = styled('header', {
  background: `url(/static/img/stardust.gif) center center,
    linear-gradient(-180deg,${colors.heroGradient1} 0%, ${colors.heroGradient2} 93%, ${colors.heroGradient3} 100%)`,
  padding: '2em',
  position: 'relative',
  textAlign: 'center',
  '@media (max-width: 40em)': {
    padding: '0',  
  } 
})

const HeroWrapper = styled('div', {
    maxWidth: '90em',
    margin: '0 auto', 
})

const HeroArtwork = styled('div', {
  paddingTop: '41.964%',
  width: 'calc(100% - 1px)',
  background: 'url(/static/img/fond.svg) no-repeat',
  backgroundSize: 'contain',
  display: 'inline-block',
  position: 'relative',
  '@media (max-width: 40em)': {  
    backgroundSize: 'cover', 
    backgroundPosition: 'center center',
    paddingTop: '75%',
  } 
})

const HeroLogo = styled(Logo, {
  position: 'absolute',
  bottom: '0',
  left: '50%',
  width: '20.75%',
  transform: 'translate(-45%, -22%)',
  '@media (max-width: 40em)': {  
    width: '35%', 
    transform: 'translate(-45%, -30%)',
  } 
})

const HeroIdentity = styled('hgroup', {
  transform: 'translate(0, -1em)',
})

const HeroTitle = ({className, children}) => <h1 className= {cx(className, 'font-montserrat')}>{children}</h1>
const HeroTitleStyled = styled(HeroTitle, {
    margin: '0',
    marginTop: '.5em',
    fontSize: '2.8em',
    letterSpacing: '.1em',
    color: '#fff',
    lineHeight: 1,
    textTransform: 'uppercase',
    textShadow: '0px 2px 4px rgba(19,38,102,0.50)',
    '@media (max-width: 40em)': { 
      fontSize: '2em',
    } 
})

const HeroSubtitle = ({className, children}) => <h2 className= {cx(className, 'font-ebgaramond')}>{children}</h2>
const HeroSubtitleStyled = styled(HeroSubtitle, {
    margin: '0',
    fontWeight: '400',
    fontSize: '1.5em',
    letterSpacing: '.1em',
    lineHeight: '1',
    color: '#FFFFFF',
    textShadow: '0px 0px 3px #7DEDFF',
    '@media (max-width: 40em)': { 
      fontSize: '1em',
    }
})

const HeroAvatar = styled('div', {
  width: '8em',
  height: '8em',
  borderRadius: '50%',
  padding: `.4em`,
  margin: '0 auto -6em',
  backgroundColor: `${colors.gray}`,
  position: 'relative',
  zIndex: '2', 
  '@media (max-width: 40em)': { 
    marginBottom: 0,
    bottom: '-2em', 
    width: '10vh',
    height: '10vh', 
    padding: `.2em`,
  }
})
const Avatar = styled('img', {  
  width: '100%',
  borderRadius: '50%',
})

const HeroBottom = styled('svg', {
  position: 'absolute',
  width: '100%',
  bottom: '-1px',
  left: '0',
  display: 'block',
})


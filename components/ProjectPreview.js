import React from "react"
import {styled} from 'styletron-react'

import colors from './colors.js'
import ContentWrapper from './ContentWrapper'
import { cx } from '../utils'

const ProjectPreview  = ({project, lightTheme, bgColor}) => {
  return (
    <Section bgColor={ bgColor }>
      <ContentWrapper margin={0}>
        <DecoTitleFont bgColor={ bgColor }>{ project.title }</DecoTitleFont>
      </ContentWrapper>
      <ProjectBorder viewBox="0 0 1440 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 0v2L0 20V0h1440z" fill="#FFF" fillRule="evenodd" />
      </ProjectBorder>
      <ContentWrapper margin={'3.5rem'}>
        <H2>{ project.title }</H2>
        <P> { project.description } </P>
        <Img src={'/' + project.image} />
        <Client>
          <span>Client: </span>
          <ClientLogo src={'/' + project.client.logo } alt={ project.client.name } />
        </Client>
      </ContentWrapper>
      <ProjectBorder bottom viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg">
        <path d="M1440 30v5H0V0l1440 30z" fill="#FFF" fillRule="evenodd" />
      </ProjectBorder>
    </Section>
  )
}

const Section = styled('section', (props) => ({
  backgroundColor: props.bgColor || 'transparent',
  position: 'relative'
}))

const DecoTitle = ({className, children}) =>
  (<span className={cx(className, 'font-montserrat') }>{children}</span>)

const DecoTitleFont = styled(DecoTitle, (props) => ({
  userSelect: 'none',
  pointerEvents: 'none',
  color: props.bgColor || 'transparent',
  position: 'absolute',
  top: '-.65em',
  fontSize: '4em',
  transform: 'rotate(-1deg)',
  zIndex: 1
}))

const ProjectBorder = styled('svg', (props) => ({
  display: 'block',
  position: 'relative',
  top: props.bottom ? 'auto' : '-1px',
  bottom: props.bottom ? '-1px' : 'auto',
}))


const H2font = ({className, children}) => (
  <h2 className={ cx(className, 'font-montserrat') }>{ children }</h2>
)

const H2 = styled(H2font, {
  fontSize: '2.25em',
  color: colors.black,
})

const P = styled('p', {
  fontSize: '1.4em',
})

const Client = styled('div', {
  color: colors.gray,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center',
  marginTop: '2em',
  fontSize: '1.2em',
  fontWeight: 'bold',
  textTransform:'uppercase',
})

const ClientLogo = styled('img', {
  marginLeft: '1em',
  maxWidth: '10em'
})


const Img = styled('img', {
  marginTop: '2em',
  width: "100%",
  boxShadow: '15px 15px 50px rgba(51, 51, 51, .5)',
})

export default ProjectPreview

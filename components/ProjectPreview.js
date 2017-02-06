import React from "react"
import {styled} from 'styletron-react'

import colors from './colors.js'
import ContentWrapper from './ContentWrapper'
import { cx } from '../utils'

const ProjectPreview  = ({project, lightTheme}) => {
  const isLight = lightTheme;

  return (
    <section>
      <ContentWrapper>
        <H2>{ project.title }</H2>
        <P> { project.description } </P>
        <Img src={'/' + project.image} />
        <Client>
          <span>Client: </span>
          <ClientLogo src={'/' + project.client.logo } alt={ project.client.name } />
        </Client>
      </ContentWrapper>
    </section>
  )
}

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

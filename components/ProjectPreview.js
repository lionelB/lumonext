// @flow
import React from "react"
import { styled } from 'styletron-react' 
import ContentWrapper from './ContentWrapper'
import colors from '../lib/colors'
import { cx } from '../lib/utils'
import injectVisible from '../lib/scroll-reveal'
import type { Project } from '../lib/types'
import ImageReveal from '../lib/image-container'
import ProjectIntro from './ProjectIntro'

class ProjectPreview extends React.Component { 
  static defaultProps = { 
    first: false,
  }
   
  props: {
    project: Project,
    first: boolean,
    bgColor?: string,
  }
 
  render() {
    const { project, first, bgColor } = this.props 
    return (
      <Section bgColor={bgColor} margin={bgColor && '3rem'}>
        {
          bgColor &&
          <ProjectBorder viewBox="0 0 1440 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 0v2L0 20V0h1440z" fill="#FFF" fillRule="evenodd" />
          </ProjectBorder>
        }
        {
          bgColor &&
          <DecoWrapper>
            <DecoTitleFont bgColor={bgColor}>{project.title}</DecoTitleFont>
          </DecoWrapper>
        }
        
        <ProjectIntro title={project.title} description={project.description}  offsetBottom={25}/>
        <ContentWrapper maxWidth="80rem" margin="0">
          <ImageReveal url={project.image} offsetBottom={25} />
          <Client>
            <span>Client: </span>
            <ClientLogo src={'/' + project.client.logo} alt={project.client.name} />
          </Client>
        </ContentWrapper> 
        {
          bgColor && <ProjectBorder bottom viewBox="0 0 1440 35" xmlns="http://www.w3.org/2000/svg">
            <path d="M1440 30v5H0V0l1440 30z" fill="#FFF" fillRule="evenodd" />
          </ProjectBorder>
        }
      </Section>
    )
  }
}  

const Section = styled('section', (props) => ({
  backgroundColor: props.bgColor || 'transparent',
  lineHeight: 0,
  marginTop: props.margin || 0,
}))

const DecoWrapper = styled(ContentWrapper, {
  margin: '0 auto',
})

const DecoTitle = ({ className, children }) =>
  (<b className={cx(className, 'font-montserrat')}>{children}</b>)

const DecoTitleFont = styled(DecoTitle, (props) => ({
  userSelect: 'none',
  pointerEvents: 'none',
  color: props.bgColor,
  overflow: 'hidden',
  fontSize: '4em',
  whiteSpace: 'nowrap',
  transform: 'rotate(-1deg)',
  marginTop: '-.9em',
  display: 'inline-block',
  fontWeight: 400,
  textOverflow: 'ellipsis',
}))

const ProjectBorder = styled('svg', (props) => ({
  display: 'block',

  position: 'relative',
  top: props.bottom ? 'auto' : '-1px',
  bottom: props.bottom ? '-1px' : 'auto',
}))
 
const Client = styled('div', {
  color: colors.gray,
  display: 'flex',
  justifyContent: 'flex-end',
  alignItems: 'center', 
  fontSize: '1.2em',
  margin: '2rem 0 4rem',
  fontWeight: 'bold',
  textTransform: 'uppercase',
})

const ClientLogo = styled('img', {
  marginLeft: '.5em',
  marginRight: '.5em',
  maxWidth: '8em',
})
 
export default ProjectPreview

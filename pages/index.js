// @flow
import React from "react";
import {styled} from "styletron-react";
import Head from 'next/head'
import Link from 'next/link'
import fetch from 'isomorphic-fetch'

import Layout from '../components/Layout'
import Header from '../components/HeaderHome'
import TopBorder from '../components/TopBorder'
import Bio from '../components/Bio'
import Title from '../components/Title'
import ProjectPreview from '../components/ProjectPreview'
import Footer from '../components/Footer'

import {cx} from '../lib/utils'
import colors from '../lib/colors'

const {
  PORT,
  SERVER
} = 'undefined' !== typeof window ? window.env : process.env


export default class Home extends React.Component {
  static async getInitialProps({req, res, props}) {
    const data = await fetch(`http://${SERVER}:${PORT}/static/json/home.json`)
    const json = await data.json()
    return {projects: json.meta.projects, content: json.html, meta: json.meta};
  }

  render() {
    const { email, mobile, socialLinks } = this.props.meta

    const projects = this.props.projects.map((project, id) => {
      switch(id%2) {
        case 0:
          return <ProjectPreview key={id} project={project} />
        case 1:
          return <ProjectPreview key={id} project={project} bgColor={ colors.lightGray } />
        case 2:
          return <ProjectPreview key={id} project={project} />
      }
    })

    return (
      <Layout title="Lumographe - développement web & mobile">
        <TopBorder />
        <Header />
        <Bio content={ this.props.meta.bio } />
        <Title>
          <SectionTitleSmall>Quelques</SectionTitleSmall>
          <SectionTitleBigStyled>Travaux récents</SectionTitleBigStyled>
        </Title>
        <Projects>
          { projects }
        </Projects>
        <Footer email={ this.props.meta.email } socials={ socialLinks } mobile={ mobile } />
      </Layout>
    )
  }
}

const SectionTitleSmall = styled('div', {
  fontSize: '1.4em',
  color:colors.gray,
})
const SectionTitleBig = ({className, children}) =>
  (<div className={cx(className, 'font-montserrat') }>{children}</div>)

const SectionTitleBigStyled = styled(SectionTitleBig, {
  color: colors.black,
  fontSize: '1.9em',
})
const Projects = styled('div', {
  position: 'relative',
  backgroundColor: '#fff',
  marginBottom: '2em',
  zIndex: 1,
})

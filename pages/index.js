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
import {cx} from '../utils'
import colors from '../components/colors'

import Jelly from '../components/Jelly'

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
    const projects = this.props.projects.map((project, id) =>
      <ProjectPreview key={id} project={project} light-theme></ProjectPreview>
    )
    return (
      <Layout title="Lumographe - développement web & mobile">
        <TopBorder />
        <Header />
        <Bio content={ this.props.meta.bio } />

        <Title withBackground>
          <SectionTitleSmall>Quelques</SectionTitleSmall>
          <SectionTitleBigStyled>Travaux récents</SectionTitleBigStyled>
        </Title>
        { projects }
      </Layout>
    )
  }
}

const SectionTitleSmall = styled('div', {
  fontSize: '1.6em',
  color:colors.gray,
})
const SectionTitleBig = ({className, children}) =>
  (<div className={cx(className, 'font-montserrat') }>{children}</div>)

const SectionTitleBigStyled = styled(SectionTitleBig, {
  color: colors.black,
  fontSize: '2.1em',
})

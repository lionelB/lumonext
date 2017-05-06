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
import {SERVER, PORT} from "../lib/env"
import colors from '../lib/colors'

export default class Home extends React.Component {
  static async getInitialProps({req, res, props}) {
    const data = await fetch(`http://${SERVER || 'localhost'}:${PORT || '3000' }/static/json/home.json`)
    const json = await data.json()
    return {projects: json.meta.projects, content: json.html, meta: json.meta};
  }

  render() {
    const { email, mobile, socialLinks } = this.props.meta

    const projects = this.props.projects.map((project, id) => {
      switch(id%2) {
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
        <Title heading="Quelques Travaux récents" once offsetTop={-10} offsetBottom={25} />
        <Projects> 
          { projects }
        </Projects>
        <Footer email={ this.props.meta.email } socialNetworks={ socialLinks } mobile={ mobile } />
      </Layout>
    )
  }
}

const Projects = styled('div', {
  position: 'relative', 
  marginBottom: '2em', 
})

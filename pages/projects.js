import React from 'react'

import Layout from '../components/Layout'
import TopBorder from '../components/TopBorder'

export default class Project extends React.Component {
  static getInitialProps ({ req, query }) {
    return {id: query.id}
  }

  render() {
    return (
      <Layout title="Lumographe - développement web & mobile">
        <TopBorder />
        <h1> { this.props.id } </h1>
      </Layout>
    )
  }
}

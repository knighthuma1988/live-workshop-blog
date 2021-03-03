import React from 'react'
import Layout from '../components/Layout'
import { graphql } from "gatsby"

const Blog = ({ data }) => {
    return (
        <Layout pageTitle="Blog Page">
            {
                data.allFile.nodes.map(
                    node => (<li>{node.name}</li>) 
                )
            }
        </Layout>
    )
}

export const query = graphql`
    query {
  allFile(filter: {dir: {regex: "/blog$/"}}) {
    nodes {
      name
    }
  }
}`

export default Blog

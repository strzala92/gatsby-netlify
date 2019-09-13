import React, {Component} from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { graphql } from 'gatsby'
import "bootstrap/dist/css/bootstrap.min.css"
import "../index.scss"

import image from "../images/home-bg.jpg"

export default class Index extends Component {
  render(){
    const data = this.props.data;
    return(
      <Layout title={"Clean Blog"} siteTitle={"A Blog Theme by Start Bootstrap"} bg={image}>
    <SEO title="Home" />
    <h1>Aktualności</h1>
        {data.allWordpressPost.edges.map(({ node }) => (
          <div key={node.slug}>
            <Link to={node.slug} css={{ textDecoration: `none` }}>
              <h3>{node.title}</h3>
            </Link>
            <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
          </div>
        ))}
  </Layout>
    )
  }
}




export const pageQuery = graphql`
  query {
    allWordpressPost {
      edges {
        node {
          title
          excerpt
          slug
        }
      }
    }
  }
`
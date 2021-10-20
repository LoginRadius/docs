import { graphql } from "gatsby"
import React from "react"
import Layout from "../components/app"
import SEO from "../components/seo"

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title || `Title`

  return (
    <Layout
      location={location}
      title={siteTitle}
      searchIndex={data.siteSearchIndex.index}
    >
      <SEO />
    </Layout>
  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    siteSearchIndex {
      index
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`

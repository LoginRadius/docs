import React from "react"
import { Link, graphql } from "gatsby"
import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import * as containerStyles from "./blog-post.module.css"

const BlogPostTemplate = ({ data, location }) => {
  const post = data.markdownRemark
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const { previous, next } = data
  const pathArray = location.pathname.split("/")

  return (
    <div className="global-wrapper">
      <div id="root">
        <Header searchIndex={data.siteSearchIndex.index} />
        <Layout location={location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <section className={`detail-page py-72 ${containerStyles.container}`}>
            <div>
              <div className="sidebar">
                <div className="headings">Web APP</div>
                <div
                  dangerouslySetInnerHTML={{ __html: post.tableOfContents }}
                />
                <div className="get-in-touch">
                  <div className="headings">Get in Touch</div>
                  <ul>
                    <li>
                      <span className="icon">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="ionicon"
                          viewBox="0 0 512 512"
                        >
                          <title>Logo Stackoverflow</title>
                          <path d="M392 440V320h40v160H64V320h40v120z" />
                          <path d="M149.1 308.77l198.57 40.87 8.4-39.32-198.57-40.87zm26.27-93.12L359.22 300 376 263.76l-183.82-84.84zm50.95-89l156 127.78 25.74-30.52-156-127.78zM328 32l-33.39 23.8 120.82 160.37L448 192zM144 400h204v-40H144z" />
                        </svg>
                      </span>
                      <span>
                        <a href="#">Ask on StackOverflow</a>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="content">
                <ul className="breadcrumbs">
                  {pathArray.map((e, i) => (e ? <li key={`crumb-${e}`}> {e} </li> : null))}
                </ul>
                <div
                  dangerouslySetInnerHTML={{ __html: post.html }}
                  itemProp="articleBody"
                />
              </div>
            </div>
          </section>

          {/* <article
        className="blog-post"
        itemScope
        itemType="http://schema.org/Article"
      >
        <header>
          <h1 itemProp="headline">{post.frontmatter.title}</h1>
          <p>{post.frontmatter.date}</p>
        </header>
        <section
          dangerouslySetInnerHTML={{ __html: post.html }}
          itemProp="articleBody"
        />
        <hr />
        <footer>
          <Bio />
        </footer>
      </article> */}
          {/* <nav className="blog-post-nav">
        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </nav> */}
        </Layout>
        <Footer />
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug(
    $id: String!
    $previousPostId: String
    $nextPostId: String
  ) {
    siteSearchIndex {
      index
    }

    site {
      siteMetadata {
        title
      }
    }
    markdownRemark(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
      tableOfContents(heading: "")
    }
    previous: markdownRemark(id: { eq: $previousPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
    next: markdownRemark(id: { eq: $nextPostId }) {
      fields {
        slug
      }
      frontmatter {
        title
      }
    }
  }
`

import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import Footer from "../components/footer"
import TableOfContents from "../components/table-of-contents"
import TOCMdx from "../components/toc_mdx"
import * as containerStyles from "./blog-post.module.css"
import { MDXRenderer } from "gatsby-plugin-mdx"

const BlogPostTemplate = ({ data, location }) => {
  const isMdx = data.mdx || false
  const post = data.markdownRemark || data.mdx
  const siteTitle = data.site.siteMetadata?.title || `Title`
  const pathArray = location.pathname.split("/")
  const section = pathArray.length >= 2 ? pathArray[1] : undefined

  return (
    <div className="global-wrapper">
      <div id="root">
        <Header searchIndex={data.siteSearchIndex.index} />
        <Layout location={location} title={siteTitle}>
          <SEO
            title={post.frontmatter.title}
            description={post.frontmatter.description || post.excerpt}
          />
          <section className={`detail-page py-48 ${containerStyles.container}`}>
            <div>
              <div className={`sidebar ${containerStyles.sidebar}`}>
                <div className="headings">{section}</div>
                {isMdx ? (
                  <TOCMdx toc={post.tableOfContents} path={data.mdx.fields.slug} />
                ) : (
                  <TableOfContents html={post.tableOfContents} />
                )}
                <div className="get-in-touch">
                  <div className="headings">Get in Touch</div>
                  <ul>
                    <li>
                      <a
                        href="https://stackoverflow.com/questions/tagged/loginradius"
                        target="_blank"
                      >
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
                        <span>Ask on StackOverflow</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://loginradiusassist.freshdesk.com/customer/login"
                        target="_blank"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            className="css-10zhkrl"
                          >
                            <g
                              fill="none"
                              fillRule="evenodd"
                              stroke="currentColor"
                              strokeWidth="1.5"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.725 6.775a4.95 4.95 0 1 1 0 9.9 4.95 4.95 0 0 1 0-9.9z"
                              ></path>
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M11.725 1C17.648 1 22.45 5.801 22.45 11.725c0 5.923-4.802 10.725-10.725 10.725S1 17.648 1 11.725 5.801 1 11.725 1z"
                              ></path>
                              <path d="M15.29 8.16l4.213-4.213M8.16 15.29l-4.213 4.213M15.29 15.29l4.213 4.213M8.16 8.16L3.947 3.947"></path>
                            </g>
                          </svg>
                        </span>
                        <span>Support Ticket</span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://github.com/LoginRadius/docs"
                        target="_blank"
                      >
                        <span className="icon">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="ionicon"
                            viewBox="0 0 512 512"
                          >
                            <title>Logo Github</title>
                            <path d="M256 32C132.3 32 32 134.9 32 261.7c0 101.5 64.2 187.5 153.2 217.9a17.56 17.56 0 003.8.4c8.3 0 11.5-6.1 11.5-11.4 0-5.5-.2-19.9-.3-39.1a102.4 102.4 0 01-22.6 2.7c-43.1 0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1 1.4-14.1h.1c22.5 2 34.3 23.8 34.3 23.8 11.2 19.6 26.2 25.1 39.6 25.1a63 63 0 0025.6-6c2-14.8 7.8-24.9 14.2-30.7-49.7-5.8-102-25.5-102-113.5 0-25.1 8.7-45.6 23-61.6-2.3-5.8-10-29.2 2.2-60.8a18.64 18.64 0 015-.5c8.1 0 26.4 3.1 56.6 24.1a208.21 208.21 0 01112.2 0c30.2-21 48.5-24.1 56.6-24.1a18.64 18.64 0 015 .5c12.2 31.6 4.5 55 2.2 60.8 14.3 16.1 23 36.6 23 61.6 0 88.2-52.4 107.6-102.3 113.3 8 7.1 15.2 21.1 15.2 42.5 0 30.7-.3 55.5-.3 63 0 5.4 3.1 11.5 11.4 11.5a19.35 19.35 0 004-.4C415.9 449.2 480 363.1 480 261.7 480 134.9 379.7 32 256 32z" />
                          </svg>
                        </span>
                        <span>Edit on Github</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={`content ${containerStyles.content}`}>
                {/*<ul className="breadcrumbs">
                  {pathArray.map((e, i) =>
                    e ? <li key={`crumb-${e}`}> {e} </li> : null
                  )}
                </ul>
                  */}
                {post.html ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: post.html }}
                    itemProp="articleBody"
                  />
                ) : (
                  <MDXRenderer>{post.body}</MDXRenderer>
                )}
              </div>
            </div>
          </section>
        </Layout>
        <Footer />
      </div>
    </div>
  )
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($id: String!) {
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
        description
      }
      tableOfContents(heading: "")
    }
    mdx(id: { eq: $id }) {
      id
      excerpt(pruneLength: 160)
      body
      fields {
        slug
      }
      frontmatter {
        title
        description
      }
      tableOfContents
    }
  }
`

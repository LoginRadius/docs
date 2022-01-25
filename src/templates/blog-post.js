import React, { useState } from "react"
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
  const [isSubmit, setSubmit] = useState(false)

  return (
    <div className="global-wrapper">
      <div id="root">
        <Header />
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
                  <TOCMdx
                    toc={post.tableOfContents}
                    path={data.mdx.fields.slug}
                  />
                ) : (
                  <TableOfContents html={post.tableOfContents} />
                )}
                <div className="get-in-touch">
                  <div className="headings">Get in Touch</div>
                  <ul>
                    <li className="lr-commnity">
                      <a
                        href="https://community.loginradius.com/"
                        target="_blank"
                      >
                        <span className="icon">
                          <svg
                            version="1.1"
                            id="verticals"
                            x="0px"
                            y="0px"
                            viewBox="0 0 617.8 598.4"
                          >
                            <path
                              d="M309.7,2C139.4,2,1.5,140,1.5,310.2c0,131.8,82.7,244.1,199,288.2l26.1-72.5c-86.6-33.4-148-117.3-148-215.7
                              C78.5,182.5,182,79.1,309.7,79.1s231.1,103.5,231.1,231.2c0,98.3-61.4,182.3-148,215.7l26,72.5c116.3-44.1,199-156.5,199-288.2
                              C617.9,140,479.9,2,309.7,2z M252.5,453.3l26.1-72.6c-38.9-17.1-56.6-62.6-39.5-101.6s62.6-56.6,101.6-39.5s56.6,62.6,39.5,101.6
                              c-7.8,17.6-21.8,31.7-39.5,39.5l26.1,72.6c79.1-31.5,117.6-121.2,86-200.3s-121.2-117.6-200.3-86s-117.6,121.2-86,200.3
                              C182.2,406.6,213.3,437.7,252.5,453.3L252.5,453.3z"
                            />
                          </svg>
                        </span>
                        <span>Ask on Our Community</span>
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
                <hr></hr>
                <div className="response-block">
                  <div className="headings">
                    <h2>Was this article helpful?</h2>
                  </div>
                  {!isSubmit ? (
                    <div className="actions">
                      <a
                        onClick={() => setSubmit(true)}
                        className="ga_event btn btn-primary btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 512 512"
                        >
                          <title>Yes</title>
                          <polyline points="416 128 192 384 96 288" />
                        </svg>
                        Yes
                      </a>
                      <a
                        onClick={() => setSubmit(true)}
                        className="ga_event btn btn-outline btn-sm"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 512 512"
                        >
                          <title>No</title>
                          <line x1="368" y1="368" x2="144" y2="144" />
                          <line x1="368" y1="144" x2="144" y2="368" />
                        </svg>
                        No
                      </a>
                    </div>
                  ) : (
                    <div className="actions">
                      "Thank you for your feedback!"
                    </div>
                  )}
                  <p>
                    Have more questions?{" "}
                    <a
                      href="https://loginradiusassist.freshdesk.com/support/tickets/new"
                      target="_blank"
                    >
                      Submit a request
                    </a>
                  </p>
                </div>
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

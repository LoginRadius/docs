const escapeStringRegexp = require("escape-string-regexp")
const pagePath = `content`
const indexName = `Pages`
const pageQuery = `{
  pages: allMarkdownRemark(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        frontmatter {
          title,
          tags
        }
        headings {
          value
        }
        fields {
          slug
        }
      }
    }
  }
  mdxPages:allMdx(
    filter: {
      fileAbsolutePath: { regex: "/${escapeStringRegexp(pagePath)}/" },
    }
  ) {
    edges {
      node {
        id
        fields {
          slug
        }
        headings {
          value
        }
        frontmatter {
          title
          tags
        }
      }
    }
  }
}`
function pageToAlgoliaRecord({ node: { id, frontmatter, headings, fields, ...rest } }) {
  const _headings = headings.map(h => h.value);
  return {
    objectID: id,
    ...frontmatter,
    headings: _headings,
    ...fields,
    ...rest,
  }
}
const queries = [
  {
    query: pageQuery,
    transformer: ({ data }) => {
      const mdRecords = data.pages.edges.map(pageToAlgoliaRecord)
      const mdxRecords = data.mdxPages.edges.map(pageToAlgoliaRecord)
      return [...mdRecords, ...mdxRecords]
    },
    indexName,
    settings: {
      attributesForFaceting: [
        'headings',
      ]
    }
  },
]
module.exports = queries
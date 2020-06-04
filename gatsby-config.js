const themeOptions = require("./theme-options.js");
const remark = require('remark')
const visit = require('unist-util-visit')

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        ...themeOptions,
        root: __dirname,
        siteName: "",
        subtitle: "Quick Links",
        description: "Loginradius developer documentation",
        sidebarCategories: {
          null: ["index"],
          "Quick Start Guides": [
            "guides/web-nodejs",
            "guides/web-java",
            "guides/web-python",
            "guides/web-dotnet",
            "guides/web-golang",
            "guides/web-ror",
            "guides/web-php",
            'guides/mobile-android',
            'guides/mobile-ios'
          ],
          "Web SDK": [
            "sdk/overview",
            "sdk/html5",
            "sdk/asp",
            "sdk/java",
            "sdk/php",
            "sdk/node",
            "sdk/ruby",
            "sdk/python",
            "sdk/golang"
          ],
          "Mobile SDK": [
            'mobile-sdk/android-sdk',
            'mobile-sdk/ios-sdk'
          ],
          "How to": [
            "howto/dashboard-setup",
            "howto/email-smtp-config",
            "howto/email-templates",
            "howto/social-login",
            "howto/authentication-theme",
            "howto/work-with-sott",
            //"howto/implement-captcha",
          ],
          "FAQ": [
            "faq/api-credentials",
            "faq/troubleshooting",
            "faq/supported-browsers",
          ],
        },
      },
    },
    `gatsby-plugin-sass`,
    {
      resolve: `@gatsby-contrib/gatsby-plugin-elasticlunr-search`,
      options: {
        // Fields to index
        fields: [`title`, `description`],
        // How to resolve each field`s value for a supported node type
        resolvers: {
          // For any node of type MarkdownRemark, list how to resolve the fields` values
          MarkdownRemark: {
            excerpt: node => {
              const excerptLength = 136 // Hard coded excerpt length
              let excerpt = ''
              const tree = remark().parse(node.rawMarkdownBody)
              visit(tree, 'text', (node) => {
                excerpt += node.value
              })
              return excerpt.slice(0, excerptLength) + '...'
            },
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.summary,
            path: node => node.fields.slug,
          },
          Mdx: {
            title: node => node.frontmatter.title,
            description: node => node.frontmatter.summary,
            path: node => node.fields.slug,
          },
        },
      },
    },
  ],
  pathPrefix: `/docs/developer`,
};

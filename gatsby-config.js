const themeOptions = require("./theme-options.js");
const remark = require('remark')
const visit = require('unist-util-visit')
require("dotenv").config({ path: `${__dirname}/.env` })

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
        gaTrackingId: process.env.GA_TRACKING_ID,
        sidebarCategories: {
          null: ["index"],
          "Quick Start Guides": [
            "guides/idx-overview",
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
            "sdk-libraries/overview",
            "sdk-libraries/html5-library",
            "sdk-libraries/asp-net-library",
            "sdk-libraries/java-library",
            "sdk-libraries/php-library",
            "sdk-libraries/node-js-library",
            "sdk-libraries/ruby-library",
            "sdk-libraries/python-library",
            "sdk-libraries/golang-library"
          ],
          "Mobile SDK": [
            'mobile-sdk-libraries/android-library',
            'mobile-sdk-libraries/ios-library'
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

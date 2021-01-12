const themeOptions = require("./theme-options.js");
const remark = require("remark");
const visit = require("unist-util-visit");
require("dotenv").config({ path: `${__dirname}/.env` });

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-apollo-docs",
      options: {
        ...themeOptions,
        root: __dirname,
        siteName: "LoginRadius Developer Docs",
        baseUrl: "https://www.l0oginradius.com",
        subtitle: "",
        description: "",
        // gaTrackingId: process.env.GA_TRACKING_ID,
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
            "guides/mobile-android",
            "guides/mobile-ios",
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
            "sdk-libraries/golang-library",
          ],
          "Mobile SDK": [
            "mobile-sdk-libraries/android-library",
            "mobile-sdk-libraries/ios-library",
            "mobile-sdk-libraries/react-native-library",
          ],
          "Plugins": [
            'plugin/wordpress'
          ],
          "How to": [
            "howto/dashboard-setup",
            "howto/manage-email-password-login",
            "howto/social-login",
            "howto/manage-phone-login",
            "howto/manage-passwordless-login",
            "howto/manage-communication-settings",
            "howto/web-sso",
            "howto/authentication-theme",
            "howto/advanced-editor",
            "howto/work-with-sott",
            "howto/user-management",
            "howto/migrate-user-data",
            "howto/setup-team-management",
            "howto/handle-token",
          ],
          "Security": [
            "security/google-recaptcha",
            "security/brute-force-lockout",
            "security/password-policy",
            "security/two-factor-authentication",
            "security/session-management",
          ],
          "Concepts": [
            "concepts/idx-overview",
          ],
          'API Reference': [
            '[API Reference](https://www.loginradius.com/docs/developer/api/)'
          ],
          "FAQ": [
            "faq/api-credentials",
            "faq/troubleshooting",
            "faq/supported-browsers",
          ],
        },
        githubRepo: "LoginRadius/docs",
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: process.env.GA_TRACKING_ID,
      },
    },
    {
      resolve: "gatsby-plugin-google-tagmanager",
      options: {
        id: process.env.GOOGLE_TAGMANAGER_ID,
  
        // Include GTM in development.
        //
        // Defaults to false meaning GTM will only be loaded in production.
        includeInDevelopment: false,
  
        // datalayer to be set before GTM is loaded
        // should be an object or a function that is executed in the browser
        //
        // Defaults to null
        //defaultDataLayer: { platform: "gatsby" },
  
        // Specify optional GTM environment details.
        //gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_AUTH_STRING",
        //gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIRONMENT_PREVIEW_NAME",
        //dataLayerName: "YOUR_DATA_LAYER_NAME",
  
        // Name of the event that is triggered
        // on every Gatsby route change.
        //
        // Defaults to gatsby-route-change
        //routeChangeEventName: "YOUR_ROUTE_CHANGE_EVENT_NAME",
      },
    },
    {
      resolve: `gatsby-plugin-hotjar`,
      options: {
        includeInDevelopment: true, // optional parameter to include script in development
        id: process.env.HOTJAR_ID,
        sv: process.env.HOTJAR_SNIPPET_VERSION,
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
            excerpt: (node) => {
              const excerptLength = 136; // Hard coded excerpt length
              let excerpt = "";
              const tree = remark().parse(node.rawMarkdownBody);
              visit(tree, "text", (node) => {
                excerpt += node.value;
              });
              return excerpt.slice(0, excerptLength) + "...";
            },
            title: (node) => node.frontmatter.title,
            description: (node) => node.frontmatter.summary,
            path: (node) => node.fields.slug,
          },
          Mdx: {
            title: (node) => node.frontmatter.title,
            description: (node) => node.frontmatter.summary,
            path: (node) => node.fields.slug,
          },
        },
      },
    },
  ],
  pathPrefix: `/docs/developer`,
};

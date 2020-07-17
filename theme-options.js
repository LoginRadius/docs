const navConfig = {
  "Quick Start": {
    url: "/",
    description:
      "A quick way to implement the authentication mechanism in your application",
    omitLandingPage: true,
    isExternal: false,
  },
  "API Reference": {
    url:
      "https://www.loginradius.com/docs/developer/api/",
    description: "Reference of all the REST APIs which you can use",
    isExternal: true,
  },
  "How to": {
    url: "/howto/email-smtp-config/",
    description:
      "Once you are finished with basic authentication, there are other things to add in your application",
    isExternal: false,
  },
  FAQ: {
    url: "/faq/api-credentials/",
    description:
      "List of all the nitty-gritty questions you may encounter during your implimentation",
    isExternal: false,
  },
};

const footerNavConfig = {
  Blog: {
    href: "https://www.loginradius.com/engineering/blog/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  Contribute: {
    href: "https://github.com/LoginRadius/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  Dashboard: {
    href: "https://dashboard.loginradius.com/",
    target: "_blank",
    rel: "noopener noreferrer",
  },
};

module.exports = {
  // siteName: 'Apollo Docs',
  // pageTitle: 'Apollo GraphQL Docs',
  // menuTitle: 'Apollo Platform',
  // gaTrackingId: 'UA-74643563-13',
  // algoliaApiKey: '768e823959d35bbd51e4b2439be13fb7',
  // algoliaIndexName: 'apollodata',
  // baseUrl: 'https://www.apollographql.com',
  // twitterHandle: 'apollographql',
  // spectrumHandle: 'apollo',
  // youtubeUrl: 'https://www.youtube.com/channel/UC0pEW_GOrMJ23l8QcrGdKSw',
  // logoLink: 'https://www.apollographql.com/docs/',
  // baseDir: 'docs',
  // contentDir: 'source',
  navConfig,
  footerNavConfig,
};

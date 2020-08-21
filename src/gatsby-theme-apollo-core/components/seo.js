import PropTypes from "prop-types";
import React from "react";
import { Helmet } from "react-helmet";

import defaultImg from "../../../static/preview.svg";

import { withPrefix } from "gatsby";

export default function SEO(props) {
  const { title, description, siteName, twitterCard, children } = props;
  return (
    <Helmet>
      <title>{title}</title>
      <link rel="icon" href={withPrefix("/favicon.png")} />

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={defaultImg} />
      <meta property="og:site_name" content={siteName} />

      <meta property="twitter:card" content={twitterCard} />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta property="twitter:image" content={defaultImg} />

      {children}
    </Helmet>
  );
}

SEO.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  siteName: PropTypes.string.isRequired,
  twitterCard: PropTypes.string,
  children: PropTypes.node,
};

SEO.defaultProps = {
  twitterCard: "summary_large_image",
};

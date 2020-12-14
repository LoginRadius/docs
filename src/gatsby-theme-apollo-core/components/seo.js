import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

export default function SEO(props) {
    const { title, summary, siteName, twitterCard, children, favicon } = props;
    return (
        <Helmet>
            <title>{title}</title>
            <meta property="description" content={summary} />
            <meta property="og:title" content={title} />
            <meta property="og:site_name" content={siteName} />
            <meta property="og:description" content={summary} />
            <meta name="twitter:card" content={twitterCard} />
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={summary} />
            <link rel="icon" href={favicon} />
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
    favicon: PropTypes.string
};

SEO.defaultProps = {
    twitterCard: 'summary',
    favicon: 'https://apollographql.com/favicon.ico'
};

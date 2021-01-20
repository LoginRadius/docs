import PropTypes from 'prop-types';
import React from 'react';
import styled from '@emotion/styled';
// import { colors } from 'gatsby-theme-apollo-core';
import utils from "../utils";

import Developer from "../../components/developer.js"
import Pro from "../../components/pro.js"

const Heading = styled.h1({
  ':not(:last-child)': {
    marginBottom: 8
  }
});

// const Subheading = styled.h3({
//   color: colors.text2
// });

export default function PageHeader(props) {

  if (utils.developerDocs.includes(props.title)) {
    return (
      <div className="header-wrapper" key="with_developer">
        <Developer><Heading>{props.title}</Heading></Developer>
      </div>
    );
  } else if (utils.premiumDocs.includes(props.title)) {
    return (
      <div className="header-wrapper" key="with_premium">
        <Pro><Heading>{props.title}</Heading></Pro>
      </div>
    );
  } else {
    return (
      <div className="header-wrapper" key="without_premium">
        <Heading>{props.title}</Heading>
        {/* {props.description && <Subheading>{props.description}</Subheading>} */}
      </div>
    );
  }
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string
};

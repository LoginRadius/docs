import React from "react";
import styled from "@emotion/styled";
import { IconProceed } from "@apollo/space-kit/icons/IconProceed";
import { breakpoints } from "gatsby-theme-apollo-core";

const Container = styled.div({
  display: "flex",
  flexShrink: 0,
  width: 240,
  [breakpoints.lg]: {
    width: "auto",
    marginRight: 0,
  },
  [breakpoints.md]: {
    display: "none",
  },
});

const StyledLink = styled.a({
  display: "flex",
  alignItems: "center",
  lineHeight: 2,
  textDecoration: "none",
  color: "#008ecf",
});

const StyledIcon = styled(IconProceed)({
  height: "0.75em",
  marginLeft: "0.5em",
});

export default function HeaderButton() {
  return (
    <Container>
      <StyledLink
        href="https://dashboard.loginradius.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Go To Dashboard
        <StyledIcon weight="thin" />
      </StyledLink>
    </Container>
  );
}

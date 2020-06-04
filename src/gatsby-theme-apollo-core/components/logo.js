import React from "react";
import styled from "@emotion/styled";

import { withPrefix } from "gatsby";

const Wrapper = styled.div({
  display: "flex",
});

export default function Logo() {
  return (
    <Wrapper>
      <img
        style={{ width: "228px" }}
        src={withPrefix("/lr-logo.svg")}
        alt={"logo"}
      />
    </Wrapper>
  );
}

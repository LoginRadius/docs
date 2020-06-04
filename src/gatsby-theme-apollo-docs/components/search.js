/* global docsearch */
import { css } from "@emotion/core";
import styled from "@emotion/styled";
import { Index } from "elasticlunr";
import { Link } from "gatsby";
import { breakpoints, colors } from "gatsby-theme-apollo-core";
import { position, transparentize } from "polished";
import React, { Component, Fragment } from "react";
import headerStyles from "./search.module.scss";

const borderRadius = 5;
const border = `1px solid ${colors.text3}`;

const boxShadowColor = transparentize(0.9, "black");
export const boxShadow = `${boxShadowColor} 0 2px 12px`;
const Container = styled.div({
  flexGrow: 1,
  marginRight: 40,
  color: colors.text2,
  position: "relative",
  zIndex: 1,
  [breakpoints.md]: {
    marginRight: 0,
  },
});

const StyledInput = styled.input((props) => ({
  width: "100%",
  height: 42,
  padding: 0,
  paddingLeft: 16,
  border,
  borderRadius,
  boxShadow: props.resultsShown ? boxShadow : "none",
  fontSize: 16,
  background: "white",
  outline: "none",
  appearance: "none",
}));

const Overlay = styled.div(
  position("fixed", 0),
  (props) =>
    !props.visible && {
      opacity: 0,
      visibility: "hidden",
    },
  {
    backgroundColor: transparentize(0.5, colors.text2),
    transitionProperty: "opacity, visibility",
    transitionDuration: "150ms",
    transitionTimingFunction: "ease-in-out",
    zIndex: 1,
  }
);

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ``,
      results: [],
      focused: false,
    };
  }

  _shouldClose = false

  componentDidMount() {
    document.body.addEventListener("click", this.bodyClickHandler);
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.bodyClickHandler);
  }

  render() {
    const { query, results, focused } = this.state;
    const resultsShown = focused && query.trim();
    return (
      <Fragment
        className={`${headerStyles.searchWrapper} ${
          results.length ? headerStyles.searchList : ""
        }`}
      >
        <Overlay visible={resultsShown} />
        <Container
          onMouseOver={() => (this._shouldClose = false)}
          onMouseLeave={() => (this._shouldClose = true)}
        >
          <StyledInput
            id="input"
            onChange={this.search}
            onFocus={() => this.setState({ focused: true })}
            onBlur={() => this.setState({ focused: false })}
            value={query}
            placeholder={`Search in LogonRadius Docs`}
            resultsShown={resultsShown}
          />
          {results.length ? (
            <ul className={headerStyles.searchlist}>
              {results.map((page) => (
                <li key={page.id}>
                  <Link
                    to={page.path}
                    onClick={() => this.setState({ query: "", results: [] })}
                  >
                    <strong>{page.title}</strong>
                    {page.description || page.excerpt}
                  </Link>
                </li>
              ))}
            </ul>
          ) : null}
        </Container>
      </Fragment>
    );
  }

  bodyClickHandler = () => {
    if (this._shouldClose) {
      this.setState({
        query: ``,
        results: [],
        focused: false,
      });
    }
  };

  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
        Index.load(this.props.searchIndex);

  search = (evt) => {
    const query = evt.target.value;
    this.index = this.getOrCreateIndex();
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        .search(query, { expand: true })
        // Map over each ID and return the full document
        .map(({ ref }) => this.index.documentStore.getDoc(ref)),
    });
  };
}

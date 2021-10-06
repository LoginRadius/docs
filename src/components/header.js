import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import Logo from "../../static/images/logo.svg"
// Header component
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      toggleOpen: false,
      cursor: -1,
    }
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  _shouldClose = false

  _toggleSearch = () => {
    const { toggleOpen } = this.state
    if (toggleOpen) {
      this.setState({
        toggleOpen: false,
        results: [],
        query: "",
      })
    } else {
      document.getElementById("search").focus()
      this.setState({
        toggleOpen: true,
      })
    }
  }

  _handleKeyDown(e) {
    const { cursor, results } = this.state
    // arrow up/down button should select next/previous list element
    if (e.keyCode === 38 && cursor >= 0) {
      e.preventDefault();
      this.setState( prevState => ({
        cursor: prevState.cursor - 1
      }))
    } else if (e.keyCode === 40 && cursor < results.length - 1) {
      e.preventDefault();
      this.setState( prevState => ({
        cursor: prevState.cursor + 1
      }))
    } else if (e.keyCode === 13) {
      e.preventDefault();
      if (cursor >= 0) {
        const item = document.getElementById("results").children[cursor];
        item.children[0].children[0].click();
      }
    }
  }

  bodyClickHandler = () => {
    if (this._shouldClose) {
      this.setState({
        toggleOpen: false,
        results: [],
        query: "",
      })
    }
  }

  componentDidMount() {
    document.body.addEventListener("click", this.bodyClickHandler)
  }

  componentWillUnmount() {
    document.body.removeEventListener("click", this.bodyClickHandler)
  }

  render() {
    const { results, toggleOpen, cursor } = this.state
    return (
      <header>
        <div>
          <div className="logo">
            <Link to="/">
              <img src={Logo} width="228" />
            </Link>
          </div>
          <div className="right-section">
            <div
              className="search "
              onMouseOver={() => (this._shouldClose = false)}
              onMouseLeave={() => (this._shouldClose = true)}
            >
              <form>
                <input
                  type="text"
                  placeholder="Search documentation..."
                  onChange={this.search}
                  id={"search"}
                  onKeyDown={this._handleKeyDown}
                />
                <a onClick={this._toggleSearch}></a>
                {results.length ? (
                  <ul style={{overflow: "auto", maxHeight: 467}} id="results">
                    {results.slice(0, 10).map((page, ind) => (
                      <li style={cursor === ind ? {backgroundColor: "red"} : undefined} key={page.id} tabIndex="1" className={cursor === ind ? "active" : null}>
                        <div>
                          <Link to={page.path}>{page.title}</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </form>
            </div>
            <div className="authentication-buttons">
              <a href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login" target="_blank"  className="btn btn-secondary">
                Login
              </a>
              <a href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register" target="_blank"  className="btn btn-primary">
                Free Sign Up
              </a>
            </div>
          </div>
        </div>
      </header>
    )
  }
  getOrCreateIndex = () =>
    this.index
      ? this.index
      : // Create an elastic lunr index and hydrate with graphql query results
      this.props.searchIndex
      ? Index.load(this.props.searchIndex)
      : 0

  search = evt => {
    const query = evt.target.value
    this.index = this.getOrCreateIndex()
    this.setState({
      query,
      // Query the index with search string to get an [] of IDs
      results: this.index
        ? this.index
            .search(query, { expand: true })
            // Map over each ID and return the full document
            .map(({ ref }) => this.index.documentStore.getDoc(ref))
        : [],
    })
  }
}

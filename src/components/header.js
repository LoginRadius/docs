import React, { Component } from "react"
import { Index } from "elasticlunr"
import { Link } from "gatsby"
import Search from "./search"
import Logo from "../../public/images/logo.svg"
// Header component
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      query: ``,
      results: [],
      toggleOpen: false,
    }
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
    const { results, toggleOpen } = this.state
    return (
      <header>
        <div>
          <div className="logo">
            <Link to="/">
              <img src={Logo} width="228" />
            </Link>
          </div>
          <div className="right-section">
            <Search classNames="search " />
            {/* <div
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
                />
                <a onClick={this._toggleSearch}></a>
                {results.length ? (
                  <ul>
                    {results.slice(0, 4).map(page => (
                      <li key={page.id}>
                        <div>
                          <Link to={page.path}>{page.title}</Link>
                        </div>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </form>
            </div> */}
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

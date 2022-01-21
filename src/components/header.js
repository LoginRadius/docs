import React, { Component } from "react"
import { Link } from "gatsby"
import Logo from "../../public/images/logo.svg"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]
// Header component
export default class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showBanner: true,
    }
  }

  removeBanner = () => {
    this.setState({ showBanner: !this.state.showBanner })
  }

  render() {
    const { showBanner } = this.state
    return (
      <React.Fragment>
        {showBanner && (
          <div className="top-strip">
            The following documentation is applicable to <b>Free</b>,{" "}
            <b>Developer</b>, and <b>Developer Pro</b> plans. For
            documentation related to the enterprise plan, please{" "}
            <a href="https://www.loginradius.com/docs/" target="_blank">
              click here
            </a>
            .<button onClick={() => this.removeBanner()}></button>
          </div>
        )}
        <header>
          <div>
            <div className="logo">
              <Link to="/">
                <img src={Logo} width="228" />
              </Link>
            </div>
            <div className="right-section">
              <Search indices={searchIndices} />
              <div className="authentication-buttons">
                <a
                  href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login"
                  target="_blank"
                  className="btn btn-secondary"
                >
                  Login
                </a>
                <a
                  href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register"
                  target="_blank"
                  className="btn btn-primary"
                >
                  Free Sign Up
                </a>
              </div>
            </div>
          </div>
        </header>
      </React.Fragment>
    )
  }
}

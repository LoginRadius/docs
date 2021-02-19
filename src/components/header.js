import React from "react"
import { Link } from "gatsby"

const Header = () => {
  return (
    <header>
      <div>
        <div>
          <div className="logo">
            <Link to="/">
              <img src="images/logo.svg" width="228" />
            </Link>
          </div>
          <div className="search hide-mobile">
            <form>
              <input type="text" placeholder="Search documentation..." />
            </form>
          </div>
        </div>
        <div className="authentication-buttons">
          <a href="#" className="btn btn-secondary">
            Login
          </a>
          <a href="#" className="btn btn-primary">
            Sign up for free
          </a>
        </div>
        <div className="search hide-desktop">
          <form>
            <input type="text" placeholder="Search documentation..." />
          </form>
        </div>
      </div>
    </header>
  )
}

export default Header

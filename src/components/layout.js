import React from "react"
import { Link } from "gatsby"
import Middle from "./middle"
const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <div>
          <div>
            <div class="logo">
              <img src="assets/images/logo.svg" width="228" />
            </div>
            <div class="search">
              <form>
                <input type="text" placeholder="Search documentation..." />
              </form>
            </div>
          </div>
          <div class="authentication-buttons">
            <a href="#" class="btn btn-secondary">Login</a>
            <a href="#" class="btn btn-primary">Sign up for free</a>
          </div>
        </div>
      //<h1 className="main-heading"><Link to="/">{title}</Link></h1>
    )
  } else {
    header = (
      // <Link className="header-link-home" to="/">
      //   {title}
      // </Link>
      <div>
          <div>
            <div class="logo">
              <img src="assets/images/logo.svg" width="228" />
            </div>
            <div class="search">
              <form>
                <input type="text" placeholder="Search documentation..." />
              </form>
            </div>
          </div>
          <div class="authentication-buttons">
            <a href="#" class="btn btn-secondary">Login</a>
            <a href="#" class="btn btn-primary">Sign up for free</a>
          </div>
        </div>
    )
  }
//<main>{children}</main>
  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header className="global-header">{header}</header>
      <Middle />
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.com">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout

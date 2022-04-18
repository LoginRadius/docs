import { Link } from "gatsby"
import React, { useCallback, useEffect, useState } from "react"
import Logo from "../../public/images/logo.svg"
import Search from "./search"
const searchIndices = [{ name: process.env.GATSBY_ALGOLIA_INDEX, title: process.env.GATSBY_ALGOLIA_INDEX }]
// Header component

const Header = () => {
  const [showBanner, toggleBanner] = useState(true)
  let sY = 0;
  if (typeof window !== "undefined") {
    sY = window.scrollY
  }
  const [y, setY] = useState(sY)
  const [scrollClass, setClass] = useState("")

  const handleNavigation = useCallback(
    e => {
      const currWin = e.currentTarget
      if (y > currWin.scrollY) {
        setClass("")
      } else if (y < currWin.scrollY) {
        setClass("scrollUp")
      }
      setY(currWin.scrollY)
    },
    [y]
  )

  useEffect(() => {
    if (typeof window !== "undefined") {
      setY(window.scrollY)
    }
    window.addEventListener("scroll", handleNavigation)

    return () => {
      window.removeEventListener("scroll", handleNavigation)
    }
  }, [handleNavigation])

  return (
    <React.Fragment>
      {showBanner && (
        <div className="top-strip">
          The following documentation is applicable to <b>Free</b>,{" "}
          <b>Developer</b>, and <b>Developer Pro</b> plans. For documentation
          related to the enterprise plan, please{" "}
          <a href="https://www.loginradius.com/docs/" target="_blank">
            click here
          </a>
          .
          {/* <button onClick={() => toggleBanner(false)}></button> */}
        </div>
      )}
      <header className={scrollClass}>
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

export default Header

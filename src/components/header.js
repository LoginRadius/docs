import { Link } from "gatsby"
import React, { useCallback, useEffect, useState } from "react"
import Logo from "../../public/images/logo.svg"
import Search from "./search"
const searchIndices = [{ name: `Pages`, title: `Pages` }]
// Header component

const Header = () => {
  const [showBanner, toggleBanner] = useState(true)
  const [y, setY] = useState(window.scrollY)
  const [scrollClass, setClass] = useState("")

  const handleNavigation = useCallback(
    e => {
      const window = e.currentTarget
      if (y > window.scrollY) {
        setClass("")
      } else if (y < window.scrollY) {
        setClass("scrollUp")
      }
      setY(window.scrollY)
    },
    [y]
  )

  useEffect(() => {
    setY(window.scrollY)
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
          .<button onClick={() => toggleBanner(false)}></button>
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

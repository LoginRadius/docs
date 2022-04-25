import { Link } from "gatsby"
import React, { useCallback, useEffect, useState } from "react"
import Logo from "../../public/images/logo.svg"
import Search from "./search"
import Modal from "react-modal"
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
  const [openModel, setOpenModel] = useState(true)
   const closePopup = () => {
    var expires = new Date()
    expires = expires.setHours(expires.getHours() + 24)
    localStorage.setItem("docsModelShown", expires)
    setOpenModel(false)
  }

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
    let modelShown = localStorage.getItem("docsModelShown")
    if (modelShown && modelShown > new Date()) {
      setOpenModel(false)
    }
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
              <Modal id="doc-popup" isOpen={openModel} ariaHideApp={false}>
          <div className="card no-shadow p-0 doc-popup">
            <a
              className="close"
              onClick={() => {
                closePopup()
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </a>
            <div className="popup-content">
              <h2>You are viewing Developer CIAM documents.</h2>
              <a href="https://www.loginradius.com/docs/" target="_blank">
                Move to Enterprise CIAM
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M15 10.8333V15.8333C15 16.2754 14.8244 16.6993 14.5118 17.0118C14.1993 17.3244 13.7754 17.5 13.3333 17.5H4.16667C3.72464 17.5 3.30072 17.3244 2.98816 17.0118C2.67559 16.6993 2.5 16.2754 2.5 15.8333V6.66667C2.5 6.22464 2.67559 5.80072 2.98816 5.48816C3.30072 5.17559 3.72464 5 4.16667 5H9.16667"
                    stroke="#008ECF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12.1665 3H17.1665V8"
                    stroke="#008ECF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M8 12.1667L17.1667 3"
                    stroke="#008ECF"
                    stroke-width="1.5"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </a>
              <a
                onClick={() => {
                  closePopup()
                }}
              >
                Continue to Developer CIAM
              </a>
            </div>
          </div>
        </Modal>
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

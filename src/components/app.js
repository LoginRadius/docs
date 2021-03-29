import React from "react"
import Header from "./header"
import Container from "./container"
import Footer from "./footer"
const Layout = ({ location, title, children ,searchIndex}) => {
//  const rootPath = `${__PATH_PREFIX__}/`
//  const isRootPath = location.pathname === rootPath

  return (
    <div className="global-wrapper" >
      {children}
      <div id="root">
        <Header searchIndex={searchIndex}/>
        <Container />
        <Footer />
      </div>
    </div>
  )
}

export default Layout

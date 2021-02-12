
import GatsbyImage from "gatsby-image"
import React from "react"
import {Link} from "gatsby"
const Footer =() => { 
    return (
        <footer className="footer">
<div>
  <div>Copyright 2021 LoginRadius Inc.</div>
  <div>
    <Link to="/terms-of-use">Terms of use</Link> | <Link to="/privacy-policy">Privacy Policy</Link> |
    <Link to="/contact-us">Contact us</Link>
  </div>
</div>
</footer> )
}

export default Footer 
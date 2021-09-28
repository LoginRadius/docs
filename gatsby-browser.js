// custom typefaces
import "typeface-montserrat"
import "typeface-merriweather"
// normalize CSS across browsers
import "./src/normalize.css"
// custom CSS styles
//import "./src/style.css"
import "./static/css/base.min.css"

import "./src/tempstyle.css"

// Highlighting for code blocks
import "prismjs/themes/prism.css"

import "prismjs/plugins/command-line/prism-command-line.css"

import React from "react"
import { DocsProvider } from "./src/context/docsContext"

export const wrapRootElement = ({ element }) => (
  <DocsProvider>{element}</DocsProvider>
)

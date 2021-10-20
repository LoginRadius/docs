import React from "react"

import DocsContext from "../context/docsContext"

export const Tab = ({ children }) => {
  return <div class="tab tab-active">{children}</div>
}

export const TabContainer = ({ tabs, tabheaders }) => {
  
  return (
    <DocsContext.Consumer>
      {docs => (
        <div class="tab-container">
          <div class="tab-menu">
            <ul>
              {tabheaders.map((tabName, i) => (
                <li>
                  <a
                    onClick={() => docs.toggleTab(i)}
                    className={`tab-a ${docs.tab === i ? "active-a" : ""}`}
                    key={`tabhead-${i}`}
                  >
                    {tabName}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {tabs.map((tab, i) => (docs.tab === i ? tab : null))}
        </div>
      )}
    </DocsContext.Consumer>
  )
}

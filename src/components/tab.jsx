import React, { useState } from "react"

export const Tab = ({ children }) => {
  return <div class="tab tab-active">{children}</div>
}

export const TabContainer = ({ tabs, tabheaders }) => {
  const [active, setActive] = useState(0)
  return (
    <div class="tab-container">
      <div class="tab-menu">
        <ul>
          {tabheaders.map((tabName, i) => (
            <li>
              <a
                onClick={() => setActive(i)}
                class="tab-a active-a"
                key={`tabhead-${i}`}
              >
                {tabName}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {tabs.map((tab, i) => (i === active ? tab : null))}
    </div>
  )
}

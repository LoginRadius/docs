import React, { useEffect, useState } from "react"

const TOCMdx = ({ toc, path }) => {
  const [activeId, setActive] = useState("")
  const [tocEle, setToc] = useState(<></>)
  const renderToc = (tocItems, path, depth) => {
    if (tocItems.items) {
      return (
        <ul>
          {tocItems.items.map((item, i) => (
            <>
              <li>
                <a
                  key={`${i}_${depth}`}
                  href={`${path}${item.url}`}
                  onClick={() => setActive(`${i}_${depth}`)}
                  className={activeId === `${i}_${depth}` ? "active" : ""}
                >
                  {item.title}
                </a>
              </li>
              {item.items && <ul>{renderToc(item, path, depth + 1)}</ul>}
            </>
          ))}
        </ul>
      )
    }
    return null
  }

  useEffect(() => {
    setToc(renderToc(toc, path, 1))
  }, [activeId])
  return <div className="table-of-contents"> {tocEle} </div>
}

export default TOCMdx

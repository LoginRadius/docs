import React, { useEffect, useState } from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links"

const TOCMdx = ({ toc, path }) => {
  const [activeId, setActive] = useState("")
  const [tocEle, setToc] = useState(<></>)
  const eleIds = []
  const renderToc = (tocItems, path, depth) => {
    if (tocItems.items) {
      return (
        <ul>
          {tocItems.items.map((item, i) => {
            eleIds[item.url.replace("#", "")] = `${i}_${depth}`
            return (
              <>
                <li>
                  <p>
                    <AnchorLink
                      to={`${path}${item.url}`}
                      title={item.title}
                      key={`${i}_${depth}`}
                      id={`${i}_${depth}`}
                      onClick={() => setActive(`${i}_${depth}`)}
                      className={activeId === `${i}_${depth}` ? "active" : ""}
                    />
                  </p>
                  {item.items && <ul>{renderToc(item, path, depth + 1)}</ul>}
                </li>
              </>
            )
          })}
        </ul>
      )
    }
    return null
  }

  useEffect(() => {
    setToc(renderToc(toc, path, 1))

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActive(eleIds[entry.target.id])
          }
        })
      },
      {
        rootMargin: "0% 0% -70% 0%",
        threshold: 1.0,
      }
    )
    
    let ids = Object.keys(eleIds);
    ids.forEach(id => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      ids.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
    
  }, [activeId])
  return <div className="table-of-contents"> {tocEle} </div>
}

export default TOCMdx

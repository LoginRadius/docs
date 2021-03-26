import { useEffect, useState } from "react"

const useActiveHash = (itemIds) => {
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setActiveHash(entry.target.id)
          }
        })
      },
      {
        rootMargin: "0% 0% -70% 0%",
        threshold: 1.0  
      }
    )

    itemIds.forEach(id => {
      observer.observe(document.getElementById(id))
    })

    return () => {
      itemIds.forEach(id => {
        observer.unobserve(document.getElementById(id))
      })
    }
  })

  return activeHash
}

export default useActiveHash 

import { navigate } from "gatsby"
import { useEffect } from "react"
const events = [`mousedown`, `touchstart`]
export default (ref, onClickOutside) => {
  const isOutside = element => !ref.current || !ref.current.contains(element)
  const onClick = event => {
    if (isOutside(event.target) || event.target.parentNode.pathname === window.location.pathname) {
      if (event.target.parentNode.pathname === window.location.pathname) {
        navigate(event.target.parentNode.hash);
      }
      onClickOutside()
    }
  }
  useEffect(() => {
    for (const event of events) {
      document.addEventListener(event, onClick)
    }
    return () => {
      for (const event of events) document.removeEventListener(event, onClick)
    }
  })
}
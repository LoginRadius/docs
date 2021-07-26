import React from "react"
const defaultState = {
  tab: 0,
  toggleTab: () => {},
}
const DocsContext = React.createContext(defaultState)
class DocsProvider extends React.Component {
  state = {
    tab: 0,
  }
  toggleTab = tab => {
    localStorage.setItem("tab", tab)
    this.setState({ tab })
  }
  componentDidMount() {
    const lstab = JSON.parse(localStorage.getItem("tab"))
    if (lstab) {
      this.setState({ tab: lstab })
    }
  }
  render() {
    const { children } = this.props
    const { tab } = this.state
    return (
      <DocsContext.Provider
        value={{
          tab: tab,
          toggleTab: this.toggleTab,
        }}
      >
        {children}
      </DocsContext.Provider>
    )
  }
}
export default DocsContext
export { DocsProvider }

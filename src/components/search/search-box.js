import React from "react"
import { connectSearchBox } from "react-instantsearch-dom"

export default connectSearchBox(
  ({ refine, currentRefinement, className, onFocus }) => (
    <form className={className}>
      <input
        type="text"
        placeholder="Search documentation..."
        aria-label="Search"
        onChange={e => refine(e.target.value)}
        id={"search"}
        value={currentRefinement}
        onFocus={onFocus}
      />
      <a />
    </form>
  )
)
import { Link } from "gatsby"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  PoweredBy,
} from "react-instantsearch-dom"
import CustomHighlight from "./customHighlight"

const PageHit = ({ hit }) => {
  return (
    <div>
      <Link to={hit.slug}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
        <CustomHighlight attribute="headings" hit={hit} tagName="mark" />
      </Link>
    </div>
  )
}
const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)
const SearchResult = ({ indices, className, searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return (
    <div className={className}>
      {hitCount > 0 ? (
        indices.map(index => <HitsInIndex index={index} key={index.name} />)
      ) : (
        <ul> No results </ul>
      )}
      <PoweredBy />
    </div>
  )
}
export default connectStateResults(SearchResult)

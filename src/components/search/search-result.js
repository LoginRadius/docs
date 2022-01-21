import { Link } from "gatsby"
import { default as React } from "react"
import {
  connectStateResults,
  Highlight,
  Hits,
  Index,
  Snippet,
  PoweredBy,
} from "react-instantsearch-dom"

const HitCount = connectStateResults(({ searchResults }) => {
  const hitCount = searchResults && searchResults.nbHits
  return hitCount > 0 ? (
    <div className="HitCount">
      {hitCount} result{hitCount !== 1 ? `s` : ``}
    </div>
  ) : null
})
const PageHit = ({ hit }) => {
  let highlightedAttr = hit._highlightResult.headings.filter(attr => attr.matchedWords.length && attr.value)
  highlightedAttr = highlightedAttr.map(attr => attr.value.replace(/<ais-highlight-[0-9]+/, `<mark class="ais-Highlight__highlighted"`).replace(/<\/ais-highlight-[0-9]+/, `</mark`))
  highlightedAttr = highlightedAttr.slice(0, 3);
  return (
    <div>
      <Link to={hit.slug}>
        <h4>
          <Highlight attribute="title" hit={hit} tagName="mark" />
        </h4>
        {highlightedAttr.map(val => <li key={`${val}`}><span className="ais-Highlight" dangerouslySetInnerHTML={{ __html: val }} /></li>)}
      </Link>
    </div>
  )
}
const HitsInIndex = ({ index }) => (
  <Index indexName={index.name}>
    <HitCount />
    <Hits className="Hits" hitComponent={PageHit} />
  </Index>
)
const SearchResult = ({ indices, className }) => (
  <div className={className}>
    {indices.map(index => (
      <HitsInIndex index={index} key={index.name} />
    ))}
    <PoweredBy />
  </div>
)
export default SearchResult
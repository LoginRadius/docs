import React from "react";
import { connectHighlight } from 'react-instantsearch-dom';
import { kebabCase } from "lodash";
import { Link } from "gatsby";

const Highlight = ({ highlight, attribute, hit }) => {
  const parsedHit = highlight({
    highlightProperty: '_highlightResult',
    attribute,
    hit,
  });

  const highlitedHits = parsedHit.filter(hits => hits.length > 1);
  const hitsValues = [];
  highlitedHits.forEach(hitEle => {
    hitsValues.push(hitEle.map(hit => hit.value).join(""))
  });

  return hitsValues.map((val, index) => <li key={`li_${index}`}> <Link to={`${hit.slug}#${kebabCase(val.toLowerCase())}`}><span key={index}>{val}</span></Link> </li>)
};

export default connectHighlight(Highlight);
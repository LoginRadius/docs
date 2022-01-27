import styled, { css } from "styled-components"
import SearchResult from "./search-result"

const Popover = css`
  -webkit-overflow-scrolling: touch;
  position: absolute;
  z-index: 2;
  right: 0;
  left: 0;
  top: 100%;
  margin-top: 0.125em;
  width: 100%;
`

export default styled(SearchResult)`
  display: ${props => (props.show ? `block` : `none`)};
  ${Popover}

  .HitCount {
    display: flex;
    justify-content: flex-end;
  }

  .Hits {
    ul {
      list-style: none;
      margin-left: 0;
      max-height: 62vh;
      min-height: 10vh;
      overflow: auto;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.12);
      background: #fff;
      border-radius: 4px;
    }

    li.ais-Hits-item {
      a {
        color: #050505;

        h4 {
          margin-bottom: 0.2em;
        }
      }
    }
  }

  .ais-PoweredBy {
    display: flex;
    justify-content: flex-end;
    font-size: 80%;

    svg {
      width: 70px;
    }
  }
`

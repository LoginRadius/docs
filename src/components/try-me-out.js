import React from "react"
import * as styles from "./try-me-out.module.css"

export default class TryMeOut extends React.Component {
  // static defaultProps = {
  //   endpoint: "",
  //   method: "",
  //   params: '{ "queryParams": null, "headers": null, "body": null }'
  // }

  constructor(props) {
    super(props);

    this.state = {
      endpoint: this.props.endpoint || null,
      method: this.props.method || null,
      params: JSON.parse(this.props.params),
      isExpanded: false,
  
      clientState: {
        query: {},
        headers: {},
        body: null
      }
    }
  }

  handleQueryChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      return {
        clientState: {
          ...prevState.clientState,
          query: {
            ...prevState.clientState.query,
            [name]: value
          }
        }
      }
    })
  }

  handleHeaderChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState(prevState => {
      return {
        clientState: {
          ...prevState.clientState,
          headers: {
            ...prevState.clientState.headers,
            [name]: value
          }
        }
      }
    })
  }

  handleBodyChange = (event) => {

  }

  handleSubmit(event) {
    event.preventDefault()
  }

  onTryMeOutClick = () => {
    const { isExpanded, params, endpoint } = this.state;
    const queryObj = {};
    const headerObj = {};

    params.queryParams.forEach(param => {
      queryObj[param] = ""
    })

    params.headers.forEach(header => {
      headerObj[header] = ""
    })

    if (isExpanded) {
      return this.setState({
        isExpanded: false
      })
    }

    this.setState({
      isExpanded: true,
      clientState: {
        query: queryObj,
        body: this.state.params.body,
        headers: headerObj
      }
    })
  }

  onRequestSubmitClick = () => {
    const { endpoint, clientState } = this.state
    let requestUrl = endpoint;

    Object.entries(clientState.query).forEach(([key, value], index) => {
      requestUrl = `${requestUrl}${index === 0 ? "?" : "&"}${key}=${value}`
    })
    debugger;
    fetch(requestUrl)
      .then(response => response.json())
      .then(data => console.log(data))
  }

  render() {
    const { 
      isExpanded,
      params,
      endpoint,
      method,
      clientState
    } = this.state;

    return (
      <div className={styles.tryMeOut}>
        <a className={`${styles.tryMeOutButton} btn btn-primary`} onClick={this.onTryMeOutClick}>
          {!isExpanded ? "Try Me Out" : "Hide"}
        </a>
        <div className={`${styles.tryMeOutClient} ${isExpanded ? styles.show : styles.hide}`}>
          <div className={styles.requestUrl}>
            <h4>Request URL</h4>
            <div>
              {method}
            </div>
            <div>
              {endpoint}
            </div>
            <a className={` btn btn-primary`} onClick={this.onRequestSubmitClick}>Send Request</a>
          </div>
          <div className={styles.queryParams}>
            <h4>Query Params</h4>
            {params.queryParams.map((param, index) => {
              return (
                <label key={`queryParam_${index}`}>
                  {param}
                  <input
                    name={param}
                    type="text"
                    onChange={this.handleQueryChange}
                    value={clientState.query[param] || ""}
                  />
                </label>
              );
            })}
          </div>
          <div className={styles.headers}>
            <h4>Headers</h4>
            {params.headers.map((header, index) => {
              return (
                <label key={`header_${index}`}>
                  {header}
                  <input
                    name={header}
                    type="text"
                    onChange={this.handleHeaderChange}
                    value={clientState.headers[header] || ""}
                  />
                </label>
              );
            })}
          </div>
          <div className={`${styles.body} ${params.body ? styles.show : styles.hide}`}>
            <h4>Body</h4>
            body goes here
          </div>
          <div className={styles.response}>
            <h4>Response</h4>
            response goes here
          </div>
        </div>
      </div>
    )
  }
}

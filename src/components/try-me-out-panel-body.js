import React from "react"
import * as styles from "./try-me-out.module.css"

export default class TryMeOut extends React.Component {
  // static defaultProps = {
  //   endpoint: "",
  //   method: "",
  //   params: '{ "queryParams": null, "headers": null, "body": null }'
  // }

  constructor(props) {
    super(props)

    this.state = {
      endpoint: this.props.endpoint || null,
      method: this.props.method || null,
      params: this.props.params ? JSON.parse(this.props.params) : "",
      isExpanded: false,

      clientState: {
        query: {},
        template: {},
        headers: {},
        body: "",
        response: {
          status: null,
          body: null,
        },
      },
    }
  }

  componentDidMount() {
    this.onTryMeOutClick();
  }

  handleTemplateChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState(prevState => {
      return {
        clientState: {
          ...prevState.clientState,
          template: {
            ...prevState.clientState.template,
            [name]: value,
          },
        },
      }
    })
  }

  handleQueryChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState(prevState => {
      return {
        clientState: {
          ...prevState.clientState,
          query: {
            ...prevState.clientState.query,
            [name]: value,
          },
        },
      }
    })
  }

  handleHeaderChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name

    this.setState(prevState => {
      return {
        clientState: {
          ...prevState.clientState,
          headers: {
            ...prevState.clientState.headers,
            [name]: value,
          },
        },
      }
    })
  }

  handleBodyChange = event => {
    const target = event.target
    const value = target.value

    this.setState(prevState => {
      return {
        clientState: {
          ...prevState.clientState,
          body: value,
        },
      }
    })
  }

  handleSubmit(event) {
    event.preventDefault()
  }

  onTryMeOutClick = () => {
    const { isExpanded, params } = this.state
    const templateObj = {}
    const queryObj = {}
    const headerObj = {}

    if (params.templateParams && params.templateParams.length > 0) {
      params.templateParams.forEach(param => {
        templateObj[param.key] = param.default || ""
      })
    }

    if (params.queryParams && params.queryParams.length > 0) {
      params.queryParams.forEach(param => {
        queryObj[param.key] = param.default || ""
      })
    }

    if (params.headers && params.headers.length > 0) {
      params.headers.forEach(header => {
        headerObj[header.key] = header.default || ""
      })
    }

    if (isExpanded) {
      return this.setState({
        isExpanded: false,
      })
    }

    this.setState({
      isExpanded: true,
      clientState: {
        template: templateObj,
        query: queryObj,
        body: params.body ? JSON.stringify(params.body, undefined, 2) : "",
        headers: headerObj,
        response: {
          status: null,
          body: null,
        },
      },
    })
  }

  onRequestSubmitClick = () => {
    const { endpoint, method, clientState } = this.state
    let requestUrl = endpoint

    Object.entries(clientState.query).forEach(([key, value], index) => {
      if (value) {
        requestUrl = `${requestUrl}${index === 0 ? "?" : "&"}${key}=${value}`
      }
    })

    Object.entries(clientState.template).forEach(([key, value], index) => {
      requestUrl = requestUrl.replace(`{${key}}`, value)
    })

    fetch(requestUrl, {
      method: method,
      cache: "no-cache",
      headers: clientState.headers,
      body: clientState.body || undefined,
    })
      .then(response => {
        return Promise.all([response.json(), response.status])
      })
      .then(([data, status]) => {
        this.setState(prevState => {
          return {
            clientState: {
              ...prevState.clientState,
              response: {
                status: status,
                body: JSON.stringify(data, undefined, 2),
              },
            },
          }
        })
      })
  }

  render() {
    const { id } = this.props
    const { params, endpoint, method, clientState } = this.state

    return (
      <div id={id} className={`${styles.tryMeOut}`}>
        <div className={`${styles.tryMeOutClient}`}>
          <div className={styles.requestUrl}>
            <div className={styles.methodname}>{method}</div>
            <div className={styles.requestUrlRow}>
              <div className={styles.method}>Request URL</div>
              <div className={styles.endpoint}>{endpoint}</div>
              <a
                className={`${styles.requestBtn} btn btn-primary btn-sm`}
                onClick={this.onRequestSubmitClick}
              >
                Send Request
                </a>
            </div>
          </div>
          <div className={styles.requestUrlBody}>
            {params.queryParams ? (
              <div className={styles.queryParams}>
                <h4>Query Params</h4>
                {params.queryParams.map((param, index) => {
                  return (
                    <label key={`queryParam_${index}`}>
                      <div>{param.key}</div>
                      <input
                        name={param.key}
                        type="text"
                        onChange={this.handleQueryChange}
                        value={clientState.query[param.key] || ""}
                      />
                    </label>
                  )
                })}
                <span style={{marginTop: 10}}>Click <a href="https://www.loginradius.com/docs/developer/faq/#how-to-retrieve-api-key-and-secret" target="_blank">here</a> to learn more about how to obtain your API key and API secret.</span>
              </div>
            ) : (
              ""
            )}
            {params.templateParams ? (
              <div className={styles.templateParams}>
                <h4>Template Params</h4>
                {params.templateParams.map((param, index) => {
                  return (
                    <label key={`templateParam_${index}`}>
                      <div>{param.key}</div>
                      <input
                        name={param.key}
                        type="text"
                        onChange={this.handleTemplateChange}
                        value={clientState.template[param.key] || ""}
                      />
                    </label>
                  )
                })}
              </div>
            ) : (
              ""
            )}
            {params.headers ? (
              <div className={styles.headers}>
                <h4>Headers</h4>
                {params.headers.map((header, index) => {
                  return (
                    <label key={`header_${index}`}>
                      <div>{header.key}</div>
                      <input
                        name={header.key}
                        type="text"
                        onChange={this.handleHeaderChange}
                        value={clientState.headers[header.key] || ""}
                        readOnly={header.key === "Content-Type"}
                      />
                    </label>
                  )
                })}
              </div>
            ) : (
              ""
            )}
            {params.body ? (
              <div className={styles.body}>
                <h4>Body</h4>
                <div className={styles.bodyEditor}>
                  <textarea
                    name="body"
                    rows="15"
                    onChange={this.handleBodyChange}
                    value={clientState.body || ""}
                  />
                </div>
              </div>
            ) : (
              ""
            )}
            <div className={styles.response}>
              <div className={styles.responseHeader}>
                <h4>Response</h4>
                <div className={styles.statusCode}>
                  {clientState.response.status
                    ? clientState.response.status
                    : ""}
                </div>
              </div>
              <div className={styles.responseBody}>
                <textarea
                  readOnly
                  name="responseBody"
                  rows="15"
                  value={clientState.response.body || ""}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

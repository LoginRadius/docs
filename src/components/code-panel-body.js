import React from "react"
import * as styles from "./try-me-out.module.css"

const languageOptions = {
  curl: "cURL",
  go: "Go",
  node: "NodeJS",
  python: "Python",
  ruby: "Ruby",
  csharp: "C#",
  php: "PHP",
}

const codeTemplate = {
  // cURL template
  cURL: `curl -X |method| \\
  '|endpoint|' \\
  -H 'Cache-Control: no-cache' \\
  -H 'content-Type: application/json' \\
  -d  "|postbody|"`,

  // Go template
  Go: `package main

  import (
      "fmt"
      "strings"
      "net/http"
      "io/ioutil"
  )
  func main() {
      url := "|endpoint|"
      payload := strings.NewReader("|postbody|")
      req, _ := http.NewRequest("|method|", url, payload)
      req.Header.Add("content-Type","application/json")
      res, err := http.DefaultClient.Do(req)
      if err != nil {
          panic(err)
      }
      defer res.Body.Close()
      body, _ := ioutil.ReadAll(res.Body)
      fmt.Println(res)
      fmt.Println(string(body))
  }`,

  // NodeJS template
  NodeJS: `var request = require("request");

  var options = {
    method: '|method|',
    url: '|endpoint|',
    qs: |paramsjson|,
    headers: {"content-Type":"application/json"},
    body: |postbody|
  },
    json: true,
  };
  request(options, function (error, response, body) {
      console.log(body);
  });`,

  // Python template
  Python: `import requests

  url = "|endpoint|"
  querystring = |paramsjson|
  payload = "|postbody|"
  headers = {
      'content-Type': 'application/json',
  }
  response = requests.request("|method|", url, data=payload, headers=headers, params=querystring)
  print(response.text)`,

  // Ruby template
  Ruby: `require 'uri'
  require 'net/http'
  url = URI('|endpoint|')
  http = Net::HTTP.new(url.host, url.port)
  http.use_ssl = true
  http.verify_mode = false
  request = Net::HTTP::|rubymethod|.new(url)
  request.body = "|postbody|"
  request['content-Type'] = 'application/json'
  response = http.request(request)
  puts response.read_body`,

  // C# template
  "C#": `var response = string.Empty;

  var payload = "|postbody|";
  var httpRequest = (HttpWebRequest)WebRequest.Create("|endpoint|");
  httpRequest.ContentType = "application/json";
  httpRequest.Method = "|method|";
  try{
      var stream = httpRequest.GetRequestStream();
      using (var writerStream = new StreamWriter(stream)){
          writerStream.Write(payload);
          writerStream.Flush();
          writerStream.Close();
      }
      var webResponse = httpRequest.GetResponse();
      using (var readerStream = new StreamReader(webResponse.GetResponseStream())){
          response = readerStream.ReadToEnd();
      }
  }
  catch (WebException ex){
      if (ex.Response != null){
          using (var readerStream = new StreamReader(ex.Response.GetResponseStream())){
              response = readerStream.ReadToEnd();
          }
      }
  }
  Console.WriteLine(response);`,

  // PHP template
  PHP: `<?php 

  $curl = curl_init();
  curl_setopt_array($curl, array(
  CURLOPT_URL => '|endpoint|',
  CURLOPT_RETURNTRANSFER => true,
  CURLOPT_ENCODING => '',
  CURLOPT_MAXREDIRS => 10,
  CURLOPT_TIMEOUT => 30,
  CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
  CURLOPT_CUSTOMREQUEST => '|method|',
  CURLOPT_POSTFIELDS => '|postbody|',
  CURLOPT_HTTPHEADER => array(
  'content-Type: application/json',
  ),
  ));
  $response = curl_exec($curl);
  $err = curl_error($curl);
  curl_close($curl);
  if ($err) {
     echo 'cURL Error #:' . $err;
  } else {
     echo $response;
  }`,
}

export default class TryMeOut extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      endpoint: this.props.endpoint || null,
      method: this.props.method || null,
      params: this.props.params ? JSON.parse(this.props.params) : null,
      sampleresponse: this.props.sampleresponse || null,
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
      selectedLanguage: "cURL",
    }
  }

  componentDidMount() {
    this.onTryMeOutClick()
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
    const {
      params,
      endpoint,
      method,
      clientState,
      selectedLanguage,
    } = this.state

    let paramsString = ""
    let paramsJson = ""

    if (params && params.queryParams && params.queryParams.length) {
      paramsString = "?"
      paramsJson = "{"
      for (let param of params.queryParams) {
        paramsString = paramsString + param.key + "=&"
        paramsJson = paramsJson + '"' + param.key + '":"",'
      }

      paramsString = paramsString.slice(0, -1)
      paramsJson = paramsJson.slice(0, -1) + "}"
    }

    let formattedCode = codeTemplate[selectedLanguage].replace(
      "|method|",
      method
    )
    let rubyMethod = method[0] + method.toLowerCase().slice(1)
    formattedCode = formattedCode.replace("|rubymethod|", rubyMethod)

    // if (selectedLanguage === languageOptions.Ruby) {
    // } else {
    //   formattedCode = formattedCode.replace("|method|", method);
    // }

    if (formattedCode.indexOf("|paramsjson|") !== -1) {
      formattedCode = formattedCode
        .replace("|paramsjson|", paramsJson)
        .replace("|endpoint|", endpoint)
    } else {
      formattedCode = formattedCode.replace(
        "|endpoint|",
        endpoint + paramsString
      )
    }

    if (params && params.body && formattedCode.indexOf("|postbody|") !== -1) {
      formattedCode = formattedCode.replace(
        "|postbody|",
        JSON.stringify(params.body)
      )
    } else {
      formattedCode = formattedCode.replace("|postbody|", "")
    }

    return (
      <div id={id} className={`${styles.tryMeOut}`}>
        <div className={`${styles.tryMeOutClient}`}>
          <div className={styles.requestUrl}>
            <div
              style={{ justifyContent: "space-evenly" }}
              className={styles.requestUrlRow}
            >
              {Object.keys(languageOptions).map(key => (
                <a
                  key={languageOptions[key]}
                  className={`${styles.requestBtn} btn btn-primary btn-sm`}
                  onClick={() =>
                    this.setState({ selectedLanguage: languageOptions[key] })
                  }
                >
                  {languageOptions[key]}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.requestUrlBody}>
            {/* {params.queryParams ? (
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
            )} */}

            {/* queryParams templateParams headers body */}

            <div className={styles.body}>
              <h4>Code</h4>
              <div className={styles.bodyEditor}>
                <textarea
                  name="body"
                  rows="10"
                  onChange={() => {}}
                  value={formattedCode}
                />
              </div>
            </div>

            <div className={styles.response}>
              <div className={styles.responseHeader}>
                <h4>Sample Response</h4>
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
                  rows="10"
                  value={
                    this.state.sampleresponse
                      ? JSON.stringify(
                          JSON.parse(this.state.sampleresponse),
                          null,
                          4
                        )
                      : ""
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

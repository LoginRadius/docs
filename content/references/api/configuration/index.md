---
title: "Configuration API"
tags: ["Configuration API"]
description: "This is a document detailing the LoginRadius Configuration APIs."
path: "/references/api/configuration"
---

# Configuration API

## Get Server Time

  This API allows you to query your LoginRadius account for basic server information and server time information which is useful when generating an SOTT token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/serverinfo`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | TimeDifference | none | The time difference you would like to pass, If you not pass difference then the default value is 10 minutes [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="get-server-time" endpoint="https://api.loginradius.com/identity/v2/serverinfo" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"timeDifference","default":""}]}' sampleresponse='{ "ServerLocation": "East Us", "ServerName": "RD0003FF3F38DD", "CurrentTime": "2017-11-06 06:15:53", "Sott": { "StartTime": "2017-11-06 06:15:53", "EndTime": "2017-11-06 06:20:53", "TimeDifference": "5 Minutes" } }'></try-me-out>

[Go Back to Home Page](/)

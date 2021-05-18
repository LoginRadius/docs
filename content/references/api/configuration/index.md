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
  <try-me-out id="get-server-time" endpoint="https://api.loginradius.com/identity/v2/serverinfo" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"timeDifference","default":""}]}'></try-me-out>

[Go Back to Home Page](/)

---
title: "SOTT API"
tags: ["SOTT API"]
description: "This is a document detailing the LoginRadius SOTT API."
path: "/references/api/sott"
---

# SOTT API

## Generate SOTT

  Generates a SOTT with a given expiration time.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/sott`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | TimeDifference | none | The time difference you would like to pass, If you not pass difference then the default value is 10 minutes [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="generate-sott" endpoint="https://api.loginradius.com/identity/v2/manage/account/sott" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"timeDifference"}]}'></try-me-out>

[Go Back to Home Page](/)

---
title: "SOTT API"
tags: ["SOTT API"]
description: "This is a document detailing the LoginRadius SOTT API."
path: "/references/api/sott"
---

# SOTT API

Refer <a href="https://www.loginradius.com/docs/developer/faq/#how-to-retrieve-api-key-and-secret" target="_blank">this document</a> to get API Key and Secret.

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

  <try-me-out id="generate-sott" endpoint="https://api.loginradius.com/identity/v2/manage/account/sott" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"timeDifference"}]}' sampleresponse='{ "Sott": "UHvoadn**********/PrJ6DzANoF**********jWGFyk***J8n3COAV**********gjlHh****YN4mGy+mly**********uyp3hZPMqxs48=*c09bd**********a40662e6eb30*****", "ExpiryTime": "2017-11-06T07:03:12.1100256Z" }'></try-me-out>

[Go Back to Home Page](/)

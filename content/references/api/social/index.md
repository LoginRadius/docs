---
title: "Social API"
tags: ["Social API"]
description: "This is a document detailing the LoginRadius Social APIs."
path: "/references/api/social"
---

# Social API

## Access Token

  This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Secret | none | LoginRadius API Secret [**Required**] |
  | Token | none | Token generated from a successful oauth from social platform [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="access-token" endpoint="https://api.loginradius.com/api/v2/access_token" method="GET" params='{"queryParams":[{"key":"secret","default":""},{"key":"token","default":""}]}' sampleresponse='{ "access_token": "a123qwe2-9**3-4202-833c-320aoo58**66", "expires_in": "2017-10-09T06:07:00.296Z" }'></try-me-out>
 
## Token Validate

  This API validates access token, if valid then returns a response with its expiry otherwise error.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/Validate`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |
  | Secret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="token-validate" endpoint="https://api.loginradius.com/api/v2/access_token/Validate" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"key","default":""},{"key":"secret"}]}' sampleresponse='{ "access_token": "a123qwe2-9**3-4002-833c-3****o58cf66", "expires_in": "2017-10-09T06:07:00.296Z" }'></try-me-out>

## Access Token Invalidate

  This api invalidates the active access token or expires an access token validity.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/inValidate`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |
  | Secret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="access-token-invalidate" endpoint="https://api.loginradius.com/api/v2/access_token/inValidate" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"key","default":""},{"key":"secret"}]}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Get Active Session Details

  This api is use to get all active session by Access Token.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/activeSession`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Key | none | LoginRadius API Key [**Required**] |
  | Secret | none | LoginRadius API Secret [**Required**] |
  | Token | none | Token generated from a successful oauth from social platform [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="get-active-session-details" endpoint="https://api.loginradius.com/api/v2/access_token/activeSession" method="GET" params='{"queryParams":[{"key":"key","default":""},{"key":"secret","default":""},{"key":"token"}]}' sampleresponse='{ "data": [ { "AccessToken": "8h******-****-8**5-***c-e8c*******9b", "Browser": "Chrome", "Device": "PC", "Os": "Windows", "DeviceType": "Computer", "City": "****", "Country": "a**d", "Ip": "***.0*6.1*2.**1", "LoginDate": "2017-10-02T10:02:52.534Z" } ], "nextcursor": 0 }'></try-me-out>
 
## Get Active Session By Account Id

  This api is used to get all active sessions by AccountID(UID).

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/activeSession`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | AccountId | none | UID, the unified identifier for each user account [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |
  | Secret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="get-active-session-by-account-id" endpoint="https://api.loginradius.com/api/v2/access_token/activeSession" method="GET" params='{"queryParams":[{"key":"accountId","default":""},{"key":"key","default":""},{"key":"secret"}]}' sampleresponse='{ "data": [ { "AccessToken": "8h******-****-8**5-***c-e8c*******9b", "Browser": "Chrome", "Device": "PC", "Os": "Windows", "DeviceType": "Computer", "City": "****", "Country": "a**d", "Ip": "***.0*6.1*2.**1", "LoginDate": "2017-10-02T10:02:52.534Z" } ], "nextcursor": 0 }'></try-me-out>

## Get Active Session By Profile Id

  This api is used to get all active sessions by ProfileId.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/activeSession`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Key | none | LoginRadius API Key [**Required**] |
  | ProfileId | none | Social Provider Id [**Required**] |
  | Secret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="get-active-session-by-profile-id" endpoint="https://api.loginradius.com/api/v2/access_token/activeSession" method="GET" params='{"queryParams":[{"key":"profileId","default":""},{"key":"key","default":""},{"key":"secret"}]}' sampleresponse='{ "data": [ { "AccessToken": "8h******-****-8**5-***c-e8c*******9b", "Browser": "Chrome", "Device": "PC", "Os": "Windows", "DeviceType": "Computer", "City": "****", "Country": "a**d", "Ip": "***.0*6.1*2.**1", "LoginDate": "2017-10-02T10:02:52.534Z" } ], "nextcursor": 0 }'></try-me-out>
 
## User Profile

  The User Profile API is used to get social profile data from the user's social account after authentication.<br><br><b>Supported Providers:</b>  All
  
  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/userprofile`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Access_Token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="user-profile" endpoint="https://api.loginradius.com/api/v2/userprofile" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"fields","default":""}]}' sampleresponse='{ user Social Profile object }'></try-me-out>

[Go Back to Home Page](/)

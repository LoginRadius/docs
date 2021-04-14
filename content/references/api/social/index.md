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
 
## User Profile

  The User Profile API is used to get social profile data from the user's social account after authentication.<br><br><b>Supported Providers:</b>  All
  
  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/userprofile`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Access_Token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

[Go Back to Home Page](/)

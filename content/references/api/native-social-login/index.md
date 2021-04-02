---
title: "Native Social Login API"
tags: ["Native Social Login API"]
description: "This is a document detailing the LoginRadius Native Social Login APIs."
path: "/references/api/native-social-login"
---

# Native Social Login API

## Access Token via Facebook Token

  Exchanges a Facebook access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/facebook`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | Fb_Access_Token | none | Facebook Access Token [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |
 
## Access Token via Twitter Token

  Exchanges a Twitter access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/twitter`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | Key | none | LoginRadius API Key [**Required**] |
  | Tw_Access_Token | none | Twitter Access Token [**Required**] |
  | Tw_Token_Secret | none | Twitter Token Secret [**Required**] |
 
## Access Token via Google Token

  Exchanges a Google access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/google`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | Google_Access_Token | none | Google Access Token [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |
  | client_id | none | Google Client ID [**Optional**] |
  | refresh_token | none | LoginRadius refresh token [**Optional**] |
 
## Access Token using Google JWT for Native Mobile Login

  Exchanges a Google JWT for a LoginRadius access token for Google native mobile login/registration.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/googlejwt`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | Id_Token | none | Google JWT id_token [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |
 
## Access Token via Linkedin Token

  Exchanges a LinkedIn access token for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/linkedin`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | Key | none | LoginRadius API Key [**Required**] |
  | Ln_Access_Token | none | Linkedin Access Token [**Required**] |

## Access Token via Foursquare Access Token

  Exchanges a Foursquare access token for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/foursquare`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | Fs_Access_Token | none | Foursquare Access Token [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |
 
## Access Token via Google Auth Code

  Exchanges a Google auth code for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/google`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | google_authcode | none | Google AuthCode [**Required**] |

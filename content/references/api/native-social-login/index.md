---
title: "Native Social Login API"
tags: ["Native Social Login API"]
description: "This is a document detailing the LoginRadius Native Social Login APIs."
path: "/references/api/native-social-login"
---

# Native Social Login API

Refer <a href="https://www.loginradius.com/docs/developer/faq/#how-to-retrieve-api-key-and-secret" target="_blank">this document</a> to get API Key and Secret.

## Access Token via Facebook Token

  Exchanges a Facebook access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/facebook`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Fb\_Access\_Token | none | Facebook Access Token [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
    
  Click the button below to enter parameters, send a request and see the response.

  <try-me-out id="access-token-via-facebook-token" endpoint="https://api.loginradius.com/api/v2/access_token/facebook" method="GET" params='{"queryParams":[{"key":"fb_access_token","default":""},{"key":"key","default":""}]}' sampleresponse='{ "access_token": "87******-****-***7-*****-******c***f2", "expires_in": "2017-10-09T09:37:35.4884699Z" }'></try-me-out>
 
## Access Token via Twitter Token

  Exchanges a Twitter access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/twitter`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Key | none | LoginRadius API Key [**Required**] |
  | Tw\_Access\_Token | none | Twitter Access Token [**Required**] |
  | Tw\_Token\_Secret | none | Twitter Token Secret [**Required**] |

  ### Try Me Out
    
  Click the button below to enter parameters, send a request and see the response.

  <try-me-out id="access-token-via-twitter-token" endpoint="https://api.loginradius.com/api/v2/access_token/twitter" method="GET" params='{"queryParams":[{"key":"tw_access_token","default":""},{"key":"tw_token_secret"},{"key":"key","default":""}]}' sampleresponse='{ "access_token": "********-****-****-****-************", "expires_in": "2017-11-30T01:28:56.2681775Z" }'></try-me-out>
 
## Access Token via Google Token

  Exchanges a Google access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/google`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Google\_Access\_Token | none | Google Access Token [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |
  | client_id | none | Google Client ID [**Optional**] |
  | refresh_token | none | LoginRadius refresh token [**Optional**] |

  ### Try Me Out
    
  Click the button below to enter parameters, send a request and see the response.

  <try-me-out id="access-token-via-google-token" endpoint="https://api.loginradius.com/api/v2/access_token/google" method="GET" params='{"queryParams":[{"key":"google_access_token","default":""},{"key":"key"},{"key":"client_id","default":""},{"key":"refresh_token"}]}' sampleresponse='{ "access_token": "e******f-***5-4**2-***8-1d6******8a6", "refresh_token": "b*****44-****-4***-****-182***94***6", "expires_in": "2018-11-20T13:28:40.2339631Z" }'></try-me-out>
 
## Access Token using Google JWT for Native Mobile Login

  Exchanges a Google JWT for a LoginRadius access token for Google native mobile login/registration.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/googlejwt`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Id_Token | none | Google JWT id_token [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
    
  Click the button below to enter parameters, send a request and see the response.

  <try-me-out id="access-token-using-google-jwt-for-native-mobile-login" endpoint="https://api.loginradius.com/api/v2/access_token/googlejwt" method="GET" params='{"queryParams":[{"key":"id_token","default":""},{"key":"key"}]}' sampleresponse='{ "access_token": "87******-****-***7-*****-******c***f2", "expires_in": "2017-10-09T09:37:35.4884699Z" }'></try-me-out>
 
## Access Token via Linkedin Token

  Exchanges a LinkedIn access token for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/linkedin`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Key | none | LoginRadius API Key [**Required**] |
  | Ln\_Access\_Token | none | Linkedin Access Token [**Required**] |

  ### Try Me Out
    
  Click the button below to enter parameters, send a request and see the response.

  <try-me-out id="access-token-via-linkedin-token" endpoint="https://api.loginradius.com/api/v2/access_token/linkedin" method="GET" params='{"queryParams":[{"key":"key","default":""},{"key":"ln_access_token"}]}' sampleresponse='{ "access_token": "83******-****-6**7-*****-******c***f9", "expires_in": "2017-10-09T09:37:35.4884699Z" }'></try-me-out>

## Access Token via Foursquare Access Token

  Exchanges a Foursquare access token for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/foursquare`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | Fs\_Access\_Token | none | Foursquare Access Token [**Required**] |
  | Key | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
    
  Click the button below to enter parameters, send a request and see the response.

  <try-me-out id="access-token-via-foursquare-access-token" endpoint="https://api.loginradius.com/api/v2/access_token/foursquare" method="GET" params='{"queryParams":[{"key":"key","default":""},{"key":"fs_access_token"}]}' sampleresponse='{ "access_token": "a123qwe2-9**3-4202-833c-320aoo58**66", "expires_in": "2017-10-09T06:07:00.296Z" }'></try-me-out>
 
## Access Token via Google Auth Code

  Exchanges a Google auth code for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/access_token/google`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | google_authcode | none | Google AuthCode [**Required**] |

  ### Try Me Out
    
  Click the button below to enter parameters, send a request and see the response.

  <try-me-out id="access-token-via-google-auth-code" endpoint="https://api.loginradius.com/api/v2/access_token/google" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"google_authcode"}]}' sampleresponse='{ "access_token": "e******f-***5-4**2-***8-1d6******8a6", "refresh_token": "b*****44-****-4***-****-182***94***6", "expires_in": "2018-11-20T13:28:40.2339631Z" }'></try-me-out>

[Go Back to Home Page](/)

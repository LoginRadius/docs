---
title: OAuth code
tags: ["OAuth"]
description: "This is a document detailing the LoginRadius OAuth APIs."
path: "/references/api/OAuth"
---

# OAuth 2.0

## Request Tokens
This API enables you to request a new access token from the Device code Endpoint

### Endpoint

`POST` `https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/access_token`

### Template Params

| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
| OAuthName   |  String     |  none         | The name for the OAuth App you have configured in the LoginRadius Dashboard. [REQUIRED]           |


### Post Params
client_id :Your application's Client ID. [REQUIRED]
device_code :Enter the device code [REQUIRED]
Grant-Type :Value should be used as urn:ietf:params:oauth:grant-type:device_code [REQUIRED]

| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
| client_id  |  String     |  none         | Your application's Client ID. [REQUIRED] |
| device_code  |  String     |  none         | device_code :Enter the device code [REQUIRED] |
| grant_type |  String     |  none         | Value should be used as urn:ietf:params:oauth:grant-type:device_code [REQUIRED] |

### Response

This is what a sample response looks like:
```
{
  "access_token": "b8cb84c9-dff7-401a-94c1-7cd44ebf80a0",
  "token_type": "access_token",
  "refresh_token": "a795bbb0-5868-4079-a45b-606ad8aeee80",
  "expires_in": 31103985
}
```

### Try Me Out
<try-me-out id="request-tokens" endpoint="https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/access_token" method="POST" params='{"templateParams":[{"key":"OAuthName","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"client_id":"","device_code":"","grant_type":""}}'></try-me-out>

## Access token by OAuth 2 token

This API allows get a LoginRadius access_token from an OAuth 2.0 Token.

### Endpoint

`POST` `https://cloud-api.loginradius.com/sso/oauth/access_token`

### Body Params

| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
| client_id   |  String     |  none         | LoginRadius API Key [REQUIRED] |
| client_secret    |  String     |  none         | LoginRadius Secret Key [REQUIRED] |
| redirect_uri   |  String     |  none         | Redirection URI [REQUIRED] |
| response_type  |  String     |  none         | Needs to be 'token' [REQUIRED] |
| code  |  String     |  none         | Code Parameter, given when Login Dialog is performed [REQUIRED] |

### Response

This is what a sample response looks like:
```
{
  "access_token": "********-****-****-*****************",
  "token_type": "access_token",
  "expires_in": 394,
  "refresh_token": "********-****-****-*****************"
}
```

### Try Me Out
<try-me-out id="access-token-by-oauth2-token" endpoint="https://cloud-api.loginradius.com/sso/oauth/access_token" method="POST" params='{"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"client_id":"","client_secret":"","redirect_uri":"","response_type":"","code":""}}'></try-me-out>

## Access Token by Account Password

This API allows you to obtain a LoginRadius access_token by passing in the customer's account password along with their email/username/phoneid as part of the Resource Owner Password Credential Flow.

### Endpoint

`POST` `https://cloud-api.loginradius.com/sso/oauth/access_token`

### Body Params
| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
| client_id   |  String     |  none         | LoginRadius API Key [REQUIRED] |
| client_secret    |  String     |  none         | LoginRadius Secret Key [REQUIRED] |
| grant_type   |  String     |  none         | Needs to be 'password' [REQUIRED] |
| username  |  String     |  none         | You must provide the customer's email/phoneid depending on how you have configured LoginRadius for authentication [REQUIRED] |
| password |  String     |  none         | The customer's account password. [REQUIRED] |

### Response

This is what a sample response looks like:
```
{
  "access_token": "********-****-****-*****************",
  "token_type": "access_token",
  "expires_in": 394,
  "refresh_token": "********-****-****-*****************"
}
```

### Try Me Out
<try-me-out id="access-token-by-account-password" endpoint="https://cloud-api.loginradius.com/sso/oauth/access_token" method="POST" params='{"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"client_id":"","client_secret":"","grant_type":"","username":"","password":""}}'></try-me-out>

## Request Device Code

This API allows you to requests a new device code, user code from the Device code Endpoint


### Endpoint

`POST` `https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/device`

### Template Params

| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
| OAuthName   |  String     |  none         | The name for the OAuth App you have configured in the LoginRadius Dashboard. [REQUIRED]           |

### Body Params

| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
| client_id |  String     |  none         | Your application's Client ID. [REQUIRED] |
| scope |  String     |  none         | The scope for this is email profile. |


### Response

This is what a sample response looks like:
```
{
  "device_code": "af2a4121179546c1b121995414cc4530",
  "user_code": "oP5lLq",
  "verification_uri": "https://example.com/federation/device/activate.php",
  "interval": 10,
  "expires_in": 1800
}
```

### Try Me Out
<try-me-out id="request-device-code" endpoint="https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/device" method="POST" params='{"templateParams":[{"key":"OAuthName"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"client_id":"","scope":""}}'></try-me-out>

## Refresh Access Token

This API allows to refresh an access_token


### Endpoint

`POST` `https://cloud-api.loginradius.com/sso/oauth/access_token/refresh`


### Body Params
| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
| client_id   |  String     |  none         | LoginRadius API Key [REQUIRED] |
| client_secret    |  String     |  none         | LoginRadius Secret Key [REQUIRED] |
| grant_type   |  String     |  none         | The grant_type, needs to be refresh_token [REQUIRED] |
| refresh_token |  String     |  none         | this is the refresh_token you received when you used the 'Access token by OAuth 2 token' and 'Access Token by Account Password' API call [REQUIRED]|

### Response

This is what a sample response looks like:
```
{
  "access_token": "********-****-****-*****************",
  "token_type": "access_token",
  "expires_in": 394,
  "refresh_token": "********-****-****-*****************"
}
```

### Try Me Out
<try-me-out id="refresh-access-token" endpoint="https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/device" method="POST" params='{"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"client_id":"","client_secret":"","grant_type":"","refresh_token":""}}'></try-me-out>

## Revoke Refresh Token

This API is used to revoke the refresh token access and that revoked token can not be used further to refresh access token.

### Endpoint

`POST` `https://cloud-api.loginradius.com/sso/oauth/refresh_token/revoke`

### Body Params
| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
| client_id   |  String     |  none         | LoginRadius API Key [REQUIRED] |
| client_secret    |  String     |  none         | LoginRadius Secret Key [REQUIRED] |
| refresh_token |  String     |  none         | this is the refresh_token you received when you used the 'Access token by OAuth 2 token' or 'Access Token by Account Password' API calls [REQUIRED] |

### Response

The server successfully processed the request, and is not returning any content.(HTTP status code 200)

### Try Me Out
<try-me-out id="revoke-refresh-token" endpoint="https://cloud-api.loginradius.com/sso/oauth/refresh_token/revoke" method="POST" params='{"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"client_id":"","client_secret":"","refresh_token":""}}'></try-me-out>





[Go Back to Home Page](/)









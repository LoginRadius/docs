---
title: OAuth code
description: Addition to user registration systems is the ability to define roles for your users and restrict access to portions of your site based on user permissions.
path: "/references/api/OAuth"
---

# OAuth 2.0

## Request Tokens
This API enables you to request a new access token from the Device code Endpoint

HTTP request

POST
https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/access_token


### Template Params

| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| Oauthappname   |  String     |  none         | The name for the OAuth App you have configured in the LoginRadius Dashboard. [REQUIRED]           |


### Post Params
client_id :Your application's Client ID. [REQUIRED]
device_code :Enter the device code [REQUIRED]
Grant-Type :Value should be used as urn:ietf:params:oauth:grant-type:device_code [REQUIRED]

| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| client_id  |  String     |  none         | Your application's Client ID. [REQUIRED] |
| device_code  |  String     |  none         | device_code :Enter the device code [REQUIRED] |
| Grant-Type |  String     |  none         | Value should be used as urn:ietf:params:oauth:grant-type:device_code [REQUIRED] |

### Response

This is what a sample reponse looks like:
```
{
  "access_token": "b8cb84c9-dff7-401a-94c1-7cd44ebf80a0",
  "token_type": "access_token",
  "refresh_token": "a795bbb0-5868-4079-a45b-606ad8aeee80",
  "expires_in": 31103985
}
```

## Access token by OAuth 2 token

This API allows get a LoginRadius access_token from an OAuth 2.0 Token.

HTTP request

POST
https://cloud-api.loginradius.com/sso/oauth/access_token

### Body Params

| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| client_id   |  String     |  none         | LoginRadius API Key [REQUIRED] |
| client_secret    |  String     |  none         | LoginRadius Secret Key [REQUIRED] |
| redirect_uri   |  String     |  none         | Redirection URI [REQUIRED] |
| response_type  |  String     |  none         | Needs to be 'token' [REQUIRED] |
| code  |  String     |  none         | Code Parameter, given when Login Dialog is performed [REQUIRED] |

### Response

This is what a sample reponse looks like:
```
{
  "access_token": "********-****-****-*****************",
  "token_type": "access_token",
  "expires_in": 394,
  "refresh_token": "********-****-****-*****************"
}
```



## Access Token by Account Password

This API allows you to obtain a LoginRadius access_token by passing in the customer's account password along with their email/username/phoneid as part of the Resource Owner Password Credential Flow.

HTTP request

POST
https://cloud-api.loginradius.com/sso/oauth/access_token

### Body Params
| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| client_id   |  String     |  none         | LoginRadius API Key [REQUIRED] |
| client_secret    |  String     |  none         | LoginRadius Secret Key [REQUIRED] |
| grant_type   |  String     |  none         | Needs to be 'password' [REQUIRED] |
| username  |  String     |  none         | You must provide the customer's email/username/phoneid depending on how you have configured LoginRadius for authentication [REQUIRED] |
| password |  String     |  none         | The customer's account password. [REQUIRED] |

### Response

This is what a sample reponse looks like:
```
{
  "access_token": "********-****-****-*****************",
  "token_type": "access_token",
  "expires_in": 394,
  "refresh_token": "********-****-****-*****************"
}
```

## Request Device Code

This API allows you to requests a new device code, user code from the Device code Endpoint


HTTP request

POST
https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/device

### Template Params

| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| Oauthappname   |  String     |  none         | The name for the OAuth App you have configured in the LoginRadius Dashboard. [REQUIRED]           |

### Body Params

| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| client_id |  String     |  none         | Your application's Client ID. [REQUIRED] |
| scope |  String     |  none         | The scope for this is email profile. |


### Response

This is what a sample reponse looks like:
```
{
  "device_code": "af2a4121179546c1b121995414cc4530",
  "user_code": "oP5lLq",
  "verification_uri": "https://mayank.login4website.com/federation/device/activate.php",
  "interval": 10,
  "expires_in": 1800
}
```

## Refresh Access Token

This API allows to refresh an access_token


HTTP request

POST
https://cloud-api.loginradius.com/sso/oauth/access_token/refresh


### Body Params
| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| client_id   |  String     |  none         | LoginRadius API Key [REQUIRED] |
| client_secret    |  String     |  none         | LoginRadius Secret Key [REQUIRED] |
| grant_type   |  String     |  none         | The grant_type, needs to be refresh_token [REQUIRED] |
| refresh_token |  String     |  none         | this is the refresh_token you received when you used the 'Access token by OAuth 2 token' and 'Access Token by Account Password' API call [REQUIRED]|

### Response

This is what a sample reponse looks like:
```
{
  "access_token": "********-****-****-*****************",
  "token_type": "access_token",
  "expires_in": 394,
  "refresh_token": "********-****-****-*****************"
}
```

## Revoke Refresh Token

This API is used to revoke the refresh token access and that revoked token can not be used further to refresh access token.

HTTP request

POST
https://cloud-api.loginradius.com/sso/oauth/refresh_token/revoke


### Body Params
| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| client_id   |  String     |  none         | LoginRadius API Key [REQUIRED] |
| client_secret    |  String     |  none         | LoginRadius Secret Key [REQUIRED] |
| refresh_token |  String     |  none         | this is the refresh_token you received when you used the 'Access token by OAuth 2 token' or 'Access Token by Account Password' API calls [REQUIRED] |

### Response

The server successfully processed the request, and is not returning any content.(HTTP status code 200)





[Go Back to Home Page](/)









---
title: OpenID code
description: Addition to user registration systems is the ability to define roles for your users and restrict access to portions of your site based on user permissions.
path: "/references/api/oidc"
---


# OpenID code

## Access Token by OpenID code

This API allows you to exchange your OpenID code for a LoginRadius access_token.


HTTP Request

POST
https://cloud-api.loginradius.com/sso/oidc/v2/{oidcappname}/token


### Template Params


| Name  	| Default  	| Description  	|
|---	    |---	    |---	        |
| oidcappname    	|  String	    |   The name for the ODIC App you have configured in the LoginRadius Admin Console. [REQUIRED]	        |

### Body Attributes
| Attribute | Description 
| ------------ | ------- | -------------------------------------------------------------------------------- | 
|grant_type|This is the grant type to be used, you should provide 'authorization_code' [REQUIRED]
|client_id|Password for the email
|client_secret|LoginRadius API Secret [REQUIRED] |  
|response_type|If used, needs to be 'token' |  
|code|The authorization_code obtained during the Authorization process. [REQUIRED] | 


The following displays the sample  request body code:

```json
{
  "access_token": "********-****-****-*****************",
  "token_type": "access_token",
  "expires_in": 394,
  "refresh_token": "********-****-****-*****************",
  "id_token": "eyJhbG**********4NiIsInR5cCI*****VCJ9.eyJpc3**********czy****udGVybmFsL"
}
```

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)

## Refresh Access Token

This API allows you to refresh an access_token, use access tokens to ensure a user has access to the appropriate resources, and these access tokens typically have a limited lifetime. This is done for various security reasons: for one, limiting the lifetime of the access token limits the amount of time an attacker can use a stolen token. In addition, the information contained in or referenced by the access token could become stale. When access tokens expire or become invalid but the application still needs to access a protected resource, the application faces the problem of getting a new access token without forcing the user to once again grant permission. To solve this problem, OAuth 2.0 introduced an artifact called a refresh token. A refresh token allows an application to obtain a new access token without prompting the user.

HTTP Request

POST
https://cloud-api.loginradius.com/sso/oidc/v2/{oidcappname}/token


### Template Params


| Name  	| Default  	| Description  	|
|---	    |---	    |---	        |
| oidcappname    	|  String	    |   The name for the ODIC App you have configured in the LoginRadius Admin Console. [REQUIRED]	        |

### Body Attributes
| Attribute | Description 
| ------------ | ------- | -------------------------------------------------------------------------------- | 
|grant_type|This is the grant type to be used, you should provide 'authorization_code' [REQUIRED]
|client_id|Password for the email
|client_secret|LoginRadius API Secret [REQUIRED] |  
|response_type|If used, needs to be 'token' |  
|refresh_token|this is the refresh_token you received when you used the 'Access Token by OpenID Connect code' API call [REQUIRED] | 
|scope|The scope for the Open ID profile, use 'openid profile'. [REQUIRED] | 


The following displays the sample  request body code:

```json
{
  "access_token": "********-****-****-*****************",
  "token_type": "access_token",
  "expires_in": 394,
  "refresh_token": "********-****-****-*****************",
  "Id_token": "eyJhbG**********4NiIsInR5cCI*****VCJ9.eyJpc3**********czy****udGVybmFsL***********WIubG9n"
}
```

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)


## Revoke Refresh Token

This API allows you to expire a refresh_token

HTTP Request

POST
https://cloud-api.loginradius.com/sso/oidc/v2/{oidcappname}/token/revoke


### Template Params


| Name  	| Default  	| Description  	|
|---	    |---	    |---	        |
| oidcappname    	|  String	    |   The name for the ODIC App you have configured in the LoginRadius Admin Console. [REQUIRED]	        |

### Body Attributes
| Attribute | Description 
| ------------ | ------- | -------------------------------------------------------------------------------- | 
|client_id|Password for the email
|client_secret|LoginRadius API Secret [REQUIRED] |  
|token |This is the refresh_token you received when you used the Access Token by OpenID code API call. [REQUIRED] |  


The following displays the sample  request body code:

```json
{}
```

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)

## UserInfo by Access Token

Use this Endpoint to obtain the claims for a given user. a client makes a request to the UserInfo endpoint by using an access token as the credential. The access token must be one that was obtained through OpenID Connect authentication. The claims for the user who is represented by the access token are returned as a JSON object that contains a collection of name-value pairs for the claims. The UserInfo endpoint is an OAuth 2.0 protected resource, which means that the credential required to access the endpoint is the access token. Note: This Endpoint may also be called via the POST HTTP method, if the access_token is passed as Bearer token in the POST request, then the Content-Type header must be application/x-wwww-form-urlencoded.



HTTP Request

GET
https://cloud-api.loginradius.com/sso/oidc/v2/{sitename}/{oidcappname}/userinfo


### Template Params


| Name  	| Default  	| Description  	|
|---	    |---	    |---	        |
| oidcappname    	|  String	    |   The name for the ODIC App you have configured in the LoginRadius Admin Console. [REQUIRED]	        |
| sitename     	|  String	    |   The name of your LoginRadius SiteName / Environment. [REQUIRED]	        |

### Headers Parameters
| Attribute | Description 
| ------------ | ------- | -------------------------------------------------------------------------------- | 
|Authorization |Bearer <ACCESS_TOKEN> (customer's access token) [REQUIRED] |  


The following displays the sample  request body code:

```json
{"eyJhbGciOiJSUzI1NiIsImtpZCI6IjIwMSIsInR5cCI6IkpXVCJ9.eyJVaWQiOiI3MjNiMDVmODBjNjQ0NjcyYjM0OTZhMjFiN2NmMzNkYyIsImFkZHJlc3MiOnsiY291bnRyeSI6bnVsbCwibG9jYWxpdHkiOm51bGwsInBvc3RhbF9jb2RlIjpudWxsLCJyZWdpb24iOm51bGwsInN0cmVldF9hZGRyZXNzIjpudWxsfSwiYXNkYXMiOlt7IlR5cGUiOiJQcmltYXJ5IiwiVmFsdWUiOiJhc2Rhc0BtYWlsNy5pbyJ9XSwiYXVkIjoiOTRjMzk1YjEtZDU3OS00NGNlLThiY2QtNDMwY2U0NjIwMzc1IiwiYmlydGhkYXRlIjpudWxsLCJlbWFpbCI6ImFzZGFzQG1haWw3LmlvIiwiZW1haWxfdmVyaWZpZWQiOmZhbHNlLCJleHAiOjE2MDE0Njc0NzIsImZhbWlseV9uYW1lIjpudWxsLCJnZW5kZXIiOm51bGwsImdpdmVuX25hbWUiOm51bGwsImlhdCI6MTYwMTQ2Njg3MiwiaXNzIjoiaHR0cHM6Ly9jbG91ZC1hcGkubG9naW5yYWRpdXMuY29tL3Nzby9vaWRjL3YyL2ludGVybmFsLWFwZWtzaGEvdGVzdCIsImp0aSI6ImYzMTk3YjQwLTJkY2QtNDQyMi04NzY1LWM0MDg0NmY2MGZiNCIsImxvY2FsZSI6bnVsbCwibWlkZGxlX25hbWUiOm51bGwsIm5hbWUiOm51bGwsIm5iZiI6MTYwMTQ2Njg3Miwibmlja25hbWUiOm51bGwsIm5vbmNlIjoidGVzdG1vdW5jZSIsInBob25lX251bWJlciI6bnVsbCwicGhvbmVfbnVtYmVyX3ZlcmlmaWVkIjpmYWxzZSwicGljdHVyZSI6bnVsbCwicHJlZmVycmVkX3VzZXJuYW1lIjpudWxsLCJwcm9maWxlIjpudWxsLCJzdWIiOiI3MjNiMDVmODBjNjQ0NjcyYjM0OTZhMjFiN2NmMzNkYyIsInVwZGF0ZWRfYXQiOjE2MDAyODg5NDYsIndlYnNpdGUiOm51bGwsInpvbmVpbmZvIjpudWxsfQ.SvMXwBqsVUt1P5qHXIfTh90UW6__Gte6sBqHaRGG52xQYSQQvvL66yzBY9Hwfui_I6s4-9W10cQJiaY1voV48rE1S9Fo_IMw_khwPxzPbWIg6EXrSReFd-jg4l-1NJ1YxnervOOkxrG5vvReU9uL3cAYcB7YpeO_ybQnUMj-TZyWFbI7L3sagrv239iXJc2zGuMxw4Kp1H8pjiu7L7-cx8ZsfVkgk6ZCO2Z8Ze46NBlXwGvsTPHh0qdoafi5ISB8DKnCiyU-CTZPYr91_1gJMG-1x98UDjiKy6vV4290W0HQXlrN2Y4Rxhnwlmyzs-5t38wgohvEyxvCy6Zvmxws-Q" }
```

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)

## JSON Web Key Set

At the most basic level, the JSON Web Key Set (JWKS) is a set of keys containing the public keys that should be used to verify any JSON Web Token (JWT) issued by the authorization server.



HTTP Request

GET
https://cloud-api.loginradius.com/sso/oidc/v2/{sitename}/{oidcappname}/jwks


### Template Params


| Name  	| Default  	| Description  	|
|---	    |---	    |---	        |
| oidcappname    	|  String	    |   The name for the ODIC App you have configured in the LoginRadius Admin Console. [REQUIRED]	        |
| sitename     	|  String	    |   The name of your LoginRadius SiteName / Environment. [REQUIRED]	        |


The following displays the sample  request body code:

```json
{
  "keys": [
    {
      "kty": "RSA",
      "use": "sig",
      "alg": "RS256",
      "kid": "206",
      "n": "nvJHvAs6aEq9w6Cb793lk9-METOxd9mEDY4a5YKj74lg5EuNy0j1FP...",
      "e": "AQAB"
    }
  ]
}
```

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)


## OIDC Discovery Endpoint

The OpenID Connect Discovery endpoint provides a client with configuration details about the OpenID Connect metadata of the Loginradius App.



HTTP Request

GET
https://cloud-api.loginradius.com/sso/oidc/v2/{sitename}/{oidcappname}/.well-known/openid-configuration


### Template Params


| Name  	| Default  	| Description  	|
|---	    |---	    |---	        |
| oidcappname    	|  String	    |   The name for the ODIC App you have configured in the LoginRadius Admin Console. [REQUIRED]	        |
| sitename     	|  String	    |   The name of your LoginRadius SiteName / Environment. [REQUIRED]	        |


The following displays the sample  request body code:

```json
{
  "issuer": "https://cloud-api.loginradius.com/sso/oidc/v2/{site-name}/{oidcappname}",
  "authorization_endpoint": "https://cloud-api.loginradius.com/sso/oidc/authorize",
  "token_endpoint": "https://cloud-api.loginradius.com/sso/oidc/token",
  "revocation_endpoint": "https://cloud-api.loginradius.com/sso/oidc/revoke",
  "userinfo_endpoint": "https://cloud-api.loginradius.com/sso/oidc/userinfo",
  "jwks_uri": "https://cloud-api.loginradius.com/sso/oidc/app-name/app-name/jwks",
  "scopes_supported": [
    "openid"
  ],
  "response_types_supported": [
    "code",
    "token",
    "id_token",
    "code token",
    "code id_token",
    "token id_token",
    "code token id_token"
  ],
  "response_modes_supported": [
    "query",
    "form_post"
  ],
  "subject_types_supported": [
    "public"
  ],
  "token_endpoint_auth_methods_supported": [
    "client_secret_post"
  ],
  "id_token_signing_alg_values_supported": [
    "RS256"
  ],
  "claims_supported": [
    "Email",
    "FirstName",
    "LastName",
    "UserName",
    "Country",
    "Favicon"
  ]
}

```

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)

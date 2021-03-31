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

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)

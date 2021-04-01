---
title: "Connect OAuth app with LoginRadius SDK"
tags: ["OAuth", "GetStarted"]
description: "This is a guide for OAuth2.0 implementation."
path: "/guide/oauth"
---

# Connect OAuth App

OAuth 2.0 is a protocol that facilitates token-based authentication and authorization; thus, allowing the consumers to grant limited access to their resources on one application, to another application, without having to expose their credentials.


LoginRadius Identity Platform supports standard [OAuth 2.0 specs](https://tools.ietf.org/html/rfc6749) to integrate your OAuth client with LoginRadius. Thus, you can allow your application's consumers to log in to an OAuth-enabled application without creating an account. This document goes over the full process of getting the SSO feature implemented with OAuth 2.0. 


## OAuth 2.0 configuration using Loginradius API

To understand OAuth 2.0 and the flows involved in this guide, check out [this reference](https://itnext.io/an-oauth-2-0-introduction-for-beginners-6e386b19f7a9).

This section covers the configuration that one needs to do in LoginRadius to implement OAuth functionality. The aim remains to obtain an **access_token** and uses it to access protected resources. There are four flows involved, and you can choose one based on your requirements:

- [Auth Code Grant](#authorization-code-grant)
- [Implicit](#implicit)
- [Resource Owner Password Credentials Grant](#resource-owner-password-credentials-grant)
- [Device Code Flow](#device-code-flow)

The following section covers how to utilize OAuth 2.0 Code Grant via Loginradius APIs.

### Authorization Code Grant

You need to perform the following steps to obtain the token, the first involving the browser, the second a back-channel request.

**Step 1: Authorization Code Link**

To begin with Authorization Code flow, your application should redirect the customer to the following authorization URL:

```
 https://cloud-api.loginradius.com/sso/oauth/redirect?client_id={LoginRadius API key}&redirect_uri={Callback URL}&scope={Scope}&response_type=code&state={random long string}
```

**Required Parameters**

The access token request will contain the following parameters. Here is an explanation of the URL Parameter:

- `https://cloud-api.loginradius.com/sso/oauth/redirect:` The API authorization endpoint.
- **client_id:** The identifier of the customer at the authorization server. Enter the LoginRadius API key
- **Redirect_uri:** Callback URL of your site where you want to redirect back your customers after an authorization code is granted.
  > **NOTE:** Make sure that you have whitelisted the Redirect_uri in your LoginRadius Dashboard. For more information, refer to this document.
- **scope: [optional]** Specifies the scope of the requested token. If omitted, the authorization server may assume some default scope.
- **state: [optional]** This parameter will be returned as it is, part of the response
- **Response_type:** Set to code to indicate an authorization code flow. Find responses below:
  Response of login dialog if response_type=code: `YOUR_CALLBACK_URI?code={unique code}`

**Step 2: Exchange Code for Access Token**

The authorization code is an intermediate credential, which encodes the authorization obtained at Step 1. To retrieve the access token, the client must submit the code to the authorization server, use the [Access token by OAuth 2 token API](../../references/api/oauth/#access-token-by-oauth-2-token) to obtain an access_token.

```
https://cloud-api.loginradius.com/sso/oauth/access_token

Request Body:
{
 client_id:{app-id},
 client_secret:{app-secret},
 redirect_uri:{redirect-uri},
 response_type:token,
 code:{code-parameter},
}

```
**Required Parameters**

Here is an explanation of the Request Body Parameter :

- **client_id:** [LoginRadius API key](#get-credentials).

- **redirect_uri:** Callback URL of your site where you want to redirect back your customers

- **client_secret:** [LoginRadius API secret](#get-credentials).

- **code:** The parameter received from the Login Dialog redirect above.

- **response_type:** Value must be 'token' always

```
API Response containing the access_token: 
{
 "access_token": {Loginradius Access Token},
 "token_type": {type},
 "expires_in": {seconds till expiration},
 "refresh_token" : {Refresh Token}
}

```

**Step 3: Use Obtained LoginRadius Access Token**

You can use the obtained access_token with [LoginRadius APIs](references/api/oauth/#user-registration-overview) supporting the access_token until the token expires or revokes.

> **Note:** To include PKCE within this request, refer to this [document](../../references/api/oauth/#proof-of-key-for-code-exchange) for more information.

### Implicit 

This section covers use of the Implicit flow with LoginRadius. It is similar to Authorization Code flow except that the **response_type** can be **token** or both **code** and **token**.

**Implicit Workflow Link**

To begin with Authorization Code flow, your application should redirect the consumer to the following authorization URL:

`https://cloud-api.loginradius.com/sso/oauth/redirect?client_id={LoginRadius API key}&redirect_uri={Callback URL}&scope={Scope}&response_type=code&state={random long string}`

**Required Parameters**

The access token request will contain the following parameters. Here is an explanation of the URL Parameter:

- `https://cloud-api.loginradius.com/sso/oauth/redirect`: The API authorization endpoint.

- **client_id:** The identifier of the customer at the authorization server. Enter the [LoginRadius API key](#get-credentials)

- **Redirect_uri:** Callback URL of your site where you want to redirect back your customers after an authorization code is granted.

  > **NOTE:** Make sure that you have whitelisted the Redirect_uri in your [LoginRadius Dashboard](https://dashboard.loginradius.com/configuration). For more information, refer to this [document](#whitelist-domain).

- **scope [optional]:** Specifies the scope of the requested token. If omitted, the authorization server may assume some default scope.
- **state [optional]:** this parameter will be returned as it is, part of the response

- **Response_type:** Set to **token**, or it could be both **code** and **token** to indicate an authorization code flow. The following are the response structures for both cases:
  a. Response of login dialog if **response_type=token:** `YOUR_CALLBACK_URI?token={LoginRadius access token}`
  b. Response of login dialog if **response_type=code,token:** `YOUR_CALLBACK_URI?code={unique code}&token={LoginRadius access token}&state={Same value which is passed in request}`

Now you can use the obtained **access_token** with **LoginRadius APIs** supporting the **access_token** until the token expires or revokes.


### Resource Owner Password Credentials Grant

The Resource Owner Password Credentials Grant flow allows you to obtain an access_token by utilizing the consumer's traditional username/email/phoneid and password credentials.


**Step 1: Obtain Access Token** 

Use the [Access Token by Account Password](../../references/api/oauth/#access-token-by-account-password) to obtain an access_token.

**POST**

```
 https://cloud-api.loginradius.com/sso/oauth/access_token

Request Body:
{
 "client_id": <<Your LoginRadius API Key>>,
 "client_secret": <<Your LoginRadius API Secret>>,
 "grant_type": "password",
 "username": <<Should be, email/phoneid/username of the customer>>,
 "password": <<The password of the account to login>>
}

```

**Required Parameters**

Here is an explanation of the Request Body Parameters:

- **client_id:** [LoginRadius API key](#get-credentials).
- **client_secret:** [LoginRadius API secret](#get-credentials).
- **grant_type:** Value must always be 'password'.
- **username:** You must provide the customer's email/username/phoneid, depending on how you have configured LoginRadius for authentication.

- **password:** The customer's account password.

**API Response containing the access_token:**

```
{
 "access_token": {Loginradius Access Token},
 "token_type": {type},
 "expires_in": {seconds till expiration},
 "refresh_token" : {Refresh Token}
}

```

**Step 2: Use Obtained LoginRadius Access Token** 

You can use the obtained access_token with [LoginRadius APIs](../../references/api/oauth/#user-registration-overview) supporting the access_token until the token expires or revokes.

### Device Code Flow

This section covers use of the Device Code flow with LoginRadius.

First, you need to enable the device code flow feature by raising a support ticket to the [LoginRadius Support](https://loginradiusassist.freshdesk.com/customer/login) team. You should provide the following details at the time of configuration :

```
"LoginUrl": "< login URL>"// Device will open this URL to get the code and login after authentication in the browser. 
"VerificationUrl" : "<Verification URL>", //Consumer enter the code and complete login at this URL in the browser.
"AfterVerificationUrl": "<After Verification URL>" //Consumer will be redirected to this URL after verifying the code.
"DeviceCodeExpire" : e.g. 1800 (in second),
"PollingInterval" : e.g.10 (in second)

```
**Step 1: Obtained Device Code** 

Use the [Request Device Code](../../references/api/oauth/#request-device-code) API to request a new device code, user code from the Device Code Endpoint.

```
Post: https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/device

Request Body
{
 "client_id": "",
 "Scope": ""
}

```
**Required Parameters**

Here is an explanation of the Request Parameters:

- **client_id:** [LoginRadius API key](#get-credentials)
).
- **Scope:** Optional parameter(e.g email profile)

**Response containing the user code and device code:**
```
{
 "device_code": "NGU5OWFiNjQ5YmQwNGY3YTdmZTEyNzQ3YzQ1YSA",
 "user_code": "BDWP-HQPK",
 "verification_uri": "https://authorization-server.com/device",
 "interval": 5,
 "expires_in": 1800
}

```
**Step 2: Device Authentication** 

By using the following endpoint: **/sso/oauth/{OAuthName}/device/confirm**, consumer provides the user code for the device authentication. In response, consumer receives the verification URL that contains the UI where they can enter the user code,

**Query Parameter:**

Here is an explanation of the Request Parameter:

- **client_id:** [LoginRadius API key](#get-credentials).

- **user_code:** User code received in response of Request Device Code API (mentioned in step 1)

**API Response:** When the consumer enters the valid user code, then it will be redirected to the Hosted page to be authenticated. After the consumer authenticates, it redirects back to the return to the device page.

```
https://<hosted-page>/auth.aspx
?scope=device&
return_url=URLENCODE(https://cloud-api.lrinternal.com/sso/oauth/device/callback?state=<Random>)

```
**Step 3: Accept Authorization Request** 

Use the [Request Token API](../../references/api/oauth/#request-tokens) to accept the authorization request.

```
 https://cloud-api.loginradius.com/sso/oauth/{OAuthName}/access_token
 Request Body
 {
 "client_id": "",
 "device_Code": "",
 "grant_type": "urn:ietf:params:oauth:grant-type:device_code"
}

```
**Required Parameters**

Here is an explanation of the Request Parameters:

* **client_id:** [LoginRadius API key](#get-credentials).
* **device_code:** Enter the device code
* **Grant-Type:** Value should be used as **urn:ietf:params:oauth:grant-type:device_code**


**API response should be:**

- **Authorization Pending:**

  The authorization request is still pending as the consumer hasn't yet completed the user code authentication. The client SHOULD repeat the Access Token Request to the token endpoint using polling. 

```

{
 "error":"authorization_pending",
 "error_description":""

}

```
  
- **Slow Down:**

```
Before each new request, the client MUST wait at least the number of seconds specified by the "interval" parameter of the Device Authorization Response. Otherwise returns
{
 "error":"slow_down",
 "error_description":""
}

```
- **Expire Token:** 

```
When an access token is expired
{
 "error":"expired_token",
 "error_description":""
}

```
- **Access Denied:**

```
If the consumer denied the authorization
{
 "error":"access_denied",
 "error_description":""
}

```
- **Containing the access_token:**

```
{
 "access_token": "1fae8e10-f15a-4738-b475-8ca4f75a1052",
 "refresh_token": "2f5565610-f15a-4738-b475-fghyeruh7654",
 "token_type": "bearer",
 "expires": 3600
}

```
## Refresh Token

Once you have obtained an **access_token**, you can use the Refresh Access Token API to refresh the access_token.

**Required Parameters**

Here is an explanation of the Request Body Parameter:

* **client_id:** [LoginRadius API key](#get-credentials). 

* **client_secret:** [LoginRadius API secret](#get-credentials).

* **grant_type:** The grant_type needs to be refresh_token.

* **refresh_token:** *This is the refresh_token you received when you used the 'Access token by OAuth 2 token' and 'Access Token by Account Password' API call

**API Response containing the refresh access_token:**

```
{
 "access_token": {Loginradius Access Token},

 "token_type": {type},

 "expires_in": {seconds till expiration},

 "refresh_token": {Refresh Token}

}

```


## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## Whitelist Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Domain Whitelisting](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

## Proof of Key for Code Exchange

**PKCE** is an extension to the Authorization Code flow to prevent certain attacks and to be able to securely perform the OAuth/OIDC exchange from public clients. It is primarily used by mobile and JavaScript apps, but the technique can be applied to any client as well.

The following image displays the logical flow of the PKCE with Oauth and OIDC authorization process:

![alt_text](images/PKCE.png "image_tooltip")

The following steps explain the working of the above sequence diagram:

1.  An authorization request is sent from the customer application along with the code challenge.
2.  The OAuth 2.0/OIDC APIs redirects the request to the IDX page in order to authorize the user.
3.  The success response is received to the API after successful authorization at the IDX page and the API further generates the code and sends the response to the application with other parameters.
4.  Authorization code is compared with the code verifier for further exchange of access token via Access Token API.
5.  After successful execution of the process, access token and refresh tokens are retrieved at the application level.

### Generating PKCE code verifier and challenge

First, you need to generate and store a secret **code_verifier** and **code_challenge**. The code verifier is a cryptographically random string using the characters **A-Z, a-z, 0-9**, and the punctuation characters **-._~** (hyphen, period, underscore, and tilde), between 43 and 128 characters long.

Use the below code in your relevant SDK to generate the **code_verifier** and **code_challenge**.

#### For Node.js:

```
var crypto = require("crypto")

function base64URLEncode(str) {
    return str.toString('base64')
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=/g, '');
}
var verifier = base64URLEncode(crypto.randomBytes(32));
console.log("code_verifier: ", verifier)

if(verifier){
    var challenge = base64URLEncode(sha256(verifier));
    console.log("code_challenge: ",challenge)
}


function sha256(buffer) {
    return crypto.createHash('sha256').update(buffer).digest();
}
```


#### For Golang:

```
package main

import (
    "crypto/sha256"
    "encoding/base64"
    "fmt"
    "math/rand"
    "strings"
    "time"
)

type CodeVerifier struct {
    Value string
}

const (
    length = 32
)

func base64URLEncode(str []byte) string {
    encoded := base64.StdEncoding.EncodeToString(str)
    encoded = strings.Replace(encoded, "+", "-", -1)
    encoded = strings.Replace(encoded, "/", "_", -1)
    encoded = strings.Replace(encoded, "=", "", -1)
    return encoded
}

func verifier() (*CodeVerifier, error) {
    r := rand.New(rand.NewSource(time.Now().UnixNano()))
    b := make([]byte, length, length)
    for i := 0; i < length; i++ {
        b[i] = byte(r.Intn(255))
    }
    return CreateCodeVerifierFromBytes(b)
}

func CreateCodeVerifierFromBytes(b []byte) (*CodeVerifier, error) {
    return &CodeVerifier{
        Value: base64URLEncode(b),
    }, nil
}

func (v *CodeVerifier) CodeChallengeS256() string {
    h := sha256.New()
    h.Write([]byte(v.Value))
    return base64URLEncode(h.Sum(nil))
}

func main() {
    verifier, _ := verifier()
    fmt.Println("code_verifier: ", verifier.Value)
    challenge := verifier.CodeChallengeS256()
    fmt.Println("code_challenge :", challenge)
}
```


> **Note**: Sometimes the packages of the language used, get deprecated so we recommend using the inbuilt packages in that case.

Once you’ve generated the **code_verifier**, it uses that to create the **code challenge**. For devices that can perform a SHA256 hash, the code challenge is a BASE64-URL-encoded string of the SHA256 hash of the code verifier.

**code_challenge** and **code_challenge_method** are optional parameters. If you do not pass these parameters then the flow will work without PKCE.

Note that if you are passing **code_challenge** and the **code_challenge_method** in the authorization request then only the PKCE flow would work and in this case, **code_verifier** would be required to get the token in exchange for the authorization code request.

> **Note:** Currently we are supporting the SHA256 Hash algorithm to generate the code challenge. If we do not pass any method, we use the default method SHA256.

### OAuth 2.0 PKCE Flow

**Authorization URL:** `https://cloud-api.loginradius.com/sso/oauth/redirect?`

**Request Parameters**

```
client_id={LoginRadius API key}
&redirect_uri={Callback URL}
&scope={Scope}
&response_type=code
&state={random long string}
&code_challenge={code challenge}
&code_challenge_method=SHA256
```

For more details over the OAuth documentation, refer [here](#connect-oauth-app).

**Exchange the Authorization Code**

The pre-generated **code_verifier** needs to be sent along with the token request. The authorization server will check whether the verifier matches the challenge that was used in the authorization request. This ensures that a malicious party that intercepted the authorization code will not be able to use it.

`POST-https://cloud-api.loginradius.com/sso/oauth/access_token`

```
Request body:
{
   client_id:{app-id},
   client_secret:{app-secret},
   redirect_uri:{redirect-uri},
   response_type:token,
   code:{code-parameter}
   code_verifier: {code verifier (generated in the first step)}
}
```

> **Important Note: The `client_secret:{app-secret}` is an optional parameter, you may or may not use this for validation purpose.**

### OIDC V2 PKCE Flow

**Authorization Code Flow**

The authorization code flow returns an authorization code that can then be exchanged for an identity token and/or access token. This requires client authentication using a client_id and a secret to retrieve tokens from the back end and has the benefit of not exposing tokens to the user agent (i.e. a web browser). This flow allows for long-lived access (through the use of refresh tokens). Clients using this flow must be able to maintain a secret. This flow obtains the authorization code from the authorization endpoint and all tokens are returned from the token endpoint.

For more details refer to the OIDC documentation, [here](/guide/oidc).

`https://cloud-api.loginradius.com/sso/oidc/v2/<OIDC AppName>/authorize`

**Request Parameters**

```
client_id=
&redirect_uri=
&response_type=
&state={random long string}
&scope=openid email
&nonce={nonce}
&response_mode=form_post
&max-age=123, 
&claims= {"email":null,"email_verified":null},"userinfo"{"email":null,"email_verified":null,"name":null}}
&code_challenge={code challenge}
&code_challenge_method=SHA256
```


**Exchange the Authorization Code**

The same process will be followed as in the case of OAuth’s exchange of authorization code.

`POST https://cloud-api.loginradius.com/sso/oidc/v2/<OIDC AppName>/token`

```
Request body:
{
  "client_id":{Loginradius app api key},
  "client_secret":{Loginradius app api secret},
  "redirect_uri":{callback url passed in the authorization API},
  "response_type":"token",
  "grant_type" : "authorization_code"
  "code": {Authorization code received in the Authorization API}
  "code_verifier": {code verifier (generated in the first step)}
}
```


> **Important Note: The `client_secret":{Loginradius app api secret}` is an optional parameter, you may or may not use this for validation purpose.**


[Go Back to Home Page](/)

## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## Whitelist Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Domain Whitelisting](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")






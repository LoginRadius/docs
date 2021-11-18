---
title: "Proof of Key for Code Exchange"
tags: ["PKCE", "SSO", "OAuth", "OIDC"]
description: "An overview about proof of key for code exchange."
path: "/concepts/pkce"
---

# Proof of Key for Code Exchange

**PKCE** is an extension to the Authorization Code flow to prevent certain attacks and to be able to securely perform the OAuth/OIDC exchange from public clients. It is primarily used by mobile and JavaScript apps, but the technique can be applied to any client as well.

The following image displays the logical flow of the PKCE with Oauth and OIDC authorization process:

![alt_text](../../guide/oauth/images/PKCE.png "image_tooltip")

The following steps explain the working of the above sequence diagram:

1.  An authorization request is sent from the customer application along with the code challenge.
2.  The OAuth 2.0/OIDC APIs redirects the request to the IDX page in order to authorize the user.
3.  The success response is received to the API after successful authorization at the IDX page and the API further generates the code and sends the response to the application with other parameters.
4.  Authorization code is compared with the code verifier for further exchange of access token via Access Token API.
5.  After successful execution of the process, access token and refresh tokens are retrieved at the application level.

## Generating PKCE code verifier and challenge

First, you need to generate and store a secret **code_verifier** and **code_challenge**. The code verifier is a cryptographically random string using the characters **A-Z, a-z, 0-9**, and the punctuation characters **-.\_~** (hyphen, period, underscore, and tilde), between 43 and 128 characters long.

Use the below code in your relevant SDK to generate the **code_verifier** and **code_challenge**.

### For Node.js

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

### For Golang

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

## OAuth 2.0 PKCE Flow

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

For more details over the OAuth, refer to this [section](#connect-oauth-app).

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

## OIDC V2 PKCE Flow

**Authorization Code Flow**

The authorization code flow returns an authorization code that can then be exchanged for an identity token and/or access token. This requires client authentication using a client_id and a secret to retrieve tokens from the back end and has the benefit of not exposing tokens to the user agent (i.e. a web browser). This flow allows for long-lived access (through the use of refresh tokens). Clients using this flow must be able to maintain a secret. This flow obtains the authorization code from the authorization endpoint and all tokens are returned from the token endpoint.

For more details, refer to this [section](#connect-oauth-app).

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

> **Note:** The `client_secret":{Loginradius app api secret}` is an optional parameter, you may or may not use this for validation purpose.


[Go Back to Home Page](/)
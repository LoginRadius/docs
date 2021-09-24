---
title: "OpenID connect"
tags: ["OIDC", "OpenID Connect", "OAuth2.0"]
description: "This is a guide for implementing OpenID Connect flow in the LoginRadius Identity Platform."
path: "/guide/oidc"
---

<span class="devloper-premium plan-tag">Premium</span>

# OpenID Connect

OpenID Connect or (OIDC) is an authentication layer on top of the OAuth 2.0 framework that is standardized by the OpenID Foundation. LoginRadius provides a way to integrate your OpenID Connect client with our APIs by following the standards specified in the <a href="https://openid.net/specs/openid-authentication-2_0.html" target="_blank">OpenID Connect specs</a>. These specs cover the various requirements and standardized process that OpenID Connect encompasses.

This <a href="https://betterprogramming.pub/the-complete-guide-to-oauth-2-0-and-openid-connect-protocols-35ebc1cbc11a" target="_blank">guide</a> will show you OAuth 2.0 and Open ID connect working in action.

## OpenID Configurations in LoginRadius Dashboard

1. Log in to your <a href="https://dashboard.loginradius.com/" target="_blank">LoginRadius Dashboard</a> account, select your app and navigate to **Integration**, the following screen will appear:

   ![alt_text](../../assets/blog-common/configured-integration.png "image_tooltip")

2. Click **Add** button for adding a new OpenID app. Either search for **OpenID** in search bar or go to the **Select Category** dropdown and select **Outbound SSO** category. Locate **OpenID** and click the **Try It For Free** link.

   ![alt_text](/images/outbound-oidc.png "image_tooltip")
   
   The following screen will appear:
   
   ![alt_text](/images/outbound-oidc-popup.png "image_tooltip")

3. Click the **Enable** button and then click the **Let’s Configure** option that appeared on **Outbound SSO - OIDC** tile.

   The following screen will appear:

   ![alt_text](/images/outbound-oidc-details.png "image_tooltip")

4. Enter or select the following to configure the OpenID app:

   - **App Name:** Enter the name for your OpenID Connect App.

   - **Secret Key:** You will need to generate an OpenID Connect Secret using RS256 and add it here. You can get the secret key by running the following command on your terminal:

      ```
      openssl genrsa -out key.pem 2048

      ```
      Additionally, you can use the following command to generate the **Public key** from the private key that will be used to verify generated JWT id_token.

      ```
      openssl rsa -in key.pem -outform PEM -pubout -out public.pem

      ```
   - **Algorithm:** The algorithm you would like to use for OpenID Connect (RS256 is currently the only algorithm supported).

   - **Data Mapping:** Enter your desired fields and how they map out the left column is how they will show up in the OIDC, the right column is the field name in the LoginRadius profile, keep in mind that for some of the profile fields you will need to use dot notation to access them.

5. Click the **Save** button.

The OpenID app is now configured.

## OpenID Connect Flows

In the OpenID Connect standard, there are following 3 types of authentication flows:

* [Authorization Code Flow](#authorization-code-flow)

* [Implicit Flow](#implicit-flow)

* [Hybrid Flow](#hybrid-flow)

Each flow requires going through an Authorization Endpoint, essentially the page where the consumer is prompted to Log in. Depending on the workflow you choose to leverage, you will need to add different query parameters to the URL that points to the Login page.

You can use the table below for an overview of all of the different parameters that can be passed to the Authorization Endpoint:

| Parameters    |               |
| :-------------: |-------------|
| client_id     | (required) Loginradius API Key |
|               |
| redirect_uri  | (required) This is the URI to which the response should be sent. This must be whitelisted in the App Section
|               |in Admin Console |
|               |
| response_type | (required) This defines the processing flow to be used when forming the response.
|               |
|               | Authorization Flow:
|                | response_type: code
|                |
|                | Implicit Flow:
|                | response_type: token
|                | response_type: token id_token
|                |
|                | Hybrid Flow:
|                | response_type: code token
|                | response_type: code id_token
|                | response_type: code token id_token 
|                |
|  state         | (optional) It is recommended that the client’s use this parameter to maintain state between the request and |                | the callback. Typically, Cross-Site Request Forgery (CSRF, XSRF) mitigation is done by cryptographically |                | binding the value of this parameter with a browser cookie
|                |
| scope          |(required) This is a space-delimited list of the scopes requested by the client. It must contain the value |                |openid to indicate that the application intends to use OIDC. This may also contain other values e.g.  |                |`openid`, `profile`,`email`, `phone`, `address` . Unrecognized values will be ignored.
|   	|   	|
|nonce	|(optional) This serves as a token validation parameter, used to associate a client authentication with an ID Token for |
|   	|mitigating replay attacks. If this value is used, it will be included as a Claim in the ID Token. Clients should   	|
|   	|verify that this nonce Claim value is equal to the value set in the Authorization Request.   	|
|   	|   	|
|response_mode   	|  (optional) Informs the Authorization Server of the mechanism to be used for returning parameters from the|
|   	|Authorization Endpoint    	|
|   	|   	|
|   	|There are three types of response mode   	|
|   	|   	|
|   	|query → Authorization response will append in the redirect_uri as the query string.|
|   	|(Ex→ example.com&state=fgfgfg&code=ffgfgfgfgf)     	|
|   	|   	|
|   	|fragment → Authorization response will append in the redirect_uri using the fragment (Ex→    	|
|   	|example.com#state=fgfgfg&code=ffgfgfgfgf).   	|
|   	|   	|
|       |form_post → Authorization response will be posted on the redirect uri, Default Response Mode        |
|       |if not provided|
|       |        |
|   	|Authorization code flow → query|
|	    |Implicit Flow → fragment	|
|   	|Hybrid Flow → fragment     	|
|   	|   	|
| ui_locales |  (optional) Consumer's preferred languages and scripts for the user interface, represented as a  	|
|   	|  space-separated list of BCP47 [RFC5646] language tag values, ordered by preference. For  	|
|   	| instance, the value "fr-CA fr en" represents a preference for French as spoken in Canada, then   	|
|   	| French (without a region designation), followed by English (without a region designation)   	|
|   	|   	|
|  display 	| (optional) specifies how the Authorization Server displays the authentication and consent user   	|
|   	|  interface pages to the consumer. The defined values are page - authentication will be open in the page 	|
|   	|  popup- authentication will be open in the popup. This parameter is send over the auth page(IDX) 	|
|   	|   page as query string, and auth page(IDX) will handle the display type	|
|   	|   	|
|  prompt 	|   (optional) specifies the Authorization Server prompts the consumer for reauthentication and consent. The defined|
|   	|  values are login - it will ask for the reauthentication 	| 
|   	|   none - The Authorization Server MUST NOT display any authentication or consent user interface pages. An error is |
|	|returned if user is not authenticated.		|
|   	|   This parameter is send over the auth page(IDX) as query string, and auth page(IDX) will handle the display type	|
|   	|   	|
|  claims 	|   (optional) Client applications can alternatively request claims via the optional claims parameter. which needs:	|
|   	|  Setting the exact names of the requested claims 	|
|   	|  Which claims should be delivered at the UserInfo endpoint and which in the ID token 	|
|   	|  The claims request parameter is represented by a simple JSON object that has two members --  	|
|   	|  userinfo and id_token, which content indicates which claims to return 	|
|   	|  `{ "id_token" : { "email" : null, "email_verified" : null }, "userinfo" { "email" : null, "email_verified" : null`
|   	|  `"name" : null } }` 	|
|   	| or  	|
|   	|   `{ "id_token" : { "email" : { "essential" : true }, "email_verified" : { "essential" : true }}, "userinfo" { "email"`
|   	|   `: { "essential" : true }, "email_verified" : null, "name"`  	|
|   	|  `: { "essential" : true }} }` 	|
|   	|   `{ "essential" : true }` means the claim should be available in the token but also it should be in the user profile.|
|   	|   	|
|id_token_hint	|(optional) ID Token previously issued by the Authorization Server being passed as a hint about 	|
|   	|   the consumer's current or past authenticated session with the Client. If the consumer identified 	|
|   	|  by the ID Token is logged in or is logged in by the request, then the Authorization Server returns  	|
|   	|a positive response; otherwise, it will return a login_required error, and invalidate the current access token.   	|
|   	|   	|
| login_hint  	| (optional) Hint to the Authorization Server about the login identifier (Email or PhoneId) the consumer might 	|
|   	|  use to log in (if necessary).   If the consumer profile matches that of the login  	|
|   	|   identifier, Authorization Server will return a positive response. Otherwise, it will return a login_required error  a
|   	| and invalidate the associated access token. In the future, support could be added to pass this value as a hint to the |
|   	| authorization service. It is RECOMMENDED that the hint value matches the value used for discovery.	|
|   	|   	|
|  max_age 	| (optional) Maximum Authentication Age. Specifies the allowable elapsed time in seconds since the last time the 
|   	| consumer was actively authenticated by the OP. If the elapsed time is greater than this value, the OP MUST attempt to 
|   	|  actively re-authenticate the consumer. When max_age is used, the ID Token returned MUST include an auth_time Claim 
|   	| Value.  	|
|   	|   	|
|acr_values	|(optional) If this optional parameter is set to loginradius:nist:level:1:re-auth the user will be forced to 	|
|   	|  re-authenticate regardless of their current session state. This value will also be returned in the acr claim of the 	|
|   	|   ID Token. 	|


### Authorization Code Flow

The authorization code flow (as the title implies) returns an authorization code that can then be exchanged for an identity token and/or access token. This requires client authentication using a client_id and a secret to retrieve tokens from the back end and has the benefit of not exposing tokens to the user agent (i.e. a web browser). This flow allows for long-lived access (through the use of refresh tokens). Clients using this flow must be able to maintain a secret.

This flow obtains the authorization code from the authorization endpoint and all tokens are returned from the token endpoint.


#### Open Login Dialog/Authorization Endpoint

Redirect your user to the following URL to get the login prompt:

`https://cloud-api.loginradius.com/sso/oidc/v2/{oidcappname}/authorize?client_id={LoginRadius API key}&redirect_uri={Callback URL}&scope={Scope}&response_type={one of the response_types available}&state={random long string}&scope=openid&nonce={Unique Generated nonce}`

**Available Query Parameters**

- **client_id:** [Loginradius API key](#get-credentials)
- **redirect_uri:** Callback URL of your site where you want to redirect back your users
- **response_type:** Possible value is only 'code' to specify that you are doing the Authorization Code flow.
- **state:** Random string that returned with the access_token in the redirect callback. this parameter will be returned as it is, part of the response.
- **scope:** Should be set to one of the values, e.g. openid
- **nonce:** A unique generated nonce.

#### Receive Code

Upon successful consumer authentication, the code will be returned as follows:

**Response of login dialog if response_type=code**

`REDIRECT_URI?code={unique code}&state={Same value which is passed in request}`

If the `respose_mode=from_post` is passed, then the response will be in post body of the `redirect_url`
e.g. 
``` 
{
    state: {state}
    code: {authorization code}

}
```


Once you have the code, you can request an access_token via the <a href="https://www.loginradius.com/docs/developer/references/api/oidc/#access-token-by-openid-code" target="_blank">Access token by OpenID Code API</a>.

### Implicit Flow

The implicit flow requests tokens without explicit client authentication, instead of using the redirect URI to verify the client identity. Because of this, refresh tokens are not allowed, nor is this flow suitable for long lived access tokens. From the client application's point of view, this is the simplest to implement, as there is only one round trip to the openid&nonce={Unique Generated nonce}`

**Available Query Parameters**

- **client_id:** [Loginradius API key](#get-credentials) 
- **redirect_uri:** Callback URL of your site where you want to redirect back your users
- **response_type :** Possible values are token, id_token or token id_token.
- **state:** Random string that returned with the access_token in the redirect callback. this parameter will be returned as it is, part of the response.
- **scope:** Should be set to one of the values, e.g. openid
- **nonce:** A unique generated nonce.

#### Receive Tokens

Upon successful consumer authentication, the tokens will be returned as follows:

1. **Response of login dialog if response_type=token** `REDIRECT_URI?token={LoginRadius access token}&state={Same value which is passed in request}`    
2. **Response of login dialog if **response_type=id_token** `REDIRECT_URI?id_token={JWT token}&state={Same value which is passed in request}`
3. **Response of login dialog if response_type=token id_token** `REDIRECT_URI?{unique code}&token={LoginRadius access token}&id_token={JWT token}&state={Same value which is passed in request}`

### Hybrid Flow

The hybrid flow is a combination of aspects from the previous two. This flow allows the client to make immediate use of an identity token and retrieve an authorization code via one round trip to the authentication server. This can be used for long lived access (again, through the use of refresh tokens). Clients using this flow must be able to maintain a secret.

This flow can obtain an authorization code and tokens from the authorization endpoint, and can also request tokens from the token endpoint.

#### Opening the Login Dialog/Authorization Endpoint

**Available Query Parameters**

Redirect your user to the following URL to get the login prompt:

`https://cloud-api.loginradius.com/sso/oidc/v2/{oidcappname}/authorize?client_id={LoginRadius API key}&redirect_uri={Callback URL}&scope={Scope}&response_type={one of the response_types available}&state={random long string}&scope=openid&nonce={Unique Generated nonce} `

- **client_id:** [Loginradius API key](#get-credentials) 
- **redirect_uri:** Callback URL of your site where you want to redirect back your users
- **response_type :** Possible values are token, id_token or token id_token.
- **state:** Random string that returned with the access_token in the redirect callback. this parameter will be returned as it is, part of the response.
- **scope:** Should be set to one of the values, e.g. openid
- **nonce:** A unique generated nonce.



#### Receive Tokens

Upon successful consumer authentication, the tokens will be returned as follows:

1. **Response of login dialog if** `response_type=token REDIRECT_URI?token={LoginRadius access_token}&state={Same value which is passed in request}`
2. **Response of login dialog if** `response_type=id_token REDIRECT_URI?id_token={JWT token}&state={Same value which is passed in request}`
3. **Response of login dialog if** `response_type=token id_token REDIRECT_URI?{unique code}&token={LoginRadius access_token}&id_token={JWT token}&state={Same value which is passed in request}`


## Additional Steps
Once you have obtained a code or access_token (depending on the workflow you've followed), you can take additional steps shown below.

### Exchange Code for an Access Token

If you've obtained an authorization code, you're able to exchange it for an access_token.

Use the <a href="https://www.loginradius.com/docs/developer/references/api/oidc/#access-token-by-openid-code" target="_blank">Access token by OpenID Code</a> API to get the access_token, JWT Token, and the refresh_token.

### Refresh Access Token

You can use the <a href="https://www.loginradius.com/docs/developer/references/api/oidc/#refresh-access-token" target="_blank">Refresh Access Token API Call</a>to expire a Refresh Token.

### Get UserInfo

The UserInfo of a logged in user can be retrieved with the <a href="https://www.loginradius.com/docs/developer/references/api/oidc/#userinfo-by-access-token" target="_blank">UserInfo by Access Token API</a> call, which will return the UserInfo in a JWT Token.

> **Note:** The RSA algorithm is currently the only supported encryption type for the JWT tokens.

## Other OpenID Functionality

Here are some other endpoints you will need in your OpenID workflow.

### Get JSON Web Key Set

Our <a href="https://www.loginradius.com/docs/developer/references/api/oidc/#json-web-key-set" target="_blank">JSON Web Key Set API Call</a> provides the JWKS that can be used to verify any JWT token with the returned JSON Web Key Set (JWKS).

### OIDC Discovery Endpoint

The <a href="https://www.loginradius.com/docs/developer/references/api/oidc/#oidc-discovery-endpoint" target="_blank">OIDC Discovery API Endpoint</a> provides a client with configuration details about the OpenID Connect metadata of the Loginradius App.


URL Format: https://cloud-api.loginradius.com/sso/oidc/v2/{sitename}/{oidcappname}/.well-known/openid-configuration


## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **<a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > API Credentials</a>** and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## Whitelist Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **<a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > Whitelist Your Domain</a>** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

















[Go Back to Home Page](/)





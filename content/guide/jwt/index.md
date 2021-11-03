---
title: "Guide to connecting JWT"
tags: ["JWT", "GetStarted", "Outbound", "SSO"]
description: "This is a tutorial with JWT implementation."
path: "/guide/jwt"
---

<span class="devloper-premium plan-tag">Developer Pro</span>
<span class="devloper-premium plan-tag">Add on</span>

# Outbound SSO - JWT

This guide will take you through the process of setup and implementation of the outbound SSO using JWT. It covers the following:

- Functional flow of JWT SSO
- Configuration you need to do in LoginRadius Dashboard
- Implementing JWT SSO with LoginRadius APIs

## Outbound SSO - JWT Flow

The following flow chart shows how JWT flow works between IDP and SP, where IDP here is LoginRadius and SP is consumer's application:

![alt_text](../../guide/jwt/images/jwt-sso-flow.png "image_tooltip")

LoginRadius supports a delegated redirect SSO flow through which you can redirect your consumer to [LoginRadius Auth Page (IDX)](/guide/customize-auth-page), where your consumer can do account management actions.

Upon successful login or social login, the consumer will be redirected to the return URL along with the JWT for this authentication session. Here is the step by step instruction for setting JWT SSO flow:

1. First of all, configure a JWT app in your LoginRadius Dashboard. Refer to the JWT LoginRadius Dashboard Configuration(#loginradius-dashboard-configuration) section for how to configure JWT in the LoginRadius Dashboard.

2. Whitelist the service provider URL in the LoginRadius Dashboard. Follow [this](#whitelist-domain) for information on how to whitelist URLs in the LoginRadius Dashboard.

3. The following is the LoginRadius JWT SSO URL: `https://cloud-api.loginradius.com/sso/jwt/redirect/token?apikey=<LRapikey>&jwtapp=<jwtAppName>&return_url=<encode(service provider url)>`

4. If a consumer is not logged in on your service provider app then direct it to the LoginRadius JWT SSO URL `(https://cloud-api.loginradius.com/sso/jwt/redirect/token?apikey=&jwtapp=&return_url=)`

5. The JWT SSO URL will redirect to your LoginRadius Auth Page(IDX) `(https://<your-app-name>.hub.loginradius.com)`

If the consumer is not logged into the hosted page, the consumer will be asked to log in. After authentication, the consumer will be redirected back to the return URL with the JWT as a query parameter.

## LoginRadius Dashboard Configuration

This section covers the required configurations that you need to perform in the LoginRadius Dashboard for JWT Login.

1. Log in to your <a href="https://dashboard.loginradius.com/" target="_blank">LoginRadius Dashboard</a> account, select your app and navigate to <a href="https://dashboard.loginradius.com/integration" target="_blank">Integration</a>.

   The following screen will appear:

   ![alt_text](../../assets/blog-common/configured-integration.png "image_tooltip")

2. Click **Add** option for adding a new JWT app. The following configuration options will appear:

   ![alt_text](../../guide/jwt/images/jwt-configuration.png "image_tooltip")

3. Either search for JWT in the search bar or go to the **Select Category** dropdown and select **Outbound SSO**. Locate **Outbound SSO - JWT** and click the **Add Me**.

   The following pop-up will appear:
   ![alt_text](../../guide/jwt/images/jwt-enable.png "image_tooltip")

   Click the **Enable** button. The app will appear in **Available Integrations**.

   ![alt_text](../../guide/jwt/images/jwt-configure-me.png "image_tooltip")

4. Click the **Let's Configure** under Oubound SSO - JWT. The following screen will appear:

   ![alt_text](../../guide/jwt/images/jwt-configure.png "image_tooltip")

5. You need to provide or select the following values to configure the JWT App.

   - **App Name:** A name that will be used by LoginRadius to identify the provider originating the request. If you have multiple JWT apps, the name should be unique for each. You can use any name, e.g., comapany_Jwt_app. This name will be used in LoginRadius to identify your app during API calls.

   - [**Secret Key:**](#get-credentials) A secret key that would be used to sign the JWT and will later be used to verify the received JWT.

   - **Query String Parameter:** The query parameter name in which LoginRadius sends JWT during JWT SSO flow. After authentication, the redirect URL will contain a JWT under this parameter name. The redirect URL will look like this: <redirecturi>?<parameter name from admin console>=JWTtoken

   - **Algorithms:** Algorithm to sign JWT. LoginRadius supports the following algorithms:

     - HS256
     - HS384
     - HS512
     - RS256
     - RS384
     - RS512

   - **Enter The Key** Specify the Key-value pair of LoginRadius profile data points that you want to receive in the JWT payload.

     - Enter any value for the key column( left column), these values will be used as keys for claims in the payload.

     - Select the desired LoginRadius profile field name in the profile key (right column). The values for these fields from the consumer's profile in LoginRadius will be returned to the JWT payload.

     Similarly, by clicking the **Add Row** button, you can map multiple attributes.

6. Click the **Save** button. Your Outbound SSO -JWT configurations are now complete.

## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to <a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > API Credentials</a> and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## Whitelist Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to <a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > Whitelist Your Domain</a> and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

# JWT LoginRadius APIs

If you are directly implementing your Login forms or already have an access token or want to generate a JWT based on email/username/Phone number or a password, you can leverage the following APIs:

- <a href="https://www.loginradius.com/docs/developer/references/api/jwt/#jwt-token" target="_blank">JWT Token</a>: This GET API is used to exchange access token with your JWT.
- <a href="https://www.loginradius.com/docs/developer/references/api/jwt/#jwt-token-by-email" target="_blank">JWT Token by Email</a>: This API is used to get a JWT by Email and Password.
- <a href="https://www.loginradius.com/docs/developer/references/api/jwt/#jwt-token-by-username" target="_blank">JWT Token by Username</a>: This API is used to get JWT by Username and password.
- <a href="https://www.loginradius.com/docs/developer/references/api/jwt/#jwt-token-by-phone" target="_blank">JWT Token by Phone</a>: This API is used to get JWT by Phone and password.

The response from the above APIs will look like this:

```
{
 signature: <JWTresponse>
}
```

For more information on `<JWTresponse>`, refer to JWT Token Structure.

# More About JWT

LoginRadius supports the following encryption algorithms for the JWT flows:

- HS256
- HS384
- HS512
- RS256
- RS384
- RS512
- ES256
- ES384
- ES512

JWT (JSON Web Token) is a popular method of SSO, which is widely used by B2C applications, and through this system, you can allow your consumers to log in to an application that supports JWT. LoginRadius acts as an Identity Provider; it means LoginRadius can authorize a third-party application that will act as a Service Provider.

## JWT Structure

The JWT will be encrypted with an algorithm. The decrypted JWT contains the Header, Payload, and Secret/Private key. The following explains the information they contain:

- **Header:** It contains metadata about the type of token and the algorithms used to secure its contents.

  ```
  {
  "alg": "HS256",
  "typ": "JWT"
  }

  ```

- **Payload:** It contains the following fields where key1:value1, key 2:value2, etc. pairs are profile field mapping pairs configured in the JWT app in the LoginRadius Dashboard.

  ```
  {
  "iss": "https://<your-app-name>.hub.loginradius.com/",
  "sub": "{uid}",
  "jti": "unique string",
   Key1: value1,
   Key2: value2,
  "iat": 1573849217,
  "nbf": 1573849217,
  "exp": 1573849817
  }

  ```

  The payload can be fully customized to include data mapping for any LoginRadius normalized user profile fields. It can be configured directly from the LoginRadius Dashboard to control the data mapping as well as the encryption algorithm.

- [**Secret/Public Key:**](#get-credentials) It should be the same value as you have configured in the JWT app in the LoginRadius Dashboard.

  > **Note:** LoginRadius provides custom attributes, so it is possible to customize the JWT response. The following is a sample attribute:

  ```
  {
   "type": "basic",
   "title": "Login"
  }

  ``` 

## JWT Best Practices
Before starting with best practices, it is important to note that many attacks on JWT are related to its way of implementation, instead of its design. This does not mean that they are less critical.

> **Note:** Signed JWTs sign both the header and the payload, while JWTs which are encrypted, only encrypt the payload and the header is always in a readable format.

We've had a look at the basic structure and encryption of JWT now we can have a look at the following list of best practices:

- Signing key The signing key should always be kept secret as anyone having access to this key might validate the signature and can decrypt the payload.

- Sensitive data in Payload The signed tokens protected payload against tampering but the JWT payload is readable by anyone. You should not send sensitive data in the payload of a JWT unless it is encrypted.

- Number of Claims to Payload Add the bare minimum number of claims to the payload for the best performance and security.

- Use HTTPS You need SSL/HTTPS to encrypt the communication. Without SSL/HTTPS attackers can sniff the network traffic and obtain the JWT, hence your application is vulnerable to man-in-the-middle attacks.

- Validate All Claims

  - iss -The "iss" (issuer) claim identifies the principal that issued the JWT. The "iss" value is a case-sensitive string containing a StringOrURI value. The "iss" value should match to "https://<your-app-name>.hub.loginradius.com/" to verify the JWT is issued by LoginRadius.

  - iat - The "iat" (issued at) claim identifies the time at which the JWT was issued. This claim can be used to determine the age of the JWT. This can be used to reject tokens that seem too old.

  - exp - The "exp" (expiration time) claim identifies the expiration time on or after which the JWT MUST NOT be accepted for processing. The processing of the "exp" claim requires that the current date/time MUST be before the expiration date/time listed in the "exp" claim. JWTs have embedded by-value tokens and thus we cannot revoke them very easily, once it is issued and delivered to the recipient. Because of that, you should provide them short expiration (minutes or hours) time.

  - aud - valid audience The aud (audience) claim identifies the recipients that the JWT is intended for. Each principal intended to process the JWT must identify itself with a value in the audience claim. If the principal processing the claim does not identify itself with a value in the aud claim when this claim is present, then the JWT must be rejected. The interpretation of audience values is generally application-specific. The Use of this claim is **OPTIONAL**.

  - nbf: The expiration time is not the only time-based claim that can be utilized for JWTs verification. The nbf claim has a "not-before" time which means the token should be rejected if the current time value is before the time mentioned in the nbf claim.

  > **Note:** While working with time-based claims keep in mind that server times can differ slightly between different machines. So to overcome this you should consider allowing a clock skew when checking the time-based values. These clock skew values can be of a few seconds, as this would rather indicate problems with the server.

- Use appropriate Algorithm and perform algorithm verification The JSON Web Algorithms already have a series of recommended and required algorithms, selecting the right one for the desired scenario depends upon the consumers. Additionally, whenever a JWT needs to be validated, the algorithm must be explicitly selected in such a way that it does not provide attackers control.

It is recommended to use the Asymmetric algorithm when signing the JWT token. Asymmetric key signatures in JWT are produced by the sender with the private key and the receiver verify it via the public key. The receiver is provided only with the public key which happens **out_of_band** (i.e. through another means of communication than the one you use to exchange the secured data).

[Go Back to Home Page](/)

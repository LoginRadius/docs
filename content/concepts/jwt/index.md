---
title: "JWT"
tags: ["JWT", "SSO"]
description: "An overview about JWT protocol."
path: "/concepts/jwt"
---

# JWT

JWT (JSON Web Token) is a popular method of SSO, which is widely used by B2C applications, and through this system, you can allow your consumers to log in to an application that supports JWT. LoginRadius acts as an Identity Provider; it means LoginRadius can authorize a third-party application that will act as a Service Provider.

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
  
- <a href="https://www.loginradius.com/docs/developer/faq/#how-to-retrieve-api-key-and-secret" target="_blank"> **Secret/Public Key:**</a> It should be the same value as you have configured in the JWT app in the LoginRadius Dashboard.

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
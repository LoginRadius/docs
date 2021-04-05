---
title: "Passwordless Login API"
tags: ["Passwordless Login API"]
description: "This is a document detailing the LoginRadius Passwordless Login APIs."
path: "/references/api/passwordless-login"
---

# Passwordless Login API
 
## Passwordless Login by Phone

  Sends a Passwordless Login OTP SMS to the specified Phone ID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Phone | none | The Registered Phone Number [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
 
## Passwordless Login By Email

  Sends a Passwordless Login verification link to the specified Email ID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Email | none | Email of the user [**Required**] |
  | PasswordLessLoginTemplate | none | Passwordless Login Template Name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
 
## Passwordless Login Verification

  Verifies a Passwordless Login verification link and exchanges it for user data and a LoginRadius access token. 

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/email/verify`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | VerificationToken | none | Verification token received in the email [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | welcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

## Passwordless Login Phone Verification

  Verifies a consumer by OTP, and exchanges it for their user data and a LoginRadius access token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/otp/verify`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |Otp|The Verification Code
  |Phone|New Phone Number | Model Class containing Definition of payload for PasswordLessLoginOtpModel API [**Required**] 

[Go Back to Home Page](/)

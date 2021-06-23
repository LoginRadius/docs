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
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Phone | none | The Registered Phone Number [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="passwordless-login-by-phone" endpoint="https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/otp" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"phone","default":""},{"key":"smsTemplate"}]}'></try-me-out>
 
## Passwordless Login By Email

  Sends a Passwordless Login verification link to the specified Email ID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Email | none | Email of the user [**Required**] |
  | PasswordLessLoginTemplate | none | Passwordless Login Template Name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="passwordless-login-by-email" endpoint="https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/email" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"email","default":""},{"key":"passwordlessLoginTemplate"},{"key":"verificationUrl"}]}'></try-me-out>
 
## Passwordless Login Verification

  Verifies a Passwordless Login verification link and exchanges it for user data and a LoginRadius access token. 

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/email/verify`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | VerificationToken | none | Verification token received in the email [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | welcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="passwordless-login-verification" endpoint="https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/email/verify" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"verificationToken","default":""},{"key":"fields"},{"key":"welcomeEmailTemplate"}]}'></try-me-out>

## Passwordless Login Phone Verification

  Verifies a consumer by OTP, and exchanges it for their user data and a LoginRadius access token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/otp/verify`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Otp|The Verification Code
  |Phone|New Phone Number | Model Class containing Definition of payload for PasswordLessLoginOtpModel API [**Required**]
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="passwordless-login-phone-verification" endpoint="https://api.loginradius.com/identity/v2/auth/login/passwordlesslogin/otp/verify" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"fields","default":""},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"otp":"", "phone":""}}'></try-me-out>

[Go Back to Home Page](/)

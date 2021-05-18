---
title: "Two-Factor Authentication API"
tags: ["Two-Factor Authentication API", "2FA"]
description: "This is a document detailing the LoginRadius Two-Factor Authentication APIs."
path: "/references/api/two-factor-authentication"
---

# Multi-Factor Authentication

## 2FA Email Login

  Initiates the login process using Email ID on a Two-Factor Authentication (2FA) enabled LoginRadius app.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/login/2FA`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | LoginUrl | none | Url where the user is logging from [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  | SmsTemplate2FA | none | SMS Template Name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

  ### Try Me Out
  <try-me-out id="twofa-email-login" endpoint="https://api.loginradius.com/identity/v2/auth/login/2FA" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"emailTemplate","default":""},{"key":"fields"},{"key":"loginUrl"},{"key":"smsTemplate"},{"key":"smsTemplate2FA"},{"key":"verificationUrl"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"","password":""}}'></try-me-out>

## 2FA Phone Login

  Initiates the login process using Phone ID on a Two-Factor Authentication (2FA) enabled LoginRadius app.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/login/2FA`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | LoginUrl | none | Url where the user is logging from [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  | SmsTemplate2FA | none | SMS Template Name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

  ### Try Me Out
  <try-me-out id="twofa-phone-login" endpoint="https://api.loginradius.com/identity/v2/auth/login/2FA" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"emailTemplate","default":""},{"key":"fields"},{"key":"loginUrl"},{"key":"smsTemplate"},{"key":"smsTemplate2FA"},{"key":"verificationUrl"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phone":"","password":""}}'></try-me-out>

## 2FA Validate Access Token

  Validates an access token and starts the Two-Factor Authentication (2FA) process. If 2FA is set to optional and the consumer has no second factor authenticators active, the consumer's profile information will be returned instead.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/account/2FA`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate2FA | none | SMS Template Name [**Optional**] |

  ### Try Me Out
  <try-me-out id="twofa-validate-access-token" endpoint="https://api.loginradius.com/identity/v2/auth/account/2FA" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey","default":""},{"key":"smsTemplate2FA"}]}'></try-me-out>

## Enable 2FA Google Authenticator by Access Token

  Enables Two-Factor Authentication (2FA) with Google Authenticator for the consumer corresponding to the specified access token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/account/2FA/Verification/GoogleAuthenticatorCode`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |GoogleAuthenticatorCode|The code generated by google authenticator app after scanning QR code | Model Class containing Definition of payload for MultiFactorAuthModel By GoogleAuthenticator Code API [**Required**]

  ### Try Me Out
  <try-me-out id="enable-twofa-google-authenticator-by-access-token" endpoint="https://api.loginradius.com/identity/v2/auth/account/2FA/Verification/GoogleAuthenticatorCode" method="PUT" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey","default":""},{"key":"fields"},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"googleauthenticatorcode":""}}'></try-me-out>

## 2FA Validate OTP

  Validates the OTP sent to the consumer's phone number when the Two-Factor Authentication process was started. If successful returns the consumer's profile data and a LoginRadius access token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/login/2FA/verification/otp`

  ## Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | secondfactorauthenticationtoken | none | A unique 2FA token generated when the Two-Factor Authentication process was started. [**Required**] |
  | SmsTemplate2FA | none | SMS Template Name [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  | otp | The One Time Passcode sent to the consumer. [**Required**] | |

  ### Try Me Out
  <try-me-out id="twofa-validate-otp" endpoint="https://api.loginradius.com/identity/v2/auth/login/2FA/verification/otp" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"secondFactorAuthenticationToken","default":""},{"key":"smsTemplate2FA"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"otp":""}}'></try-me-out>

## 2FA Update Phone Number by Token

  Updates phone number used for Two-Factor Authentication (2FA) via access token by sending a verification OTP to the specified phone number.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/account/2FA`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate2FA | none | SMS Template Name [**Optional**] |

  ### Try Me Out
  <try-me-out id="twofa-update-phone-number-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/account/2FA" method="PUT" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey","default":""},{"key":"smsTemplate2FA"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phoneno2fa":""}}'></try-me-out>

## 2FA Validate Google Auth Code

  Logs in via Two-Factor Authentication (2FA) by passing in a Google Authenticator code.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/login/2FA/verification/GoogleAuthenticatorCode`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SecondFactorAuthenticationToken | none | A Uniquely generated MFA identifier token after successful authentication [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | SmsTemplate2FA | none | SMS Template Name [**Optional**] |

  ### Try Me Out
  <try-me-out id="twofa-validate-google-auth-code" endpoint="https://api.loginradius.com/identity/v2/auth/login/2FA/verification/GoogleAuthenticatorCode" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"secondFactorAuthenticationToken","default":""},{"key":"fields"},{"key":"smsTemplate2FA"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"googleauthenticatorcode":""}}'></try-me-out>

## 2FA Update Phone Number

  Updates phone number used for Two-Factor Authentication (2FA) via second factor authentication token by sending a verification OTP to the specified phone number.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/login/2FA`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SecondFactorAuthenticationToken | none | A Uniquely generated MFA identifier token after successful authentication [**Required**] |
  | SmsTemplate2FA | none | SMS Template Name [**Optional**] |

  ### Try Me Out
  <try-me-out id="twofa-update-phone-number" endpoint="https://api.loginradius.com/identity/v2/auth/login/2FA" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"secondFactorAuthenticationToken","default":""},{"key":"smsTemplate2FA"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phoneno2fa":""}}'></try-me-out>

## 2FA Reset Google Authenticator by Token

  Resets Google Authenticator configurations for the consumer corresponding to the specified access token.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/auth/account/2FA/authenticator`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
  <try-me-out id="twofa-reset-google-authenticator-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/account/2FA/authenticator" method="DELETE" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"googleauthenticator":true}}'></try-me-out>

## 2FA Reset SMS Authenticator by Token

  Resets SMS Authenticator configurations for the consumer corresponding to the specified access token.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/auth/account/2FA/authenticator`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
  <try-me-out id="twofa-reset-sms-authenticator-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/account/2FA/authenticator" method="DELETE" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"otpauthenticator":true}}'></try-me-out>
 
## 2FA Reset SMS Authenticator by UID

  Resets SMS Authenticator configurations for the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/2FA/authenticator`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Uid | none | UID, the unified identifier for each user account [**Required**] |

  ### Try Me Out
  <try-me-out id="twofa-reset-sms-authenticator-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/2FA/authenticator" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"otpauthenticator":true}}'></try-me-out>

## 2FA Reset Google Authenticator by UID

  Resets Google Authenticator configurations for the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/2FA/authenticator`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Uid | none | UID, the unified identifier for each user account [**Required**] |

  ### Try Me Out
  <try-me-out id="twofa-reset-google-authenticator-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/2FA/authenticator" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"googleauthenticator":true}}'></try-me-out>

[Go Back to Home Page](/)

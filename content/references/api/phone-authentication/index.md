---
title: "Phone Authentication API"
tags: ["Phone Authentication API"]
description: "This is a document detailing the LoginRadius Phone Authentication APIs."
path: "/references/api/phone-authentication"
---

# Phone Authentication

## Phone Login

  Exchanges consumer login details for a copy of their user data and a LoginRadius access token.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/login`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | LoginUrl | none | Url where the user is logging from [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |password|Password for the email
  |phone|New Phone Number | Model Class containing Definition of payload for PhoneAuthenticationModel API [**Required**]
 
## Phone Forgot Password by OTP

  Sends a verification OTP SMS to reset the consumer's password.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/password/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
 
## Phone Resend Verification OTP

  Resends a verification OTP SMS to verify the consumer's Phone ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/phone/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
 
## Phone Resend Verification OTP by Token

  Resends a verification OTP SMS to verify the consumer's Phone ID in cases where the consumer is already logged in.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/phone/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

## Phone User Registration by SMS

  Registers a new consumer on your app and triggers the Phone ID verification process.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/register`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | sott | none | LoginRadius Secured One Time Token [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | Options | none | PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow) [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
  | WelcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |FirstName|user's first name
  |LastName|user's last name
  |Password|Password for the email
  |PhoneId|Phone ID (Unique Phone Number Identifier of the user) | Model Class containing Definition of payload for Auth User Registration API [**Required**] 
 
## Phone Number Availability

  Checks if the specified Phone ID already exists on your app.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/phone`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Phone | none | The Registered Phone Number [**Required**] |
 
## Phone Reset Password by OTP

  Resets the consumer's password by consuming their verification OTP.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/password/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |otp|The Verification Code
  |password|Password for the email
  |Phone|New Phone Number | Model Class containing Definition of payload for ResetPasswordByOTP API [**Required**] 

## Phone Verification OTP

  Validates the verification OTP sent to verify the consumer's Phone ID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/phone/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Otp | none | The Verification Code [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

## Phone Verification OTP by Token

  Consumes the verification OTP sent to verify the consumer's Phone ID when the consumer is already logged in.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/phone/otp?access_token=&apikey=&Otp=&SmsTemplate=`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Otp | none | The Verification Code [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

## Phone Number Update

  Updates the Phone ID of the consumer corresponding to the specified access token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/phone`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

## Remove Phone ID by Access Token

  Deletes the Phone ID from the consumer corresponding to the specified access token.

  ### Endpoint
  `Delete /identity/v2/auth/phone`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

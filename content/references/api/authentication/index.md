---
title: "Authentication API"
tags: ["Authentication API"]
description: "This is a document detailing the LoginRadius Authentication APIs."
path: "/references/api/authentication"
---

# Authentication API

## Auth Add Email

  Adds additional emails to the consumer corresponding to the specified access token.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

  ### Try Me Out
  <try-me-out id="auth-add-email" endpoint="https://api.loginradius.com/identity/v2/auth/email" method="POST" params='{"queryParams":[{"key":"access_token"},{"key":"apiKey","default":""},{"key":"verificationUrl","default":""},{"key":"emailTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"example@example.com","type":"Secondary"}}'></try-me-out>
 
## Auth Login by Email

  Exchanges consumer login details for a copy of their user data and a LoginRadius access token.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/login`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | LoginUrl | none | Url where the user is logging from [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |email|user's email
  |password|Password for the email | Model Class containing Definition of payload for Email Authentication API [**Required**]

  ### Try Me Out
  <try-me-out id="auth-login-by-email" endpoint="https://api.loginradius.com/identity/v2/auth/login" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"verificationUrl","default":""},{"key":"loginUrl"},{"key":"emailTemplate"},{"key":"fields"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"example@example.com","password":""}}'></try-me-out>
 
## Auth Forgot Password

  Sends a reset password URL to the consumer corresponding to the specified Email ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/password`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | ResetPasswordUrl | none | Url to which user should get re-directed to for resetting the password [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |

  ### Try Me Out
  <try-me-out id="auth-forgot-password" endpoint="https://api.loginradius.com/identity/v2/auth/password" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"resetPasswordUrl","default":""},{"key":"emailTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"example@example.com"}}'></try-me-out>

## Auth User Registration by Email

  Creates a new consumer, sending a verification email to the specified Email ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/register`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | sott | none | LoginRadius Secured One Time Token [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | Options | none | PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow) [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
  | WelcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

  ### Try Me Out
  <try-me-out id="auth-user-registration-by-email" endpoint="https://api.loginradius.com/identity/v2/auth/register" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"sott","default":""},{"key":"emailTemplate"},{"key":"fields"},{"key":"options"},{"key":"verificationUrl"},{"key":"welcomeEmailTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"Test","LastName":"Account","Email":[{"Type":"Primary","Value": "example@example.com"}],"Password":"xxxxxxxxxxxx"}}'></try-me-out>

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Email|boolean type value, default is true
  |FirstName|user's first name
  |LastName|user's last name
  |Password|Password for the email | Model Class containing Definition of payload for Auth User Registration API [**Required**]

  ### Try Me Out
  <try-me-out id="auth-user-registration-by-email" endpoint="https://api.loginradius.com/identity/v2/auth/register" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"sott","default":""},{"key":"emailTemplate"},{"key":"fields"},{"key":"options"},{"key":"verificationUrl"},{"key":"welcomeEmailTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"Test","LastName":"Account","Email":[{"Type":"Primary","Value": "example@example.com"}],"Password":"xxxxxxxxxxxx"}}'></try-me-out>

## Auth User Registration By Captcha

  Creates a new consumer using the Captcha flow, sending a verification email to the specified Email ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/register/captcha`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | Options | none | PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow) [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
  | WelcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Email|boolean type value, default is true
  |FirstName|user's first name
  |g-recaptcha-response|The acknowledgement received by Google in Google recaptcha authorisation process.
  |LastName|user's last name
  |Password|Password for the email | Model Class containing Definition of payload for Auth User Registration by Recaptcha API [**Required**]

  ### Try Me Out
  <try-me-out id="auth-user-registration-by-captcha" endpoint="https://api.loginradius.com/identity/v2/auth/register/captcha" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"emailTemplate"},{"key":"fields"},{"key":"options"},{"key":"verificationUrl"},{"key":"welcomeEmailTemplate"},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"Test","LastName":"Account","Email":[{"Type":"Primary","Value":"example@example.com"}],"Password":"xxxxxxxxxxxx","g-recaptcha-response":""}}'></try-me-out>

## Auth Validate Access Token

  Validates specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/access_token/validate`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
  <try-me-out id="auth-validate-access-token" endpoint="https://api.loginradius.com/identity/v2/auth/access_token/validate" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"}]}'></try-me-out>
 
## Access Token Invalidate

  Invalidates specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/access_token/invalidate`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | PreventRefresh | none | Boolean value that when set as true, in addition of the access token being invalidated, it will no longer have the capability of being refreshed. [**Optional**] |

  ### Try Me Out
  <try-me-out id="access-token-invalidate" endpoint="https://api.loginradius.com/identity/v2/auth/access_token/invalidate" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"preventRefresh"}]}'></try-me-out>

## Access Token Info

  Retrieves token data for the specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/access_token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
  <try-me-out id="access-token-info" endpoint="https://api.loginradius.com/identity/v2/auth/access_token" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"}]}'></try-me-out>
 
## Auth Get Profiles by Token

  Retrieves consumer profile data corresponding to the specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Try Me Out
  <try-me-out id="auth-get-profiles-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/account" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"fields"}]}'></try-me-out>
 
## Auth Delete Account

  Deletes consumer corresponding to the specified delete token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/account/delete`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | deletetoken | none | Delete token received in the email [**Required**] |

  ### Try Me Out
  <try-me-out id="auth-delete-account" endpoint="https://api.loginradius.com/identity/v2/auth/account/delete" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"deleteToken"}]}'></try-me-out>
 
## Auth Check Email Availability

  Checks if the specified Email ID already exists on your app.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Email | none | Email of the user [**Required**] |

  ### Try Me Out
  <try-me-out id="auth-check-email-availability" endpoint="https://api.loginradius.com/identity/v2/auth/email" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"email"}]}'></try-me-out>
  
## Auth Verify Email

  Verifies email of the consumer corresponding to the specified verification token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | VerificationToken | none | Verification token received in the email [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | Url | none | Mention URL to log the main URL(Domain name) in Database. [**Optional**] |
  | WelcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

  ### Try Me Out
  <try-me-out id="auth-verify-email" endpoint="https://api.loginradius.com/identity/v2/auth/email" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"verificationToken"},{"key":"fields"},{"key":"url"},{"key":"welcomeEmailTemplate"}]}'></try-me-out>
 
## Auth Social Identity

  Retrieves all consumer's profiles and social identities corresponding to the specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/socialIdentity`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Try Me Out
  <try-me-out id="auth-social-identity" endpoint="https://api.loginradius.com/identity/v2/auth/socialIdentity" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"fields"}]}'></try-me-out>

 
## Auth Update Profile by Token

  Updates consumer's profile corresponding to the specified access token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | NullSupport | none | Boolean, pass true if you wish to update any user profile field with a NULL value, You can get the details [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |FirstName|user's first name
  |LastName|user's last name | Model Class containing Definition of payload for User Profile update API [**Required**]
  
  ### Try Me Out
  <try-me-out id="auth-update-profile-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/account" method="PUT" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey","default":""},{"key":"emailTemplate"},{"key":"fields"},{"key":"nullSupport"},{"key":"smsTemplate"},{"key":"verificationUrl"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"", "LastName":""}}'></try-me-out>

## Auth Reset Password by Reset Token

  Sets a new password for the consumer corresponding to the specified reset token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/password/reset`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  | resettoken | The reset token received in the forgot password email. [**Required**]
  | password | The new password for the consumer's account. [**Required**]
  | welcomeemailtemplate | Welcome email template. [**Optional**]
  | resetpasswordemailtemplate | Reset password email template. [**Optional**]

  ### Try Me Out
  <try-me-out id="auth-reset-password-by-reset-token" endpoint="https://api.loginradius.com/identity/v2/auth/password/reset" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"resettoken":"","password":"","welcomeemailtemplate": "","resetpasswordemailtemplate":""}}'></try-me-out>

## Auth Resend Email Verification

  Resends the verification email to the consumer corresponding to the specified Email ID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/register`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | emailTemplate | none | Email template name [**Optional**] |
  | verificationUrl | none | Email verification url [**Optional**] |

  ### Try Me Out
  <try-me-out id="auth-resend-email-verification" endpoint="https://api.loginradius.com/identity/v2/auth/register" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"emailTemplate"},{"key":"verificationUrl"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":""}}'></try-me-out>

## Auth Delete Account with Email Confirmation

  Triggers the delete account process for the consumer corresponding to the specified access token. A confirmation email for account deletion will be sent to the consumer.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/auth/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | DeleteUrl | none | Url of the site [**Optional**] |
  | EmailTemplate | none | Email template name [**Optional**] |

  ### Try Me Out
  <try-me-out id="auth-delete-account-with-email-confirmation" endpoint="https://api.loginradius.com/identity/v2/auth/account" method="DELETE" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"deleteUrl"},{"key":"emailTemplate"}]}'></try-me-out>
 
## Auth Remove Email

  Removes additional emails from the consumer corresponding to the specified access token.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/auth/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
  <try-me-out id="auth-remove-email" endpoint="https://api.loginradius.com/identity/v2/auth/email" method="DELETE" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":""}}'></try-me-out>

[Go Back to Home Page](/)

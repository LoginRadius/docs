---
title: Node.js Library
description: "A guide to impliment LoginRadius SDK in a Node.js application."
summary: "A guide to impliment LoginRadius SDK in a Node.js application"
---

>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, User Registration.


This document contains information and examples regarding the LoginRadius Node.js SDK. It provides guidance for working with social authentication, user profile data, and sending messages with a variety of social networks such as Facebook, Google and Twitter. 
You can get the SDK from [here](http://github.com/LoginRadius/node-js-sdk) 

> Note: The latest version(10.0.0) of Node js SDK works with LoginRadius V2 APIs.

## Installation <br/>

```
npm install loginradius-sdk@10.0.0
```

## Configuration


Create `var config` in project

```
  var config = {
      apiDomain: 'https://api.loginradius.com',
      apiKey: '{{ Your API KEY }}',
      apiSecret: '{{ Your API Secret }}',
      siteName: '{{ Your Sitename }}',
	  apiRequestSigning: false,
      proxy:{
        host:'',
        port:'',
        user:'',
        password:''
     }
  }
  ```
Replace the placeholders in the config object with your LoginRadius credentials apikey, apisecret, sitename. These can be obtained from [here](https://dashboard.loginradius.com/dashboard) 

Pass the proxy configurations if you want to set Http Server Proxy Configuration through your Node.js SDK. Host and port are required to set Http Server Proxy configuration (username and password are optional).

Require the loginradius-sdk package and pass the config object
```PHP
  var lrv2 = require('loginradius-sdk')(config);
 ```

For more details check [API Refrence Here](https://www.loginradius.com/docs/developer/api/)

## API Details

### Authentication API
List of APIs in this Section:<br>
 
- PUT : [Auth Change Password](#auth-change-password-put)
- PUT : [Auth Resend Email Verification](#auth-resend-email-verification-put)
- POST : [Auth Login by Email](#auth-login-by-email-post)
- POST : [Auth Forgot Password](#auth-forgot-password-post)
- POST : [Auth User Registration by Email](#auth-user-registration-by-email-post)
- GET : [Auth Validate Access token](#auth-validate-access-token-get)
- GET : [Auth Read all Profiles by Token](#auth-read-all-profiles-by-token-get)
- GET : [Auth Send Welcome Email](#auth-send-welcome-email-get)
- GET : [Auth Delete Account](#auth-delete-account-get)
- GET : [Auth Verify Email](#auth-verify-email-get)
- GET : [Auth Social Identity](#auth-social-identity-get)
- DELETE : [Auth Delete Account with Email Confirmation](#auth-delete-account-with-email-confirmation-delete)


 
##### Auth Change Password (PUT)

This API is used to change the accounts password based on the previous password

```JS

var accessToken = "<accessToken>"; //Required
var newPassword = "<newPassword>"; //Required
var oldPassword = "<oldPassword>"; //Required

lrv2.authenticationApi.changePassword(accessToken, newPassword, oldPassword).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});
```
 
##### Auth Resend Email Verification (PUT)

This API resends the verification email to the user.

 ```JS

var email = "<email>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.authResendEmailVerification(email, emailTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Login by Email (POST)

This API retrieves a copy of the user data based on the Email

 
 

 ```JS


var emailAuthenticationModel ={ 
"email" : "<email>",
"password" : "<password>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.loginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Forgot Password (POST)

This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'

 
 

 ```JS

var email = "<email>"; //Required
var resetPasswordUrl = "<resetPasswordUrl>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional

lrv2.authenticationApi.forgotPassword(email, resetPasswordUrl, emailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth User Registration by Email (POST)

This API creates a user in the database as well as sends a verification email to the user.

 
 

 ```JS

var authUserRegistrationModel ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
};  //Required
var sott = "<sott>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var options = "<options>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.userRegistrationByEmail(authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Validate Access token (GET)

This api validates access token, if valid then returns a response with its expiry otherwise error.

 
 

 ```JS

var accessToken = "<accessToken>"; //Required

lrv2.authenticationApi.authValidateAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Read all Profiles by Token (GET)

This API retrieves a copy of the user data based on the access token.

 
 

 ```JS

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

lrv2.authenticationApi.getProfileByAccessToken(accessToken, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Send Welcome Email (GET)

This API sends a welcome email

 
 

 ```JS

var accessToken = "<accessToken>"; //Required
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.sendWelcomeEmail(accessToken, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Delete Account (GET)

This API is used to delete an account by passing it a delete token.

 
 

 ```JS

var deletetoken = "<deletetoken>"; //Required

lrv2.authenticationApi.deleteAccountByDeleteToken(deletetoken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Verify Email (GET)

This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Dashboard's Email Workflow settings under 'Verification Email'.

 
 

 ```JS

var verificationToken = "<verificationToken>"; //Required
var fields = null; //Optional
var url = "<url>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.verifyEmail(verificationToken, fields, url, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Social Identity (GET)

This API is called just after account linking API and it prevents the raas profile of the second account from getting created.

 
 

 ```JS

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

lrv2.authenticationApi.getSocialIdentity(accessToken, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Auth Delete Account with Email Confirmation (DELETE)

 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token

 
 

 ```JS

var accessToken = "<accessToken>"; //Required
var deleteUrl = "<deleteUrl>"; //Optional
var emailTemplate = "<emailTemplate>"; //Optional

lrv2.authenticationApi.deleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
### Account API


List of APIs in this Section:<br>


- PUT : [Account Update](#account-update-put)
- PUT : [Account Set Password](#account-set-password-put)
- POST : [Account Create](#account-create-post)
- POST : [Forgot Password token](#forgot-password-token-post)
- POST : [Email Verification token](#email-verification-token-post)
- GET : [Get Privacy Policy History By Uid](#get-privacy-policy-history-by-uid-get)
- GET : [Account Profiles by Email](#account-profiles-by-email-get)
- GET : [Account Profiles by UID](#account-profiles-by-uid-get)
- GET : [Account Password](#account-password-get)
- GET : [Account Identities by Email](#account-identities-by-email-get)
- DELETE : [Account Delete](#account-delete-delete)
- DELETE : [Account Remove Email](#account-remove-email-delete)
- DELETE : [Delete User Profiles By Email](#delete-user-profiles-by-email-delete)



##### Account Update (PUT)

This API is used to update the information of existing accounts in your Cloud Storage.

 ```JS

var accountUserProfileUpdateModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
};  //Required
var uid = "<uid>"; //Required
var fields = null; //Optional
var nullSupport = true; //Optional

lrv2.accountApi.updateAccountByUid(accountUserProfileUpdateModel, uid, fields, nullSupport).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Account Set Password (PUT)

This API is used to set the password of an account in Cloud Storage.
 

 ```JS

var password = "<password>"; //Required
var uid = "<uid>"; //Required

lrv2.accountApi.setAccountPasswordByUid(password, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Account Create (POST)

This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. 
<br><br>
In order to use this API, you need to format a JSON request body with all of the mandatory fields

 

 ```JS
var accountCreateModel ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
};  //Required
var fields = null; //Optional

lrv2.accountApi.createAccount(accountCreateModel, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

```
  
 
##### Forgot Password token (POST)

This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer.

 ```JS

var email = "<email>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var resetPasswordUrl = "<resetPasswordUrl>"; //Optional
var sendEmail = true; //Optional

lrv2.accountApi.getForgotPasswordToken(email, emailTemplate, resetPasswordUrl, sendEmail).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
 
##### Email Verification token (POST)

This API Returns an Email Verification token.
 

 ```JS

var email = "<email>"; //Required

lrv2.accountApi.getEmailVerificationToken(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Get Privacy Policy History By Uid (GET)

This API is used to retrieve all of the accepted Policies by the user, associated with their UID.
 

 ```JS

var uid = "<uid>"; //Required

lrv2.accountApi.getPrivacyPolicyHistoryByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Account Profiles by Email (GET)

This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.

 ```JS

var email = "<email>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByEmail(email, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Account Profiles by UID (GET)

This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.
 

 ```JS

var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByUid(uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
  
 
##### Account Password (GET)

This API use to retrive the hashed password of a specified account in Cloud Storage.


 ```JS

var uid = "<uid>"; //Required

lrv2.accountApi.getAccountPasswordHashByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Account Identities by Email (GET)

> Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.

 
 

 ```JS

var email = "<email>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountIdentitiesByEmail(email, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Account Delete (DELETE)

This API deletes the Users account and allows them to re-register for a new account.

 
 

 ```JS

var uid = "<uid>"; //Required

lrv2.accountApi.deleteAccountByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Account Remove Email (DELETE)

Use this API to Remove emails from a user Account

 
 

 ```JS

var email = "<email>"; //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.removeEmail(email, uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Delete User Profiles By Email (DELETE)

This API is used to delete all user profiles associated with an Email.

 
 

 ```JS

var email = "<email>"; //Required

lrv2.accountApi.accountDeleteByEmail(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 

### Social API


List of APIs in this Section:<br>
 
- GET : [Access Token](#access-token-get)
- GET : [Token Validate](#token-validate-get)
- GET : [Access Token Invalidate](#access-token-invalidate-get)
- GET : [Get Active Session Details](#get-active-session-details-get)
- GET : [Get Active Session By Account Id](#get-active-session-by-account-id-get)
- GET : [Get Active Session By Profile Id](#get-active-session-by-profile-id-get)
- GET : [User Profile](#user-profile-get)



##### Access Token (GET)

This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls.

 
```JS

var token = "<token>"; //Required

lrv2.socialApi.exchangeAccessToken(token).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Token Validate (GET)

This API validates access token, if valid then returns a response with its expiry otherwise error.

 
 

 ```JS

var accessToken = "<accessToken>"; //Required

lrv2.socialApi.validateAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Access Token Invalidate (GET)

This api invalidates the active access token or expires an access token validity.

 
 

 ```JS

var accessToken = "<accessToken>"; //Required

lrv2.socialApi.inValidateAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Get Active Session Details (GET)

This api is use to get all active session by Access Token.

 
 

 ```JS

var token = "<token>"; //Required

lrv2.socialApi.getActiveSession(token).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

```
  
 
##### Get Active Session By Account Id (GET)
This api is used to get all active sessions by AccountID(UID)


```JS

var accountId = "<accountId>"; //Required

lrv2.socialApi.getActiveSessionByAccountID(accountId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Get Active Session By Profile Id (GET)

This api is used to get all active sessions by ProfileId.
 

 ```JS

var profileId = "<profileId>"; //Required

lrv2.socialApi.getActiveSessionByProfileID(profileId).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### User Profile (GET)

The User Profile API is used to get social profile data from the user's social account after authentication.


 ```JS

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

lrv2.socialApi.getSocialUserProfile(accessToken, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
 
 

### NativeSocial API


List of APIs in this Section:<br>

- GET : [Access Token via Facebook Token](#access-token-via-facebook-token-get)
- GET : [Access Token via Twitter Token](#access-token-via-twitter-token-get)
- GET : [Access Token via Google Token](#access-token-via-google-token-get)


##### Access Token via Facebook Token (GET)

The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.

 
 

 ```JS

var fbAccessToken = "<fbAccessToken>"; //Required

lrv2.nativeSocialApi.getAccessTokenByFacebookAccessToken(fbAccessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Access Token via Twitter Token (GET)

The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.

 
 

 ```JS

var twAccessToken = "<twAccessToken>"; //Required
var twTokenSecret = "<twTokenSecret>"; //Required

lrv2.nativeSocialApi.getAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
##### Access Token via Google Token (GET)

The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.
 

 ```JS

var googleAccessToken = "<googleAccessToken>"; //Required
var clientId = "<clientId>"; //Optional
var refreshToken = "<refreshToken>"; //Optional

lrv2.nativeSocialApi.getAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
---
title: HTML5 Library
description: ""
summary: "A guide to impliment LoginRadius SDK in a HTML5 application"
---


Disclaimer

> This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

## Getting Started
This document contains information and examples regarding the LoginRadius HTML5 SDK. It provides guidance for working with social authentication, user profile data, and login with a variety of social networks such as Facebook, Google, Twitter etc. 
You can get the SDK from [here](http://github.com/LoginRadius/HTML5-SDK) 


## Installation
In order to utilize the HTML5/JS SDK, you will need to initialize the SDK with your API Key:

```JS
var sdkoptions = {
  "apiKey": "{{YOUR API KEY}}"
}

LoginRadiusSDK.initSDK(sdkoptions);
```

## Configuration 
- Download the SDK from [Github](https://github.com/LoginRadius/HTML5-SDK).
- Include the SDK javascript file on your website.

```html
<script src="LoginRadiusV2SDK.10.0.0.js" type="text/javascript"></script>
```

## API Details

### Authentication API


List of APIs in this Section:<br>

- PUT : [Auth Reset Password by Security Answer and Email](#auth-reset-password-by-security-answer-and-email-put)
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

#####  Auth Reset Password by Security Answer and Email (PUT)
 This API is used to reset password for the specified account by security question  

 
 

 ```js


var resetPasswordBySecurityAnswerAndEmailModel ={ 
"email" : "<email>",
"password" : "<password>",
"securityAnswer" : {"QuestionID":"Answer"}
};  //Required

 LoginRadiusSDK.authenticationApi.resetPasswordBySecurityAnswerAndEmail(resetPasswordBySecurityAnswerAndEmailModel, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Change Password (PUT)
 This API is used to change the accounts password based on the previous password  

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var newPassword = "<newPassword>"; //Required
var oldPassword = "<oldPassword>"; //Required

 LoginRadiusSDK.authenticationApi.changePassword(accessToken, newPassword, oldPassword, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Resend Email Verification (PUT)
 This API resends the verification email to the user.  

 
 

 ```js

var email = "<email>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

 LoginRadiusSDK.authenticationApi.authResendEmailVerification(email, emailTemplate, verificationUrl, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Login by Email (POST)
 This API retrieves a copy of the user data based on the Email  

 
 

 ```js


var emailAuthenticationModel ={ 
"email" : "<email>",
"password" : "<password>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

 LoginRadiusSDK.authenticationApi.loginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Forgot Password (POST)
 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'  

 
 

 ```js

var email = "<email>"; //Required
var resetPasswordUrl = "<resetPasswordUrl>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional

 LoginRadiusSDK.authenticationApi.forgotPassword(email, resetPasswordUrl, emailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth User Registration by Email (POST)
 This API creates a user in the database as well as sends a verification email to the user.  

 
 

 ```js


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

 LoginRadiusSDK.authenticationApi.userRegistrationByEmail(authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Validate Access token (GET)
 This api validates access token, if valid then returns a response with its expiry otherwise error.  
 
 

 ```js

var accessToken = "<accessToken>"; //Required

 LoginRadiusSDK.authenticationApi.authValidateAccessToken(accessToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Read all Profiles by Token (GET)
 This API retrieves a copy of the user data based on the access token.  

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.authenticationApi.getProfileByAccessToken(accessToken, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Send Welcome Email (GET)
 This API sends a welcome email  

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

 LoginRadiusSDK.authenticationApi.sendWelcomeEmail(accessToken, welcomeEmailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Delete Account (GET)
 This API is used to delete an account by passing it a delete token.  

 
 

 ```js

var deletetoken = "<deletetoken>"; //Required

 LoginRadiusSDK.authenticationApi.deleteAccountByDeleteToken(deletetoken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Verify Email (GET)
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Dashboard's Email Workflow settings under 'Verification Email'.  

 
 

 ```js

var verificationToken = "<verificationToken>"; //Required
var fields = null; //Optional
var url = "<url>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

 LoginRadiusSDK.authenticationApi.verifyEmail(verificationToken, fields, url, welcomeEmailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Social Identity (GET)
 This API is called just after account linking API and it prevents the raas profile of the second account from getting created.  
 
 

 ```js

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.authenticationApi.getSocialIdentity(accessToken, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Auth Delete Account with Email Confirmation (DELETE)
 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token  

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var deleteUrl = "<deleteUrl>"; //Optional
var emailTemplate = "<emailTemplate>"; //Optional

 LoginRadiusSDK.authenticationApi.deleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
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




#####  Access Token (GET)
 This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls.  
 
 

 ```js

var token = "<token>"; //Required

 LoginRadiusSDK.socialApi.exchangeAccessToken(token, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Token Validate (GET)
 This API validates access token, if valid then returns a response with its expiry otherwise error.  
 
 

 ```js

var accessToken = "<accessToken>"; //Required

 LoginRadiusSDK.socialApi.validateAccessToken(accessToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Access Token Invalidate (GET)
 This api invalidates the active access token or expires an access token validity.  

 
 

 ```js

var accessToken = "<accessToken>"; //Required

 LoginRadiusSDK.socialApi.inValidateAccessToken(accessToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Get Active Session Details (GET)
 This api is use to get all active session by Access Token.  

 
 

 ```js

var token = "<token>"; //Required

 LoginRadiusSDK.socialApi.getActiveSession(token, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Get Active Session By Account Id (GET)
 This api is used to get all active sessions by AccountID(UID).  

 
 

 ```js

var accountId = "<accountId>"; //Required

 LoginRadiusSDK.socialApi.getActiveSessionByAccountID(accountId, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Get Active Session By Profile Id (GET)
 This api is used to get all active sessions by ProfileId.  

 
 

 ```js

var profileId = "<profileId>"; //Required

 LoginRadiusSDK.socialApi.getActiveSessionByProfileID(profileId, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  User Profile (GET)
 The User Profile API is used to get social profile data from the user's social account after authentication.<br><br><b>Supported Providers:</b>  All  

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.socialApi.getSocialUserProfile(accessToken, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
 

### NativeSocial API


List of APIs in this Section:<br>

- GET : [Access Token via Facebook Token](#access-token-via-facebook-token-get)
- GET : [Access Token via Twitter Token](#access-token-via-twitter-token-get)
- GET : [Access Token via Google Token](#access-token-via-google-token-get)

#####  Access Token via Facebook Token (GET)
 The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.  

 
 

 ```js

var fbAccessToken = "<fbAccessToken>"; //Required

 LoginRadiusSDK.nativeSocialApi.getAccessTokenByFacebookAccessToken(fbAccessToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Access Token via Twitter Token (GET)
 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.  

 
 

 ```js

var twAccessToken = "<twAccessToken>"; //Required
var twTokenSecret = "<twTokenSecret>"; //Required

 LoginRadiusSDK.nativeSocialApi.getAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
#####  Access Token via Google Token (GET)
 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.  

 
 

 ```js

var googleAccessToken = "<googleAccessToken>"; //Required
var clientId = "<clientId>"; //Optional
var refreshToken = "<refreshToken>"; //Optional

 LoginRadiusSDK.nativeSocialApi.getAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
 


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
 
* PUT : [Auth Update Profile by Token](#UpdateProfileByAccessToken-put-)<br> 
* PUT : [Auth Verify Email By OTP](#VerifyEmailByOTP-put-)<br> 
* PUT : [Auth Reset Password by Reset Token](#ResetPasswordByResetToken-put-)<br> 
* PUT : [Auth Change Password](#ChangePassword-put-)<br> 
* PUT : [Auth Resend Email Verification](#AuthResendEmailVerification-put-)<br> 
* POST : [Auth Add Email](#AddEmail-post-)<br> 
* POST : [Auth Login by Email](#LoginByEmail-post-)<br> 
* POST : [Auth Forgot Password](#ForgotPassword-post-)<br> 
* POST : [Auth User Registration by Email](#UserRegistrationByEmail-post-)<br> 
* POST : [Auth User Registration By Captcha](#UserRegistrationByCaptcha-post-)<br> 
* GET : [Auth Validate Access token](#AuthValidateAccessToken-get-)<br> 
* GET : [Access Token Invalidate](#AuthInValidateAccessToken-get-)<br> 
* GET : [Access Token Info](#GetAccessTokenInfo-get-)<br> 
* GET : [Auth Read all Profiles by Token](#GetProfileByAccessToken-get-)<br> 
* GET : [Auth Delete Account](#DeleteAccountByDeleteToken-get-)<br> 
* GET : [Auth Check Email Availability](#CheckEmailAvailability-get-)<br> 
* GET : [Auth Verify Email](#VerifyEmail-get-)<br> 
* GET : [Auth Social Identity](#GetSocialIdentity-get-)<br>
* DELETE : [Auth Delete Account with Email Confirmation](#DeleteAccountWithEmailConfirmation-delete-)<br> 
* DELETE : [Auth Remove Email](#RemoveEmail-delete-)<br>



<h5 id="UpdateProfileByAccessToken-put-"> Auth Update Profile by Token (PUT)</h5>
 This API is used to update the user's profile by passing the access token.

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var userProfileUpdateModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var nullSupport = true; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.updateProfileByAccessToken(accessToken, userProfileUpdateModel, emailTemplate, fields, nullSupport, smsTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="VerifyEmailByOTP-put-"> Auth Verify Email By OTP (PUT)</h5>
 This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.

 
 

 ```js


var emailVerificationByOtpModel ={ 
"email" : "<email>",
"otp" : "<otp>"
};  //Required
var fields = null; //Optional
var url = "<url>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.verifyEmailByOTP(emailVerificationByOtpModel, fields, url, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="ResetPasswordByResetToken-put-"> Auth Reset Password by Reset Token (PUT)</h5>
 This API is used to set a new password for the specified account.

 
 

 ```js


var resetPasswordByResetTokenModel ={ 
"password" : "<password>",
"resetToken" : "<resetToken>"
};  //Required

lrv2.authenticationApi.resetPasswordByResetToken(resetPasswordByResetTokenModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="ChangePassword-put-"> Auth Change Password (PUT)</h5>
 This API is used to change the accounts password based on the previous password

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var newPassword = "<newPassword>"; //Required
var oldPassword = "<oldPassword>"; //Required

lrv2.authenticationApi.changePassword(accessToken, newPassword, oldPassword).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="AuthResendEmailVerification-put-"> Auth Resend Email Verification (PUT)</h5>
 This API resends the verification email to the user.

 
 

 ```js

var email = "<email>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.authResendEmailVerification(email, emailTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="AddEmail-post-"> Auth Add Email (POST)</h5>
 This API is used to add additional emails to a user's account.

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var email = "<email>"; //Required
var type = "<type>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.authenticationApi.addEmail(accessToken, email, type, emailTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="LoginByEmail-post-"> Auth Login by Email (POST)</h5>
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

lrv2.authenticationApi.loginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="ForgotPassword-post-"> Auth Forgot Password (POST)</h5>
 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'

 
 

 ```js

var email = "<email>"; //Required
var resetPasswordUrl = "<resetPasswordUrl>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional

lrv2.authenticationApi.forgotPassword(email, resetPasswordUrl, emailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="UserRegistrationByEmail-post-"> Auth User Registration by Email (POST)</h5>
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

lrv2.authenticationApi.userRegistrationByEmail(authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="UserRegistrationByCaptcha-post-"> Auth User Registration By Captcha (POST)</h5>
 This API creates a user in the database as well as sends a verification email to the user.

 
 

 ```js


var authUserRegistrationModelWithCaptcha ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"g-recaptcha-response" : "<g-recaptcha-response>",
"lastName" : "<lastName>",
"password" : "<password>"
};  //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var options = "<options>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.authenticationApi.userRegistrationByCaptcha(authUserRegistrationModelWithCaptcha, emailTemplate, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="AuthValidateAccessToken-get-"> Auth Validate Access token (GET)</h5>
 This api validates access token, if valid then returns a response with its expiry otherwise error.

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.authenticationApi.authValidateAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="AuthInValidateAccessToken-get-"> Access Token Invalidate (GET)</h5>
 This api call invalidates the active access token or expires an access token's validity.

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var preventRefresh = true; //Optional

lrv2.authenticationApi.authInValidateAccessToken(accessToken, preventRefresh).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccessTokenInfo-get-"> Access Token Info (GET)</h5>
 This api call provide the active access token Information

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.authenticationApi.getAccessTokenInfo(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetProfileByAccessToken-get-"> Auth Read all Profiles by Token (GET)</h5>
 This API retrieves a copy of the user data based on the access token.

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

lrv2.authenticationApi.getProfileByAccessToken(accessToken, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
  
 
<h5 id="DeleteAccountByDeleteToken-get-"> Auth Delete Account (GET)</h5>
 This API is used to delete an account by passing it a delete token.

 
 

 ```js

var deletetoken = "<deletetoken>"; //Required

lrv2.authenticationApi.deleteAccountByDeleteToken(deletetoken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="CheckEmailAvailability-get-"> Auth Check Email Availability (GET)</h5>
 This API is used to check the email exists or not on your site.

 
 

 ```js

var email = "<email>"; //Required

lrv2.authenticationApi.checkEmailAvailability(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="VerifyEmail-get-"> Auth Verify Email (GET)</h5>
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.

 
 

 ```js

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
 
  
  
 
<h5 id="GetSocialIdentity-get-"> Auth Social Identity (GET)</h5>
 This API is called just after account linking API and it prevents the raas profile of the second account from getting created.

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

lrv2.authenticationApi.getSocialIdentity(accessToken, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
 
<h5 id="DeleteAccountWithEmailConfirmation-delete-"> Auth Delete Account with Email Confirmation (DELETE)</h5>
 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var deleteUrl = "<deleteUrl>"; //Optional
var emailTemplate = "<emailTemplate>"; //Optional

lrv2.authenticationApi.deleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="RemoveEmail-delete-"> Auth Remove Email (DELETE)</h5>
 This API is used to remove additional emails from a user's account.

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var email = "<email>"; //Required

lrv2.authenticationApi.removeEmail(accessToken, email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### Account API


List of APIs in this Section:<br>
 
* PUT : [Account Update](#UpdateAccountByUid-put-)<br> 
* PUT : [Update Phone ID by UID](#UpdatePhoneIDByUid-put-)<br> 
* PUT : [Account Set Password](#SetAccountPasswordByUid-put-)<br> 
* PUT : [Account Invalidate Verification Email](#InvalidateAccountEmailVerification-put-)<br> 
* PUT : [Reset phone ID verification](#ResetPhoneIDVerificationByUid-put-)<br> 
* PUT : [Upsert Email](#UpsertEmail-put-)<br> 
* PUT : [Update UID](#AccountUpdateUid-put-)<br> 
* POST : [Account Create](#CreateAccount-post-)<br> 
* POST : [Forgot Password token](#GetForgotPasswordToken-post-)<br> 
* POST : [Email Verification token](#GetEmailVerificationToken-post-)<br> 
* GET : [Account Profiles by Email](#GetAccountProfileByEmail-get-)<br> 
* GET : [Account Profile by Phone ID](#GetAccountProfileByPhone-get-)<br> 
* GET : [Account Profiles by UID](#GetAccountProfileByUid-get-)<br> 
* GET : [Account Password](#GetAccountPasswordHashByUid-get-)<br> 
* GET : [Access Token based on UID or User impersonation API](#GetAccessTokenByUid-get-)<br> 
* GET : [Account Identities by Email](#GetAccountIdentitiesByEmail-get-)<br> 
* DELETE : [Account Delete](#DeleteAccountByUid-delete-)<br> 
* DELETE : [Account Remove Email](#RemoveEmail-delete-)<br> 
* DELETE : [Delete User Profiles By Email](#AccountDeleteByEmail-delete-)<br>



<h5 id="UpdateAccountByUid-put-"> Account Update (PUT)</h5>
 This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities.

 
 

 ```js


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
 
  
  
 
<h5 id="UpdatePhoneIDByUid-put-"> Update Phone ID by UID (PUT)</h5>
 This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.

 
 

 ```js

var phone = "<phone>"; //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.updatePhoneIDByUid(phone, uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="SetAccountPasswordByUid-put-"> Account Set Password (PUT)</h5>
 This API is used to set the password of an account in Cloud Storage.

 
 

 ```js

var password = "<password>"; //Required
var uid = "<uid>"; //Required

lrv2.accountApi.setAccountPasswordByUid(password, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="InvalidateAccountEmailVerification-put-"> Account Invalidate Verification Email (PUT)</h5>
 This API is used to invalidate the Email Verification status on an account.

 
 

 ```js

var uid = "<uid>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.accountApi.invalidateAccountEmailVerification(uid, emailTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="ResetPhoneIDVerificationByUid-put-"> Reset phone ID verification (PUT)</h5>
 This API Allows you to reset the phone no verification of an end user’s account.

 
 

 ```js

var uid = "<uid>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.accountApi.resetPhoneIDVerificationByUid(uid, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="UpsertEmail-put-"> Upsert Email (PUT)</h5>
 This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.

 
 

 ```js


var upsertEmailModel ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] 
};  //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.upsertEmail(upsertEmailModel, uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="AccountUpdateUid-put-"> Update UID (PUT)</h5>
 This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid.

 
 

 ```js


var updateUidModel ={ 
"newUid" : "<newUid>"
};  //Required
var uid = "<uid>"; //Required

lrv2.accountApi.accountUpdateUid(updateUidModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="CreateAccount-post-"> Account Create (POST)</h5>
 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields

 
 

 ```js


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
 
  
  
 
<h5 id="GetForgotPasswordToken-post-"> Forgot Password token (POST)</h5>
 This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.

 
 

 ```js

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
 
  
  
 
<h5 id="GetEmailVerificationToken-post-"> Email Verification token (POST)</h5>
 This API Returns an Email Verification token.

 
 

 ```js

var email = "<email>"; //Required

lrv2.accountApi.getEmailVerificationToken(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccountProfileByEmail-get-"> Account Profiles by Email (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.

 
 

 ```js

var email = "<email>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByEmail(email, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccountProfileByPhone-get-"> Account Profile by Phone ID (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.

 
 

 ```js

var phone = "<phone>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByPhone(phone, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccountProfileByUid-get-"> Account Profiles by UID (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.

 
 

 ```js

var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountProfileByUid(uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccountPasswordHashByUid-get-"> Account Password (GET)</h5>
 This API use to retrive the hashed password of a specified account in Cloud Storage.

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.accountApi.getAccountPasswordHashByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccessTokenByUid-get-"> Access Token based on UID or User impersonation API (GET)</h5>
 The API is used to get LoginRadius access token based on UID.

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.accountApi.getAccessTokenByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccountIdentitiesByEmail-get-"> Account Identities by Email (GET)</h5>
 Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.

 
 

 ```js

var email = "<email>"; //Required
var fields = null; //Optional

lrv2.accountApi.getAccountIdentitiesByEmail(email, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="DeleteAccountByUid-delete-"> Account Delete (DELETE)</h5>
 This API deletes the Users account and allows them to re-register for a new account.

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.accountApi.deleteAccountByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="RemoveEmail-delete-"> Account Remove Email (DELETE)</h5>
 Use this API to Remove emails from a user Account

 
 

 ```js

var email = "<email>"; //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

lrv2.accountApi.removeEmail(email, uid, fields).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="AccountDeleteByEmail-delete-"> Delete User Profiles By Email (DELETE)</h5>
 This API is used to delete all user profiles associated with an Email.

 
 

 ```js

var email = "<email>"; //Required

lrv2.accountApi.accountDeleteByEmail(email).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### PhoneAuthentication API


List of APIs in this Section:<br>
 
* PUT : [Phone Reset Password by OTP](#ResetPasswordByPhoneOTP-put-)<br> 
* PUT : [Phone Verification OTP](#PhoneVerificationByOTP-put-)<br> 
* PUT : [Phone Verification OTP by Token](#PhoneVerificationOTPByAccessToken-put-)<br> 
* PUT : [Phone Number Update](#UpdatePhoneNumber-put-)<br> 
* POST : [Phone Login](#LoginByPhone-post-)<br> 
* POST : [Phone Forgot Password by OTP](#ForgotPasswordByPhoneOTP-post-)<br> 
* POST : [Phone Resend Verification OTP](#PhoneResendVerificationOTP-post-)<br> 
* POST : [Phone Resend Verification OTP By Token](#PhoneResendVerificationOTPByToken-post-)<br> 
* POST : [Phone User Registration by SMS](#UserRegistrationByPhone-post-)<br> 
* GET : [Phone Number Availability](#CheckPhoneNumberAvailability-get-)<br> 
* DELETE : [Remove Phone ID by Access Token](#RemovePhoneIDByAccessToken-delete-)<br>



<h5 id="ResetPasswordByPhoneOTP-put-"> Phone Reset Password by OTP (PUT)</h5>
 This API is used to reset the password

 
 

 ```js


var resetPasswordByOTPModel ={ 
"otp" : "<otp>",
"password" : "<password>",
"phone" : "<phone>"
};  //Required

lrv2.phoneAuthenticationApi.resetPasswordByPhoneOTP(resetPasswordByOTPModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="PhoneVerificationByOTP-put-"> Phone Verification OTP (PUT)</h5>
 This API is used to validate the verification code sent to verify a user's phone number

 
 

 ```js

var otp = "<otp>"; //Required
var phone = "<phone>"; //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.phoneVerificationByOTP(otp, phone, fields, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="PhoneVerificationOTPByAccessToken-put-"> Phone Verification OTP by Token (PUT)</h5>
 This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var otp = "<otp>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.phoneVerificationOTPByAccessToken(accessToken, otp, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="UpdatePhoneNumber-put-"> Phone Number Update (PUT)</h5>
 This API is used to update the login Phone Number of users

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.updatePhoneNumber(accessToken, phone, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="LoginByPhone-post-"> Phone Login (POST)</h5>
 This API retrieves a copy of the user data based on the Phone

 
 

 ```js


var phoneAuthenticationModel ={ 
"password" : "<password>",
"phone" : "<phone>"
};  //Required
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.loginByPhone(phoneAuthenticationModel, fields, loginUrl, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="ForgotPasswordByPhoneOTP-post-"> Phone Forgot Password by OTP (POST)</h5>
 This API is used to send the OTP to reset the account password.

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.forgotPasswordByPhoneOTP(phone, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="PhoneResendVerificationOTP-post-"> Phone Resend Verification OTP (POST)</h5>
 This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.phoneResendVerificationOTP(phone, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="PhoneResendVerificationOTPByToken-post-"> Phone Resend Verification OTP By Token (POST)</h5>
 This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.phoneAuthenticationApi.phoneResendVerificationOTPByToken(accessToken, phone, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="UserRegistrationByPhone-post-"> Phone User Registration by SMS (POST)</h5>
 This API registers the new users into your Cloud Storage and triggers the phone verification process.

 
 

 ```js


var authUserRegistrationModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>",
"phoneId" : "<phoneId>"
};  //Required
var sott = "<sott>"; //Required
var fields = null; //Optional
var options = "<options>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.phoneAuthenticationApi.userRegistrationByPhone(authUserRegistrationModel, sott, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="CheckPhoneNumberAvailability-get-"> Phone Number Availability (GET)</h5>
 This API is used to check the Phone Number exists or not on your site.

 
 

 ```js

var phone = "<phone>"; //Required

lrv2.phoneAuthenticationApi.checkPhoneNumberAvailability(phone).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="RemovePhoneIDByAccessToken-delete-"> Remove Phone ID by Access Token (DELETE)</h5>
 This API is used to delete the Phone ID on a user's account via the access token

 
 

 ```js

var accessToken = "<accessToken>"; //Required

lrv2.phoneAuthenticationApi.removePhoneIDByAccessToken(accessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### MultiFactorAuthentication API


List of APIs in this Section:<br>
 
* PUT : [Update MFA by Access Token](#MFAUpdateByAccessToken-put-)<br> 
* PUT : [MFA Update Phone Number by Token](#MFAUpdatePhoneNumberByToken-put-)<br> 
* PUT : [MFA Validate Google Auth Code](#MFAValidateGoogleAuthCode-put-)<br> 
* PUT : [MFA Update Phone Number](#MFAUpdatePhoneNumber-put-)<br> 
* POST : [MFA Email Login](#MFALoginByEmail-post-)<br> 
* POST : [MFA Phone Login](#MFALoginByPhone-post-)<br> 
* GET : [MFA Validate Access Token](#MFAConfigureByAccessToken-get-)<br> 
* GET : [MFA Resend Otp](#MFAResendOTP-get-)<br> 
* DELETE : [MFA Reset Google Authenticator by Token](#MFAResetGoogleAuthByToken-delete-)<br> 
* DELETE : [MFA Reset SMS Authenticator by Token](#MFAResetSMSAuthByToken-delete-)<br> 
* DELETE : [MFA Reset SMS Authenticator By UID](#MFAResetSMSAuthenticatorByUid-delete-)<br> 
* DELETE : [MFA Reset Google Authenticator By UID](#MFAResetGoogleAuthenticatorByUid-delete-)<br>



<h5 id="MFAUpdateByAccessToken-put-"> Update MFA by Access Token (PUT)</h5>
 This API is used to Enable Multi-factor authentication by access token on user login

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var multiFactorAuthModelByGoogleAuthenticatorCode ={ 
"googleAuthenticatorCode" : "<googleAuthenticatorCode>"
};  //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaUpdateByAccessToken(accessToken, multiFactorAuthModelByGoogleAuthenticatorCode, fields, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAUpdatePhoneNumberByToken-put-"> MFA Update Phone Number by Token (PUT)</h5>
 This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phoneNo2FA = "<phoneNo2FA>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaUpdatePhoneNumberByToken(accessToken, phoneNo2FA, smsTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAValidateGoogleAuthCode-put-"> MFA Validate Google Auth Code (PUT)</h5>
 This API is used to login via Multi-factor-authentication by passing the google authenticator code.

 
 

 ```js

var googleAuthenticatorCode = "<googleAuthenticatorCode>"; //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var fields = null; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaValidateGoogleAuthCode(googleAuthenticatorCode, secondFactorAuthenticationToken, fields, smsTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAUpdatePhoneNumber-put-"> MFA Update Phone Number (PUT)</h5>
 This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number

 
 

 ```js

var phoneNo2FA = "<phoneNo2FA>"; //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaUpdatePhoneNumber(phoneNo2FA, secondFactorAuthenticationToken, smsTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFALoginByEmail-post-"> MFA Email Login (POST)</h5>
 This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.

 
 

 ```js

var email = "<email>"; //Required
var password = "<password>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaLoginByEmail(email, password, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFALoginByPhone-post-"> MFA Phone Login (POST)</h5>
 This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.

 
 

 ```js

var password = "<password>"; //Required
var phone = "<phone>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaLoginByPhone(password, phone, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAConfigureByAccessToken-get-"> MFA Validate Access Token (GET)</h5>
 This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaConfigureByAccessToken(accessToken, smsTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAResendOTP-get-"> MFA Resend Otp (GET)</h5>
 This API is used to resending the verification OTP to the provided phone number

 
 

 ```js

var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

lrv2.multiFactorAuthenticationApi.mfaResendOTP(secondFactorAuthenticationToken, smsTemplate2FA).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAResetGoogleAuthByToken-delete-"> MFA Reset Google Authenticator by Token (DELETE)</h5>
 This API Resets the Google Authenticator configurations on a given account via the access token

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var googleauthenticator = true; //Required

lrv2.multiFactorAuthenticationApi.mfaResetGoogleAuthByToken(accessToken, googleauthenticator).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAResetSMSAuthByToken-delete-"> MFA Reset SMS Authenticator by Token (DELETE)</h5>
 This API resets the SMS Authenticator configurations on a given account via the access token.

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var otpauthenticator = true; //Required

lrv2.multiFactorAuthenticationApi.mfaResetSMSAuthByToken(accessToken, otpauthenticator).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAResetSMSAuthenticatorByUid-delete-"> MFA Reset SMS Authenticator By UID (DELETE)</h5>
 This API resets the SMS Authenticator configurations on a given account via the UID.

 
 

 ```js

var otpauthenticator = true; //Required
var uid = "<uid>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetSMSAuthenticatorByUid(otpauthenticator, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="MFAResetGoogleAuthenticatorByUid-delete-"> MFA Reset Google Authenticator By UID (DELETE)</h5>
 This API resets the Google Authenticator configurations on a given account via the UID.

 
 

 ```js

var googleauthenticator = true; //Required
var uid = "<uid>"; //Required

lrv2.multiFactorAuthenticationApi.mfaResetGoogleAuthenticatorByUid(googleauthenticator, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### PasswordLessLogin API


List of APIs in this Section:<br>
 
* PUT : [Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br> 
* GET : [Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br> 
* GET : [Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br> 
* GET : [Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>



<h5 id="PasswordlessLoginPhoneVerification-put-"> Passwordless Login Phone Verification (PUT)</h5>
 This API verifies an account by OTP and allows the customer to login.

 
 

 ```js


var passwordLessLoginOtpModel ={ 
"otp" : "<otp>",
"phone" : "<phone>"
};  //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginPhoneVerification(passwordLessLoginOtpModel, fields, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="PasswordlessLoginByPhone-get-"> Passwordless Login by Phone (GET)</h5>
 API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginByPhone(phone, smsTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="PasswordlessLoginByEmail-get-"> Passwordless Login By Email (GET)</h5>
 This API is used to send a Passwordless Login verification link to the provided Email ID

 
 

 ```js

var email = "<email>"; //Required
var passwordLessLoginTemplate = "<passwordLessLoginTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginByEmail(email, passwordLessLoginTemplate, verificationUrl).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="PasswordlessLoginVerification-get-"> Passwordless Login Verification (GET)</h5>
 This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API

 
 

 ```js

var verificationToken = "<verificationToken>"; //Required
var fields = null; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

lrv2.passwordLessLoginApi.passwordlessLoginVerification(verificationToken, fields, welcomeEmailTemplate).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### Role API


List of APIs in this Section:<br>
 
* PUT : [Assign Roles by UID](#AssignRolesByUid-put-)<br> 
* PUT : [Upsert Context](#UpdateRoleContextByUid-put-)<br> 
* PUT : [Add Permissions to Role](#AddRolePermissions-put-)<br> 
* POST : [Roles Create](#CreateRoles-post-)<br> 
* GET : [Roles by UID](#GetRolesByUid-get-)<br> 
* GET : [Get Context with Roles and Permissions](#GetRoleContextByUid-get-)<br> 
* GET : [Role Context profile](#GetRoleContextByContextName-get-)<br> 
* GET : [Roles List](#GetRolesList-get-)<br> 
* DELETE : [Unassign Roles by UID](#UnassignRolesByUid-delete-)<br> 
* DELETE : [Delete Role Context](#DeleteRoleContextByUid-delete-)<br> 
* DELETE : [Delete Role from Context](#DeleteRolesFromRoleContextByUid-delete-)<br> 
* DELETE : [Delete Additional Permission from Context](#DeleteAdditionalPermissionFromRoleContextByUid-delete-)<br> 
* DELETE : [Account Delete Role](#DeleteRole-delete-)<br> 
* DELETE : [Remove Permissions](#RemoveRolePermissions-delete-)<br>



<h5 id="AssignRolesByUid-put-"> Assign Roles by UID (PUT)</h5>
 This API is used to assign your desired roles to a given user.

 
 

 ```js


var accountRolesModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.assignRolesByUid(accountRolesModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="UpdateRoleContextByUid-put-"> Upsert Context (PUT)</h5>
 This API creates a Context with a set of Roles

 
 

 ```js


var accountRoleContextModel ={ 
"roleContext" : [   { 
  "additionalPermissions" : ["<additionalPermissions>" ] ,
 "context" : "<context>"  ,
 "expiration" : "<expiration>"  ,
  "roles" : ["<roles>" ]  
}  ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.updateRoleContextByUid(accountRoleContextModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="AddRolePermissions-put-"> Add Permissions to Role (PUT)</h5>
 This API is used to add permissions to a given role.

 
 

 ```js


var permissionsModel ={ 
"permissions" : [  "permissions" ] 
};  //Required
var role = "<role>"; //Required

lrv2.roleApi.addRolePermissions(permissionsModel, role).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="CreateRoles-post-"> Roles Create (POST)</h5>
 This API creates a role with permissions.

 
 

 ```js


var rolesModel ={ 
"roles" : [   { 
 "name" : "<name>"  ,
"permissions" : {"Permission_name":true}  
}  ] 
};  //Required

lrv2.roleApi.createRoles(rolesModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetRolesByUid-get-"> Roles by UID (GET)</h5>
 API is used to retrieve all the assigned roles of a particular User.

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.roleApi.getRolesByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetRoleContextByUid-get-"> Get Context with Roles and Permissions (GET)</h5>
 This API Gets the contexts that have been configured and the associated roles and permissions.

 
 

 ```js

var uid = "<uid>"; //Required

lrv2.roleApi.getRoleContextByUid(uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetRoleContextByContextName-get-"> Role Context profile (GET)</h5>
 The API is used to retrieve role context by the context name.

 
 

 ```js

var contextName = "<contextName>"; //Required

lrv2.roleApi.getRoleContextByContextName(contextName).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetRolesList-get-"> Roles List (GET)</h5>
 This API retrieves the complete list of created roles with permissions of your app.

 
 

 ```js


lrv2.roleApi.getRolesList().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="UnassignRolesByUid-delete-"> Unassign Roles by UID (DELETE)</h5>
 This API is used to unassign roles from a user.

 
 

 ```js


var accountRolesModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.unassignRolesByUid(accountRolesModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="DeleteRoleContextByUid-delete-"> Delete Role Context (DELETE)</h5>
 This API Deletes the specified Role Context

 
 

 ```js

var contextName = "<contextName>"; //Required
var uid = "<uid>"; //Required

lrv2.roleApi.deleteRoleContextByUid(contextName, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="DeleteRolesFromRoleContextByUid-delete-"> Delete Role from Context (DELETE)</h5>
 This API Deletes the specified Role from a Context.

 
 

 ```js

var contextName = "<contextName>"; //Required

var roleContextRemoveRoleModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.deleteRolesFromRoleContextByUid(contextName, roleContextRemoveRoleModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-"> Delete Additional Permission from Context (DELETE)</h5>
 This API Deletes Additional Permissions from Context.

 
 

 ```js

var contextName = "<contextName>"; //Required

var roleContextAdditionalPermissionRemoveRoleModel ={ 
"additionalPermissions" : [  "additionalPermissions" ] 
};  //Required
var uid = "<uid>"; //Required

lrv2.roleApi.deleteAdditionalPermissionFromRoleContextByUid(contextName, roleContextAdditionalPermissionRemoveRoleModel, uid).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="DeleteRole-delete-"> Account Delete Role (DELETE)</h5>
 This API is used to delete the role.

 
 

 ```js

var role = "<role>"; //Required

lrv2.roleApi.deleteRole(role).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="RemoveRolePermissions-delete-"> Remove Permissions (DELETE)</h5>
 API is used to remove permissions from a role.

 
 

 ```js


var permissionsModel ={ 
"permissions" : [  "permissions" ] 
};  //Required
var role = "<role>"; //Required

lrv2.roleApi.removeRolePermissions(permissionsModel, role).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### Sott API


List of APIs in this Section:<br>
 
* GET : [Generate SOTT](#GenerateSott-get-)<br>



<h5 id="GenerateSott-get-"> Generate SOTT (GET)</h5>
 This API allows you to generate SOTT with a given expiration time.

 
 

 ```js

var timeDifference = 0; //Optional

lrv2.sottApi.generateSott(timeDifference).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### NativeSocial API


List of APIs in this Section:<br>
 
* GET : [Access Token via Facebook Token](#GetAccessTokenByFacebookAccessToken-get-)<br> 
* GET : [Access Token via Twitter Token](#GetAccessTokenByTwitterAccessToken-get-)<br> 
* GET : [Access Token via Google Token](#GetAccessTokenByGoogleAccessToken-get-)<br> 
* GET : [Access Token using google JWT token for Native Mobile Login](#GetAccessTokenByGoogleJWTAccessToken-get-)<br> 
* GET : [Access Token via Linkedin Token](#GetAccessTokenByLinkedinAccessToken-get-)<br> 
* GET : [Access Token via Google AuthCode](#GetAccessTokenByGoogleAuthCode-get-)<br>



<h5 id="GetAccessTokenByFacebookAccessToken-get-"> Access Token via Facebook Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.

 
 

 ```js

var fbAccessToken = "<fbAccessToken>"; //Required

lrv2.nativeSocialApi.getAccessTokenByFacebookAccessToken(fbAccessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccessTokenByTwitterAccessToken-get-"> Access Token via Twitter Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.

 
 

 ```js

var twAccessToken = "<twAccessToken>"; //Required
var twTokenSecret = "<twTokenSecret>"; //Required

lrv2.nativeSocialApi.getAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleAccessToken-get-"> Access Token via Google Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.

 
 

 ```js

var googleAccessToken = "<googleAccessToken>"; //Required
var clientId = "<clientId>"; //Optional
var refreshToken = "<refreshToken>"; //Optional

lrv2.nativeSocialApi.getAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleJWTAccessToken-get-"> Access Token using google JWT token for Native Mobile Login (GET)</h5>
 This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.

 
 

 ```js

var idToken = "<idToken>"; //Required

lrv2.nativeSocialApi.getAccessTokenByGoogleJWTAccessToken(idToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccessTokenByLinkedinAccessToken-get-"> Access Token via Linkedin Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.

 
 

 ```js

var lnAccessToken = "<lnAccessToken>"; //Required

lrv2.nativeSocialApi.getAccessTokenByLinkedinAccessToken(lnAccessToken).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleAuthCode-get-"> Access Token via Google AuthCode (GET)</h5>
 The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.

 
 

 ```js

var googleAuthcode = "<googleAuthcode>"; //Required

lrv2.nativeSocialApi.getAccessTokenByGoogleAuthCode(googleAuthcode).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
 

### WebHook API


List of APIs in this Section:<br>
 
* POST : [Webhook Subscribe](#WebHookSubscribe-post-)<br> 
* GET : [Webhook Subscribed URLs](#GetWebHookSubscribedURLs-get-)<br> 
* GET : [Webhook Test](#WebhookTest-get-)<br> 
* DELETE : [WebHook Unsubscribe](#WebHookUnsubscribe-delete-)<br>



<h5 id="WebHookSubscribe-post-"> Webhook Subscribe (POST)</h5>
 API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.

 
 

 ```js


var webHookSubscribeModel ={ 
"event" : "<event>",
"targetUrl" : "<targetUrl>"
};  //Required

lrv2.webHookApi.webHookSubscribe(webHookSubscribeModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="GetWebHookSubscribedURLs-get-"> Webhook Subscribed URLs (GET)</h5>
 This API is used to fatch all the subscribed URLs, for particular event

 
 

 ```js

var event = "<event>"; //Required

lrv2.webHookApi.getWebHookSubscribedURLs(event).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="WebhookTest-get-"> Webhook Test (GET)</h5>
 API can be used to test a subscribed WebHook.

 
 

 ```js


lrv2.webHookApi.webhookTest().then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
  
  
 
<h5 id="WebHookUnsubscribe-delete-"> WebHook Unsubscribe (DELETE)</h5>
 API can be used to unsubscribe a WebHook configured on your LoginRadius site.

 
 

 ```js


var webHookSubscribeModel ={ 
"event" : "<event>",
"targetUrl" : "<targetUrl>"
};  //Required

lrv2.webHookApi.webHookUnsubscribe(webHookSubscribeModel).then((response) => {
    console.log(response);
}).catch((error) => {
    console.log(error);
});

 ```
 
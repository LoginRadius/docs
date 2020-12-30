---
title: HTML5 Library
description: "A guide to impliment LoginRadius SDK in a HTML5 application."
summary: "A guide to impliment LoginRadius SDK in a HTML5 application"
---


>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

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
 This API is used to update the user's profile by passing the access token.  [More Info](/api/v2/customer-identity-api/authentication/auth-update-profile-by-token/)

 
 

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

 LoginRadiusSDK.authenticationApi.updateProfileByAccessToken(accessToken, userProfileUpdateModel, emailTemplate, fields, nullSupport, smsTemplate, verificationUrl, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="VerifyEmailByOTP-put-"> Auth Verify Email By OTP (PUT)</h5>
 This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.  [More Info](/api/v2/customer-identity-api/authentication/auth-verify-email-by-otp/)

 
 

 ```js


var emailVerificationByOtpModel ={ 
"email" : "<email>",
"otp" : "<otp>"
};  //Required
var fields = null; //Optional
var url = "<url>"; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

 LoginRadiusSDK.authenticationApi.verifyEmailByOTP(emailVerificationByOtpModel, fields, url, welcomeEmailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="ResetPasswordByResetToken-put-"> Auth Reset Password by Reset Token (PUT)</h5>
 This API is used to set a new password for the specified account.  [More Info](/api/v2/customer-identity-api/authentication/auth-reset-password-by-reset-token)

 
 

 ```js


var resetPasswordByResetTokenModel ={ 
"password" : "<password>",
"resetToken" : "<resetToken>"
};  //Required

 LoginRadiusSDK.authenticationApi.resetPasswordByResetToken(resetPasswordByResetTokenModel, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="ChangePassword-put-"> Auth Change Password (PUT)</h5>
 This API is used to change the accounts password based on the previous password  [More Info](/api/v2/customer-identity-api/authentication/auth-change-password)

 
 

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
 
  
  
 
<h5 id="AuthResendEmailVerification-put-"> Auth Resend Email Verification (PUT)</h5>
 This API resends the verification email to the user.  [More Info](/api/v2/customer-identity-api/authentication/auth-resend-email-verification/)

 
 

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
 
  
  
 
<h5 id="AddEmail-post-"> Auth Add Email (POST)</h5>
 This API is used to add additional emails to a user's account.  [More Info](/api/v2/customer-identity-api/authentication/auth-add-email)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var email = "<email>"; //Required
var type = "<type>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

 LoginRadiusSDK.authenticationApi.addEmail(accessToken, email, type, emailTemplate, verificationUrl, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="LoginByEmail-post-"> Auth Login by Email (POST)</h5>
 This API retrieves a copy of the user data based on the Email  [More Info](/api/v2/customer-identity-api/authentication/auth-login-by-email)

 
 

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
 
  
  
 
<h5 id="ForgotPassword-post-"> Auth Forgot Password (POST)</h5>
 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'  [More Info](/api/v2/customer-identity-api/authentication/auth-forgot-password)

 
 

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
 
  
  
 
<h5 id="UserRegistrationByEmail-post-"> Auth User Registration by Email (POST)</h5>
 This API creates a user in the database as well as sends a verification email to the user.  [More Info](/api/v2/customer-identity-api/authentication/auth-user-registration-by-email)

 
 

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
 
  
  
 
<h5 id="UserRegistrationByCaptcha-post-"> Auth User Registration By Captcha (POST)</h5>
 This API creates a user in the database as well as sends a verification email to the user.  [More Info](/api/v2/customer-identity-api/authentication/auth-user-registration-by-recaptcha)

 
 

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

 LoginRadiusSDK.authenticationApi.userRegistrationByCaptcha(authUserRegistrationModelWithCaptcha, emailTemplate, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="AuthValidateAccessToken-get-"> Auth Validate Access token (GET)</h5>
 This api validates access token, if valid then returns a response with its expiry otherwise error.  [More Info](/api/v2/customer-identity-api/authentication/auth-validate-access-token/)

 
 

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
 
  
  
 
<h5 id="AuthInValidateAccessToken-get-"> Access Token Invalidate (GET)</h5>
 This api call invalidates the active access token or expires an access token's validity.  [More Info](/api/v2/customer-identity-api/authentication/auth-invalidate-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var preventRefresh = true; //Optional

 LoginRadiusSDK.authenticationApi.authInValidateAccessToken(accessToken, preventRefresh, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccessTokenInfo-get-"> Access Token Info (GET)</h5>
 This api call provide the active access token Information  [More Info](/api/v2/customer-identity-api/authentication/auth-access-token-info/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

 LoginRadiusSDK.authenticationApi.getAccessTokenInfo(accessToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetProfileByAccessToken-get-"> Auth Read all Profiles by Token (GET)</h5>
 This API retrieves a copy of the user data based on the access token.  [More Info](/api/v2/customer-identity-api/authentication/auth-read-profiles-by-token/)

 
 

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
  
 
<h5 id="DeleteAccountByDeleteToken-get-"> Auth Delete Account (GET)</h5>
 This API is used to delete an account by passing it a delete token.  [More Info](/api/v2/customer-identity-api/authentication/auth-delete-account/)

 
 

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
 
  
  
 
<h5 id="CheckEmailAvailability-get-"> Auth Check Email Availability (GET)</h5>
 This API is used to check the email exists or not on your site.  [More Info](/api/v2/customer-identity-api/authentication/auth-email-availability/)

 
 

 ```js

var email = "<email>"; //Required

 LoginRadiusSDK.authenticationApi.checkEmailAvailability(email, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="VerifyEmail-get-"> Auth Verify Email (GET)</h5>
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.  [More Info](/api/v2/customer-identity-api/authentication/auth-verify-email/)

 
 

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
 
  
  
 
<h5 id="GetSocialIdentity-get-"> Auth Social Identity (GET)</h5>
 This API is called just after account linking API and it prevents the raas profile of the second account from getting created.  [More Info](/api/v2/customer-identity-api/authentication/auth-social-identity)

 
 

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
 
  
  
 
<h5 id="DeleteAccountWithEmailConfirmation-delete-"> Auth Delete Account with Email Confirmation (DELETE)</h5>
 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token  [More Info](/api/v2/customer-identity-api/authentication/auth-delete-account-with-email-confirmation/)

 
 

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
 
  
  
 
<h5 id="RemoveEmail-delete-"> Auth Remove Email (DELETE)</h5>
 This API is used to remove additional emails from a user's account.  [More Info](/api/v2/customer-identity-api/authentication/auth-remove-email)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var email = "<email>"; //Required

 LoginRadiusSDK.authenticationApi.removeEmail(accessToken, email, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
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
 This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities.  [More Info](/api/v2/customer-identity-api/account/account-update)

 
 

 ```js


var accountUserProfileUpdateModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
};  //Required
var uid = "<uid>"; //Required
var fields = null; //Optional
var nullSupport = true; //Optional

 LoginRadiusSDK.accountApi.updateAccountByUid(accountUserProfileUpdateModel, uid, fields, nullSupport, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="UpdatePhoneIDByUid-put-"> Update Phone ID by UID (PUT)</h5>
 This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.  [More Info](/api/v2/customer-identity-api/account/update-phoneid-by-uid)

 
 

 ```js

var phone = "<phone>"; //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.accountApi.updatePhoneIDByUid(phone, uid, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="SetAccountPasswordByUid-put-"> Account Set Password (PUT)</h5>
 This API is used to set the password of an account in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-set-password)

 
 

 ```js

var password = "<password>"; //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.accountApi.setAccountPasswordByUid(password, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="InvalidateAccountEmailVerification-put-"> Account Invalidate Verification Email (PUT)</h5>
 This API is used to invalidate the Email Verification status on an account.  [More Info](/api/v2/customer-identity-api/account/account-invalidate-verification-email)

 
 

 ```js

var uid = "<uid>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

 LoginRadiusSDK.accountApi.invalidateAccountEmailVerification(uid, emailTemplate, verificationUrl, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="ResetPhoneIDVerificationByUid-put-"> Reset phone ID verification (PUT)</h5>
 This API Allows you to reset the phone no verification of an end user’s account.  [More Info](/api/v2/customer-identity-api/phone-authentication/reset-phone-id-verification)

 
 

 ```js

var uid = "<uid>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.accountApi.resetPhoneIDVerificationByUid(uid, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="UpsertEmail-put-"> Upsert Email (PUT)</h5>
 This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.  [More Info](/api/v2/customer-identity-api/account/upsert-email)

 
 

 ```js


var upsertEmailModel ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] 
};  //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.accountApi.upsertEmail(upsertEmailModel, uid, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="AccountUpdateUid-put-"> Update UID (PUT)</h5>
 This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid.  [More Info](/api/v2/customer-identity-api/account/account-update/)

 
 

 ```js


var updateUidModel ={ 
"newUid" : "<newUid>"
};  //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.accountApi.accountUpdateUid(updateUidModel, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="CreateAccount-post-"> Account Create (POST)</h5>
 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields  [More Info](/api/v2/customer-identity-api/account/account-create)

 
 

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

 LoginRadiusSDK.accountApi.createAccount(accountCreateModel, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetForgotPasswordToken-post-"> Forgot Password token (POST)</h5>
 This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.  [More Info](/api/v2/customer-identity-api/account/get-forgot-password-token)

 
 

 ```js

var email = "<email>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var resetPasswordUrl = "<resetPasswordUrl>"; //Optional
var sendEmail = true; //Optional

 LoginRadiusSDK.accountApi.getForgotPasswordToken(email, emailTemplate, resetPasswordUrl, sendEmail, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetEmailVerificationToken-post-"> Email Verification token (POST)</h5>
 This API Returns an Email Verification token.  [More Info](/api/v2/customer-identity-api/account/get-email-verification-token)

 
 

 ```js

var email = "<email>"; //Required

 LoginRadiusSDK.accountApi.getEmailVerificationToken(email, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccountProfileByEmail-get-"> Account Profiles by Email (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-profiles-by-email)

 
 

 ```js

var email = "<email>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.accountApi.getAccountProfileByEmail(email, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccountProfileByPhone-get-"> Account Profile by Phone ID (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-profiles-by-phone-id/)

 
 

 ```js

var phone = "<phone>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.accountApi.getAccountProfileByPhone(phone, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccountProfileByUid-get-"> Account Profiles by UID (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-profiles-by-uid)

 
 

 ```js

var uid = "<uid>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.accountApi.getAccountProfileByUid(uid, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccountPasswordHashByUid-get-"> Account Password (GET)</h5>
 This API use to retrive the hashed password of a specified account in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-password)

 
 

 ```js

var uid = "<uid>"; //Required

 LoginRadiusSDK.accountApi.getAccountPasswordHashByUid(uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccessTokenByUid-get-"> Access Token based on UID or User impersonation API (GET)</h5>
 The API is used to get LoginRadius access token based on UID.  [More Info](/api/v2/customer-identity-api/account/account-impersonation-api)

 
 

 ```js

var uid = "<uid>"; //Required

 LoginRadiusSDK.accountApi.getAccessTokenByUid(uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccountIdentitiesByEmail-get-"> Account Identities by Email (GET)</h5>
 Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-identities-by-email)

 
 

 ```js

var email = "<email>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.accountApi.getAccountIdentitiesByEmail(email, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="DeleteAccountByUid-delete-"> Account Delete (DELETE)</h5>
 This API deletes the Users account and allows them to re-register for a new account.  [More Info](/api/v2/customer-identity-api/account/account-delete)

 
 

 ```js

var uid = "<uid>"; //Required

 LoginRadiusSDK.accountApi.deleteAccountByUid(uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="RemoveEmail-delete-"> Account Remove Email (DELETE)</h5>
 Use this API to Remove emails from a user Account  [More Info](/api/v2/customer-identity-api/account/account-email-delete)

 
 

 ```js

var email = "<email>"; //Required
var uid = "<uid>"; //Required
var fields = null; //Optional

 LoginRadiusSDK.accountApi.removeEmail(email, uid, fields, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="AccountDeleteByEmail-delete-"> Delete User Profiles By Email (DELETE)</h5>
 This API is used to delete all user profiles associated with an Email.  [More Info](/api/v2/customer-identity-api/account/account-email-delete/)

 
 

 ```js

var email = "<email>"; //Required

 LoginRadiusSDK.accountApi.accountDeleteByEmail(email, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
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
 This API is used to reset the password  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-reset-password-by-otp)

 
 

 ```js


var resetPasswordByOTPModel ={ 
"otp" : "<otp>",
"password" : "<password>",
"phone" : "<phone>"
};  //Required

 LoginRadiusSDK.phoneAuthenticationApi.resetPasswordByPhoneOTP(resetPasswordByOTPModel, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="PhoneVerificationByOTP-put-"> Phone Verification OTP (PUT)</h5>
 This API is used to validate the verification code sent to verify a user's phone number  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-verify-otp)

 
 

 ```js

var otp = "<otp>"; //Required
var phone = "<phone>"; //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.phoneAuthenticationApi.phoneVerificationByOTP(otp, phone, fields, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="PhoneVerificationOTPByAccessToken-put-"> Phone Verification OTP by Token (PUT)</h5>
 This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-verify-otp-by-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var otp = "<otp>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.phoneAuthenticationApi.phoneVerificationOTPByAccessToken(accessToken, otp, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="UpdatePhoneNumber-put-"> Phone Number Update (PUT)</h5>
 This API is used to update the login Phone Number of users  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-number-update)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.phoneAuthenticationApi.updatePhoneNumber(accessToken, phone, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="LoginByPhone-post-"> Phone Login (POST)</h5>
 This API retrieves a copy of the user data based on the Phone  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-login)

 
 

 ```js


var phoneAuthenticationModel ={ 
"password" : "<password>",
"phone" : "<phone>"
};  //Required
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.phoneAuthenticationApi.loginByPhone(phoneAuthenticationModel, fields, loginUrl, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="ForgotPasswordByPhoneOTP-post-"> Phone Forgot Password by OTP (POST)</h5>
 This API is used to send the OTP to reset the account password.  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-forgot-password-by-otp)

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.phoneAuthenticationApi.forgotPasswordByPhoneOTP(phone, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="PhoneResendVerificationOTP-post-"> Phone Resend Verification OTP (POST)</h5>
 This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-resend-otp)

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.phoneAuthenticationApi.phoneResendVerificationOTP(phone, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="PhoneResendVerificationOTPByToken-post-"> Phone Resend Verification OTP By Token (POST)</h5>
 This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-resend-otp-by-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.phoneAuthenticationApi.phoneResendVerificationOTPByToken(accessToken, phone, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="UserRegistrationByPhone-post-"> Phone User Registration by SMS (POST)</h5>
 This API registers the new users into your Cloud Storage and triggers the phone verification process.  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-user-registration-by-sms)

 
 

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

 LoginRadiusSDK.phoneAuthenticationApi.userRegistrationByPhone(authUserRegistrationModel, sott, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="CheckPhoneNumberAvailability-get-"> Phone Number Availability (GET)</h5>
 This API is used to check the Phone Number exists or not on your site.  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-number-availability)

 
 

 ```js

var phone = "<phone>"; //Required

 LoginRadiusSDK.phoneAuthenticationApi.checkPhoneNumberAvailability(phone, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="RemovePhoneIDByAccessToken-delete-"> Remove Phone ID by Access Token (DELETE)</h5>
 This API is used to delete the Phone ID on a user's account via the access token  [More Info](/api/v2/customer-identity-api/phone-authentication/remove-phone-id-by-access-token)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

 LoginRadiusSDK.phoneAuthenticationApi.removePhoneIDByAccessToken(accessToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
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
 This API is used to Enable Multi-factor authentication by access token on user login  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/update-mfa-by-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required

var multiFactorAuthModelByGoogleAuthenticatorCode ={ 
"googleAuthenticatorCode" : "<googleAuthenticatorCode>"
};  //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaUpdateByAccessToken(accessToken, multiFactorAuthModelByGoogleAuthenticatorCode, fields, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAUpdatePhoneNumberByToken-put-"> MFA Update Phone Number by Token (PUT)</h5>
 This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number-by-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var phoneNo2FA = "<phoneNo2FA>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaUpdatePhoneNumberByToken(accessToken, phoneNo2FA, smsTemplate2FA, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAValidateGoogleAuthCode-put-"> MFA Validate Google Auth Code (PUT)</h5>
 This API is used to login via Multi-factor-authentication by passing the google authenticator code.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-validate-google-auth-code/)

 
 

 ```js

var googleAuthenticatorCode = "<googleAuthenticatorCode>"; //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var fields = null; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaValidateGoogleAuthCode(googleAuthenticatorCode, secondFactorAuthenticationToken, fields, smsTemplate2FA, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAUpdatePhoneNumber-put-"> MFA Update Phone Number (PUT)</h5>
 This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number/)

 
 

 ```js

var phoneNo2FA = "<phoneNo2FA>"; //Required
var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaUpdatePhoneNumber(phoneNo2FA, secondFactorAuthenticationToken, smsTemplate2FA, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFALoginByEmail-post-"> MFA Email Login (POST)</h5>
 This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/mfa-email-login)

 
 

 ```js

var email = "<email>"; //Required
var password = "<password>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaLoginByEmail(email, password, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFALoginByPhone-post-"> MFA Phone Login (POST)</h5>
 This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/mfa-phone-login)

 
 

 ```js

var password = "<password>"; //Required
var phone = "<phone>"; //Required
var emailTemplate = "<emailTemplate>"; //Optional
var fields = null; //Optional
var loginUrl = "<loginUrl>"; //Optional
var smsTemplate = "<smsTemplate>"; //Optional
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaLoginByPhone(password, phone, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAConfigureByAccessToken-get-"> MFA Validate Access Token (GET)</h5>
 This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/mfa-validate-access-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaConfigureByAccessToken(accessToken, smsTemplate2FA, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAResendOTP-get-"> MFA Resend Otp (GET)</h5>
 This API is used to resending the verification OTP to the provided phone number  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/resend-twofactorauthentication-otp/)

 
 

 ```js

var secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
var smsTemplate2FA = "<smsTemplate2FA>"; //Optional

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaResendOTP(secondFactorAuthenticationToken, smsTemplate2FA, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAResetGoogleAuthByToken-delete-"> MFA Reset Google Authenticator by Token (DELETE)</h5>
 This API Resets the Google Authenticator configurations on a given account via the access token  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-reset-google-authenticator-by-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var googleauthenticator = true; //Required

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaResetGoogleAuthByToken(accessToken, googleauthenticator, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAResetSMSAuthByToken-delete-"> MFA Reset SMS Authenticator by Token (DELETE)</h5>
 This API resets the SMS Authenticator configurations on a given account via the access token.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-token/)

 
 

 ```js

var accessToken = "<accessToken>"; //Required
var otpauthenticator = true; //Required

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaResetSMSAuthByToken(accessToken, otpauthenticator, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAResetSMSAuthenticatorByUid-delete-"> MFA Reset SMS Authenticator By UID (DELETE)</h5>
 This API resets the SMS Authenticator configurations on a given account via the UID.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-uid/)

 
 

 ```js

var otpauthenticator = true; //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaResetSMSAuthenticatorByUid(otpauthenticator, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="MFAResetGoogleAuthenticatorByUid-delete-"> MFA Reset Google Authenticator By UID (DELETE)</h5>
 This API resets the Google Authenticator configurations on a given account via the UID.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-reset-google-authenticator-by-uid/)

 
 

 ```js

var googleauthenticator = true; //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.multiFactorAuthenticationApi.mfaResetGoogleAuthenticatorByUid(googleauthenticator, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
 

### PasswordLessLogin API


List of APIs in this Section:<br>

* PUT : [Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br>
* GET : [Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br>
* GET : [Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br>
* GET : [Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>



<h5 id="PasswordlessLoginPhoneVerification-put-"> Passwordless Login Phone Verification (PUT)</h5>
 This API verifies an account by OTP and allows the customer to login.  [More Info](/api/v2/customer-identity-api/passwordless-login/passwordless-login-phone-verification)

 
 

 ```js


var passwordLessLoginOtpModel ={ 
"otp" : "<otp>",
"phone" : "<phone>"
};  //Required
var fields = null; //Optional
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.passwordLessLoginApi.passwordlessLoginPhoneVerification(passwordLessLoginOtpModel, fields, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="PasswordlessLoginByPhone-get-"> Passwordless Login by Phone (GET)</h5>
 API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID  [More Info](/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-phone)

 
 

 ```js

var phone = "<phone>"; //Required
var smsTemplate = "<smsTemplate>"; //Optional

 LoginRadiusSDK.passwordLessLoginApi.passwordlessLoginByPhone(phone, smsTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="PasswordlessLoginByEmail-get-"> Passwordless Login By Email (GET)</h5>
 This API is used to send a Passwordless Login verification link to the provided Email ID  [More Info](/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-email)

 
 

 ```js

var email = "<email>"; //Required
var passwordLessLoginTemplate = "<passwordLessLoginTemplate>"; //Optional
var verificationUrl = "<verificationUrl>"; //Optional

 LoginRadiusSDK.passwordLessLoginApi.passwordlessLoginByEmail(email, passwordLessLoginTemplate, verificationUrl, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="PasswordlessLoginVerification-get-"> Passwordless Login Verification (GET)</h5>
 This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API  [More Info](/api/v2/customer-identity-api/passwordless-login/passwordless-login-verification)

 
 

 ```js

var verificationToken = "<verificationToken>"; //Required
var fields = null; //Optional
var welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

 LoginRadiusSDK.passwordLessLoginApi.passwordlessLoginVerification(verificationToken, fields, welcomeEmailTemplate, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
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
 This API is used to assign your desired roles to a given user.  [More Info](/api/v2/customer-identity-api/roles-management/assign-roles-by-uid/)

 
 

 ```js


var accountRolesModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.roleApi.assignRolesByUid(accountRolesModel, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="UpdateRoleContextByUid-put-"> Upsert Context (PUT)</h5>
 This API creates a Context with a set of Roles  [More Info](/api/v2/customer-identity-api/roles-management/upsert-context)

 
 

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

 LoginRadiusSDK.roleApi.updateRoleContextByUid(accountRoleContextModel, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="AddRolePermissions-put-"> Add Permissions to Role (PUT)</h5>
 This API is used to add permissions to a given role.  [More Info](/api/v2/customer-identity-api/roles-management/add-permissions-to-role)

 
 

 ```js


var permissionsModel ={ 
"permissions" : [  "permissions" ] 
};  //Required
var role = "<role>"; //Required

 LoginRadiusSDK.roleApi.addRolePermissions(permissionsModel, role, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="CreateRoles-post-"> Roles Create (POST)</h5>
 This API creates a role with permissions.  [More Info](/api/v2/customer-identity-api/roles-management/roles-create)

 
 

 ```js


var rolesModel ={ 
"roles" : [   { 
 "name" : "<name>"  ,
"permissions" : {"Permission_name":true}  
}  ] 
};  //Required

 LoginRadiusSDK.roleApi.createRoles(rolesModel, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetRolesByUid-get-"> Roles by UID (GET)</h5>
 API is used to retrieve all the assigned roles of a particular User.  [More Info](/api/v2/customer-identity-api/roles-management/get-roles-by-uid)

 
 

 ```js

var uid = "<uid>"; //Required

 LoginRadiusSDK.roleApi.getRolesByUid(uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetRoleContextByUid-get-"> Get Context with Roles and Permissions (GET)</h5>
 This API Gets the contexts that have been configured and the associated roles and permissions.  [More Info](/api/v2/customer-identity-api/roles-management/get-context)

 
 

 ```js

var uid = "<uid>"; //Required

 LoginRadiusSDK.roleApi.getRoleContextByUid(uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetRoleContextByContextName-get-"> Role Context profile (GET)</h5>
 The API is used to retrieve role context by the context name.  [More Info](/api/v2/customer-identity-api/roles-management/role-context-profile/)

 
 

 ```js

var contextName = "<contextName>"; //Required

 LoginRadiusSDK.roleApi.getRoleContextByContextName(contextName, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetRolesList-get-"> Roles List (GET)</h5>
 This API retrieves the complete list of created roles with permissions of your app.  [More Info](/api/v2/customer-identity-api/roles-management/roles-list)

 
 

 ```js


 LoginRadiusSDK.roleApi.getRolesList(, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="UnassignRolesByUid-delete-"> Unassign Roles by UID (DELETE)</h5>
 This API is used to unassign roles from a user.  [More Info](/api/v2/customer-identity-api/roles-management/unassign-roles-by-uid)

 
 

 ```js


var accountRolesModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.roleApi.unassignRolesByUid(accountRolesModel, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="DeleteRoleContextByUid-delete-"> Delete Role Context (DELETE)</h5>
 This API Deletes the specified Role Context  [More Info](/api/v2/customer-identity-api/roles-management/delete-context)

 
 

 ```js

var contextName = "<contextName>"; //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.roleApi.deleteRoleContextByUid(contextName, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="DeleteRolesFromRoleContextByUid-delete-"> Delete Role from Context (DELETE)</h5>
 This API Deletes the specified Role from a Context.  [More Info](/api/v2/customer-identity-api/roles-management/delete-role-from-context/)

 
 

 ```js

var contextName = "<contextName>"; //Required

var roleContextRemoveRoleModel ={ 
"roles" : [  "roles" ] 
};  //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.roleApi.deleteRolesFromRoleContextByUid(contextName, roleContextRemoveRoleModel, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-"> Delete Additional Permission from Context (DELETE)</h5>
 This API Deletes Additional Permissions from Context.  [More Info](/api/v2/customer-identity-api/roles-management/delete-permissions-from-context)

 
 

 ```js

var contextName = "<contextName>"; //Required

var roleContextAdditionalPermissionRemoveRoleModel ={ 
"additionalPermissions" : [  "additionalPermissions" ] 
};  //Required
var uid = "<uid>"; //Required

 LoginRadiusSDK.roleApi.deleteAdditionalPermissionFromRoleContextByUid(contextName, roleContextAdditionalPermissionRemoveRoleModel, uid, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="DeleteRole-delete-"> Account Delete Role (DELETE)</h5>
 This API is used to delete the role.  [More Info](/api/v2/customer-identity-api/roles-management/delete-role)

 
 

 ```js

var role = "<role>"; //Required

 LoginRadiusSDK.roleApi.deleteRole(role, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="RemoveRolePermissions-delete-"> Remove Permissions (DELETE)</h5>
 API is used to remove permissions from a role.  [More Info](/api/v2/customer-identity-api/roles-management/remove-permissions)

 
 

 ```js


var permissionsModel ={ 
"permissions" : [  "permissions" ] 
};  //Required
var role = "<role>"; //Required

 LoginRadiusSDK.roleApi.removeRolePermissions(permissionsModel, role, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
 

### Sott API


List of APIs in this Section:<br>

* GET : [Generate SOTT](#GenerateSott-get-)<br>



<h5 id="GenerateSott-get-"> Generate SOTT (GET)</h5>
 This API allows you to generate SOTT with a given expiration time.  [More Info](/api/v2/customer-identity-api/session/generate-sott-token)

 
 

 ```js

var timeDifference = 0; //Optional

 LoginRadiusSDK.sottApi.generateSott(timeDifference, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
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
 The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-facebook-token/)

 
 

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
 
  
  
 
<h5 id="GetAccessTokenByTwitterAccessToken-get-"> Access Token via Twitter Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-twitter-token)

 
 

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
 
  
  
 
<h5 id="GetAccessTokenByGoogleAccessToken-get-"> Access Token via Google Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-token)

 
 

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
 
  
  
 
<h5 id="GetAccessTokenByGoogleJWTAccessToken-get-"> Access Token using google JWT token for Native Mobile Login (GET)</h5>
 This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-googlejwt)

 
 

 ```js

var idToken = "<idToken>"; //Required

 LoginRadiusSDK.nativeSocialApi.getAccessTokenByGoogleJWTAccessToken(idToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccessTokenByLinkedinAccessToken-get-"> Access Token via Linkedin Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-linkedin-token/)

 
 

 ```js

var lnAccessToken = "<lnAccessToken>"; //Required

 LoginRadiusSDK.nativeSocialApi.getAccessTokenByLinkedinAccessToken(lnAccessToken, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleAuthCode-get-"> Access Token via Google AuthCode (GET)</h5>
 The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-auth-code)

 
 

 ```js

var googleAuthcode = "<googleAuthcode>"; //Required

 LoginRadiusSDK.nativeSocialApi.getAccessTokenByGoogleAuthCode(googleAuthcode, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
 

### WebHook API


List of APIs in this Section:<br>

* POST : [Webhook Subscribe](#WebHookSubscribe-post-)<br>
* GET : [Webhook Subscribed URLs](#GetWebHookSubscribedURLs-get-)<br>
* GET : [Webhook Test](#WebhookTest-get-)<br>
* DELETE : [WebHook Unsubscribe](#WebHookUnsubscribe-delete-)<br>



<h5 id="WebHookSubscribe-post-"> Webhook Subscribe (POST)</h5>
 API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.  [More Info](/api/v2/integrations/webhooks/webhook-subscribe)

 
 

 ```js


var webHookSubscribeModel ={ 
"event" : "<event>",
"targetUrl" : "<targetUrl>"
};  //Required

 LoginRadiusSDK.webHookApi.webHookSubscribe(webHookSubscribeModel, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="GetWebHookSubscribedURLs-get-"> Webhook Subscribed URLs (GET)</h5>
 This API is used to fatch all the subscribed URLs, for particular event  [More Info](/api/v2/integrations/webhooks/webhook-subscribed-urls)

 
 

 ```js

var event = "<event>"; //Required

 LoginRadiusSDK.webHookApi.getWebHookSubscribedURLs(event, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="WebhookTest-get-"> Webhook Test (GET)</h5>
 API can be used to test a subscribed WebHook.  [More Info](/api/v2/integrations/webhooks/webhook-test)

 
 

 ```js


 LoginRadiusSDK.webHookApi.webhookTest(, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
 
  
  
 
<h5 id="WebHookUnsubscribe-delete-"> WebHook Unsubscribe (DELETE)</h5>
 API can be used to unsubscribe a WebHook configured on your LoginRadius site.  [More Info](/api/v2/integrations/webhooks/webhook-unsubscribe)

 
 

 ```js


var webHookSubscribeModel ={ 
"event" : "<event>",
"targetUrl" : "<targetUrl>"
};  //Required

 LoginRadiusSDK.webHookApi.webHookUnsubscribe(webHookSubscribeModel, function(error, data){
    if(error){
      console.log(error);
	  return;
	}
	console.log(data);
 });

 ```
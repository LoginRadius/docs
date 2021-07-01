---
title: "HTML5 SDK"
tags: ["HTML5", "SDK"]
description: "A guide to impliment LoginRadius SDK in a HTML5 application."
path: "/references/sdk/html5-sdk"
---


# HTML5 SDK

> Disclaimer: This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open-source library, which means you are free to download and customize the library functions based on your specific application needs.

This document contains information and examples regarding the LoginRadius HTML5 SDK. It guides working with social authentication, user profile data, and log in with a variety of social networks such as Facebook, Google, Twitter, etc. 

You can get the SDK from <a href="https://github.com/LoginRadius/html5-sdk" target="_blank">here</a>.

To communicate with LoginRadius you will need some details about the application. These details are required for setup and initiate the implementation of LoginRadius.

* **API Credentials**: Refer to <a href="https://www.loginradius.com/docs/developer/tutorial/html-and-js-tutorial/#get-credentals" target="_blank">this document</a> for getting API Key and Secrect
* **Mobile SOTT**: Refer to <a href="https://www.loginradius.com/docs/developer/tutorial/html-and-js-tutorial/#get-credentals" target="_blank">this document</a> for getting Mobile SOTT.
* **Whitelist Domain**: Refer to <a href="https://www.loginradius.com/docs/developer/tutorial/html-and-js-tutorial/#whitelist-domain" target="_blank">this document</a> to whitelist your domain. 


## SDK Installation and Configuration

1. To utilize the HTML5/JS SDK, you will need to initialize the SDK with your API Key:
   ```
   var sdkoptions = {
    "apiKey": "{{YOUR API KEY}}"
   }
   
   LoginRadiusSDK.initSDK(sdkoptions);
   ```

2. Download the SDK from <a href="https://github.com/LoginRadius/html5-sdk" target="_blank">Github</a>.

3. Include the SDK javascript file on your website.

   ```
   <script src="LoginRadiusV2SDK.10.0.0.js" type="text/javascript"></script>
   ```

## API Methods

### Authentication API

List of APIs in this Section:

* PUT : [Auth Update Profile by Token](#auth-update-profile-by-token-put)
* PUT : [Auth Verify Email By OTP](#auth-verify-email-by-otp-put)
* PUT : [Auth Reset Password by Reset Token](#auth-reset-password-by-reset-token-put)
* PUT : [Auth Change Password](#auth-change-password-put)
* PUT : [Auth Resend Email Verification](#auth-resend-email-verification-put)
* POST : [Auth Add Email](#auth-add-email-post)
* POST : [Auth Login by Email](#auth-login-by-email-post)
* POST : [Auth Forgot Password](#auth-forgot-password-post)
* POST : [Auth User Registration by Email](#auth-user-registration-by-email-post)
* POST : [Auth User Registration By Captcha](#auth-user-registration-by-captcha-post)
* GET : [Auth Validate Access token](#auth-validate-access-token-get)
* GET : [Access Token Invalidate](#access-token-invalidate-get)
* GET : [Access Token Info](#access-token-info-get)
* GET : [Auth Read all Profiles by Token](#auth-read-all-profiles-by-token-get)
* GET : [Auth Send Welcome Email](#auth-send-welcome-email-get)
* GET : [Auth Delete Account](#auth-delete-account-get)
* GET : [Auth Check Email Availability](#auth-check-email-availability-get)
* GET : [Auth Verify Email](#auth-verify-email-get)
* GET : [Auth Social Identity](#auth-social-identity-get)
* GET : [Auth Privacy Policy Accept](#auth-privacy-policy-accept-get)
* DELETE : [Auth Delete Account with Email Confirmation](#auth-delete-account-with-email-confirmation-delete)
* DELETE : [Auth Remove Email](#auth-remove-email-delete)


#### Auth Update Profile by Token (PUT)

This API is used to update the user's profile by passing the access token.


```html

var accessToken = "<accessToken>"; //Required

var userProfileUpdateModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
}; //Required
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

#### Auth Verify Email By OTP (PUT)

This API is used to verify the email of the user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.


```html


var emailVerificationByOtpModel ={ 
"email" : "<email>",
"otp" : "<otp>"
}; //Required
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

#### Auth Reset Password by Reset Token (PUT)

This API is used to set a new password for the specified account.


```html


var resetPasswordByResetTokenModel ={ 
"password" : "<password>",
"resetToken" : "<resetToken>"
}; //Required

LoginRadiusSDK.authenticationApi.resetPasswordByResetToken(resetPasswordByResetTokenModel, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Auth Change Password (PUT)

This API is used to change the account's password based on the previous password


```html

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

#### Auth Resend Email Verification (PUT)

This API resends the verification email to the user.


```html

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

#### Auth Add Email (POST)

This API is used to add additional emails to a user's account.


```html

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

#### Auth Login by Email (POST)

This API retrieves a copy of the user data based on the Email


```html


var emailAuthenticationModel ={ 
"email" : "<email>",
"password" : "<password>"
}; //Required
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

#### Auth Forgot Password (POST)

This API is used to send the reset password URL to a specified account. Note: If you have the UserName workflow-enabled, you may replace the 'email' parameter with 'username'


```html

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

#### Auth User Registration by Email (POST)

This API creates a user in the database as well as sends a verification email to the user.


```html


var authUserRegistrationModel ={ 
"email" : [ { 
"type" : "<type>" ,
"value" : "<value>" 
} ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
}; //Required
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

#### Auth User Registration By Captcha (POST)

This API creates a user in the database as well as sends a verification email to the user.


```html


var authUserRegistrationModelWithCaptcha ={ 
"email" : [ { 
"type" : "<type>" ,
"value" : "<value>" 
} ] ,
"firstName" : "<firstName>",
"g-recaptcha-response" : "<g-recaptcha-response>",
"lastName" : "<lastName>",
"password" : "<password>"
}; //Required
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

#### Auth Validate Access token (GET)

This API validates the access token, if valid then returns a response with its expiry otherwise error.


```html

var accessToken = "<accessToken>"; //Required

LoginRadiusSDK.authenticationApi.authValidateAccessToken(accessToken, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Access Token Invalidate (GET)

This API call invalidates the active access token or expires an access token's validity.


```html

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

#### Access Token Info (GET)

This API call provides the active access token Information


```html

var accessToken = "<accessToken>"; //Required

LoginRadiusSDK.authenticationApi.getAccessTokenInfo(accessToken, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Auth Read all Profiles by Token (GET)

This API retrieves a copy of the user data based on the access token.


```html

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

#### Auth Send Welcome Email (GET)

This API sends a welcome email


```html

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

#### Auth Delete Account (GET)

This API is used to delete an account by passing it a delete token.


```html

var deletetoken = "<deletetoken>"; //Required

LoginRadiusSDK.authenticationApi.deleteAccountByDeleteToken(deletetoken, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Auth Check Email Availability (GET)

This API is used to check the email exists or not on your site.


```html

var email = "<email>"; //Required

LoginRadiusSDK.authenticationApi.checkEmailAvailability(email, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Auth Verify Email (GET)

This API is used to verify the email of the user. Note: This API will only return the full profile if you have 'Enable auto-login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.


```html

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

#### Auth Social Identity (GET)

This API is called just after account linking API and it prevents the raas profile of the second account from getting created.


```html 

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

#### Auth Privacy Policy Accept (GET)

This API is used to update the privacy policy stored in the user's profile by providing the access token of the user accepting the privacy policy


```html

var accessToken = "<accessToken>"; //Required
var fields = null; //Optional

LoginRadiusSDK.authenticationApi.acceptPrivacyPolicy(accessToken, fields, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Auth Delete Account with Email Confirmation (DELETE)

This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token


```html

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

#### Auth Remove Email (DELETE)

This API is used to remove additional emails from a user's account.


```html

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

List of APIs in this Section:

* PUT : [Account Update](#account-update-put)
* PUT : [Update Phone ID by UID](#update-phone-id-by-uid-put)
* PUT : [Account Set Password](#account-set-password-put)
* PUT : [Account Invalidate Verification Email](#account-invalidate-verification-email-put)
* PUT : [Reset phone ID verification](#reset-phone-id-verification-put)
* PUT : [Upsert Email](#upsert-email-put)
* PUT : [Update UID](#update-uid-put)
* POST : [Account Create](#account-create-post)
* POST : [Forgot Password token](#forgot-password-token-post)
* POST : [Email Verification token](#email-verification-token-post)
* GET : [Account Profiles by Email](#account-profiles-by-email-get)
* GET : [Account Profile by Phone ID](#account-profile-by-phone-id-get)
* GET : [Account Profiles by UID](#account-profiles-by-uid-get)
* GET : [Account Password](#account-password-get)
* GET : [Access Token based on UID or User impersonation API](#access-token-based-on-uid-or-user-impersonation-api-get)
* GET : [Account Identities by Email](#account-identities-by-email-get)
* DELETE : [Account Delete](#account-delete-delete)
* DELETE : [Account Remove Email](#account-remove-email-delete)
* DELETE : [Delete User Profiles By Email](#delete-user-profiles-by-email-delete)


#### Account Update (PUT)

This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section Here for more capabilities.


```html


var accountUserProfileUpdateModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
}; //Required
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

#### Update Phone ID by UID (PUT)

This API is used to update the PhoneId by using the Uid's. Admin can update the phone for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.


```html

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

#### Account Set Password (PUT)

This API is used to set the password of an account in Cloud Storage.


```html

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

#### Account Invalidate Verification Email (PUT)

This API is used to invalidate the Email Verification status on an account.


```html

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

#### Reset phone ID verification (PUT)

This API allows you to reset the phone with no verification of an end user’s account.


```html

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

#### Upsert Email (PUT)

This API is used to add/upsert another email in the account profile by different-different email types. If the email type is the same then it will simply update the existing email, otherwise, it will add a new email in the Email array.


```html

var upsertEmailModel ={ 
"email" : [ { 
"type" : "<type>" ,
"value" : "<value>" 
} ] 
}; //Required
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

#### Update UID (PUT)

This API is used to update a user's Uid. It will update all profiles, custom objects, and consent management logs associated with the Uid.


```html


var updateUidModel ={ 
"newUid" : "<newUid>"
}; //Required
var uid = "<uid>"; //Required

LoginRadiusSDK.accountApi.accountUpdateUid(updateUidModel, uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Account Create (POST)

This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user.

To use this API, you need to format a JSON request body with all of the mandatory fields


```html


var accountCreateModel ={ 
"email" : [ { 
"type" : "<type>" ,
"value" : "<value>" 
} ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
}; //Required
var fields = null; //Optional

LoginRadiusSDK.accountApi.createAccount(accountCreateModel, fields, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Forgot Password token (POST)

This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow-enabled, you may replace the 'email' parameter with 'username' in the body.


```html

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

#### Email Verification token (POST)

This API Returns an Email Verification token.


```html

var email = "<email>"; //Required

LoginRadiusSDK.accountApi.getEmailVerificationToken(email, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Account Profiles by Email (GET)

This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.


```html

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

#### Account Profile by Phone ID (GET)

This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.


```html

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

#### Account Profiles by UID (GET)

This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.


```html

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

#### Account Password (GET)

This API is used to retrieve the hashed password of a specified account in Cloud Storage.


```html

var uid = "<uid>"; //Required

LoginRadiusSDK.accountApi.getAccountPasswordHashByUid(uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Access Token based on UID or User impersonation API (GET)

The API is used to get a LoginRadius access token based on UID.


```html

var uid = "<uid>"; //Required

LoginRadiusSDK.accountApi.getAccessTokenByUid(uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```


#### Account Identities by Email (GET)

Note: This is intended for specific workflows where an email may be associated with multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.


```html

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

#### Account Delete (DELETE)

This API deletes the User's account and allows them to re-register for a new account.


```html

var uid = "<uid>"; //Required

LoginRadiusSDK.accountApi.deleteAccountByUid(uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Account Remove Email (DELETE)

Use this API to Remove emails from a user Account


```html

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

#### Delete User Profiles By Email (DELETE)

This API is used to delete all user profiles associated with an Email.


```html

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

List of APIs in this Section:

* PUT : [Phone Reset Password by OTP](#phone-reset-password-by-otp-put)
* PUT : [Phone Verification OTP](#phone-verification-otp-put)
* PUT : [Phone Verification OTP by Token](#phone-verification-otp-by-token-put)
* PUT : [Phone Number Update](#phone-number-update-put)
* POST : [Phone Login](#phone-login-post)
* POST : [Phone Forgot Password by OTP](#phone-forgot-password-by-otp-post)
* POST : [Phone Resend Verification OTP](#phone-resend-verification-otp-post)
* POST : [Phone Resend Verification OTP By Token](#phone-resend-verification-otp-by-token-post)
* POST : [Phone User Registration by SMS](#phone-user-registration-by-sms-post)
* GET : [Phone Number Availability](#phone-number-availability-get)
* DELETE : [Remove Phone ID by Access Token](#remove-phone-id-by-access-token-delete)

#### Phone Reset Password by OTP (PUT)

This API is used to reset the password


```html


var resetPasswordByOTPModel ={ 
"otp" : "<otp>",
"password" : "<password>",
"phone" : "<phone>"
}; //Required

LoginRadiusSDK.phoneAuthenticationApi.resetPasswordByPhoneOTP(resetPasswordByOTPModel, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Phone Verification OTP (PUT)

This API is used to validate the verification code sent to verify a user's phone number

```html

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

#### Phone Verification OTP by Token (PUT)

This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in bypassing the user's access token.


```html

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

#### Phone Number Update (PUT)

This API is used to update the login Phone Number of users


```html

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

#### Phone Login (POST)

This API retrieves a copy of the user data based on the Phone


```html


var phoneAuthenticationModel ={ 
"password" : "<password>",
"phone" : "<phone>"
}; //Required
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

#### Phone Forgot Password by OTP (POST)

This API is used to send the OTP to reset the account password.


```html

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

#### Phone Resend Verification OTP (POST)

This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input


```html

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

#### Phone Resend Verification OTP By Token (POST)

This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists


```html

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

#### Phone User Registration by SMS (POST)

This API registers the new users into your Cloud Storage and triggers the phone verification process.


```html


var authUserRegistrationModel ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>",
"phoneId" : "<phoneId>"
}; //Required
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

#### Phone Number Availability (GET)

This API is used to check the Phone Number exists or not on your site.


```html

var phone = "<phone>"; //Required

LoginRadiusSDK.phoneAuthenticationApi.checkPhoneNumberAvailability(phone, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Remove Phone ID by Access Token (DELETE)

This API is used to delete the Phone ID on a user's account via the access token


```html

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

List of APIs in this Section:

* PUT : [Update MFA by Access Token](#update-mfa-by-access-token-put)
* PUT : [MFA Update Phone Number by Token](#mfa-update-phone-number-by-token-put)
* PUT : [MFA Validate Google Auth Code](#mfa-validate-google-auth-code-put)
* PUT : [MFA Update Phone Number](#mfa-update-phone-number-put)
* POST : [MFA Email Login](#mfa-email-login-post)
* POST : [MFA Phone Login](#mfa-phone-login-post)
* GET : [MFA Validate Access Token](#mfa-validate-access-token-get)
* GET : [MFA Resend Otp](#mfa-resend-otp-get)
* DELETE : [MFA Reset Google Authenticator by Token](#mfa-reset-google-authenticator-by-token-delete)
* DELETE : [MFA Reset SMS Authenticator by Token](#mfa-reset-sms-authenticator-by-token-delete)
* DELETE : [MFA Reset SMS Authenticator By UID](#mfa-reset-sms-authenticator-by-uid-delete)
* DELETE : [MFA Reset Google Authenticator By UID](#mfa-reset-google-authenticator-by-uid-delete)

#### Update MFA by Access Token (PUT)

This API is used to Enable Multi-factor authentication by access token on user login


```html

var accessToken = "<accessToken>"; //Required

var multiFactorAuthModelByGoogleAuthenticatorCode ={ 
"googleAuthenticatorCode" : "<googleAuthenticatorCode>"
}; //Required
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

#### MFA Update Phone Number by Token (PUT)

This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number


```html

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

#### MFA Validate Google Auth Code (PUT)

This API is used to log in via Multi-factor-authentication by passing the google authenticator code.


```html

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

#### MFA Update Phone Number (PUT)

This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number


```html

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

#### MFA Email Login (POST)

This API can be used to login by email id on a Multi-factor authentication enabled LoginRadius site.


```html

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

#### MFA Phone Login (POST)

This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.


```html

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

#### MFA Validate Access Token (GET)

This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.


```html

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

#### MFA Resend Otp (GET)

This API is used to resending the verification OTP to the provided phone number


```html

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

#### MFA Reset Google Authenticator by Token (DELETE)

This API Resets the Google Authenticator configurations on a given account via the access token


```html

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

#### MFA Reset SMS Authenticator by Token (DELETE)

This API resets the SMS Authenticator configurations on a given account via the access token.


```html

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

#### MFA Reset SMS Authenticator By UID (DELETE)

This API resets the SMS Authenticator configurations on a given account via the UID.


```html

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

#### MFA Reset Google Authenticator By UID (DELETE)

This API resets the Google Authenticator configurations on a given account via the UID.


```html

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

List of APIs in this Section:

* PUT : [Passwordless Login Phone Verification](#passwordless-login-phone-verification-put)
* GET : [Passwordless Login by Phone](#passwordless-login-by-phone-get)
* GET : [Passwordless Login By Email](#passwordless-login-by-email-get)
* GET : [Passwordless Login Verification](#passwordless-login-verification-get)


#### Passwordless Login Phone Verification (PUT)

This API verifies an account by OTP and allows the customer to login.


```html


var passwordLessLoginOtpModel ={ 
"otp" : "<otp>",
"phone" : "<phone>"
}; //Required
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

#### Passwordless Login by Phone (GET)

API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID


```html

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

#### Passwordless Login By Email (GET)

This API is used to send a Passwordless Login verification link to the provided Email ID


```html

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

#### Passwordless Login Verification (GET)

This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API


```html

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

List of APIs in this Section:

* PUT : [Assign Roles by UID](#assign-roles-by-uid-put)
* PUT : [Upsert Context](#upsert-context-put)
* PUT : [Add Permissions to Role](#add-permissions-to-role-put)
* POST : [Roles Create](#roles-create-post)
* GET : [Roles by UID](#roles-by-uid-get)
* GET : [Get Context with Roles and Permissions](#get-context-with-roles-and-permissions-get)
* GET : [Role Context profile](#role-context-profile-get)
* GET : [Roles List](#roles-list-get)
* DELETE : [Unassign Roles by UID](#unassign-roles-by-uid-delete)
* DELETE : [Delete Role Context](#delete-role-context-delete)
* DELETE : [Delete Role from Context](#delete-role-from-context-delete)
* DELETE : [Delete Additional Permission from Context](#delete-additional-permission-from-context-delete)
* DELETE : [Account Delete Role](#account-delete-role-delete)
* DELETE : [Remove Permissions](#remove-permissions-delete)

#### Assign Roles by UID (PUT)

This API is used to assign your desired roles to a given user.


```html

var accountRolesModel ={ 
"roles" : [ "roles" ] 
}; //Required
var uid = "<uid>"; //Required

LoginRadiusSDK.roleApi.assignRolesByUid(accountRolesModel, uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Upsert Context (PUT)

This API creates a Context with a set of Roles


```html


var accountRoleContextModel ={ 
"roleContext" : [ { 
 "additionalPermissions" : ["<additionalPermissions>" ] ,
"context" : "<context>" ,
"expiration" : "<expiration>" ,
 "roles" : ["<roles>" ] 
} ] 
}; //Required
var uid = "<uid>"; //Required

LoginRadiusSDK.roleApi.updateRoleContextByUid(accountRoleContextModel, uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Add Permissions to Role (PUT)

This API is used to add permissions to a given role.


```html


var permissionsModel ={ 
"permissions" : [ "permissions" ] 
}; //Required
var role = "<role>"; //Required

LoginRadiusSDK.roleApi.addRolePermissions(permissionsModel, role, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Roles Create (POST)

This API creates a role with permissions.


```html


var rolesModel ={ 
"roles" : [ { 
"name" : "<name>" ,
"permissions" : {"Permission_name":true} 
} ] 
}; //Required

LoginRadiusSDK.roleApi.createRoles(rolesModel, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Roles by UID (GET)

API is used to retrieve all the assigned roles of a particular User.


```html

var uid = "<uid>"; //Required

LoginRadiusSDK.roleApi.getRolesByUid(uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Get Context with Roles and Permissions (GET)

This API Gets the contexts that have been configured and the associated roles and permissions.


```html

var uid = "<uid>"; //Required

LoginRadiusSDK.roleApi.getRoleContextByUid(uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Role Context profile (GET)

The API is used to retrieve role context by the context name.


```html

var contextName = "<contextName>"; //Required

LoginRadiusSDK.roleApi.getRoleContextByContextName(contextName, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Roles List (GET)

This API retrieves the complete list of created roles with permissions of your app.


```


LoginRadiusSDK.roleApi.getRolesList(, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Unassign Roles by UID (DELETE)

This API is used to unassign roles from a user.


```html


var accountRolesModel ={ 
"roles" : [ "roles" ] 
}; //Required
var uid = "<uid>"; //Required

LoginRadiusSDK.roleApi.unassignRolesByUid(accountRolesModel, uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Delete Role Context (DELETE)

This API Deletes the specified Role Context


```html

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

#### Delete Role from Context (DELETE)

This API Deletes the specified Role from a Context.


```html

var contextName = "<contextName>"; //Required

var roleContextRemoveRoleModel ={ 
"roles" : [ "roles" ] 
}; //Required
var uid = "<uid>"; //Required

LoginRadiusSDK.roleApi.deleteRolesFromRoleContextByUid(contextName, roleContextRemoveRoleModel, uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Delete Additional Permission from Context (DELETE)

This API Deletes Additional Permissions from Context.


```html

var contextName = "<contextName>"; //Required

var roleContextAdditionalPermissionRemoveRoleModel ={ 
"additionalPermissions" : [ "additionalPermissions" ] 
}; //Required
var uid = "<uid>"; //Required

LoginRadiusSDK.roleApi.deleteAdditionalPermissionFromRoleContextByUid(contextName, roleContextAdditionalPermissionRemoveRoleModel, uid, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Account Delete Role (DELETE)

This API is used to delete the role.


```html

var role = "<role>"; //Required

LoginRadiusSDK.roleApi.deleteRole(role, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Remove Permissions (DELETE)

API is used to remove permissions from a role.


```html


var permissionsModel ={ 
"permissions" : [ "permissions" ] 
}; //Required
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

List of APIs in this Section:

* GET : [Generate SOTT](#generate-sott-get)

#### Generate SOTT (GET)

This API allows you to generate SOTT with a given expiration time.


```html

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

List of APIs in this Section:

* GET : [Access Token via Facebook Token](#access-token-via-facebook-token-get)
* GET : [Access Token via Twitter Token](#access-token-via-twitter-token-get)
* GET : [Access Token via Google Token](#access-token-via-google-token-get)
* GET : [Access Token using google JWT token for Native Mobile Login](#access-token-using-google-jwt-token-for-native-mobile-login-get)
* GET : [Access Token via Linkedin Token](#access-token-via-linkedin-token-get)
* GET : [Access Token via Google AuthCode](#access-token-via-google-authcode-get)

#### Access Token via Facebook Token (GET)

The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.


```html

var fbAccessToken = "<fbAccessToken>"; //Required

LoginRadiusSDK.nativeSocialApi.getAccessTokenByFacebookAccessToken(fbAccessToken, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Access Token via Twitter Token (GET)

The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.


```html

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

#### Access Token via Google Token (GET)

The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.


```html

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

#### Access Token using google JWT token for Native Mobile Login (GET)

This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.


```html

var idToken = "<idToken>"; //Required

LoginRadiusSDK.nativeSocialApi.getAccessTokenByGoogleJWTAccessToken(idToken, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Access Token via Linkedin Token (GET)

The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.


```html

var lnAccessToken = "<lnAccessToken>"; //Required

LoginRadiusSDK.nativeSocialApi.getAccessTokenByLinkedinAccessToken(lnAccessToken, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Access Token via Google AuthCode (GET)

The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.


```html

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

List of APIs in this Section:

* POST : [Webhook Subscribe](#webhook-subscribe-post)
* GET : [Webhook Subscribed URLs](#webhook-subscribed-urls-get)
* GET : [Webhook Test](#webhook-test-get)
* DELETE : [WebHook Unsubscribe](#webhook-unsubscribe-delete)

#### Webhook Subscribe (POST)

API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe to your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on a unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.


```html


var webHookSubscribeModel ={ 
"event" : "<event>",
"targetUrl" : "<targetUrl>"
}; //Required

LoginRadiusSDK.webHookApi.webHookSubscribe(webHookSubscribeModel, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Webhook Subscribed URLs (GET)

This API is used to fetch all the subscribed URLs, for a particular event


```html

var event = "<event>"; //Required

LoginRadiusSDK.webHookApi.getWebHookSubscribedURLs(event, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### Webhook Test (GET)

API can be used to test a subscribed WebHook.


```html


LoginRadiusSDK.webHookApi.webhookTest(, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```

#### WebHook Unsubscribe (DELETE)

API can be used to unsubscribe a WebHook configured on your LoginRadius site.




```html

var webHookSubscribeModel ={ 
"event" : "<event>",
"targetUrl" : "<targetUrl>"
}; //Required

LoginRadiusSDK.webHookApi.webHookUnsubscribe(webHookSubscribeModel, function(error, data){
 if(error){
 console.log(error);
 return;
 }
 console.log(data);
});

```



[Go Back to Home Page](/)

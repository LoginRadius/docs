---
title: ASP.NET Library
description: "A guide to impliment LoginRadius SDK in a ASP.NET application."
summary: "A guide to impliment LoginRadius SDK in a ASP.NET application"
---

>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.



## Prerequisites

* .NET 4.0 or later / .NetStandard 1.3 or later

## Installation
This documentation presumes you have worked through the client-side implementation to setup your LoginRadius User Registration interfaces that will serve the initial registration and login process. Details on this can be found in the [getting started guide](/guides/web-dotnet/).

**Note** : LoginRadius uses the industry standard TLS 1.2 protocol, designed to help protect the privacy of information communicated over the Internet. In order to use the LoginRadius .Net SDK, add the following code before instantiating your web service in your project's `Global.asax` file.

```cs
ServicePointManager.SecurityProtocol = SecurityProtocolType.Tls | SecurityProtocolType.Tls11 | SecurityProtocolType.Tls12;
```

### Importing Required Libraries
- Download the User Registration .Net SDK from [Github](https://github.com/LoginRadius/dot-net-sdk)

- Copy LoginRadiusSDK.V2.dll and LoginRadiusSDK.V2.pdb files into the References directory of your ASP.NET project.

OR

- Run the following command in the NuGet Package Manager Console:

```cs
PM> Install-Package LoginRadiusSDK.NET
```

OR

- Open the solution using Visual Studio 2019.

- Build the project and note where the .nupkg file is located.

- Access the NuGet Package Manager Settings and import the directory where the .nupkg file is located.

- Access the "Manage NuGet Packages for Solutions..." tool change the source to the newly created source and select and install the LoginRadius SDK

Next, include the following namespaces in your project:


```cs
using LoginRadiusSDK.V2.Api;
using LoginRadiusSDK.V2.Models;
```
## Configuration

Set your [app credentials](https://dashboard.loginradius.com/dashboard):

```cs
LoginRadiusSdkGlobalConfig.ApiKey = "__API_KEY__";
LoginRadiusSdkGlobalConfig.ApiSecret = "__API_SECRET__";
LoginRadiusSdkGlobalConfig.AppName = "__LoginRadius_APP_NAME__";
LoginRadiusSdkGlobalConfig.ApiRequestSigning ="false";
LoginRadiusSdkGlobalConfig.ConnectionTimeout = 30000; // Connection Timeout (milliseconds)
LoginRadiusSdkGlobalConfig.ProxyAddress = "__HTTP_PROXY_ADDRESS__"; // Absolute Proxy URI
LoginRadiusSdkGlobalConfig.ProxyCredentials = "__HTTP_PROXY_CREDENTIALS__"; // Proxy Credentials in the format 'USERNAME:PASSWORD'
LoginRadiusSdkGlobalConfig.RequestRetries = 3;
LoginRadiusSdkGlobalConfig.ApiRegion = "_region_";
LoginRadiusSdkGlobalConfig.DomainName = "https://api.loginradius.com/";
```

OR

For ASP.NET. in  `web.config`:
```
  <configSections>
    <section name="loginradius" type="LoginRadiusSDK.V2.SDKConfigHandler, LoginRadiusSDK.V2" />
  </configSections>

  <!-- LoginRadius SDK settings -->
  <loginradius>
    <settings>
      <add name="apiKey" value="__API_KEY__" />
      <add name="apiSecret" value="__API_SECRET__" />
      <add name="appName" value="__LoginRadius_APP_NAME__"/>
	  <add name="ApiRequestSigning" value="false"/>
      <add name="proxyAddress" value="__HTTP_PROXY_ADDRESS__" /> <!-- Absolute Proxy URI -->
      <add name="proxyCredentials" value="__HTTP_PROXY_CREDENTIALS__" /> <!-- Proxy Credentials in the format 'USERNAME:PASSWORD' -->
      <add name="connectionTimeout" value="__HTTP_CONNECTION_TIMEOUT__" /> <!-- Connection Timeout (milliseconds) -->
      <add name="requestRetries" value="__HTTP_CONNECTION_RETRY__" />
      <add name="apiRegion" value="_region_" />
      <add name="domainName" value="https://api.loginradius.com/" />
    </settings>
  </loginradius>
```
OR

For .NET Core, in `appsettings.json`:

**JSON**
```
"loginradius": {
    "apiKey": "__API_KEY__",
    "apiSecret": "__API_SECRET__",
    "appName" : "__LoginRadius_APP_NAME__",
	"ApiRequestSigning" : "false",
    "proxyAddress" : "__HTTP_PROXY_ADDRESS__",
    "proxyCredentials" : "__HTTP_PROXY_CREDENTIAL__",
    "connectionTimeout" : "__HTTP_CONNECTION_TIMEOUT__",
    "requestRetries" : "__HTTP_CONNECTION_RETRY__",
    "apiRegion": "_region_",
    "domainName" : "https://api.loginradius.com/"
  }

 ```

 ### Custom Domain
When initializing the SDK, optionally specify a custom domain.
Example : In appsettings.json, add following statement - 

```
"domainName" : "https://api.loginradius.com/"
```



### API Request Signing
When initializing the SDK, you can optionally specify enabling this feature. Enabling this feature means the customer does not need to pass an API secret in an API request. Instead, they can pass a dynamically generated hash value. This feature will also make sure that the message is not tampered during transit when someone calls our APIs.
Example : In appsettings.json, add following statement -

```cs
"ApiRequestSigning" : "false"
```

For more details check [API Refrence Here](https://www.loginradius.com/docs/developer/api/)

## API Details




### Authentication API


List of APIs in this Section:<br>
[PUT : Auth Update Profile by Token](#UpdateProfileByAccessToken-put-)<br>
[PUT : Auth Verify Email By OTP](#VerifyEmailByOTP-put-)<br>
[PUT : Auth Reset Password by Reset Token](#ResetPasswordByResetToken-put-)<br>
[PUT : Auth Change Password](#ChangePassword-put-)<br>
[PUT : Auth Resend Email Verification](#AuthResendEmailVerification-put-)<br>
[POST : Auth Add Email](#AddEmail-post-)<br>
[POST : Auth Login by Email](#LoginByEmail-post-)<br>
[POST : Auth Forgot Password](#ForgotPassword-post-)<br>
[POST : Auth User Registration by Email](#UserRegistrationByEmail-post-)<br>
[POST : Auth User Registration By Captcha](#UserRegistrationByCaptcha-post-)<br>
[GET : Auth Validate Access token](#AuthValidateAccessToken-get-)<br>
[GET : Access Token Invalidate](#AuthInValidateAccessToken-get-)<br>
[GET : Access Token Info](#GetAccessTokenInfo-get-)<br>
[GET : Auth Read all Profiles by Token](#GetProfileByAccessToken-get-)<br>
[GET : Auth Delete Account](#DeleteAccountByDeleteToken-get-)<br>
[GET : Auth Check Email Availability](#CheckEmailAvailability-get-)<br>
[GET : Auth Verify Email](#VerifyEmail-get-)<br>
[GET : Auth Social Identity](#GetSocialIdentity-get-)<br>
[DELETE : Auth Delete Account with Email Confirmation](#DeleteAccountWithEmailConfirmation-delete-)<br>
[DELETE : Auth Remove Email](#RemoveEmail-delete-)<br>



<h5 id="UpdateProfileByAccessToken-put-">Auth Update Profile by Token (PUT)</h5>
This API is used to update the user's profile by passing the access token. 



```cs

var accessToken = "accessToken"; //Required
UserProfileUpdateModel userProfileUpdateModel = new UserProfileUpdateModel{
FirstName ="<FirstName>",
LastName ="<LastName>"
}; //Required
var emailTemplate = "emailTemplate"; //Optional
string fields = null; //Optional
; //Optional
var smsTemplate = "smsTemplate"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new AuthenticationApi().UpdateProfileByAccessToken(accessToken, userProfileUpdateModel, emailTemplate, fields, smsTemplate, verificationUrl);
```


<h5 id="VerifyEmailByOTP-put-">Auth Verify Email By OTP (PUT)</h5>
This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled. 



```cs

EmailVerificationByOtpModel emailVerificationByOtpModel = new EmailVerificationByOtpModel{
Email ="<Email>",
Otp ="<Otp>"
}; //Required
string fields = null; //Optional
var url = "url"; //Optional
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new AuthenticationApi().VerifyEmailByOTP(emailVerificationByOtpModel, fields, url, welcomeEmailTemplate);
```


<h5 id="ResetPasswordByResetToken-put-">Auth Reset Password by Reset Token (PUT)</h5>
This API is used to set a new password for the specified account. 



```cs

ResetPasswordByResetTokenModel resetPasswordByResetTokenModel = new ResetPasswordByResetTokenModel{
Password ="<Password>",
ResetToken ="<ResetToken>"
}; //Required
var apiResponse = new AuthenticationApi().ResetPasswordByResetToken(resetPasswordByResetTokenModel);
```


<h5 id="ChangePassword-put-">Auth Change Password (PUT)</h5>
This API is used to change the accounts password based on the previous password 



```cs

var accessToken = "accessToken"; //Required
var newPassword = "newPassword"; //Required
var oldPassword = "oldPassword"; //Required
var apiResponse = new AuthenticationApi().ChangePassword(accessToken, newPassword, oldPassword);
```


<h5 id="AuthResendEmailVerification-put-">Auth Resend Email Verification (PUT)</h5>
This API resends the verification email to the user. 



```cs

var email = "email"; //Required
var emailTemplate = "emailTemplate"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new AuthenticationApi().AuthResendEmailVerification(email, emailTemplate, verificationUrl);
```


<h5 id="AddEmail-post-">Auth Add Email (POST)</h5>
This API is used to add additional emails to a user's account. 



```cs

var accessToken = "accessToken"; //Required
var email = "email"; //Required
var type = "type"; //Required
var emailTemplate = "emailTemplate"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new AuthenticationApi().AddEmail(accessToken, email, type, emailTemplate, verificationUrl);
```


<h5 id="LoginByEmail-post-">Auth Login by Email (POST)</h5>
This API retrieves a copy of the user data based on the Email 



```cs

EmailAuthenticationModel emailAuthenticationModel = new EmailAuthenticationModel{
Email ="<Email>",
Password ="<Password>"
}; //Required
var emailTemplate = "emailTemplate"; //Optional
string fields = null; //Optional
var loginUrl = "loginUrl"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new AuthenticationApi().LoginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl);
```


<h5 id="ForgotPassword-post-">Auth Forgot Password (POST)</h5>
This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' 



```cs

var email = "email"; //Required
var resetPasswordUrl = "resetPasswordUrl"; //Required
var emailTemplate = "emailTemplate"; //Optional
var apiResponse = new AuthenticationApi().ForgotPassword(email, resetPasswordUrl, emailTemplate);
```


<h5 id="UserRegistrationByEmail-post-">Auth User Registration by Email (POST)</h5>
This API creates a user in the database as well as sends a verification email to the user. 



```cs

AuthUserRegistrationModel authUserRegistrationModel = new AuthUserRegistrationModel{
Email = new List<EmailModel>{
new EmailModel{
Type ="<Type>",
Value ="<Value>"
}},
FirstName ="<FirstName>",
LastName ="<LastName>",
Password ="<Password>"
}; //Required
var sott = "sott"; //Required
var emailTemplate = "emailTemplate"; //Optional
string fields = null; //Optional
var options = "options"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new AuthenticationApi().UserRegistrationByEmail(authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate);
```


<h5 id="UserRegistrationByCaptcha-post-">Auth User Registration By Captcha (POST)</h5>
This API creates a user in the database as well as sends a verification email to the user. 



```cs

AuthUserRegistrationModelWithCaptcha authUserRegistrationModelWithCaptcha = new AuthUserRegistrationModelWithCaptcha{
Email = new List<EmailModel>{
new EmailModel{
Type ="<Type>",
Value ="<Value>"
}},
FirstName ="<FirstName>",
G_recaptcha_response ="<G-recaptcha-response>",
LastName ="<LastName>",
Password ="<Password>"
}; //Required
var emailTemplate = "emailTemplate"; //Optional
string fields = null; //Optional
var options = "options"; //Optional
var smsTemplate = "smsTemplate"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new AuthenticationApi().UserRegistrationByCaptcha(authUserRegistrationModelWithCaptcha, emailTemplate, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate);
```


<h5 id="AuthValidateAccessToken-get-">Auth Validate Access token (GET)</h5>
This api validates access token, if valid then returns a response with its expiry otherwise error. 



```cs

var accessToken = "accessToken"; //Required
var apiResponse = new AuthenticationApi().AuthValidateAccessToken(accessToken);
```


<h5 id="AuthInValidateAccessToken-get-">Access Token Invalidate (GET)</h5>
This api call invalidates the active access token or expires an access token's validity. 



```cs

var accessToken = "accessToken"; //Required
var preventRefresh = true; //Optional
var apiResponse = new AuthenticationApi().AuthInValidateAccessToken(accessToken, preventRefresh);
```


<h5 id="GetAccessTokenInfo-get-">Access Token Info (GET)</h5>
This api call provide the active access token Information 



```cs

var accessToken = "accessToken"; //Required
var apiResponse = new AuthenticationApi().GetAccessTokenInfo(accessToken);
```


<h5 id="GetProfileByAccessToken-get-">Auth Read all Profiles by Token (GET)</h5>
This API retrieves a copy of the user data based on the access token. 



```cs

var accessToken = "accessToken"; //Required
string fields = null; //Optional
var apiResponse = new AuthenticationApi().GetProfileByAccessToken(accessToken, fields);
```


<h5 id="DeleteAccountByDeleteToken-get-">Auth Delete Account (GET)</h5>
This API is used to delete an account by passing it a delete token. 



```cs

var deleteToken = "deleteToken"; //Required
var apiResponse = new AuthenticationApi().DeleteAccountByDeleteToken(deleteToken);
```


<h5 id="CheckEmailAvailability-get-">Auth Check Email Availability (GET)</h5>
This API is used to check the email exists or not on your site. 



```cs

var email = "email"; //Required
var apiResponse = new AuthenticationApi().CheckEmailAvailability(email);
```


<h5 id="VerifyEmail-get-">Auth Verify Email (GET)</h5>
This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'. 



```cs

var verificationToken = "verificationToken"; //Required
string fields = null; //Optional
var url = "url"; //Optional
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new AuthenticationApi().VerifyEmail(verificationToken, fields, url, welcomeEmailTemplate);
```


<h5 id="GetSocialIdentity-get-">Auth Social Identity (GET)</h5>
This API is called just after account linking API and it prevents the raas profile of the second account from getting created. 



```cs

var accessToken = "accessToken"; //Required
string fields = null; //Optional
var apiResponse = new AuthenticationApi().GetSocialIdentity(accessToken, fields);
```


<h5 id="DeleteAccountWithEmailConfirmation-delete-">Auth Delete Account with Email Confirmation (DELETE)</h5>
This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token 



```cs

var accessToken = "accessToken"; //Required
var deleteUrl = "deleteUrl"; //Optional
var emailTemplate = "emailTemplate"; //Optional
var apiResponse = new AuthenticationApi().DeleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate);
```


<h5 id="RemoveEmail-delete-">Auth Remove Email (DELETE)</h5>
This API is used to remove additional emails from a user's account. 



```cs

var accessToken = "accessToken"; //Required
var email = "email"; //Required
var apiResponse = new AuthenticationApi().RemoveEmail(accessToken, email);
```







### Account API


List of APIs in this Section:<br>
[PUT : Account Update](#UpdateAccountByUid-put-)<br>
[PUT : Update Phone ID by UID](#UpdatePhoneIDByUid-put-)<br>
[PUT : Account Set Password](#SetAccountPasswordByUid-put-)<br>
[PUT : Account Invalidate Verification Email](#InvalidateAccountEmailVerification-put-)<br>
[PUT : Reset phone ID verification](#ResetPhoneIDVerificationByUid-put-)<br>
[PUT : Upsert Email](#UpsertEmail-put-)<br>
[PUT : Update UID](#AccountUpdateUid-put-)<br>
[POST : Account Create](#CreateAccount-post-)<br>
[POST : Forgot Password token](#GetForgotPasswordToken-post-)<br>
[POST : Email Verification token](#GetEmailVerificationToken-post-)<br>
[GET : Account Profiles by Email](#GetAccountProfileByEmail-get-)<br>
[GET : Account Profile by Phone ID](#GetAccountProfileByPhone-get-)<br>
[GET : Account Profiles by UID](#GetAccountProfileByUid-get-)<br>
[GET : Account Password](#GetAccountPasswordHashByUid-get-)<br>
[GET : Access Token based on UID or User impersonation API](#GetAccessTokenByUid-get-)<br>
[GET : Account Identities by Email](#GetAccountIdentitiesByEmail-get-)<br>
[DELETE : Account Delete](#DeleteAccountByUid-delete-)<br>
[DELETE : Account Remove Email](#RemoveEmail-delete-)<br>
[DELETE : Delete User Profiles By Email](#AccountDeleteByEmail-delete-)<br>



<h5 id="UpdateAccountByUid-put-">Account Update (PUT)</h5>
This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities. 



```cs

AccountUserProfileUpdateModel accountUserProfileUpdateModel = new AccountUserProfileUpdateModel{
FirstName ="<FirstName>",
LastName ="<LastName>"
}; //Required
var uid = "uid"; //Required
string fields = null; //Optional
; //Optional
var apiResponse = new AccountApi().UpdateAccountByUid(accountUserProfileUpdateModel, uid, fields);
```


<h5 id="UpdatePhoneIDByUid-put-">Update Phone ID by UID (PUT)</h5>
This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process. 



```cs

var phone = "phone"; //Required
var uid = "uid"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().UpdatePhoneIDByUid(phone, uid, fields);
```


<h5 id="SetAccountPasswordByUid-put-">Account Set Password (PUT)</h5>
This API is used to set the password of an account in Cloud Storage. 



```cs

var password = "password"; //Required
var uid = "uid"; //Required
var apiResponse = new AccountApi().SetAccountPasswordByUid(password, uid);
```


<h5 id="InvalidateAccountEmailVerification-put-">Account Invalidate Verification Email (PUT)</h5>
This API is used to invalidate the Email Verification status on an account. 



```cs

var uid = "uid"; //Required
var emailTemplate = "emailTemplate"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new AccountApi().InvalidateAccountEmailVerification(uid, emailTemplate, verificationUrl);
```


<h5 id="ResetPhoneIDVerificationByUid-put-">Reset phone ID verification (PUT)</h5>
This API Allows you to reset the phone no verification of an end user’s account. 



```cs

var uid = "uid"; //Required
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new AccountApi().ResetPhoneIDVerificationByUid(uid, smsTemplate);
```


<h5 id="UpsertEmail-put-">Upsert Email (PUT)</h5>
This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array. 



```cs

UpsertEmailModel upsertEmailModel = new UpsertEmailModel{
Email = new List<EmailModel>{
new EmailModel{
Type ="<Type>",
Value ="<Value>"
}}
}; //Required
var uid = "uid"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().UpsertEmail(upsertEmailModel, uid, fields);
```


<h5 id="AccountUpdateUid-put-">Update UID (PUT)</h5>
This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid. 



```cs

UpdateUidModel updateUidModel = new UpdateUidModel{
NewUid ="<NewUid>"
}; //Required
var uid = "uid"; //Required
var apiResponse = new AccountApi().AccountUpdateUid(updateUidModel, uid);
```


<h5 id="CreateAccount-post-">Account Create (POST)</h5>
This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields 



```cs

AccountCreateModel accountCreateModel = new AccountCreateModel{
Email = new List<EmailModel>{
new EmailModel{
Type ="<Type>",
Value ="<Value>"
}},
FirstName ="<FirstName>",
LastName ="<LastName>",
Password ="<Password>"
}; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().CreateAccount(accountCreateModel, fields);
```


<h5 id="GetForgotPasswordToken-post-">Forgot Password token (POST)</h5>
This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body. 



```cs

var email = "email"; //Required
var emailTemplate = "emailTemplate"; //Optional
var resetPasswordUrl = "resetPasswordUrl"; //Optional
var sendEmail = true; //Optional
var apiResponse = new AccountApi().GetForgotPasswordToken(email, emailTemplate, resetPasswordUrl, sendEmail);
```


<h5 id="GetEmailVerificationToken-post-">Email Verification token (POST)</h5>
This API Returns an Email Verification token. 



```cs

var email = "email"; //Required
var apiResponse = new AccountApi().GetEmailVerificationToken(email);
```


<h5 id="GetAccountProfileByEmail-get-">Account Profiles by Email (GET)</h5>
This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage. 



```cs

var email = "email"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountProfileByEmail(email, fields);
```


<h5 id="GetAccountProfileByPhone-get-">Account Profile by Phone ID (GET)</h5>
This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage. 



```cs

var phone = "phone"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountProfileByPhone(phone, fields);
```


<h5 id="GetAccountProfileByUid-get-">Account Profiles by UID (GET)</h5>
This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage. 



```cs

var uid = "uid"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountProfileByUid(uid, fields);
```


<h5 id="GetAccountPasswordHashByUid-get-">Account Password (GET)</h5>
This API use to retrive the hashed password of a specified account in Cloud Storage. 



```cs

var uid = "uid"; //Required
var apiResponse = new AccountApi().GetAccountPasswordHashByUid(uid);
```


<h5 id="GetAccessTokenByUid-get-">Access Token based on UID or User impersonation API (GET)</h5>
The API is used to get LoginRadius access token based on UID. 



```cs

var uid = "uid"; //Required
var apiResponse = new AccountApi().GetAccessTokenByUid(uid);
```


<h5 id="GetAccountIdentitiesByEmail-get-">Account Identities by Email (GET)</h5>
Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage. 



```cs

var email = "email"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountIdentitiesByEmail(email, fields);
```


<h5 id="DeleteAccountByUid-delete-">Account Delete (DELETE)</h5>
This API deletes the Users account and allows them to re-register for a new account. 



```cs

var uid = "uid"; //Required
var apiResponse = new AccountApi().DeleteAccountByUid(uid);
```


<h5 id="RemoveEmail-delete-">Account Remove Email (DELETE)</h5>
Use this API to Remove emails from a user Account 



```cs

var email = "email"; //Required
var uid = "uid"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().RemoveEmail(email, uid, fields);
```


<h5 id="AccountDeleteByEmail-delete-">Delete User Profiles By Email (DELETE)</h5>
This API is used to delete all user profiles associated with an Email. 



```cs

var email = "email"; //Required
var apiResponse = new AccountApi().AccountDeleteByEmail(email);
```







### PhoneAuthentication API


List of APIs in this Section:<br>
[PUT : Phone Reset Password by OTP](#ResetPasswordByPhoneOTP-put-)<br>
[PUT : Phone Verification OTP](#PhoneVerificationByOTP-put-)<br>
[PUT : Phone Verification OTP by Token](#PhoneVerificationOTPByAccessToken-put-)<br>
[PUT : Phone Number Update](#UpdatePhoneNumber-put-)<br>
[POST : Phone Login](#LoginByPhone-post-)<br>
[POST : Phone Forgot Password by OTP](#ForgotPasswordByPhoneOTP-post-)<br>
[POST : Phone Resend Verification OTP](#PhoneResendVerificationOTP-post-)<br>
[POST : Phone Resend Verification OTP By Token](#PhoneResendVerificationOTPByToken-post-)<br>
[POST : Phone User Registration by SMS](#UserRegistrationByPhone-post-)<br>
[GET : Phone Number Availability](#CheckPhoneNumberAvailability-get-)<br>
[DELETE : Remove Phone ID by Access Token](#RemovePhoneIDByAccessToken-delete-)<br>



<h5 id="ResetPasswordByPhoneOTP-put-">Phone Reset Password by OTP (PUT)</h5>
This API is used to reset the password 



```cs

ResetPasswordByOTPModel resetPasswordByOTPModel = new ResetPasswordByOTPModel{
Otp ="<Otp>",
Password ="<Password>",
Phone ="<Phone>"
}; //Required
var apiResponse = new PhoneAuthenticationApi().ResetPasswordByPhoneOTP(resetPasswordByOTPModel);
```


<h5 id="PhoneVerificationByOTP-put-">Phone Verification OTP (PUT)</h5>
This API is used to validate the verification code sent to verify a user's phone number 



```cs

var otp = "otp"; //Required
var phone = "phone"; //Required
string fields = null; //Optional
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().PhoneVerificationByOTP(otp, phone, fields, smsTemplate);
```


<h5 id="PhoneVerificationOTPByAccessToken-put-">Phone Verification OTP by Token (PUT)</h5>
This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token. 



```cs

var accessToken = "accessToken"; //Required
var otp = "otp"; //Required
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().PhoneVerificationOTPByAccessToken(accessToken, otp, smsTemplate);
```


<h5 id="UpdatePhoneNumber-put-">Phone Number Update (PUT)</h5>
This API is used to update the login Phone Number of users 



```cs

var accessToken = "accessToken"; //Required
var phone = "phone"; //Required
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().UpdatePhoneNumber(accessToken, phone, smsTemplate);
```


<h5 id="LoginByPhone-post-">Phone Login (POST)</h5>
This API retrieves a copy of the user data based on the Phone 



```cs

PhoneAuthenticationModel phoneAuthenticationModel = new PhoneAuthenticationModel{
Password ="<Password>",
Phone ="<Phone>"
}; //Required
string fields = null; //Optional
var loginUrl = "loginUrl"; //Optional
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().LoginByPhone(phoneAuthenticationModel, fields, loginUrl, smsTemplate);
```


<h5 id="ForgotPasswordByPhoneOTP-post-">Phone Forgot Password by OTP (POST)</h5>
This API is used to send the OTP to reset the account password. 



```cs

var phone = "phone"; //Required
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().ForgotPasswordByPhoneOTP(phone, smsTemplate);
```


<h5 id="PhoneResendVerificationOTP-post-">Phone Resend Verification OTP (POST)</h5>
This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input 



```cs

var phone = "phone"; //Required
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().PhoneResendVerificationOTP(phone, smsTemplate);
```


<h5 id="PhoneResendVerificationOTPByToken-post-">Phone Resend Verification OTP By Token (POST)</h5>
This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists 



```cs

var accessToken = "accessToken"; //Required
var phone = "phone"; //Required
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().PhoneResendVerificationOTPByToken(accessToken, phone, smsTemplate);
```


<h5 id="UserRegistrationByPhone-post-">Phone User Registration by SMS (POST)</h5>
This API registers the new users into your Cloud Storage and triggers the phone verification process. 



```cs

AuthUserRegistrationModel authUserRegistrationModel = new AuthUserRegistrationModel{
FirstName ="<FirstName>",
LastName ="<LastName>",
Password ="<Password>",
PhoneId ="<PhoneId>"
}; //Required
var sott = "sott"; //Required
string fields = null; //Optional
var options = "options"; //Optional
var smsTemplate = "smsTemplate"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().UserRegistrationByPhone(authUserRegistrationModel, sott, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate);
```


<h5 id="CheckPhoneNumberAvailability-get-">Phone Number Availability (GET)</h5>
This API is used to check the Phone Number exists or not on your site. 



```cs

var phone = "phone"; //Required
var apiResponse = new PhoneAuthenticationApi().CheckPhoneNumberAvailability(phone);
```


<h5 id="RemovePhoneIDByAccessToken-delete-">Remove Phone ID by Access Token (DELETE)</h5>
This API is used to delete the Phone ID on a user's account via the access token 



```cs

var accessToken = "accessToken"; //Required
var apiResponse = new PhoneAuthenticationApi().RemovePhoneIDByAccessToken(accessToken);
```







### MultiFactorAuthentication API


List of APIs in this Section:<br>
[PUT : Update MFA by Access Token](#MFAUpdateByAccessToken-put-)<br>
[PUT : MFA Update Phone Number by Token](#MFAUpdatePhoneNumberByToken-put-)<br>
[PUT : MFA Validate Google Auth Code](#MFAValidateGoogleAuthCode-put-)<br>
[PUT : MFA Update Phone Number](#MFAUpdatePhoneNumber-put-)<br>
[POST : MFA Email Login](#MFALoginByEmail-post-)<br>
[POST : MFA Phone Login](#MFALoginByPhone-post-)<br>
[GET : MFA Validate Access Token](#MFAConfigureByAccessToken-get-)<br>
[GET : MFA Resend Otp](#MFAResendOTP-get-)<br>
[DELETE : MFA Reset Google Authenticator by Token](#MFAResetGoogleAuthByToken-delete-)<br>
[DELETE : MFA Reset SMS Authenticator by Token](#MFAResetSMSAuthByToken-delete-)<br>
[DELETE : MFA Reset SMS Authenticator By UID](#MFAResetSMSAuthenticatorByUid-delete-)<br>
[DELETE : MFA Reset Google Authenticator By UID](#MFAResetGoogleAuthenticatorByUid-delete-)<br>



<h5 id="MFAUpdateByAccessToken-put-">Update MFA by Access Token (PUT)</h5>
This API is used to Enable Multi-factor authentication by access token on user login 



```cs

var accessToken = "accessToken"; //Required
MultiFactorAuthModelByGoogleAuthenticatorCode multiFactorAuthModelByGoogleAuthenticatorCode = new MultiFactorAuthModelByGoogleAuthenticatorCode{
GoogleAuthenticatorCode ="<GoogleAuthenticatorCode>"
}; //Required
string fields = null; //Optional
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAUpdateByAccessToken(accessToken, multiFactorAuthModelByGoogleAuthenticatorCode, fields, smsTemplate);
```


<h5 id="MFAUpdatePhoneNumberByToken-put-">MFA Update Phone Number by Token (PUT)</h5>
This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number 



```cs

var accessToken = "accessToken"; //Required
var phoneNo2FA = "phoneNo2FA"; //Required
var smsTemplate2FA = "smsTemplate2FA"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAUpdatePhoneNumberByToken(accessToken, phoneNo2FA, smsTemplate2FA);
```


<h5 id="MFAValidateGoogleAuthCode-put-">MFA Validate Google Auth Code (PUT)</h5>
This API is used to login via Multi-factor-authentication by passing the google authenticator code. 



```cs

var googleAuthenticatorCode = "googleAuthenticatorCode"; //Required
var secondFactorAuthenticationToken = "secondFactorAuthenticationToken"; //Required
string fields = null; //Optional
var smsTemplate2FA = "smsTemplate2FA"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAValidateGoogleAuthCode(googleAuthenticatorCode, secondFactorAuthenticationToken, fields, smsTemplate2FA);
```


<h5 id="MFAUpdatePhoneNumber-put-">MFA Update Phone Number (PUT)</h5>
This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number 



```cs

var phoneNo2FA = "phoneNo2FA"; //Required
var secondFactorAuthenticationToken = "secondFactorAuthenticationToken"; //Required
var smsTemplate2FA = "smsTemplate2FA"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAUpdatePhoneNumber(phoneNo2FA, secondFactorAuthenticationToken, smsTemplate2FA);
```


<h5 id="MFALoginByEmail-post-">MFA Email Login (POST)</h5>
This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site. 



```cs

var email = "email"; //Required
var password = "password"; //Required
var emailTemplate = "emailTemplate"; //Optional
string fields = null; //Optional
var loginUrl = "loginUrl"; //Optional
var smsTemplate = "smsTemplate"; //Optional
var smsTemplate2FA = "smsTemplate2FA"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFALoginByEmail(email, password, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl);
```


<h5 id="MFALoginByPhone-post-">MFA Phone Login (POST)</h5>
This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site. 



```cs

var password = "password"; //Required
var phone = "phone"; //Required
var emailTemplate = "emailTemplate"; //Optional
string fields = null; //Optional
var loginUrl = "loginUrl"; //Optional
var smsTemplate = "smsTemplate"; //Optional
var smsTemplate2FA = "smsTemplate2FA"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFALoginByPhone(password, phone, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl);
```


<h5 id="MFAConfigureByAccessToken-get-">MFA Validate Access Token (GET)</h5>
This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site. 



```cs

var accessToken = "accessToken"; //Required
var smsTemplate2FA = "smsTemplate2FA"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAConfigureByAccessToken(accessToken, smsTemplate2FA);
```


<h5 id="MFAResendOTP-get-">MFA Resend Otp (GET)</h5>
This API is used to resending the verification OTP to the provided phone number 



```cs

var secondFactorAuthenticationToken = "secondFactorAuthenticationToken"; //Required
var smsTemplate2FA = "smsTemplate2FA"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAResendOTP(secondFactorAuthenticationToken, smsTemplate2FA);
```


<h5 id="MFAResetGoogleAuthByToken-delete-">MFA Reset Google Authenticator by Token (DELETE)</h5>
This API Resets the Google Authenticator configurations on a given account via the access token 



```cs

var accessToken = "accessToken"; //Required
var googleAuthenticator = true; //Required
var apiResponse = new MultiFactorAuthenticationApi().MFAResetGoogleAuthByToken(accessToken, googleAuthenticator);
```


<h5 id="MFAResetSMSAuthByToken-delete-">MFA Reset SMS Authenticator by Token (DELETE)</h5>
This API resets the SMS Authenticator configurations on a given account via the access token. 



```cs

var accessToken = "accessToken"; //Required
var otpAuthenticator = true; //Required
var apiResponse = new MultiFactorAuthenticationApi().MFAResetSMSAuthByToken(accessToken, otpAuthenticator);
```


<h5 id="MFAResetSMSAuthenticatorByUid-delete-">MFA Reset SMS Authenticator By UID (DELETE)</h5>
This API resets the SMS Authenticator configurations on a given account via the UID. 



```cs

var otpAuthenticator = true; //Required
var uid = "uid"; //Required
var apiResponse = new MultiFactorAuthenticationApi().MFAResetSMSAuthenticatorByUid(otpAuthenticator, uid);
```


<h5 id="MFAResetGoogleAuthenticatorByUid-delete-">MFA Reset Google Authenticator By UID (DELETE)</h5>
This API resets the Google Authenticator configurations on a given account via the UID. 



```cs

var googleAuthenticator = true; //Required
var uid = "uid"; //Required
var apiResponse = new MultiFactorAuthenticationApi().MFAResetGoogleAuthenticatorByUid(googleAuthenticator, uid);
```







### PasswordLessLogin API


List of APIs in this Section:<br>
[PUT : Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br>
[GET : Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br>
[GET : Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br>
[GET : Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>



<h5 id="PasswordlessLoginPhoneVerification-put-">Passwordless Login Phone Verification (PUT)</h5>
This API verifies an account by OTP and allows the customer to login. 



```cs

PasswordLessLoginOtpModel passwordLessLoginOtpModel = new PasswordLessLoginOtpModel{
Otp ="<Otp>",
Phone ="<Phone>"
}; //Required
string fields = null; //Optional
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PasswordLessLoginApi().PasswordlessLoginPhoneVerification(passwordLessLoginOtpModel, fields, smsTemplate);
```


<h5 id="PasswordlessLoginByPhone-get-">Passwordless Login by Phone (GET)</h5>
API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID 



```cs

var phone = "phone"; //Required
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PasswordLessLoginApi().PasswordlessLoginByPhone(phone, smsTemplate);
```


<h5 id="PasswordlessLoginByEmail-get-">Passwordless Login By Email (GET)</h5>
This API is used to send a Passwordless Login verification link to the provided Email ID 



```cs

var email = "email"; //Required
var passwordLessLoginTemplate = "passwordLessLoginTemplate"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new PasswordLessLoginApi().PasswordlessLoginByEmail(email, passwordLessLoginTemplate, verificationUrl);
```


<h5 id="PasswordlessLoginVerification-get-">Passwordless Login Verification (GET)</h5>
This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API 



```cs

var verificationToken = "verificationToken"; //Required
string fields = null; //Optional
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new PasswordLessLoginApi().PasswordlessLoginVerification(verificationToken, fields, welcomeEmailTemplate);
```







### Role API


List of APIs in this Section:<br>
[PUT : Assign Roles by UID](#AssignRolesByUid-put-)<br>
[PUT : Upsert Context](#UpdateRoleContextByUid-put-)<br>
[PUT : Add Permissions to Role](#AddRolePermissions-put-)<br>
[POST : Roles Create](#CreateRoles-post-)<br>
[GET : Roles by UID](#GetRolesByUid-get-)<br>
[GET : Get Context with Roles and Permissions](#GetRoleContextByUid-get-)<br>
[GET : Role Context profile](#GetRoleContextByContextName-get-)<br>
[GET : Roles List](#GetRolesList-get-)<br>
[DELETE : Unassign Roles by UID](#UnassignRolesByUid-delete-)<br>
[DELETE : Delete Role Context](#DeleteRoleContextByUid-delete-)<br>
[DELETE : Delete Role from Context](#DeleteRolesFromRoleContextByUid-delete-)<br>
[DELETE : Delete Additional Permission from Context](#DeleteAdditionalPermissionFromRoleContextByUid-delete-)<br>
[DELETE : Account Delete Role](#DeleteRole-delete-)<br>
[DELETE : Remove Permissions](#RemoveRolePermissions-delete-)<br>



<h5 id="AssignRolesByUid-put-">Assign Roles by UID (PUT)</h5>
This API is used to assign your desired roles to a given user. 



```cs

AccountRolesModel accountRolesModel = new AccountRolesModel{
Roles = new List<String>{"Roles"}
}; //Required
var uid = "uid"; //Required
var apiResponse = new RoleApi().AssignRolesByUid(accountRolesModel, uid);
```


<h5 id="UpdateRoleContextByUid-put-">Upsert Context (PUT)</h5>
This API creates a Context with a set of Roles 



```cs

AccountRoleContextModel accountRoleContextModel = new AccountRoleContextModel{
RoleContext = new List<RoleContextRoleModel>{
new RoleContextRoleModel{
AdditionalPermissions = new List<String>{"AdditionalPermissions"},
Context ="<Context>",
Expiration ="<Expiration>",
Roles = new List<String>{"Roles"}
}}
}; //Required
var uid = "uid"; //Required
var apiResponse = new RoleApi().UpdateRoleContextByUid(accountRoleContextModel, uid);
```


<h5 id="AddRolePermissions-put-">Add Permissions to Role (PUT)</h5>
This API is used to add permissions to a given role. 



```cs

PermissionsModel permissionsModel = new PermissionsModel{
Permissions = new List<String>{"Permissions"}
}; //Required
var role = "role"; //Required
var apiResponse = new RoleApi().AddRolePermissions(permissionsModel, role);
```


<h5 id="CreateRoles-post-">Roles Create (POST)</h5>
This API creates a role with permissions. 



```cs

RolesModel rolesModel = new RolesModel{
Roles = new List<RoleModel>{
new RoleModel{
Name ="<Name>",
Permissions = new Dictionary<String,Boolean>{
["Permission_name"] = true
}
}}
}; //Required
var apiResponse = new RoleApi().CreateRoles(rolesModel);
```


<h5 id="GetRolesByUid-get-">Roles by UID (GET)</h5>
API is used to retrieve all the assigned roles of a particular User. 



```cs

var uid = "uid"; //Required
var apiResponse = new RoleApi().GetRolesByUid(uid);
```


<h5 id="GetRoleContextByUid-get-">Get Context with Roles and Permissions (GET)</h5>
This API Gets the contexts that have been configured and the associated roles and permissions. 



```cs

var uid = "uid"; //Required
var apiResponse = new RoleApi().GetRoleContextByUid(uid);
```


<h5 id="GetRoleContextByContextName-get-">Role Context profile (GET)</h5>
The API is used to retrieve role context by the context name. 



```cs

var contextName = "contextName"; //Required
var apiResponse = new RoleApi().GetRoleContextByContextName(contextName);
```


<h5 id="GetRolesList-get-">Roles List (GET)</h5>
This API retrieves the complete list of created roles with permissions of your app. 



```cs

var apiResponse = new RoleApi().GetRolesList();
```


<h5 id="UnassignRolesByUid-delete-">Unassign Roles by UID (DELETE)</h5>
This API is used to unassign roles from a user. 



```cs

AccountRolesModel accountRolesModel = new AccountRolesModel{
Roles = new List<String>{"Roles"}
}; //Required
var uid = "uid"; //Required
var apiResponse = new RoleApi().UnassignRolesByUid(accountRolesModel, uid);
```


<h5 id="DeleteRoleContextByUid-delete-">Delete Role Context (DELETE)</h5>
This API Deletes the specified Role Context 



```cs

var contextName = "contextName"; //Required
var uid = "uid"; //Required
var apiResponse = new RoleApi().DeleteRoleContextByUid(contextName, uid);
```


<h5 id="DeleteRolesFromRoleContextByUid-delete-">Delete Role from Context (DELETE)</h5>
This API Deletes the specified Role from a Context. 



```cs

var contextName = "contextName"; //Required
RoleContextRemoveRoleModel roleContextRemoveRoleModel = new RoleContextRemoveRoleModel{
Roles = new List<String>{"Roles"}
}; //Required
var uid = "uid"; //Required
var apiResponse = new RoleApi().DeleteRolesFromRoleContextByUid(contextName, roleContextRemoveRoleModel, uid);
```


<h5 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-">Delete Additional Permission from Context (DELETE)</h5>
This API Deletes Additional Permissions from Context. 



```cs

var contextName = "contextName"; //Required
RoleContextAdditionalPermissionRemoveRoleModel roleContextAdditionalPermissionRemoveRoleModel = new RoleContextAdditionalPermissionRemoveRoleModel{
AdditionalPermissions = new List<String>{"AdditionalPermissions"}
}; //Required
var uid = "uid"; //Required
var apiResponse = new RoleApi().DeleteAdditionalPermissionFromRoleContextByUid(contextName, roleContextAdditionalPermissionRemoveRoleModel, uid);
```


<h5 id="DeleteRole-delete-">Account Delete Role (DELETE)</h5>
This API is used to delete the role. 



```cs

var role = "role"; //Required
var apiResponse = new RoleApi().DeleteRole(role);
```


<h5 id="RemoveRolePermissions-delete-">Remove Permissions (DELETE)</h5>
API is used to remove permissions from a role. 



```cs

PermissionsModel permissionsModel = new PermissionsModel{
Permissions = new List<String>{"Permissions"}
}; //Required
var role = "role"; //Required
var apiResponse = new RoleApi().RemoveRolePermissions(permissionsModel, role);
```







### Sott API


List of APIs in this Section:<br>
[GET : Generate SOTT](#GenerateSott-get-)<br>



<h5 id="GenerateSott-get-">Generate SOTT (GET)</h5>
This API allows you to generate SOTT with a given expiration time. 



```cs

var timeDifference = 0; //Optional
var apiResponse = new SottApi().GenerateSott(timeDifference);
```







### NativeSocial API


List of APIs in this Section:<br>
[GET : Access Token via Facebook Token](#GetAccessTokenByFacebookAccessToken-get-)<br>
[GET : Access Token via Twitter Token](#GetAccessTokenByTwitterAccessToken-get-)<br>
[GET : Access Token via Google Token](#GetAccessTokenByGoogleAccessToken-get-)<br>
[GET : Access Token using google JWT token for Native Mobile Login](#GetAccessTokenByGoogleJWTAccessToken-get-)<br>
[GET : Access Token via Linkedin Token](#GetAccessTokenByLinkedinAccessToken-get-)<br>
[GET : Access Token via Google AuthCode](#GetAccessTokenByGoogleAuthCode-get-)<br>



<h5 id="GetAccessTokenByFacebookAccessToken-get-">Access Token via Facebook Token (GET)</h5>
The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response. 



```cs

var fbAccessToken = "fbAccessToken"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByFacebookAccessToken(fbAccessToken);
```


<h5 id="GetAccessTokenByTwitterAccessToken-get-">Access Token via Twitter Token (GET)</h5>
The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response. 



```cs

var twAccessToken = "twAccessToken"; //Required
var twTokenSecret = "twTokenSecret"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret);
```


<h5 id="GetAccessTokenByGoogleAccessToken-get-">Access Token via Google Token (GET)</h5>
The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response. 



```cs

var googleAccessToken = "googleAccessToken"; //Required
var clientId = "clientId"; //Optional
var refreshToken = "refreshToken"; //Optional
var apiResponse = new NativeSocialApi().GetAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken);
```


<h5 id="GetAccessTokenByGoogleJWTAccessToken-get-">Access Token using google JWT token for Native Mobile Login (GET)</h5>
This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration. 



```cs

var idToken = "idToken"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByGoogleJWTAccessToken(idToken);
```


<h5 id="GetAccessTokenByLinkedinAccessToken-get-">Access Token via Linkedin Token (GET)</h5>
The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response. 



```cs

var lnAccessToken = "lnAccessToken"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByLinkedinAccessToken(lnAccessToken);
```


<h5 id="GetAccessTokenByGoogleAuthCode-get-">Access Token via Google AuthCode (GET)</h5>
The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response. 



```cs

var googleAuthcode = "googleAuthcode"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByGoogleAuthCode(googleAuthcode);
```







### WebHook API


List of APIs in this Section:<br>
[POST : Webhook Subscribe](#WebHookSubscribe-post-)<br>
[GET : Webhook Subscribed URLs](#GetWebHookSubscribedURLs-get-)<br>
[GET : Webhook Test](#WebhookTest-get-)<br>
[DELETE : WebHook Unsubscribe](#WebHookUnsubscribe-delete-)<br>



<h5 id="WebHookSubscribe-post-">Webhook Subscribe (POST)</h5>
API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call. 



```cs

WebHookSubscribeModel webHookSubscribeModel = new WebHookSubscribeModel{
Event ="<Event>",
TargetUrl ="<TargetUrl>"
}; //Required
var apiResponse = new WebHookApi().WebHookSubscribe(webHookSubscribeModel);
```


<h5 id="GetWebHookSubscribedURLs-get-">Webhook Subscribed URLs (GET)</h5>
This API is used to fatch all the subscribed URLs, for particular event 



```cs

var event = "event"; //Required
var apiResponse = new WebHookApi().GetWebHookSubscribedURLs(event);
```


<h5 id="WebhookTest-get-">Webhook Test (GET)</h5>
API can be used to test a subscribed WebHook. 



```cs

var apiResponse = new WebHookApi().WebhookTest();
```


<h5 id="WebHookUnsubscribe-delete-">WebHook Unsubscribe (DELETE)</h5>
API can be used to unsubscribe a WebHook configured on your LoginRadius site. 



```cs

WebHookSubscribeModel webHookSubscribeModel = new WebHookSubscribeModel{
Event ="<Event>",
TargetUrl ="<TargetUrl>"
}; //Required
var apiResponse = new WebHookApi().WebHookUnsubscribe(webHookSubscribeModel);
```
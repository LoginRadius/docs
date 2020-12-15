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


List of APIs in this Section:

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



```cs

var accessToken = "accessToken"; //Required
var newPassword = "newPassword"; //Required
var oldPassword = "oldPassword"; //Required
var apiResponse = new AuthenticationApi().ChangePassword(accessToken, newPassword, oldPassword);
```


##### Auth Resend Email Verification (PUT)
This API resends the verification email to the user. 



```cs

var email = "email"; //Required
var emailTemplate = "emailTemplate"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new AuthenticationApi().AuthResendEmailVerification(email, emailTemplate, verificationUrl);
```


##### Auth Login by Email (POST)
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


##### Auth Forgot Password (POST)
This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' 



```cs

var email = "email"; //Required
var resetPasswordUrl = "resetPasswordUrl"; //Required
var emailTemplate = "emailTemplate"; //Optional
var apiResponse = new AuthenticationApi().ForgotPassword(email, resetPasswordUrl, emailTemplate);
```


##### Auth User Registration by Email (POST)
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


##### Auth Validate Access token (GET)
This api validates access token, if valid then returns a response with its expiry otherwise error. 



```cs

var accessToken = "accessToken"; //Required
var apiResponse = new AuthenticationApi().AuthValidateAccessToken(accessToken);
```


##### Auth Read all Profiles by Token (GET)
This API retrieves a copy of the user data based on the access token. 



```cs

var accessToken = "accessToken"; //Required
string fields = null; //Optional
var apiResponse = new AuthenticationApi().GetProfileByAccessToken(accessToken, fields);
```


##### Auth Send Welcome Email (GET)
This API sends a welcome email 



```cs

var accessToken = "accessToken"; //Required
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new AuthenticationApi().SendWelcomeEmail(accessToken, welcomeEmailTemplate);
```


##### Auth Delete Account (GET)
This API is used to delete an account by passing it a delete token. 



```cs

var deleteToken = "deleteToken"; //Required
var apiResponse = new AuthenticationApi().DeleteAccountByDeleteToken(deleteToken);
```


##### Auth Verify Email (GET)
This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Dashboard's Email Workflow settings under 'Verification Email'. 



```cs

var verificationToken = "verificationToken"; //Required
string fields = null; //Optional
var url = "url"; //Optional
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new AuthenticationApi().VerifyEmail(verificationToken, fields, url, welcomeEmailTemplate);
```


##### Auth Social Identity (GET)
This API is called just after account linking API and it prevents the raas profile of the second account from getting created. 



```cs

var accessToken = "accessToken"; //Required
string fields = null; //Optional
var apiResponse = new AuthenticationApi().GetSocialIdentity(accessToken, fields);
```


##### Auth Delete Account with Email Confirmation (DELETE)
This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token 



```cs

var accessToken = "accessToken"; //Required
var deleteUrl = "deleteUrl"; //Optional
var emailTemplate = "emailTemplate"; //Optional
var apiResponse = new AuthenticationApi().DeleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate);
```




### Account API


List of APIs in this Section:
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


##### Account Set Password (PUT)
This API is used to set the password of an account in Cloud Storage. 



```cs

var password = "password"; //Required
var uid = "uid"; //Required
var apiResponse = new AccountApi().SetAccountPasswordByUid(password, uid);
```


##### Account Create (POST)
This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. In order to use this API, you need to format a JSON request body with all of the mandatory fields 



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


##### Forgot Password token (POST)
This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body. 



```cs

var email = "email"; //Required
var emailTemplate = "emailTemplate"; //Optional
var resetPasswordUrl = "resetPasswordUrl"; //Optional
var sendEmail = true; //Optional
var apiResponse = new AccountApi().GetForgotPasswordToken(email, emailTemplate, resetPasswordUrl, sendEmail);
```


##### Email Verification token (POST)
This API Returns an Email Verification token. 



```cs

var email = "email"; //Required
var apiResponse = new AccountApi().GetEmailVerificationToken(email);
```


##### Get Privacy Policy History By Uid (GET)
This API is used to retrieve all of the accepted Policies by the user, associated with their UID. 



```cs

var uid = "uid"; //Required
var apiResponse = new AccountApi().GetPrivacyPolicyHistoryByUid(uid);
```


##### Account Profiles by Email (GET)
This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage. 



```cs

var email = "email"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountProfileByEmail(email, fields);
```


##### Account Profiles by UID (GET)
This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage. 



```cs

var uid = "uid"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountProfileByUid(uid, fields);
```


##### Account Password (GET)
This API use to retrive the hashed password of a specified account in Cloud Storage. 



```cs

var uid = "uid"; //Required
var apiResponse = new AccountApi().GetAccountPasswordHashByUid(uid);
```


##### Account Identities by Email (GET)
Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage. 



```cs

var email = "email"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountIdentitiesByEmail(email, fields);
```


##### Account Delete (DELETE)
This API deletes the Users account and allows them to re-register for a new account. 



```cs

var uid = "uid"; //Required
var apiResponse = new AccountApi().DeleteAccountByUid(uid);
```


##### Account Remove Email (DELETE)
Use this API to Remove emails from a user Account 



```cs

var email = "email"; //Required
var uid = "uid"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().RemoveEmail(email, uid, fields);
```


##### Delete User Profiles By Email (DELETE)
This API is used to delete all user profiles associated with an Email. 



```cs

var email = "email"; //Required
var apiResponse = new AccountApi().AccountDeleteByEmail(email);
```







### Social API


List of APIs in this Section:
- GET : [Access Token](#access-token-get)
- GET : [Token Validate](#token-validate-get)
- GET : [Access Token Invalidate](#access-token-invalidate-get)
- GET : [Get Active Session Details](#get-active-session-details-get)
- GET : [Get Active Session By Account Id](#get-active-session-by-account-id-get)
- GET : [Get Active Session By Profile Id](#get-active-session-by-profile-id-get)
- GET : [User Profile](#user-profile-get)





##### Access Token (GET)
This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls. 



```cs

var token = "token"; //Required
var apiResponse = new SocialApi().ExchangeAccessToken(token);
```


##### Token Validate (GET)
This API validates access token, if valid then returns a response with its expiry otherwise error. 



```cs

var accessToken = "accessToken"; //Required
var apiResponse = new SocialApi().ValidateAccessToken(accessToken);
```


##### Access Token Invalidate (GET)
This api invalidates the active access token or expires an access token validity. 



```cs

var accessToken = "accessToken"; //Required
var apiResponse = new SocialApi().InValidateAccessToken(accessToken);
```


##### Get Active Session Details (GET)
This api is use to get all active session by Access Token. 



```cs

var token = "token"; //Required
var apiResponse = new SocialApi().GetActiveSession(token);
```


##### Get Active Session By Account Id (GET)
This api is used to get all active sessions by AccountID(UID). 



```cs

var accountId = "accountId"; //Required
var apiResponse = new SocialApi().GetActiveSessionByAccountID(accountId);
```


##### Get Active Session By Profile Id (GET)
This api is used to get all active sessions by ProfileId. 



```cs

var profileId = "profileId"; //Required
var apiResponse = new SocialApi().GetActiveSessionByProfileID(profileId);
```


##### User Profile (GET)
The User Profile API is used to get social profile data from the user's social account after authentication.<b>Supported Providers:</b>  All 



```cs

var accessToken = "accessToken"; //Required
string fields = null; //Optional
var apiResponse = new SocialApi().GetSocialUserProfile(accessToken, fields);
```







### NativeSocial API


List of APIs in this Section:
- GET : [Access Token via Facebook Token](#access-token-via-facebook-token-get)
- GET : [Access Token via Twitter Token](#access-token-via-twitter-token-get)
- GET : [Access Token via Google Token](#access-token-via-google-token-get)



##### Access Token via Facebook Token (GET)
The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response. 



```cs

var fbAccessToken = "fbAccessToken"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByFacebookAccessToken(fbAccessToken);
```


##### Access Token via Twitter Token (GET)
The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response. 



```cs

var twAccessToken = "twAccessToken"; //Required
var twTokenSecret = "twTokenSecret"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret);
```


##### Access Token via Google Token (GET)
The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response. 



```cs

var googleAccessToken = "googleAccessToken"; //Required
var clientId = "clientId"; //Optional
var refreshToken = "refreshToken"; //Optional
var apiResponse = new NativeSocialApi().GetAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken);
```










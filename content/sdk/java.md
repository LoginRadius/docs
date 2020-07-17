---
title: Java Library
description: ""
summary: "A guide to impliment LoginRadius SDK in a Java application"
---

>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

This document contains information and examples regarding the LoginRadius Java SDK. It provides guidance for working with social authentication, user profile data, and sending messages with a variety of social networks such as Facebook, Google and Twitter. 
You can get the SDK from [here](http://github.com/LoginRadius/java-sdk) 


## Installation

Use the following dependency in your project:

You can also compile the source by running the following commands. This will generate the javadocs in java-sdk/target/apidocs


`$ cd java-sdk`<br/>
`$ mvn install  `     # Requires maven, download from http://maven.apache.org/download.html
`$ mvn dependency:copy-dependencies`   # This will generate all dependencies here: java-sdk/target/dependency
The jars are also available at [Maven](https://mvnrepository.com/artifact/com.loginradius.sdk/java-sdk).

Select the directory for the latest version and download the jar files.

## Configuration

### Initialize SDK

- Before using the SDK, you must initialize the SDK with the help of following code:
API Key and secret of your LoginRadius site. You can get one from [here](https://dashboard.loginradius.com/dashboard)

```Java
LoginRadiusSDK.Initialize init = new LoginRadiusSDK.Initialize();
init.setApiKey("<your-loginradius-api-key>");
init.setApiSecret("<your-loginradius-api-secret>");
```

### Custom Domain
When initializing the SDK, optionally specify a custom domain.

```Java
init.setCustomDomain("<CUSTOM-DOMAIN>");
```

### API Request Signing
When initializing the SDK, you can optionally specify enabling this feature. Enabling this feature means the customer does not need to pass an API secret in an API request. Instead, they can pass a dynamically generated hash value. This feature will also make sure that the message is not tampered during transit when someone calls our APIs.

```Java
init.setRequestSigning(true);
```


### SOTT Configuration 
Sott class that uses 256-bit AES encryption which is not supported by Java out of the box,
Before calling the class of SOTT you need to install the JCE unlimited strength jars in the security folder.
<br/>
* To apply the policy files:

 1. Download the Java Cryptography Extension (JCE) Unlimited Strength Jurisdiction Policy Files from Oracle.
<br/>
Be sure to download the correct policy file updates for your version of Java:
<br/>
Java 6
http://www.oracle.com/technetwork/java/javase/downloads/jce-6-download-429243.html
<br/>
java 7
http://www.oracle.com/technetwork/java/javase/downloads/jce-7-download-432124.html
<br/>
java 8
http://www.oracle.com/technetwork/java/javase/downloads/jce8-download-2133166.html
<br/>
  2. Uncompress and extract the downloaded file. The download includes a Readme.txt and two .jar files with the same names as the existing policy files.
<br/>
  3. Locate the two existing policy files:
<br/>
local_policy.jar
<br/>
US_export_policy.jar
<br/>
On UNIX, look in <java-home>/lib/security/
<br/>
On Windows, look in C:/Program Files/Java/jre<version>/lib/security/
<br/>
  4. Replace the existing policy files with the unlimited strength policy files you extracted.


* After complete the configuration, use below code to get the SOTT.

* By default, the SOTT expiration time will be 10 minutes if you use the below code.

```
Sott sott = new Sott();
String sottResponse = sott.getSott(null);
```
* If you want to validate your SOTT for long term then pass required timedifference in minutes.
* We recommend to use the below way to validate SOTT for a long term because it uses the server time not your system local time.

```
ConfigurationApi config = new ConfigurationApi();
config.getServerInfo(50, new AsyncHandler < ServiceInfoModel > () {

  @Override
  public void onFailure(ErrorResponse errorResponse) {
      
      System.out.println(errorResponse.getDescription());
  }

  @Override
  public void onSuccess(ServiceInfoModel service) {
      
      try {
          String sottResponse = Sott.getSott(service);
          System.out.println("sott = " + sottResponse);
      } catch (Exception e) {
         
          e.printStackTrace();
      }
  }

});
```

For more details check [API Refrence Here](https://www.loginradius.com/docs/developer/api/v2/customer-identity-api/overview/)

## API Details

### Authentication API


List of APIs in this Section:

- PUT: [Auth Change Password](#auth-change-password-put)
- PUT: [Auth Resend Email Verification](#auth-resend-email-verification-put)
- POST: [Auth Login by Email](#auth-login-by-email-post)
- POST: [Auth Forgot Password](#auth-forgot-password-post)
- POST: [Auth User Registration by Email](#auth-user-registration-by-email-post)
- GET: [Auth Validate Access token](#auth-validate-access-token-get)
- GET: [Auth Read all Profiles by Token](#auth-read-all-profiles-by-token-get)
- GET: [Auth Send Welcome Email](#auth-send-welcome-email-get)
- GET: [Auth Delete Account](#auth-delete-account-get)
- GET: [Auth Verify Email](#auth-verify-email-get)
- GET: [Auth Social Identity](#auth-social-identity-get)
- DELETE: [Auth Delete Account with Email Confirmation](#auth-delete-account-with-email-confirmation-delete)
- PUT: [Account Update](#account-update-put)






##### Auth Change Password (PUT)
 This API is used to change the accounts password based on the previous password

```java

String accessToken = "<accessToken>"; //Required
String newPassword = "<newPassword>"; //Required
String oldPassword = "<oldPassword>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.changePassword(accessToken, newPassword, oldPassword ,  new AsyncHandler<PostResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostResponse response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




##### Auth Resend Email Verification (PUT)
 This API resends the verification email to the user.

```java

String email = "<email>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.authResendEmailVerification(email, emailTemplate, verificationUrl ,  new AsyncHandler<PostResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostResponse response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




##### Auth Login by Email (POST)
 This API retrieves a copy of the user data based on the Email

```java

EmailAuthenticationModel emailAuthenticationModel = new EmailAuthenticationModel(); //Required
emailAuthenticationModel.setEmail("email"); 
emailAuthenticationModel.setPassword("password"); 
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.loginByEmail( emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl ,  new AsyncHandler<AccessToken<Identity>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(AccessToken<Identity> response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




##### Auth Forgot Password (POST)
 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'

```java

String email = "<email>"; //Required
String resetPasswordUrl = "<resetPasswordUrl>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.forgotPassword(email, resetPasswordUrl, emailTemplate ,  new AsyncHandler<PostResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostResponse response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




##### Auth User Registration by Email (POST)
 This API creates a user in the database as well as sends a verification email to the user.

```java

AuthUserRegistrationModel authUserRegistrationModel = new AuthUserRegistrationModel(); //Required
List<EmailModel> email = new ArrayList < EmailModel >();
EmailModel emailModel = new EmailModel(); 
emailModel.setType("type");
emailModel.setValue("value");
email.add(emailModel);
authUserRegistrationModel.setEmail(email); 
authUserRegistrationModel.setFirstName("firstName"); 
authUserRegistrationModel.setLastName("lastName"); 
authUserRegistrationModel.setPassword("password"); 
String sott = "<sott>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String options = "<options>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.userRegistrationByEmail( authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate ,  new AsyncHandler<UserProfilePostResponse<AccessToken<Identity>>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<AccessToken<Identity>> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




##### Auth Validate Access token (GET)
 This api validates access token, if valid then returns a response with its expiry otherwise error.

```java

String accessToken = "<accessToken>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.authValidateAccessToken(accessToken ,  new AsyncHandler<AccessTokenBase> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(AccessTokenBase response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




##### Auth Read all Profiles by Token (GET)
 This API retrieves a copy of the user data based on the access token.

```java

String accessToken = "<accessToken>"; //Required
String fields = null; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getProfileByAccessToken(accessToken, fields ,  new AsyncHandler<Identity> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Identity response) {
  System.out.println(response.getUid());
 }
});

```

  




##### Auth Send Welcome Email (GET)
 This API sends a welcome email

```java

String accessToken = "<accessToken>"; //Required
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.sendWelcomeEmail(accessToken, welcomeEmailTemplate ,  new AsyncHandler<PostResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostResponse response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




##### Auth Delete Account (GET)
 This API is used to delete an account by passing it a delete token.

```java

String deletetoken = "<deletetoken>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.deleteAccountByDeleteToken(deletetoken ,  new AsyncHandler<PostResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostResponse response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




##### Auth Verify Email (GET)
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Dashboard's Email Workflow settings under 'Verification Email'.

```java

String verificationToken = "<verificationToken>"; //Required
String fields = null; //Optional
String url = "<url>"; //Optional
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.verifyEmail(verificationToken, fields, url, welcomeEmailTemplate ,  new AsyncHandler<UserProfilePostResponse<EmailVerificationData<Identity>>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<EmailVerificationData<Identity>> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




##### Auth Social Identity (GET)
 This API is called just after account linking API and it prevents the raas profile of the second account from getting created.

```java

String accessToken = "<accessToken>"; //Required
String fields = null; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getSocialIdentity(accessToken, fields ,  new AsyncHandler<SocialUserProfile> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SocialUserProfile response) {
  System.out.println(response.getAbout());
 }
});

```

  




##### Auth Delete Account with Email Confirmation (DELETE)
 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token

```java

String accessToken = "<accessToken>"; //Required
String deleteUrl = "<deleteUrl>"; //Optional
String emailTemplate = "<emailTemplate>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.deleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate ,  new AsyncHandler<DeleteRequestAcceptResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(DeleteRequestAcceptResponse response) {
  System.out.println(response.getIsDeleteRequestAccepted());
 }
});

```

  







### Account API


List of APIs in this Section:

- PUT: [Account Set Password](#account-set-password-put)
- POST: [Account Create](#account-create-post)
- POST: [Forgot Password token](#forgot-password-token-post)
- POST: [Email Verification token](#email-verification-token-post)
- GET: [Get Privacy Policy History By Uid](#get-privacy-policy-history-by-uid-get)
- GET: [Account Profiles by Email](#account-profiles-by-email-get)
- GET: [Account Profiles by UID](#account-profiles-by-uid-get)
- GET: [Account Password](#account-password-get)
- GET: [Account Identities by Email](#account-identities-by-email-get)
- DELETE: [Account Delete](#account-delete-delete)
- DELETE: [Account Remove Email](#account-remove-email-delete)
- DELETE: [Delete User Profiles By Email](#delete-user-profiles-by-email-delete)




##### Account Update (PUT)
 This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities.

```java

AccountUserProfileUpdateModel accountUserProfileUpdateModel = new AccountUserProfileUpdateModel(); //Required
accountUserProfileUpdateModel.setFirstName("firstName"); 
accountUserProfileUpdateModel.setLastName("lastName"); 
String uid = "<uid>"; //Required
String fields = null; //Optional


AccountApi accountApi = new AccountApi();
accountApi.updateAccountByUid( accountUserProfileUpdateModel, uid, fields ,  new AsyncHandler<Identity> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Identity response) {
  System.out.println(response.getUid());
 }
});

```

  




##### Account Set Password (PUT)
 This API is used to set the password of an account in Cloud Storage.

```java

String password = "<password>"; //Required
String uid = "<uid>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.setAccountPasswordByUid(password, uid ,  new AsyncHandler<UserPasswordHash> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserPasswordHash response) {
  System.out.println(response.getPasswordHash());
 }
});

```

  




##### Account Create (POST)
 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. In order to use this API, you need to format a JSON request body with all of the mandatory fields

```java

AccountCreateModel accountCreateModel = new AccountCreateModel(); //Required
List<EmailModel> email = new ArrayList < EmailModel >();
EmailModel emailModel = new EmailModel(); 
emailModel.setType("type");
emailModel.setValue("value");
email.add(emailModel);
accountCreateModel.setEmail(email); 
accountCreateModel.setFirstName("firstName"); 
accountCreateModel.setLastName("lastName"); 
accountCreateModel.setPassword("password"); 
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.createAccount( accountCreateModel, fields ,  new AsyncHandler<Identity> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Identity response) {
  System.out.println(response.getUid());
 }
});

```

  




##### Forgot Password token (POST)
 This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.

```java

String email = "<email>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional
String resetPasswordUrl = "<resetPasswordUrl>"; //Optional
Boolean sendEmail = true; //Optional

AccountApi accountApi = new AccountApi();
accountApi.getForgotPasswordToken(email, emailTemplate, resetPasswordUrl, sendEmail ,  new AsyncHandler<ForgotPasswordResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ForgotPasswordResponse response) {
  System.out.println(response.getForgotToken());
 }
});

```

  




##### Email Verification token (POST)
 This API Returns an Email Verification token.

```java

String email = "<email>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.getEmailVerificationToken(email ,  new AsyncHandler<EmailVerificationTokenResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(EmailVerificationTokenResponse response) {
  System.out.println(response.getVerificationToken());
 }
});

```

  




##### Get Privacy Policy History By Uid (GET)
 This API is used to retrieve all of the accepted Policies by the user, associated with their UID.

```java

String uid = "<uid>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.getPrivacyPolicyHistoryByUid(uid ,  new AsyncHandler<PrivacyPolicyHistoryResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PrivacyPolicyHistoryResponse response) {
  System.out.println(response.getCurrent());
 }
});

```

  




##### Account Profiles by Email (GET)
 This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.

```java

String email = "<email>"; //Required
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.getAccountProfileByEmail(email, fields ,  new AsyncHandler<Identity> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Identity response) {
  System.out.println(response.getUid());
 }
});

```

  




##### Account Profiles by UID (GET)
 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.

```java

String uid = "<uid>"; //Required
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.getAccountProfileByUid(uid, fields ,  new AsyncHandler<Identity> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Identity response) {
  System.out.println(response.getUid());
 }
});

```

  




##### Account Password (GET)
 This API use to retrive the hashed password of a specified account in Cloud Storage.

```java

String uid = "<uid>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.getAccountPasswordHashByUid(uid ,  new AsyncHandler<UserPasswordHash> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserPasswordHash response) {
  System.out.println(response.getPasswordHash());
 }
});

```

  




##### Account Identities by Email (GET)
 Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.

```java

String email = "<email>"; //Required
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.getAccountIdentitiesByEmail(email, fields ,  new AsyncHandler<ListReturn<Identity>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListReturn<Identity> response) {
  System.out.println(response.getData().get(0).getUid());
 }
});

```

  




##### Account Delete (DELETE)
 This API deletes the Users account and allows them to re-register for a new account.

```java

String uid = "<uid>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.deleteAccountByUid(uid ,  new AsyncHandler<DeleteResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(DeleteResponse response) {
  System.out.println(response.getIsDeleted());
 }
});

```

  




##### Account Remove Email (DELETE)
 Use this API to Remove emails from a user Account

```java

String email = "<email>"; //Required
String uid = "<uid>"; //Required
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.removeEmail(email, uid, fields ,  new AsyncHandler<Identity> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Identity response) {
  System.out.println(response.getUid());
 }
});

```

  




##### Delete User Profiles By Email (DELETE)
 This API is used to delete all user profiles associated with an Email.

```java

String email = "<email>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.accountDeleteByEmail(email ,  new AsyncHandler<DeleteResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(DeleteResponse response) {
  System.out.println(response.getIsDeleted());
 }
});

```

  







### Social API


List of APIs in this Section:

- GET: [Access Token](#access-token-get)
- GET: [Token Validate](#token-validate-get)
- GET: [Access Token Invalidate](#access-token-invalidate-get)
- GET: [Get Active Session Details](#get-active-session-details-get)
- GET: [Get Active Session By Account Id](#get-active-session-by-account-id-get)
- GET: [Get Active Session By Profile Id](#get-active-session-by-profile-id-get)
- GET: [User Profile](#user-profile-get)




##### Access Token (GET)
 This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls.

```java

String token = "<token>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.exchangeAccessToken(token ,  new AsyncHandler<AccessTokenBase> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(AccessTokenBase response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




##### Token Validate (GET)
 This API validates access token, if valid then returns a response with its expiry otherwise error.

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.validateAccessToken(accessToken ,  new AsyncHandler<AccessTokenBase> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(AccessTokenBase response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




##### Access Token Invalidate (GET)
 This api invalidates the active access token or expires an access token validity.

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.inValidateAccessToken(accessToken ,  new AsyncHandler<PostMethodResponseBase> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostMethodResponseBase response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




##### Get Active Session Details (GET)
 This api is use to get all active session by Access Token.

```java

String token = "<token>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getActiveSession(token ,  new AsyncHandler<UserActiveSession> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserActiveSession response) {
  System.out.println(response.getData().get(0).getAccessToken());
 }
});

```

  




##### Get Active Session By Account Id (GET)
 This api is used to get all active sessions by AccountID(UID).

```java

String accountId = "<accountId>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getActiveSessionByAccountID(accountId ,  new AsyncHandler<UserActiveSession> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserActiveSession response) {
  System.out.println(response.getData().get(0).getAccessToken());
 }
});

```

  




##### Get Active Session By Profile Id (GET)
 This api is used to get all active sessions by ProfileId.

```java

String profileId = "<profileId>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getActiveSessionByProfileID(profileId ,  new AsyncHandler<UserActiveSession> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserActiveSession response) {
  System.out.println(response.getData().get(0).getAccessToken());
 }
});

```

  




##### User Profile (GET)
 The User Profile API is used to get social profile data from the user's social account after authentication.<b>Supported Providers:</b>  All

```java

String accessToken = "<accessToken>"; //Required
String fields = null; //Optional

SocialApi socialApi = new SocialApi();
socialApi.getSocialUserProfile(accessToken, fields ,  new AsyncHandler<UserProfile> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfile response) {
  System.out.println(response.getFirstName());
 }
});

```

  







### NativeSocial API


List of APIs in this Section:

- GET: [Access Token via Facebook Token](#access-token-via-facebook-token-get)
- GET: [Access Token via Twitter Token](#access-token-via-twitter-token-get)
- GET: [Access Token via Google Token](#access-token-via-google-token-get)



##### Access Token via Facebook Token (GET)
 The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.

```java

String fbAccessToken = "<fbAccessToken>"; //Required

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByFacebookAccessToken(fbAccessToken ,  new AsyncHandler<AccessTokenBase> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(AccessTokenBase response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




##### Access Token via Twitter Token (GET)
 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.

```java

String twAccessToken = "<twAccessToken>"; //Required
String twTokenSecret = "<twTokenSecret>"; //Required

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret ,  new AsyncHandler<AccessTokenBase> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(AccessTokenBase response) {
  System.out.println(response.getAccess_Token());
 }
});

```


##### Access Token via Google Token (GET)
 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.

```java

String googleAccessToken = "<googleAccessToken>"; //Required
String clientId = "<clientId>"; //Optional
String refreshToken = "<refreshToken>"; //Optional

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken ,  new AsyncHandler<AccessTokenBase> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(AccessTokenBase response) {
  System.out.println(response.getAccess_Token());
 }
});

```
---
title: Java Library
description: "A guide to impliment LoginRadius SDK in a Java application."
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




<h5 id="UpdateProfileByAccessToken-put-">Auth Update Profile by Token (PUT)</h6>
 This API is used to update the user's profile by passing the access token.

```java

String accessToken = "<accessToken>"; //Required
UserProfileUpdateModel userProfileUpdateModel = new UserProfileUpdateModel(); //Required
userProfileUpdateModel.setFirstName("firstName"); 
userProfileUpdateModel.setLastName("lastName"); 
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional

String smsTemplate = "<smsTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.updateProfileByAccessToken(accessToken,  userProfileUpdateModel, emailTemplate, fields, smsTemplate, verificationUrl ,  new AsyncHandler<UserProfilePostResponse<Identity>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<Identity> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h5 id="VerifyEmailByOTP-put-">Auth Verify Email By OTP (PUT)</h6>
 This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.

```java

EmailVerificationByOtpModel emailVerificationByOtpModel = new EmailVerificationByOtpModel(); //Required
emailVerificationByOtpModel.setEmail("email"); 
emailVerificationByOtpModel.setOtp("otp"); 
String fields = null; //Optional
String url = "<url>"; //Optional
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.verifyEmailByOTP( emailVerificationByOtpModel, fields, url, welcomeEmailTemplate ,  new AsyncHandler<UserProfilePostResponse<EmailVerificationData<Identity>>> (){

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

  




<h5 id="ResetPasswordByResetToken-put-">Auth Reset Password by Reset Token (PUT)</h6>
 This API is used to set a new password for the specified account.

```java

ResetPasswordByResetTokenModel resetPasswordByResetTokenModel = new ResetPasswordByResetTokenModel(); //Required
resetPasswordByResetTokenModel.setPassword("password"); 
resetPasswordByResetTokenModel.setResetToken("resetToken"); 

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.resetPasswordByResetToken( resetPasswordByResetTokenModel ,  new AsyncHandler<UserProfilePostResponse<AccessTokenBase>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<AccessTokenBase> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h5 id="ChangePassword-put-">Auth Change Password (PUT)</h6>
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

  




<h5 id="AuthResendEmailVerification-put-">Auth Resend Email Verification (PUT)</h6>
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

  




<h5 id="AddEmail-post-">Auth Add Email (POST)</h6>
 This API is used to add additional emails to a user's account.

```java

String accessToken = "<accessToken>"; //Required
String email = "<email>"; //Required
String type = "<type>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.addEmail(accessToken, email, type, emailTemplate, verificationUrl ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="LoginByEmail-post-">Auth Login by Email (POST)</h6>
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

  




<h5 id="ForgotPassword-post-">Auth Forgot Password (POST)</h6>
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

  




<h5 id="UserRegistrationByEmail-post-">Auth User Registration by Email (POST)</h6>
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

  




<h5 id="UserRegistrationByCaptcha-post-">Auth User Registration By Captcha (POST)</h6>
 This API creates a user in the database as well as sends a verification email to the user.

```java

AuthUserRegistrationModelWithCaptcha authUserRegistrationModelWithCaptcha = new AuthUserRegistrationModelWithCaptcha(); //Required
List<EmailModel> email = new ArrayList < EmailModel >();
EmailModel emailModel = new EmailModel(); 
emailModel.setType("type");
emailModel.setValue("value");
email.add(emailModel);
authUserRegistrationModelWithCaptcha.setEmail(email); 
authUserRegistrationModelWithCaptcha.setFirstName("firstName"); 
authUserRegistrationModelWithCaptcha.setG_Recaptcha_Response("g-recaptcha-response"); 
authUserRegistrationModelWithCaptcha.setLastName("lastName"); 
authUserRegistrationModelWithCaptcha.setPassword("password"); 
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String options = "<options>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.userRegistrationByCaptcha( authUserRegistrationModelWithCaptcha, emailTemplate, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate ,  new AsyncHandler<UserProfilePostResponse<AccessToken<Identity>>> (){

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

  




<h5 id="AuthValidateAccessToken-get-">Auth Validate Access token (GET)</h6>
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

  




<h5 id="AuthInValidateAccessToken-get-">Access Token Invalidate (GET)</h6>
 This api call invalidates the active access token or expires an access token's validity.

```java

String accessToken = "<accessToken>"; //Required
Boolean preventRefresh = true; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.authInValidateAccessToken(accessToken, preventRefresh ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="GetAccessTokenInfo-get-">Access Token Info (GET)</h6>
 This api call provide the active access token Information

```java

String accessToken = "<accessToken>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getAccessTokenInfo(accessToken ,  new AsyncHandler<TokenInfoResponseModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(TokenInfoResponseModel response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




<h5 id="GetProfileByAccessToken-get-">Auth Read all Profiles by Token (GET)</h6>
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

  




<h5 id="DeleteAccountByDeleteToken-get-">Auth Delete Account (GET)</h6>
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

  




<h5 id="CheckEmailAvailability-get-">Auth Check Email Availability (GET)</h6>
 This API is used to check the email exists or not on your site.

```java

String email = "<email>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.checkEmailAvailability(email ,  new AsyncHandler<ExistResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ExistResponse response) {
  System.out.println(response.getIsExist());
 }
});

```

  




<h5 id="VerifyEmail-get-">Auth Verify Email (GET)</h6>
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.

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

  




<h5 id="GetSocialIdentity-get-">Auth Social Identity (GET)</h6>
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




<h5 id="DeleteAccountWithEmailConfirmation-delete-">Auth Delete Account with Email Confirmation (DELETE)</h6>
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

  




<h5 id="RemoveEmail-delete-">Auth Remove Email (DELETE)</h6>
 This API is used to remove additional emails from a user's account.

```java

String accessToken = "<accessToken>"; //Required
String email = "<email>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.removeEmail(accessToken, email ,  new AsyncHandler<DeleteResponse> (){

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




<h5 id="UpdateAccountByUid-put-">Account Update (PUT)</h6>
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

  




<h5 id="UpdatePhoneIDByUid-put-">Update Phone ID by UID (PUT)</h6>
 This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.

```java

String phone = "<phone>"; //Required
String uid = "<uid>"; //Required
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.updatePhoneIDByUid(phone, uid, fields ,  new AsyncHandler<Identity> (){

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

  




<h5 id="SetAccountPasswordByUid-put-">Account Set Password (PUT)</h6>
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

  




<h5 id="InvalidateAccountEmailVerification-put-">Account Invalidate Verification Email (PUT)</h6>
 This API is used to invalidate the Email Verification status on an account.

```java

String uid = "<uid>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

AccountApi accountApi = new AccountApi();
accountApi.invalidateAccountEmailVerification(uid, emailTemplate, verificationUrl ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="ResetPhoneIDVerificationByUid-put-">Reset phone ID verification (PUT)</h6>
 This API Allows you to reset the phone no verification of an end user’s account.

```java

String uid = "<uid>"; //Required
String smsTemplate = "<smsTemplate>"; //Optional

AccountApi accountApi = new AccountApi();
accountApi.resetPhoneIDVerificationByUid(uid, smsTemplate ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="UpsertEmail-put-">Upsert Email (PUT)</h6>
 This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.

```java

UpsertEmailModel upsertEmailModel = new UpsertEmailModel(); //Required
List<EmailModel> email = new ArrayList < EmailModel >();
EmailModel emailModel = new EmailModel(); 
emailModel.setType("type");
emailModel.setValue("value");
email.add(emailModel);
upsertEmailModel.setEmail(email); 
String uid = "<uid>"; //Required
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.upsertEmail( upsertEmailModel, uid, fields ,  new AsyncHandler<Identity> (){

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

  




<h5 id="AccountUpdateUid-put-">Update UID (PUT)</h6>
 This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid.

```java

UpdateUidModel updateUidModel = new UpdateUidModel(); //Required
updateUidModel.setNewUid("newUid"); 
String uid = "<uid>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.accountUpdateUid( updateUidModel, uid ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="CreateAccount-post-">Account Create (POST)</h6>
 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields

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

  




<h5 id="GetForgotPasswordToken-post-">Forgot Password token (POST)</h6>
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

  




<h5 id="GetEmailVerificationToken-post-">Email Verification token (POST)</h6>
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

  




<h5 id="GetAccountProfileByEmail-get-">Account Profiles by Email (GET)</h6>
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

  




<h5 id="GetAccountProfileByPhone-get-">Account Profile by Phone ID (GET)</h6>
 This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.

```java

String phone = "<phone>"; //Required
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.getAccountProfileByPhone(phone, fields ,  new AsyncHandler<Identity> (){

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

  




<h5 id="GetAccountProfileByUid-get-">Account Profiles by UID (GET)</h6>
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

  




<h5 id="GetAccountPasswordHashByUid-get-">Account Password (GET)</h6>
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

  




<h5 id="GetAccessTokenByUid-get-">Access Token based on UID or User impersonation API (GET)</h6>
 The API is used to get LoginRadius access token based on UID.

```java

String uid = "<uid>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.getAccessTokenByUid(uid ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h5 id="GetAccountIdentitiesByEmail-get-">Account Identities by Email (GET)</h6>
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

  




<h5 id="DeleteAccountByUid-delete-">Account Delete (DELETE)</h6>
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

  




<h5 id="RemoveEmail-delete-">Account Remove Email (DELETE)</h6>
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

  




<h5 id="AccountDeleteByEmail-delete-">Delete User Profiles By Email (DELETE)</h6>
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




<h5 id="ResetPasswordByPhoneOTP-put-">Phone Reset Password by OTP (PUT)</h6>
 This API is used to reset the password

```java

ResetPasswordByOTPModel resetPasswordByOTPModel = new ResetPasswordByOTPModel(); //Required
resetPasswordByOTPModel.setOtp("otp"); 
resetPasswordByOTPModel.setPassword("password"); 
resetPasswordByOTPModel.setPhone("phone"); 

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.resetPasswordByPhoneOTP( resetPasswordByOTPModel ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="PhoneVerificationByOTP-put-">Phone Verification OTP (PUT)</h6>
 This API is used to validate the verification code sent to verify a user's phone number

```java

String otp = "<otp>"; //Required
String phone = "<phone>"; //Required
String fields = null; //Optional
String smsTemplate = "<smsTemplate>"; //Optional

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.phoneVerificationByOTP(otp, phone, fields, smsTemplate ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h5 id="PhoneVerificationOTPByAccessToken-put-">Phone Verification OTP by Token (PUT)</h6>
 This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.

```java

String accessToken = "<accessToken>"; //Required
String otp = "<otp>"; //Required
String smsTemplate = "<smsTemplate>"; //Optional

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.phoneVerificationOTPByAccessToken(accessToken, otp, smsTemplate ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="UpdatePhoneNumber-put-">Phone Number Update (PUT)</h6>
 This API is used to update the login Phone Number of users

```java

String accessToken = "<accessToken>"; //Required
String phone = "<phone>"; //Required
String smsTemplate = "<smsTemplate>"; //Optional

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.updatePhoneNumber(accessToken, phone, smsTemplate ,  new AsyncHandler<UserProfilePostResponse<SMSResponseData>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<SMSResponseData> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h5 id="LoginByPhone-post-">Phone Login (POST)</h6>
 This API retrieves a copy of the user data based on the Phone

```java

PhoneAuthenticationModel phoneAuthenticationModel = new PhoneAuthenticationModel(); //Required
phoneAuthenticationModel.setPassword("password"); 
phoneAuthenticationModel.setPhone("phone"); 
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.loginByPhone( phoneAuthenticationModel, fields, loginUrl, smsTemplate ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h5 id="ForgotPasswordByPhoneOTP-post-">Phone Forgot Password by OTP (POST)</h6>
 This API is used to send the OTP to reset the account password.

```java

String phone = "<phone>"; //Required
String smsTemplate = "<smsTemplate>"; //Optional

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.forgotPasswordByPhoneOTP(phone, smsTemplate ,  new AsyncHandler<UserProfilePostResponse<SMSResponseData>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<SMSResponseData> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h5 id="PhoneResendVerificationOTP-post-">Phone Resend Verification OTP (POST)</h6>
 This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input

```java

String phone = "<phone>"; //Required
String smsTemplate = "<smsTemplate>"; //Optional

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.phoneResendVerificationOTP(phone, smsTemplate ,  new AsyncHandler<UserProfilePostResponse<SMSResponseData>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<SMSResponseData> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h5 id="PhoneResendVerificationOTPByToken-post-">Phone Resend Verification OTP By Token (POST)</h6>
 This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists

```java

String accessToken = "<accessToken>"; //Required
String phone = "<phone>"; //Required
String smsTemplate = "<smsTemplate>"; //Optional

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.phoneResendVerificationOTPByToken(accessToken, phone, smsTemplate ,  new AsyncHandler<UserProfilePostResponse<SMSResponseData>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<SMSResponseData> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h5 id="UserRegistrationByPhone-post-">Phone User Registration by SMS (POST)</h6>
 This API registers the new users into your Cloud Storage and triggers the phone verification process.

```java

AuthUserRegistrationModel authUserRegistrationModel = new AuthUserRegistrationModel(); //Required
authUserRegistrationModel.setFirstName("firstName"); 
authUserRegistrationModel.setLastName("lastName"); 
authUserRegistrationModel.setPassword("password"); 
authUserRegistrationModel.setPhoneId("phoneId"); 
String sott = "<sott>"; //Required
String fields = null; //Optional
String options = "<options>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.userRegistrationByPhone( authUserRegistrationModel, sott, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate ,  new AsyncHandler<UserProfilePostResponse<AccessToken<Identity>>> (){

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

  




<h5 id="CheckPhoneNumberAvailability-get-">Phone Number Availability (GET)</h6>
 This API is used to check the Phone Number exists or not on your site.

```java

String phone = "<phone>"; //Required

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.checkPhoneNumberAvailability(phone ,  new AsyncHandler<ExistResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ExistResponse response) {
  System.out.println(response.getIsExist());
 }
});

```

  




<h5 id="RemovePhoneIDByAccessToken-delete-">Remove Phone ID by Access Token (DELETE)</h6>
 This API is used to delete the Phone ID on a user's account via the access token

```java

String accessToken = "<accessToken>"; //Required

PhoneAuthenticationApi phoneAuthenticationApi = new PhoneAuthenticationApi();
phoneAuthenticationApi.removePhoneIDByAccessToken(accessToken ,  new AsyncHandler<DeleteResponse> (){

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




<h5 id="MFAUpdateByAccessToken-put-">Update MFA by Access Token (PUT)</h6>
 This API is used to Enable Multi-factor authentication by access token on user login

```java

String accessToken = "<accessToken>"; //Required
MultiFactorAuthModelByGoogleAuthenticatorCode multiFactorAuthModelByGoogleAuthenticatorCode = new MultiFactorAuthModelByGoogleAuthenticatorCode(); //Required
multiFactorAuthModelByGoogleAuthenticatorCode.setGoogleAuthenticatorCode("googleAuthenticatorCode"); 
String fields = null; //Optional
String smsTemplate = "<smsTemplate>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaUpdateByAccessToken(accessToken,  multiFactorAuthModelByGoogleAuthenticatorCode, fields, smsTemplate ,  new AsyncHandler<Identity> (){

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

  




<h5 id="MFAUpdatePhoneNumberByToken-put-">MFA Update Phone Number by Token (PUT)</h6>
 This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number

```java

String accessToken = "<accessToken>"; //Required
String phoneNo2FA = "<phoneNo2FA>"; //Required
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaUpdatePhoneNumberByToken(accessToken, phoneNo2FA, smsTemplate2FA ,  new AsyncHandler<SMSResponseData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SMSResponseData response) {
  System.out.println(response.getAccountSid());
 }
});

```

  




<h5 id="MFAValidateGoogleAuthCode-put-">MFA Validate Google Auth Code (PUT)</h6>
 This API is used to login via Multi-factor-authentication by passing the google authenticator code.

```java

String googleAuthenticatorCode = "<googleAuthenticatorCode>"; //Required
String secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
String fields = null; //Optional
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaValidateGoogleAuthCode(googleAuthenticatorCode, secondFactorAuthenticationToken, fields, smsTemplate2FA ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h5 id="MFAUpdatePhoneNumber-put-">MFA Update Phone Number (PUT)</h6>
 This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number

```java

String phoneNo2FA = "<phoneNo2FA>"; //Required
String secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaUpdatePhoneNumber(phoneNo2FA, secondFactorAuthenticationToken, smsTemplate2FA ,  new AsyncHandler<SMSResponseData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SMSResponseData response) {
  System.out.println(response.getAccountSid());
 }
});

```

  




<h5 id="MFALoginByEmail-post-">MFA Email Login (POST)</h6>
 This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.

```java

String email = "<email>"; //Required
String password = "<password>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaLoginByEmail(email, password, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl ,  new AsyncHandler<MultiFactorAuthenticationResponse<Identity>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(MultiFactorAuthenticationResponse<Identity> response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




<h5 id="MFALoginByPhone-post-">MFA Phone Login (POST)</h6>
 This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.

```java

String password = "<password>"; //Required
String phone = "<phone>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaLoginByPhone(password, phone, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl ,  new AsyncHandler<MultiFactorAuthenticationResponse<Identity>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(MultiFactorAuthenticationResponse<Identity> response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




<h5 id="MFAConfigureByAccessToken-get-">MFA Validate Access Token (GET)</h6>
 This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.

```java

String accessToken = "<accessToken>"; //Required
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaConfigureByAccessToken(accessToken, smsTemplate2FA ,  new AsyncHandler<MultiFactorAuthenticationSettingsResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(MultiFactorAuthenticationSettingsResponse response) {
  System.out.println(response.getIsGoogleAuthenticatorVerified());
 }
});

```

  




<h5 id="MFAResendOTP-get-">MFA Resend Otp (GET)</h6>
 This API is used to resending the verification OTP to the provided phone number

```java

String secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaResendOTP(secondFactorAuthenticationToken, smsTemplate2FA ,  new AsyncHandler<SMSResponseData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SMSResponseData response) {
  System.out.println(response.getAccountSid());
 }
});

```

  




<h5 id="MFAResetGoogleAuthByToken-delete-">MFA Reset Google Authenticator by Token (DELETE)</h6>
 This API Resets the Google Authenticator configurations on a given account via the access token

```java

String accessToken = "<accessToken>"; //Required
Boolean googleauthenticator = true; //Required

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaResetGoogleAuthByToken(accessToken, googleauthenticator ,  new AsyncHandler<DeleteResponse> (){

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

  




<h5 id="MFAResetSMSAuthByToken-delete-">MFA Reset SMS Authenticator by Token (DELETE)</h6>
 This API resets the SMS Authenticator configurations on a given account via the access token.

```java

String accessToken = "<accessToken>"; //Required
Boolean otpauthenticator = true; //Required

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaResetSMSAuthByToken(accessToken, otpauthenticator ,  new AsyncHandler<DeleteResponse> (){

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

  




<h5 id="MFAResetSMSAuthenticatorByUid-delete-">MFA Reset SMS Authenticator By UID (DELETE)</h6>
 This API resets the SMS Authenticator configurations on a given account via the UID.

```java

Boolean otpauthenticator = true; //Required
String uid = "<uid>"; //Required

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaResetSMSAuthenticatorByUid(otpauthenticator, uid ,  new AsyncHandler<DeleteResponse> (){

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

  




<h5 id="MFAResetGoogleAuthenticatorByUid-delete-">MFA Reset Google Authenticator By UID (DELETE)</h6>
 This API resets the Google Authenticator configurations on a given account via the UID.

```java

Boolean googleauthenticator = true; //Required
String uid = "<uid>"; //Required

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaResetGoogleAuthenticatorByUid(googleauthenticator, uid ,  new AsyncHandler<DeleteResponse> (){

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

  







### PasswordLessLogin API


List of APIs in this Section:<br>

* PUT : [Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br>
* GET : [Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br>
* GET : [Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br>
* GET : [Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>




<h5 id="PasswordlessLoginPhoneVerification-put-">Passwordless Login Phone Verification (PUT)</h6>
 This API verifies an account by OTP and allows the customer to login.

```java

PasswordLessLoginOtpModel passwordLessLoginOtpModel = new PasswordLessLoginOtpModel(); //Required
passwordLessLoginOtpModel.setOtp("otp"); 
passwordLessLoginOtpModel.setPhone("phone"); 
String fields = null; //Optional
String smsTemplate = "<smsTemplate>"; //Optional

PasswordLessLoginApi passwordLessLoginApi = new PasswordLessLoginApi();
passwordLessLoginApi.passwordlessLoginPhoneVerification( passwordLessLoginOtpModel, fields, smsTemplate ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h5 id="PasswordlessLoginByPhone-get-">Passwordless Login by Phone (GET)</h6>
 API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID

```java

String phone = "<phone>"; //Required
String smsTemplate = "<smsTemplate>"; //Optional

PasswordLessLoginApi passwordLessLoginApi = new PasswordLessLoginApi();
passwordLessLoginApi.passwordlessLoginByPhone(phone, smsTemplate ,  new AsyncHandler<GetResponse<SMSResponseData>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(GetResponse<SMSResponseData> response) {
  System.out.println(response.getData().getSid());
 }
});

```

  




<h5 id="PasswordlessLoginByEmail-get-">Passwordless Login By Email (GET)</h6>
 This API is used to send a Passwordless Login verification link to the provided Email ID

```java

String email = "<email>"; //Required
String passwordLessLoginTemplate = "<passwordLessLoginTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

PasswordLessLoginApi passwordLessLoginApi = new PasswordLessLoginApi();
passwordLessLoginApi.passwordlessLoginByEmail(email, passwordLessLoginTemplate, verificationUrl ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="PasswordlessLoginVerification-get-">Passwordless Login Verification (GET)</h6>
 This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API

```java

String verificationToken = "<verificationToken>"; //Required
String fields = null; //Optional
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

PasswordLessLoginApi passwordLessLoginApi = new PasswordLessLoginApi();
passwordLessLoginApi.passwordlessLoginVerification(verificationToken, fields, welcomeEmailTemplate ,  new AsyncHandler<AccessToken<Identity>> (){

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




<h5 id="AssignRolesByUid-put-">Assign Roles by UID (PUT)</h6>
 This API is used to assign your desired roles to a given user.

```java

AccountRolesModel accountRolesModel = new AccountRolesModel(); //Required
List<String> roles = new ArrayList < String >();
roles.add("roles");
accountRolesModel.setRoles(roles); 
String uid = "<uid>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.assignRolesByUid( accountRolesModel, uid ,  new AsyncHandler<com.loginradius.sdk.models.responsemodels.otherobjects.AccountRolesModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(com.loginradius.sdk.models.responsemodels.otherobjects.AccountRolesModel response) {
  System.out.println(response.getRoles());
 }
});

```

  




<h5 id="UpdateRoleContextByUid-put-">Upsert Context (PUT)</h6>
 This API creates a Context with a set of Roles

```java

AccountRoleContextModel accountRoleContextModel = new AccountRoleContextModel(); //Required
List<RoleContextRoleModel> roleContext = new ArrayList < RoleContextRoleModel >();
RoleContextRoleModel roleContextRoleModel = new RoleContextRoleModel(); 
List<String> additionalPermissions = new ArrayList < String > ();
additionalPermissions.add("additionalPermissions");
roleContextRoleModel.setAdditionalPermissions(additionalPermissions);
roleContextRoleModel.setContext("context");
roleContextRoleModel.setExpiration("expiration");
List<String> roles = new ArrayList < String > ();
roles.add("roles");
roleContextRoleModel.setRoles(roles);
roleContext.add(roleContextRoleModel);
accountRoleContextModel.setRoleContext(roleContext); 
String uid = "<uid>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.updateRoleContextByUid( accountRoleContextModel, uid ,  new AsyncHandler<ListReturn<RoleContext>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListReturn<RoleContext> response) {
  System.out.println(response.getData().get(0).getAdditionalPermissions());
 }
});

```

  




<h5 id="AddRolePermissions-put-">Add Permissions to Role (PUT)</h6>
 This API is used to add permissions to a given role.

```java

PermissionsModel permissionsModel = new PermissionsModel(); //Required
List<String> permissions = new ArrayList < String >();
permissions.add("permissions");
permissionsModel.setPermissions(permissions); 
String role = "<role>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.addRolePermissions( permissionsModel, role ,  new AsyncHandler<com.loginradius.sdk.models.responsemodels.otherobjects.RoleModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(com.loginradius.sdk.models.responsemodels.otherobjects.RoleModel response) {
  System.out.println(response.getName());
 }
});

```

  




<h5 id="CreateRoles-post-">Roles Create (POST)</h6>
 This API creates a role with permissions.

```java

RolesModel rolesModel = new RolesModel(); //Required
List<com.loginradius.sdk.models.requestmodels.RoleModel> roles = new ArrayList < com.loginradius.sdk.models.requestmodels.RoleModel >();
RoleModel roleModel = new RoleModel(); 
roleModel.setName("name");
Map<String,Boolean> permissions= new HashMap<String,Boolean> ();
permissions.put( "Permission Name", true  );
roleModel.setPermissions(permissions);
roles.add(roleModel);
rolesModel.setRoles(roles); 

RoleApi roleApi = new RoleApi();
roleApi.createRoles( rolesModel ,  new AsyncHandler<ListData<com.loginradius.sdk.models.responsemodels.otherobjects.RoleModel>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListData<com.loginradius.sdk.models.responsemodels.otherobjects.RoleModel> response) {
  System.out.println(response.getCount());
 }
});

```

  




<h5 id="GetRolesByUid-get-">Roles by UID (GET)</h6>
 API is used to retrieve all the assigned roles of a particular User.

```java

String uid = "<uid>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.getRolesByUid(uid ,  new AsyncHandler<com.loginradius.sdk.models.responsemodels.otherobjects.AccountRolesModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(com.loginradius.sdk.models.responsemodels.otherobjects.AccountRolesModel response) {
  System.out.println(response.getRoles());
 }
});

```

  




<h5 id="GetRoleContextByUid-get-">Get Context with Roles and Permissions (GET)</h6>
 This API Gets the contexts that have been configured and the associated roles and permissions.

```java

String uid = "<uid>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.getRoleContextByUid(uid ,  new AsyncHandler<ListReturn<RoleContext>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListReturn<RoleContext> response) {
  System.out.println(response.getData().get(0).getAdditionalPermissions());
 }
});

```

  




<h5 id="GetRoleContextByContextName-get-">Role Context profile (GET)</h6>
 The API is used to retrieve role context by the context name.

```java

String contextName = "<contextName>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.getRoleContextByContextName(contextName ,  new AsyncHandler<ListReturn<RoleContextResponseModel>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListReturn<RoleContextResponseModel> response) {
  System.out.println(response.getData().get(0).getEmail().get(0).getValue());
 }
});

```

  




<h5 id="GetRolesList-get-">Roles List (GET)</h6>
 This API retrieves the complete list of created roles with permissions of your app.

```java


RoleApi roleApi = new RoleApi();
roleApi.getRolesList( new AsyncHandler<ListData<com.loginradius.sdk.models.responsemodels.otherobjects.RoleModel>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListData<com.loginradius.sdk.models.responsemodels.otherobjects.RoleModel> response) {
  System.out.println(response.getCount());
 }
});

```

  




<h5 id="UnassignRolesByUid-delete-">Unassign Roles by UID (DELETE)</h6>
 This API is used to unassign roles from a user.

```java

AccountRolesModel accountRolesModel = new AccountRolesModel(); //Required
List<String> roles = new ArrayList < String >();
roles.add("roles");
accountRolesModel.setRoles(roles); 
String uid = "<uid>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.unassignRolesByUid( accountRolesModel, uid ,  new AsyncHandler<DeleteResponse> (){

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

  




<h5 id="DeleteRoleContextByUid-delete-">Delete Role Context (DELETE)</h6>
 This API Deletes the specified Role Context

```java

String contextName = "<contextName>"; //Required
String uid = "<uid>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.deleteRoleContextByUid(contextName, uid ,  new AsyncHandler<DeleteResponse> (){

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

  




<h5 id="DeleteRolesFromRoleContextByUid-delete-">Delete Role from Context (DELETE)</h6>
 This API Deletes the specified Role from a Context.

```java

String contextName = "<contextName>"; //Required
RoleContextRemoveRoleModel roleContextRemoveRoleModel = new RoleContextRemoveRoleModel(); //Required
List<String> roles = new ArrayList < String >();
roles.add("roles");
roleContextRemoveRoleModel.setRoles(roles); 
String uid = "<uid>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.deleteRolesFromRoleContextByUid(contextName,  roleContextRemoveRoleModel, uid ,  new AsyncHandler<DeleteResponse> (){

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

  




<h5 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-">Delete Additional Permission from Context (DELETE)</h6>
 This API Deletes Additional Permissions from Context.

```java

String contextName = "<contextName>"; //Required
RoleContextAdditionalPermissionRemoveRoleModel roleContextAdditionalPermissionRemoveRoleModel = new RoleContextAdditionalPermissionRemoveRoleModel(); //Required
List<String> additionalPermissions = new ArrayList < String >();
additionalPermissions.add("additionalPermissions");
roleContextAdditionalPermissionRemoveRoleModel.setAdditionalPermissions(additionalPermissions); 
String uid = "<uid>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.deleteAdditionalPermissionFromRoleContextByUid(contextName,  roleContextAdditionalPermissionRemoveRoleModel, uid ,  new AsyncHandler<DeleteResponse> (){

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

  




<h5 id="DeleteRole-delete-">Account Delete Role (DELETE)</h6>
 This API is used to delete the role.

```java

String role = "<role>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.deleteRole(role ,  new AsyncHandler<DeleteResponse> (){

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

  




<h5 id="RemoveRolePermissions-delete-">Remove Permissions (DELETE)</h6>
 API is used to remove permissions from a role.

```java

PermissionsModel permissionsModel = new PermissionsModel(); //Required
List<String> permissions = new ArrayList < String >();
permissions.add("permissions");
permissionsModel.setPermissions(permissions); 
String role = "<role>"; //Required

RoleApi roleApi = new RoleApi();
roleApi.removeRolePermissions( permissionsModel, role ,  new AsyncHandler<com.loginradius.sdk.models.responsemodels.otherobjects.RoleModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(com.loginradius.sdk.models.responsemodels.otherobjects.RoleModel response) {
  System.out.println(response.getName());
 }
});

```

  







### Sott API


List of APIs in this Section:<br>

* GET : [Generate SOTT](#GenerateSott-get-)<br>




<h5 id="GenerateSott-get-">Generate SOTT (GET)</h6>
 This API allows you to generate SOTT with a given expiration time.

```java

Integer timeDifference = 0; //Optional

SottApi sottApi = new SottApi();
sottApi.generateSott(timeDifference ,  new AsyncHandler<SottResponseData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SottResponseData response) {
  System.out.println(response.getExpiryTime());
 }
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




<h5 id="GetAccessTokenByFacebookAccessToken-get-">Access Token via Facebook Token (GET)</h6>
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

  




<h5 id="GetAccessTokenByTwitterAccessToken-get-">Access Token via Twitter Token (GET)</h6>
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

  




<h5 id="GetAccessTokenByGoogleAccessToken-get-">Access Token via Google Token (GET)</h6>
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

  




<h5 id="GetAccessTokenByGoogleJWTAccessToken-get-">Access Token using google JWT token for Native Mobile Login (GET)</h6>
 This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.

```java

String idToken = "<idToken>"; //Required

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByGoogleJWTAccessToken(idToken ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h5 id="GetAccessTokenByLinkedinAccessToken-get-">Access Token via Linkedin Token (GET)</h6>
 The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.

```java

String lnAccessToken = "<lnAccessToken>"; //Required

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByLinkedinAccessToken(lnAccessToken ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h5 id="GetAccessTokenByGoogleAuthCode-get-">Access Token via Google AuthCode (GET)</h6>
 The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.

```java

String googleAuthcode = "<googleAuthcode>"; //Required

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByGoogleAuthCode(googleAuthcode ,  new AsyncHandler<AccessTokenBase> (){

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

  







### WebHook API


List of APIs in this Section:<br>

* POST : [Webhook Subscribe](#WebHookSubscribe-post-)<br>
* GET : [Webhook Subscribed URLs](#GetWebHookSubscribedURLs-get-)<br>
* GET : [Webhook Test](#WebhookTest-get-)<br>
* DELETE : [WebHook Unsubscribe](#WebHookUnsubscribe-delete-)<br>




<h5 id="WebHookSubscribe-post-">Webhook Subscribe (POST)</h6>
 API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.

```java

WebHookSubscribeModel webHookSubscribeModel = new WebHookSubscribeModel(); //Required
webHookSubscribeModel.setEvent("event"); 
webHookSubscribeModel.setTargetUrl("targetUrl"); 

WebHookApi webHookApi = new WebHookApi();
webHookApi.webHookSubscribe( webHookSubscribeModel ,  new AsyncHandler<PostResponse> (){

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

  




<h5 id="GetWebHookSubscribedURLs-get-">Webhook Subscribed URLs (GET)</h6>
 This API is used to fatch all the subscribed URLs, for particular event

```java

String event = "<event>"; //Required

WebHookApi webHookApi = new WebHookApi();
webHookApi.getWebHookSubscribedURLs(event ,  new AsyncHandler<ListData<com.loginradius.sdk.models.responsemodels.otherobjects.WebHookSubscribeModel>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListData<com.loginradius.sdk.models.responsemodels.otherobjects.WebHookSubscribeModel> response) {
  System.out.println(response.getCount());
 }
});

```

  




<h5 id="WebhookTest-get-">Webhook Test (GET)</h6>
 API can be used to test a subscribed WebHook.

```java


WebHookApi webHookApi = new WebHookApi();
webHookApi.webhookTest( new AsyncHandler<EntityPermissionAcknowledgement> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(EntityPermissionAcknowledgement response) {
  System.out.println(response.getIsAllowed());
 }
});

```

  




<h5 id="WebHookUnsubscribe-delete-">WebHook Unsubscribe (DELETE)</h6>
 API can be used to unsubscribe a WebHook configured on your LoginRadius site.

```java

WebHookSubscribeModel webHookSubscribeModel = new WebHookSubscribeModel(); //Required
webHookSubscribeModel.setEvent("event"); 
webHookSubscribeModel.setTargetUrl("targetUrl"); 

WebHookApi webHookApi = new WebHookApi();
webHookApi.webHookUnsubscribe( webHookSubscribeModel ,  new AsyncHandler<DeleteResponse> (){

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
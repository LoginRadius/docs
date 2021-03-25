---
title: "JAVA SDK"
tags: ["JAVA", "SDK"]
description: "A guide to impliment LoginRadius SDK in a JAVA application."
---

# JAVA SDK

This document describes how to start using JAVA SDK and its various features.

> **Note:** You must have JAVA JDK 8 or JDK 11 installed on your system.

## SDK Installation

Download the JAVA SDK from [here](https://github.com/LoginRadius/java-sdk).

Once the project is downloaded, the folder structure is like this.

```
.project
pom.xml
README.md
src
| -- main
| -- |--- |java/
| -- |--- |resources/
| -- |--- |-- application.properties
| -- |--- |-- static
| -- |--- |-- templates
| -- |--- |-- --- index.html
| -- |--- |-- --- profile.html
```

add this snippet in pom.xml

```
<dependency>
 <groupId>com.loginradius.sdk</groupId>
 <artifactId>java-sdk</artifactId>
 <version>11.0.1</version>
</dependency>

```

> LoginRadius is now using Maven. The jars are also available [here](https://search.maven.org/search?q=loginradius) on the Maven repository. Select the directory for the latest version and download the jar files.

> For more information on SDK configuration and obtaining API credentials, refer to this [tutorial](https://lr-developer-docs.netlify.app/tutorial/java/).


### API Methods

Similar to the above example, you can use other API Methods to implement more features.

> You can utilize these methods to implement features covered in your subscribed [plan](https://www.loginradius.com/pricing/).

Below is the list of APIs with sample use of respective API Method:



### Authentication API


List of APIs in this Section:<br>

* PUT : [Auth Update Profile by Token](#UpdateProfileByAccessToken-put-)<br>
* PUT : [Auth Unlock Account by Access Token](#UnlockAccountByToken-put-)<br>
* PUT : [Auth Verify Email By OTP](#VerifyEmailByOTP-put-)<br>
* PUT : [Auth Reset Password by Security Answer and Email](#ResetPasswordBySecurityAnswerAndEmail-put-)<br>
* PUT : [Auth Reset Password by Security Answer and Phone](#ResetPasswordBySecurityAnswerAndPhone-put-)<br>
* PUT : [Auth Reset Password by Security Answer and UserName](#ResetPasswordBySecurityAnswerAndUserName-put-)<br>
* PUT : [Auth Reset Password by Reset Token](#ResetPasswordByResetToken-put-)<br>
* PUT : [Auth Reset Password by OTP](#ResetPasswordByEmailOTP-put-)<br>
* PUT : [Auth Reset Password by OTP and UserName](#ResetPasswordByOTPAndUserName-put-)<br>
* PUT : [Auth Change Password](#ChangePassword-put-)<br>
* PUT : [Auth Set or Change UserName](#SetOrChangeUserName-put-)<br>
* PUT : [Auth Resend Email Verification](#AuthResendEmailVerification-put-)<br>
* POST : [Auth Add Email](#AddEmail-post-)<br>
* POST : [Auth Login by Email](#LoginByEmail-post-)<br>
* POST : [Auth Login by Username](#LoginByUserName-post-)<br>
* POST : [Auth Forgot Password](#ForgotPassword-post-)<br>
* POST : [Auth Link Social Identities](#LinkSocialIdentities-post-)<br>
* POST : [Auth Link Social Identities By Ping](#LinkSocialIdentitiesByPing-post-)<br>
* POST : [Auth User Registration by Email](#UserRegistrationByEmail-post-)<br>
* POST : [Auth User Registration By Captcha](#UserRegistrationByCaptcha-post-)<br>
* GET : [Get Security Questions By Email](#GetSecurityQuestionsByEmail-get-)<br>
* GET : [Get Security Questions By UserName](#GetSecurityQuestionsByUserName-get-)<br>
* GET : [Get Security Questions By Phone](#GetSecurityQuestionsByPhone-get-)<br>
* GET : [Get Security Questions By Access Token](#GetSecurityQuestionsByAccessToken-get-)<br>
* GET : [Auth Validate Access token](#AuthValidateAccessToken-get-)<br>
* GET : [Access Token Invalidate](#AuthInValidateAccessToken-get-)<br>
* GET : [Access Token Info](#GetAccessTokenInfo-get-)<br>
* GET : [Auth Read all Profiles by Token](#GetProfileByAccessToken-get-)<br>
* GET : [Auth Send Welcome Email](#SendWelcomeEmail-get-)<br>
* GET : [Auth Delete Account](#DeleteAccountByDeleteToken-get-)<br>
* GET : [Auth Check Email Availability](#CheckEmailAvailability-get-)<br>
* GET : [Auth Verify Email](#VerifyEmail-get-)<br>
* GET : [Auth Check UserName Availability](#CheckUserNameAvailability-get-)<br>
* GET : [Auth Privacy Policy Accept](#AcceptPrivacyPolicy-get-)<br>
* GET : [Auth Privacy Policy History By Access Token](#GetPrivacyPolicyHistoryByAccessToken-get-)<br>
* DELETE : [Auth Delete Account with Email Confirmation](#DeleteAccountWithEmailConfirmation-delete-)<br>
* DELETE : [Auth Remove Email](#RemoveEmail-delete-)<br>
* DELETE : [Auth Unlink Social Identities](#UnlinkSocialIdentities-delete-)<br>




<h4 id="UpdateProfileByAccessToken-put-">Auth Update Profile by Token (PUT)</h4>
 This API is used to update the user's profile by passing the access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-update-profile-by-token/)

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

  




<h4 id="UnlockAccountByToken-put-">Auth Unlock Account by Access Token (PUT)</h4>
 This API is used to allow a customer with a valid access token to unlock their account provided that they successfully pass the prompted Bot Protection challenges. The Block or Suspend block types are not applicable for this API. For additional details see our Auth Security Configuration documentation.You are only required to pass the Post Parameters that correspond to the prompted challenges. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlock-account-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required
UnlockProfileModel unlockProfileModel = new UnlockProfileModel(); //Required
unlockProfileModel.setG_Recaptcha_Response("g-recaptcha-response"); 

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.unlockAccountByToken(accessToken,  unlockProfileModel ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="VerifyEmailByOTP-put-">Auth Verify Email By OTP (PUT)</h4>
 This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email-by-otp/)

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

  




<h4 id="ResetPasswordBySecurityAnswerAndEmail-put-">Auth Reset Password by Security Answer and Email (PUT)</h4>
 This API is used to reset password for the specified account by security question [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-email)

```java

ResetPasswordBySecurityAnswerAndEmailModel resetPasswordBySecurityAnswerAndEmailModel = new ResetPasswordBySecurityAnswerAndEmailModel(); //Required
resetPasswordBySecurityAnswerAndEmailModel.setEmail("email"); 
resetPasswordBySecurityAnswerAndEmailModel.setPassword("password"); 
Map<String,String> securityAnswer= new HashMap<String,String> ();
securityAnswer.put("<security-qustion-id>", "<security-answer>" );
resetPasswordBySecurityAnswerAndEmailModel.setSecurityAnswer(securityAnswer); 

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.resetPasswordBySecurityAnswerAndEmail( resetPasswordBySecurityAnswerAndEmailModel ,  new AsyncHandler<UserProfilePostResponse<AccessTokenBase>> (){

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

  




<h4 id="ResetPasswordBySecurityAnswerAndPhone-put-">Auth Reset Password by Security Answer and Phone (PUT)</h4>
 This API is used to reset password for the specified account by security question [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-phone)

```java

ResetPasswordBySecurityAnswerAndPhoneModel resetPasswordBySecurityAnswerAndPhoneModel = new ResetPasswordBySecurityAnswerAndPhoneModel(); //Required
resetPasswordBySecurityAnswerAndPhoneModel.setPassword("password"); 
resetPasswordBySecurityAnswerAndPhoneModel.setPhone("phone"); 
Map<String,String> securityAnswer= new HashMap<String,String> ();
securityAnswer.put("<security-qustion-id>", "<security-answer>" );
resetPasswordBySecurityAnswerAndPhoneModel.setSecurityAnswer(securityAnswer); 

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.resetPasswordBySecurityAnswerAndPhone( resetPasswordBySecurityAnswerAndPhoneModel ,  new AsyncHandler<UserProfilePostResponse<AccessTokenBase>> (){

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

  




<h4 id="ResetPasswordBySecurityAnswerAndUserName-put-">Auth Reset Password by Security Answer and UserName (PUT)</h4>
 This API is used to reset password for the specified account by security question [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-username)

```java

ResetPasswordBySecurityAnswerAndUserNameModel resetPasswordBySecurityAnswerAndUserNameModel = new ResetPasswordBySecurityAnswerAndUserNameModel(); //Required
resetPasswordBySecurityAnswerAndUserNameModel.setPassword("password"); 
Map<String,String> securityAnswer= new HashMap<String,String> ();
securityAnswer.put("<security-qustion-id>", "<security-answer>" );
resetPasswordBySecurityAnswerAndUserNameModel.setSecurityAnswer(securityAnswer); 
resetPasswordBySecurityAnswerAndUserNameModel.setUserName("userName"); 

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.resetPasswordBySecurityAnswerAndUserName( resetPasswordBySecurityAnswerAndUserNameModel ,  new AsyncHandler<UserProfilePostResponse<AccessTokenBase>> (){

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

  




<h4 id="ResetPasswordByResetToken-put-">Auth Reset Password by Reset Token (PUT)</h4>
 This API is used to set a new password for the specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-reset-token)

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

  




<h4 id="ResetPasswordByEmailOTP-put-">Auth Reset Password by OTP (PUT)</h4>
 This API is used to set a new password for the specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-otp)

```java

ResetPasswordByEmailAndOtpModel resetPasswordByEmailAndOtpModel = new ResetPasswordByEmailAndOtpModel(); //Required
resetPasswordByEmailAndOtpModel.setEmail("email"); 
resetPasswordByEmailAndOtpModel.setOtp("otp"); 
resetPasswordByEmailAndOtpModel.setPassword("password"); 

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.resetPasswordByEmailOTP( resetPasswordByEmailAndOtpModel ,  new AsyncHandler<UserProfilePostResponse<AccessTokenBase>> (){

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

  




<h4 id="ResetPasswordByOTPAndUserName-put-">Auth Reset Password by OTP and UserName (PUT)</h4>
 This API is used to set a new password for the specified account if you are using the username as the unique identifier in your workflow [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-reset-password-by-otp-and-username/)

```java

ResetPasswordByUserNameModel resetPasswordByUserNameModel = new ResetPasswordByUserNameModel(); //Required
resetPasswordByUserNameModel.setOtp("otp"); 
resetPasswordByUserNameModel.setPassword("password"); 
resetPasswordByUserNameModel.setUserName("userName"); 

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.resetPasswordByOTPAndUserName( resetPasswordByUserNameModel ,  new AsyncHandler<UserProfilePostResponse<AccessTokenBase>> (){

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

  




<h4 id="ChangePassword-put-">Auth Change Password (PUT)</h4>
 This API is used to change the accounts password based on the previous password [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-change-password)

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

  




<h4 id="SetOrChangeUserName-put-">Auth Set or Change UserName (PUT)</h4>
 This API is used to set or change UserName by access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-set-or-change-user-name/)

```java

String accessToken = "<accessToken>"; //Required
String username = "<username>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.setOrChangeUserName(accessToken, username ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="AuthResendEmailVerification-put-">Auth Resend Email Verification (PUT)</h4>
 This API resends the verification email to the user. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-resend-email-verification/)

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

  




<h4 id="AddEmail-post-">Auth Add Email (POST)</h4>
 This API is used to add additional emails to a user's account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-add-email)

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

  




<h4 id="LoginByEmail-post-">Auth Login by Email (POST)</h4>
 This API retrieves a copy of the user data based on the Email [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email)

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

  




<h4 id="LoginByUserName-post-">Auth Login by Username (POST)</h4>
 This API retrieves a copy of the user data based on the Username [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-username)

```java

UserNameAuthenticationModel userNameAuthenticationModel = new UserNameAuthenticationModel(); //Required
userNameAuthenticationModel.setPassword("password"); 
userNameAuthenticationModel.setUsername("username"); 
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.loginByUserName( userNameAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h4 id="ForgotPassword-post-">Auth Forgot Password (POST)</h4>
 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-forgot-password)

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

  




<h4 id="LinkSocialIdentities-post-">Auth Link Social Identities (POST)</h4>
 This API is used to link up a social provider account with an existing LoginRadius account on the basis of access token and the social providers user access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities)

```java

String accessToken = "<accessToken>"; //Required
String candidateToken = "<candidateToken>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.linkSocialIdentities(accessToken, candidateToken ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="LinkSocialIdentitiesByPing-post-">Auth Link Social Identities By Ping (POST)</h4>
 This API is used to link up a social provider account with an existing LoginRadius account on the basis of ping and the social providers user access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-link-social-identities-by-ping)

```java

String accessToken = "<accessToken>"; //Required
String clientGuid = "<clientGuid>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.linkSocialIdentitiesByPing(accessToken, clientGuid ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="UserRegistrationByEmail-post-">Auth User Registration by Email (POST)</h4>
 This API creates a user in the database as well as sends a verification email to the user. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-user-registration-by-email)

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

  




<h4 id="UserRegistrationByCaptcha-post-">Auth User Registration By Captcha (POST)</h4>
 This API creates a user in the database as well as sends a verification email to the user. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-user-registration-by-recaptcha)

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

  




<h4 id="GetSecurityQuestionsByEmail-get-">Get Security Questions By Email (GET)</h4>
 This API is used to retrieve the list of questions that are configured on the respective LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-email/)

```java

String email = "<email>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getSecurityQuestionsByEmail(email ,  new AsyncHandler<SecurityQuestions[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SecurityQuestions[] response) {
  System.out.println(response[0].getQuestion());
 }
});

```

  




<h4 id="GetSecurityQuestionsByUserName-get-">Get Security Questions By UserName (GET)</h4>
 This API is used to retrieve the list of questions that are configured on the respective LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-user-name/)

```java

String userName = "<userName>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getSecurityQuestionsByUserName(userName ,  new AsyncHandler<SecurityQuestions[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SecurityQuestions[] response) {
  System.out.println(response[0].getQuestion());
 }
});

```

  




<h4 id="GetSecurityQuestionsByPhone-get-">Get Security Questions By Phone (GET)</h4>
 This API is used to retrieve the list of questions that are configured on the respective LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-phone/)

```java

String phone = "<phone>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getSecurityQuestionsByPhone(phone ,  new AsyncHandler<SecurityQuestions[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SecurityQuestions[] response) {
  System.out.println(response[0].getQuestion());
 }
});

```

  




<h4 id="GetSecurityQuestionsByAccessToken-get-">Get Security Questions By Access Token (GET)</h4>
 This API is used to retrieve the list of questions that are configured on the respective LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/security-questions-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getSecurityQuestionsByAccessToken(accessToken ,  new AsyncHandler<SecurityQuestions[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(SecurityQuestions[] response) {
  System.out.println(response[0].getQuestion());
 }
});

```

  




<h4 id="AuthValidateAccessToken-get-">Auth Validate Access token (GET)</h4>
 This api validates access token, if valid then returns a response with its expiry otherwise error. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-validate-access-token/)

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

  




<h4 id="AuthInValidateAccessToken-get-">Access Token Invalidate (GET)</h4>
 This api call invalidates the active access token or expires an access token's validity. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-invalidate-access-token/)

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

  




<h4 id="GetAccessTokenInfo-get-">Access Token Info (GET)</h4>
 This api call provide the active access token Information [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-access-token-info/)

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

  




<h4 id="GetProfileByAccessToken-get-">Auth Read all Profiles by Token (GET)</h4>
 This API retrieves a copy of the user data based on the access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-read-profiles-by-token/)

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

  




<h4 id="SendWelcomeEmail-get-">Auth Send Welcome Email (GET)</h4>
 This API sends a welcome email [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-send-welcome-email/)

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

  




<h4 id="DeleteAccountByDeleteToken-get-">Auth Delete Account (GET)</h4>
 This API is used to delete an account by passing it a delete token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-delete-account/)

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

  




<h4 id="CheckEmailAvailability-get-">Auth Check Email Availability (GET)</h4>
 This API is used to check the email exists or not on your site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-email-availability/)

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

  




<h4 id="VerifyEmail-get-">Auth Verify Email (GET)</h4>
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-verify-email/)

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

  




<h4 id="CheckUserNameAvailability-get-">Auth Check UserName Availability (GET)</h4>
 This API is used to check the UserName exists or not on your site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-username-availability/)

```java

String username = "<username>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.checkUserNameAvailability(username ,  new AsyncHandler<ExistResponse> (){

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

  




<h4 id="AcceptPrivacyPolicy-get-">Auth Privacy Policy Accept (GET)</h4>
 This API is used to update the privacy policy stored in the user's profile by providing the access token of the user accepting the privacy policy [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-privacy-policy-accept)

```java

String accessToken = "<accessToken>"; //Required
String fields = null; //Optional

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.acceptPrivacyPolicy(accessToken, fields ,  new AsyncHandler<Identity> (){

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

  




<h4 id="GetPrivacyPolicyHistoryByAccessToken-get-">Auth Privacy Policy History By Access Token (GET)</h4>
 This API will return all the accepted privacy policies for the user by providing the access token of that user. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/privacy-policy-history-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getPrivacyPolicyHistoryByAccessToken(accessToken ,  new AsyncHandler<PrivacyPolicyHistoryResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PrivacyPolicyHistoryResponse response) {
  System.out.println(response.getCurrent().getVersion());
 }
});

```

  




<h4 id="DeleteAccountWithEmailConfirmation-delete-">Auth Delete Account with Email Confirmation (DELETE)</h4>
 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-delete-account-with-email-confirmation/)

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

  




<h4 id="RemoveEmail-delete-">Auth Remove Email (DELETE)</h4>
 This API is used to remove additional emails from a user's account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-remove-email)

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

  




<h4 id="UnlinkSocialIdentities-delete-">Auth Unlink Social Identities (DELETE)</h4>
 This API is used to unlink up a social provider account with the specified account based on the access token and the social providers user access token. The unlinked account will automatically get removed from your database. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-unlink-social-identities)

```java 

String accessToken = "<accessToken>"; //Required
String provider = "<provider>"; //Required
String providerId = "<providerId>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.unlinkSocialIdentities(accessToken, provider, providerId ,  new AsyncHandler<DeleteResponse> (){

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
* POST : [Account Create](#CreateAccount-post-)<br>
* POST : [Forgot Password token](#GetForgotPasswordToken-post-)<br>
* POST : [Email Verification token](#GetEmailVerificationToken-post-)<br>
* GET : [Get Privacy Policy History By Uid](#GetPrivacyPolicyHistoryByUid-get-)<br>
* GET : [Account Profiles by Email](#GetAccountProfileByEmail-get-)<br>
* GET : [Account Profiles by Username](#GetAccountProfileByUserName-get-)<br>
* GET : [Account Profile by Phone ID](#GetAccountProfileByPhone-get-)<br>
* GET : [Account Profiles by UID](#GetAccountProfileByUid-get-)<br>
* GET : [Account Password](#GetAccountPasswordHashByUid-get-)<br>
* GET : [Access Token based on UID or User impersonation API](#GetAccessTokenByUid-get-)<br>
* GET : [Refresh Access Token by Refresh Token](#RefreshAccessTokenByRefreshToken-get-)<br>
* GET : [Revoke Refresh Token](#RevokeRefreshToken-get-)<br>
* GET : [Account Identities by Email](#GetAccountIdentitiesByEmail-get-)<br>
* DELETE : [Account Delete](#DeleteAccountByUid-delete-)<br>
* DELETE : [Account Remove Email](#RemoveEmail-delete-)<br>
* DELETE : [Delete User Profiles By Email](#AccountDeleteByEmail-delete-)<br>




<h4 id="UpdateAccountByUid-put-">Account Update (PUT)</h4>
 This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-update)

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

  




<h4 id="UpdatePhoneIDByUid-put-">Update Phone ID by UID (PUT)</h4>
 This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/update-phoneid-by-uid)

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

  




<h4 id="SetAccountPasswordByUid-put-">Account Set Password (PUT)</h4>
 This API is used to set the password of an account in Cloud Storage. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-set-password)

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

  




<h4 id="InvalidateAccountEmailVerification-put-">Account Invalidate Verification Email (PUT)</h4>
 This API is used to invalidate the Email Verification status on an account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-invalidate-verification-email)

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

  




<h4 id="ResetPhoneIDVerificationByUid-put-">Reset phone ID verification (PUT)</h4>
 This API Allows you to reset the phone no verification of an end user’s account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/reset-phone-id-verification)

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

  




<h4 id="UpsertEmail-put-">Upsert Email (PUT)</h4>
 This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/upsert-email)

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

  



<h4 id="CreateAccount-post-">Account Create (POST)</h4>
 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-create)

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

  




<h4 id="GetForgotPasswordToken-post-">Forgot Password token (POST)</h4>
 This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/get-forgot-password-token)

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

  




<h4 id="GetEmailVerificationToken-post-">Email Verification token (POST)</h4>
 This API Returns an Email Verification token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/get-email-verification-token)

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

  




<h4 id="GetPrivacyPolicyHistoryByUid-get-">Get Privacy Policy History By Uid (GET)</h4>
 This API is used to retrieve all of the accepted Policies by the user, associated with their UID. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/privacy-policy-history-by-uid/)

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
  System.out.println(response.getCurrent().getVersion());
 }
});

```

  




<h4 id="GetAccountProfileByEmail-get-">Account Profiles by Email (GET)</h4>
 This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-email)

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

  




<h4 id="GetAccountProfileByUserName-get-">Account Profiles by Username (GET)</h4>
 This API is used to retrieve all of the profile data associated with the specified account by user name in Cloud Storage. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-user-name)

```java

String userName = "<userName>"; //Required
String fields = null; //Optional

AccountApi accountApi = new AccountApi();
accountApi.getAccountProfileByUserName(userName, fields ,  new AsyncHandler<Identity> (){

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

  




<h4 id="GetAccountProfileByPhone-get-">Account Profile by Phone ID (GET)</h4>
 This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-phone-id/)

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

  




<h4 id="GetAccountProfileByUid-get-">Account Profiles by UID (GET)</h4>
 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-profiles-by-uid)

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

  




<h4 id="GetAccountPasswordHashByUid-get-">Account Password (GET)</h4>
 This API use to retrive the hashed password of a specified account in Cloud Storage. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-password)

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

  




<h4 id="GetAccessTokenByUid-get-">Access Token based on UID or User impersonation API (GET)</h4>
 The API is used to get LoginRadius access token based on UID. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-impersonation-api)

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

  




<h4 id="RefreshAccessTokenByRefreshToken-get-">Refresh Access Token by Refresh Token (GET)</h4>
 This API is used to refresh an access token via it's associated refresh token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-access-token-by-refresh-token)

```java

String refreshToken = "<refreshToken>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.refreshAccessTokenByRefreshToken(refreshToken ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="RevokeRefreshToken-get-">Revoke Refresh Token (GET)</h4>
 The Revoke Refresh Access Token API is used to revoke a refresh token or the Provider Access Token, revoking an existing refresh token will invalidate the refresh token but the associated access token will work until the expiry. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/revoke-refresh-token)

```java

String refreshToken = "<refreshToken>"; //Required

AccountApi accountApi = new AccountApi();
accountApi.revokeRefreshToken(refreshToken ,  new AsyncHandler<DeleteResponse> (){

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

  




<h4 id="GetAccountIdentitiesByEmail-get-">Account Identities by Email (GET)</h4>
 Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-identities-by-email)

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

  




<h4 id="DeleteAccountByUid-delete-">Account Delete (DELETE)</h4>
 This API deletes the Users account and allows them to re-register for a new account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-delete)

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

  




<h4 id="RemoveEmail-delete-">Account Remove Email (DELETE)</h4>
 Use this API to Remove emails from a user Account [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-email-delete)

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

  




<h4 id="AccountDeleteByEmail-delete-">Delete User Profiles By Email (DELETE)</h4>
 This API is used to delete all user profiles associated with an Email. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/account/account-email-delete/)

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


List of APIs in this Section:<br>

* POST : [Post Message API](#PostMessage-post-)<br>
* POST : [Status Posting ](#StatusPosting-post-)<br>
* POST : [Trackable Status Posting](#TrackableStatusPosting-post-)<br>
* GET : [Access Token](#ExchangeAccessToken-get-)<br>
* GET : [Refresh Token](#RefreshAccessToken-get-)<br>
* GET : [Token Validate](#ValidateAccessToken-get-)<br>
* GET : [Access Token Invalidate](#InValidateAccessToken-get-)<br>
* GET : [Get Active Session Details](#GetActiveSession-get-)<br>
* GET : [Get Active Session By Account Id](#GetActiveSessionByAccountID-get-)<br>
* GET : [Get Active Session By Profile Id](#GetActiveSessionByProfileID-get-)<br>
* GET : [Album](#GetAlbums-get-)<br>
* GET : [Get Albums with cursor](#GetAlbumsWithCursor-get-)<br>
* GET : [Audio](#GetAudios-get-)<br>
* GET : [Get Audio With Cursor](#GetAudiosWithCursor-get-)<br>
* GET : [Check In](#GetCheckIns-get-)<br>
* GET : [Get CheckIns With Cursor](#GetCheckInsWithCursor-get-)<br>
* GET : [Contact](#GetContacts-get-)<br>
* GET : [Event](#GetEvents-get-)<br>
* GET : [Get Events With Cursor](#GetEventsWithCursor-get-)<br>
* GET : [Following](#GetFollowings-get-)<br>
* GET : [Get Followings With Cursor](#GetFollowingsWithCursor-get-)<br>
* GET : [Group](#GetGroups-get-)<br>
* GET : [Get Groups With Cursor](#GetGroupsWithCursor-get-)<br>
* GET : [Like](#GetLikes-get-)<br>
* GET : [Get Likes With Cursor](#GetLikesWithCursor-get-)<br>
* GET : [Mention](#GetMentions-get-)<br>
* GET : [Page](#GetPage-get-)<br>
* GET : [Photo](#GetPhotos-get-)<br>
* GET : [Get Post](#GetPosts-get-)<br>
* GET : [Get Trackable Status Stats](#GetTrackableStatusStats-get-)<br>
* GET : [Trackable Status Fetching](#TrackableStatusFetching-get-)<br>
* GET : [User Profile](#GetSocialUserProfile-get-)<br>
* GET : [Refresh User Profile](#GetRefreshedSocialUserProfile-get-)<br>
* GET : [Video](#GetVideos-get-)<br>




<h4 id="PostMessage-post-">Post Message API (POST)</h4>
 Post Message API is used to post messages to the user's contacts.<br><br><b>Supported Providers:</b> Twitter, LinkedIn <br><br>The Message API is used to post messages to the user?s contacts. This is one of the APIs that makes up the LoginRadius Friend Invite System. After using the Contact API, you can send messages to the retrieved contacts. This API requires setting permissions in your LoginRadius Dashboard.<br><br>GET & POST Message API work the same way except the API method is different [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/post-message-api)

```java

String accessToken = "<accessToken>"; //Required
String message = "<message>"; //Required
String subject = "<subject>"; //Required
String to = "<to>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.postMessage(accessToken, message, subject, to ,  new AsyncHandler<PostMethodResponseBase> (){

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

  




<h4 id="StatusPosting-post-">Status Posting  (POST)</h4>
 The Status API is used to update the status on the user's wall.<br><br><b>Supported Providers:</b>  Facebook, Twitter, LinkedIn [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/status-posting/)

```java

String accessToken = "<accessToken>"; //Required
String caption = "<caption>"; //Required
String description = "<description>"; //Required
String imageurl = "<imageurl>"; //Required
String status = "<status>"; //Required
String title = "<title>"; //Required
String url = "<url>"; //Required
String shorturl = "<shorturl>"; //Optional

SocialApi socialApi = new SocialApi();
socialApi.statusPosting(accessToken, caption, description, imageurl, status, title, url, shorturl ,  new AsyncHandler<PostMethodResponse<ShortUrlResponse>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostMethodResponse<ShortUrlResponse> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h4 id="TrackableStatusPosting-post-">Trackable Status Posting (POST)</h4>
 The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.<br><br> The Trackable Status API is used to update the status on the user's wall and return an Post ID value. It is commonly referred to as Permission based sharing or Push notifications.<br><br> POST Input Parameter Format: application/x-www-form-urlencoded [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/trackable-status-posting/)

```java

String accessToken = "<accessToken>"; //Required
StatusModel statusModel = new StatusModel(); //Required
statusModel.setCaption("caption"); 
statusModel.setDescription("description"); 
statusModel.setImageurl("imageurl"); 
statusModel.setStatus("status"); 
statusModel.setTitle("title"); 
statusModel.setUrl("url"); 

SocialApi socialApi = new SocialApi();
socialApi.trackableStatusPosting(accessToken,  statusModel ,  new AsyncHandler<StatusUpdateResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(StatusUpdateResponse response) {
  System.out.println(response.getId());
 }
});

```

  




<h4 id="ExchangeAccessToken-get-">Access Token (GET)</h4>
 This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/access-token)

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

  




<h4 id="RefreshAccessToken-get-">Refresh Token (GET)</h4>
 The Refresh Access Token API is used to refresh the provider access token after authentication. It will be valid for up to 60 days on LoginRadius depending on the provider. In order to use the access token in other APIs, always refresh the token using this API.<br><br><b>Supported Providers :</b> Facebook,Yahoo,Google,Twitter, Linkedin.<br><br> Contact LoginRadius support team to enable this API. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-token)

```java

String accessToken = "<accessToken>"; //Required
Integer expiresIn = 0; //Optional
Boolean isWeb = true; //Optional

SocialApi socialApi = new SocialApi();
socialApi.refreshAccessToken(accessToken, expiresIn, isWeb ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="ValidateAccessToken-get-">Token Validate (GET)</h4>
 This API validates access token, if valid then returns a response with its expiry otherwise error. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/validate-access-token)

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

  




<h4 id="InValidateAccessToken-get-">Access Token Invalidate (GET)</h4>
 This api invalidates the active access token or expires an access token validity. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/invalidate-access-token)

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

  




<h4 id="GetActiveSession-get-">Get Active Session Details (GET)</h4>
 This api is use to get all active session by Access Token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/get-active-session-details)

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

  




<h4 id="GetActiveSessionByAccountID-get-">Get Active Session By Account Id (GET)</h4>
 This api is used to get all active sessions by AccountID(UID). [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/active-session-by-account-id/)

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

  




<h4 id="GetActiveSessionByProfileID-get-">Get Active Session By Profile Id (GET)</h4>
 This api is used to get all active sessions by ProfileId. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/active-session-by-profile-id/)

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

  




<h4 id="GetAlbums-get-">Album (GET)</h4>
 <b>Supported Providers:</b> Facebook, Google, Live, Vkontakte.<br><br> This API returns the photo albums associated with the passed in access tokens Social Profile. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/album/)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getAlbums(accessToken ,  new AsyncHandler<Album[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Album[] response) {
  System.out.println(response[0].getCoverImageUrl());
 }
});

```

  




<h4 id="GetAlbumsWithCursor-get-">Get Albums with cursor (GET)</h4>
 <b>Supported Providers:</b> Facebook, Google, Live, Vkontakte.<br><br> This API returns the photo albums associated with the passed in access tokens Social Profile. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/album/)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getAlbumsWithCursor(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<Album>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<Album> response) {
  System.out.println(response.getData().get(0).getCoverImageUrl());
 }
});

```

  




<h4 id="GetAudios-get-">Audio (GET)</h4>
 The Audio API is used to get audio files data from the user's social account.<br><br><b>Supported Providers:</b> Live, Vkontakte [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/audio)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getAudios(accessToken ,  new AsyncHandler<Audio[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Audio[] response) {
  System.out.println(response[0].getArtist());
 }
});

```

  




<h4 id="GetAudiosWithCursor-get-">Get Audio With Cursor (GET)</h4>
 The Audio API is used to get audio files data from the user's social account.<br><br><b>Supported Providers:</b> Live, Vkontakte [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/audio)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getAudiosWithCursor(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<Audio>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<Audio> response) {
  System.out.println(response.getData().get(0).getArtist());
 }
});

```

  




<h4 id="GetCheckIns-get-">Check In (GET)</h4>
 The Check In API is used to get check Ins data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Foursquare, Vkontakte [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/check-in)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getCheckIns(accessToken ,  new AsyncHandler<CheckIn[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CheckIn[] response) {
  System.out.println(response[0].getAddress());
 }
});

```

  




<h4 id="GetCheckInsWithCursor-get-">Get CheckIns With Cursor (GET)</h4>
 The Check In API is used to get check Ins data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Foursquare, Vkontakte [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/check-in)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getCheckInsWithCursor(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<CheckIn>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<CheckIn> response) {
  System.out.println(response.getData().get(0).getAddress());
 }
});

```

  




<h4 id="GetContacts-get-">Contact (GET)</h4>
 The Contact API is used to get contacts/friends/connections data from the user's social account.This is one of the APIs that makes up the LoginRadius Friend Invite System. The data will normalized into LoginRadius' standard data format. This API requires setting permissions in your LoginRadius Dashboard. <br><br><b>Note:</b> Facebook restricts access to the list of friends that is returned. When using the Contacts API with Facebook you will only receive friends that have accepted some permissions with your app. <br><br><b>Supported Providers:</b> Facebook, Foursquare, Google, LinkedIn, Live, Twitter, Vkontakte, Yahoo [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/contact)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Optional

SocialApi socialApi = new SocialApi();
socialApi.getContacts(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<Contact>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<Contact> response) {
  System.out.println(response.getData().get(0).getCountry());
 }
});

```

  




<h4 id="GetEvents-get-">Event (GET)</h4>
 The Event API is used to get the event data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Live [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/event)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getEvents(accessToken ,  new AsyncHandler<Events[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Events[] response) {
  System.out.println(response[0].getDescription());
 }
});

```

  




<h4 id="GetEventsWithCursor-get-">Get Events With Cursor (GET)</h4>
 The Event API is used to get the event data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Live [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/event)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getEventsWithCursor(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<Events>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<Events> response) {
  System.out.println(response.getData().get(0).getDescription());
 }
});

```

  




<h4 id="GetFollowings-get-">Following (GET)</h4>
 Get the following user list from the user's social account.<br><br><b>Supported Providers:</b> Twitter [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/following)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getFollowings(accessToken ,  new AsyncHandler<Contact[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Contact[] response) {
  System.out.println(response[0].getCountry());
 }
});

```

  




<h4 id="GetFollowingsWithCursor-get-">Get Followings With Cursor (GET)</h4>
 Get the following user list from the user's social account.<br><br><b>Supported Providers:</b> Twitter [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/following)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getFollowingsWithCursor(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<Contact>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<Contact> response) {
  System.out.println(response.getData().get(0).getCountry());
 }
});

```

  




<h4 id="GetGroups-get-">Group (GET)</h4>
 The Group API is used to get group data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Vkontakte [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/group)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getGroups(accessToken ,  new AsyncHandler<Group[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Group[] response) {
  System.out.println(response[0].getCountry());
 }
});

```

  




<h4 id="GetGroupsWithCursor-get-">Get Groups With Cursor (GET)</h4>
 The Group API is used to get group data from the user's social account.<br><br><b>Supported Providers:</b> Facebook, Vkontakte [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/group)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getGroupsWithCursor(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<Group>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<Group> response) {
  System.out.println(response.getData().get(0).getCountry());
 }
});

```

  




<h4 id="GetLikes-get-">Like (GET)</h4>
 The Like API is used to get likes data from the user's social account.<br><br><b>Supported Providers:</b> Facebook [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/like)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getLikes(accessToken ,  new AsyncHandler<Like[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Like[] response) {
  System.out.println(response[0].getCategory());
 }
});

```

  




<h4 id="GetLikesWithCursor-get-">Get Likes With Cursor (GET)</h4>
 The Like API is used to get likes data from the user's social account.<br><br><b>Supported Providers:</b> Facebook [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/like)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getLikesWithCursor(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<Like>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<Like> response) {
  System.out.println(response.getData().get(0).getCategory());
 }
});

```

  




<h4 id="GetMentions-get-">Mention (GET)</h4>
 The Mention API is used to get mentions data from the user's social account.<br><br><b>Supported Providers:</b> Twitter [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/mention)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getMentions(accessToken ,  new AsyncHandler<Status[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Status[] response) {
  System.out.println(response[0].getDateTime());
 }
});

```

  




<h4 id="GetPage-get-">Page (GET)</h4>
 The Page API is used to get the page data from the user's social account.<br><br><b>Supported Providers:</b>  Facebook, LinkedIn [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/page)

```java

String accessToken = "<accessToken>"; //Required
String pageName = "<pageName>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getPage(accessToken, pageName ,  new AsyncHandler<Page> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Page response) {
  System.out.println(response.getAbout());
 }
});

```

  




<h4 id="GetPhotos-get-">Photo (GET)</h4>
 The Photo API is used to get photo data from the user's social account.<br><br><b>Supported Providers:</b>  Facebook, Foursquare, Google, Live, Vkontakte [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/photo)

```java

String accessToken = "<accessToken>"; //Required
String albumId = "<albumId>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getPhotos(accessToken, albumId ,  new AsyncHandler<Photo[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Photo[] response) {
  System.out.println(response[0].getAlbumId());
 }
});

```

  




<h4 id="GetPosts-get-">Get Post (GET)</h4>
 The Post API is used to get post message data from the user's social account.<br><br><b>Supported Providers:</b>  Facebook [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/post)

```java

String accessToken = "<accessToken>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getPosts(accessToken ,  new AsyncHandler<Post[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(Post[] response) {
  System.out.println(response[0].getID());
 }
});

```

  




<h4 id="GetTrackableStatusStats-get-">Get Trackable Status Stats (GET)</h4>
 The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.<br><br> The Trackable Status API is used to update the status on the user's wall and return an Post ID value. It is commonly referred to as Permission based sharing or Push notifications. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/get-trackable-status-stats/)

```java

String accessToken = "<accessToken>"; //Required
String caption = "<caption>"; //Required
String description = "<description>"; //Required
String imageurl = "<imageurl>"; //Required
String status = "<status>"; //Required
String title = "<title>"; //Required
String url = "<url>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getTrackableStatusStats(accessToken, caption, description, imageurl, status, title, url ,  new AsyncHandler<StatusUpdateResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(StatusUpdateResponse response) {
  System.out.println(response.getId());
 }
});

```

  




<h4 id="TrackableStatusFetching-get-">Trackable Status Fetching (GET)</h4>
 The Trackable status API works very similar to the Status API but it returns a Post id that you can use to track the stats(shares, likes, comments) for a specific share/post/status update. This API requires setting permissions in your LoginRadius Dashboard.<br><br> This API is used to retrieve a tracked post based on the passed in post ID value. This API requires setting permissions in your LoginRadius Dashboard.<br><br> <b>Note:</b> To utilize this API you need to find the ID for the post you want to track, which might require using Trackable Status Posting API first. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/trackable-status-fetching/)

```java

String postId = "<postId>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.trackableStatusFetching(postId ,  new AsyncHandler<StatusUpdateStats> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(StatusUpdateStats response) {
  System.out.println(response.getComments());
 }
});

```

  




<h4 id="GetSocialUserProfile-get-">User Profile (GET)</h4>
 The User Profile API is used to get social profile data from the user's social account after authentication.<br><br><b>Supported Providers:</b>  All [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/user-profile)

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

  




<h4 id="GetRefreshedSocialUserProfile-get-">Refresh User Profile (GET)</h4>
 The User Profile API is used to get the latest updated social profile data from the user's social account after authentication. The social profile will be retrieved via oAuth and OpenID protocols. The data is normalized into LoginRadius' standard data format. This API should be called using the access token retrieved from the refresh access token API. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/refresh-token/refresh-user-profile)

```java

String accessToken = "<accessToken>"; //Required
String fields = null; //Optional

SocialApi socialApi = new SocialApi();
socialApi.getRefreshedSocialUserProfile(accessToken, fields ,  new AsyncHandler<UserProfile> (){

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

  




<h4 id="GetVideos-get-">Video (GET)</h4>
 The Video API is used to get video files data from the user's social account.<br><br><b>Supported Providers:</b>   Facebook, Google, Live, Vkontakte [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/advanced-social-api/video)

```java

String accessToken = "<accessToken>"; //Required
String nextCursor = "<nextCursor>"; //Required

SocialApi socialApi = new SocialApi();
socialApi.getVideos(accessToken, nextCursor ,  new AsyncHandler<CursorResponse<Video>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(CursorResponse<Video> response) {
  System.out.println(response.getData().get(0).getCreatedDate());
 }
});

```

  







### CustomObject API


List of APIs in this Section:<br>

* PUT : [Custom Object Update by Access Token](#UpdateCustomObjectByToken-put-)<br>
* PUT : [Custom Object Update by UID](#UpdateCustomObjectByUid-put-)<br>
* POST : [Create Custom Object by Token](#CreateCustomObjectByToken-post-)<br>
* POST : [Create Custom Object by UID](#CreateCustomObjectByUid-post-)<br>
* GET : [Custom Object by Token](#GetCustomObjectByToken-get-)<br>
* GET : [Custom Object by ObjectRecordId and Token](#GetCustomObjectByRecordIDAndToken-get-)<br>
* GET : [Custom Object By UID](#GetCustomObjectByUid-get-)<br>
* GET : [Custom Object by ObjectRecordId and UID](#GetCustomObjectByRecordID-get-)<br>
* DELETE : [Custom Object Delete by Record Id And Token](#DeleteCustomObjectByToken-delete-)<br>
* DELETE : [Account Delete Custom Object by ObjectRecordId](#DeleteCustomObjectByRecordID-delete-)<br>




<h4 id="UpdateCustomObjectByToken-put-">Custom Object Update by Access Token (PUT)</h4>
 This API is used to update the specified custom object data of the specified account. If the value of updatetype is 'replace' then it will fully replace custom object with the new custom object and if the value of updatetype is 'partialreplace' then it will perform an upsert type operation [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-update-by-objectrecordid-and-token)

```java

String accessToken = "<accessToken>"; //Required
String objectName = "<objectName>"; //Required
String objectRecordId = "<objectRecordId>"; //Required
JsonObject json = new JsonObject(); //Required
json.addProperty("field1", "Store my field1 value");
CustomObjectUpdateOperationType updateType = CustomObjectUpdateOperationType.PartialReplace; //Optional

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.updateCustomObjectByToken(accessToken, objectName, objectRecordId,  json, updateType ,  new AsyncHandler<UserCustomObjectData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserCustomObjectData response) {
  System.out.println(response.getCustomObject());
 }
});

```

  




<h4 id="UpdateCustomObjectByUid-put-">Custom Object Update by UID (PUT)</h4>
 This API is used to update the specified custom object data of a specified account. If the value of updatetype is 'replace' then it will fully replace custom object with new custom object and if the value of updatetype is partialreplace then it will perform an upsert type operation. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-update-by-objectrecordid-and-uid)

```java

String objectName = "<objectName>"; //Required
String objectRecordId = "<objectRecordId>"; //Required
JsonObject json = new JsonObject(); //Required
json.addProperty("field1", "Store my field1 value");
String uid = "<uid>"; //Required
CustomObjectUpdateOperationType updateType = CustomObjectUpdateOperationType.PartialReplace; //Optional

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.updateCustomObjectByUid(objectName, objectRecordId,  json, uid, updateType ,  new AsyncHandler<UserCustomObjectData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserCustomObjectData response) {
  System.out.println(response.getCustomObject());
 }
});

```

  




<h4 id="CreateCustomObjectByToken-post-">Create Custom Object by Token (POST)</h4>
 This API is used to write information in JSON format to the custom object for the specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/create-custom-object-by-token)

```java

String accessToken = "<accessToken>"; //Required
String objectName = "<objectName>"; //Required
JsonObject json = new JsonObject(); //Required
json.addProperty("field1", "Store my field1 value");

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.createCustomObjectByToken(accessToken, objectName,  json ,  new AsyncHandler<UserCustomObjectData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserCustomObjectData response) {
  System.out.println(response.getCustomObject());
 }
});

```

  




<h4 id="CreateCustomObjectByUid-post-">Create Custom Object by UID (POST)</h4>
 This API is used to write information in JSON format to the custom object for the specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/create-custom-object-by-uid)

```java

String objectName = "<objectName>"; //Required
JsonObject json = new JsonObject(); //Required
json.addProperty("field1", "Store my field1 value");
String uid = "<uid>"; //Required

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.createCustomObjectByUid(objectName,  json, uid ,  new AsyncHandler<UserCustomObjectData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserCustomObjectData response) {
  System.out.println(response.getCustomObject());
 }
});

```

  




<h4 id="GetCustomObjectByToken-get-">Custom Object by Token (GET)</h4>
 This API is used to retrieve the specified Custom Object data for the specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-token)

```java

String accessToken = "<accessToken>"; //Required
String objectName = "<objectName>"; //Required

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.getCustomObjectByToken(accessToken, objectName ,  new AsyncHandler<ListData<UserCustomObjectData>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListData<UserCustomObjectData> response) {
  System.out.println(response.getCount());
 }
});

```

  




<h4 id="GetCustomObjectByRecordIDAndToken-get-">Custom Object by ObjectRecordId and Token (GET)</h4>
 This API is used to retrieve the Custom Object data for the specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-objectrecordid-and-token)

```java

String accessToken = "<accessToken>"; //Required
String objectName = "<objectName>"; //Required
String objectRecordId = "<objectRecordId>"; //Required

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.getCustomObjectByRecordIDAndToken(accessToken, objectName, objectRecordId ,  new AsyncHandler<UserCustomObjectData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserCustomObjectData response) {
  System.out.println(response.getCustomObject());
 }
});

```

  




<h4 id="GetCustomObjectByUid-get-">Custom Object By UID (GET)</h4>
 This API is used to retrieve all the custom objects by UID from cloud storage. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-uid)

```java

String objectName = "<objectName>"; //Required
String uid = "<uid>"; //Required

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.getCustomObjectByUid(objectName, uid ,  new AsyncHandler<ListData<UserCustomObjectData>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ListData<UserCustomObjectData> response) {
  System.out.println(response.getCount());
 }
});

```

  




<h4 id="GetCustomObjectByRecordID-get-">Custom Object by ObjectRecordId and UID (GET)</h4>
 This API is used to retrieve the Custom Object data for the specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-by-objectrecordid-and-uid)

```java

String objectName = "<objectName>"; //Required
String objectRecordId = "<objectRecordId>"; //Required
String uid = "<uid>"; //Required

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.getCustomObjectByRecordID(objectName, objectRecordId, uid ,  new AsyncHandler<UserCustomObjectData> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserCustomObjectData response) {
  System.out.println(response.getCustomObject());
 }
});

```

  




<h4 id="DeleteCustomObjectByToken-delete-">Custom Object Delete by Record Id And Token (DELETE)</h4>
 This API is used to remove the specified Custom Object data using ObjectRecordId of a specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-delete-by-objectrecordid-and-token)

```java

String accessToken = "<accessToken>"; //Required
String objectName = "<objectName>"; //Required
String objectRecordId = "<objectRecordId>"; //Required

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.deleteCustomObjectByToken(accessToken, objectName, objectRecordId ,  new AsyncHandler<DeleteResponse> (){

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

  




<h4 id="DeleteCustomObjectByRecordID-delete-">Account Delete Custom Object by ObjectRecordId (DELETE)</h4>
 This API is used to remove the specified Custom Object data using ObjectRecordId of specified account. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-object/custom-object-delete-by-objectrecordid-and-uid)

```java

String objectName = "<objectName>"; //Required
String objectRecordId = "<objectRecordId>"; //Required
String uid = "<uid>"; //Required

CustomObjectApi customObjectApi = new CustomObjectApi();
customObjectApi.deleteCustomObjectByRecordID(objectName, objectRecordId, uid ,  new AsyncHandler<DeleteResponse> (){

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




<h4 id="ResetPasswordByPhoneOTP-put-">Phone Reset Password by OTP (PUT)</h4>
 This API is used to reset the password [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-reset-password-by-otp)

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

  




<h4 id="PhoneVerificationByOTP-put-">Phone Verification OTP (PUT)</h4>
 This API is used to validate the verification code sent to verify a user's phone number [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-verify-otp)

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

  




<h4 id="PhoneVerificationOTPByAccessToken-put-">Phone Verification OTP by Token (PUT)</h4>
 This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-verify-otp-by-token)

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

  




<h4 id="UpdatePhoneNumber-put-">Phone Number Update (PUT)</h4>
 This API is used to update the login Phone Number of users [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-number-update)

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

  




<h4 id="LoginByPhone-post-">Phone Login (POST)</h4>
 This API retrieves a copy of the user data based on the Phone [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-login)

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

  




<h4 id="ForgotPasswordByPhoneOTP-post-">Phone Forgot Password by OTP (POST)</h4>
 This API is used to send the OTP to reset the account password. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-forgot-password-by-otp)

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

  




<h4 id="PhoneResendVerificationOTP-post-">Phone Resend Verification OTP (POST)</h4>
 This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-resend-otp)

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

  




<h4 id="PhoneResendVerificationOTPByToken-post-">Phone Resend Verification OTP By Token (POST)</h4>
 This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-resend-otp-by-token)

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

  




<h4 id="UserRegistrationByPhone-post-">Phone User Registration by SMS (POST)</h4>
 This API registers the new users into your Cloud Storage and triggers the phone verification process. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-user-registration-by-sms)

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

  




<h4 id="CheckPhoneNumberAvailability-get-">Phone Number Availability (GET)</h4>
 This API is used to check the Phone Number exists or not on your site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-number-availability)

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

  




<h4 id="RemovePhoneIDByAccessToken-delete-">Remove Phone ID by Access Token (DELETE)</h4>
 This API is used to delete the Phone ID on a user's account via the access token [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/remove-phone-id-by-access-token)

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

* PUT : [Update MFA Setting](#MFAUpdateSetting-put-)<br>
* PUT : [Update MFA by Access Token](#MFAUpdateByAccessToken-put-)<br>
* PUT : [MFA Update Phone Number by Token](#MFAUpdatePhoneNumberByToken-put-)<br>
* PUT : [MFA Validate OTP](#MFAValidateOTPByPhone-put-)<br>
* PUT : [MFA Validate Google Auth Code](#MFAValidateGoogleAuthCode-put-)<br>
* PUT : [MFA Validate Backup code](#MFAValidateBackupCode-put-)<br>
* PUT : [MFA Update Phone Number](#MFAUpdatePhoneNumber-put-)<br>
* POST : [MFA Email Login](#MFALoginByEmail-post-)<br>
* POST : [MFA UserName Login](#MFALoginByUserName-post-)<br>
* POST : [MFA Phone Login](#MFALoginByPhone-post-)<br>
* GET : [MFA Validate Access Token](#MFAConfigureByAccessToken-get-)<br>
* GET : [MFA Backup Code by Access Token](#MFABackupCodeByAccessToken-get-)<br>
* GET : [Reset Backup Code by Access Token](#MFAResetBackupCodeByAccessToken-get-)<br>
* GET : [MFA Resend Otp](#MFAResendOTP-get-)<br>
* GET : [MFA Backup Code by UID](#MFABackupCodeByUid-get-)<br>
* GET : [MFA Reset Backup Code by UID](#MFAResetBackupCodeByUid-get-)<br>
* DELETE : [MFA Reset Google Authenticator by Token](#MFAResetGoogleAuthByToken-delete-)<br>
* DELETE : [MFA Reset SMS Authenticator by Token](#MFAResetSMSAuthByToken-delete-)<br>
* DELETE : [MFA Reset SMS Authenticator By UID](#MFAResetSMSAuthenticatorByUid-delete-)<br>
* DELETE : [MFA Reset Google Authenticator By UID](#MFAResetGoogleAuthenticatorByUid-delete-)<br>




<h4 id="MFAUpdateSetting-put-">Update MFA Setting (PUT)</h4>
 This API is used to trigger the Multi-factor authentication settings after login for secure actions [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/update-mfa-setting/)

```java

String accessToken = "<accessToken>"; //Required
MultiFactorAuthModelWithLockout multiFactorAuthModelWithLockout = new MultiFactorAuthModelWithLockout(); //Required
multiFactorAuthModelWithLockout.setOtp("otp"); 
String fields = null; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaUpdateSetting(accessToken,  multiFactorAuthModelWithLockout, fields ,  new AsyncHandler<Identity> (){

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

  




<h4 id="MFAUpdateByAccessToken-put-">Update MFA by Access Token (PUT)</h4>
 This API is used to Enable Multi-factor authentication by access token on user login [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/update-mfa-by-access-token/)

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

  




<h4 id="MFAUpdatePhoneNumberByToken-put-">MFA Update Phone Number by Token (PUT)</h4>
 This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number-by-token/)

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

  




<h4 id="MFAValidateOTPByPhone-put-">MFA Validate OTP (PUT)</h4>
 This API is used to login via Multi-factor authentication by passing the One Time Password received via SMS [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-validate-otp/)

```java

MultiFactorAuthModelWithLockout multiFactorAuthModelWithLockout = new MultiFactorAuthModelWithLockout(); //Required
multiFactorAuthModelWithLockout.setOtp("otp"); 
String secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
String fields = null; //Optional
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaValidateOTPByPhone( multiFactorAuthModelWithLockout, secondFactorAuthenticationToken, fields, smsTemplate2FA ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h4 id="MFAValidateGoogleAuthCode-put-">MFA Validate Google Auth Code (PUT)</h4>
 This API is used to login via Multi-factor-authentication by passing the google authenticator code. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-validate-google-auth-code/)

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

  




<h4 id="MFAValidateBackupCode-put-">MFA Validate Backup code (PUT)</h4>
 This API is used to validate the backup code provided by the user and if valid, we return an access token allowing the user to login incases where Multi-factor authentication (MFA) is enabled and the secondary factor is unavailable. When a user initially downloads the Backup codes, We generate 10 codes, each code can only be consumed once. if any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-validate-backup-code/)

```java

MultiFactorAuthModelByBackupCode multiFactorAuthModelByBackupCode = new MultiFactorAuthModelByBackupCode(); //Required
multiFactorAuthModelByBackupCode.setBackupCode("backupCode"); 
String secondFactorAuthenticationToken = "<secondFactorAuthenticationToken>"; //Required
String fields = null; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaValidateBackupCode( multiFactorAuthModelByBackupCode, secondFactorAuthenticationToken, fields ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h4 id="MFAUpdatePhoneNumber-put-">MFA Update Phone Number (PUT)</h4>
 This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number/)

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

  




<h4 id="MFALoginByEmail-post-">MFA Email Login (POST)</h4>
 This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-email-login)

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

  




<h4 id="MFALoginByUserName-post-">MFA UserName Login (POST)</h4>
 This API can be used to login by username on a Multi-factor authentication enabled LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-user-name-login)

```java

String password = "<password>"; //Required
String username = "<username>"; //Required
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaLoginByUserName(password, username, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl ,  new AsyncHandler<MultiFactorAuthenticationResponse<Identity>> (){

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

  




<h4 id="MFALoginByPhone-post-">MFA Phone Login (POST)</h4>
 This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-phone-login)

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

  




<h4 id="MFAConfigureByAccessToken-get-">MFA Validate Access Token (GET)</h4>
 This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/mfa-validate-access-token/)

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

  




<h4 id="MFABackupCodeByAccessToken-get-">MFA Backup Code by Access Token (GET)</h4>
 This API is used to get a set of backup codes via access token to allow the user login on a site that has Multi-factor Authentication enabled in the event that the user does not have a secondary factor available. We generate 10 codes, each code can only be consumed once. If any user attempts to go over the number of invalid login attempts configured in the Dashboard then the account gets blocked automatically [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-backup-code-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaBackupCodeByAccessToken(accessToken ,  new AsyncHandler<BackupCodeResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(BackupCodeResponse response) {
  System.out.println(response.getBackUpCodes());
 }
});

```

  




<h4 id="MFAResetBackupCodeByAccessToken-get-">Reset Backup Code by Access Token (GET)</h4>
 API is used to reset the backup codes on a given account via the access token. This API call will generate 10 new codes, each code can only be consumed once [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-reset-backup-code-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaResetBackupCodeByAccessToken(accessToken ,  new AsyncHandler<BackupCodeResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(BackupCodeResponse response) {
  System.out.println(response.getBackUpCodes());
 }
});

```

  




<h4 id="MFAResendOTP-get-">MFA Resend Otp (GET)</h4>
 This API is used to resending the verification OTP to the provided phone number [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/resend-twofactorauthentication-otp/)

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

  




<h4 id="MFABackupCodeByUid-get-">MFA Backup Code by UID (GET)</h4>
 This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-backup-code-by-uid/)

```java

String uid = "<uid>"; //Required

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaBackupCodeByUid(uid ,  new AsyncHandler<BackupCodeResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(BackupCodeResponse response) {
  System.out.println(response.getBackUpCodes());
 }
});

```

  




<h4 id="MFAResetBackupCodeByUid-get-">MFA Reset Backup Code by UID (GET)</h4>
 This API is used to reset the backup codes on a given account via the UID. This API call will generate 10 new codes, each code can only be consumed once. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/backup-codes/mfa-reset-backup-code-by-uid/)

```java

String uid = "<uid>"; //Required

MultiFactorAuthenticationApi multiFactorAuthenticationApi = new MultiFactorAuthenticationApi();
multiFactorAuthenticationApi.mfaResetBackupCodeByUid(uid ,  new AsyncHandler<BackupCodeResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(BackupCodeResponse response) {
  System.out.println(response.getBackUpCodes());
 }
});

```

  




<h4 id="MFAResetGoogleAuthByToken-delete-">MFA Reset Google Authenticator by Token (DELETE)</h4>
 This API Resets the Google Authenticator configurations on a given account via the access token [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-reset-google-authenticator-by-token/)

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

  




<h4 id="MFAResetSMSAuthByToken-delete-">MFA Reset SMS Authenticator by Token (DELETE)</h4>
 This API resets the SMS Authenticator configurations on a given account via the access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-token/)

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

  




<h4 id="MFAResetSMSAuthenticatorByUid-delete-">MFA Reset SMS Authenticator By UID (DELETE)</h4>
 This API resets the SMS Authenticator configurations on a given account via the UID. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-uid/)

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

  




<h4 id="MFAResetGoogleAuthenticatorByUid-delete-">MFA Reset Google Authenticator By UID (DELETE)</h4>
 This API resets the Google Authenticator configurations on a given account via the UID. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-reset-google-authenticator-by-uid/)

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

  







### PINAuthentication API


List of APIs in this Section:<br>

* PUT : [Reset PIN By ResetToken](#ResetPINByResetToken-put-)<br>
* PUT : [Reset PIN By SecurityAnswer And Email](#ResetPINByEmailAndSecurityAnswer-put-)<br>
* PUT : [Reset PIN By SecurityAnswer And Username](#ResetPINByUsernameAndSecurityAnswer-put-)<br>
* PUT : [Reset PIN By SecurityAnswer And Phone](#ResetPINByPhoneAndSecurityAnswer-put-)<br>
* PUT : [Change PIN By Token](#ChangePINByAccessToken-put-)<br>
* PUT : [Reset PIN by Phone and OTP](#ResetPINByPhoneAndOtp-put-)<br>
* PUT : [Reset PIN by Email and OTP](#ResetPINByEmailAndOtp-put-)<br>
* PUT : [Reset PIN by Username and OTP](#ResetPINByUsernameAndOtp-put-)<br>
* POST : [PIN Login](#PINLogin-post-)<br>
* POST : [Forgot PIN By Email](#SendForgotPINEmailByEmail-post-)<br>
* POST : [Forgot PIN By UserName](#SendForgotPINEmailByUsername-post-)<br>
* POST : [Forgot PIN By Phone](#SendForgotPINSMSByPhone-post-)<br>
* POST : [Set PIN By PinAuthToken](#SetPINByPinAuthToken-post-)<br>
* GET : [Invalidate PIN Session Token](#InValidatePinSessionToken-get-)<br>




<h4 id="ResetPINByResetToken-put-">Reset PIN By ResetToken (PUT)</h4>
 This API is used to reset pin using reset token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-resettoken/)

```java

ResetPINByResetToken resetPINByResetToken = new ResetPINByResetToken(); //Required
resetPINByResetToken.setPIN("pin"); 
resetPINByResetToken.setResetToken("resetToken"); 

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.resetPINByResetToken( resetPINByResetToken ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="ResetPINByEmailAndSecurityAnswer-put-">Reset PIN By SecurityAnswer And Email (PUT)</h4>
 This API is used to reset pin using security question answer and email. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-email/)

```java

ResetPINBySecurityQuestionAnswerAndEmailModel resetPINBySecurityQuestionAnswerAndEmailModel = new ResetPINBySecurityQuestionAnswerAndEmailModel(); //Required
resetPINBySecurityQuestionAnswerAndEmailModel.setEmail("email"); 
resetPINBySecurityQuestionAnswerAndEmailModel.setPIN("pin"); 
Map<String,String> securityAnswer= new HashMap<String,String> ();
securityAnswer.put("<security-qustion-id>", "<security-answer>" );
resetPINBySecurityQuestionAnswerAndEmailModel.setSecurityAnswer(securityAnswer); 

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.resetPINByEmailAndSecurityAnswer( resetPINBySecurityQuestionAnswerAndEmailModel ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="ResetPINByUsernameAndSecurityAnswer-put-">Reset PIN By SecurityAnswer And Username (PUT)</h4>
 This API is used to reset pin using security question answer and username. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-username/)

```java

ResetPINBySecurityQuestionAnswerAndUsernameModel resetPINBySecurityQuestionAnswerAndUsernameModel = new ResetPINBySecurityQuestionAnswerAndUsernameModel(); //Required
resetPINBySecurityQuestionAnswerAndUsernameModel.setPIN("pin"); 
Map<String,String> securityAnswer= new HashMap<String,String> ();
securityAnswer.put("<security-qustion-id>", "<security-answer>" );
resetPINBySecurityQuestionAnswerAndUsernameModel.setSecurityAnswer(securityAnswer); 
resetPINBySecurityQuestionAnswerAndUsernameModel.setUsername("username"); 

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.resetPINByUsernameAndSecurityAnswer( resetPINBySecurityQuestionAnswerAndUsernameModel ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="ResetPINByPhoneAndSecurityAnswer-put-">Reset PIN By SecurityAnswer And Phone (PUT)</h4>
 This API is used to reset pin using security question answer and phone. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-securityanswer-and-phone/)

```java

ResetPINBySecurityQuestionAnswerAndPhoneModel resetPINBySecurityQuestionAnswerAndPhoneModel = new ResetPINBySecurityQuestionAnswerAndPhoneModel(); //Required
resetPINBySecurityQuestionAnswerAndPhoneModel.setPhone("phone"); 
resetPINBySecurityQuestionAnswerAndPhoneModel.setPIN("pin"); 
Map<String,String> securityAnswer= new HashMap<String,String> ();
securityAnswer.put("<security-qustion-id>", "<security-answer>" );
resetPINBySecurityQuestionAnswerAndPhoneModel.setSecurityAnswer(securityAnswer); 

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.resetPINByPhoneAndSecurityAnswer( resetPINBySecurityQuestionAnswerAndPhoneModel ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="ChangePINByAccessToken-put-">Change PIN By Token (PUT)</h4>
 This API is used to change a user's PIN using access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/change-pin-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required
ChangePINModel changePINModel = new ChangePINModel(); //Required
changePINModel.setNewPIN("newPIN"); 
changePINModel.setOldPIN("oldPIN"); 

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.changePINByAccessToken(accessToken,  changePINModel ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="ResetPINByPhoneAndOtp-put-">Reset PIN by Phone and OTP (PUT)</h4>
 This API is used to reset pin using phoneId and OTP. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-phone-and-otp/)

```java

ResetPINByPhoneAndOTPModel resetPINByPhoneAndOTPModel = new ResetPINByPhoneAndOTPModel(); //Required
resetPINByPhoneAndOTPModel.setOtp("otp"); 
resetPINByPhoneAndOTPModel.setPhone("phone"); 
resetPINByPhoneAndOTPModel.setPIN("pin"); 

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.resetPINByPhoneAndOtp( resetPINByPhoneAndOTPModel ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="ResetPINByEmailAndOtp-put-">Reset PIN by Email and OTP (PUT)</h4>
 This API is used to reset pin using email and OTP. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-email-and-otp/)

```java

ResetPINByEmailAndOtpModel resetPINByEmailAndOtpModel = new ResetPINByEmailAndOtpModel(); //Required
resetPINByEmailAndOtpModel.setEmail("email"); 
resetPINByEmailAndOtpModel.setOtp("otp"); 
resetPINByEmailAndOtpModel.setPIN("pin"); 

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.resetPINByEmailAndOtp( resetPINByEmailAndOtpModel ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="ResetPINByUsernameAndOtp-put-">Reset PIN by Username and OTP (PUT)</h4>
 This API is used to reset pin using username and OTP. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/reset-pin-by-username-and-otp/)

```java

ResetPINByUsernameAndOtpModel resetPINByUsernameAndOtpModel = new ResetPINByUsernameAndOtpModel(); //Required
resetPINByUsernameAndOtpModel.setOtp("otp"); 
resetPINByUsernameAndOtpModel.setPIN("pin"); 
resetPINByUsernameAndOtpModel.setUsername("username"); 

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.resetPINByUsernameAndOtp( resetPINByUsernameAndOtpModel ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="PINLogin-post-">PIN Login (POST)</h4>
 This API is used to login a user by pin and session token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/login-by-pin/)

```java

LoginByPINModel loginByPINModel = new LoginByPINModel(); //Required
loginByPINModel.setPIN("pin"); 
String sessionToken = "<sessionToken>"; //Required

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.pinLogin( loginByPINModel, sessionToken ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h4 id="SendForgotPINEmailByEmail-post-">Forgot PIN By Email (POST)</h4>
 This API sends the reset pin email to specified email address. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-email/)

```java

ForgotPINLinkByEmailModel forgotPINLinkByEmailModel = new ForgotPINLinkByEmailModel(); //Required
forgotPINLinkByEmailModel.setEmail("email"); 
String emailTemplate = "<emailTemplate>"; //Optional
String resetPINUrl = "<resetPINUrl>"; //Optional

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.sendForgotPINEmailByEmail( forgotPINLinkByEmailModel, emailTemplate, resetPINUrl ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="SendForgotPINEmailByUsername-post-">Forgot PIN By UserName (POST)</h4>
 This API sends the reset pin email using username. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-username/)

```java

ForgotPINLinkByUserNameModel forgotPINLinkByUserNameModel = new ForgotPINLinkByUserNameModel(); //Required
forgotPINLinkByUserNameModel.setUserName("userName"); 
String emailTemplate = "<emailTemplate>"; //Optional
String resetPINUrl = "<resetPINUrl>"; //Optional

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.sendForgotPINEmailByUsername( forgotPINLinkByUserNameModel, emailTemplate, resetPINUrl ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="SendForgotPINSMSByPhone-post-">Forgot PIN By Phone (POST)</h4>
 This API sends the OTP to specified phone number [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/forgot-pin-by-phone/)

```java

ForgotPINOtpByPhoneModel forgotPINOtpByPhoneModel = new ForgotPINOtpByPhoneModel(); //Required
forgotPINOtpByPhoneModel.setPhone("phone"); 
String smsTemplate = "<smsTemplate>"; //Optional

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.sendForgotPINSMSByPhone( forgotPINOtpByPhoneModel, smsTemplate ,  new AsyncHandler<UserProfilePostResponse<SMSResponseData>> (){

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

  




<h4 id="SetPINByPinAuthToken-post-">Set PIN By PinAuthToken (POST)</h4>
 This API is used to change a user's PIN using Pin Auth token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/set-pin-by-pinauthtoken/)

```java

PINRequiredModel pinRequiredModel = new PINRequiredModel(); //Required
pinRequiredModel.setPIN("pin"); 
String pinAuthToken = "<pinAuthToken>"; //Required

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.setPINByPinAuthToken( pinRequiredModel, pinAuthToken ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h4 id="InValidatePinSessionToken-get-">Invalidate PIN Session Token (GET)</h4>
 This API is used to invalidate pin session token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/pin-authentication/invalidate-pin-session-token/)

```java

String sessionToken = "<sessionToken>"; //Required

PINAuthenticationApi pinAuthenticationApi = new PINAuthenticationApi();
pinAuthenticationApi.inValidatePinSessionToken(sessionToken ,  new AsyncHandler<PostResponse> (){

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

  







### ReAuthentication API


List of APIs in this Section:<br>

* PUT : [Validate MFA by OTP](#MFAReAuthenticateByOTP-put-)<br>
* PUT : [Validate MFA by Backup Code](#MFAReAuthenticateByBackupCode-put-)<br>
* PUT : [Validate MFA by Google Authenticator Code](#MFAReAuthenticateByGoogleAuth-put-)<br>
* PUT : [Validate MFA by Password](#MFAReAuthenticateByPassword-put-)<br>
* PUT : [MFA Re-authentication by PIN](#VerifyPINAuthentication-put-)<br>
* POST : [Verify Multifactor OTP Authentication](#VerifyMultiFactorOtpReauthentication-post-)<br>
* POST : [Verify Multifactor Password Authentication](#VerifyMultiFactorPasswordReauthentication-post-)<br>
* POST : [Verify Multifactor PIN Authentication](#VerifyMultiFactorPINReauthentication-post-)<br>
* GET : [Multi Factor Re-Authenticate](#MFAReAuthenticate-get-)<br>




<h4 id="MFAReAuthenticateByOTP-put-">Validate MFA by OTP (PUT)</h4>
 This API is used to re-authenticate via Multi-factor authentication by passing the One Time Password received via SMS [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-by-otp/)

```java

String accessToken = "<accessToken>"; //Required
ReauthByOtpModel reauthByOtpModel = new ReauthByOtpModel(); //Required
reauthByOtpModel.setOtp("otp"); 

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.mfaReAuthenticateByOTP(accessToken,  reauthByOtpModel ,  new AsyncHandler<EventBasedMultiFactorAuthenticationToken> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(EventBasedMultiFactorAuthenticationToken response) {
  System.out.println(response.getExpireIn());
 }
});

```

  




<h4 id="MFAReAuthenticateByBackupCode-put-">Validate MFA by Backup Code (PUT)</h4>
 This API is used to re-authenticate by set of backup codes via access token on the site that has Multi-factor authentication enabled in re-authentication for the user that does not have the device [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-by-backup-code/)

```java

String accessToken = "<accessToken>"; //Required
ReauthByBackupCodeModel reauthByBackupCodeModel = new ReauthByBackupCodeModel(); //Required
reauthByBackupCodeModel.setBackupCode("backupCode"); 

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.mfaReAuthenticateByBackupCode(accessToken,  reauthByBackupCodeModel ,  new AsyncHandler<EventBasedMultiFactorAuthenticationToken> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(EventBasedMultiFactorAuthenticationToken response) {
  System.out.println(response.getExpireIn());
 }
});

```

  




<h4 id="MFAReAuthenticateByGoogleAuth-put-">Validate MFA by Google Authenticator Code (PUT)</h4>
 This API is used to re-authenticate via Multi-factor-authentication by passing the google authenticator code [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/re-auth-by-google-authenticator-code)

```java

String accessToken = "<accessToken>"; //Required
ReauthByGoogleAuthenticatorCodeModel reauthByGoogleAuthenticatorCodeModel = new ReauthByGoogleAuthenticatorCodeModel(); //Required
reauthByGoogleAuthenticatorCodeModel.setGoogleAuthenticatorCode("googleAuthenticatorCode"); 

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.mfaReAuthenticateByGoogleAuth(accessToken,  reauthByGoogleAuthenticatorCodeModel ,  new AsyncHandler<EventBasedMultiFactorAuthenticationToken> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(EventBasedMultiFactorAuthenticationToken response) {
  System.out.println(response.getExpireIn());
 }
});

```

  




<h4 id="MFAReAuthenticateByPassword-put-">Validate MFA by Password (PUT)</h4>
 This API is used to re-authenticate via Multi-factor-authentication by passing the password [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/re-auth-by-password)

```java

String accessToken = "<accessToken>"; //Required
PasswordEventBasedAuthModelWithLockout passwordEventBasedAuthModelWithLockout = new PasswordEventBasedAuthModelWithLockout(); //Required
passwordEventBasedAuthModelWithLockout.setPassword("password"); 
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.mfaReAuthenticateByPassword(accessToken,  passwordEventBasedAuthModelWithLockout, smsTemplate2FA ,  new AsyncHandler<EventBasedMultiFactorAuthenticationToken> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(EventBasedMultiFactorAuthenticationToken response) {
  System.out.println(response.getExpireIn());
 }
});

```

  




<h4 id="VerifyPINAuthentication-put-">MFA Re-authentication by PIN (PUT)</h4>
 This API is used to validate the triggered MFA authentication flow with a password. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/pin/re-auth-by-pin/)

```java

String accessToken = "<accessToken>"; //Required
PINAuthEventBasedAuthModelWithLockout pinAuthEventBasedAuthModelWithLockout = new PINAuthEventBasedAuthModelWithLockout(); //Required
pinAuthEventBasedAuthModelWithLockout.setPIN("pin"); 
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.verifyPINAuthentication(accessToken,  pinAuthEventBasedAuthModelWithLockout, smsTemplate2FA ,  new AsyncHandler<EventBasedMultiFactorAuthenticationToken> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(EventBasedMultiFactorAuthenticationToken response) {
  System.out.println(response.getExpireIn());
 }
});

```

  




<h4 id="VerifyMultiFactorOtpReauthentication-post-">Verify Multifactor OTP Authentication (POST)</h4>
 This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by OTP. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/mfa/re-auth-validate-mfa/)

```java

EventBasedMultiFactorToken eventBasedMultiFactorToken = new EventBasedMultiFactorToken(); //Required
eventBasedMultiFactorToken.setSecondFactorValidationToken("secondFactorValidationToken"); 
String uid = "<uid>"; //Required

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.verifyMultiFactorOtpReauthentication( eventBasedMultiFactorToken, uid ,  new AsyncHandler<PostValidationResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostValidationResponse response) {
  System.out.println(response.getIsValid());
 }
});

```

  




<h4 id="VerifyMultiFactorPasswordReauthentication-post-">Verify Multifactor Password Authentication (POST)</h4>
 This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by password. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/re-auth-validate-password/)

```java

EventBasedMultiFactorToken eventBasedMultiFactorToken = new EventBasedMultiFactorToken(); //Required
eventBasedMultiFactorToken.setSecondFactorValidationToken("secondFactorValidationToken"); 
String uid = "<uid>"; //Required

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.verifyMultiFactorPasswordReauthentication( eventBasedMultiFactorToken, uid ,  new AsyncHandler<PostValidationResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostValidationResponse response) {
  System.out.println(response.getIsValid());
 }
});

```

  




<h4 id="VerifyMultiFactorPINReauthentication-post-">Verify Multifactor PIN Authentication (POST)</h4>
 This API is used on the server-side to validate and verify the re-authentication token created by the MFA re-authentication API. This API checks re-authentications created by PIN. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/re-authentication/pin/re-auth-validate-pin/)

```java

EventBasedMultiFactorToken eventBasedMultiFactorToken = new EventBasedMultiFactorToken(); //Required
eventBasedMultiFactorToken.setSecondFactorValidationToken("secondFactorValidationToken"); 
String uid = "<uid>"; //Required

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.verifyMultiFactorPINReauthentication( eventBasedMultiFactorToken, uid ,  new AsyncHandler<PostValidationResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostValidationResponse response) {
  System.out.println(response.getIsValid());
 }
});

```

  




<h4 id="MFAReAuthenticate-get-">Multi Factor Re-Authenticate (GET)</h4>
 This API is used to trigger the Multi-Factor Autentication workflow for the provided access token [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/multi-factor-authentication/re-authentication/re-auth-trigger/)

```java

String accessToken = "<accessToken>"; //Required
String smsTemplate2FA = "<smsTemplate2FA>"; //Optional

ReAuthenticationApi reAuthenticationApi = new ReAuthenticationApi();
reAuthenticationApi.mfaReAuthenticate(accessToken, smsTemplate2FA ,  new AsyncHandler<MultiFactorAuthenticationSettingsResponse> (){

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

  







### ConsentManagement API


List of APIs in this Section:<br>

* PUT : [Update Consent By Access Token](#UpdateConsentProfileByAccessToken-put-)<br>
* POST : [Consent By ConsentToken](#SubmitConsentByConsentToken-post-)<br>
* POST : [Post Consent By Access Token](#SubmitConsentByAccessToken-post-)<br>
* GET : [Get Consent Logs By Uid](#GetConsentLogsByUid-get-)<br>
* GET : [Get Consent Log by Access Token](#GetConsentLogs-get-)<br>
* GET : [Get Verify Consent By Access Token](#VerifyConsentByAccessToken-get-)<br>




<h4 id="UpdateConsentProfileByAccessToken-put-">Update Consent By Access Token (PUT)</h4>
 This API is to update consents using access token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/update-consent-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required
ConsentUpdateModel consentUpdateModel = new ConsentUpdateModel(); //Required
List<ConsentDataModel> consents = new ArrayList < ConsentDataModel >();
ConsentDataModel consentDataModel = new ConsentDataModel(); 
consentDataModel.setConsentOptionId("consentOptionId");
consentDataModel.setIsAccepted(true);
consents.add(consentDataModel);
consentUpdateModel.setConsents(consents); 

ConsentManagementApi consentManagementApi = new ConsentManagementApi();
consentManagementApi.updateConsentProfileByAccessToken(accessToken,  consentUpdateModel ,  new AsyncHandler<ConsentProfile> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ConsentProfile response) {
  System.out.println(response.getAcceptedConsentVersions().get(0).getVersion());
 }
});

```

  




<h4 id="SubmitConsentByConsentToken-post-">Consent By ConsentToken (POST)</h4>
 This API is to submit consent form using consent token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-by-consent-token/)

```java

String consentToken = "<consentToken>"; //Required
ConsentSubmitModel consentSubmitModel = new ConsentSubmitModel(); //Required
List<ConsentDataModel> data = new ArrayList < ConsentDataModel >();
ConsentDataModel consentDataModel = new ConsentDataModel(); 
consentDataModel.setConsentOptionId("consentOptionId");
consentDataModel.setIsAccepted(true);
data.add(consentDataModel);
consentSubmitModel.setData(data); 
List<ConsentEventModel> events = new ArrayList < ConsentEventModel >();
ConsentEventModel consentEventModel = new ConsentEventModel(); 
consentEventModel.setEvent("event");
consentEventModel.setIsCustom(true);
events.add(consentEventModel);
consentSubmitModel.setEvents(events); 

ConsentManagementApi consentManagementApi = new ConsentManagementApi();
consentManagementApi.submitConsentByConsentToken(consentToken,  consentSubmitModel ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h4 id="SubmitConsentByAccessToken-post-">Post Consent By Access Token (POST)</h4>
 API to provide a way to end user to submit a consent form for particular event type. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required
ConsentSubmitModel consentSubmitModel = new ConsentSubmitModel(); //Required
List<ConsentDataModel> data = new ArrayList < ConsentDataModel >();
ConsentDataModel consentDataModel = new ConsentDataModel(); 
consentDataModel.setConsentOptionId("consentOptionId");
consentDataModel.setIsAccepted(true);
data.add(consentDataModel);
consentSubmitModel.setData(data); 
List<ConsentEventModel> events = new ArrayList < ConsentEventModel >();
ConsentEventModel consentEventModel = new ConsentEventModel(); 
consentEventModel.setEvent("event");
consentEventModel.setIsCustom(true);
events.add(consentEventModel);
consentSubmitModel.setEvents(events); 

ConsentManagementApi consentManagementApi = new ConsentManagementApi();
consentManagementApi.submitConsentByAccessToken(accessToken,  consentSubmitModel ,  new AsyncHandler<Identity> (){

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

  




<h4 id="GetConsentLogsByUid-get-">Get Consent Logs By Uid (GET)</h4>
 This API is used to get the Consent logs of the user. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-log-by-uid/)

```java

String uid = "<uid>"; //Required

ConsentManagementApi consentManagementApi = new ConsentManagementApi();
consentManagementApi.getConsentLogsByUid(uid ,  new AsyncHandler<ConsentLogsResponseModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ConsentLogsResponseModel response) {
  System.out.println(response.getConsentLogs().get(0).getId());
 }
});

```

  




<h4 id="GetConsentLogs-get-">Get Consent Log by Access Token (GET)</h4>
 This API is used to fetch consent logs. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/consent-log-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required

ConsentManagementApi consentManagementApi = new ConsentManagementApi();
consentManagementApi.getConsentLogs(accessToken ,  new AsyncHandler<ConsentLogsResponseModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ConsentLogsResponseModel response) {
  System.out.println(response.getConsentLogs().get(0).getId());
 }
});

```

  




<h4 id="VerifyConsentByAccessToken-get-">Get Verify Consent By Access Token (GET)</h4>
 This API is used to check if consent is submitted for a particular event or not. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/consent-management/verify-consent-by-access-token/)

```java

String accessToken = "<accessToken>"; //Required
String event = "<event>"; //Required
Boolean isCustom = true; //Required

ConsentManagementApi consentManagementApi = new ConsentManagementApi();
consentManagementApi.verifyConsentByAccessToken(accessToken, event, isCustom ,  new AsyncHandler<ConsentProfileValidResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ConsentProfileValidResponse response) {
  System.out.println(response.getConsentProfile().getConsents().get(0).getConsentOptionId());
 }
});

```

  







### SmartLogin API


List of APIs in this Section:<br>

* GET : [Smart Login Verify Token](#SmartLoginTokenVerification-get-)<br>
* GET : [Smart Login By Email](#SmartLoginByEmail-get-)<br>
* GET : [Smart Login By Username](#SmartLoginByUserName-get-)<br>
* GET : [Smart Login Ping](#SmartLoginPing-get-)<br>




<h4 id="SmartLoginTokenVerification-get-">Smart Login Verify Token (GET)</h4>
 This API verifies the provided token for Smart Login [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-verify-token/)

```java

String verificationToken = "<verificationToken>"; //Required
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

SmartLoginApi smartLoginApi = new SmartLoginApi();
smartLoginApi.smartLoginTokenVerification(verificationToken, welcomeEmailTemplate ,  new AsyncHandler<VerifiedResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(VerifiedResponse response) {
  System.out.println(response.getIsPosted());
 }
});

```S

  




<h4 id="SmartLoginByEmail-get-">Smart Login By Email (GET)</h4>
 This API sends a Smart Login link to the user's Email Id. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-by-email)

```java

String clientGuid = "<clientGuid>"; //Required
String email = "<email>"; //Required
String redirectUrl = "<redirectUrl>"; //Optional
String smartLoginEmailTemplate = "<smartLoginEmailTemplate>"; //Optional
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

SmartLoginApi smartLoginApi = new SmartLoginApi();
smartLoginApi.smartLoginByEmail(clientGuid, email, redirectUrl, smartLoginEmailTemplate, welcomeEmailTemplate ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="SmartLoginByUserName-get-">Smart Login By Username (GET)</h4>
 This API sends a Smart Login link to the user's Email Id. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-by-username)

```java

String clientGuid = "<clientGuid>"; //Required
String username = "<username>"; //Required
String redirectUrl = "<redirectUrl>"; //Optional
String smartLoginEmailTemplate = "<smartLoginEmailTemplate>"; //Optional
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

SmartLoginApi smartLoginApi = new SmartLoginApi();
smartLoginApi.smartLoginByUserName(clientGuid, username, redirectUrl, smartLoginEmailTemplate, welcomeEmailTemplate ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="SmartLoginPing-get-">Smart Login Ping (GET)</h4>
 This API is used to check if the Smart Login link has been clicked or not [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/smart-login/smart-login-ping)

```java

String clientGuid = "<clientGuid>"; //Required
String fields = null; //Optional

SmartLoginApi smartLoginApi = new SmartLoginApi();
smartLoginApi.smartLoginPing(clientGuid, fields ,  new AsyncHandler<AccessToken<Identity>> (){

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

  







### OneTouchLogin API


List of APIs in this Section:<br>

* PUT : [One Touch OTP Verification](#OneTouchLoginOTPVerification-put-)<br>
* POST : [One Touch Login by Email](#OneTouchLoginByEmail-post-)<br>
* POST : [One Touch Login by Phone](#OneTouchLoginByPhone-post-)<br>
* GET : [One Touch Email Verification](#OneTouchEmailVerification-get-)<br>
* GET : [One Touch Login Ping](#OneTouchLoginPing-get-)<br>




<h4 id="OneTouchLoginOTPVerification-put-">One Touch OTP Verification (PUT)</h4>
 This API is used to verify the otp for One Touch Login. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-otp-verification/)

```java

String otp = "<otp>"; //Required
String phone = "<phone>"; //Required
String fields = null; //Optional
String smsTemplate = "<smsTemplate>"; //Optional

OneTouchLoginApi oneTouchLoginApi = new OneTouchLoginApi();
oneTouchLoginApi.oneTouchLoginOTPVerification(otp, phone, fields, smsTemplate ,  new AsyncHandler<AccessToken<UserProfile>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(AccessToken<UserProfile> response) {
  System.out.println(response.getAccess_Token());
 }
});

```

  




<h4 id="OneTouchLoginByEmail-post-">One Touch Login by Email (POST)</h4>
 This API is used to send a link to a specified email for a frictionless login/registration [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-by-email-captcha/)

```java

OneTouchLoginByEmailModel oneTouchLoginByEmailModel = new OneTouchLoginByEmailModel(); //Required
oneTouchLoginByEmailModel.setClientguid("clientguid"); 
oneTouchLoginByEmailModel.setEmail("email"); 
oneTouchLoginByEmailModel.setG_Recaptcha_Response("g-recaptcha-response"); 
String oneTouchLoginEmailTemplate = "<oneTouchLoginEmailTemplate>"; //Optional
String redirecturl = "<redirecturl>"; //Optional
String welcomeemailtemplate = "<welcomeemailtemplate>"; //Optional

OneTouchLoginApi oneTouchLoginApi = new OneTouchLoginApi();
oneTouchLoginApi.oneTouchLoginByEmail( oneTouchLoginByEmailModel, oneTouchLoginEmailTemplate, redirecturl, welcomeemailtemplate ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="OneTouchLoginByPhone-post-">One Touch Login by Phone (POST)</h4>
 This API is used to send one time password to a given phone number for a frictionless login/registration. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-by-phone-captcha/)

```java

OneTouchLoginByPhoneModel oneTouchLoginByPhoneModel = new OneTouchLoginByPhoneModel(); //Required
oneTouchLoginByPhoneModel.setG_Recaptcha_Response("g-recaptcha-response"); 
oneTouchLoginByPhoneModel.setPhone("phone"); 
String smsTemplate = "<smsTemplate>"; //Optional

OneTouchLoginApi oneTouchLoginApi = new OneTouchLoginApi();
oneTouchLoginApi.oneTouchLoginByPhone( oneTouchLoginByPhoneModel, smsTemplate ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="OneTouchEmailVerification-get-">One Touch Email Verification (GET)</h4>
 This API verifies the provided token for One Touch Login [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-email-verification)

```java

String verificationToken = "<verificationToken>"; //Required
String welcomeEmailTemplate = "<welcomeEmailTemplate>"; //Optional

OneTouchLoginApi oneTouchLoginApi = new OneTouchLoginApi();
oneTouchLoginApi.oneTouchEmailVerification(verificationToken, welcomeEmailTemplate ,  new AsyncHandler<VerifiedResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(VerifiedResponse response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h4 id="OneTouchLoginPing-get-">One Touch Login Ping (GET)</h4>
 This API is used to check if the One Touch Login link has been clicked or not. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/one-touch-login/one-touch-login-ping/)

```java

String clientGuid = "<clientGuid>"; //Required
String fields = null; //Optional

OneTouchLoginApi oneTouchLoginApi = new OneTouchLoginApi();
oneTouchLoginApi.oneTouchLoginPing(clientGuid, fields ,  new AsyncHandler<AccessToken<Identity>> (){

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

  







### PasswordLessLogin API


List of APIs in this Section:<br>

* PUT : [Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br>
* GET : [Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br>
* GET : [Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br>
* GET : [Passwordless Login By UserName](#PasswordlessLoginByUserName-get-)<br>
* GET : [Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>




<h4 id="PasswordlessLoginPhoneVerification-put-">Passwordless Login Phone Verification (PUT)</h4>
 This API verifies an account by OTP and allows the customer to login. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-phone-verification)

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

  




<h4 id="PasswordlessLoginByPhone-get-">Passwordless Login by Phone (GET)</h4>
 API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-phone)

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

  




<h4 id="PasswordlessLoginByEmail-get-">Passwordless Login By Email (GET)</h4>
 This API is used to send a Passwordless Login verification link to the provided Email ID [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-email)

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

  




<h4 id="PasswordlessLoginByUserName-get-">Passwordless Login By UserName (GET)</h4>
 This API is used to send a Passwordless Login Verification Link to a customer by providing their UserName [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-username)

```java

String username = "<username>"; //Required
String passwordLessLoginTemplate = "<passwordLessLoginTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

PasswordLessLoginApi passwordLessLoginApi = new PasswordLessLoginApi();
passwordLessLoginApi.passwordlessLoginByUserName(username, passwordLessLoginTemplate, verificationUrl ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="PasswordlessLoginVerification-get-">Passwordless Login Verification (GET)</h4>
 This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/passwordless-login/passwordless-login-verification)

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

  







### Configuration API


List of APIs in this Section:<br>

* GET : [Get Server Time](#GetServerInfo-get-)<br>
* GET : [Get Configurations](#getConfigurations-get-)<br>



<h4 id="GetServerInfo-get-">Get Server Time (GET)</h4>
 This API allows you to query your LoginRadius account for basic server information and server time information which is useful when generating an SOTT token. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/configuration/get-server-time/)

```java

Integer timeDifference = 0; //Optional

ConfigurationApi configurationApi = new ConfigurationApi();
configurationApi.getServerInfo(timeDifference ,  new AsyncHandler<ServiceInfoModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(ServiceInfoModel response) {
  System.out.println(response.getCurrentTime());
 }
});

```
<h4 id="getConfigurations-get-"> Get Configuration (GET)</h4>
 This API is used to get the configurations which are set in the LoginRadius Admin Console for a particular LoginRadius site/environment. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/configuration/get-configurations)
  

```java

ConfigurationApi configurationApi = new ConfigurationApi();
configurationApi.getConfigurations(new AsyncHandler<ConfigResponseModel>() {

@Override
public void onFailure(ErrorResponse errorResponse) {
System.out.println(errorResponse.getDescription());

}

@Override
public void onSuccess(ConfigResponseModel response) {
System.out.println(response.getAppName());

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




<h4 id="AssignRolesByUid-put-">Assign Roles by UID (PUT)</h4>
 This API is used to assign your desired roles to a given user. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/assign-roles-by-uid/)

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

  




<h4 id="UpdateRoleContextByUid-put-">Upsert Context (PUT)</h4>
 This API creates a Context with a set of Roles [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/upsert-context)

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

  




<h4 id="AddRolePermissions-put-">Add Permissions to Role (PUT)</h4>
 This API is used to add permissions to a given role. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/add-permissions-to-role)

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

  




<h4 id="CreateRoles-post-">Roles Create (POST)</h4>
 This API creates a role with permissions. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/roles-create)

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

  




<h4 id="GetRolesByUid-get-">Roles by UID (GET)</h4>
 API is used to retrieve all the assigned roles of a particular User. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/get-roles-by-uid)

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

  




<h4 id="GetRoleContextByUid-get-">Get Context with Roles and Permissions (GET)</h4>
 This API Gets the contexts that have been configured and the associated roles and permissions. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/get-context)

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

  




<h4 id="GetRoleContextByContextName-get-">Role Context profile (GET)</h4>
 The API is used to retrieve role context by the context name. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/role-context-profile/)

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

  




<h4 id="GetRolesList-get-">Roles List (GET)</h4>
 This API retrieves the complete list of created roles with permissions of your app. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/roles-list)

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

  




<h4 id="UnassignRolesByUid-delete-">Unassign Roles by UID (DELETE)</h4>
 This API is used to unassign roles from a user. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/unassign-roles-by-uid)

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

  




<h4 id="DeleteRoleContextByUid-delete-">Delete Role Context (DELETE)</h4>
 This API Deletes the specified Role Context [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-context)

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

  




<h4 id="DeleteRolesFromRoleContextByUid-delete-">Delete Role from Context (DELETE)</h4>
 This API Deletes the specified Role from a Context. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-role-from-context/)

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

  




<h4 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-">Delete Additional Permission from Context (DELETE)</h4>
 This API Deletes Additional Permissions from Context. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-permissions-from-context)

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

  




<h4 id="DeleteRole-delete-">Account Delete Role (DELETE)</h4>
 This API is used to delete the role. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/delete-role)

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

  




<h4 id="RemoveRolePermissions-delete-">Remove Permissions (DELETE)</h4>
 API is used to remove permissions from a role. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/roles-management/remove-permissions)

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

  







### CustomRegistrationData API


List of APIs in this Section:<br>

* PUT : [Update Registration Data](#UpdateRegistrationData-put-)<br>
* POST : [Validate secret code](#ValidateRegistrationDataCode-post-)<br>
* POST : [Add Registration Data](#AddRegistrationData-post-)<br>
* GET : [Auth Get Registration Data Server](#AuthGetRegistrationData-get-)<br>
* GET : [Get Registration Data](#GetRegistrationData-get-)<br>
* DELETE : [Delete Registration Data](#DeleteRegistrationData-delete-)<br>
* DELETE : [Delete All Records by Datasource](#DeleteAllRecordsByDataSource-delete-)<br>




<h4 id="UpdateRegistrationData-put-">Update Registration Data (PUT)</h4>
 This API allows you to update a dropdown item [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/update-registration-data)

```java

RegistrationDataUpdateModel registrationDataUpdateModel = new RegistrationDataUpdateModel(); //Required
registrationDataUpdateModel.setIsActive(true); 
registrationDataUpdateModel.setKey("key"); 
registrationDataUpdateModel.setType("type"); 
registrationDataUpdateModel.setValue("value"); 
String recordId = "<recordId>"; //Required

CustomRegistrationDataApi customRegistrationDataApi = new CustomRegistrationDataApi();
customRegistrationDataApi.updateRegistrationData( registrationDataUpdateModel, recordId ,  new AsyncHandler<UserProfilePostResponse<RegistrationDataField>> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(UserProfilePostResponse<RegistrationDataField> response) {
  System.out.println(response.getIsPosted());
 }
});

```

  




<h4 id="ValidateRegistrationDataCode-post-">Validate secret code (POST)</h4>
 This API allows you to validate code for a particular dropdown member. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/validate-code)

```java

String code = "<code>"; //Required
String recordId = "<recordId>"; //Required

CustomRegistrationDataApi customRegistrationDataApi = new CustomRegistrationDataApi();
customRegistrationDataApi.validateRegistrationDataCode(code, recordId ,  new AsyncHandler<PostValidationResponse> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(PostValidationResponse response) {
  System.out.println(response.getIsValid());
 }
});

```

  




<h4 id="AddRegistrationData-post-">Add Registration Data (POST)</h4>
 This API allows you to fill data into a dropdown list which you have created for user Registration. For more details on how to use this API please see our Custom Registration Data Overview [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/add-registration-data)

```java

RegistrationDataCreateModelList registrationDataCreateModelList = new RegistrationDataCreateModelList(); //Required
List<RegistrationDataCreateModel> data = new ArrayList < RegistrationDataCreateModel >();
RegistrationDataCreateModel registrationDataCreateModel = new RegistrationDataCreateModel(); 
registrationDataCreateModel.setCode("code");
registrationDataCreateModel.setIsActive(true);
registrationDataCreateModel.setKey("key");
registrationDataCreateModel.setParentId("parentId");
registrationDataCreateModel.setType("type");
registrationDataCreateModel.setValue("value");
data.add(registrationDataCreateModel);
registrationDataCreateModelList.setData(data); 

CustomRegistrationDataApi customRegistrationDataApi = new CustomRegistrationDataApi();
customRegistrationDataApi.addRegistrationData( registrationDataCreateModelList ,  new AsyncHandler<PostResponse> (){

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

  




<h4 id="AuthGetRegistrationData-get-">Auth Get Registration Data Server (GET)</h4>
 This API is used to retrieve dropdown data. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/auth-get-registration-data)

```java

String type = "<type>"; //Required
Integer limit = 0; //Optional
String parentId = "<parentId>"; //Optional
Integer skip = 0; //Optional

CustomRegistrationDataApi customRegistrationDataApi = new CustomRegistrationDataApi();
customRegistrationDataApi.authGetRegistrationData(type, limit, parentId, skip ,  new AsyncHandler<RegistrationDataField[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(RegistrationDataField[] response) {
  System.out.println(response[0].getCode());
 }
});

```

  




<h4 id="GetRegistrationData-get-">Get Registration Data (GET)</h4>
 This API is used to retrieve dropdown data. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/get-registration-data)

```java

String type = "<type>"; //Required
Integer limit = 0; //Optional
String parentId = "<parentId>"; //Optional
Integer skip = 0; //Optional

CustomRegistrationDataApi customRegistrationDataApi = new CustomRegistrationDataApi();
customRegistrationDataApi.getRegistrationData(type, limit, parentId, skip ,  new AsyncHandler<RegistrationDataField[]> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(RegistrationDataField[] response) {
  System.out.println(response[0].getCode());
 }
});

```

  




<h4 id="DeleteRegistrationData-delete-">Delete Registration Data (DELETE)</h4>
 This API allows you to delete an item from a dropdown list. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/delete-registration-data)

```java

String recordId = "<recordId>"; //Required

CustomRegistrationDataApi customRegistrationDataApi = new CustomRegistrationDataApi();
customRegistrationDataApi.deleteRegistrationData(recordId ,  new AsyncHandler<DeleteResponse> (){

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

  




<h4 id="DeleteAllRecordsByDataSource-delete-">Delete All Records by Datasource (DELETE)</h4>
 This API allows you to delete all records contained in a datasource. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/custom-registration-data/delete-all-records-by-datasource)

```java

String type = "<type>"; //Required

CustomRegistrationDataApi customRegistrationDataApi = new CustomRegistrationDataApi();
customRegistrationDataApi.deleteAllRecordsByDataSource(type ,  new AsyncHandler<DeleteResponse> (){

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

  







### RiskBasedAuthentication API


List of APIs in this Section:<br>

* POST : [Risk Based Authentication Login by Email](#RBALoginByEmail-post-)<br>
* POST : [Risk Based Authentication Login by Username](#RBALoginByUserName-post-)<br>
* POST : [Risk Based Authentication Phone Login](#RBALoginByPhone-post-)<br>




<h4 id="RBALoginByEmail-post-">Risk Based Authentication Login by Email (POST)</h4>
 This API retrieves a copy of the user data based on the Email [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-email)

```java

EmailAuthenticationModel emailAuthenticationModel = new EmailAuthenticationModel(); //Required
emailAuthenticationModel.setEmail("email"); 
emailAuthenticationModel.setPassword("password"); 
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
Boolean passwordDelegation = true; //Optional
String passwordDelegationApp = "<passwordDelegationApp>"; //Optional
String rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
String rbaBrowserSmsTemplate = "<rbaBrowserSmsTemplate>"; //Optional
String rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
String rbaCitySmsTemplate = "<rbaCitySmsTemplate>"; //Optional
String rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
String rbaCountrySmsTemplate = "<rbaCountrySmsTemplate>"; //Optional
String rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional
String rbaIpSmsTemplate = "<rbaIpSmsTemplate>"; //Optional
String rbaOneclickEmailTemplate = "<rbaOneclickEmailTemplate>"; //Optional
String rbaOTPSmsTemplate = "<rbaOTPSmsTemplate>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

RiskBasedAuthenticationApi riskBasedAuthenticationApi = new RiskBasedAuthenticationApi();
riskBasedAuthenticationApi.rbaLoginByEmail( emailAuthenticationModel, emailTemplate, fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate, rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate, rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate, rbaOTPSmsTemplate, smsTemplate, verificationUrl ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h4 id="RBALoginByUserName-post-">Risk Based Authentication Login by Username (POST)</h4>
 This API retrieves a copy of the user data based on the Username [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/authentication/auth-login-by-username)

```java

UserNameAuthenticationModel userNameAuthenticationModel = new UserNameAuthenticationModel(); //Required
userNameAuthenticationModel.setPassword("password"); 
userNameAuthenticationModel.setUsername("username"); 
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
Boolean passwordDelegation = true; //Optional
String passwordDelegationApp = "<passwordDelegationApp>"; //Optional
String rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
String rbaBrowserSmsTemplate = "<rbaBrowserSmsTemplate>"; //Optional
String rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
String rbaCitySmsTemplate = "<rbaCitySmsTemplate>"; //Optional
String rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
String rbaCountrySmsTemplate = "<rbaCountrySmsTemplate>"; //Optional
String rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional
String rbaIpSmsTemplate = "<rbaIpSmsTemplate>"; //Optional
String rbaOneclickEmailTemplate = "<rbaOneclickEmailTemplate>"; //Optional
String rbaOTPSmsTemplate = "<rbaOTPSmsTemplate>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

RiskBasedAuthenticationApi riskBasedAuthenticationApi = new RiskBasedAuthenticationApi();
riskBasedAuthenticationApi.rbaLoginByUserName( userNameAuthenticationModel, emailTemplate, fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate, rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate, rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate, rbaOTPSmsTemplate, smsTemplate, verificationUrl ,  new AsyncHandler<AccessToken<Identity>> (){

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

  




<h4 id="RBALoginByPhone-post-">Risk Based Authentication Phone Login (POST)</h4>
 This API retrieves a copy of the user data based on the Phone [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/phone-authentication/phone-login)

```java

PhoneAuthenticationModel phoneAuthenticationModel = new PhoneAuthenticationModel(); //Required
phoneAuthenticationModel.setPassword("password"); 
phoneAuthenticationModel.setPhone("phone"); 
String emailTemplate = "<emailTemplate>"; //Optional
String fields = null; //Optional
String loginUrl = "<loginUrl>"; //Optional
Boolean passwordDelegation = true; //Optional
String passwordDelegationApp = "<passwordDelegationApp>"; //Optional
String rbaBrowserEmailTemplate = "<rbaBrowserEmailTemplate>"; //Optional
String rbaBrowserSmsTemplate = "<rbaBrowserSmsTemplate>"; //Optional
String rbaCityEmailTemplate = "<rbaCityEmailTemplate>"; //Optional
String rbaCitySmsTemplate = "<rbaCitySmsTemplate>"; //Optional
String rbaCountryEmailTemplate = "<rbaCountryEmailTemplate>"; //Optional
String rbaCountrySmsTemplate = "<rbaCountrySmsTemplate>"; //Optional
String rbaIpEmailTemplate = "<rbaIpEmailTemplate>"; //Optional
String rbaIpSmsTemplate = "<rbaIpSmsTemplate>"; //Optional
String rbaOneclickEmailTemplate = "<rbaOneclickEmailTemplate>"; //Optional
String rbaOTPSmsTemplate = "<rbaOTPSmsTemplate>"; //Optional
String smsTemplate = "<smsTemplate>"; //Optional
String verificationUrl = "<verificationUrl>"; //Optional

RiskBasedAuthenticationApi riskBasedAuthenticationApi = new RiskBasedAuthenticationApi();
riskBasedAuthenticationApi.rbaLoginByPhone( phoneAuthenticationModel, emailTemplate, fields, loginUrl, passwordDelegation, passwordDelegationApp, rbaBrowserEmailTemplate, rbaBrowserSmsTemplate, rbaCityEmailTemplate, rbaCitySmsTemplate, rbaCountryEmailTemplate, rbaCountrySmsTemplate, rbaIpEmailTemplate, rbaIpSmsTemplate, rbaOneclickEmailTemplate, rbaOTPSmsTemplate, smsTemplate, verificationUrl ,  new AsyncHandler<AccessToken<Identity>> (){

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

  







### Sott API


List of APIs in this Section:<br>

* GET : [Generate SOTT](#GenerateSott-get-)<br>




<h4 id="GenerateSott-get-">Generate SOTT (GET)</h4>
 This API allows you to generate SOTT with a given expiration time. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/session/generate-sott-token)

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
* GET : [Get Access Token By Foursquare Access Token](#GetAccessTokenByFoursquareAccessToken-get-)<br>
* GET : [Access Token via Apple Id Code](#GetAccessTokenByAppleIdCode-get-)<br>
* GET : [Access Token via WeChat Code](#GetAccessTokenByWeChatCode-get-)<br>
* GET : [Access Token via Vkontakte Token](#GetAccessTokenByVkontakteAccessToken-get-)<br>
* GET : [Access Token via Google AuthCode](#GetAccessTokenByGoogleAuthCode-get-)<br>




<h4 id="GetAccessTokenByFacebookAccessToken-get-">Access Token via Facebook Token (GET)</h4>
 The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-facebook-token/)

```java

String fbAccessToken = "<fbAccessToken>"; //Required
String socialAppName = "<socialAppName>"; //Optional

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByFacebookAccessToken(fbAccessToken, socialAppName ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="GetAccessTokenByTwitterAccessToken-get-">Access Token via Twitter Token (GET)</h4>
 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-twitter-token)

```java

String twAccessToken = "<twAccessToken>"; //Required
String twTokenSecret = "<twTokenSecret>"; //Required
String socialAppName = "<socialAppName>"; //Optional

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret, socialAppName ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="GetAccessTokenByGoogleAccessToken-get-">Access Token via Google Token (GET)</h4>
 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-token)

```java

String googleAccessToken = "<googleAccessToken>"; //Required
String clientId = "<clientId>"; //Optional
String refreshToken = "<refreshToken>"; //Optional
String socialAppName = "<socialAppName>"; //Optional

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken, socialAppName ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="GetAccessTokenByGoogleJWTAccessToken-get-">Access Token using google JWT token for Native Mobile Login (GET)</h4>
 This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-googlejwt)

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

  




<h4 id="GetAccessTokenByLinkedinAccessToken-get-">Access Token via Linkedin Token (GET)</h4>
 The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-linkedin-token/)

```java

String lnAccessToken = "<lnAccessToken>"; //Required
String socialAppName = "<socialAppName>"; //Optional

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByLinkedinAccessToken(lnAccessToken, socialAppName ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="GetAccessTokenByFoursquareAccessToken-get-">Get Access Token By Foursquare Access Token (GET)</h4>
 The API is used to get LoginRadius access token by sending Foursquare's access token. It will be valid for the specific duration of time specified in the response. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-foursquare-token/)

```java

String fsAccessToken = "<fsAccessToken>"; //Required

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByFoursquareAccessToken(fsAccessToken ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="GetAccessTokenByAppleIdCode-get-">Access Token via Apple Id Code (GET)</h4>
 The API is used to get LoginRadius access token by sending a valid Apple ID OAuth Code. It will be valid for the specific duration of time specified in the response. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-apple-id-code)

```java

String code = "<code>"; //Required
String socialAppName = "<socialAppName>"; //Optional

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByAppleIdCode(code, socialAppName ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="GetAccessTokenByWeChatCode-get-">Access Token via WeChat Code (GET)</h4>
 This API is used to retrieve a LoginRadius access token by passing in a valid WeChat OAuth Code. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-wechat-code)

```java

String code = "<code>"; //Required

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByWeChatCode(code ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="GetAccessTokenByVkontakteAccessToken-get-">Access Token via Vkontakte Token (GET)</h4>
 The API is used to get LoginRadius access token by sending Vkontakte's access token. It will be valid for the specific duration of time specified in the response. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-vkontakte-token)

```java

String vkAccessToken = "<vkAccessToken>"; //Required

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByVkontakteAccessToken(vkAccessToken ,  new AsyncHandler<AccessTokenBase> (){

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

  




<h4 id="GetAccessTokenByGoogleAuthCode-get-">Access Token via Google AuthCode (GET)</h4>
 The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response. [More info](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-auth-code)

```java

String googleAuthcode = "<googleAuthcode>"; //Required
String socialAppName = "<socialAppName>"; //Optional

NativeSocialApi nativeSocialApi = new NativeSocialApi();
nativeSocialApi.getAccessTokenByGoogleAuthCode(googleAuthcode, socialAppName ,  new AsyncHandler<AccessTokenBase> (){

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




<h4 id="WebHookSubscribe-post-">Webhook Subscribe (POST)</h4>
 API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call. [More info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-subscribe)

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

  




<h4 id="GetWebHookSubscribedURLs-get-">Webhook Subscribed URLs (GET)</h4>
 This API is used to fatch all the subscribed URLs, for particular event [More info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-subscribed-urls)

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

  




<h4 id="WebhookTest-get-">Webhook Test (GET)</h4>
 API can be used to test a subscribed WebHook. [More info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-test)

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

  




<h4 id="WebHookUnsubscribe-delete-">WebHook Unsubscribe (DELETE)</h4>
 API can be used to unsubscribe a WebHook configured on your LoginRadius site. [More info](https://www.loginradius.com/docs/api/v2/integrations/webhooks/webhook-unsubscribe)

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

  






<br>






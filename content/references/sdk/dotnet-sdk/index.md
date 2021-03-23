---
title: "ASP.NET SDK Library"
tags: ["ASP.NET", "SDK"]
description: "This is a document detailing the LoginRadius ASP.NET SDK Library."
---

# ASP&#46;NET SDK

>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

This document describes how to start using the LoginRadius ASP&#46;NET SDK and its various features. You can get the SDK from [here](https://github.com/LoginRadius/dot-net-sdk).


> You must have &#46;NET 4.0 / &#46;NetStandard 1.3 or later installed.

For a more hands-on tutorial on setting up the SDK and using it in an ASP&#46;NET Core application to make LoginRadius API calls, check out our ASP&#46;NET Core [MVC](/tutorial/dotnetcore-mvc) or [Razor](/tutorial/dotnetcore-razor) guide.

## SDK Installation and Configuration

Run the following command in the NuGet Package Manager Console in your project:

```
PM> Install-Package LoginRadiusSDK.NET
```

In your ASP&#46;NET project, go to the `appsettings.json` file and add the following object to your JSON configuration:

```json
"loginradius": {
    "apiKey": "__API_KEY__",
    "apiSecret": "__API_SECRET__",
    "appName" : "__LoginRadius_APP_NAME__",
    "connectionTimeout" : "30000",
    "requestRetries" : "0",
    "domainName" : "https://api.loginradius.com/"
}
```

## API Methods

### Authentication API

List of APIs in this section:

* [POST : Auth Add Email](#auth-add-email-post)

* [POST : Auth Login by Email](#auth-login-by-email-post)

* [POST : Auth Forgot Password](#auth-forgot-password-post)

* [POST : Auth User Registration by Email](#auth-user-registration-by-email-post)

* [POST : Auth User Registration by Captcha](#auth-user-registration-by-captcha-post)

* [GET : Auth Validate Access Token](#auth-validate-access-token-get)

* [GET : Access Token Invalidate](#access-token-invalidate-get)

* [GET : Access Token Info](#access-token-info-get)

* [GET : Auth Get Profile by Token](#auth-get-profile-by-token-get)

* [GET : Auth Delete Account](#auth-delete-account-get)

* [GET : Auth Check Email Availability](#auth-check-email-availability-get)

* [GET : Auth Verify Email](#auth-verify-email-get)

* [GET : Auth Social Identity](#auth-social-identity-get)

* [PUT : Auth Update Profile by Token](#auth-update-profile-by-token-put)

* [PUT : Auth Verify Email by OTP](#auth-verify-email-by-otp-put)

* [PUT : Auth Reset Password by Reset Token](#auth-reset-password-by-reset-token-put)

* [PUT : Auth Change Password](#auth-change-password-put)

* [PUT : Auth Resend Email Verification](#auth-resend-email-verification-put)

* [DELETE : Auth Delete Account with Email Confirmation](#auth-delete-account-with-email-confirmation-delete)

* [DELETE : Auth Remove Email](#auth-remove-email-delete)

#### Auth Add Email (POST)

Adds additional emails to the consumer corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var email = "<Email>"; //Required
var type = "<Type>"; //Required
var emailTemplate = "<Email Template>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var apiResponse = new AuthenticationApi().AddEmail(accessToken, email, type, emailTemplate, verificationUrl);
```

#### Auth Login by Email (POST)

Logs in by Email ID.

```csharp
EmailAuthenticationModel emailAuthenticationModel = new EmailAuthenticationModel{
  Email ="<Email ID>",
  Password ="<Password>"
}; //Required
var emailTemplate = "<Email Template>"; //Optional
string fields = null; //Optional
var loginUrl = "<Login URL>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var apiResponse = new AuthenticationApi().LoginByEmail(emailAuthenticationModel, emailTemplate, fields, loginUrl, verificationUrl);
```

#### Auth Forgot Password (POST)

Sends a reset password URL to the consumer corresponding to the specified Email ID.

```csharp
var email = "<Email ID>"; //Required
var resetPasswordUrl = "<Reset Password URL>"; //Required
var emailTemplate = "<Email Template>"; //Optional
var apiResponse = new AuthenticationApi().ForgotPassword(email, resetPasswordUrl, emailTemplate);
```

#### Auth User Registration by Email (POST)

Creates a new consumer, sending a verification email to the specified Email ID.

```csharp
AuthUserRegistrationModel authUserRegistrationModel = new AuthUserRegistrationModel{
  Email = new List<EmailModel>{
    new EmailModel{
      Type ="<Type>",
      Value ="<Value>"
    }
  },
  FirstName ="<First Name>",
  LastName ="<Last Name>",
  Password ="<Password>"
}; //Required
var sott = "<SOTT>"; //Required
var emailTemplate = "<Email Template>"; //Optional
string fields = null; //Optional
var options = "<Options>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var welcomeEmailTemplate = "<Email Template>"; //Optional
var apiResponse = new AuthenticationApi().UserRegistrationByEmail(authUserRegistrationModel, sott, emailTemplate, fields, options, verificationUrl, welcomeEmailTemplate);
```

#### Auth User Registration by Captcha (POST)

Creates a new consumer using the Captcha flow, sending a verification email to the specified Email ID.

```csharp
AuthUserRegistrationModelWithCaptcha authUserRegistrationModelWithCaptcha = new AuthUserRegistrationModelWithCaptcha{
  Email = new List<EmailModel>{
    new EmailModel{
      Type ="<Type>",
      Value ="<Value>"
    }
  },
  FirstName ="<First Name>",
  G_recaptcha_response ="<Google Recaptcha Response>",
  LastName ="<Last Name>",
  Password ="<Password>"
}; //Required
var emailTemplate = "<Email Template>"; //Optional
string fields = null; //Optional
var options = "<Options>"; //Optional
var smsTemplate = "<SMS Template>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var welcomeEmailTemplate = "<Email Template>"; //Optional
var apiResponse = new AuthenticationApi().UserRegistrationByCaptcha(authUserRegistrationModelWithCaptcha, emailTemplate, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate);
```

#### Auth Validate Access Token (GET)

Validates specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var apiResponse = new AuthenticationApi().AuthValidateAccessToken(accessToken);
```

#### Access Token Invalidate (GET)

Invalidates specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var preventRefresh = true; //Optional
var apiResponse = new AuthenticationApi().AuthInValidateAccessToken(accessToken, preventRefresh);
```

#### Access Token Info (GET)

Retrieves token data for the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var apiResponse = new AuthenticationApi().GetAccessTokenInfo(accessToken);
```

#### Auth Get Profile by Token (GET)

Retrieves consumer profile data corresponding to the specified access token.

```csharp
var accessToken = "<access Token>"; //Required
string fields = null; //Optional
var apiResponse = new AuthenticationApi().GetProfileByAccessToken(accessToken, fields);
```

#### Auth Delete Account (GET)

Deletes consumer corresponding to the specified delete token.

```csharp
var deleteToken = "<Delete Token>"; //Required
var apiResponse = new AuthenticationApi().DeleteAccountByDeleteToken(deleteToken);
```

#### Auth Check Email Availability (GET)

Checks if the specified Email ID already exists on your app.

```csharp
var email = "<Email ID>"; //Required
var apiResponse = new AuthenticationApi().CheckEmailAvailability(email);
```
 
#### Auth Verify Email (GET)

Verifies email of the consumer corresponding to the specified verification token.

```csharp
var verificationToken = "<Verification Token>"; //Required
string fields = null; //Optional
var url = "<URL>"; //Optional
var welcomeEmailTemplate = "<Email Template>"; //Optional
var apiResponse = new AuthenticationApi().VerifyEmail(verificationToken, fields, url, welcomeEmailTemplate);
```

#### Auth Social Identity (GET)

Retrieves all consumer's profiles and social identities corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
string fields = null; //Optional
var apiResponse = new AuthenticationApi().GetSocialIdentity(accessToken, fields);
```

#### Auth Update Profile by Token (PUT)

Updates consumer's profile corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
UserProfileUpdateModel userProfileUpdateModel = new UserProfileUpdateModel{
  FirstName ="<First Name>",
  LastName ="<Last Name>"
}; //Required
var emailTemplate = "<Email Template>"; //Optional
string fields = null; //Optional
var smsTemplate = "<SMS Template>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var apiResponse = new AuthenticationApi().UpdateProfileByAccessToken(accessToken, userProfileUpdateModel, emailTemplate, fields, smsTemplate, verificationUrl);
```

#### Auth Verify Email by OTP (PUT)

Verifies Email ID of the consumer corresponding to the specified OTP and Email ID.

```csharp
EmailVerificationByOtpModel emailVerificationByOtpModel = new EmailVerificationByOtpModel{
  Email ="<Email>",
  Otp ="<Otp>"
}; //Required
string fields = null; //Optional
var url = "url"; //Optional
var welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
var apiResponse = new AuthenticationApi().VerifyEmailByOTP(emailVerificationByOtpModel, fields, url, welcomeEmailTemplate);
```

#### Auth Reset Password by Reset Token (PUT)

Sets a new password for the consumer corresponding to the specified reset token.

```csharp
ResetPasswordByResetTokenModel resetPasswordByResetTokenModel = new ResetPasswordByResetTokenModel{
  Password ="<Password>",
  ResetToken ="<ResetToken>"
}; //Required
var apiResponse = new AuthenticationApi().ResetPasswordByResetToken(resetPasswordByResetTokenModel);
```

#### Auth Change Password (PUT)

Changes consumer's password corresponding to the specified Email ID. This also requires the input of the consumer's previous password.

```csharp
var accessToken = "accessToken"; //Required
var newPassword = "newPassword"; //Required
var oldPassword = "oldPassword"; //Required
var apiResponse = new AuthenticationApi().ChangePassword(accessToken, newPassword, oldPassword);
```

#### Auth Resend Email Verification (PUT)

Resends verification email to the consumer corresponding to the specified Email ID.

```csharp
var email = "<Email ID>"; //Required
var emailTemplate = "<Email Template>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var apiResponse = new AuthenticationApi().AuthResendEmailVerification(email, emailTemplate, verificationUrl);
```

#### Auth Delete Account with Email Confirmation (DELETE)

Triggers the delete account process for the consumer corresponding to the specified access token. A confirmation email for account deletion will be sent to the consumer.

```csharp
var accessToken = "<Access Token>"; //Required
var deleteUrl = "<Delete URL>"; //Optional
var emailTemplate = "<Email Template>"; //Optional
var apiResponse = new AuthenticationApi().DeleteAccountWithEmailConfirmation(accessToken, deleteUrl, emailTemplate);
```

#### Auth Remove Email (DELETE)

Removes additional emails from the consumer corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var email = "<Email>"; //Required
var apiResponse = new AuthenticationApi().RemoveEmail(accessToken, email);
```

### Account API

List of APIs in this section:

* [POST : Account Create](#account-create-post)

* [POST : Forgot Password Token](#forgot-password-token-post)

* [POST : Email Verification Token](#email-verification-token-post)

* [GET : Account Profile by Email](#account-profile-by-email-get)

* [GET : Account Profile by Phone ID](#account-profile-by-phone-id-get)

* [GET : Account Profile by UID](#account-profile-by-uid-get)

* [GET : Account Password](#account-password-get)

* [GET : Access Token by UID](#access-token-by-uid-get)

* [GET : Account Identities by Email](#account-identities-by-email-get)

* [PUT : Account Update](#account-update-put)

* [PUT : Update Phone ID by UID](#update-phone-id-by-uid-put)

* [PUT : Account Set Password](#account-set-password-put)

* [PUT : Account Invalidate Verification Email](#account-invalidate-verification-email-put)

* [PUT : Reset Phone ID Verification](#reset-phone-id-verification-put)

* [PUT : Upsert Email](#upsert-email-put)

* [PUT : Update UID](#update-uid-put)

* [DELETE : Account Delete](#account-delete-delete)

* [DELETE : Account Remove Email](#account-remove-email-delete)

* [DELETE : Delete User Profile by Email](#delete-user-profile-by-email-delete)

#### Account Create (POST)

Creates a new consumer. This will bypass the normal email verification process.

> Note: All mandatory fields must be included when creating a new consumer.

```csharp
AccountCreateModel accountCreateModel = new AccountCreateModel{
  Email = new List<EmailModel>{
    new EmailModel{
      Type ="<Type>",
      Value ="<Value>"
    }
  },
  FirstName ="<First Name>",
  LastName ="<Last Name>",
  Password ="<Password>"
}; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().CreateAccount(accountCreateModel, fields);
```

#### Forgot Password Token (POST)

Generates a Forgot Password token for the specified Email ID. This can optionally send a Forgot Password email to the consumer.

```csharp
var email = "<Email ID>"; //Required
var emailTemplate = "<Email Template>"; //Optional
var resetPasswordUrl = "<Reset Password URL>"; //Optional
var sendEmail = false; //Optional
var apiResponse = new AccountApi().GetForgotPasswordToken(email, emailTemplate, resetPasswordUrl, sendEmail);
```

#### Email Verification Token (POST)

Generates an Email Verification token for the specified Email ID.

```csharp
var email = "<Email ID>"; //Required
var apiResponse = new AccountApi().GetEmailVerificationToken(email);
```

#### Account Profile by Email (GET)

Retrieves customer profile data corresponding to the specified Email ID.

```csharp
var email = "<Email ID>"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountProfileByEmail(email, fields);
```

#### Account Profile by Phone ID (GET)

Retrieves customer profile data corresponding to the specified Phone ID.

```csharp
var phone = "<Phone ID>"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountProfileByPhone(phone, fields);
```

#### Account Profile by UID (GET)

Retrieves consumer profile data corresponding to the specified UID.

```csharp
var uid = "<UID>"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountProfileByUid(uid, fields);
```

#### Account Password (GET)

Retrieves hashed password for the consumer corresponding to the specified UID.

```csharp
var uid = "<UID>"; //Required
var apiResponse = new AccountApi().GetAccountPasswordHashByUid(uid);
```

#### Access Token by UID (GET)

Gets a LoginRadius access token corresponding to the specified UID.

```csharp
var uid = "<UID>"; //Required
var apiResponse = new AccountApi().GetAccessTokenByUid(uid);
```

#### Account Identities by Email (GET)

Retrieves all consumer identities corresponding to the specified Email.

> Note: This is intended for specific workflows where an email may correspond with multiple UIDs.


```csharp
var email = "<Email>"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().GetAccountIdentitiesByEmail(email, fields);
```

#### Account Update (PUT)

Updates profile information of the consumer profile corresponding to the specified UID.

```csharp
AccountUserProfileUpdateModel accountUserProfileUpdateModel = new AccountUserProfileUpdateModel{
  FirstName ="<First Name>",
  LastName ="<Last Name>"
}; //Required
var uid = "<UID>"; //Required
string fields = null; //Optional
; //Optional
var apiResponse = new AccountApi().UpdateAccountByUid(accountUserProfileUpdateModel, uid, fields);
```

#### Update Phone ID by UID (PUT)

Updates Phone ID for the consumer corresponding to the specified UID. You can update the Phone ID for both verified and unverified consumers. This will directly replace their Phone ID, bypassing the OTP verification process.

```csharp
var phone = "<Phone ID>"; //Required
var uid = "<UID>"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().UpdatePhoneIDByUid(phone, uid, fields);
```

#### Account Set Password (PUT)

Sets password for the consumer corresponding to the specified UID.

```csharp
var password = "<Password>"; //Required
var uid = "<UID>"; //Required
var apiResponse = new AccountApi().SetAccountPasswordByUid(password, uid);
```

#### Account Invalidate Verification Email (PUT)

Invalidates Email ID verification status for the consumer corresponding to the specified UID.

```csharp
var uid = "<UID>"; //Required
var emailTemplate = "<Email Template>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var apiResponse = new AccountApi().InvalidateAccountEmailVerification(uid, emailTemplate, verificationUrl);
```

#### Reset Phone ID Verification (PUT)

Resets Phone ID verification for the consumer corresponding to the specified UID.

```csharp
var uid = "<UID>"; //Required
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new AccountApi().ResetPhoneIDVerificationByUid(uid, smsTemplate);
```

#### Upsert Email (PUT)

Adds/Upserts emails for the consumer corresponding to the specified UID by email type. If the email type specified already exists, the existing email value will be updated. Otherwise, a new email record will be added into the account's email array.

```csharp
UpsertEmailModel upsertEmailModel = new UpsertEmailModel{
  Email = new List<EmailModel>{
    new EmailModel{
      Type ="<Type>",
      Value ="<Value>"
    }
  }
}; //Required
var uid = "<UID>"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().UpsertEmail(upsertEmailModel, uid, fields);
```

#### Update UID (PUT)

Updates consumer's UID.

```csharp
UpdateUidModel updateUidModel = new UpdateUidModel{
  NewUid ="<New UID>"
}; //Required
var uid = "<UID>"; //Required
var apiResponse = new AccountApi().AccountUpdateUid(updateUidModel, uid);
```

#### Account Delete (DELETE)

Deletes consumer corresponding to the specified UID from your app. They will be able to re-register for a new account.

```csharp
var uid = "<UID>"; //Required
var apiResponse = new AccountApi().DeleteAccountByUid(uid);
```

#### Account Remove Email (DELETE)

Removes given email from the consumer corresponding to the specified UID.

```csharp
var email = "<Email>"; //Required
var uid = "<UID>"; //Required
string fields = null; //Optional
var apiResponse = new AccountApi().RemoveEmail(email, uid, fields);
```

#### Delete User Profile by Email (DELETE)

Deletes consumer corresponding to the specified Email.

```csharp
var email = "<Email>"; //Required
var apiResponse = new AccountApi().AccountDeleteByEmail(email);
```

### Phone Authentication API

List of APIs in this section:

* [POST : Phone Login](#phone-login-post)

* [POST : Phone Forgot Password by OTP](#phone-forgot-password-by-otp-post)

* [POST : Phone Resend Verification OTP](#phone-resend-verification-otp-post)

* [POST : Phone Resend Verification OTP by Token](#phone-resend-verification-otp-by-token-post)

* [POST : Phone User Registration by SMS](#phone-user-registration-by-sms-post)

* [GET : Phone Number Availability](#phone-number-availability-get)

* [PUT : Phone Reset Password by OTP](#phone-reset-password-by-otp-put)

* [PUT : Phone Verification OTP](#phone-verification-otp-put)

* [PUT : Phone Verification OTP by Token](#phone-verification-otp-by-token-put)

* [PUT : Phone Number Update](#phone-number-update-put)

* [DELETE : Remove Phone ID by Access Token](#remove-phone-id-by-access-token-delete)

#### Phone Login (POST)

Logs in by Phone ID.

```csharp
PhoneAuthenticationModel phoneAuthenticationModel = new PhoneAuthenticationModel{
  Password ="<Password>",
  Phone ="<Phone ID>"
}; //Required
string fields = null; //Optional
var loginUrl = "<Login URL>"; //Optional
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new PhoneAuthenticationApi().LoginByPhone(phoneAuthenticationModel, fields, loginUrl, smsTemplate);
```

#### Phone Forgot Password by OTP (POST)

Sends a verification OTP SMS to reset the consumer's password.

```csharp
var phone = "<Phone ID>"; //Required
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new PhoneAuthenticationApi().ForgotPasswordByPhoneOTP(phone, smsTemplate);
```

#### Phone Resend Verification OTP (POST)

Resends a verification OTP SMS to verify the consumer's Phone ID.

```csharp
var phone = "<Phone ID>"; //Required
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new PhoneAuthenticationApi().PhoneResendVerificationOTP(phone, smsTemplate);
```

#### Phone Resend Verification OTP by Token (POST)

Resends a verification OTP SMS to verify the consumer's Phone ID in cases where the consumer is already logged in.

```csharp
var accessToken = "<Access Token>"; //Required
var phone = "<Phone ID>"; //Required
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new PhoneAuthenticationApi().PhoneResendVerificationOTPByToken(accessToken, phone, smsTemplate);
```

#### Phone User Registration by SMS (POST)

Registers a new consumer on your app and triggers the Phone ID verification process.

```csharp
AuthUserRegistrationModel authUserRegistrationModel = new AuthUserRegistrationModel{
  FirstName ="<First Name>",
  LastName ="<Last Name>",
  Password ="<Password>",
  PhoneId ="<Phone ID>"
}; //Required
var sott = "<SOTT>"; //Required
string fields = null; //Optional
var options = "<Options>"; //Optional
var smsTemplate = "<SMS Template>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var welcomeEmailTemplate = "<Email Template>"; //Optional
var apiResponse = new PhoneAuthenticationApi().UserRegistrationByPhone(authUserRegistrationModel, sott, fields, options, smsTemplate, verificationUrl, welcomeEmailTemplate);
```

#### Phone Number Availability (GET)

Checks if the specified Phone ID already exists on your app.

```csharp
var phone = "<Phone ID>"; //Required
var apiResponse = new PhoneAuthenticationApi().CheckPhoneNumberAvailability(phone);
```

#### Phone Reset Password by OTP (PUT)

Resets consumer's password using a verification OTP.

```csharp
ResetPasswordByOTPModel resetPasswordByOTPModel = new ResetPasswordByOTPModel{
  Otp ="<OTP>",
  Password ="<Password>",
  Phone ="<Phone ID>"
}; //Required
var apiResponse = new PhoneAuthenticationApi().ResetPasswordByPhoneOTP(resetPasswordByOTPModel);
```

#### Phone Verification OTP (PUT)

Validates verification OTP sent to verify the consumer's Phone ID.

```csharp
var otp = "<OTP>"; //Required
var phone = "<Phone ID>"; //Required
string fields = null; //Optional
var smsTemplate = "smsTemplate"; //Optional
var apiResponse = new PhoneAuthenticationApi().PhoneVerificationByOTP(otp, phone, fields, smsTemplate);
```

#### Phone Verification OTP by Token (PUT)

Consumes verification OTP sent to verify the consumer's Phone ID when the consumer is already logged in.

```csharp
var accessToken = "<Access Token>"; //Required
var otp = "<OTP>"; //Required
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new PhoneAuthenticationApi().PhoneVerificationOTPByAccessToken(accessToken, otp, smsTemplate);
```

#### Phone Number Update (PUT)

Updates Phone ID of the consumer corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var phone = "<Phone ID>"; //Required
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new PhoneAuthenticationApi().UpdatePhoneNumber(accessToken, phone, smsTemplate);
```

#### Remove Phone ID by Access Token (DELETE)

Deletes Phone ID from the consumer corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var apiResponse = new PhoneAuthenticationApi().RemovePhoneIDByAccessToken(accessToken);
```

### Multi Factor Authentication (2FA) API

List of APIs in this section:

* [POST : MFA Email Login](#mfa-email-login-post)

* [POST : MFA Phone Login](#mfa-phone-login-post)

* [GET : MFA Validate Access Token](#mfa-validate-access-token-get)

* [GET : MFA Resend OTP](#mfa-resend-otp-get)

* [PUT : Update MFA by Access Token](#update-mfa-by-access-token-put)

* [PUT : MFA Update Phone Number by Token](#mfa-update-phone-number-by-token-put)

* [PUT : MFA Validate Google Auth Code](#mfa-validate-google-auth-code-put)

* [PUT : MFA Update Phone Number](#mfa-update-phone-number-put)

* [DELETE : MFA Reset Google Authenticator by Token](#mfa-reset-google-authenticator-by-token-delete)

* [DELETE : MFA Reset SMS Authenticator by Token](#mfa-reset-sms-authenticator-by-token-delete)

* [DELETE : MFA Reset SMS Authenticator by UID](#mfa-reset-sms-authenticator-by-uid-delete)

* [DELETE : MFA Reset Google Authenticator by UID](#mfa-reset-google-authenticator-by-uid-delete)

#### MFA Email Login (POST)

Logs in by Email ID on a Multi Factor Authentication enabled LoginRadius app.

```csharp
var password = "<Password>"; //Required
var phone = "<Phone ID>"; //Required
var emailTemplate = "<Email Template>"; //Optional
string fields = null; //Optional
var loginUrl = "<Login URL>"; //Optional
var smsTemplate = "<SMS Template (for verification OTP SMS)>"; //Optional
var smsTemplate2FA = "<SMS Template (for 2FA OTP SMS)"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFALoginByEmail(email, password, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl);
```

#### MFA Phone Login (POST)

Logs in by Phone ID on a Multi Factor Authentication enabled LoginRadius app.

```csharp
var password = "<Password>"; //Required
var phone = "<Phone ID>"; //Required
var emailTemplate = "<Email Template>"; //Optional
string fields = null; //Optional
var loginUrl = "<Login URL>"; //Optional
var smsTemplate = "<SMS Template (for verification OTP SMS)>"; //Optional
var smsTemplate2FA = "<SMS Template (for 2FA OTP SMS)"; //Optional
var verificationUrl = "verificationUrl"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFALoginByPhone(password, phone, emailTemplate, fields, loginUrl, smsTemplate, smsTemplate2FA, verificationUrl);
```

#### MFA Validate Access Token (GET)

Validates an access token and start the Multi Factor Authentication (2FA) process. If 2FA is set to optional and the consumer has no second factor authenticators active, the consumer's profile information will be returned instead.

```csharp
var accessToken = "<Access Token>"; //Required
var smsTemplate2FA = "<SMS Template>"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAConfigureByAccessToken(accessToken, smsTemplate2FA);
```

#### MFA Resend OTP (GET)

Resends verification OTP SMS to the phone number corresponding to the second factor authentication token.

```csharp
var secondFactorAuthenticationToken = "<Second Factor Authentication Token>"; //Required
var smsTemplate2FA = "<SMS Template>"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAResendOTP(secondFactorAuthenticationToken, smsTemplate2FA);
```

#### Enable MFA Google Authenticator by Access Token (PUT)

Enables Multi Factor Authentication (2FA) with Google Authenticator for the consumer corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
  MultiFactorAuthModelByGoogleAuthenticatorCode multiFactorAuthModelByGoogleAuthenticatorCode = new MultiFactorAuthModelByGoogleAuthenticatorCode{
    GoogleAuthenticatorCode ="<Google Authenticator Code>"
  }; //Required
string fields = null; //Optional
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAUpdateByAccessToken(accessToken, multiFactorAuthModelByGoogleAuthenticatorCode, fields, smsTemplate);
```

#### MFA Update Phone Number by Token (PUT)

Updates phone number used for Multi Factor Authentication (2FA) via access token by sending a verification OTP to the specified phone number.

```csharp
var accessToken = "<Access Token>"; //Required
var phoneNo2FA = "<Phone Number>"; //Required
var smsTemplate2FA = "<SMS Template>"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAUpdatePhoneNumberByToken(accessToken, phoneNo2FA, smsTemplate2FA);
```

#### MFA Validate Google Auth Code (PUT)

Logs in via Multi Factor Authentication (2FA) by passing in a Google Authenticator code.

```csharp
var googleAuthenticatorCode = "googleAuthenticatorCode"; //Required
var secondFactorAuthenticationToken = "secondFactorAuthenticationToken"; //Required
string fields = null; //Optional
var smsTemplate2FA = "<SMS Template>"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAValidateGoogleAuthCode(googleAuthenticatorCode, secondFactorAuthenticationToken, fields, smsTemplate2FA);
```

#### MFA Update Phone Number (PUT)

Updates phone number used for Multi Factor Authentication (2FA) via second factor authentication token by sending a verification OTP to the specified phone number.

```csharp
var phoneNo2FA = "<Phone Number>"; //Required
var secondFactorAuthenticationToken = "<Second Factor Authentication Token>"; //Required
var smsTemplate2FA = "<SMS Template>"; //Optional
var apiResponse = new MultiFactorAuthenticationApi().MFAUpdatePhoneNumber(phoneNo2FA, secondFactorAuthenticationToken, smsTemplate2FA);
```

#### MFA Reset Google Authenticator by Token (DELETE)

Resets Google Authenticator configurations for the consumer corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var googleAuthenticator = true; //Required
var apiResponse = new MultiFactorAuthenticationApi().MFAResetGoogleAuthByToken(accessToken, googleAuthenticator);
```

#### MFA Reset SMS Authenticator by Token (DELETE)

Resets SMS Authenticator configurations for the consumer corresponding to the specified access token.

```csharp
var accessToken = "<Access Token>"; //Required
var otpAuthenticator = true; //Required
var apiResponse = new MultiFactorAuthenticationApi().MFAResetSMSAuthByToken(accessToken, otpAuthenticator);
```

#### MFA Reset SMS Authenticator by UID (DELETE)

Resets SMS Authenticator configurations for the consumer corresponding to the specified UID.

```csharp
var otpAuthenticator = true; //Required
var uid = "<UID>"; //Required
var apiResponse = new MultiFactorAuthenticationApi().MFAResetSMSAuthenticatorByUid(otpAuthenticator, uid);
```

#### MFA Reset Google Authenticator by UID (DELETE)

Resets Google Authenticator configurations for the consumer corresponding to the specified UID.

```csharp
var googleAuthenticator = true; //Required
var uid = "<UID>"; //Required
var apiResponse = new MultiFactorAuthenticationApi().MFAResetGoogleAuthenticatorByUid(googleAuthenticator, uid);
```

### Passwordless Login API

List of APIs in this section:

* [GET : Passwordless Login by Phone](#passwordless-login-by-phone-get)

* [GET : Passwordless Login by Email](#passwordless-login-by-email-get)

* [GET : Passwordless Login Verification](#passwordless-login-verification-get)

* [PUT : Passwordless Login Phone Verification](#passwordless-login-phone-verification-put)

#### Passwordless Login by Phone (GET)

Sends a Passwordless Login OTP SMS to the specified Phone ID.

```csharp
var phone = "<Phone ID>"; //Required
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new PasswordLessLoginApi().PasswordlessLoginByPhone(phone, smsTemplate);
```

#### Passwordless Login by Email (GET)

Sends a Passwordless Login verification link to the specified Email ID.

```csharp
var email = "<Email>"; //Required
var passwordLessLoginTemplate = "<Passwordless Login Template>"; //Optional
var verificationUrl = "<Verification URL>"; //Optional
var apiResponse = new PasswordLessLoginApi().PasswordlessLoginByEmail(email, passwordLessLoginTemplate, verificationUrl);
```

#### Passwordless Login Verification (GET)

Verifies a Passwordless Login verification link. 

> Note: If you are using Passwordless Login by Phone, you will need to use the [Passwordless Login Phone Verification](#passwordless-login-phone-verification-put) API.

```csharp
var verificationToken = "<Verification Token>"; //Required
string fields = null; //Optional
var welcomeEmailTemplate = "<Email Template>"; //Optional
var apiResponse = new PasswordLessLoginApi().PasswordlessLoginVerification(verificationToken, fields, welcomeEmailTemplate);
```

#### Passwordless Login Phone Verification (PUT)

Verifies a consumer by OTP, and logs them in.

```csharp
PasswordLessLoginOtpModel passwordLessLoginOtpModel = new PasswordLessLoginOtpModel{
  Otp = "<OTP>",
  Phone ="<Phone>"
}; //Required
string fields = null; //Optional
var smsTemplate = "<SMS Template>"; //Optional
var apiResponse = new PasswordLessLoginApi().PasswordlessLoginPhoneVerification(passwordLessLoginOtpModel, fields, smsTemplate);
```

### Role API

List of APIs in this section:

* [POST : Roles Create](#roles-create-post)

* [GET : Roles by UID](#roles-by-uid-get)

* [GET : Get Context with Roles and Permissions](#get-context-with-roles-and-permissions-get)

* [GET : Role Context Profile](#role-context-profile-get)

* [GET : Roles List](#roles-list-get)

* [PUT : Assign Roles by UID](#assign-roles-by-uid-put)

* [PUT : Upsert Context](#upsert-context-put)

* [PUT : Add Permissions to Role](#add-permissions-to-role-put)

* [DELETE : Unassign Roles by UID](#unassign-roles-by-uid-delete)

* [DELETE : Delete Role Context](#delete-role-context-delete)

* [DELETE : Delete Role from Context](#delete-role-from-context-delete)

* [DELETE : Delete Additional Permission from Context](#delete-additional-permission-from-context-delete)

* [DELETE : Account Delete Role](#account-delete-role-delete)

* [DELETE : Remove Permissions](#remove-permissions-delete)

#### Roles Create (POST)

Creates a Role with Permissions.

```csharp
RolesModel rolesModel = new RolesModel{
  Roles = new List<RoleModel>{
    new RoleModel{
      Name ="<Name>",
      Permissions = new Dictionary<String,Boolean>{
        ["<Permission Name>"] = true
      }
    }
  }
}; //Required
var apiResponse = new RoleApi().CreateRoles(rolesModel);
```

#### Roles by UID (GET)

Retrieves all assigned Roles of the consumer corresponding to the specified UID.

```csharp
var uid = "<UID>"; //Required
var apiResponse = new RoleApi().GetRolesByUid(uid);
```

#### Get Context with Roles and Permissions (GET)

Retrieves configured Role Contexts and its associated Roles and Permissions.

```csharp
var uid = "<UID>"; //Required
var apiResponse = new RoleApi().GetRoleContextByUid(uid);
```

#### Role Context Profile (GET)

Retrieves a Role Context by its name.

```csharp
var contextName = "<Context Name>"; //Required
var apiResponse = new RoleApi().GetRoleContextByContextName(contextName);
```

#### Roles List (GET)

Retrieves all Roles with Permissions configured in your app.

```csharp
var apiResponse = new RoleApi().GetRolesList();
```

#### Assign Roles by UID (PUT)

Assigns specified Roles to the consumer corresponding to the specified UID.

```csharp
AccountRolesModel accountRolesModel = new AccountRolesModel{
  Roles = new List<String>{"<Role>"}
}; //Required
var uid = "<UID>"; //Required
var apiResponse = new RoleApi().AssignRolesByUid(accountRolesModel, uid);
```

#### Upsert Context (PUT)

Creates a Role Context with a set of Roles.

```csharp
AccountRoleContextModel accountRoleContextModel = new AccountRoleContextModel{
  RoleContext = new List<RoleContextRoleModel>{
    new RoleContextRoleModel{
      AdditionalPermissions = new List<String>{"<Additional Permission"},
      Context ="<Context>",
      Expiration ="<Expiration>",
      Roles = new List<String>{"<Role>"}
    }
  }
}; //Required
var uid = "<UID>"; //Required
var apiResponse = new RoleApi().UpdateRoleContextByUid(accountRoleContextModel, uid);
```

#### Add Permissions to Role (PUT)

Adds specified Permissions to a Role.

```csharp
PermissionsModel permissionsModel = new PermissionsModel{
  Permissions = new List<String>{"<Permission>"}
}; //Required
var role = "<Role>"; //Required
var apiResponse = new RoleApi().AddRolePermissions(permissionsModel, role);
```

#### Unassign Roles by UID (DELETE)

Unassigns Roles from the consumer corresponding to the specified UID.

```csharp
AccountRolesModel accountRolesModel = new AccountRolesModel{
  Roles = new List<String>{"<Role>"}
}; //Required
var uid = "<UID>"; //Required
var apiResponse = new RoleApi().UnassignRolesByUid(accountRolesModel, uid);
```

#### Delete Role Context (DELETE)

Deletes a specified Role Context from the consumer corresponding to the specified UID.

```csharp
var contextName = "<Context Name>"; //Required
var uid = "<UID>"; //Required
var apiResponse = new RoleApi().DeleteRoleContextByUid(contextName, uid);
```

#### Delete Role from Context (DELETE)

Deletes a specified Role from Role Context of the consumer corresponding to the specified UID.

```csharp
var contextName = "<Context Name>"; //Required
RoleContextRemoveRoleModel roleContextRemoveRoleModel = new RoleContextRemoveRoleModel{
Roles = new List<String>{"<Role>"}
}; //Required
var uid = "<UID>"; //Required
var apiResponse = new RoleApi().DeleteRolesFromRoleContextByUid(contextName, roleContextRemoveRoleModel, uid);
```

#### Delete Additional Permission from Context (DELETE)

Deletes Additional Permissions from Role Context of the consumer corresponding to the specified UID.

```csharp
var contextName = "<Context Name>"; //Required
RoleContextAdditionalPermissionRemoveRoleModel roleContextAdditionalPermissionRemoveRoleModel = new RoleContextAdditionalPermissionRemoveRoleModel{
AdditionalPermissions = new List<String>{"<Additional Permission>"}
}; //Required
var uid = "<UID>"; //Required
var apiResponse = new RoleApi().DeleteAdditionalPermissionFromRoleContextByUid(contextName, roleContextAdditionalPermissionRemoveRoleModel, uid);
```

#### Account Delete Role (DELETE)

Deletes a specified Role.

```csharp
var role = "<Role>"; //Required
var apiResponse = new RoleApi().DeleteRole(role);
```

#### Remove Permissions (DELETE)

Removes permissions from a specified Role.

```csharp

PermissionsModel permissionsModel = new PermissionsModel{
  Permissions = new List<String>{"<Permission>"}
}; //Required
var role = "<Role>"; //Required
var apiResponse = new RoleApi().RemoveRolePermissions(permissionsModel, role);
```

### SOTT API

List of APIs in this section:

* [GET: Generate SOTT](#generate-sott-get)

#### Generate SOTT (GET)

Generates a SOTT with a given expiration time.

```csharp
var timeDifference = 0; //Optional
var apiResponse = new SottApi().GenerateSott(timeDifference);
```

### Social API

List of APIs in this section:

* [GET : Access Token via Facebook Token](#access-token-via-facebook-token-get)

* [GET : Access Token via Twitter Token](#access-token-via-twitter-token-get)

* [GET : Access Token via Google Token](#access-token-via-google-token-get)

* [GET : Access Token using Google JWT Token for Native Mobile Login](#access-token-using-google-jwt-token-for-native-mobile-login-get)

* [GET : Access Token via LinkedIn Token](#access-token-via-linkedin-token-get)

* [GET : Access Token via Google Auth Code](#access-token-via-google-auth-code-get)

#### Access Token via Facebook Token (GET)

Exchanges a Facebook access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

```csharp
var fbAccessToken = "<Facebook Access Token>"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByFacebookAccessToken(fbAccessToken);
```

#### Access Token via Twitter Token (GET)

Exchanges a Twitter access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

```csharp
var twAccessToken = "<Twitter Access Token>"; //Required
var twTokenSecret = "<Twitter Token Secret>"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByTwitterAccessToken(twAccessToken, twTokenSecret);
```

#### Access Token via Google Token (GET)

Exchanges a Google access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

```csharp
var googleAccessToken = "<Google Access Token>"; //Required
var clientId = "<Client ID>"; //Optional
var refreshToken = "<Refresh Token>"; //Optional
var apiResponse = new NativeSocialApi().GetAccessTokenByGoogleAccessToken(googleAccessToken, clientId, refreshToken);
```

#### Access Token using Google JWT Token for Native Mobile Login (GET)

Exchanges a Google JWT token for a LoginRadius access token for Google native mobile login/registration.

```csharp
var jwtToken = "<JWT Token>"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByGoogleJWTAccessToken(jwtToken);
```

#### Access Token via LinkedIn Token (GET)

Exchanges a LinkedIn access token for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

```csharp
var lnAccessToken = "<LinkedIn Access Token>"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByLinkedinAccessToken(lnAccessToken);
```

#### Access Token via Google Auth Code (GET)

Exchanges a Google auth code for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

```csharp
var googleAuthcode = "<Google Auth Code>"; //Required
var apiResponse = new NativeSocialApi().GetAccessTokenByGoogleAuthCode(googleAuthcode);
```

### Webhook API

List of APIs in this section:

* [POST : Webhook Subscribe](#webhook-subscribe-post)
 
* [GET : Webhook Subscribed URLs](#webhook-subscribed-urls-get)

* [GET : Webhook Test](#webhook-test-get)

* [DELETE : Webhook Unsubscribe](#webhook-unsubscribe-delete)

#### Webhook Subscribe (POST)

Configures a webhook on your LoginRadius app.

```csharp
WebHookSubscribeModel webHookSubscribeModel = new WebHookSubscribeModel{
  Event ="<Event>",
  TargetUrl ="<Target Url>"
}; //Required
var apiResponse = new WebHookApi().WebHookSubscribe(webHookSubscribeModel);
```

#### Webhook Subscribed URLs (GET)

Fetches all subscribed URLs for a particular event.

```csharp
var event = "<Event>"; //Required
var apiResponse = new WebHookApi().GetWebHookSubscribedURLs(event);
```

#### Webhook Test (GET)

Tests a subscribed webhook.

```csharp
var apiResponse = new WebHookApi().WebhookTest();
```

#### Webhook Unsubscribe (DELETE)

Unsubscribes a webhook configured on your LoginRadius app.

```csharp
WebHookSubscribeModel webHookSubscribeModel = new WebHookSubscribeModel{
  Event ="<Event>",
  TargetUrl ="<Target Url>"
}; //Required
var apiResponse = new WebHookApi().WebHookUnsubscribe(webHookSubscribeModel);
```

## Demo

A sample ASP&#46;NET project utilizing the SDK is available at [GitHub](https://github.com/LoginRadius/dot-net-sdk/tree/master/Samples/dot-net-demo).

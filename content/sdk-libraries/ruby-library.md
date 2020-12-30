---
title: Ruby Library
description: "A guide to impliment LoginRadius SDK in a Ruby on Rails application."
summary: "A guide to impliment LoginRadius SDK in a Ruby on Rails application"
---

>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, User Registration.


This document contains information and examples regarding the LoginRadius ruby-on-rails SDK. It provides guidance for working with social authentication, user profile data, and auth implementation with a variety of social networks such as Facebook, Google, Twitter.You can get the SDK from [here](https://github.com/LoginRadius/ruby-on-rails-sdk) 

## Installation <br/>

Add this line to your application's Gemfile:

```
 gem "login_radius", :path => "gemfilepath";

```

And then execute:

```
 bundle

```

## Configuration


- Before using any of the functions available in the library, its corresponding module must first define the global constant in `config/application.yml`:

```yml
  SITE_NAME: "<site name>"
  API_KEY: "<api-key>"
  API_SECRET: "<api-secret>"
  CUSTOM_API_DOMAIN: "<custom-domain-url-if-any>"
  API_REQUEST_SIGNING: "false"
```
- After define the configuration key details, its corresponding module must first be instantiated:

Create login_radius.rb in /config/initializers:

```ruby
require 'login_radius'

::AccountApi = LoginRadius::AccountApi.new
::RoleApi = LoginRadius::RoleApi.new
::SottApi = LoginRadius::SottApi.new

::ConfigurationApi = LoginRadius::ConfigurationApi.new
::ConsentManagementApi = LoginRadius::ConsentManagementApi.new
::CustomObjectApi = LoginRadius::CustomObjectApi.new
::CustomRegistrationDataApi = LoginRadius::CustomRegistrationDataApi.new
::MultiFactorAuthenticationApi = LoginRadius::MultiFactorAuthenticationApi.new
::ReAuthenticationApi = LoginRadius::ReAuthenticationApi.new
::WebHookApi = LoginRadius::WebHookApi.new

::AuthenticationApi = LoginRadius::AuthenticationApi.new
::OneTouchLoginApi = LoginRadius::OneTouchLoginApi.new
::PasswordLessLoginApi = LoginRadius::PasswordLessLoginApi.new
::PhoneAuthenticationApi = LoginRadius::PhoneAuthenticationApi.new
::PINAuthenticationApi = LoginRadius::PINAuthenticationApi.new
::RiskBasedAuthenticationApi = LoginRadius::RiskBasedAuthenticationApi.new
::SmartLoginApi = LoginRadius::SmartLoginApi.new

::NativeSocialApi = LoginRadius::NativeSocialApi.new
::SocialApi = LoginRadius::SocialApi.new

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
 This API is used to update the user's profile by passing the access token.  [More Info](/api/v2/customer-identity-api/authentication/auth-update-profile-by-token/)

 
 

 ```ruby

 access_token = "<access_token>" #Required

 user_profile_update_model ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>",  }  #Required
 email_template = "<email_template>" #Optional
 fields = nil #Optional
 null_support = true #Optional
 sms_template = "<sms_template>" #Optional
 verification_url = "<verification_url>" #Optional

response = AuthenticationApi.update_profile_by_access_token(access_token, user_profile_update_model, email_template, fields, null_support, sms_template, verification_url)

 ```
 
  
  
 
<h5 id="VerifyEmailByOTP-put-"> Auth Verify Email By OTP (PUT)</h5>
 This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.  [More Info](/api/v2/customer-identity-api/authentication/auth-verify-email-by-otp/)

 
 

 ```ruby


 email_verification_by_otp_model ={ 
"email" : "<email>",
"otp" : "<otp>",  }  #Required
 fields = nil #Optional
 url = "<url>" #Optional
 welcome_email_template = "<welcome_email_template>" #Optional

response = AuthenticationApi.verify_email_by_otp(email_verification_by_otp_model, fields, url, welcome_email_template)

 ```
 
  
  
 
<h5 id="ResetPasswordByResetToken-put-"> Auth Reset Password by Reset Token (PUT)</h5>
 This API is used to set a new password for the specified account.  [More Info](/api/v2/customer-identity-api/authentication/auth-reset-password-by-reset-token)

 
 

 ```ruby


 reset_password_by_reset_token_model ={ 
"password" : "<password>",
"resetToken" : "<resetToken>",  }  #Required

response = AuthenticationApi.reset_password_by_reset_token(reset_password_by_reset_token_model)

 ```
 
  
  
 
<h5 id="ChangePassword-put-"> Auth Change Password (PUT)</h5>
 This API is used to change the accounts password based on the previous password  [More Info](/api/v2/customer-identity-api/authentication/auth-change-password)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 new_password = "<new_password>" #Required
 old_password = "<old_password>" #Required

response = AuthenticationApi.change_password(access_token, new_password, old_password)

 ```
 
  
  
 
<h5 id="AuthResendEmailVerification-put-"> Auth Resend Email Verification (PUT)</h5>
 This API resends the verification email to the user.  [More Info](/api/v2/customer-identity-api/authentication/auth-resend-email-verification/)

 
 

 ```ruby

 email = "<email>" #Required
 email_template = "<email_template>" #Optional
 verification_url = "<verification_url>" #Optional

response = AuthenticationApi.auth_resend_email_verification(email, email_template, verification_url)

 ```
 
  
  
 
<h5 id="AddEmail-post-"> Auth Add Email (POST)</h5>
 This API is used to add additional emails to a user's account.  [More Info](/api/v2/customer-identity-api/authentication/auth-add-email)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 email = "<email>" #Required
 type = "<type>" #Required
 email_template = "<email_template>" #Optional
 verification_url = "<verification_url>" #Optional

response = AuthenticationApi.add_email(access_token, email, type, email_template, verification_url)

 ```
 
  
  
 
<h5 id="LoginByEmail-post-"> Auth Login by Email (POST)</h5>
 This API retrieves a copy of the user data based on the Email  [More Info](/api/v2/customer-identity-api/authentication/auth-login-by-email)

 
 

 ```ruby


 email_authentication_model ={ 
"email" : "<email>",
"password" : "<password>",  }  #Required
 email_template = "<email_template>" #Optional
 fields = nil #Optional
 login_url = "<login_url>" #Optional
 verification_url = "<verification_url>" #Optional

response = AuthenticationApi.login_by_email(email_authentication_model, email_template, fields, login_url, verification_url)

 ```
 
  
  
 
<h5 id="ForgotPassword-post-"> Auth Forgot Password (POST)</h5>
 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'  [More Info](/api/v2/customer-identity-api/authentication/auth-forgot-password)

 
 

 ```ruby

 email = "<email>" #Required
 reset_password_url = "<reset_password_url>" #Required
 email_template = "<email_template>" #Optional

response = AuthenticationApi.forgot_password(email, reset_password_url, email_template)

 ```
 
  
  
 
<h5 id="UserRegistrationByEmail-post-"> Auth User Registration by Email (POST)</h5>
 This API creates a user in the database as well as sends a verification email to the user.  [More Info](/api/v2/customer-identity-api/authentication/auth-user-registration-by-email)

 
 

 ```ruby


 auth_user_registration_model ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>",  }  #Required
 sott = "<sott>" #Required
 email_template = "<email_template>" #Optional
 fields = nil #Optional
 options = "<options>" #Optional
 verification_url = "<verification_url>" #Optional
 welcome_email_template = "<welcome_email_template>" #Optional

response = AuthenticationApi.user_registration_by_email(auth_user_registration_model, sott, email_template, fields, options, verification_url, welcome_email_template)

 ```
 
  
  
 
<h5 id="UserRegistrationByCaptcha-post-"> Auth User Registration By Captcha (POST)</h5>
 This API creates a user in the database as well as sends a verification email to the user.  [More Info](/api/v2/customer-identity-api/authentication/auth-user-registration-by-recaptcha)

 
 

 ```ruby


 auth_user_registration_model_with_captcha ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"g-recaptcha-response" : "<g-recaptcha-response>",
"lastName" : "<lastName>",
"password" : "<password>",  }  #Required
 email_template = "<email_template>" #Optional
 fields = nil #Optional
 options = "<options>" #Optional
 sms_template = "<sms_template>" #Optional
 verification_url = "<verification_url>" #Optional
 welcome_email_template = "<welcome_email_template>" #Optional

response = AuthenticationApi.user_registration_by_captcha(auth_user_registration_model_with_captcha, email_template, fields, options, sms_template, verification_url, welcome_email_template)

 ```
 
  
  
 
<h5 id="AuthValidateAccessToken-get-"> Auth Validate Access token (GET)</h5>
 This api validates access token, if valid then returns a response with its expiry otherwise error.  [More Info](/api/v2/customer-identity-api/authentication/auth-validate-access-token/)

 
 

 ```ruby

 access_token = "<access_token>" #Required

response = AuthenticationApi.auth_validate_access_token(access_token)

 ```
 
  
  
 
<h5 id="AuthInValidateAccessToken-get-"> Access Token Invalidate (GET)</h5>
 This api call invalidates the active access token or expires an access token's validity.  [More Info](/api/v2/customer-identity-api/authentication/auth-invalidate-access-token/)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 prevent_refresh = true #Optional

response = AuthenticationApi.auth_in_validate_access_token(access_token, prevent_refresh)

 ```
 
  
  
 
<h5 id="GetAccessTokenInfo-get-"> Access Token Info (GET)</h5>
 This api call provide the active access token Information  [More Info](/api/v2/customer-identity-api/authentication/auth-access-token-info/)

 
 

 ```ruby

 access_token = "<access_token>" #Required

response = AuthenticationApi.get_access_token_info(access_token)

 ```
 
  
  
 
<h5 id="GetProfileByAccessToken-get-"> Auth Read all Profiles by Token (GET)</h5>
 This API retrieves a copy of the user data based on the access token.  [More Info](/api/v2/customer-identity-api/authentication/auth-read-profiles-by-token/)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 fields = nil #Optional

response = AuthenticationApi.get_profile_by_access_token(access_token, fields)

 ```
 
 
<h5 id="DeleteAccountByDeleteToken-get-"> Auth Delete Account (GET)</h5>
 This API is used to delete an account by passing it a delete token.  [More Info](/api/v2/customer-identity-api/authentication/auth-delete-account/)

 
 

 ```ruby

 deletetoken = "<deletetoken>" #Required

response = AuthenticationApi.delete_account_by_delete_token(deletetoken)

 ```
 
  
  
 
<h5 id="CheckEmailAvailability-get-"> Auth Check Email Availability (GET)</h5>
 This API is used to check the email exists or not on your site.  [More Info](/api/v2/customer-identity-api/authentication/auth-email-availability/)

 
 

 ```ruby

 email = "<email>" #Required

response = AuthenticationApi.check_email_availability(email)

 ```
 
  
  
 
<h5 id="VerifyEmail-get-"> Auth Verify Email (GET)</h5>
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.  [More Info](/api/v2/customer-identity-api/authentication/auth-verify-email/)

 
 

 ```ruby

 verification_token = "<verification_token>" #Required
 fields = nil #Optional
 url = "<url>" #Optional
 welcome_email_template = "<welcome_email_template>" #Optional

response = AuthenticationApi.verify_email(verification_token, fields, url, welcome_email_template)

 ```
 
  
  
 
<h5 id="GetSocialIdentity-get-"> Auth Social Identity (GET)</h5>
 This API is called just after account linking API and it prevents the raas profile of the second account from getting created.  [More Info](/api/v2/customer-identity-api/authentication/auth-social-identity)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 fields = nil #Optional

response = AuthenticationApi.get_social_identity(access_token, fields)

 ```
  
  
 
<h5 id="DeleteAccountWithEmailConfirmation-delete-"> Auth Delete Account with Email Confirmation (DELETE)</h5>
 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token  [More Info](/api/v2/customer-identity-api/authentication/auth-delete-account-with-email-confirmation/)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 delete_url = "<delete_url>" #Optional
 email_template = "<email_template>" #Optional

response = AuthenticationApi.delete_account_with_email_confirmation(access_token, delete_url, email_template)

 ```
 
  
  
 
<h5 id="RemoveEmail-delete-"> Auth Remove Email (DELETE)</h5>
 This API is used to remove additional emails from a user's account.  [More Info](/api/v2/customer-identity-api/authentication/auth-remove-email)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 email = "<email>" #Required

response = AuthenticationApi.remove_email(access_token, email)

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

 
 

 ```ruby


 account_user_profile_update_model ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>",  }  #Required
 uid = "<uid>" #Required
 fields = nil #Optional
 null_support = true #Optional

response = AccountApi.update_account_by_uid(account_user_profile_update_model, uid, fields, null_support)

 ```
 
  
  
 
<h5 id="UpdatePhoneIDByUid-put-"> Update Phone ID by UID (PUT)</h5>
 This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.  [More Info](/api/v2/customer-identity-api/account/update-phoneid-by-uid)

 
 

 ```ruby

 phone = "<phone>" #Required
 uid = "<uid>" #Required
 fields = nil #Optional

response = AccountApi.update_phone_id_by_uid(phone, uid, fields)

 ```
 
  
  
 
<h5 id="SetAccountPasswordByUid-put-"> Account Set Password (PUT)</h5>
 This API is used to set the password of an account in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-set-password)

 
 

 ```ruby

 password = "<password>" #Required
 uid = "<uid>" #Required

response = AccountApi.set_account_password_by_uid(password, uid)

 ```
 
  
  
 
<h5 id="InvalidateAccountEmailVerification-put-"> Account Invalidate Verification Email (PUT)</h5>
 This API is used to invalidate the Email Verification status on an account.  [More Info](/api/v2/customer-identity-api/account/account-invalidate-verification-email)

 
 

 ```ruby

 uid = "<uid>" #Required
 email_template = "<email_template>" #Optional
 verification_url = "<verification_url>" #Optional

response = AccountApi.invalidate_account_email_verification(uid, email_template, verification_url)

 ```
 
  
  
 
<h5 id="ResetPhoneIDVerificationByUid-put-"> Reset phone ID verification (PUT)</h5>
 This API Allows you to reset the phone no verification of an end user’s account.  [More Info](/api/v2/customer-identity-api/phone-authentication/reset-phone-id-verification)

 
 

 ```ruby

 uid = "<uid>" #Required
 sms_template = "<sms_template>" #Optional

response = AccountApi.reset_phone_id_verification_by_uid(uid, sms_template)

 ```
 
  
  
 
<h5 id="UpsertEmail-put-"> Upsert Email (PUT)</h5>
 This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.  [More Info](/api/v2/customer-identity-api/account/upsert-email)

 
 

 ```ruby


 upsert_email_model ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,  }  #Required
 uid = "<uid>" #Required
 fields = nil #Optional

response = AccountApi.upsert_email(upsert_email_model, uid, fields)

 ```
 
  
  
 
<h5 id="AccountUpdateUid-put-"> Update UID (PUT)</h5>
 This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid.  [More Info](/api/v2/customer-identity-api/account/account-update/)

 
 

 ```ruby


 update_uid_model ={ 
"newUid" : "<newUid>",  }  #Required
 uid = "<uid>" #Required

response = AccountApi.account_update_uid(update_uid_model, uid)

 ```
 
  
  
 
<h5 id="CreateAccount-post-"> Account Create (POST)</h5>
 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields  [More Info](/api/v2/customer-identity-api/account/account-create)

 
 

 ```ruby


 account_create_model ={ 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>",  }  #Required
 fields = nil #Optional

response = AccountApi.create_account(account_create_model, fields)

 ```
 
  
  
 
<h5 id="GetForgotPasswordToken-post-"> Forgot Password token (POST)</h5>
 This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.  [More Info](/api/v2/customer-identity-api/account/get-forgot-password-token)

 
 

 ```ruby

 email = "<email>" #Required
 email_template = "<email_template>" #Optional
 reset_password_url = "<reset_password_url>" #Optional
 send_email = true #Optional

response = AccountApi.get_forgot_password_token(email, email_template, reset_password_url, send_email)

 ```
 
  
  
 
<h5 id="GetEmailVerificationToken-post-"> Email Verification token (POST)</h5>
 This API Returns an Email Verification token.  [More Info](/api/v2/customer-identity-api/account/get-email-verification-token)

 
 

 ```ruby

 email = "<email>" #Required

response = AccountApi.get_email_verification_token(email)

 ```
 
  
  
 
<h5 id="GetAccountProfileByEmail-get-"> Account Profiles by Email (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-profiles-by-email)

 
 

 ```ruby

 email = "<email>" #Required
 fields = nil #Optional

response = AccountApi.get_account_profile_by_email(email, fields)

 ```
 
  
  
 
<h5 id="GetAccountProfileByPhone-get-"> Account Profile by Phone ID (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-profiles-by-phone-id/)

 
 

 ```ruby

 phone = "<phone>" #Required
 fields = nil #Optional

response = AccountApi.get_account_profile_by_phone(phone, fields)

 ```
 
  
  
 
<h5 id="GetAccountProfileByUid-get-"> Account Profiles by UID (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-profiles-by-uid)

 
 

 ```ruby

 uid = "<uid>" #Required
 fields = nil #Optional

response = AccountApi.get_account_profile_by_uid(uid, fields)

 ```
 
  
  
 
<h5 id="GetAccountPasswordHashByUid-get-"> Account Password (GET)</h5>
 This API use to retrive the hashed password of a specified account in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-password)

 
 

 ```ruby

 uid = "<uid>" #Required

response = AccountApi.get_account_password_hash_by_uid(uid)

 ```
 
  
  
 
<h5 id="GetAccessTokenByUid-get-"> Access Token based on UID or User impersonation API (GET)</h5>
 The API is used to get LoginRadius access token based on UID.  [More Info](/api/v2/customer-identity-api/account/account-impersonation-api)

 
 

 ```ruby

 uid = "<uid>" #Required

response = AccountApi.get_access_token_by_uid(uid)

 ```
 
  
  
 
<h5 id="GetAccountIdentitiesByEmail-get-"> Account Identities by Email (GET)</h5>
 Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.  [More Info](/api/v2/customer-identity-api/account/account-identities-by-email)

 
 

 ```ruby

 email = "<email>" #Required
 fields = nil #Optional

response = AccountApi.get_account_identities_by_email(email, fields)

 ```
 
  
  
 
<h5 id="DeleteAccountByUid-delete-"> Account Delete (DELETE)</h5>
 This API deletes the Users account and allows them to re-register for a new account.  [More Info](/api/v2/customer-identity-api/account/account-delete)

 
 

 ```ruby

 uid = "<uid>" #Required

response = AccountApi.delete_account_by_uid(uid)

 ```
 
  
  
 
<h5 id="RemoveEmail-delete-"> Account Remove Email (DELETE)</h5>
 Use this API to Remove emails from a user Account  [More Info](/api/v2/customer-identity-api/account/account-email-delete)

 
 

 ```ruby

 email = "<email>" #Required
 uid = "<uid>" #Required
 fields = nil #Optional

response = AccountApi.remove_email(email, uid, fields)

 ```
 
  
  
 
<h5 id="AccountDeleteByEmail-delete-"> Delete User Profiles By Email (DELETE)</h5>
 This API is used to delete all user profiles associated with an Email.  [More Info](/api/v2/customer-identity-api/account/account-email-delete/)

 
 

 ```ruby

 email = "<email>" #Required

response = AccountApi.account_delete_by_email(email)

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

 
 

 ```ruby


 reset_password_by_otp_model ={ 
"otp" : "<otp>",
"password" : "<password>",
"phone" : "<phone>",  }  #Required

response = PhoneAuthenticationApi.reset_password_by_phone_otp(reset_password_by_otp_model)

 ```
 
  
  
 
<h5 id="PhoneVerificationByOTP-put-"> Phone Verification OTP (PUT)</h5>
 This API is used to validate the verification code sent to verify a user's phone number  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-verify-otp)

 
 

 ```ruby

 otp = "<otp>" #Required
 phone = "<phone>" #Required
 fields = nil #Optional
 sms_template = "<sms_template>" #Optional

response = PhoneAuthenticationApi.phone_verification_by_otp(otp, phone, fields, sms_template)

 ```
 
  
  
 
<h5 id="PhoneVerificationOTPByAccessToken-put-"> Phone Verification OTP by Token (PUT)</h5>
 This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-verify-otp-by-token)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 otp = "<otp>" #Required
 sms_template = "<sms_template>" #Optional

response = PhoneAuthenticationApi.phone_verification_otp_by_access_token(access_token, otp, sms_template)

 ```
 
  
  
 
<h5 id="UpdatePhoneNumber-put-"> Phone Number Update (PUT)</h5>
 This API is used to update the login Phone Number of users  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-number-update)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 phone = "<phone>" #Required
 sms_template = "<sms_template>" #Optional

response = PhoneAuthenticationApi.update_phone_number(access_token, phone, sms_template)

 ```
 
  
  
 
<h5 id="LoginByPhone-post-"> Phone Login (POST)</h5>
 This API retrieves a copy of the user data based on the Phone  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-login)

 
 

 ```ruby


 phone_authentication_model ={ 
"password" : "<password>",
"phone" : "<phone>",  }  #Required
 fields = nil #Optional
 login_url = "<login_url>" #Optional
 sms_template = "<sms_template>" #Optional

response = PhoneAuthenticationApi.login_by_phone(phone_authentication_model, fields, login_url, sms_template)

 ```
 
  
  
 
<h5 id="ForgotPasswordByPhoneOTP-post-"> Phone Forgot Password by OTP (POST)</h5>
 This API is used to send the OTP to reset the account password.  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-forgot-password-by-otp)

 
 

 ```ruby

 phone = "<phone>" #Required
 sms_template = "<sms_template>" #Optional

response = PhoneAuthenticationApi.forgot_password_by_phone_otp(phone, sms_template)

 ```
 
  
  
 
<h5 id="PhoneResendVerificationOTP-post-"> Phone Resend Verification OTP (POST)</h5>
 This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-resend-otp)

 
 

 ```ruby

 phone = "<phone>" #Required
 sms_template = "<sms_template>" #Optional

response = PhoneAuthenticationApi.phone_resend_verification_otp(phone, sms_template)

 ```
 
  
  
 
<h5 id="PhoneResendVerificationOTPByToken-post-"> Phone Resend Verification OTP By Token (POST)</h5>
 This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-resend-otp-by-token)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 phone = "<phone>" #Required
 sms_template = "<sms_template>" #Optional

response = PhoneAuthenticationApi.phone_resend_verification_otp_by_token(access_token, phone, sms_template)

 ```
 
  
  
 
<h5 id="UserRegistrationByPhone-post-"> Phone User Registration by SMS (POST)</h5>
 This API registers the new users into your Cloud Storage and triggers the phone verification process.  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-user-registration-by-sms)

 
 

 ```ruby


 auth_user_registration_model ={ 
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>",
"phoneId" : "<phoneId>",  }  #Required
 sott = "<sott>" #Required
 fields = nil #Optional
 options = "<options>" #Optional
 sms_template = "<sms_template>" #Optional
 verification_url = "<verification_url>" #Optional
 welcome_email_template = "<welcome_email_template>" #Optional

response = PhoneAuthenticationApi.user_registration_by_phone(auth_user_registration_model, sott, fields, options, sms_template, verification_url, welcome_email_template)

 ```
 
  
  
 
<h5 id="CheckPhoneNumberAvailability-get-"> Phone Number Availability (GET)</h5>
 This API is used to check the Phone Number exists or not on your site.  [More Info](/api/v2/customer-identity-api/phone-authentication/phone-number-availability)

 
 

 ```ruby

 phone = "<phone>" #Required

response = PhoneAuthenticationApi.check_phone_number_availability(phone)

 ```
 
  
  
 
<h5 id="RemovePhoneIDByAccessToken-delete-"> Remove Phone ID by Access Token (DELETE)</h5>
 This API is used to delete the Phone ID on a user's account via the access token  [More Info](/api/v2/customer-identity-api/phone-authentication/remove-phone-id-by-access-token)

 
 

 ```ruby

 access_token = "<access_token>" #Required

response = PhoneAuthenticationApi.remove_phone_id_by_access_token(access_token)

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

 
 

 ```ruby

 access_token = "<access_token>" #Required

 multi_factor_auth_model_by_google_authenticator_code ={ 
"googleAuthenticatorCode" : "<googleAuthenticatorCode>",  }  #Required
 fields = nil #Optional
 sms_template = "<sms_template>" #Optional

response = MultiFactorAuthenticationApi.m_f_a_update_by_access_token(access_token, multi_factor_auth_model_by_google_authenticator_code, fields, sms_template)

 ```
 
  
  
 
<h5 id="MFAUpdatePhoneNumberByToken-put-"> MFA Update Phone Number by Token (PUT)</h5>
 This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number-by-token/)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 phone_no2_f_a = "<phone_no2_f_a>" #Required
 sms_template2_f_a = "<sms_template2_f_a>" #Optional

response = MultiFactorAuthenticationApi.m_f_a_update_phone_number_by_token(access_token, phone_no2_f_a, sms_template2_f_a)

 ```
 
  
  
 
<h5 id="MFAValidateGoogleAuthCode-put-"> MFA Validate Google Auth Code (PUT)</h5>
 This API is used to login via Multi-factor-authentication by passing the google authenticator code.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-validate-google-auth-code/)

 
 

 ```ruby

 google_authenticator_code = "<google_authenticator_code>" #Required
 second_factor_authentication_token = "<second_factor_authentication_token>" #Required
 fields = nil #Optional
 sms_template2_f_a = "<sms_template2_f_a>" #Optional

response = MultiFactorAuthenticationApi.m_f_a_validate_google_auth_code(google_authenticator_code, second_factor_authentication_token, fields, sms_template2_f_a)

 ```
 
  
  
 
<h5 id="MFAUpdatePhoneNumber-put-"> MFA Update Phone Number (PUT)</h5>
 This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-update-phone-number/)

 
 

 ```ruby

 phone_no2_f_a = "<phone_no2_f_a>" #Required
 second_factor_authentication_token = "<second_factor_authentication_token>" #Required
 sms_template2_f_a = "<sms_template2_f_a>" #Optional

response = MultiFactorAuthenticationApi.m_f_a_update_phone_number(phone_no2_f_a, second_factor_authentication_token, sms_template2_f_a)

 ```
 
  
  
 
<h5 id="MFALoginByEmail-post-"> MFA Email Login (POST)</h5>
 This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/mfa-email-login)

 
 

 ```ruby

 email = "<email>" #Required
 password = "<password>" #Required
 email_template = "<email_template>" #Optional
 fields = nil #Optional
 login_url = "<login_url>" #Optional
 sms_template = "<sms_template>" #Optional
 sms_template2_f_a = "<sms_template2_f_a>" #Optional
 verification_url = "<verification_url>" #Optional

response = MultiFactorAuthenticationApi.m_f_a_login_by_email(email, password, email_template, fields, login_url, sms_template, sms_template2_f_a, verification_url)

 ```
 
  
  
 
<h5 id="MFALoginByPhone-post-"> MFA Phone Login (POST)</h5>
 This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/mfa-phone-login)

 
 

 ```ruby

 password = "<password>" #Required
 phone = "<phone>" #Required
 email_template = "<email_template>" #Optional
 fields = nil #Optional
 login_url = "<login_url>" #Optional
 sms_template = "<sms_template>" #Optional
 sms_template2_f_a = "<sms_template2_f_a>" #Optional
 verification_url = "<verification_url>" #Optional

response = MultiFactorAuthenticationApi.m_f_a_login_by_phone(password, phone, email_template, fields, login_url, sms_template, sms_template2_f_a, verification_url)

 ```
 
  
  
 
<h5 id="MFAConfigureByAccessToken-get-"> MFA Validate Access Token (GET)</h5>
 This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/mfa-validate-access-token/)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 sms_template2_f_a = "<sms_template2_f_a>" #Optional

response = MultiFactorAuthenticationApi.m_f_a_configure_by_access_token(access_token, sms_template2_f_a)

 ```
 
  
  
 
<h5 id="MFAResendOTP-get-"> MFA Resend Otp (GET)</h5>
 This API is used to resending the verification OTP to the provided phone number  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/resend-twofactorauthentication-otp/)

 
 

 ```ruby

 second_factor_authentication_token = "<second_factor_authentication_token>" #Required
 sms_template2_f_a = "<sms_template2_f_a>" #Optional

response = MultiFactorAuthenticationApi.m_f_a_resend_otp(second_factor_authentication_token, sms_template2_f_a)

 ```
 
  
  
 
<h5 id="MFAResetGoogleAuthByToken-delete-"> MFA Reset Google Authenticator by Token (DELETE)</h5>
 This API Resets the Google Authenticator configurations on a given account via the access token  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-reset-google-authenticator-by-token/)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 googleauthenticator = true #Required

response = MultiFactorAuthenticationApi.m_f_a_reset_google_auth_by_token(access_token, googleauthenticator)

 ```
 
  
  
 
<h5 id="MFAResetSMSAuthByToken-delete-"> MFA Reset SMS Authenticator by Token (DELETE)</h5>
 This API resets the SMS Authenticator configurations on a given account via the access token.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-token/)

 
 

 ```ruby

 access_token = "<access_token>" #Required
 otpauthenticator = true #Required

response = MultiFactorAuthenticationApi.m_f_a_reset_sms_auth_by_token(access_token, otpauthenticator)

 ```
 
  
  
 
<h5 id="MFAResetSMSAuthenticatorByUid-delete-"> MFA Reset SMS Authenticator By UID (DELETE)</h5>
 This API resets the SMS Authenticator configurations on a given account via the UID.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/sms-authenticator/mfa-reset-sms-authenticator-by-uid/)

 
 

 ```ruby

 otpauthenticator = true #Required
 uid = "<uid>" #Required

response = MultiFactorAuthenticationApi.m_f_a_reset_sms_authenticator_by_uid(otpauthenticator, uid)

 ```
 
  
  
 
<h5 id="MFAResetGoogleAuthenticatorByUid-delete-"> MFA Reset Google Authenticator By UID (DELETE)</h5>
 This API resets the Google Authenticator configurations on a given account via the UID.  [More Info](/api/v2/customer-identity-api/multi-factor-authentication/google-authenticator/mfa-reset-google-authenticator-by-uid/)

 
 

 ```ruby

 googleauthenticator = true #Required
 uid = "<uid>" #Required

response = MultiFactorAuthenticationApi.m_f_a_reset_google_authenticator_by_uid(googleauthenticator, uid)

 ```
 
  
  
 
 

### PasswordLessLogin API


List of APIs in this Section:<br>

* PUT : [Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br>
* GET : [Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br>
* GET : [Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br>
* GET : [Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>



<h5 id="PasswordlessLoginPhoneVerification-put-"> Passwordless Login Phone Verification (PUT)</h5>
 This API verifies an account by OTP and allows the customer to login.  [More Info](/api/v2/customer-identity-api/passwordless-login/passwordless-login-phone-verification)

 
 

 ```ruby


 password_less_login_otp_model ={ 
"otp" : "<otp>",
"phone" : "<phone>",  }  #Required
 fields = nil #Optional
 sms_template = "<sms_template>" #Optional

response = PasswordLessLoginApi.passwordless_login_phone_verification(password_less_login_otp_model, fields, sms_template)

 ```
 
  
  
 
<h5 id="PasswordlessLoginByPhone-get-"> Passwordless Login by Phone (GET)</h5>
 API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID  [More Info](/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-phone)

 
 

 ```ruby

 phone = "<phone>" #Required
 sms_template = "<sms_template>" #Optional

response = PasswordLessLoginApi.passwordless_login_by_phone(phone, sms_template)

 ```
 
  
  
 
<h5 id="PasswordlessLoginByEmail-get-"> Passwordless Login By Email (GET)</h5>
 This API is used to send a Passwordless Login verification link to the provided Email ID  [More Info](/api/v2/customer-identity-api/passwordless-login/passwordless-login-by-email)

 
 

 ```ruby

 email = "<email>" #Required
 password_less_login_template = "<password_less_login_template>" #Optional
 verification_url = "<verification_url>" #Optional

response = PasswordLessLoginApi.passwordless_login_by_email(email, password_less_login_template, verification_url)

 ```
 
  
  
 
<h5 id="PasswordlessLoginVerification-get-"> Passwordless Login Verification (GET)</h5>
 This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API  [More Info](/api/v2/customer-identity-api/passwordless-login/passwordless-login-verification)

 
 

 ```ruby

 verification_token = "<verification_token>" #Required
 fields = nil #Optional
 welcome_email_template = "<welcome_email_template>" #Optional

response = PasswordLessLoginApi.passwordless_login_verification(verification_token, fields, welcome_email_template)

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

 
 

 ```ruby


 account_roles_model ={ 
"roles" : [  "roles" ] ,  }  #Required
 uid = "<uid>" #Required

response = RoleApi.assign_roles_by_uid(account_roles_model, uid)

 ```
 
  
  
 
<h5 id="UpdateRoleContextByUid-put-"> Upsert Context (PUT)</h5>
 This API creates a Context with a set of Roles  [More Info](/api/v2/customer-identity-api/roles-management/upsert-context)

 
 

 ```ruby


 account_role_context_model ={ 
"roleContext" : [   { 
  "additionalPermissions" : ["<additionalPermissions>" ] ,
 "context" : "<context>"  ,
 "expiration" : "<expiration>"  ,
  "roles" : ["<roles>" ]  
}  ] ,  }  #Required
 uid = "<uid>" #Required

response = RoleApi.update_role_context_by_uid(account_role_context_model, uid)

 ```
 
  
  
 
<h5 id="AddRolePermissions-put-"> Add Permissions to Role (PUT)</h5>
 This API is used to add permissions to a given role.  [More Info](/api/v2/customer-identity-api/roles-management/add-permissions-to-role)

 
 

 ```ruby


 permissions_model ={ 
"permissions" : [  "permissions" ] ,  }  #Required
 role = "<role>" #Required

response = RoleApi.add_role_permissions(permissions_model, role)

 ```
 
  
  
 
<h5 id="CreateRoles-post-"> Roles Create (POST)</h5>
 This API creates a role with permissions.  [More Info](/api/v2/customer-identity-api/roles-management/roles-create)

 
 

 ```ruby


 roles_model ={ 
"roles" : [   { 
 "name" : "<name>"  ,
"permissions" : {"Permission_name":true}  
}  ] ,  }  #Required

response = RoleApi.create_roles(roles_model)

 ```
 
  
  
 
<h5 id="GetRolesByUid-get-"> Roles by UID (GET)</h5>
 API is used to retrieve all the assigned roles of a particular User.  [More Info](/api/v2/customer-identity-api/roles-management/get-roles-by-uid)

 
 

 ```ruby

 uid = "<uid>" #Required

response = RoleApi.get_roles_by_uid(uid)

 ```
 
  
  
 
<h5 id="GetRoleContextByUid-get-"> Get Context with Roles and Permissions (GET)</h5>
 This API Gets the contexts that have been configured and the associated roles and permissions.  [More Info](/api/v2/customer-identity-api/roles-management/get-context)

 
 

 ```ruby

 uid = "<uid>" #Required

response = RoleApi.get_role_context_by_uid(uid)

 ```
 
  
  
 
<h5 id="GetRoleContextByContextName-get-"> Role Context profile (GET)</h5>
 The API is used to retrieve role context by the context name.  [More Info](/api/v2/customer-identity-api/roles-management/role-context-profile/)

 
 

 ```ruby

 context_name = "<context_name>" #Required

response = RoleApi.get_role_context_by_context_name(context_name)

 ```
 
  
  
 
<h5 id="GetRolesList-get-"> Roles List (GET)</h5>
 This API retrieves the complete list of created roles with permissions of your app.  [More Info](/api/v2/customer-identity-api/roles-management/roles-list)

 
 

 ```ruby


response = RoleApi.get_roles_list()

 ```
 
  
  
 
<h5 id="UnassignRolesByUid-delete-"> Unassign Roles by UID (DELETE)</h5>
 This API is used to unassign roles from a user.  [More Info](/api/v2/customer-identity-api/roles-management/unassign-roles-by-uid)

 
 

 ```ruby


 account_roles_model ={ 
"roles" : [  "roles" ] ,  }  #Required
 uid = "<uid>" #Required

response = RoleApi.unassign_roles_by_uid(account_roles_model, uid)

 ```
 
  
  
 
<h5 id="DeleteRoleContextByUid-delete-"> Delete Role Context (DELETE)</h5>
 This API Deletes the specified Role Context  [More Info](/api/v2/customer-identity-api/roles-management/delete-context)

 
 

 ```ruby

 context_name = "<context_name>" #Required
 uid = "<uid>" #Required

response = RoleApi.delete_role_context_by_uid(context_name, uid)

 ```
 
  
  
 
<h5 id="DeleteRolesFromRoleContextByUid-delete-"> Delete Role from Context (DELETE)</h5>
 This API Deletes the specified Role from a Context.  [More Info](/api/v2/customer-identity-api/roles-management/delete-role-from-context/)

 
 

 ```ruby

 context_name = "<context_name>" #Required

 role_context_remove_role_model ={ 
"roles" : [  "roles" ] ,  }  #Required
 uid = "<uid>" #Required

response = RoleApi.delete_roles_from_role_context_by_uid(context_name, role_context_remove_role_model, uid)

 ```
 
  
  
 
<h5 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-"> Delete Additional Permission from Context (DELETE)</h5>
 This API Deletes Additional Permissions from Context.  [More Info](/api/v2/customer-identity-api/roles-management/delete-permissions-from-context)

 
 

 ```ruby

 context_name = "<context_name>" #Required

 role_context_additional_permission_remove_role_model ={ 
"additionalPermissions" : [  "additionalPermissions" ] ,  }  #Required
 uid = "<uid>" #Required

response = RoleApi.delete_additional_permission_from_role_context_by_uid(context_name, role_context_additional_permission_remove_role_model, uid)

 ```
 
  
  
 
<h5 id="DeleteRole-delete-"> Account Delete Role (DELETE)</h5>
 This API is used to delete the role.  [More Info](/api/v2/customer-identity-api/roles-management/delete-role)

 
 

 ```ruby

 role = "<role>" #Required

response = RoleApi.delete_role(role)

 ```
 
  
  
 
<h5 id="RemoveRolePermissions-delete-"> Remove Permissions (DELETE)</h5>
 API is used to remove permissions from a role.  [More Info](/api/v2/customer-identity-api/roles-management/remove-permissions)

 
 

 ```ruby


 permissions_model ={ 
"permissions" : [  "permissions" ] ,  }  #Required
 role = "<role>" #Required

response = RoleApi.remove_role_permissions(permissions_model, role)

 ```
 
  
  
 
 

### Sott API


List of APIs in this Section:<br>

* GET : [Generate SOTT](#GenerateSott-get-)<br>



<h5 id="GenerateSott-get-"> Generate SOTT (GET)</h5>
 This API allows you to generate SOTT with a given expiration time.  [More Info](/api/v2/customer-identity-api/session/generate-sott-token)

 
 

 ```ruby

 time_difference = 0 #Optional

response = SottApi.generate_sott(time_difference)

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

 
 

 ```ruby

 fb_access_token = "<fb_access_token>" #Required

response = NativeSocialApi.get_access_token_by_facebook_access_token(fb_access_token)

 ```
 
  
  
 
<h5 id="GetAccessTokenByTwitterAccessToken-get-"> Access Token via Twitter Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-twitter-token)

 
 

 ```ruby

 tw_access_token = "<tw_access_token>" #Required
 tw_token_secret = "<tw_token_secret>" #Required

response = NativeSocialApi.get_access_token_by_twitter_access_token(tw_access_token, tw_token_secret)

 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleAccessToken-get-"> Access Token via Google Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-token)

 
 

 ```ruby

 google_access_token = "<google_access_token>" #Required
 client_id = "<client_id>" #Optional
 refresh_token = "<refresh_token>" #Optional

response = NativeSocialApi.get_access_token_by_google_access_token(google_access_token, client_id, refresh_token)

 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleJWTAccessToken-get-"> Access Token using google JWT token for Native Mobile Login (GET)</h5>
 This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-googlejwt)

 
 

 ```ruby

 id_token = "<id_token>" #Required

response = NativeSocialApi.get_access_token_by_google_j_w_t_access_token(id_token)

 ```
 
  
  
 
<h5 id="GetAccessTokenByLinkedinAccessToken-get-"> Access Token via Linkedin Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-linkedin-token/)

 
 

 ```ruby

 ln_access_token = "<ln_access_token>" #Required

response = NativeSocialApi.get_access_token_by_linkedin_access_token(ln_access_token)

 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleAuthCode-get-"> Access Token via Google AuthCode (GET)</h5>
 The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.  [More Info](/api/v2/customer-identity-api/social-login/native-social-login-api/access-token-via-google-auth-code)

 
 

 ```ruby

 google_authcode = "<google_authcode>" #Required

response = NativeSocialApi.get_access_token_by_google_auth_code(google_authcode)

 ```
 
  
  
 
 

### WebHook API


List of APIs in this Section:<br>

* POST : [Webhook Subscribe](#WebHookSubscribe-post-)<br>
* GET : [Webhook Subscribed URLs](#GetWebHookSubscribedURLs-get-)<br>
* GET : [Webhook Test](#WebhookTest-get-)<br>
* DELETE : [WebHook Unsubscribe](#WebHookUnsubscribe-delete-)<br>



<h5 id="WebHookSubscribe-post-"> Webhook Subscribe (POST)</h5>
 API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.  [More Info](/api/v2/integrations/webhooks/webhook-subscribe)

 
 

 ```ruby


 web_hook_subscribe_model ={ 
"event" : "<event>",
"targetUrl" : "<targetUrl>",  }  #Required

response = WebHookApi.web_hook_subscribe(web_hook_subscribe_model)

 ```
 
  
  
 
<h5 id="GetWebHookSubscribedURLs-get-"> Webhook Subscribed URLs (GET)</h5>
 This API is used to fatch all the subscribed URLs, for particular event  [More Info](/api/v2/integrations/webhooks/webhook-subscribed-urls)

 
 

 ```ruby

 event = "<event>" #Required

response = WebHookApi.get_web_hook_subscribed_u_r_ls(event)

 ```
 
  
  
 
<h5 id="WebhookTest-get-"> Webhook Test (GET)</h5>
 API can be used to test a subscribed WebHook.  [More Info](/api/v2/integrations/webhooks/webhook-test)

 
 

 ```ruby


response = WebHookApi.webhook_test()

 ```
 
  
  
 
<h5 id="WebHookUnsubscribe-delete-"> WebHook Unsubscribe (DELETE)</h5>
 API can be used to unsubscribe a WebHook configured on your LoginRadius site.  [More Info](/api/v2/integrations/webhooks/webhook-unsubscribe)

 
 

 ```ruby


 web_hook_subscribe_model ={ 
"event" : "<event>",
"targetUrl" : "<targetUrl>",  }  #Required

response = WebHookApi.web_hook_unsubscribe(web_hook_subscribe_model)

 ```
 
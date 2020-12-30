---
title: Python Library
description: "A guide to impliment LoginRadius SDK in a Python application."
summary: "A guide to impliment LoginRadius SDK in a Python application"
---

>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

LoginRadius Combined Node SDK features a combined SDK set to encompass Social Login, User Registration.


This document contains information and examples regarding the LoginRadius Python SDK. It provides guidance for working with social authentication, user profile data, and auth implementation with a variety of social networks such as Facebook, Google, Twitter. You can get the SDK from [here](https://github.com/LoginRadius/python-sdk) 

## Installation

### Install From Package

Using `pip`

```
 pip install loginradius-v2==10.0.1

```

or with easy_install:

```
  easy_install loginradius-v2==10.0.1
```

### Install From Source

You can download the latest version from PyPI

- Unzip/untar the files.
- Browse to the directory that you extracted the files to.
- Run python setup.py install to install the LoginRadius module.

### Requests library
To call API's, install requests library.

Using pip

```
 pip install requests
```

or with easy_install
```
 easy_install requests
```


## Configuration

#### Initialize SDK

Import the class

```python
 from LoginRadius import LoginRadius as LR
```

- When your Python application initializes, set your API Key and Secret:

```python
  LR.API_KEY = "<API-KEY>"
  LR.API_SECRET = "<API-SECRET>"
  loginradius = LR()
```
- To enable API request signing, set the value of 'API_REQUEST_SIGNING' to True

Create login_radius.rb in /config/initializers:

```python
  LR.API_REQUEST_SIGNING = True
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

 ```python
  
access_token = "<access_token>" #Required
user_profile_update_model = { 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
}  #Required 
email_template = "<email_template>" #Optional 
fields = "<fields>" #Optional 
null_support = "True" #Optional 
sms_template = "<sms_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.update_profile_by_access_token(access_token, user_profile_update_model, email_template, fields, null_support, sms_template, verification_url)
 ```
 
  
  
 
<h5 id="VerifyEmailByOTP-put-"> Auth Verify Email By OTP (PUT)</h5>
 This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.  

 ```python
 
email_verification_by_otp_model = { 
"email" : "<email>",
"otp" : "<otp>"
}  #Required 
fields = "<fields>" #Optional 
url = "<url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.verify_email_by_otp(email_verification_by_otp_model, fields, url, welcome_email_template)
 ```
 
  
  
 
<h5 id="ResetPasswordByResetToken-put-"> Auth Reset Password by Reset Token (PUT)</h5>
 This API is used to set a new password for the specified account.  

 ```python
 
reset_password_by_reset_token_model = { 
"password" : "<password>",
"resetToken" : "<resetToken>"
}  #Required

result = loginradius.authentication.reset_password_by_reset_token(reset_password_by_reset_token_model)
 ```
 
  
  
 
<h5 id="ChangePassword-put-"> Auth Change Password (PUT)</h5>
 This API is used to change the accounts password based on the previous password  

 ```python
  
access_token = "<access_token>" #Required 
new_password = "<new_password>" #Required 
old_password = "<old_password>" #Required

result = loginradius.authentication.change_password(access_token, new_password, old_password)
 ```
 
  
  
 
<h5 id="AuthResendEmailVerification-put-"> Auth Resend Email Verification (PUT)</h5>
 This API resends the verification email to the user.  

 ```python
  
email = "<email>" #Required 
email_template = "<email_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.auth_resend_email_verification(email, email_template, verification_url)
 ```
 
  
  
 
<h5 id="AddEmail-post-"> Auth Add Email (POST)</h5>
 This API is used to add additional emails to a user's account.  

 ```python
  
access_token = "<access_token>" #Required 
email = "<email>" #Required 
type = "<type>" #Required 
email_template = "<email_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.add_email(access_token, email, type, email_template, verification_url)
 ```
 
  
  
 
<h5 id="LoginByEmail-post-"> Auth Login by Email (POST)</h5>
 This API retrieves a copy of the user data based on the Email  

 ```python
 
email_authentication_model = { 
"email" : "<email>",
"password" : "<password>"
}  #Required 
email_template = "<email_template>" #Optional 
fields = "<fields>" #Optional 
login_url = "<login_url>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.login_by_email(email_authentication_model, email_template, fields, login_url, verification_url)
 ```
 
  
  
 
<h5 id="ForgotPassword-post-"> Auth Forgot Password (POST)</h5>
 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'  

 ```python
  
email = "<email>" #Required 
reset_password_url = "<reset_password_url>" #Required 
email_template = "<email_template>" #Optional

result = loginradius.authentication.forgot_password(email, reset_password_url, email_template)
 ```
 
  
  
 
<h5 id="UserRegistrationByEmail-post-"> Auth User Registration by Email (POST)</h5>
 This API creates a user in the database as well as sends a verification email to the user.  

 ```python
 
auth_user_registration_model = { 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
}  #Required 
sott = "<sott>" #Required 
email_template = "<email_template>" #Optional 
fields = "<fields>" #Optional 
options = "<options>" #Optional 
verification_url = "<verification_url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.user_registration_by_email(auth_user_registration_model, sott, email_template, fields, options, verification_url, welcome_email_template)
 ```
 
  
  
 
<h5 id="UserRegistrationByCaptcha-post-"> Auth User Registration By Captcha (POST)</h5>
 This API creates a user in the database as well as sends a verification email to the user.  

 ```python
 
auth_user_registration_model_with_captcha = { 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"g-recaptcha-response" : "<g-recaptcha-response>",
"lastName" : "<lastName>",
"password" : "<password>"
}  #Required 
email_template = "<email_template>" #Optional 
fields = "<fields>" #Optional 
options = "<options>" #Optional 
sms_template = "<sms_template>" #Optional 
verification_url = "<verification_url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.user_registration_by_captcha(auth_user_registration_model_with_captcha, email_template, fields, options, sms_template, verification_url, welcome_email_template)
 ```
 
  
  
 
<h5 id="AuthValidateAccessToken-get-"> Auth Validate Access token (GET)</h5>
 This api validates access token, if valid then returns a response with its expiry otherwise error.  

 ```python
  
access_token = "<access_token>" #Required

result = loginradius.authentication.auth_validate_access_token(access_token)
 ```
 
  
  
 
<h5 id="AuthInValidateAccessToken-get-"> Access Token Invalidate (GET)</h5>
 This api call invalidates the active access token or expires an access token's validity.  

 ```python
  
access_token = "<access_token>" #Required 
prevent_refresh = "True" #Optional

result = loginradius.authentication.auth_in_validate_access_token(access_token, prevent_refresh)
 ```
 
  
  
 
<h5 id="GetAccessTokenInfo-get-"> Access Token Info (GET)</h5>
 This api call provide the active access token Information  

 ```python
  
access_token = "<access_token>" #Required

result = loginradius.authentication.get_access_token_info(access_token)
 ```
 
  
  
 
<h5 id="GetProfileByAccessToken-get-"> Auth Read all Profiles by Token (GET)</h5>
 This API retrieves a copy of the user data based on the access token.  

 ```python
  
access_token = "<access_token>" #Required 
fields = "<fields>" #Optional

result = loginradius.authentication.get_profile_by_access_token(access_token, fields)
 ```
 
  
 
<h5 id="DeleteAccountByDeleteToken-get-"> Auth Delete Account (GET)</h5>
 This API is used to delete an account by passing it a delete token.  

 ```python
  
deletetoken = "<deletetoken>" #Required

result = loginradius.authentication.delete_account_by_delete_token(deletetoken)
 ```
 
  
  
 
<h5 id="CheckEmailAvailability-get-"> Auth Check Email Availability (GET)</h5>
 This API is used to check the email exists or not on your site.  

 ```python
  
email = "<email>" #Required

result = loginradius.authentication.check_email_availability(email)
 ```
 
  
  
 
<h5 id="VerifyEmail-get-"> Auth Verify Email (GET)</h5>
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.  

 ```python
  
verification_token = "<verification_token>" #Required 
fields = "<fields>" #Optional 
url = "<url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.verify_email(verification_token, fields, url, welcome_email_template)
 ```
 
  
  
 
<h5 id="GetSocialIdentity-get-"> Auth Social Identity (GET)</h5>
 This API is called just after account linking API and it prevents the raas profile of the second account from getting created.  

 ```python
  
access_token = "<access_token>" #Required 
fields = "<fields>" #Optional

result = loginradius.authentication.get_social_identity(access_token, fields)
 ```

 
<h5 id="DeleteAccountWithEmailConfirmation-delete-"> Auth Delete Account with Email Confirmation (DELETE)</h5>
 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token  

 ```python
  
access_token = "<access_token>" #Required 
delete_url = "<delete_url>" #Optional 
email_template = "<email_template>" #Optional

result = loginradius.authentication.delete_account_with_email_confirmation(access_token, delete_url, email_template)
 ```
 
  
  
 
<h5 id="RemoveEmail-delete-"> Auth Remove Email (DELETE)</h5>
 This API is used to remove additional emails from a user's account.  

 ```python
  
access_token = "<access_token>" #Required 
email = "<email>" #Required

result = loginradius.authentication.remove_email(access_token, email)
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

 ```python
 
account_user_profile_update_model = { 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
}  #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional 
null_support = "True" #Optional

result = loginradius.account.update_account_by_uid(account_user_profile_update_model, uid, fields, null_support)
 ```
 
  
  
 
<h5 id="UpdatePhoneIDByUid-put-"> Update Phone ID by UID (PUT)</h5>
 This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.  

 ```python
  
phone = "<phone>" #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.update_phone_id_by_uid(phone, uid, fields)
 ```
 
  
  
 
<h5 id="SetAccountPasswordByUid-put-"> Account Set Password (PUT)</h5>
 This API is used to set the password of an account in Cloud Storage.  

 ```python
  
password = "<password>" #Required 
uid = "<uid>" #Required

result = loginradius.account.set_account_password_by_uid(password, uid)
 ```
 
  
  
 
<h5 id="InvalidateAccountEmailVerification-put-"> Account Invalidate Verification Email (PUT)</h5>
 This API is used to invalidate the Email Verification status on an account.  

 ```python
  
uid = "<uid>" #Required 
email_template = "<email_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.account.invalidate_account_email_verification(uid, email_template, verification_url)
 ```
 
  
  
 
<h5 id="ResetPhoneIDVerificationByUid-put-"> Reset phone ID verification (PUT)</h5>
 This API Allows you to reset the phone no verification of an end user’s account.  

 ```python
  
uid = "<uid>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.account.reset_phone_id_verification_by_uid(uid, sms_template)
 ```
 
  
  
 
<h5 id="UpsertEmail-put-"> Upsert Email (PUT)</h5>
 This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.  

 ```python
 
upsert_email_model = { 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] 
}  #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.upsert_email(upsert_email_model, uid, fields)
 ```
 
  
  
 
<h5 id="AccountUpdateUid-put-"> Update UID (PUT)</h5>
 This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid.  

 ```python
 
update_uid_model = { 
"newUid" : "<newUid>"
}  #Required 
uid = "<uid>" #Required

result = loginradius.account.account_update_uid(update_uid_model, uid)
 ```
 
  
  
 
<h5 id="CreateAccount-post-"> Account Create (POST)</h5>
 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields  

 ```python
 
account_create_model = { 
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
}  #Required 
fields = "<fields>" #Optional

result = loginradius.account.create_account(account_create_model, fields)
 ```
 
  
  
 
<h5 id="GetForgotPasswordToken-post-"> Forgot Password token (POST)</h5>
 This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.  

 ```python
  
email = "<email>" #Required 
email_template = "<email_template>" #Optional 
reset_password_url = "<reset_password_url>" #Optional 
send_email = "True" #Optional

result = loginradius.account.get_forgot_password_token(email, email_template, reset_password_url, send_email)
 ```
 
  
  
 
<h5 id="GetEmailVerificationToken-post-"> Email Verification token (POST)</h5>
 This API Returns an Email Verification token.  

 ```python
  
email = "<email>" #Required

result = loginradius.account.get_email_verification_token(email)
 ```
 
  
  
 
<h5 id="GetAccountProfileByEmail-get-"> Account Profiles by Email (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.  

 ```python
  
email = "<email>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_profile_by_email(email, fields)
 ```
 
  
  
 
<h5 id="GetAccountProfileByPhone-get-"> Account Profile by Phone ID (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.  

 ```python
  
phone = "<phone>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_profile_by_phone(phone, fields)
 ```
 
  
  
 
<h5 id="GetAccountProfileByUid-get-"> Account Profiles by UID (GET)</h5>
 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.  

 ```python
  
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_profile_by_uid(uid, fields)
 ```
 
  
  
 
<h5 id="GetAccountPasswordHashByUid-get-"> Account Password (GET)</h5>
 This API use to retrive the hashed password of a specified account in Cloud Storage.  

 ```python
  
uid = "<uid>" #Required

result = loginradius.account.get_account_password_hash_by_uid(uid)
 ```
 
  
  
 
<h5 id="GetAccessTokenByUid-get-"> Access Token based on UID or User impersonation API (GET)</h5>
 The API is used to get LoginRadius access token based on UID.  

 ```python
  
uid = "<uid>" #Required

result = loginradius.account.get_access_token_by_uid(uid)
 ```
 
  
  
 
<h5 id="GetAccountIdentitiesByEmail-get-"> Account Identities by Email (GET)</h5>
 Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.  

 ```python
  
email = "<email>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_identities_by_email(email, fields)
 ```
 
  
  
 
<h5 id="DeleteAccountByUid-delete-"> Account Delete (DELETE)</h5>
 This API deletes the Users account and allows them to re-register for a new account.  

 ```python
  
uid = "<uid>" #Required

result = loginradius.account.delete_account_by_uid(uid)
 ```
 
  
  
 
<h5 id="RemoveEmail-delete-"> Account Remove Email (DELETE)</h5>
 Use this API to Remove emails from a user Account  

 ```python
  
email = "<email>" #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.remove_email(email, uid, fields)
 ```
 
  
  
 
<h5 id="AccountDeleteByEmail-delete-"> Delete User Profiles By Email (DELETE)</h5>
 This API is used to delete all user profiles associated with an Email.  

 ```python
  
email = "<email>" #Required

result = loginradius.account.account_delete_by_email(email)
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

 ```python
 
reset_password_by_otp_model = { 
"otp" : "<otp>",
"password" : "<password>",
"phone" : "<phone>"
}  #Required

result = loginradius.phone_authentication.reset_password_by_phone_otp(reset_password_by_otp_model)
 ```
 
  
  
 
<h5 id="PhoneVerificationByOTP-put-"> Phone Verification OTP (PUT)</h5>
 This API is used to validate the verification code sent to verify a user's phone number  

 ```python
  
otp = "<otp>" #Required 
phone = "<phone>" #Required 
fields = "<fields>" #Optional 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.phone_verification_by_otp(otp, phone, fields, sms_template)
 ```
 
  
  
 
<h5 id="PhoneVerificationOTPByAccessToken-put-"> Phone Verification OTP by Token (PUT)</h5>
 This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.  

 ```python
  
access_token = "<access_token>" #Required 
otp = "<otp>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.phone_verification_otp_by_access_token(access_token, otp, sms_template)
 ```
 
  
  
 
<h5 id="UpdatePhoneNumber-put-"> Phone Number Update (PUT)</h5>
 This API is used to update the login Phone Number of users  

 ```python
  
access_token = "<access_token>" #Required 
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.update_phone_number(access_token, phone, sms_template)
 ```
 
  
  
 
<h5 id="LoginByPhone-post-"> Phone Login (POST)</h5>
 This API retrieves a copy of the user data based on the Phone  

 ```python
 
phone_authentication_model = { 
"password" : "<password>",
"phone" : "<phone>"
}  #Required 
fields = "<fields>" #Optional 
login_url = "<login_url>" #Optional 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.login_by_phone(phone_authentication_model, fields, login_url, sms_template)
 ```
 
  
  
 
<h5 id="ForgotPasswordByPhoneOTP-post-"> Phone Forgot Password by OTP (POST)</h5>
 This API is used to send the OTP to reset the account password.  

 ```python
  
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.forgot_password_by_phone_otp(phone, sms_template)
 ```
 
  
  
 
<h5 id="PhoneResendVerificationOTP-post-"> Phone Resend Verification OTP (POST)</h5>
 This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input  

 ```python
  
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.phone_resend_verification_otp(phone, sms_template)
 ```
 
  
  
 
<h5 id="PhoneResendVerificationOTPByToken-post-"> Phone Resend Verification OTP By Token (POST)</h5>
 This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists  

 ```python
  
access_token = "<access_token>" #Required 
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.phone_resend_verification_otp_by_token(access_token, phone, sms_template)
 ```
 
  
  
 
<h5 id="UserRegistrationByPhone-post-"> Phone User Registration by SMS (POST)</h5>
 This API registers the new users into your Cloud Storage and triggers the phone verification process.  

 ```python
 
auth_user_registration_model = { 
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>",
"phoneId" : "<phoneId>"
}  #Required 
sott = "<sott>" #Required 
fields = "<fields>" #Optional 
options = "<options>" #Optional 
sms_template = "<sms_template>" #Optional 
verification_url = "<verification_url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.phone_authentication.user_registration_by_phone(auth_user_registration_model, sott, fields, options, sms_template, verification_url, welcome_email_template)
 ```
 
  
  
 
<h5 id="CheckPhoneNumberAvailability-get-"> Phone Number Availability (GET)</h5>
 This API is used to check the Phone Number exists or not on your site.  

 ```python
  
phone = "<phone>" #Required

result = loginradius.phone_authentication.check_phone_number_availability(phone)
 ```
 
  
  
 
<h5 id="RemovePhoneIDByAccessToken-delete-"> Remove Phone ID by Access Token (DELETE)</h5>
 This API is used to delete the Phone ID on a user's account via the access token  

 ```python
  
access_token = "<access_token>" #Required

result = loginradius.phone_authentication.remove_phone_id_by_access_token(access_token)
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

 ```python
  
access_token = "<access_token>" #Required
multi_factor_auth_model_by_google_authenticator_code = { 
"googleAuthenticatorCode" : "<googleAuthenticatorCode>"
}  #Required 
fields = "<fields>" #Optional 
sms_template = "<sms_template>" #Optional

result = loginradius.mfa.mfa_update_by_access_token(access_token, multi_factor_auth_model_by_google_authenticator_code, fields, sms_template)
 ```
 
  
  
 
<h5 id="MFAUpdatePhoneNumberByToken-put-"> MFA Update Phone Number by Token (PUT)</h5>
 This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number  

 ```python
  
access_token = "<access_token>" #Required 
phone_no2_f_a = "<phone_no2_f_a>" #Required 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_update_phone_number_by_token(access_token, phone_no2_f_a, sms_template2_f_a)
 ```
 
  
  
 
<h5 id="MFAValidateGoogleAuthCode-put-"> MFA Validate Google Auth Code (PUT)</h5>
 This API is used to login via Multi-factor-authentication by passing the google authenticator code.  

 ```python
  
google_authenticator_code = "<google_authenticator_code>" #Required 
second_factor_authentication_token = "<second_factor_authentication_token>" #Required 
fields = "<fields>" #Optional 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_validate_google_auth_code(google_authenticator_code, second_factor_authentication_token, fields, sms_template2_f_a)
 ```
 
  
  
 
<h5 id="MFAUpdatePhoneNumber-put-"> MFA Update Phone Number (PUT)</h5>
 This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number  

 ```python
  
phone_no2_f_a = "<phone_no2_f_a>" #Required 
second_factor_authentication_token = "<second_factor_authentication_token>" #Required 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_update_phone_number(phone_no2_f_a, second_factor_authentication_token, sms_template2_f_a)
 ```
 
  
  
 
<h5 id="MFALoginByEmail-post-"> MFA Email Login (POST)</h5>
 This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.  

 ```python
  
email = "<email>" #Required 
password = "<password>" #Required 
email_template = "<email_template>" #Optional 
fields = "<fields>" #Optional 
login_url = "<login_url>" #Optional 
sms_template = "<sms_template>" #Optional 
sms_template2_f_a = "<sms_template2_f_a>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.mfa.mfa_login_by_email(email, password, email_template, fields, login_url, sms_template, sms_template2_f_a, verification_url)
 ```
 
  
  
 
<h5 id="MFALoginByPhone-post-"> MFA Phone Login (POST)</h5>
 This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.  

 ```python
  
password = "<password>" #Required 
phone = "<phone>" #Required 
email_template = "<email_template>" #Optional 
fields = "<fields>" #Optional 
login_url = "<login_url>" #Optional 
sms_template = "<sms_template>" #Optional 
sms_template2_f_a = "<sms_template2_f_a>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.mfa.mfa_login_by_phone(password, phone, email_template, fields, login_url, sms_template, sms_template2_f_a, verification_url)
 ```
 
  
  
 
<h5 id="MFAConfigureByAccessToken-get-"> MFA Validate Access Token (GET)</h5>
 This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.  

 ```python
  
access_token = "<access_token>" #Required 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_configure_by_access_token(access_token, sms_template2_f_a)
 ```
 
  
  
 
<h5 id="MFAResendOTP-get-"> MFA Resend Otp (GET)</h5>
 This API is used to resending the verification OTP to the provided phone number  

 ```python
  
second_factor_authentication_token = "<second_factor_authentication_token>" #Required 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_resend_otp(second_factor_authentication_token, sms_template2_f_a)
 ```
 
  
  
 
<h5 id="MFAResetGoogleAuthByToken-delete-"> MFA Reset Google Authenticator by Token (DELETE)</h5>
 This API Resets the Google Authenticator configurations on a given account via the access token  

 ```python
  
access_token = "<access_token>" #Required 
googleauthenticator = "True" #Required

result = loginradius.mfa.mfa_reset_google_auth_by_token(access_token, googleauthenticator)
 ```
 
  
  
 
<h5 id="MFAResetSMSAuthByToken-delete-"> MFA Reset SMS Authenticator by Token (DELETE)</h5>
 This API resets the SMS Authenticator configurations on a given account via the access token.  

 ```python
  
access_token = "<access_token>" #Required 
otpauthenticator = "True" #Required

result = loginradius.mfa.mfa_reset_sms_auth_by_token(access_token, otpauthenticator)
 ```
 
  
  
 
<h5 id="MFAResetSMSAuthenticatorByUid-delete-"> MFA Reset SMS Authenticator By UID (DELETE)</h5>
 This API resets the SMS Authenticator configurations on a given account via the UID.  

 ```python
  
otpauthenticator = "True" #Required 
uid = "<uid>" #Required

result = loginradius.mfa.mfa_reset_sms_authenticator_by_uid(otpauthenticator, uid)
 ```
 
  
  
 
<h5 id="MFAResetGoogleAuthenticatorByUid-delete-"> MFA Reset Google Authenticator By UID (DELETE)</h5>
 This API resets the Google Authenticator configurations on a given account via the UID.  

 ```python
  
googleauthenticator = "True" #Required 
uid = "<uid>" #Required

result = loginradius.mfa.mfa_reset_google_authenticator_by_uid(googleauthenticator, uid)
 ```
 
  
  
 


### PasswordLessLogin API


List of APIs in this Section:<br>

* PUT : [Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br>
* GET : [Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br>
* GET : [Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br>
* GET : [Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>




<h5 id="PasswordlessLoginPhoneVerification-put-"> Passwordless Login Phone Verification (PUT)</h5>
 This API verifies an account by OTP and allows the customer to login.  

 ```python
 
password_less_login_otp_model = { 
"otp" : "<otp>",
"phone" : "<phone>"
}  #Required 
fields = "<fields>" #Optional 
sms_template = "<sms_template>" #Optional

result = loginradius.password_less_login.passwordless_login_phone_verification(password_less_login_otp_model, fields, sms_template)
 ```
 
  
  
 
<h5 id="PasswordlessLoginByPhone-get-"> Passwordless Login by Phone (GET)</h5>
 API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID  

 ```python
  
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.password_less_login.passwordless_login_by_phone(phone, sms_template)
 ```
 
  
  
 
<h5 id="PasswordlessLoginByEmail-get-"> Passwordless Login By Email (GET)</h5>
 This API is used to send a Passwordless Login verification link to the provided Email ID  

 ```python
  
email = "<email>" #Required 
password_less_login_template = "<password_less_login_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.password_less_login.passwordless_login_by_email(email, password_less_login_template, verification_url)
 ```
 
  
  
 
<h5 id="PasswordlessLoginVerification-get-"> Passwordless Login Verification (GET)</h5>
 This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API  

 ```python
  
verification_token = "<verification_token>" #Required 
fields = "<fields>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.password_less_login.passwordless_login_verification(verification_token, fields, welcome_email_template)
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

 ```python
 
account_roles_model = { 
"roles" : [  "roles" ] 
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.assign_roles_by_uid(account_roles_model, uid)
 ```
 
  
  
 
<h5 id="UpdateRoleContextByUid-put-"> Upsert Context (PUT)</h5>
 This API creates a Context with a set of Roles  

 ```python
 
account_role_context_model = { 
"roleContext" : [   { 
  "additionalPermissions" : ["<additionalPermissions>" ] ,
 "context" : "<context>"  ,
 "expiration" : "<expiration>"  ,
  "roles" : ["<roles>" ]  
}  ] 
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.update_role_context_by_uid(account_role_context_model, uid)
 ```
 
  
  
 
<h5 id="AddRolePermissions-put-"> Add Permissions to Role (PUT)</h5>
 This API is used to add permissions to a given role.  

 ```python
 
permissions_model = { 
"permissions" : [  "permissions" ] 
}  #Required 
role = "<role>" #Required

result = loginradius.role.add_role_permissions(permissions_model, role)
 ```
 
  
  
 
<h5 id="CreateRoles-post-"> Roles Create (POST)</h5>
 This API creates a role with permissions.  

 ```python
 
roles_model = { 
"roles" : [   { 
 "name" : "<name>"  ,
"permissions" : {"Permission_name" : "True"}  
}  ] 
}  #Required

result = loginradius.role.create_roles(roles_model)
 ```
 
  
  
 
<h5 id="GetRolesByUid-get-"> Roles by UID (GET)</h5>
 API is used to retrieve all the assigned roles of a particular User.  

 ```python
  
uid = "<uid>" #Required

result = loginradius.role.get_roles_by_uid(uid)
 ```
 
  
  
 
<h5 id="GetRoleContextByUid-get-"> Get Context with Roles and Permissions (GET)</h5>
 This API Gets the contexts that have been configured and the associated roles and permissions.  

 ```python
  
uid = "<uid>" #Required

result = loginradius.role.get_role_context_by_uid(uid)
 ```
 
  
  
 
<h5 id="GetRoleContextByContextName-get-"> Role Context profile (GET)</h5>
 The API is used to retrieve role context by the context name.  

 ```python
  
context_name = "<context_name>" #Required

result = loginradius.role.get_role_context_by_context_name(context_name)
 ```
 
  
  
 
<h5 id="GetRolesList-get-"> Roles List (GET)</h5>
 This API retrieves the complete list of created roles with permissions of your app.  

 ```python
 

result = loginradius.role.get_roles_list()
 ```
 
  
  
 
<h5 id="UnassignRolesByUid-delete-"> Unassign Roles by UID (DELETE)</h5>
 This API is used to unassign roles from a user.  

 ```python
 
account_roles_model = { 
"roles" : [  "roles" ] 
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.unassign_roles_by_uid(account_roles_model, uid)
 ```
 
  
  
 
<h5 id="DeleteRoleContextByUid-delete-"> Delete Role Context (DELETE)</h5>
 This API Deletes the specified Role Context  

 ```python
  
context_name = "<context_name>" #Required 
uid = "<uid>" #Required

result = loginradius.role.delete_role_context_by_uid(context_name, uid)
 ```
 
  
  
 
<h5 id="DeleteRolesFromRoleContextByUid-delete-"> Delete Role from Context (DELETE)</h5>
 This API Deletes the specified Role from a Context.  

 ```python
  
context_name = "<context_name>" #Required
role_context_remove_role_model = { 
"roles" : [  "roles" ] 
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.delete_roles_from_role_context_by_uid(context_name, role_context_remove_role_model, uid)
 ```
 
  
  
 
<h5 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-"> Delete Additional Permission from Context (DELETE)</h5>
 This API Deletes Additional Permissions from Context.  

 ```python
  
context_name = "<context_name>" #Required
role_context_additional_permission_remove_role_model = { 
"additionalPermissions" : [  "additionalPermissions" ] 
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.delete_additional_permission_from_role_context_by_uid(context_name, role_context_additional_permission_remove_role_model, uid)
 ```
 
  
  
 
<h5 id="DeleteRole-delete-"> Account Delete Role (DELETE)</h5>
 This API is used to delete the role.  

 ```python
  
role = "<role>" #Required

result = loginradius.role.delete_role(role)
 ```
 
  
  
 
<h5 id="RemoveRolePermissions-delete-"> Remove Permissions (DELETE)</h5>
 API is used to remove permissions from a role.  

 ```python
 
permissions_model = { 
"permissions" : [  "permissions" ] 
}  #Required 
role = "<role>" #Required

result = loginradius.role.remove_role_permissions(permissions_model, role)
 ```
 
  
  
 


### Sott API


List of APIs in this Section:<br>

* GET : [Generate SOTT](#GenerateSott-get-)<br>




<h5 id="GenerateSott-get-"> Generate SOTT (GET)</h5>
 This API allows you to generate SOTT with a given expiration time.  

 ```python
  
time_difference = 0 #Optional

result = loginradius.sott.generate_sott(time_difference)
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

 ```python
  
fb_access_token = "<fb_access_token>" #Required

result = loginradius.native_social.get_access_token_by_facebook_access_token(fb_access_token)
 ```
 
  
  
 
<h5 id="GetAccessTokenByTwitterAccessToken-get-"> Access Token via Twitter Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.  

 ```python
  
tw_access_token = "<tw_access_token>" #Required 
tw_token_secret = "<tw_token_secret>" #Required

result = loginradius.native_social.get_access_token_by_twitter_access_token(tw_access_token, tw_token_secret)
 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleAccessToken-get-"> Access Token via Google Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.  

 ```python
  
google_access_token = "<google_access_token>" #Required 
client_id = "<client_id>" #Optional 
refresh_token = "<refresh_token>" #Optional

result = loginradius.native_social.get_access_token_by_google_access_token(google_access_token, client_id, refresh_token)
 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleJWTAccessToken-get-"> Access Token using google JWT token for Native Mobile Login (GET)</h5>
 This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.  

 ```python
  
id_token = "<id_token>" #Required

result = loginradius.native_social.get_access_token_by_google_j_w_t_access_token(id_token)
 ```
 
  
  
 
<h5 id="GetAccessTokenByLinkedinAccessToken-get-"> Access Token via Linkedin Token (GET)</h5>
 The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.  

 ```python
  
ln_access_token = "<ln_access_token>" #Required

result = loginradius.native_social.get_access_token_by_linkedin_access_token(ln_access_token)
 ```
 
  
  
 
<h5 id="GetAccessTokenByGoogleAuthCode-get-"> Access Token via Google AuthCode (GET)</h5>
 The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.  

 ```python
  
google_authcode = "<google_authcode>" #Required

result = loginradius.native_social.get_access_token_by_google_auth_code(google_authcode)
 ```
 
  
  
 


### WebHook API


List of APIs in this Section:<br>

* POST : [Webhook Subscribe](#WebHookSubscribe-post-)<br>
* GET : [Webhook Subscribed URLs](#GetWebHookSubscribedURLs-get-)<br>
* GET : [Webhook Test](#WebhookTest-get-)<br>
* DELETE : [WebHook Unsubscribe](#WebHookUnsubscribe-delete-)<br>




<h5 id="WebHookSubscribe-post-"> Webhook Subscribe (POST)</h5>
 API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.  

 ```python
 
web_hook_subscribe_model = { 
"event" : "<event>",
"targetUrl" : "<targetUrl>"
}  #Required

result = loginradius.web_hook.web_hook_subscribe(web_hook_subscribe_model)
 ```
 
  
  
 
<h5 id="GetWebHookSubscribedURLs-get-"> Webhook Subscribed URLs (GET)</h5>
 This API is used to fatch all the subscribed URLs, for particular event  

 ```python
  
event = "<event>" #Required

result = loginradius.web_hook.get_web_hook_subscribed_u_r_ls(event)
 ```
 
  
  
 
<h5 id="WebhookTest-get-"> Webhook Test (GET)</h5>
 API can be used to test a subscribed WebHook.  

 ```python
 

result = loginradius.web_hook.webhook_test()
 ```
 
  
  
 
<h5 id="WebHookUnsubscribe-delete-"> WebHook Unsubscribe (DELETE)</h5>
 API can be used to unsubscribe a WebHook configured on your LoginRadius site.  

 ```python
 
web_hook_subscribe_model = { 
"event" : "<event>",
"targetUrl" : "<targetUrl>"
}  #Required

result = loginradius.web_hook.web_hook_unsubscribe(web_hook_subscribe_model)
 ```
 
  
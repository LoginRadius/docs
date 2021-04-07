---
title: "Python SDK Library"
tags: ["Python", "SDK"]
description: "This is a document detailing the LoginRadius Python SDK Library."
path: "/references/sdk/python"
---

# Python SDK

>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

This document describes how to start using the LoginRadius Python SDK and its various features. You can get the SDK from [here](https://github.com/LoginRadius/python-sdk).

> You must have Python 2.7 or later installed.

For a more hands-on tutorial on setting up the SDK and using it in a Python application to make LoginRadius API calls, check out our [Python](/tutorial/python) tutorial.

## SDK Installation and Configuration

Using `pip` in your command line, run the following command in your project's directory to install the LoginRadius Python SDK.

```
pip install requests loginradius-v2==11.0.0
```

In your project's directory, create a Python file for the SDK `lr.py` and add the following lines:

```python
from LoginRadius import LoginRadius as LR

API_KEY = "<Your LoginRadius API Key>"
API_SECRET = "<Your LoginRadius API Secret>"

LoginRadius.API_KEY = API_KEY
LoginRadius.API_SECRET = API_SECRET
loginradius = LoginRadius()   
```
> **Note:** You can get the API Key and Secret from the [Configuration > API Credentials](https://dashboard.loginradius.com/configuration) section of your LoginRadius Dashboard.

Import the library's functions by importing `lr.py` in your scripts:

```python
from lr import loginradius
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

* [GET : Auth Get Profiles by Token](#auth-get-profiles-by-token-get)

* [GET: Auth Send Welcome Email](#auth-send-welcome-email-get)

* [GET : Auth Delete Account](#auth-delete-account-get)

* [GET : Auth Check Email Availability](#auth-check-email-availability-get)

* [GET : Auth Verify Email](#auth-verify-email-get)

* [GET : Auth Social Identity](#auth-social-identity-get)

* [GET : Auth Privacy Policy Accept](#auth-privacy-policy-accept-get)

* [PUT : Auth Update Profile by Token](#auth-update-profile-by-token-put)

* [PUT : Auth Verify Email by OTP](#auth-verify-email-by-otp-put)

* [PUT : Auth Reset Password by Reset Token](#auth-reset-password-by-reset-token-put)

* [PUT : Auth Change Password](#auth-change-password-put)

* [PUT : Auth Resend Email Verification](#auth-resend-email-verification-put)

* [DELETE : Auth Delete Account with Email Confirmation](#auth-delete-account-with-email-confirmation-delete)

* [DELETE : Auth Remove Email](#auth-remove-email-delete)

#### Auth Add Email (POST)

Adds additional emails to the consumer corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
email = "<email>" #Required 
type = "<type>" #Required 
email_template = "<email_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.add_email(access_token, email, type, email_template, verification_url)
```

#### Auth Login by Email (POST)

Exchanges consumer login details for a copy of their user data and a LoginRadius access token.

```python
email_authentication_model = {
  "email": "<email>",
  "password": "<password>"
}  #Required 
email_template = "<email_template>" #Optional 
fields = "<fields>" #Optional 
login_url = "<login_url>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.login_by_email(email_authentication_model, email_template, fields, login_url, verification_url)
```

#### Auth Forgot Password (POST)

Sends a reset password URL to the consumer corresponding to the specified Email ID.

```python 
email = "<email>" #Required 
reset_password_url = "<reset_password_url>" #Required 
email_template = "<email_template>" #Optional

result = loginradius.authentication.forgot_password(email, reset_password_url, email_template)
```

#### Auth User Registration by Email (POST)

Creates a new consumer, sending a verification email to the specified Email ID.

```python
auth_user_registration_model = {
    "email": [{"type": "<type>", "value": "<value>"}],
    "firstName": "<firstName>",
    "lastName": "<lastName>",
    "password": "<password>",
}  # Required
sott = "<sott>"  # Required
email_template = "<email_template>"  # Optional
fields = "<fields>"  # Optional
options = "<options>"  # Optional
verification_url = "<verification_url>"  # Optional
welcome_email_template = "<welcome_email_template>"  # Optional

result = loginradius.authentication.user_registration_by_email(
    auth_user_registration_model,
    sott,
    email_template,
    fields,
    options,
    verification_url,
    welcome_email_template,
)
```

#### Auth User Registration by Captcha (POST)

Creates a new consumer using the Captcha flow, sending a verification email to the specified Email ID.

```python
auth_user_registration_model_with_captcha = {
    "email": [{"type": "<type>", "value": "<value>"}],
    "firstName": "<firstName>",
    "g-recaptcha-response": "<g-recaptcha-response>",
    "lastName": "<lastName>",
    "password": "<password>",
}  # Required
email_template = "<email_template>"  # Optional
fields = "<fields>"  # Optional
options = "<options>"  # Optional
sms_template = "<sms_template>"  # Optional
verification_url = "<verification_url>"  # Optional
welcome_email_template = "<welcome_email_template>"  # Optional

result = loginradius.authentication.user_registration_by_captcha(
    auth_user_registration_model_with_captcha,
    email_template,
    fields,
    options,
    sms_template,
    verification_url,
    welcome_email_template,
)

```

#### Auth Validate Access Token (GET)

Validates specified access token.

```python 
access_token = "<access_token>" #Required

result = loginradius.authentication.auth_validate_access_token(access_token)
```

#### Access Token Invalidate (GET)

Invalidates specified access token.

```python 
access_token = "<access_token>" #Required 
prevent_refresh = "True" #Optional

result = loginradius.authentication.auth_in_validate_access_token(access_token, prevent_refresh)
```

#### Access Token Info (GET)

Retrieves token data for the specified access token.

```python 
access_token = "<access_token>" #Required

result = loginradius.authentication.get_access_token_info(access_token)
```

#### Auth Get Profiles by Token (GET)

Retrieves consumer profile data corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
fields = "<fields>" #Optional

result = loginradius.authentication.get_profile_by_access_token(access_token, fields)
```

#### Auth Send Welcome Email (GET)

Sends a welcome email to the consumer corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.send_welcome_email(access_token, welcome_email_template)
```

#### Auth Delete Account (GET)

Deletes consumer corresponding to the specified delete token.

```python 
deletetoken = "<deletetoken>" #Required

result = loginradius.authentication.delete_account_by_delete_token(deletetoken)
```

#### Auth Check Email Availability (GET)

Checks if the specified Email ID already exists on your app.

```python 
email = "<email>" #Required

result = loginradius.authentication.check_email_availability(email)
```
 
#### Auth Verify Email (GET)

Verifies email of the consumer corresponding to the specified verification token.

```python 
verification_token = "<verification_token>" #Required 
fields = "<fields>" #Optional 
url = "<url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.verify_email(verification_token, fields, url, welcome_email_template)
```

#### Auth Social Identity (GET)

Retrieves all consumer's profiles and social identities corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
fields = "<fields>" #Optional

result = loginradius.authentication.get_social_identity(access_token, fields)
```

#### Auth Privacy Policy Accept (GET)

Updates the privacy policy stored in the consumer's profile corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
fields = "<fields>" #Optional

result = loginradius.authentication.accept_privacy_policy(access_token, fields)
```

#### Auth Update Profile by Token (PUT)

Updates consumer's profile corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required
user_profile_update_model = { 
    "firstName": "<firstName>",
    "lastName": "<lastName>"
}  #Required 
email_template = "<email_template>" #Optional 
fields = "<fields>" #Optional 
null_support = "True" #Optional 
sms_template = "<sms_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.update_profile_by_access_token(access_token, user_profile_update_model, email_template, fields, null_support, sms_template, verification_url)
```

#### Auth Verify Email by OTP (PUT)

Verifies Email ID of the consumer corresponding to the specified OTP and Email ID.

```python
email_verification_by_otp_model = { 
    "email": "<email>",
    "otp": "<otp>"
}  #Required 
fields = "<fields>" #Optional 
url = "<url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.verify_email_by_otp(email_verification_by_otp_model, fields, url, welcome_email_template)
```

#### Auth Reset Password by Reset Token (PUT)

Sets a new password for the consumer corresponding to the specified reset token.

```python
reset_password_by_reset_token_model = { 
    "password": "<password>",
    "resetToken": "<resetToken>"
}  #Required

result = loginradius.authentication.reset_password_by_reset_token(reset_password_by_reset_token_model)
```

#### Auth Change Password (PUT)

Changes the consumer's password corresponding to the specified Email ID. This also requires the input of the consumer's previous password.

```python 
access_token = "<access_token>" #Required 
new_password = "<new_password>" #Required 
old_password = "<old_password>" #Required

result = loginradius.authentication.change_password(access_token, new_password, old_password)
```

#### Auth Resend Email Verification (PUT)

Resends the verification email to the consumer corresponding to the specified Email ID.

```python 
email = "<email>" #Required 
email_template = "<email_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.auth_resend_email_verification(email, email_template, verification_url)
```

#### Auth Delete Account with Email Confirmation (DELETE)

Triggers the delete account process for the consumer corresponding to the specified access token. A confirmation email for account deletion will be sent to the consumer.

```python 
access_token = "<access_token>" #Required 
delete_url = "<delete_url>" #Optional 
email_template = "<email_template>" #Optional

result = loginradius.authentication.delete_account_with_email_confirmation(access_token, delete_url, email_template)
```

#### Auth Remove Email (DELETE)

Removes additional emails from the consumer corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
email = "<email>" #Required

result = loginradius.authentication.remove_email(access_token, email)
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

```python
account_create_model = { 
    "email": [{"type": "<type>", "value": "<value>"}],
    "firstName": "<firstName>",
    "lastName": "<lastName>",
    "password": "<password>"
}  #Required 
fields = "<fields>" #Optional

result = loginradius.account.create_account(account_create_model, fields)
```

#### Forgot Password Token (POST)

Generates a Forgot Password token for the specified Email ID. This can optionally send a Forgot Password email to the consumer.

```python 
email = "<email>" #Required 
email_template = "<email_template>" #Optional 
reset_password_url = "<reset_password_url>" #Optional 
send_email = "True" #Optional

result = loginradius.account.get_forgot_password_token(email, email_template, reset_password_url, send_email)
```

#### Email Verification Token (POST)

Generates an Email Verification token for the specified Email ID.

```python 
email = "<email>" #Required

result = loginradius.account.get_email_verification_token(email)
```

#### Account Profile by Email (GET)

Retrieves consumer profile data corresponding to the specified Email ID.

```python 
email = "<email>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_profile_by_email(email, fields)
```

#### Account Profile by Phone ID (GET)

Retrieves consumer profile data corresponding to the specified Phone ID.

```python 
phone = "<phone>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_profile_by_phone(phone, fields)
```

#### Account Profile by UID (GET)

Retrieves consumer profile data corresponding to the specified UID.

```python 
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_profile_by_uid(uid, fields)
```

#### Account Password (GET)

Retrieves hashed password for the consumer corresponding to the specified UID.

```python 
uid = "<uid>" #Required

result = loginradius.account.get_account_password_hash_by_uid(uid)
```

#### Access Token by UID (GET)

Gets a LoginRadius access token corresponding to the specified UID.

```python 
uid = "<uid>" #Required

result = loginradius.account.get_access_token_by_uid(uid)
```

#### Account Identities by Email (GET)

Retrieves all consumer identities corresponding to the specified Email.

> Note: This is intended for specific workflows where an email may correspond with multiple UIDs.


```python 
email = "<email>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_identities_by_email(email, fields)
```

#### Account Update (PUT)

Updates profile information of the consumer profile corresponding to the specified UID.

```python
account_user_profile_update_model = { 
    "firstName": "<firstName>",
    "lastName": "<lastName>"
}  #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional 
null_support = "True" #Optional

result = loginradius.account.update_account_by_uid(account_user_profile_update_model, uid, fields, null_support)
```

#### Update Phone ID by UID (PUT)

Updates Phone ID for the consumer corresponding to the specified UID. You can update the Phone ID for both verified and unverified consumers. This will directly replace their Phone ID, bypassing the OTP verification process.

```python 
phone = "<phone>" #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.update_phone_id_by_uid(phone, uid, fields)
```

#### Account Set Password (PUT)

Sets password for the consumer corresponding to the specified UID.

```python 
password = "<password>" #Required 
uid = "<uid>" #Required

result = loginradius.account.set_account_password_by_uid(password, uid)
```

#### Account Invalidate Verification Email (PUT)

Invalidates Email ID verification status for the consumer corresponding to the specified UID.

```python 
uid = "<uid>" #Required 
email_template = "<email_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.account.invalidate_account_email_verification(uid, email_template, verification_url)
```

#### Reset Phone ID Verification (PUT)

Resets Phone ID verification for the consumer corresponding to the specified UID.

```python 
uid = "<uid>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.account.reset_phone_id_verification_by_uid(uid, sms_template)
```

#### Upsert Email (PUT)

Adds/Upserts emails for the consumer corresponding to the specified UID by email type. If the email type specified already exists, the existing email value will be updated. Otherwise, a new email record will be added into the account's email array.

```python
upsert_email_model = { 
  "email": [{"type": "<type>", "value": "<value>"}] 
}  #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.upsert_email(upsert_email_model, uid, fields)
```

#### Update UID (PUT)

Updates consumer's UID.

```python
update_uid_model = { 
    "newUid": "<newUid>"
}  #Required 
uid = "<uid>" #Required

result = loginradius.account.account_update_uid(update_uid_model, uid)
```

#### Account Delete (DELETE)

Deletes consumer corresponding to the specified UID from your app. They will be able to re-register for a new account.

```python 
uid = "<uid>" #Required

result = loginradius.account.delete_account_by_uid(uid)
```

#### Account Remove Email (DELETE)

Removes given email from the consumer corresponding to the specified UID.

```python 
email = "<email>" #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.remove_email(email, uid, fields)
```

#### Delete User Profile by Email (DELETE)

Deletes consumer corresponding to the specified Email.

```python 
email = "<email>" #Required

result = loginradius.account.account_delete_by_email(email)
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

Exchanges consumer login details for a copy of their user data and a LoginRadius access token.

```python
phone_authentication_model = { 
  "password": "<password>",
  "phone": "<phone>"
}  #Required 
fields = "<fields>" #Optional 
login_url = "<login_url>" #Optional 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.login_by_phone(phone_authentication_model, fields, login_url, sms_template)
```

#### Phone Forgot Password by OTP (POST)

Sends a verification OTP SMS to reset the consumer's password.

```python 
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.forgot_password_by_phone_otp(phone, sms_template)
```

#### Phone Resend Verification OTP (POST)

Resends a verification OTP SMS to verify the consumer's Phone ID.

```python 
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.phone_resend_verification_otp(phone, sms_template)
```

#### Phone Resend Verification OTP by Token (POST)

Resends a verification OTP SMS to verify the consumer's Phone ID in cases where the consumer is already logged in.

```python 
access_token = "<access_token>" #Required 
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.phone_resend_verification_otp_by_token(access_token, phone, sms_template)
```

#### Phone User Registration by SMS (POST)

Registers a new consumer on your app and triggers the Phone ID verification process.

```python
auth_user_registration_model = { 
  "firstName": "<firstName>",
  "lastName": "<lastName>",
  "password": "<password>",
  "phoneId": "<phoneId>"
}  #Required 
sott = "<sott>" #Required 
fields = "<fields>" #Optional 
options = "<options>" #Optional 
sms_template = "<sms_template>" #Optional 
verification_url = "<verification_url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.phone_authentication.user_registration_by_phone(auth_user_registration_model, sott, fields, options, sms_template, verification_url, welcome_email_template)
```

#### Phone Number Availability (GET)

Checks if the specified Phone ID already exists on your app.

```python 
phone = "<phone>" #Required

result = loginradius.phone_authentication.check_phone_number_availability(phone)
```

#### Phone Reset Password by OTP (PUT)

Resets the consumer's password by consuming their verification OTP.

```python
reset_password_by_otp_model = { 
    "otp": "<otp>",
    "password": "<password>",
    "phone": "<phone>"
}  #Required

result = loginradius.phone_authentication.reset_password_by_phone_otp(reset_password_by_otp_model)
```

#### Phone Verification OTP (PUT)

Validates the verification OTP sent to verify the consumer's Phone ID.

```python 
otp = "<otp>" #Required 
phone = "<phone>" #Required 
fields = "<fields>" #Optional 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.phone_verification_by_otp(otp, phone, fields, sms_template)
```

#### Phone Verification OTP by Token (PUT)

Consumes the verification OTP sent to verify the consumer's Phone ID when the consumer is already logged in.

```python 
access_token = "<access_token>" #Required 
otp = "<otp>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.phone_verification_otp_by_access_token(access_token, otp, sms_template)
```

#### Phone Number Update (PUT)

Updates the Phone ID of the consumer corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.phone_authentication.update_phone_number(access_token, phone, sms_template)
```

#### Remove Phone ID by Access Token (DELETE)

Deletes the Phone ID from the consumer corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required

result = loginradius.phone_authentication.remove_phone_id_by_access_token(access_token)
```

### Multi Factor Authentication (2FA) API

List of APIs in this section:

* [POST : MFA Email Login](#mfa-email-login-post)

* [POST : MFA Phone Login](#mfa-phone-login-post)

* [GET : MFA Validate Access Token](#mfa-validate-access-token-get)

* [GET : MFA Resend OTP](#mfa-resend-otp-get)

* [PUT : Enable MFA Google Authenticator by Access Token](#enable-mfa-google-authenticator-by-access-token-put)

* [PUT : MFA Update Phone Number by Token](#mfa-update-phone-number-by-token-put)

* [PUT : MFA Validate Google Auth Code](#mfa-validate-google-auth-code-put)

* [PUT : MFA Update Phone Number](#mfa-update-phone-number-put)

* [DELETE : MFA Reset Google Authenticator by Token](#mfa-reset-google-authenticator-by-token-delete)

* [DELETE : MFA Reset SMS Authenticator by Token](#mfa-reset-sms-authenticator-by-token-delete)

* [DELETE : MFA Reset SMS Authenticator by UID](#mfa-reset-sms-authenticator-by-uid-delete)

* [DELETE : MFA Reset Google Authenticator by UID](#mfa-reset-google-authenticator-by-uid-delete)

#### MFA Email Login (POST)

Initiates the login process using Email ID on a Multi Factor Authentication (2FA) enabled LoginRadius app.

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

#### MFA Phone Login (POST)

Initiates the login process using Phone ID on a Multi Factor Authentication (2FA) enabled LoginRadius app.

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

#### MFA Validate Access Token (GET)

Validates an access token and starts the Multi Factor Authentication (2FA) process. If 2FA is set to optional and the consumer has no second factor authenticators active, the consumer's profile information will be returned instead.

```python 
access_token = "<access_token>" #Required 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_configure_by_access_token(access_token, sms_template2_f_a)
```

#### MFA Resend OTP (GET)

Resends verification OTP SMS to the phone number corresponding to the second factor authentication token.

```python 
second_factor_authentication_token = "<second_factor_authentication_token>" #Required 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_resend_otp(second_factor_authentication_token, sms_template2_f_a)
```

#### Enable MFA Google Authenticator by Access Token (PUT)

Enables Multi Factor Authentication (2FA) with Google Authenticator for the consumer corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required
multi_factor_auth_model_by_google_authenticator_code = { 
  "googleAuthenticatorCode": "<googleAuthenticatorCode>"
}  #Required 
fields = "<fields>" #Optional 
sms_template = "<sms_template>" #Optional

result = loginradius.mfa.mfa_update_by_access_token(access_token, multi_factor_auth_model_by_google_authenticator_code, fields, sms_template)
```

#### MFA Update Phone Number by Token (PUT)

Updates phone number used for Multi Factor Authentication (2FA) via access token by sending a verification OTP to the specified phone number.

```python 
access_token = "<access_token>" #Required 
phone_no2_f_a = "<phone_no2_f_a>" #Required 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_update_phone_number_by_token(access_token, phone_no2_f_a, sms_template2_f_a)
```

#### MFA Validate Google Auth Code (PUT)

Logs in via Multi Factor Authentication (2FA) by passing in a Google Authenticator code.

```python 
google_authenticator_code = "<google_authenticator_code>" #Required 
second_factor_authentication_token = "<second_factor_authentication_token>" #Required 
fields = "<fields>" #Optional 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_validate_google_auth_code(google_authenticator_code, second_factor_authentication_token, fields, sms_template2_f_a)
```

#### MFA Update Phone Number (PUT)

Updates phone number used for Multi Factor Authentication (2FA) via second factor authentication token by sending a verification OTP to the specified phone number.

```python 
phone_no2_f_a = "<phone_no2_f_a>" #Required 
second_factor_authentication_token = "<second_factor_authentication_token>" #Required 
sms_template2_f_a = "<sms_template2_f_a>" #Optional

result = loginradius.mfa.mfa_update_phone_number(phone_no2_f_a, second_factor_authentication_token, sms_template2_f_a)
```

#### MFA Reset Google Authenticator by Token (DELETE)

Resets Google Authenticator configurations for the consumer corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
googleauthenticator = "True" #Required

result = loginradius.mfa.mfa_reset_google_auth_by_token(access_token, googleauthenticator)
```

#### MFA Reset SMS Authenticator by Token (DELETE)

Resets SMS Authenticator configurations for the consumer corresponding to the specified access token.

```python 
access_token = "<access_token>" #Required 
otpauthenticator = "True" #Required

result = loginradius.mfa.mfa_reset_sms_auth_by_token(access_token, otpauthenticator)
```

#### MFA Reset SMS Authenticator by UID (DELETE)

Resets SMS Authenticator configurations for the consumer corresponding to the specified UID.

```python 
otpauthenticator = "True" #Required 
uid = "<uid>" #Required

result = loginradius.mfa.mfa_reset_sms_authenticator_by_uid(otpauthenticator, uid)
```

#### MFA Reset Google Authenticator by UID (DELETE)

Resets Google Authenticator configurations for the consumer corresponding to the specified UID.

```python 
googleauthenticator = "True" #Required 
uid = "<uid>" #Required

result = loginradius.mfa.mfa_reset_google_authenticator_by_uid(googleauthenticator, uid)
```

### Passwordless Login API

List of APIs in this section:

* [GET : Passwordless Login by Phone](#passwordless-login-by-phone-get)

* [GET : Passwordless Login by Email](#passwordless-login-by-email-get)

* [GET : Passwordless Login Verification](#passwordless-login-verification-get)

* [PUT : Passwordless Login Phone Verification](#passwordless-login-phone-verification-put)

#### Passwordless Login by Phone (GET)

Sends a Passwordless Login OTP SMS to the specified Phone ID.

```python 
phone = "<phone>" #Required 
sms_template = "<sms_template>" #Optional

result = loginradius.password_less_login.passwordless_login_by_phone(phone, sms_template)
```

#### Passwordless Login by Email (GET)

Sends a Passwordless Login verification link to the specified Email ID.

```python 
email = "<email>" #Required 
password_less_login_template = "<password_less_login_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.password_less_login.passwordless_login_by_email(email, password_less_login_template, verification_url)
```

#### Passwordless Login Verification (GET)

Verifies a Passwordless Login verification link and exchanges it for user data and a LoginRadius access token.

> Note: If you are using Passwordless Login by Phone, you will need to use the [Passwordless Login Phone Verification](#passwordless-login-phone-verification-put) API.

```python 
verification_token = "<verification_token>" #Required 
fields = "<fields>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.password_less_login.passwordless_login_verification(verification_token, fields, welcome_email_template)
```

#### Passwordless Login Phone Verification (PUT)

Verifies a consumer by OTP, and exchanges it for their user data and a LoginRadius access token.

```python
password_less_login_otp_model = { 
    "otp": "<otp>",
    "phone": "<phone>"
}  #Required 
fields = "<fields>" #Optional 
sms_template = "<sms_template>" #Optional

result = loginradius.password_less_login.passwordless_login_phone_verification(password_less_login_otp_model, fields, sms_template)
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

```python
roles_model = { 
  "roles": [{"name": "<name>", "permissions": {"Permission_name": "True"}}] 
}  #Required

result = loginradius.role.create_roles(roles_model)
```

#### Roles by UID (GET)

Retrieves all assigned Roles of the consumer corresponding to the specified UID.

```python 
uid = "<uid>" #Required

result = loginradius.role.get_roles_by_uid(uid)
```

#### Get Context with Roles and Permissions (GET)

Retrieves configured Role Contexts and its associated Roles and Permissions.

```python 
uid = "<uid>" #Required

result = loginradius.role.get_role_context_by_uid(uid)
```

#### Role Context Profile (GET)

Retrieves a Role Context by its name.

```python 
context_name = "<context_name>" #Required

result = loginradius.role.get_role_context_by_context_name(context_name)
```

#### Roles List (GET)

Retrieves all Roles with Permissions configured in your app.

```python
result = loginradius.role.get_roles_list()
```

#### Assign Roles by UID (PUT)

Assigns specified Roles to the consumer corresponding to the specified UID.

```python
account_roles_model = { 
    "roles": ["roles"]
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.assign_roles_by_uid(account_roles_model, uid)
```

#### Upsert Context (PUT)

Creates a Role Context with a set of Roles.

```python
account_role_context_model = { 
  "roleContext": [{"additionalPermissions": ["<additionalPermissions>"], "context": "<context>", "expiration": "<expiration>", "roles": ["<roles>"]}] 
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.update_role_context_by_uid(account_role_context_model, uid)
```

#### Add Permissions to Role (PUT)

Adds specified Permissions to a Role.

```python
permissions_model = { 
    "permissions": ["permissions"]
}  #Required 
role = "<role>" #Required

result = loginradius.role.add_role_permissions(permissions_model, role)
```

#### Unassign Roles by UID (DELETE)

Unassigns Roles from the consumer corresponding to the specified UID.

```python
account_roles_model = { 
    "roles": ["roles"] 
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.unassign_roles_by_uid(account_roles_model, uid)
```

#### Delete Role Context (DELETE)

Deletes a specified Role Context from the consumer corresponding to the specified UID.

```python 
context_name = "<context_name>" #Required 
uid = "<uid>" #Required

result = loginradius.role.delete_role_context_by_uid(context_name, uid)
```

#### Delete Role from Context (DELETE)

Deletes a specified Role from Role Context of the consumer corresponding to the specified UID.

```python 
context_name = "<context_name>" #Required
role_context_remove_role_model = { 
    "roles": ["roles"]
}  #Required 
uid = "<uid>" #Required

result = loginradius.role.delete_roles_from_role_context_by_uid(context_name, role_context_remove_role_model, uid)
```

#### Delete Additional Permission from Context (DELETE)

Deletes Additional Permissions from Role Context of the consumer corresponding to the specified UID.

```python 
context_name = "<context_name>" #Required
role_context_additional_permission_remove_role_model = {
    "additionalPermissions": ["additionalPermissions"]
}  #Required
uid = "<uid>" #Required

result = loginradius.role.delete_additional_permission_from_role_context_by_uid(context_name, role_context_additional_permission_remove_role_model, uid)
```

#### Account Delete Role (DELETE)

Deletes a specified Role.

```python 
role = "<role>" #Required

result = loginradius.role.delete_role(role)
```

#### Remove Permissions (DELETE)

Removes permissions from a specified Role.

```python
permissions_model = { 
    "permissions": ["permissions"]
}  #Required 
role = "<role>" #Required

result = loginradius.role.remove_role_permissions(permissions_model, role)
```

### SOTT API

List of APIs in this section:

* [GET: Generate SOTT](#generate-sott-get)

#### Generate SOTT (GET)

Generates a SOTT with a given expiration time.

```python 
time_difference = 0 #Optional

result = loginradius.sott.generate_sott(time_difference)
```

### Social API

List of APIs in this section:

* [GET : Access Token via Facebook Token](#access-token-via-facebook-token-get)

* [GET : Access Token via Twitter Token](#access-token-via-twitter-token-get)

* [GET : Access Token via Google Token](#access-token-via-google-token-get)

* [GET : Access Token using Google JWT for Native Mobile Login](#access-token-using-google-jwt-for-native-mobile-login-get)

* [GET : Access Token via LinkedIn Token](#access-token-via-linkedin-token-get)

* [GET : Access Token via Google Auth Code](#access-token-via-google-auth-code-get)

#### Access Token via Facebook Token (GET)

Exchanges a Facebook access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

```python 
fb_access_token = "<fb_access_token>" #Required

result = loginradius.native_social.get_access_token_by_facebook_access_token(fb_access_token)
```

#### Access Token via Twitter Token (GET)

Exchanges a Twitter access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

```python 
tw_access_token = "<tw_access_token>" #Required 
tw_token_secret = "<tw_token_secret>" #Required

result = loginradius.native_social.get_access_token_by_twitter_access_token(tw_access_token, tw_token_secret)
```

#### Access Token via Google Token (GET)

Exchanges a Google access token for a LoginRadius access token. It will be valid for the specific duration of time specified in the response.

```python 
google_access_token = "<google_access_token>" #Required 
client_id = "<client_id>" #Optional 
refresh_token = "<refresh_token>" #Optional

result = loginradius.native_social.get_access_token_by_google_access_token(google_access_token, client_id, refresh_token)
```

#### Access Token using Google JWT for Native Mobile Login (GET)

Exchanges a Google JWT for a LoginRadius access token for Google native mobile login/registration.

```python 
id_token = "<id_token>" #Required

result = loginradius.native_social.get_access_token_by_google_j_w_t_access_token(id_token)
```

#### Access Token via LinkedIn Token (GET)

Exchanges a LinkedIn access token for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

```python 
ln_access_token = "<ln_access_token>" #Required

result = loginradius.native_social.get_access_token_by_linkedin_access_token(ln_access_token)
```

#### Access Token via Google Auth Code (GET)

Exchanges a Google auth code for a LoginRadius access token. It will remain valid for the specific duration of time specified in the response.

```python 
google_authcode = "<google_authcode>" #Required

result = loginradius.native_social.get_access_token_by_google_auth_code(google_authcode)
```

### Webhook API

List of APIs in this section:

* [POST : Webhook Subscribe](#webhook-subscribe-post)
 
* [GET : Webhook Subscribed URLs](#webhook-subscribed-urls-get)

* [GET : Webhook Test](#webhook-test-get)

* [DELETE : Webhook Unsubscribe](#webhook-unsubscribe-delete)

#### Webhook Subscribe (POST)

Configures a webhook on your LoginRadius app.

```python
web_hook_subscribe_model = {
    "event" : "<event>",
    "targetUrl" : "<targetUrl>"
}  #Required

result = loginradius.web_hook.web_hook_subscribe(web_hook_subscribe_model)
```

#### Webhook Subscribed URLs (GET)

Fetches all subscribed URLs for a particular event.

```python 
event = "<event>" #Required

result = loginradius.web_hook.get_web_hook_subscribed_u_r_ls(event)
```

#### Webhook Test (GET)

Tests a subscribed webhook.

```python
result = loginradius.web_hook.webhook_test()
```

#### Webhook Unsubscribe (DELETE)

Unsubscribes a webhook configured on your LoginRadius app.

```python
web_hook_subscribe_model = {
  "event": "<event>",
  "targetUrl": "<targetUrl>"
}  #Required

result = loginradius.web_hook.web_hook_unsubscribe(web_hook_subscribe_model)
```

## Demo

A sample Python project utilizing the SDK is available at [GitHub](https://github.com/LoginRadius/python-sdk/tree/master/demo).

[Go Back to Home Page](/)

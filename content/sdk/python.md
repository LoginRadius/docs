---
title: Python Library
description: ""
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

For more details check [API Refrence Here](https://www.loginradius.com/docs/developer/api/v2/customer-identity-api/overview/)

## API Details

### Authentication API


List of APIs in this Section:<br>

- PUT : [ Auth Change Password](#auth-change-password-put)
- PUT : [ Auth Resend Email Verification](#auth-resend-email-verification-put)
- POST : [ Auth Login by Email](#auth-login-by-email-post)
- POST : [ Auth Forgot Password](#auth-forgot-password-post)
- POST : [ Auth User Registration by Email](#auth-user-registration-by-email-post)
- GET : [ Auth Validate Access token](#auth-validate-access-token-get)
- GET : [ Auth Read all Profiles by Token](#auth-read-all-profiles-by-token-get)
- GET : [ Auth Send Welcome Email](#auth-send-welcome-email-get)
- GET : [ Auth Delete Account](#auth-delete-account-get)
- GET : [ Auth Verify Email](#auth-verify-email-get)
- GET : [ Auth Social Identity](#auth-social-identity-get)
- DELETE : [ Auth Delete Account with Email Confirmation](#auth-delete-account-with-email-confirmation-delete)


#####  Auth Change Password (PUT)
 This API is used to change the accounts password based on the previous password  

 ```py
  
access_token = "<access_token>" #Required 
new_password = "<new_password>" #Required 
old_password = "<old_password>" #Required

result = loginradius.authentication.change_password(access_token, new_password, old_password)
 ```
 
  
  
 
#####  Auth Resend Email Verification (PUT)
 This API resends the verification email to the user.  

 ```py
  
email = "<email>" #Required 
email_template = "<email_template>" #Optional 
verification_url = "<verification_url>" #Optional

result = loginradius.authentication.auth_resend_email_verification(email, email_template, verification_url)
 ```
 
  
  
 
#####  Auth Login by Email (POST)
 This API retrieves a copy of the user data based on the Email  

 ```py
 
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
 
  
  
 
#####  Auth Forgot Password (POST)
 This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'  

 ```py
  
email = "<email>" #Required 
reset_password_url = "<reset_password_url>" #Required 
email_template = "<email_template>" #Optional

result = loginradius.authentication.forgot_password(email, reset_password_url, email_template)
 ```
 
  
  
 
#####  Auth User Registration by Email (POST)
 This API creates a user in the database as well as sends a verification email to the user.  

 ```py
 
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
 
  
  
 
#####  Auth Validate Access token (GET)
 This api validates access token, if valid then returns a response with its expiry otherwise error.  

 ```py
  
access_token = "<access_token>" #Required

result = loginradius.authentication.auth_validate_access_token(access_token)
 ```
 
  
  
 
#####  Auth Read all Profiles by Token (GET)
 This API retrieves a copy of the user data based on the access token.  

 ```py
  
access_token = "<access_token>" #Required 
fields = "<fields>" #Optional

result = loginradius.authentication.get_profile_by_access_token(access_token, fields)
 ```
 
  
  
 
#####  Auth Send Welcome Email (GET)
 This API sends a welcome email  

 ```py
  
access_token = "<access_token>" #Required 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.send_welcome_email(access_token, welcome_email_template)
 ```
 
  
  
 
#####  Auth Delete Account (GET)
 This API is used to delete an account by passing it a delete token.  

 ```py
  
deletetoken = "<deletetoken>" #Required

result = loginradius.authentication.delete_account_by_delete_token(deletetoken)
 ```
 
  
  
 
#####  Auth Verify Email (GET)
 This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Dashboard's Email Workflow settings under 'Verification Email'.  

 ```py
  
verification_token = "<verification_token>" #Required 
fields = "<fields>" #Optional 
url = "<url>" #Optional 
welcome_email_template = "<welcome_email_template>" #Optional

result = loginradius.authentication.verify_email(verification_token, fields, url, welcome_email_template)
 ```
 
  
  
 
#####  Auth Social Identity (GET)
 This API is called just after account linking API and it prevents the raas profile of the second account from getting created.  

 ```py
  
access_token = "<access_token>" #Required 
fields = "<fields>" #Optional

result = loginradius.authentication.get_social_identity(access_token, fields)
 ```
 
  
  
 
#####  Auth Delete Account with Email Confirmation (DELETE)
 This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token  

 ```py
  
access_token = "<access_token>" #Required 
delete_url = "<delete_url>" #Optional 
email_template = "<email_template>" #Optional

result = loginradius.authentication.delete_account_with_email_confirmation(access_token, delete_url, email_template)
 ```
 
  
  
 


### Account API


List of APIs in this Section:<br>

- PUT : [ Account Update](#account-update-put)
- PUT : [ Account Set Password](#account-set-password-put)
- POST : [ Account Create](#account-create-post)
- POST : [ Forgot Password token](#forgot-password-token-post)
- POST : [ Email Verification token](#email-verification-token-post)
- GET : [ Get Privacy Policy History By Uid](#get-privacy-policy-history-by-uid-get)
- GET : [ Account Profiles by Email](#account-profiles-by-email-get)
- GET : [ Account Profiles by UID](#account-profiles-by-uid-get)
- GET : [ Account Password](#account-password-get)
- GET : [ Account Identities by Email](#account-identities-by-email-get)
- DELETE : [ Account Delete](#account-delete-delete)
- DELETE : [ Account Remove Email](#account-remove-email-delete)
- DELETE : [ Delete User Profiles By Email](#delete-user-profiles-by-email-delete)




#####  Account Update (PUT)
 This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities.  

 ```py
 
account_user_profile_update_model = { 
"firstName" : "<firstName>",
"lastName" : "<lastName>"
}  #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional 
null_support = "True" #Optional

result = loginradius.account.update_account_by_uid(account_user_profile_update_model, uid, fields, null_support)
 ```
 
  
  
 
#####  Account Set Password (PUT)
 This API is used to set the password of an account in Cloud Storage.  

 ```py
  
password = "<password>" #Required 
uid = "<uid>" #Required

result = loginradius.account.set_account_password_by_uid(password, uid)
 ```
 
  
  
 
#####  Account Create (POST)
 This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields  

 ```py
 
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
 
  
  
 
#####  Forgot Password token (POST)
 This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.  

 ```py
  
email = "<email>" #Required 
email_template = "<email_template>" #Optional 
reset_password_url = "<reset_password_url>" #Optional 
send_email = "True" #Optional

result = loginradius.account.get_forgot_password_token(email, email_template, reset_password_url, send_email)
 ```
 
  
  
 
#####  Email Verification token (POST)
 This API Returns an Email Verification token.  

 ```py
  
email = "<email>" #Required

result = loginradius.account.get_email_verification_token(email)
 ```
 
  
  
 
#####  Get Privacy Policy History By Uid (GET)
 This API is used to retrieve all of the accepted Policies by the user, associated with their UID.  

 ```py
  
uid = "<uid>" #Required

result = loginradius.account.get_privacy_policy_history_by_uid(uid)
 ```
 
  
  
 
#####  Account Profiles by Email (GET)
 This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.  

 ```py
  
email = "<email>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_profile_by_email(email, fields)
 ```
 
  
  
 
#####  Account Profiles by UID (GET)
 This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.  

 ```py
  
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_profile_by_uid(uid, fields)
 ```
 
  
  
 
#####  Account Password (GET)
 This API use to retrive the hashed password of a specified account in Cloud Storage.  

 ```py
  
uid = "<uid>" #Required

result = loginradius.account.get_account_password_hash_by_uid(uid)
 ```
 
  
  
 
#####  Account Identities by Email (GET)
 Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.  

 ```py
  
email = "<email>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.get_account_identities_by_email(email, fields)
 ```
 
  
  
 
#####  Account Delete (DELETE)
 This API deletes the Users account and allows them to re-register for a new account.  

 ```py
  
uid = "<uid>" #Required

result = loginradius.account.delete_account_by_uid(uid)
 ```
 
  
  
 
#####  Account Remove Email (DELETE)
 Use this API to Remove emails from a user Account  

 ```py
  
email = "<email>" #Required 
uid = "<uid>" #Required 
fields = "<fields>" #Optional

result = loginradius.account.remove_email(email, uid, fields)
 ```
 
  
  
 
#####  Delete User Profiles By Email (DELETE)
 This API is used to delete all user profiles associated with an Email.  

 ```py
  
email = "<email>" #Required

result = loginradius.account.account_delete_by_email(email)
 ```
 
  
  
 


### Social API


List of APIs in this Section:<br>

- GET : [ Access Token](#access-token-get)
- GET : [ Token Validate](#token-validate-get)
- GET : [ Access Token Invalidate](#access-token-invalidate-get)
- GET : [ Get Active Session Details](#get-active-session-details-get)
- GET : [ Get Active Session By Account Id](#get-active-session-by-account-id-get)
- GET : [ Get Active Session By Profile Id](#get-active-session-by-profile-id-get)
- GET : [ User Profile](#user-profile-get)



#####  Access Token (GET)
 This API Is used to translate the Request Token returned during authentication into an Access Token that can be used with other API calls.  

 ```py
  
token = "<token>" #Required

result = loginradius.social.exchange_access_token(token)
 ```
 
  
  
 
#####  Token Validate (GET)
 This API validates access token, if valid then returns a response with its expiry otherwise error.  

 ```py
  
access_token = "<access_token>" #Required

result = loginradius.social.validate_access_token(access_token)
 ```
 
  
  
 
#####  Access Token Invalidate (GET)
 This api invalidates the active access token or expires an access token validity.  

 ```py
  
access_token = "<access_token>" #Required

result = loginradius.social.in_validate_access_token(access_token)
 ```
 
  
  
 
#####  Get Active Session Details (GET)
 This api is use to get all active session by Access Token.  

 ```py
  
token = "<token>" #Required

result = loginradius.social.get_active_session(token)
 ```
 
  
  
 
#####  Get Active Session By Account Id (GET)
 This api is used to get all active sessions by AccountID(UID).  

 ```py
  
account_id = "<account_id>" #Required

result = loginradius.social.get_active_session_by_account_id(account_id)
 ```
 
  
  
 
#####  Get Active Session By Profile Id (GET)
 This api is used to get all active sessions by ProfileId.  

 ```py
  
profile_id = "<profile_id>" #Required

result = loginradius.social.get_active_session_by_profile_id(profile_id)
 ```
 
  
  
 
#####  User Profile (GET)
 The User Profile API is used to get social profile data from the user's social account after authentication.<br><br><b>Supported Providers:</b>  All  

 ```py
  
access_token = "<access_token>" #Required 
fields = "<fields>" #Optional

result = loginradius.social.get_social_user_profile(access_token, fields)
 ```
 
  
  
 


### NativeSocial API


List of APIs in this Section:

- GET : [ Access Token via Facebook Token](#access-token-via-facebook-token-get)
- GET : [ Access Token via Twitter Token](#access-token-via-twitter-token-get)
- GET : [ Access Token via Google Token](#access-token-via-google-token-get)

#####  Access Token via Facebook Token (GET)
 The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.  

 ```py
  
fb_access_token = "<fb_access_token>" #Required

result = loginradius.native_social.get_access_token_by_facebook_access_token(fb_access_token)
 ```
 
#####  Access Token via Twitter Token (GET)
 The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.  

 ```py
  
tw_access_token = "<tw_access_token>" #Required 
tw_token_secret = "<tw_token_secret>" #Required

result = loginradius.native_social.get_access_token_by_twitter_access_token(tw_access_token, tw_token_secret)
 ```
 
  
  
 
#####  Access Token via Google Token (GET)
 The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.  

 ```py
  
google_access_token = "<google_access_token>" #Required 
client_id = "<client_id>" #Optional 
refresh_token = "<refresh_token>" #Optional

result = loginradius.native_social.get_access_token_by_google_access_token(google_access_token, client_id, refresh_token)
 ```
 
#### Error Handling
If the request fails, it can be handled in the following way:

```
if result.get('ErrorCode') is not None:
    print(result.get('Description'))
else:
    print(result)
```

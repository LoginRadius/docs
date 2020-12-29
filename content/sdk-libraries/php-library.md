---
title: PHP Library
description: "A guide to impliment LoginRadius SDK in a PHP application."
summary: "A guide to impliment LoginRadius SDK in a PHP application"
---

>**Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

This document contains information and examples regarding the LoginRadius PHP SDK. It provides guidance for working with social authentication, user profile data, and auth implementation with a variety of social networks such as Facebook, Google, Twitter.You can get the SDK from [here](https://github.com/LoginRadius/php-sdk) 


## Installation

The recommended way to install is through [Composer](http://getcomposer.org/).
 
```
# Install Composer
curl -sS https://getcomposer.org/installer | php
```

Next, run the Composer command to install the latest stable version of library:

```
composer require loginradius/php-sdk:10.0.0
```

Include the following files in your Project Directory

```
require_once "src/LoginRadiusSDK/Utility/Functions.php";
require_once "src/LoginRadiusSDK/LoginRadiusException.php";
require_once "src/LoginRadiusSDK/Clients/IHttpClientInterface.php";
require_once "src/LoginRadiusSDK/Clients/DefaultHttpClient.php";

require_once "src/LoginRadiusSDK/CustomerRegistration/Authentication/AuthenticationAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Authentication/OneTouchLoginAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Authentication/PasswordLessLoginAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Authentication/PhoneAuthenticationAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Authentication/PINAuthenticationAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Authentication/RiskBasedAuthenticationAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Authentication/SmartLoginAPI.php";

require_once "src/LoginRadiusSDK/CustomerRegistration/Account/AccountAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Account/RoleAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Account/SottAPI.php";

require_once "src/LoginRadiusSDK/CustomerRegistration/Advanced/ConfigurationAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Advanced/ConsentManagementAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Advanced/CustomObjectAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Advanced/CustomRegistrationDataAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Advanced/MultiFactorAuthenticationAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Advanced/ReAuthenticationAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Advanced/WebHookAPI.php";

require_once "src/LoginRadiusSDK/CustomerRegistration/Social/NativeSocialAPI.php";
require_once "src/LoginRadiusSDK/CustomerRegistration/Social/SocialAPI.php";
```
Modify the config.php file in the SDK to include your LoginRadius Credentials

## Configuration

After successful install, you need to define the following LoginRadius Account info in your project anywhere before using the LoginRadius SDK or in the config file of your project:

```PHP
define('APP_NAME', 'LOGINRADIUS_SITE_NAME_HERE'); // Replace LOGINRADIUS_SITE_NAME_HERE with your site name that provide in LoginRadius account.
define('LR_API_KEY', 'LOGINRADIUS_API_KEY_HERE'); // Replace LOGINRADIUS_API_KEY_HERE with your site API key that provide in LoginRadius account.
define('LR_API_SECRET', 'LOGINRADIUS_API_SECRET_HERE'); // Replace LOGINRADIUS_API_SECRET_HERE with your site Secret key that provide in LoginRadius account.

define('API_REQUEST_SIGNING', ''); // Pass boolean true if this option is enabled on you app.
define('API_REGION', ''); // Pass APi Region for your app

define('PROTOCOL', 'PROXY_PROTOCOL'); // Replace PROXY_PROTOCOL with your proxy server protocoal ie http or https.
define('HOST', 'PROXY_HOST'); // Replace PROXY_HOST with your proxy server host.
define('PORT', 'PROXY_PORT'); // Replace PROXY_PORT with your proxy server port.
define('USER', 'PROXY_USER'); // Replace PROXY_USER with your proxy server username.
define('PASSWORD', 'PROXY_PASSWORD'); // Replace PROXY_PASSWORD with your proxy server password.

define('API_DOMAIN', 'DEFINE_CUSTOM_API_DOMAIN');   // Custom API Domain
```

>Replace `LOGINRADIUS_SITE_NAME_HERE`, `LOGINRADIUS_API_KEY_HERE` and  `LOGINRADIUS_API_SECRET_HERE` in the above code with your LoginRadius Site Name, LoginRadius API Key, and Secret which you can get [here](https://dashboard.loginradius.com/configuration), as shown below:

<div style="text-align:center">
  <img src="../assets/app_credentials.png" alt="app_credentials" />
</div>


>If you have Custom API Domain then define 'API_DOMAIN' then replaced it with your custom API domain, Otherwise no need to define this option in configuration.

### Implementation

Importing/aliasing with the use operator.
```PHP
use \LoginRadiusSDK\Utility\Functions;
use \LoginRadiusSDK\LoginRadiusException;
use \LoginRadiusSDK\Clients\IHttpClientInterface;
use \LoginRadiusSDK\Clients\DefaultHttpClient;
use \LoginRadiusSDK\CustomerRegistration\Account\AccountAPI;
use \LoginRadiusSDK\CustomerRegistration\Account\RoleAPI;
use \LoginRadiusSDK\CustomerRegistration\Account\SottAPI;
use \LoginRadiusSDK\CustomerRegistration\Advanced\ConfigurationAPI;
use \LoginRadiusSDK\CustomerRegistration\Advanced\ConsentManagementAPI;
use \LoginRadiusSDK\CustomerRegistration\Advanced\CustomObjectAPI;
use \LoginRadiusSDK\CustomerRegistration\Advanced\CustomRegistrationDataAPI;
use \LoginRadiusSDK\CustomerRegistration\Advanced\MultiFactorAuthenticationAPI;
use \LoginRadiusSDK\CustomerRegistration\Advanced\ReAuthenticationAPI;
use \LoginRadiusSDK\CustomerRegistration\Advanced\WebHookAPI;
use \LoginRadiusSDK\CustomerRegistration\Authentication\AuthenticationAPI;
use \LoginRadiusSDK\CustomerRegistration\Authentication\OneTouchLoginAPI;
use \LoginRadiusSDK\CustomerRegistration\Authentication\PasswordLessLoginAPI;
use \LoginRadiusSDK\CustomerRegistration\Authentication\PhoneAuthenticationAPI;
use \LoginRadiusSDK\CustomerRegistration\Authentication\PINAuthenticationAPI;
use \LoginRadiusSDK\CustomerRegistration\Authentication\RiskBasedAuthenticationAPI;
use \LoginRadiusSDK\CustomerRegistration\Authentication\SmartLoginAPI;
use \LoginRadiusSDK\CustomerRegistration\Social\SocialAPI;
use \LoginRadiusSDK\CustomerRegistration\Social\NativeSocialAPI;
```


Create a LoginRadius object :
```PHP
$accountObject = new AccountAPI();
```

### API Examples

#### Partial API response
We have an option to select fields(partial response) which you require as an API response.<br/>
For this, you need to pass an extra parameter(optional) at the end of each API function.

- If any field passed does not exist in response, will be ignored.
- In case of nested, only root object is selectable.
- Values should be separated by the comma.

**Example:**

```

$fields= "email, username";
$email = 'xxxxxr@xxxxx.com';

$result = $accountObject->accountProfileByEmail($email,$fields);

```

**Output Response:**

```
{
    UserName: 'test1213',
    Email: [ { Type: 'Primary', Value: 'test1213@sthus.com' } ]
}
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

If you have not already initialized the Authentication object do so now
```php
$authenticationAPI = new AuthenticationAPI(); 
```


<h5 id="UpdateProfileByAccessToken-put-">Auth Update Profile by Token (PUT)</h6>
This API is used to update the user's profile by passing the access token.
 

 ```php
 
$access_token = "access_token"; //Required
 $payload = '{
"firstName" : "<firstName>",
"lastName" : "<lastName>"
}';  //Required 
$emailTemplate = "emailTemplate"; //Optional 
$fields = null; //Optional 
$nullSupport = "true"; //Optional 
$smsTemplate = "smsTemplate"; //Optional 
$verificationUrl = "verificationUrl"; //Optional
 
$result = $authenticationAPI->updateProfileByAccessToken($access_token,$payload,$emailTemplate,$fields,$nullSupport,$smsTemplate,$verificationUrl);
 ```

 
<h5 id="VerifyEmailByOTP-put-">Auth Verify Email By OTP (PUT)</h6>
This API is used to verify the email of user when the OTP Email verification flow is enabled, please note that you must contact LoginRadius to have this feature enabled.
 

 ```php

 $payload = '{
"email" : "<email>",
"otp" : "<otp>"
}';  //Required 
$fields = null; //Optional 
$url = "url"; //Optional 
$welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
 
$result = $authenticationAPI->verifyEmailByOTP($payload,$fields,$url,$welcomeEmailTemplate);
 ```

 
<h5 id="ResetPasswordByResetToken-put-">Auth Reset Password by Reset Token (PUT)</h6>
This API is used to set a new password for the specified account.
 

 ```php

 $payload = '{
"password" : "<password>",
"resetToken" : "<resetToken>"
}';  //Required
 
$result = $authenticationAPI->resetPasswordByResetToken($payload);
 ```

 
<h5 id="ChangePassword-put-">Auth Change Password (PUT)</h6>
This API is used to change the accounts password based on the previous password
 

 ```php
 
$access_token = "access_token"; //Required 
$newPassword = "newPassword"; //Required 
$oldPassword = "oldPassword"; //Required
 
$result = $authenticationAPI->changePassword($access_token,$newPassword,$oldPassword);
 ```

 
<h5 id="AuthResendEmailVerification-put-">Auth Resend Email Verification (PUT)</h6>
This API resends the verification email to the user.
 

 ```php
 
$email = "email"; //Required 
$emailTemplate = "emailTemplate"; //Optional 
$verificationUrl = "verificationUrl"; //Optional
 
$result = $authenticationAPI->authResendEmailVerification($email,$emailTemplate,$verificationUrl);
 ```

 
<h5 id="AddEmail-post-">Auth Add Email (POST)</h6>
This API is used to add additional emails to a user's account.
 

 ```php
 
$access_token = "access_token"; //Required 
$email = "email"; //Required 
$type = "type"; //Required 
$emailTemplate = "emailTemplate"; //Optional 
$verificationUrl = "verificationUrl"; //Optional
 
$result = $authenticationAPI->addEmail($access_token,$email,$type,$emailTemplate,$verificationUrl);
 ```

 
<h5 id="LoginByEmail-post-">Auth Login by Email (POST)</h6>
This API retrieves a copy of the user data based on the Email
 

 ```php

 $payload = '{
"email" : "<email>",
"password" : "<password>"
}';  //Required 
$emailTemplate = "emailTemplate"; //Optional 
$fields = null; //Optional 
$loginUrl = "loginUrl"; //Optional 
$verificationUrl = "verificationUrl"; //Optional
 
$result = $authenticationAPI->loginByEmail($payload,$emailTemplate,$fields,$loginUrl,$verificationUrl);
 ```

 
<h5 id="ForgotPassword-post-">Auth Forgot Password (POST)</h6>
This API is used to send the reset password url to a specified account. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username'
 

 ```php
 
$email = "email"; //Required 
$resetPasswordUrl = "resetPasswordUrl"; //Required 
$emailTemplate = "emailTemplate"; //Optional
 
$result = $authenticationAPI->forgotPassword($email,$resetPasswordUrl,$emailTemplate);
 ```

 
<h5 id="UserRegistrationByEmail-post-">Auth User Registration by Email (POST)</h6>
This API creates a user in the database as well as sends a verification email to the user.
 

 ```php

 $payload = '{
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
}';  //Required 
$sott = "sott"; //Required 
$emailTemplate = "emailTemplate"; //Optional 
$fields = null; //Optional 
$options = "options"; //Optional 
$verificationUrl = "verificationUrl"; //Optional 
$welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
 
$result = $authenticationAPI->userRegistrationByEmail($payload,$sott,$emailTemplate,$fields,$options,$verificationUrl,$welcomeEmailTemplate);
 ```

 
<h5 id="UserRegistrationByCaptcha-post-">Auth User Registration By Captcha (POST)</h6>
This API creates a user in the database as well as sends a verification email to the user.
 

 ```php

 $payload = '{
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"g-recaptcha-response" : "<g-recaptcha-response>",
"lastName" : "<lastName>",
"password" : "<password>"
}';  //Required 
$emailTemplate = "emailTemplate"; //Optional 
$fields = null; //Optional 
$options = "options"; //Optional 
$smsTemplate = "smsTemplate"; //Optional 
$verificationUrl = "verificationUrl"; //Optional 
$welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
 
$result = $authenticationAPI->userRegistrationByCaptcha($payload,$emailTemplate,$fields,$options,$smsTemplate,$verificationUrl,$welcomeEmailTemplate);
 ```

 
<h5 id="AuthValidateAccessToken-get-">Auth Validate Access token (GET)</h6>
This api validates access token, if valid then returns a response with its expiry otherwise error.
 

 ```php
 
$access_token = "access_token"; //Required
 
$result = $authenticationAPI->authValidateAccessToken($access_token);
 ```

 
<h5 id="AuthInValidateAccessToken-get-">Access Token Invalidate (GET)</h6>
This api call invalidates the active access token or expires an access token's validity.
 

 ```php
 
$access_token = "access_token"; //Required 
$preventRefresh = "true"; //Optional
 
$result = $authenticationAPI->authInValidateAccessToken($access_token,$preventRefresh);
 ```

 
<h5 id="GetAccessTokenInfo-get-">Access Token Info (GET)</h6>
This api call provide the active access token Information
 

 ```php
 
$access_token = "access_token"; //Required
 
$result = $authenticationAPI->getAccessTokenInfo($access_token);
 ```

 
<h5 id="GetProfileByAccessToken-get-">Auth Read all Profiles by Token (GET)</h6>
This API retrieves a copy of the user data based on the access token.
 

 ```php
 
$access_token = "access_token"; //Required 
$fields = null; //Optional
 
$result = $authenticationAPI->getProfileByAccessToken($access_token,$fields);
 ```


 
<h5 id="DeleteAccountByDeleteToken-get-">Auth Delete Account (GET)</h6>
This API is used to delete an account by passing it a delete token.
 

 ```php
 
$deletetoken = "deletetoken"; //Required
 
$result = $authenticationAPI->deleteAccountByDeleteToken($deletetoken);
 ```

 
<h5 id="CheckEmailAvailability-get-">Auth Check Email Availability (GET)</h6>
This API is used to check the email exists or not on your site.
 

 ```php
 
$email = "email"; //Required
 
$result = $authenticationAPI->checkEmailAvailability($email);
 ```

 
<h5 id="VerifyEmail-get-">Auth Verify Email (GET)</h6>
This API is used to verify the email of user. Note: This API will only return the full profile if you have 'Enable auto login after email verification' set in your LoginRadius Admin Console's Email Workflow settings under 'Verification Email'.
 

 ```php
 
$verificationToken = "verificationToken"; //Required 
$fields = null; //Optional 
$url = "url"; //Optional 
$welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
 
$result = $authenticationAPI->verifyEmail($verificationToken,$fields,$url,$welcomeEmailTemplate);
 ```

 
<h5 id="GetSocialIdentity-get-">Auth Social Identity (GET)</h6>
This API is called just after account linking API and it prevents the raas profile of the second account from getting created.
 

 ```php
 
$access_token = "access_token"; //Required 
$fields = null; //Optional
 
$result = $authenticationAPI->getSocialIdentity($access_token,$fields);
 ```

 
<h5 id="DeleteAccountWithEmailConfirmation-delete-">Auth Delete Account with Email Confirmation (DELETE)</h6>
This API will send a confirmation email for account deletion to the customer's email when passed the customer's access token
 

 ```php
 
$access_token = "access_token"; //Required 
$deleteUrl = "deleteUrl"; //Optional 
$emailTemplate = "emailTemplate"; //Optional
 
$result = $authenticationAPI->deleteAccountWithEmailConfirmation($access_token,$deleteUrl,$emailTemplate);
 ```

 
<h5 id="RemoveEmail-delete-">Auth Remove Email (DELETE)</h6>
This API is used to remove additional emails from a user's account.
 

 ```php
 
$access_token = "access_token"; //Required 
$email = "email"; //Required
 
$result = $authenticationAPI->removeEmail($access_token,$email);
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

If you have not already initialized the Account object do so now
```php
$accountAPI = new AccountAPI(); 
```


<h5 id="UpdateAccountByUid-put-">Account Update (PUT)</h6>
This API is used to update the information of existing accounts in your Cloud Storage. See our Advanced API Usage section <a href='https://www.loginradius.com/docs/api/v2/customer-identity-api/advanced-api-usage/'>Here</a> for more capabilities.
 

 ```php

 $payload = '{
"firstName" : "<firstName>",
"lastName" : "<lastName>"
}';  //Required 
$uid = "uid"; //Required 
$fields = null; //Optional 
$nullSupport = "true"; //Optional
 
$result = $accountAPI->updateAccountByUid($payload,$uid,$fields,$nullSupport);
 ```

 
<h5 id="UpdatePhoneIDByUid-put-">Update Phone ID by UID (PUT)</h6>
This API is used to update the PhoneId by using the Uid's. Admin can update the PhoneId's for both the verified and unverified profiles. It will directly replace the PhoneId and bypass the OTP verification process.
 

 ```php
 
$phone = "phone"; //Required 
$uid = "uid"; //Required 
$fields = null; //Optional
 
$result = $accountAPI->updatePhoneIDByUid($phone,$uid,$fields);
 ```

 
<h5 id="SetAccountPasswordByUid-put-">Account Set Password (PUT)</h6>
This API is used to set the password of an account in Cloud Storage.
 

 ```php
 
$password = "password"; //Required 
$uid = "uid"; //Required
 
$result = $accountAPI->setAccountPasswordByUid($password,$uid);
 ```

 
<h5 id="InvalidateAccountEmailVerification-put-">Account Invalidate Verification Email (PUT)</h6>
This API is used to invalidate the Email Verification status on an account.
 

 ```php
 
$uid = "uid"; //Required 
$emailTemplate = "emailTemplate"; //Optional 
$verificationUrl = "verificationUrl"; //Optional
 
$result = $accountAPI->invalidateAccountEmailVerification($uid,$emailTemplate,$verificationUrl);
 ```

 
<h5 id="ResetPhoneIDVerificationByUid-put-">Reset phone ID verification (PUT)</h6>
This API Allows you to reset the phone no verification of an end user’s account.
 

 ```php
 
$uid = "uid"; //Required 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $accountAPI->resetPhoneIDVerificationByUid($uid,$smsTemplate);
 ```

 
<h5 id="UpsertEmail-put-">Upsert Email (PUT)</h6>
This API is used to add/upsert another emails in account profile by different-different email types. If the email type is same then it will simply update the existing email, otherwise it will add a new email in Email array.
 

 ```php

 $payload = '{
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] 
}';  //Required 
$uid = "uid"; //Required 
$fields = null; //Optional
 
$result = $accountAPI->upsertEmail($payload,$uid,$fields);
 ```

 
<h5 id="AccountUpdateUid-put-">Update UID (PUT)</h6>
This API is used to update a user's Uid. It will update all profiles, custom objects and consent management logs associated with the Uid.
 

 ```php

 $payload = '{
"newUid" : "<newUid>"
}';  //Required 
$uid = "uid"; //Required
 
$result = $accountAPI->accountUpdateUid($payload,$uid);
 ```

 
<h5 id="CreateAccount-post-">Account Create (POST)</h6>
This API is used to create an account in Cloud Storage. This API bypass the normal email verification process and manually creates the user. <br><br>In order to use this API, you need to format a JSON request body with all of the mandatory fields
 

 ```php

 $payload = '{
"email" : [   { 
 "type" : "<type>"  ,
 "value" : "<value>"   
}  ] ,
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>"
}';  //Required 
$fields = null; //Optional
 
$result = $accountAPI->createAccount($payload,$fields);
 ```

 
<h5 id="GetForgotPasswordToken-post-">Forgot Password token (POST)</h6>
This API Returns a Forgot Password Token it can also be used to send a Forgot Password email to the customer. Note: If you have the UserName workflow enabled, you may replace the 'email' parameter with 'username' in the body.
 

 ```php
 
$email = "email"; //Required 
$emailTemplate = "emailTemplate"; //Optional 
$resetPasswordUrl = "resetPasswordUrl"; //Optional 
$sendEmail = "true"; //Optional
 
$result = $accountAPI->getForgotPasswordToken($email,$emailTemplate,$resetPasswordUrl,$sendEmail);
 ```

 
<h5 id="GetEmailVerificationToken-post-">Email Verification token (POST)</h6>
This API Returns an Email Verification token.
 

 ```php
 
$email = "email"; //Required
 
$result = $accountAPI->getEmailVerificationToken($email);
 ```

 
<h5 id="GetAccountProfileByEmail-get-">Account Profiles by Email (GET)</h6>
This API is used to retrieve all of the profile data, associated with the specified account by email in Cloud Storage.
 

 ```php
 
$email = "email"; //Required 
$fields = null; //Optional
 
$result = $accountAPI->getAccountProfileByEmail($email,$fields);
 ```

 
<h5 id="GetAccountProfileByPhone-get-">Account Profile by Phone ID (GET)</h6>
This API is used to retrieve all of the profile data, associated with the account by phone number in Cloud Storage.
 

 ```php
 
$phone = "phone"; //Required 
$fields = null; //Optional
 
$result = $accountAPI->getAccountProfileByPhone($phone,$fields);
 ```

 
<h5 id="GetAccountProfileByUid-get-">Account Profiles by UID (GET)</h6>
This API is used to retrieve all of the profile data, associated with the account by uid in Cloud Storage.
 

 ```php
 
$uid = "uid"; //Required 
$fields = null; //Optional
 
$result = $accountAPI->getAccountProfileByUid($uid,$fields);
 ```

 
<h5 id="GetAccountPasswordHashByUid-get-">Account Password (GET)</h6>
This API use to retrive the hashed password of a specified account in Cloud Storage.
 

 ```php
 
$uid = "uid"; //Required
 
$result = $accountAPI->getAccountPasswordHashByUid($uid);
 ```

 
<h5 id="GetAccessTokenByUid-get-">Access Token based on UID or User impersonation API (GET)</h6>
The API is used to get LoginRadius access token based on UID.
 

 ```php
 
$uid = "uid"; //Required
 
$result = $accountAPI->getAccessTokenByUid($uid);
 ```

 
<h5 id="GetAccountIdentitiesByEmail-get-">Account Identities by Email (GET)</h6>
Note: This is intended for specific workflows where an email may be associated to multiple UIDs. This API is used to retrieve all of the identities (UID and Profiles), associated with a specified email in Cloud Storage.
 

 ```php
 
$email = "email"; //Required 
$fields = null; //Optional
 
$result = $accountAPI->getAccountIdentitiesByEmail($email,$fields);
 ```

 
<h5 id="DeleteAccountByUid-delete-">Account Delete (DELETE)</h6>
This API deletes the Users account and allows them to re-register for a new account.
 

 ```php
 
$uid = "uid"; //Required
 
$result = $accountAPI->deleteAccountByUid($uid);
 ```

 
<h5 id="RemoveEmail-delete-">Account Remove Email (DELETE)</h6>
Use this API to Remove emails from a user Account
 

 ```php
 
$email = "email"; //Required 
$uid = "uid"; //Required 
$fields = null; //Optional
 
$result = $accountAPI->removeEmail($email,$uid,$fields);
 ```

 
<h5 id="AccountDeleteByEmail-delete-">Delete User Profiles By Email (DELETE)</h6>
This API is used to delete all user profiles associated with an Email.
 

 ```php
 
$email = "email"; //Required
 
$result = $accountAPI->accountDeleteByEmail($email);
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

If you have not already initialized the PhoneAuthentication object do so now
```php
$phoneAuthenticationAPI = new PhoneAuthenticationAPI(); 
```


<h5 id="ResetPasswordByPhoneOTP-put-">Phone Reset Password by OTP (PUT)</h6>
This API is used to reset the password
 

 ```php

 $payload = '{
"otp" : "<otp>",
"password" : "<password>",
"phone" : "<phone>"
}';  //Required
 
$result = $phoneAuthenticationAPI->resetPasswordByPhoneOTP($payload);
 ```

 
<h5 id="PhoneVerificationByOTP-put-">Phone Verification OTP (PUT)</h6>
This API is used to validate the verification code sent to verify a user's phone number
 

 ```php
 
$otp = "otp"; //Required 
$phone = "phone"; //Required 
$fields = null; //Optional 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $phoneAuthenticationAPI->phoneVerificationByOTP($otp,$phone,$fields,$smsTemplate);
 ```

 
<h5 id="PhoneVerificationOTPByAccessToken-put-">Phone Verification OTP by Token (PUT)</h6>
This API is used to consume the verification code sent to verify a user's phone number. Use this call for front-end purposes in cases where the user is already logged in by passing the user's access token.
 

 ```php
 
$access_token = "access_token"; //Required 
$otp = "otp"; //Required 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $phoneAuthenticationAPI->phoneVerificationOTPByAccessToken($access_token,$otp,$smsTemplate);
 ```

 
<h5 id="UpdatePhoneNumber-put-">Phone Number Update (PUT)</h6>
This API is used to update the login Phone Number of users
 

 ```php
 
$access_token = "access_token"; //Required 
$phone = "phone"; //Required 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $phoneAuthenticationAPI->updatePhoneNumber($access_token,$phone,$smsTemplate);
 ```

 
<h5 id="LoginByPhone-post-">Phone Login (POST)</h6>
This API retrieves a copy of the user data based on the Phone
 

 ```php

 $payload = '{
"password" : "<password>",
"phone" : "<phone>"
}';  //Required 
$fields = null; //Optional 
$loginUrl = "loginUrl"; //Optional 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $phoneAuthenticationAPI->loginByPhone($payload,$fields,$loginUrl,$smsTemplate);
 ```

 
<h5 id="ForgotPasswordByPhoneOTP-post-">Phone Forgot Password by OTP (POST)</h6>
This API is used to send the OTP to reset the account password.
 

 ```php
 
$phone = "phone"; //Required 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $phoneAuthenticationAPI->forgotPasswordByPhoneOTP($phone,$smsTemplate);
 ```

 
<h5 id="PhoneResendVerificationOTP-post-">Phone Resend Verification OTP (POST)</h6>
This API is used to resend a verification OTP to verify a user's Phone Number. The user will receive a verification code that they will need to input
 

 ```php
 
$phone = "phone"; //Required 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $phoneAuthenticationAPI->phoneResendVerificationOTP($phone,$smsTemplate);
 ```

 
<h5 id="PhoneResendVerificationOTPByToken-post-">Phone Resend Verification OTP By Token (POST)</h6>
This API is used to resend a verification OTP to verify a user's Phone Number in cases in which an active token already exists
 

 ```php
 
$access_token = "access_token"; //Required 
$phone = "phone"; //Required 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $phoneAuthenticationAPI->phoneResendVerificationOTPByToken($access_token,$phone,$smsTemplate);
 ```

 
<h5 id="UserRegistrationByPhone-post-">Phone User Registration by SMS (POST)</h6>
This API registers the new users into your Cloud Storage and triggers the phone verification process.
 

 ```php

 $payload = '{
"firstName" : "<firstName>",
"lastName" : "<lastName>",
"password" : "<password>",
"phoneId" : "<phoneId>"
}';  //Required 
$sott = "sott"; //Required 
$fields = null; //Optional 
$options = "options"; //Optional 
$smsTemplate = "smsTemplate"; //Optional 
$verificationUrl = "verificationUrl"; //Optional 
$welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
 
$result = $phoneAuthenticationAPI->userRegistrationByPhone($payload,$sott,$fields,$options,$smsTemplate,$verificationUrl,$welcomeEmailTemplate);
 ```

 
<h5 id="CheckPhoneNumberAvailability-get-">Phone Number Availability (GET)</h6>
This API is used to check the Phone Number exists or not on your site.
 

 ```php
 
$phone = "phone"; //Required
 
$result = $phoneAuthenticationAPI->checkPhoneNumberAvailability($phone);
 ```

 
<h5 id="RemovePhoneIDByAccessToken-delete-">Remove Phone ID by Access Token (DELETE)</h6>
This API is used to delete the Phone ID on a user's account via the access token
 

 ```php
 
$access_token = "access_token"; //Required
 
$result = $phoneAuthenticationAPI->removePhoneIDByAccessToken($access_token);
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

If you have not already initialized the MultiFactorAuthentication object do so now
```php
$multiFactorAuthenticationAPI = new MultiFactorAuthenticationAPI(); 
```


<h5 id="MFAUpdateByAccessToken-put-">Update MFA by Access Token (PUT)</h6>
This API is used to Enable Multi-factor authentication by access token on user login
 

 ```php
 
$access_token = "access_token"; //Required
 $payload = '{
"googleAuthenticatorCode" : "<googleAuthenticatorCode>"
}';  //Required 
$fields = null; //Optional 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $multiFactorAuthenticationAPI->mfaUpdateByAccessToken($access_token,$payload,$fields,$smsTemplate);
 ```

 
<h5 id="MFAUpdatePhoneNumberByToken-put-">MFA Update Phone Number by Token (PUT)</h6>
This API is used to update the Multi-factor authentication phone number by sending the verification OTP to the provided phone number
 

 ```php
 
$access_token = "access_token"; //Required 
$phoneNo2FA = "phoneNo2FA"; //Required 
$smsTemplate2FA = "smsTemplate2FA"; //Optional
 
$result = $multiFactorAuthenticationAPI->mfaUpdatePhoneNumberByToken($access_token,$phoneNo2FA,$smsTemplate2FA);
 ```

 
<h5 id="MFAValidateGoogleAuthCode-put-">MFA Validate Google Auth Code (PUT)</h6>
This API is used to login via Multi-factor-authentication by passing the google authenticator code.
 

 ```php
 
$googleAuthenticatorCode = "googleAuthenticatorCode"; //Required 
$secondFactorAuthenticationToken = "secondFactorAuthenticationToken"; //Required 
$fields = null; //Optional 
$smsTemplate2FA = "smsTemplate2FA"; //Optional
 
$result = $multiFactorAuthenticationAPI->mfaValidateGoogleAuthCode($googleAuthenticatorCode,$secondFactorAuthenticationToken,$fields,$smsTemplate2FA);
 ```

 
<h5 id="MFAUpdatePhoneNumber-put-">MFA Update Phone Number (PUT)</h6>
This API is used to update (if configured) the phone number used for Multi-factor authentication by sending the verification OTP to the provided phone number
 

 ```php
 
$phoneNo2FA = "phoneNo2FA"; //Required 
$secondFactorAuthenticationToken = "secondFactorAuthenticationToken"; //Required 
$smsTemplate2FA = "smsTemplate2FA"; //Optional
 
$result = $multiFactorAuthenticationAPI->mfaUpdatePhoneNumber($phoneNo2FA,$secondFactorAuthenticationToken,$smsTemplate2FA);
 ```

 
<h5 id="MFALoginByEmail-post-">MFA Email Login (POST)</h6>
This API can be used to login by emailid on a Multi-factor authentication enabled LoginRadius site.
 

 ```php
 
$email = "email"; //Required 
$password = "password"; //Required 
$emailTemplate = "emailTemplate"; //Optional 
$fields = null; //Optional 
$loginUrl = "loginUrl"; //Optional 
$smsTemplate = "smsTemplate"; //Optional 
$smsTemplate2FA = "smsTemplate2FA"; //Optional 
$verificationUrl = "verificationUrl"; //Optional
 
$result = $multiFactorAuthenticationAPI->mfaLoginByEmail($email,$password,$emailTemplate,$fields,$loginUrl,$smsTemplate,$smsTemplate2FA,$verificationUrl);
 ```

 
<h5 id="MFALoginByPhone-post-">MFA Phone Login (POST)</h6>
This API can be used to login by Phone on a Multi-factor authentication enabled LoginRadius site.
 

 ```php
 
$password = "password"; //Required 
$phone = "phone"; //Required 
$emailTemplate = "emailTemplate"; //Optional 
$fields = null; //Optional 
$loginUrl = "loginUrl"; //Optional 
$smsTemplate = "smsTemplate"; //Optional 
$smsTemplate2FA = "smsTemplate2FA"; //Optional 
$verificationUrl = "verificationUrl"; //Optional
 
$result = $multiFactorAuthenticationAPI->mfaLoginByPhone($password,$phone,$emailTemplate,$fields,$loginUrl,$smsTemplate,$smsTemplate2FA,$verificationUrl);
 ```

 
<h5 id="MFAConfigureByAccessToken-get-">MFA Validate Access Token (GET)</h6>
This API is used to configure the Multi-factor authentication after login by using the access token when MFA is set as optional on the LoginRadius site.
 

 ```php
 
$access_token = "access_token"; //Required 
$smsTemplate2FA = "smsTemplate2FA"; //Optional
 
$result = $multiFactorAuthenticationAPI->mfaConfigureByAccessToken($access_token,$smsTemplate2FA);
 ```

 
<h5 id="MFAResendOTP-get-">MFA Resend Otp (GET)</h6>
This API is used to resending the verification OTP to the provided phone number
 

 ```php
 
$secondFactorAuthenticationToken = "secondFactorAuthenticationToken"; //Required 
$smsTemplate2FA = "smsTemplate2FA"; //Optional
 
$result = $multiFactorAuthenticationAPI->mfaResendOTP($secondFactorAuthenticationToken,$smsTemplate2FA);
 ```

 
<h5 id="MFAResetGoogleAuthByToken-delete-">MFA Reset Google Authenticator by Token (DELETE)</h6>
This API Resets the Google Authenticator configurations on a given account via the access token
 

 ```php
 
$access_token = "access_token"; //Required 
$googleauthenticator = "true"; //Required
 
$result = $multiFactorAuthenticationAPI->mfaResetGoogleAuthByToken($access_token,$googleauthenticator);
 ```

 
<h5 id="MFAResetSMSAuthByToken-delete-">MFA Reset SMS Authenticator by Token (DELETE)</h6>
This API resets the SMS Authenticator configurations on a given account via the access token.
 

 ```php
 
$access_token = "access_token"; //Required 
$otpauthenticator = "true"; //Required
 
$result = $multiFactorAuthenticationAPI->mfaResetSMSAuthByToken($access_token,$otpauthenticator);
 ```

 
<h5 id="MFAResetSMSAuthenticatorByUid-delete-">MFA Reset SMS Authenticator By UID (DELETE)</h6>
This API resets the SMS Authenticator configurations on a given account via the UID.
 

 ```php
 
$otpauthenticator = "true"; //Required 
$uid = "uid"; //Required
 
$result = $multiFactorAuthenticationAPI->mfaResetSMSAuthenticatorByUid($otpauthenticator,$uid);
 ```

 
<h5 id="MFAResetGoogleAuthenticatorByUid-delete-">MFA Reset Google Authenticator By UID (DELETE)</h6>
This API resets the Google Authenticator configurations on a given account via the UID.
 

 ```php
 
$googleauthenticator = "true"; //Required 
$uid = "uid"; //Required
 
$result = $multiFactorAuthenticationAPI->mfaResetGoogleAuthenticatorByUid($googleauthenticator,$uid);
 ```

 



### PasswordLessLogin API

List of APIs in this Section:<br>
[PUT : Passwordless Login Phone Verification](#PasswordlessLoginPhoneVerification-put-)<br>
[GET : Passwordless Login by Phone](#PasswordlessLoginByPhone-get-)<br>
[GET : Passwordless Login By Email](#PasswordlessLoginByEmail-get-)<br>
[GET : Passwordless Login Verification](#PasswordlessLoginVerification-get-)<br>

If you have not already initialized the PasswordLessLogin object do so now
```php
$passwordLessLoginAPI = new PasswordLessLoginAPI(); 
```


<h5 id="PasswordlessLoginPhoneVerification-put-">Passwordless Login Phone Verification (PUT)</h6>
This API verifies an account by OTP and allows the customer to login.
 

 ```php

 $payload = '{
"otp" : "<otp>",
"phone" : "<phone>"
}';  //Required 
$fields = null; //Optional 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $passwordLessLoginAPI->passwordlessLoginPhoneVerification($payload,$fields,$smsTemplate);
 ```

 
<h5 id="PasswordlessLoginByPhone-get-">Passwordless Login by Phone (GET)</h6>
API can be used to send a One-time Passcode (OTP) provided that the account has a verified PhoneID
 

 ```php
 
$phone = "phone"; //Required 
$smsTemplate = "smsTemplate"; //Optional
 
$result = $passwordLessLoginAPI->passwordlessLoginByPhone($phone,$smsTemplate);
 ```

 
<h5 id="PasswordlessLoginByEmail-get-">Passwordless Login By Email (GET)</h6>
This API is used to send a Passwordless Login verification link to the provided Email ID
 

 ```php
 
$email = "email"; //Required 
$passwordLessLoginTemplate = "passwordLessLoginTemplate"; //Optional 
$verificationUrl = "verificationUrl"; //Optional
 
$result = $passwordLessLoginAPI->passwordlessLoginByEmail($email,$passwordLessLoginTemplate,$verificationUrl);
 ```

 
<h5 id="PasswordlessLoginVerification-get-">Passwordless Login Verification (GET)</h6>
This API is used to verify the Passwordless Login verification link. Note: If you are using Passwordless Login by Phone you will need to use the Passwordless Login Phone Verification API
 

 ```php
 
$verificationToken = "verificationToken"; //Required 
$fields = null; //Optional 
$welcomeEmailTemplate = "welcomeEmailTemplate"; //Optional
 
$result = $passwordLessLoginAPI->passwordlessLoginVerification($verificationToken,$fields,$welcomeEmailTemplate);
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

If you have not already initialized the Role object do so now
```php
$roleAPI = new RoleAPI(); 
```


<h5 id="AssignRolesByUid-put-">Assign Roles by UID (PUT)</h6>
This API is used to assign your desired roles to a given user.
 

 ```php

 $payload = '{
"roles" : [  "roles" ] 
}';  //Required 
$uid = "uid"; //Required
 
$result = $roleAPI->assignRolesByUid($payload,$uid);
 ```

 
<h5 id="UpdateRoleContextByUid-put-">Upsert Context (PUT)</h6>
This API creates a Context with a set of Roles
 

 ```php

 $payload = '{
"roleContext" : [   { 
  "additionalPermissions" : ["<additionalPermissions>" ] ,
 "context" : "<context>"  ,
 "expiration" : "<expiration>"  ,
  "roles" : ["<roles>" ]  
}  ] 
}';  //Required 
$uid = "uid"; //Required
 
$result = $roleAPI->updateRoleContextByUid($payload,$uid);
 ```

 
<h5 id="AddRolePermissions-put-">Add Permissions to Role (PUT)</h6>
This API is used to add permissions to a given role.
 

 ```php

 $payload = '{
"permissions" : [  "permissions" ] 
}';  //Required 
$role = "role"; //Required
 
$result = $roleAPI->addRolePermissions($payload,$role);
 ```

 
<h5 id="CreateRoles-post-">Roles Create (POST)</h6>
This API creates a role with permissions.
 

 ```php

 $payload = '{
"roles" : [   { 
 "name" : "<name>"  ,
"permissions" : {"Permission_name":true}  
}  ] 
}';  //Required
 
$result = $roleAPI->createRoles($payload);
 ```

 
<h5 id="GetRolesByUid-get-">Roles by UID (GET)</h6>
API is used to retrieve all the assigned roles of a particular User.
 

 ```php
 
$uid = "uid"; //Required
 
$result = $roleAPI->getRolesByUid($uid);
 ```

 
<h5 id="GetRoleContextByUid-get-">Get Context with Roles and Permissions (GET)</h6>
This API Gets the contexts that have been configured and the associated roles and permissions.
 

 ```php
 
$uid = "uid"; //Required
 
$result = $roleAPI->getRoleContextByUid($uid);
 ```

 
<h5 id="GetRoleContextByContextName-get-">Role Context profile (GET)</h6>
The API is used to retrieve role context by the context name.
 

 ```php
 
$contextName = "contextName"; //Required
 
$result = $roleAPI->getRoleContextByContextName($contextName);
 ```

 
<h5 id="GetRolesList-get-">Roles List (GET)</h6>
This API retrieves the complete list of created roles with permissions of your app.
 

 ```php

 
$result = $roleAPI->getRolesList();
 ```

 
<h5 id="UnassignRolesByUid-delete-">Unassign Roles by UID (DELETE)</h6>
This API is used to unassign roles from a user.
 

 ```php

 $payload = '{
"roles" : [  "roles" ] 
}';  //Required 
$uid = "uid"; //Required
 
$result = $roleAPI->unassignRolesByUid($payload,$uid);
 ```

 
<h5 id="DeleteRoleContextByUid-delete-">Delete Role Context (DELETE)</h6>
This API Deletes the specified Role Context
 

 ```php
 
$contextName = "contextName"; //Required 
$uid = "uid"; //Required
 
$result = $roleAPI->deleteRoleContextByUid($contextName,$uid);
 ```

 
<h5 id="DeleteRolesFromRoleContextByUid-delete-">Delete Role from Context (DELETE)</h6>
This API Deletes the specified Role from a Context.
 

 ```php
 
$contextName = "contextName"; //Required
 $payload = '{
"roles" : [  "roles" ] 
}';  //Required 
$uid = "uid"; //Required
 
$result = $roleAPI->deleteRolesFromRoleContextByUid($contextName,$payload,$uid);
 ```

 
<h5 id="DeleteAdditionalPermissionFromRoleContextByUid-delete-">Delete Additional Permission from Context (DELETE)</h6>
This API Deletes Additional Permissions from Context.
 

 ```php
 
$contextName = "contextName"; //Required
 $payload = '{
"additionalPermissions" : [  "additionalPermissions" ] 
}';  //Required 
$uid = "uid"; //Required
 
$result = $roleAPI->deleteAdditionalPermissionFromRoleContextByUid($contextName,$payload,$uid);
 ```

 
<h5 id="DeleteRole-delete-">Account Delete Role (DELETE)</h6>
This API is used to delete the role.
 

 ```php
 
$role = "role"; //Required
 
$result = $roleAPI->deleteRole($role);
 ```

 
<h5 id="RemoveRolePermissions-delete-">Remove Permissions (DELETE)</h6>
API is used to remove permissions from a role.
 

 ```php

 $payload = '{
"permissions" : [  "permissions" ] 
}';  //Required 
$role = "role"; //Required
 
$result = $roleAPI->removeRolePermissions($payload,$role);
 ```

 



### Sott API

List of APIs in this Section:<br>
[GET : Generate SOTT](#GenerateSott-get-)<br>

If you have not already initialized the Sott object do so now
```php
$sottAPI = new SottAPI(); 
```


<h5 id="GenerateSott-get-">Generate SOTT (GET)</h6>
This API allows you to generate SOTT with a given expiration time.
 

 ```php
 
$timeDifference = 0; //Optional
 
$result = $sottAPI->generateSott($timeDifference);
 ```

 



### NativeSocial API

List of APIs in this Section:<br>
[GET : Access Token via Facebook Token](#GetAccessTokenByFacebookAccessToken-get-)<br>
[GET : Access Token via Twitter Token](#GetAccessTokenByTwitterAccessToken-get-)<br>
[GET : Access Token via Google Token](#GetAccessTokenByGoogleAccessToken-get-)<br>
[GET : Access Token using google JWT token for Native Mobile Login](#GetAccessTokenByGoogleJWTAccessToken-get-)<br>
[GET : Access Token via Linkedin Token](#GetAccessTokenByLinkedinAccessToken-get-)<br>
[GET : Access Token via Google AuthCode](#GetAccessTokenByGoogleAuthCode-get-)<br>

If you have not already initialized the NativeSocial object do so now
```php
$nativeSocialAPI = new NativeSocialAPI(); 
```


<h5 id="GetAccessTokenByFacebookAccessToken-get-">Access Token via Facebook Token (GET)</h6>
The API is used to get LoginRadius access token by sending Facebook's access token. It will be valid for the specific duration of time specified in the response.
 

 ```php
 
$fb_Access_Token = "fb_Access_Token"; //Required
 
$result = $nativeSocialAPI->getAccessTokenByFacebookAccessToken($fb_Access_Token);
 ```

 
<h5 id="GetAccessTokenByTwitterAccessToken-get-">Access Token via Twitter Token (GET)</h6>
The API is used to get LoginRadius access token by sending Twitter's access token. It will be valid for the specific duration of time specified in the response.
 

 ```php
 
$tw_Access_Token = "tw_Access_Token"; //Required 
$tw_Token_Secret = "tw_Token_Secret"; //Required
 
$result = $nativeSocialAPI->getAccessTokenByTwitterAccessToken($tw_Access_Token,$tw_Token_Secret);
 ```

 
<h5 id="GetAccessTokenByGoogleAccessToken-get-">Access Token via Google Token (GET)</h6>
The API is used to get LoginRadius access token by sending Google's access token. It will be valid for the specific duration of time specified in the response.
 

 ```php
 
$google_Access_Token = "google_Access_Token"; //Required 
$client_id = "client_id"; //Optional 
$refresh_token = "refresh_token"; //Optional
 
$result = $nativeSocialAPI->getAccessTokenByGoogleAccessToken($google_Access_Token,$client_id,$refresh_token);
 ```

 
<h5 id="GetAccessTokenByGoogleJWTAccessToken-get-">Access Token using google JWT token for Native Mobile Login (GET)</h6>
This API is used to Get LoginRadius Access Token using google jwt id token for google native mobile login/registration.
 

 ```php
 
$id_Token = "id_Token"; //Required
 
$result = $nativeSocialAPI->getAccessTokenByGoogleJWTAccessToken($id_Token);
 ```

 
<h5 id="GetAccessTokenByLinkedinAccessToken-get-">Access Token via Linkedin Token (GET)</h6>
The API is used to get LoginRadius access token by sending Linkedin's access token. It will be valid for the specific duration of time specified in the response.
 

 ```php
 
$ln_Access_Token = "ln_Access_Token"; //Required
 
$result = $nativeSocialAPI->getAccessTokenByLinkedinAccessToken($ln_Access_Token);
 ```

 
<h5 id="GetAccessTokenByGoogleAuthCode-get-">Access Token via Google AuthCode (GET)</h6>
The API is used to get LoginRadius access token by sending Google's AuthCode. It will be valid for the specific duration of time specified in the response.
 

 ```php
 
$google_authcode = "google_authcode"; //Required
 
$result = $nativeSocialAPI->getAccessTokenByGoogleAuthCode($google_authcode);
 ```

 



### WebHook API

List of APIs in this Section:<br>
[POST : Webhook Subscribe](#WebHookSubscribe-post-)<br>
[GET : Webhook Subscribed URLs](#GetWebHookSubscribedURLs-get-)<br>
[GET : Webhook Test](#WebhookTest-get-)<br>
[DELETE : WebHook Unsubscribe](#WebHookUnsubscribe-delete-)<br>

If you have not already initialized the WebHook object do so now
```php
$webHookAPI = new WebHookAPI(); 
```


<h5 id="WebHookSubscribe-post-">Webhook Subscribe (POST)</h6>
API can be used to configure a WebHook on your LoginRadius site. Webhooks also work on subscribe and notification model, subscribe your hook and get a notification. Equivalent to RESThook but these provide security on basis of signature and RESThook work on unique URL. Following are the events that are allowed by LoginRadius to trigger a WebHook service call.
 

 ```php

 $payload = '{
"event" : "<event>",
"targetUrl" : "<targetUrl>"
}';  //Required
 
$result = $webHookAPI->webHookSubscribe($payload);
 ```

 
<h5 id="GetWebHookSubscribedURLs-get-">Webhook Subscribed URLs (GET)</h6>
This API is used to fatch all the subscribed URLs, for particular event
 

 ```php
 
$event = "event"; //Required
 
$result = $webHookAPI->getWebHookSubscribedURLs($event);
 ```

 
<h5 id="WebhookTest-get-">Webhook Test (GET)</h6>
API can be used to test a subscribed WebHook.
 

 ```php

 
$result = $webHookAPI->webhookTest();
 ```

 
<h5 id="WebHookUnsubscribe-delete-">WebHook Unsubscribe (DELETE)</h6>
API can be used to unsubscribe a WebHook configured on your LoginRadius site.
 

 ```php

 $payload = '{
"event" : "<event>",
"targetUrl" : "<targetUrl>"
}';  //Required
 
$result = $webHookAPI->webHookUnsubscribe($payload);
 ```

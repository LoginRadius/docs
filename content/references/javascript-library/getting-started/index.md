---
title: "Getting Started"
tags: ["LoginRadiusV2.js", "JavaScript Library", "Introduction", "Getting Started"]
description: "This is a document detailing basic info for the LoginRadius V2 JavaScript SDK."
path: "/references/javascript-library/getting-started"
---

# Getting Started

Developing and managing an online identity solution continues to be challenging in terms of addressing security concerns, performance issues, or the high cost of the development and maintenance of the solution. LoginRadius provides a complete User Registration platform that can be implemented on any application.

This document covers how you can utilize our various features and functionalities via using JavaScript. We have explained the implantation of LoginRadius via JS in detail below, you can customize the provided code as per your need while implementing it on your web property.

## Installation

### Importing References

To import LoginRadius JavaScript interfaces on your page, add the following script reference to your page. By adding the below URL, you will always get the latest most up-to-date version of the LoginRadiusV2.js via our CDN.

```
https://auth.lrcontent.com/v2/js/LoginRadiusV2.js
```

If you are looking to have control over which version of the library you're using, you can either download and serve your own copy of LoginRadiusV2.js. You can also specify any desired version (like 3.10.0) directly in the URL using the following format:

```
https://auth.lrcontent.com/v2/LoginRadius-vX.Y.Z.js
```

Here, each letter represents the type of change. For example, X, Y, and Z are Major, Minor, and Patch versions respectively as per Semantic Versioning. Let’s say if you want to access LoginRadiusV2.js version 3.10.0 then the following URL will work for you:

```
https://auth.lrcontent.com/v2/LoginRadius-v3.10.0.js
```

> Note: LoginRadius may retroactively push urgent security updates to previous versions of LoginRadiusV2.js.

## Instantiating LoginRadius Object

After adding the reference to the page, make sure to include the fallback JS for instantiation of LoginRadiusV2 singleton. It can be instantiated by defining the commonOptions parameter and calling creating a new instance of the LoginRadiusV2 Object.

```html
<script type='text/javascript'>
    if (typeof LoginRadiusV2 === 'undefined') {
        var e = document.createElement('script');
        e.src = 'https://auth.lrcontent2.com/v2/js/LoginRadiusV2.js';
        e.type = 'text/javascript';
        document.getElementsByTagName("head")[0].appendChild(e);
    }
    var lrloadInterval = setInterval(function () {
        if (typeof LoginRadiusV2 != 'undefined') {
            clearInterval(lrloadInterval);
            LoginRadiusV2JsLoaded();
        }
    }, 100);
    function LoginRadiusV2JsLoaded() {
        var commonOptions = {};
        commonOptions.apiKey = "<your loginradius api key>";
        commonOptions.hashTemplate= true;
        commonOptions.sott ="<Get_Sott>";
        commonOptions.verificationUrl = window.location;//Change as per requirement
        var LRObject= new LoginRadiusV2(commonOptions);
    }
</script>
```

A detailed listing of all available parameters (and the actions they affect) for the commonOptions object is shown below:

| Name | Required | Action |
|:--|:--:|--:|
| apiKey (String) | Yes | All |
| sott (String) | Yes | [Registration](#registration) |
| verificationUrl (URI String) | Yes | [Registration](#registration), [Login](#login), [Resend Email Verification](/references/javascript-library/advanced-customizations#resend-email-verification), [Add Email](/references/javascript-library/advanced-customizations#add-email), [Verify Email](/references/javascript-library/advanced-customizations#email-verification), [Social Login](#social-login) |
| appName (String) | No | All |
| hashTemplate (Boolean)| No | [Social Login](#social-login), [Link Account](/references/javascript-library/advanced-customizations#account-linking), [Custom Interface]() |
| smsTemplateInstantOTPLogin (String) | No | [Login](#login) |
| customObjectName (String) | No | [Custom Object]() |
| callbackUrl (Encoded URI String) | No | [Social Login](#social-login), [Custom Interface]() |
| debugMode (Boolean) | No | All |
| deleteUrl (URI String) | No | [Delete User](/references/javascript-library/advanced-customizations#delete-user) |
| maskSensitiveInput (Boolean) | No | [Login](#login), [Registration](#registration) |
| formValidationMessage (Boolean) | No | All |
| periodicPasswordReset (Boolean) | No | [Login](#login) |
| showTwoFactorOnProfile (Boolean) | No | [Profile Editor](/references/javascript-library/advanced-customizations#profile-editor) |
| v2Recaptcha (Boolean) | No | [Registration](#registration) |
| v2RecaptchaSiteKey (String) | No | [Registration](#registration) |
| v2RecaptchaLanguage (String) | No | [Registration](#registration) |
| invisibleRecaptcha (Boolean) | No | [Registration](#registration) |
| accessTokenResponse (Boolean) | No | [Login](#login), [Social Login](#social-login) |
| appPath (String) | No | [SSO Login](/guide/web-sso), [Logout]() |
| callbackInsideSameWindow (Boolean) | No | [Social Login](#social-login), [Custom Interface](), [Link Account](/references/javascript-library/advanced-customizations#account-linking) |
| callbackType (String) | No | [Social Login](#social-login), [Custom Interface]() |
| enableHeaderSott (Boolean) | No | [Registration](#registration) |
| existPhoneNumber (Boolean) | No | [Registration](#registration) |
| formRenderDelay (Int) | No | [Registration](#registration) |
| passwordLength (Object) | No | [Registration](#registration), [Reset Password](#reset-password), [Forgot Password](#forgot-password) |
| passwordlessLogin (Boolean) | No | [Passwordless Login](/references/javascript-library/advanced-customizations#passwordless-login) |
| passwordlessLoginOTP (Boolean) | No | [Login](#login) |
| integrationName (String) | No | [Login](#login), [Social Login](#social-login), [SSO Login](/guide/web-sso) |
| projectionFields (JSON Object) | No | All |
| providerCountry (String) | No | [Social Login](#social-login), [Custom Interface](), [Link Account](/references/javascript-library/advanced-customizations#account-linking) |
| providersList (Array) | No | [Social Login](#social-login), [Custom Interface](), [Link Account](/references/javascript-library/advanced-customizations#account-linking) |
| resetPasswordConfirmationEmailTemplate (String)    | No | [Reset Password](#reset-password) |
| resetPasswordEmailTemplate (String)    | No | [Reset Password](#reset-password) |
| deleteUserEmailTemplate (String) | No | [Delete User](/references/javascript-library/advanced-customizations#delete-user) |
| addEmailTemplate (String) | No | [Add Email](/references/javascript-library/advanced-customizations#add-email) |
| onetouchLoginEmailTemplate (String) | No | [One Touch Login](/references/javascript-library/advanced-customizations#one-touch-login) |
| resetPasswordUrl (URI String) | No | [Reset Password](#reset-password) |
| smsTemplate2FA (String) | No | [Login](#login) |
| smsTemplate2FAWelcome (String) | No | [Login](#login) |
| smsTemplatePhoneVerification (String) | No | [Registration](#registration) |
| smsTemplateWelcome (String) | No | [Registration](#registration) |
| smsTemplateOneTouchLoginWelcome (String) | No | [One Touch Login](/references/javascript-library/advanced-customizations#one-touch-login) |
| smsTemplateOneTouchLogin (String) | No | [One Touch Login](/references/javascript-library/advanced-customizations#one-touch-login) |
| smsTemplateForgot (String) | No | [Forgot Password](#forgot-password) |
| smsTemplateUpdatePhone (String) | No | [Update Phone](/references/javascript-library/advanced-customizations#update-phone) |
| termsAndConditionHtml (String) | No | [Registration](#registration) |
| tokenExpire (Boolean) | No | [Logout]() |
| tokenType (String) | No | [Login](#login), [Social Login](#social-login), [SSO Login](/guide/web-sso) |
| unLinkAccountCallbackUrl (Encoded URI String) | No | [Unlink Account](/references/javascript-library/advanced-customizations#account-linking) |
| verificationEmailTemplate (String) | No | [Registration](#registration) |
| welcomeEmailTemplate (String) | No | [Registration](#registration) |
| promptPasswordOnFirstLoginForSocial (Boolean) | No | [Registration](#registration) |
| autoFilledFieldForSocial (Boolean) | No | [Login](#login) |
| otpEmailVerification (Boolean) | No | [Registration](#registration), [Reset Password](#reset-password) |
| loginOnEmailVerification (Boolean) | No | [Verify Email](/references/javascript-library/advanced-customizations#email-verification) |
| promptPasswordOnSocialLogin (Boolean) | No | [Social Login](#social-login) |
| usernameLogin (Boolean) | No | All |
| phoneLogin (Boolean) | No | All |
| twoFactorAuthentication (Boolean) | No | [Login](#login), [Registration](#registration), [Profile Editor](/references/javascript-library/advanced-customizations#profile-editor) |
| optionalTwoFactorAuthentication (Boolean) | No | [Login](#login), [Registration](#registration), [Profile Editor](/references/javascript-library/advanced-customizations#profile-editor) |
| googleAuthentication (Boolean) | No | [Profile Editor](/references/javascript-library/advanced-customizations#profile-editor) |
| askEmailForUnverifiedProfileAlways (Boolean) | No | All |
| disabledEmailVerification (Boolean)    | No | All |
| optionalEmailVerification (Boolean) | No | All |
| stayLogin (Boolean) | No | [Login](#login) |
| askRequiredFieldForTraditionalLogin (Boolean) | No | [Login](#login) |
| displayPasswordStrength (Boolean) | No | [Registration](#registration), [Reset Password](#reset-password), [Forgot Password](#forgot-password) |
| securityQuestionsCount (Number) | No | All |
| duplicateEmailWithUniqueUsername (Boolean) | No | [Registration](#registration) |
| isMobile (Boolean) | No | All |
| noCallbackForSocialLogin (Boolean) | No | [Social Login](#social-login) |
| disableAccountLinking (Boolean) | No | [Link Account](/references/javascript-library/advanced-customizations#account-linking) |
| customDomain (String) | No | All |
| securityQuestionEnabled (Boolean) | No | All |
| askRequiredFieldsOnPasswordLessLogin (Boolean) | No | [One Touch Login](/references/javascript-library/advanced-customizations#one-touch-login) |
| customizeSocialPopup (String) | No | [Social Login](#social-login) |
| askOptionalFieldsOnRegistration (Boolean) | No | [Registration](#registration) |
| tencentCaptcha(Boolean) | No | [Registration](#registration), [Login](#login) |
| tencentCaptchaAsFallback(Boolean) | No | [Registration](#registration), [Login](#login) |
| tencentCaptchaAppid(String) | No | [Registration](#registration), [Login](#login) |
| progressiveProfilingTraditional(Boolean) | No | [Progressive Profiling]() |
| askOptionalFieldsOnProgressiveSteps (Boolean) | No | [Progressive Profiling]() |
| verifyEmailByOTP(Boolean) | No | [Verify Email](/references/javascript-library/advanced-customizations#email-verification) |
| passwordlessLoginEmailTemplate(String) | No | [Passwordless Login](/references/javascript-library/advanced-customizations#passwordless-login) |
| autoFilledFieldForTraditional(Boolean) | No | [Login](#login) |
| preventVerificationEmail(Boolean) | No | [Registration](#registration) |
| disableButtonOnsubmit(Boolean) | No | All |
| enableSubmitOnSuccess(Boolean) | No | All |
| vNextUX (Boolean) | No | [Registration](#registration) |
| disableResendOTPButton (Boolean) | No | [Smart Login](/references/javascript-library/advanced-customizations#smart-login), [One Touch Login](/references/javascript-library/advanced-customizations#one-touch-login), [Login](#login), [Create Two Factor Authentication](/references/javascript-library/advanced-customizations#two-factor-authentication), [Update Phone](/references/javascript-library/advanced-customizations#update-phone), [Forgot Password](#forgot-password) |
| disableResendOTPButtonDelay (String) | No | [Smart Login](/references/javascript-library/advanced-customizations#smart-login), [One Touch Login](/references/javascript-library/advanced-customizations#one-touch-login), [Login](#login), [Create Two Factor Authentication](/references/javascript-library/advanced-customizations#two-factor-authentication), [Update Phone](/references/javascript-library/advanced-customizations#update-phone), [Forgot Password](#forgot-password) |

## Initialize Actions

Actions are initialized by calling the `LRObject.init()` method. This method takes two parameters. The signature of this method is:

```
LRObject.init(action, options);
```

Here is a table outlining the type and description of each parameter.

| Parameter | Type | Description |
|:--|:--:|--:|
| options | Object | Initialization options. Refer below for the table of options available. |
| action | String | Action to initialize. Refer below for the table of actions available. |

A detailed table for the **options** parameter from above:

| Parameter | Required | Description |
|:--|:--:|--:|
| container (String) | Yes | Id/class of div or any HTML element where the form of this action will be rendered. (Not for SSO) |
| templateName (String) | Yes | Id of Script which contains Social Login/Account Linking Template |
| classPrefix (String) | No | This is an optional parameter, this is required when using two forms on the same page, example values are "registration-form1", "registration-form2" etc. |
| onSuccess (Function) | Yes | Callback function to be called on a successful action. Signature of this callback function should be function(response, data) {} because on success response will be returned and data is original form data as JSON type. |
| onError (Function) | No | Callback function to be called on error (validation error, username exists, CAPTCHA error, etc.) of action. The signature of this callback function should be function(errors) {} because on error, errors will be returned and this will be an array of errors. |

A detailed table for the **actions** parameter from above:

| Parameter | Type | Description |
|:--|:--:|--:|
| [login](#login) | String | Perform login action. |
| [registration](#registration) | String | Perform registration action. |
| [resetPassword](#reset-password) | String | Perform reset password action. |
| [forgotPassword](#forgot-password) | String | Perform forgot password action. |
| [verifyEmail](/references/javascript-library/advanced-customizations#email-verification) | String | Perform email verification action. |
| [changePassword](/references/javascript-library/advanced-customizations#change-password) | String | Perform change password action when the consumer is logged in. |
| [socialLogin](#social-login) | String | Perform social login with User Registration. |
| [linkAccount](/references/javascript-library/advanced-customizations#account-linking) | String | Perform account linking action when the consumer is logged in. |
| [unLinkAccount](/references/javascript-library/advanced-customizations#account-linking) | String | Perform account unlinking action when the consumer is logged in. |
| [profileEditor](/references/javascript-library/advanced-customizations#profile-editor) | String | Perform profile update action. |
| [deleteUser](/references/javascript-library/advanced-customizations#delete-user) | String | Send delete consumer email. |
| [deleteUserConfirm](/references/javascript-library/advanced-customizations#confirm-delete-user) | String | Confirm delete consumer functionality. |
| [updatePhone](/references/javascript-library/advanced-customizations#update-phone) | String | Perform update phone action. |
| [resendVerificationEmail](/references/javascript-library/advanced-customizations#resend-email-verification) | String | Perform resend email verification action. |
| [addEmail](/references/javascript-library/advanced-customizations#add-email) | String | Perform add email action when the consumer is logged in. |
| [removeEmail](/references/javascript-library/advanced-customizations#remove-email) | String | Perform remove email action when the consumer is logged in. |
| [createTwoFactorAuthentication](/references/javascript-library/advanced-customizations#two-factor-authentication) | String | Perform Two-Factor Authentication action. |
| [onetouchLogin](/references/javascript-library/advanced-customizations#one-touch-login) | String | Perform no registration Passwordless Login. |
| [updateSecurityQuestion](/references/javascript-library/advanced-customizations#update-security-question) | String | Updates answers to the given security questions when the consumer is logged in. |
| [resetPasswordBySecurityQuestion](/references/javascript-library/advanced-customizations#reset-password-by-security-question) | String | Resets password using security questions. |
| [smartLogin](/references/javascript-library/advanced-customizations#smart-login) | String | Email prompt Smart Login. |
| [passwordlessLoginValidate](/references/javascript-library/advanced-customizations#passwordless-login) | String | Passswordless Login interface. |
| [backupCodeButton](/references/javascript-library/advanced-customizations#backup-code-button) | String | Show Backup Code button. |
| [resetBackupCodeButton](/references/javascript-library/advanced-customizations#reset-backup-code-button) | String | Show Reset Backup Code button. |

## Registration

To implement the registration form interface, use the `LRObject.init` method with the registration action. The following code example can be used for reference:

```javascript
var registration_options = {}
registration_options.onSuccess = function(response) {
//On Success
console.log(response);
};
registration_options.onError = function(errors) {
//On Errors
console.log(errors);
};
registration_options.container = "registration-container";
LRObject.util.ready(function() {
LRObject.init("registration",registration_options);
})
```
```html
<div id="registration-container"></div>
```
> Note: The success callback will return a JSON object `{IsPosted: true}` as the action's response.

### Registration Form Schema

To provide a custom schema for the registration form, the following code example can be used for reference. It will override the default schema.

```javascript
LRObject.registrationFormSchema  = [
    {
        "type": "string",
        "name": "emailid",
        "rules": "valid_email|required",
        "options": "",
        "DataSource": null,
        "ParentDataSource": null,
        "Parent": "",
        "Checked": true,
        "display": "Email Id",
        "permission": "w"
    },
    {
        "type": "password",
        "name": "password",
        "rules": "min_length[6]|max_length[32]|required",
        "options": "",
        "DataSource": null,
        "ParentDataSource": null,
        "Parent": "",
        "Checked": true,
        "display": "Password",
        "permission": "w"
    },
    {
        "type": "string",
        "name": "firstname",
        "rules": "",
        "options": "",
        "Parent": "",
        "Checked": true,
        "display": "First Name",
        "permission": "w"
    }
]
```

## Login

To implement the login interface, use the `LRObject.init` method with the login action. The following code example can be used for reference:

```javascript
var login_options = {};
login_options.onSuccess = function(response) {
//On Success
console.log(response);
};
login_options.onError = function(errors) {
//On Errors
console.log(errors);
};
login_options.container = "login-container";

LRObject.util.ready(function() {
LRObject.init("login",login_options);
})
```
```html
<div id="login-container"></div>
```

> Note: The success callback will return a JSON object `{Profile: Object, access_token: "xxxxxxxxxxxxxxxxxxxxxxxxxx", expires_in: "2017-01-28T08:41:59.10265Z"}` as the action's response.
>
> The object contains the consumer's profile, access token, and expiry time.

## Social Login

To implement the social login interface, use the `LRObject.init` with sociallogin action. Please have a look at the following sections for more details.

### Social Login Interface

A custom interface needs to be defined as per the code shown below:

```javascript
var custom_interface_option = {};
custom_interface_option.templateName = 'loginradiuscustom_tmpl';
LRObject.util.ready(function() {
LRObject.customInterface(".interfacecontainerdiv", custom_interface_option);
});
```
```html
<div id="interfacecontainerdiv" class="interfacecontainerdiv"></div>
```

Then, a template should be applied for the interface. It can be done with the help of following code:

```html
<script type="text/html" id="loginradiuscustom_tmpl">
<a class="lr-provider-label" href="javascript:void(0)" onclick="return <#=ObjectName #>.util.openWindow('<#=Endpoint #>');" title="<#=Name #>" alt="Sign in with <#=Name #>">
    <#=Name #>
</a>
</script>
```

### Handling the Social Login Response

When the consumer logs in with the selected social provider, a social profile of the consumer is returned as a response. If the returned profile is missing required registration fields (For example, logging in with Twitter doesn't return email which is required by default), it will prompt a form to let the consumer input the needed information. If the email is missing from the profile, the consumer will be required to verify their email address as well. Refer to the following code for more details.

```javascript
var sl_options = {};
sl_options.onSuccess = function(response) {
//On Success
//Here you get the access token
console.log(response);
};
sl_options.onError = function(errors) {
//On Errors
console.log(errors);
};
sl_options.container = "sociallogin-container";

LRObject.util.ready(function() {
LRObject.init('socialLogin', sl_options);
});
```
```html
<div id="sociallogin-container"></div>
```

> Note: The success callback will return a JSON object `{Profile: Object, access_token: "xxxxxxxxxxxxxxxxxxxxxxxxxx", expires_in: "2017-01-28T08:41:59.10265Z"}` as the action's response.
>
> The object contains the consumer's profile, access token, and expiry time.

<!--### Customizing the Social Interface

You have complete control over how the custom template will look, feel, and behave. There are few parameters available for some possible customizations. Please find them below:

  * [Available Parameters](#custom-interface-parameters)
  * [Setting Custom Icons](#setting-custom-icons)
  * [Setting Custom CSS Classes](#adding-custom-css-classes)
  * [Browser Specific Templates](#handling-browser-specific-redirects)
  * [Programmatic Link Creation](#programmatic-link-creation)-->

<!---#### Custom Interface Parameters

Additional parameters can be appended to the url in the Custom Interface template as a query parameter

#### Setting Custom Icons

#### Adding Custom CSS Classes

#### Handling Browser Specific Redirects

#### Programmatic Link Creation

### Social Login by Ping

#### Using LoginRadius SocialLogin library functions

#### Using Programmatic Link--->

## Forgot Password

To implement the forgot password interface, use the `LRObject.init` method with the forgotPassword action. The following code example can be used for reference:

```javascript
var forgotpassword_options = {};
forgotpassword_options.container = "forgotpassword-container";
forgotpassword_options.onSuccess = function(response) {
// On Success
console.log(response);
};
forgotpassword_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("forgotPassword", forgotpassword_options);
});
```
```html
<div id="forgotpassword-container"></div>
```
> Note: The success callback will return a JSON object `{IsPosted: true}` as the action's response.

## Reset Password

After the forgot password operation, there might be a need for reset password interface. To implement the reset password interface, use the `LRObject.init` method with the resetPassword action. The following code example can be used for reference:

```javascript
var resetpassword_options = {};
resetpassword_options.container = "resetpassword-container";
resetpassword_options.onSuccess = function(response) {
// On Success
console.log(response);
};
resetpassword_options.onError = function(errors) {
// On Errors
console.log(errors);
}

LRObject.util.ready(function() {
LRObject.init("resetPassword", resetpassword_options);
});
```
```html
<div id="resetpassword-container"></div>
```

[Go Back to Home Page](/)

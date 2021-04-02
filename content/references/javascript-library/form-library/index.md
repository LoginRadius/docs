---
title: "Form Library"
tags: ["JS Form Library", "Form Library"]
description: "This is a document detailing the LoginRadius JS Form Library."
path: "/references/javascript-library/form-library"
---

# Form Library

The Form Library is part of the LoginRadius JavaScript Library and is used for cases where you would like to build your own forms and functionality as opposed to using the automatically generated forms/interfaces.

This document describes the different function calls that can be made to the various LoginRadius APIs via the Form Library allowing you to easily add support for LoginRadius to your custom-built forms.

> Note: If you are currently using the automatically generated interfaces provided by `LoginRadiusV2.js` and are looking to add additional customizations/functionality, we recommend using the [JavaScript Hooks](/references/javascript-library/hooks) or referring to the [LoginRadius HTML5 SDK](/references/sdk/html5-sdk).

## Initialization

First, you will need to make sure that LoginRadiusV2.js is loaded on your page:

```
https://auth.lrcontent.com/v2/js/LoginRadiusV2.js
```

Next, you will need to initialize the APIs with your LoginRadius API key.

```javascript
var commonOptions = {};
commonOptions.apiKey = "<LoginRadius API Key>";
var LRObject = new LoginRadiusV2(commonOptions);
LRObject.api.init(commonOptions);
```

## Login

To implement a login, you will need to call the LRObject.api.login function which is used to handle a traditional email + password login.

Format:

`LRObject.api.login(data, onSuccess, onError);`

  * **data**: Data is an object that represents the data required for login. <!--For details on what information you can provide [click here]().-->Typically it should have the properties **emailid** for the provided email and **password** for the provided password.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful login.

  * **onError**: Pass in a function you would like to use as a callback for a failed login attempt.

Example:

```javascript
LRObject.api.login({
  emailid: "example@example.com",
  password: "123xxx789"
},
function(response) {
  // On Success this callback will call
  // response will be { access_token :"<token>", expires_in :"<date and time>" }
  // you can use token response.access_token and get consumer profile using your
  // LoginRadius SDK.
  alert(JSON.stringify(response));
}, function(errors) {
  // on failure this function will call ‘errors’ which is an array of errors with message.
  // every kind of error will be returned in this method
  // you can run a loop on this array to identify the description and other aspect of error.
  alert(JSON.stringify(errors));
});
```

## Registration

The registration function is used to register new consumers.

Format:

`LRObject.api.registration(schema, data, onSuccess, onError);`

  * **schema**: The schema for the fields being provided. You can leave schema as an empty array unless you're updating complex arrays.

  * **data**: Data is an object that represents the consumer profile that you are creating<!--, you can refer to our [detailed datapoints]() doc for more information on which fields can be updated-->. Using this API you cannot specify complex array fields directly within this object without using the schema.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful registration.

  * **onError**: Pass in a function you would like to use as a callback for a failed registration attempt.

Example:

```javascript
var schema = [{
  type: "string",
  name: "email",
  display: "Email Id",
  rules: "required|valid_email",
  permission: "r"
}, {
  type: "password",
  name: "password",
  display: "Password",
  rules: "required|min_length[6]|max_length[32]",
  permission: "w"
}];

var data = {
  email: [{type: "Primary", value: "example@example23423423.com"}],
  password: "Testing123"
};

LRObject.api.registration(schema, data,
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  });
```

## Update

The update function is used to update consumers.

Format:

`LRObject.api.updateData(schema, data, token, onSuccess, onError);`

  * **schema**: The schema for the fields being provided. You can leave schema as an empty array unless you're updating complex arrays.

  * **data**: Data is an object that represents the fields and their values of the profile that you are updating. <!--You can refer to our [detailed datapoints]() doc for more information on which fields can be updated.--> Please note that when using this library you cannot specify complex array fields.

  * **token**: The access_token of the consumer.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful update.

  * **onError**: Pass in a function you would like to use as a callback for an unsuccessful update.

## Forgot Password

`LRObject.api.forgotPassword` is used to send a forgot password email to a consumer, the email will contain the verification token to then be consumed the resetPassword function.

Format:

`LRObject.api.forgotPassword(data, onSuccess, onError);`

  * **data**: Data is an object that contains the object details for the [Auth Forgot Password API](/references/api/authentication#auth-forgot-password), this object requires the email of the consumer.

  * **onSuccess**: Pass in a function you would like to use as a callback when the email was successfully sent.

  * **onError**: Pass in a function you would like to use as a callback for when attempting to send the email has failed.

Example:

```javascript
LRObject.api.forgotPassword({
  email: "xxx@xxx.com"
}, function(response) {
  alert(JSON.stringify(response));
}, function(errors) {
  alert(JSON.stringify(errors));
});
```

## Reset Password

To reset a password you can call `LRObject.api.resetPassword` along with the new password, the password should be passed inside the data object.

Format:

`LRObject.api.resetPassword(data, onSuccess, onError);`

  * **data**: Data is an object that represents the body params for the [Auth Reset Password API]() it requires the following:

    * **resettoken**: The password reset token the consumer should have received via email when requesting a password reset.

    * **password**: The new desired password.

    * **confirmpassword**: The new desired password (again).

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful password change.

  * **onError**: Pass in a function you would like to use as a callback for a failed password change attempt.

Example:

```javascript
LRObject.api.resetPassword({
  resettoken: "5f0fc908xxxxxxxxxx800d2468a93d73",
  confirmpassword: "123xxx789",
  password: "123xxx789"
}, function(response) {
  alert(JSON.stringify(response));
}, function(errors) {
  alert(JSON.stringify(errors));
});
```

## Email Verification

To implement email verification, you will need to set up an email verification page on your website and call `LRObject.api.emailVerification` along with the verification token (also known as vtoken).

The verification page that has this emailVerification function should be the same that you have provided in your LoginRadiusV2.js options object **commonOptions.verificationUrl**.

Alternatively, in the LoginRadius Dashboard in your verification email template, you can also hard code the link to your verification page that has the emailVerification function.

For more details on email verification, we recommend reading our documentation on [Email Workflow Settings](/guide/customize-email-and-sms-settings#email-settings) and on [Email Template Management](/guide/emailpassword-login#step-2-configure-email-templates).

> Note: This function leverages the [Auth Verify Email API](/references/api/authentication#auth-verify-email). Review this API if you need details on parameters that can be provided in the **Data** object.

Format:

`LRObject.api.emailVerification(data, onSuccess, onError);`

  * **data**: An object that has the verificationtoken (often passed via the url params as vtoken) which is required for email verification. It can optionally take url or welcomeemailtemplate.

    * **verificationtoken**: Verification token.

    * **url**: Verification URL.

    * **welcomeemailtemplate**: Welcome email template.

  * **onSuccess**: Pass in a function you would like to use as a callback for successful email verification.

  * **onError**: Pass in a function you would like to use as a callback for a failed verification attempt.

Example:

```javascript
LRObject.api.emailVerification({
  vtoken: "<VTOKEN>"
},
function(response) {
  alert(JSON.stringify(response));
},
function(errors) {
  alert(JSON.stringify(errors));
});
```

## Social Login Function

To implement Social Login, call the `LRObject.api.socialLogin` function along with the token, in this case, the token comes from the callback response after the social login process. This will also prompt a 'missing required field' filling interface if some fields are not filled automatically from the data obtained via the social provider. By filling in the form, the consumer's account will be generated.

Format:

`LRObject.api.socialLogin(data, onSuccess, onError, onMissingField);`

  * **data**: Pass in an object that contains a **token** that has the access_token for the value.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful social login.

  * **onError**: Pass in a function you would like to use as a callback for a failed social login attempt.

  * **onMissingField**: Pass in a function you would like to use as a callback when the automated process of getting the social profile data was not able to fill out all of the required fields.

Example:

```javascript
LRObject.api.socialLogin({
  token: "xxxxxxxx-xxx-4337-xxxx-d624703ffe55"
}, function(response) {
  //success
  alert(JSON.stringify(response));
}, function(errors) {
  // failure
  alert(JSON.stringify(errors));
});
```

## Resend Email Verification

To resend email verification, you can call `LRObject.api.resendEmailVerification` with the consumers' email address.

> Note: This function leverages the [Auth Resend Email Verification API](/references/api/authentication#auth-resend-email-verification).

Format:

`LRObject.api.resendEmailVerification(data, onSuccess, onError);`

  * **data**: Should be an object that contains the required **email** of the consumer.

  * **onSuccess**: Pass in a function you would like to use as a callback when the verification email is successfully resent.

  * **onError**: Pass in a function you would like to use as a callback if resending the verification email fails.

Example:

```javascript
LRObject.api.resendEmailVerification({
  email: "xxx@xxx.com"
}, function(response) {
  alert(JSON.stringify(response));
}, function(errors) {
  alert(JSON.stringify(errors));
});
```

## One Time Passcode (OTP)

This section deals with enabling login by sending a One Time Passcode to your consumers and allowing them to login with it.

### Phone Send OTP

To get a One Time Password (OTP), call `LRObject.api.otpLogin` with the consumer's `phone` number.

> Note: This API is based on the [Phone Send One time Passcode API](/references/api/passwordless-login#passwordless-login-by-phone).

Format:

`LRObject.api.otpLogin(data, onSuccess, onError);`

  * **data**: Should be an object that contains the required phone number of the consumer passed as **phone** and you can optionally pass in your preferred SMS template via **smstemplate**

  * **onSuccess**: Pass in a function you would like to use as a callback when the One Time Passcode is successfully sent.

  * **onError**: Pass in a function you would like to use as a callback if sending the passcode fails.

Example:

```javascript
LRObject.api.otpLogin(
  {
    phone: "xxxxxxxxxxxxxxx"
  },
  function(response) {
    //success
    alert(JSON.stringify(response));

  },
  function(errors) {
    //failure
    alert(JSON.stringify(errors));
  }
);
```

### Verify OTP

The Verify OTP Login function leverages the [Phone Verification by OTP API](/references/api/phone-authentication#phone-verification-otp) to verify a consumer's provided phone number via the One Time Passcode.

Format:

`LRObject.api.verifyOTP(otp, phoneToVerify, onSuccess, onError);`

Example:

```javascript
LRObject.api.verifyOTP(
  {
    otp: "xxxx"
  },
  {
    phone:"xxxxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

### Resend OTP

The resendOTP function is used to resend the One Time Passcode to a consumer's phone. It is based on the [Phone Resend Verification OTP API](/references/api/phone-authentication#phone-resend-verification-otp).

Format:

`LRObject.api.resendOTP(data, onSuccess, onError);`

  * **data**: Should be an object which contains the consumer's phone number as **phone**.

  * **onSuccess**: Pass in a function you would like to use as a callback when the One Time Passcode was successfully resent.

  * **onError**: Pass in a function you would like to use as a callback if the resending the OTP has failed.

Example:

```javascript
LRObject.api.resendOTP(
  {
    phone: "xxxxxxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

### Update Phone

This function is used to update the configured phone.

Format:

`LRObject.api.updatePhone(data, onSuccess, onError);`

  * **data**: Should be an object containing the new value for **phone**.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful update.

  * **onError**: Pass in a function you would like to use as a callback if the request has failed.

Example:

```javascript
LRObject.api.updatePhone(
  {
    phone: "xxxxxxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

### Verify OTP Login

> Note: This function is intended for flows that interact with the Passwordless Login APIs.

The Verify OTP Login function leverages the [Phone Login Using One Time Passcode API](/references/api/passwordless-login#passwordless-login-phone-verification) which is part of the Passwordless Login APIs to log in a consumer instantly by returning an **access_token** along with the consumer's profile if the token is valid.

Format:

`LRObject.api.verifyOTP(otpData, phoneData, onSuccess, onError);`

  * **otpData**: Should be an object which contains the One Time Passcode as **otp**.

  * **phoneData**: Should be an object which contains the consumer's phone number as **phone**.

  * **onSuccess**: Pass in a function you would like to use as a callback when the One Time Passcode is successful at returning the profile of the consumer.

  * **onError**: Pass in a function you would like to use as a callback if the login has failed.

Example:

```javascript
LRObject.api.verifyOTP(
  {
    otp:"xxxx"
  },
  {
    phone:"xxxxxxxxx"
  },
  function(res){
    console.log(res);
  },
  function(res){
    console.log(res)
  }
);
```

## Two-Factor Authentication (2FA)

The Two-Factor Authentication set of functions are specifically designed to help in implementing workflows that make use of a second factor for authentication.

### Two-Factor Authentication Login

This function allows you to initiate a traditional login if you have 2FA (Two-Factor Authentication) enabled in your LoginRadius Dashboard. This function leverages the [2FA Email Login API](/references/api/two-factor-authentication#2fa-email-login).

Format:

`LRObject.api.twoFALogin(data, onSuccess, onError);`

  * **data**: Should be an object which contains the **email** and **password** properties obtained from the consumer's input.

  * **onSuccess**: Pass in a function you would like to use as a callback when the consumer has passed the first step to Two-Factor Authentication.

  * **onError**: Pass in a function you would like to use as a callback if providing the email and password failed.

### Two-Factor Authentication Update Phone

The `twoFAUpdatePhone` function leverages the [2FA Update Phone Number API](/references/api/two-factor-authentication#2fa-update-phone-number-by-token) which is used to update the phone number used to log in using Two-Factor Authentication by consumers.

Format:

`LRObject.api.twoFAUpdatePhone(data, onSuccess, onError);`

  * **data**: Should be an object which contains all of the parameters required to update the phone number in the [2FA Update Phone Number API](/references/api/two-factor-authentication#2fa-update-phone-number-by-token).

  * **onSuccess**: Pass in a function you would like to use as a callback when the consumer has passed successfully updated the phone number.

  * **onError**: Pass in a function you would like to use as a callback if updating the phone number has failed.

Example:

```javascript
LRObject.api.twoFAUpdatePhone(
  {
    phoneNo2FA: "xxxxxxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

### Two-Factor Authentication Verify OTP

This function leverages the [2FA Validate OTP API]() and is used to log in via Two-Factor Authentication.

Format:

`LRObject.api.twoFAVerifyOTP(data, onSuccess, onError);`

  * **data**: Should be an object which contains all of the parameters required to verify the OTP, you can refer to the [2FA Validate OTP API]() for details.

  * **onSuccess**: Pass in a function you would like to use as a callback when the consumer has been successfully logged in.

  * **onError**: Pass in a function you would like to use as a callback if the consumer has failed the login.

Example:

```javascript
LRObject.api.twoFAVerifyOTP(
  {
    otp: "xxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

### Two-Factor Authentication Resend OTP

This API is used to resend the One Time Passcode (OTP) by phone if needed during a Two-Factor Authentication process.

Format:

`LRObject.api.twoFAResendOTP(data, onSuccess, onError);`

  * **data**: Should be an object which contains the consumer's phone number under the `phoneNo2FA` parameter.

  * **onSuccess**: Pass in a function you would like to use as a callback when the consumer has been successfully resent the OTP.

  * **onError**: Pass in a function you would like to use as a callback if resending the OTP has failed.

Example:

```javascript
LRObject.api.twoFAResendOTP(
  {
    phoneNo2FA: "xxxxxxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

### Two-Factor Authentication Reset

This function is used to reset the 2FA configurations on the consumer's account.

To implement reset 2FA, call the method with `otpauthenticator` or `googleauthenticator`, success function, and error function.

Format:

`LRObject.api.resetTwoFactor(otpauthenticator, onSuccess, onError);`

  * **otpauthenticator**: Should be a string containing either `otpauthenticator` or `googleauthenticator`.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful reset.

  * **onError**: Pass in a function you would like to use as a callback if the request has failed.

Example:

```javascript
LRObject.api.resetTwoFactor(
  "otpauthenticator",
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

### Get Backup Code

To implement the get back up code functionality, call `LRObject.api.getBackupCode` with the access_token, along with a success function and error function.

Format:

`LRObject.api.getBackupCode(accessToken, onSuccess, onError);`

  * **accessToken**: Should be a string containing the access token.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful request.

  * **onError**: Pass in a function you would like to use as a callback for a failed request.

Example:

```javascript
LRObject.api.getBackupCode(
  "<access_token>",
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

### Reset Backup Code

To implement the reset back up code functionality, call `LRObject.api.resetBackupCode` with token, success function and error function.

Format:

`LRObject.api.resetBackupCode(accessToken, onSuccess, onError);`

  * **accessToken**: Should be a string containing the access token.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful reset.

  * **onError**: Pass in a function you would like to use as a callback for a failed reset.

Example:

```javascript
LRObject.api.resetBackupCode(
  "<access_token>",
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Add Email

The add email function is used to add additional emails to an existing account.

Format:

`LRObject.api.addEmail(data, onSuccess, onError);`

  * **data**: Should be an object containing the new value for **email** and **type** email type should be used to identify the type of email being added, e.g.: 'Primary', 'Secondary'.

  * **onSuccess**: Pass in a function you would like to use as a callback when successfully adding a new email.

  * **onError**: Pass in a function you would like to use as a callback if the request has failed.

Example:

```javascript
LRObject.api.addEmail(
  {email:"lrtest333@gmail.com",type:"personal"},
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Remove Email

This function is used to remove emails from a given account.

Format:

`LRObject.api.removeEmail(data, onSuccess, onError);`

  * **data**: Should be an object containing the value for **email** which should be the email you want to remove.

  * **onSuccess**: Pass in a function you would like to use as a callback for successful removal.

  * **onError**: Pass in a function you would like to use as a callback if the request has failed.

Example:

```javascript
LRObject.api.removeEmail(
  {
    email: "xyz@gmail.com"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Change Username

This function is used to change the username on a given account.

Format:

`LRObject.api.changeUsername(data, onSuccess, onError);`

  * **data**: Should be an object containing the value for the **username** which should be the new username to be applied.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful change.

  * **onError**: Pass in a function you would like to use as a callback if the change failed.

Example:

```javascript
LRObject.api.changeUsername(
  {
    username: "xyz"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Change Password

This API is used to change the existing password on an account.

Format:

`LRObject.api.changePassword(data, onSuccess, onError);`

  * **data**: Should be an object containing the value for **oldpassword** which should be the old password, the value for **password** which is the new password to be applied along with **confirmpassword** which should be the same as **password**.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful change.

  * **onError**: Pass in a function you would like to use as a callback if the change failed.

Example:

```javascript
LRObject.api.changePassword(
  {
    oldpassword: "xxxxxx",
    newpassword: "xxxxxx",
    confirmpassword: "xxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Check Phone Number Availability

This function allows you to check the availability of a given phone number.

Format:

`LRObject.api.checkPhoneNumberAvailability(data, onSuccess, onError);`

  * **data**: Object containing the value of **phone** which is the phone number you wish to verify.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful response. You should receive the availability as so: `{ "IsExist": true }`

  * **onError**: Pass in a function you would like to use as a callback if the request failed.

Example:

```javascript
LRObject.api.checkPhoneNumberAvailability(
  {
    phone: "xxxxxxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Check Email Availability

This function allows you to check the availability of a given email.

Format:

`LRObject.api.checkEmailAvailability(data, onSuccess, onError);`

  * **data**: Object containing the value of **email** which is the email you wish to verify.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful response. You should receive the availability as so: `{ "IsExist": true }`

  * **onError**: Pass in a function you would like to use as a callback if the request failed.

Example:

```javascript
LRObject.api.checkEmailAvailability(
  {
    email: "xyz@gmail.com"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Check Username Availability

This function allows you to check the availability of a given username.

Format:

`LRObject.api.checkUserNameAvailability(data, onSuccess, onError);`

  * **data**: Object containing the value of **username** which is the username you wish to verify.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful response. You should receive the availability as so: `{ "IsExist": true }`

  * **onError**: Pass in a function you would like to use as a callback if the request failed.

Example:

```javascript
LRObject.api.checkUserNameAvailability(
  {
    username: "xyz"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Reset Password by Phone

This function allows you to reset the password of a given account by phone.

Format:

`LRObject.api.resetPasswordByPhone(data, onSuccess, onError);`

  * **data**: Object containing the value of **otp** which is the One Time Passcode sent to the phone, **phone** for the phone number, and **password** for the desired password.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful response.

  * **onError**: Pass in a function you would like to use as a callback if the request failed.

Example:

```javascript
LRObject.api.resetPasswordByPhone(
  {
    otp: "xxxx",
    phone: "917300470xxx",
    password: "xxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Forgot Password by Phone

This function allows you to begin the process of changing the password by phone.

Format:

`LRObject.api.forgotPasswordbyPhone(data, onSuccess, onError);`

  * **data**: Object containing the value of the **phone** which is being used.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful response.

  * **onError**: Pass in a function you would like to use as a callback if the request failed.

Example:

```javascript
LRObject.api.forgotPasswordbyPhone(
  {
    phone: "xxxxxxxxxx"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Reset Password by Security Question

This function allows you to reset the password on an account by answering the configured Security Question(s).

Format:

`LRObject.api.resetPasswordBySecurityQuestion(data, onSuccess, onError);`

  * **data**: Object containing the value of either **email/username/phone** for the account, along with the desired **password** and the question and answer.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful response.

  * **onError**: Pass in a function you would like to use as a callback if the request failed.

Example:

```javascript
LRObject.api.resetPasswordBySecurityQuestion(
  {
    "<email/username/phone>": "<your login email/username/phone>",
    "password": "xxxxxx",
    "<questionid>": "<answer>",
    "<questionid>": "<answer>"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Update Security Question Answer

This function allows you to update the Answer(s) to the Security Question(s) on a given account.

Format:

`LRObject.api.updateSecurityQuestion(data, onSuccess, onError);`

  * **data**: Object containing the questions as key and the correct answer as value.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful response.

  * **onError**: Pass in a function you would like to use as a callback if the request failed.

Example:

```javascript
LRObject.api.updateSecurityQuestion(
  {
    "<questionid>": "<answer>",
    "<questionid>": "<answer>"
  },
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Invalidate Token

This function allows you to invalidate a token.

Format:

`LRObject.api.invalidateToken(accessToken, onSuccess, onError);`

  * **accessToken**: Should be a string containing the access token.

  * **onSuccess**: Pass in a function you would like to use as a callback when the token is successfully invalidated

  * **onError**: Pass in a function you would like to use as a callback if invalidating the given access_token fails.

Example:

```javascript
LRObject.api.invalidateToken(
  "<access_token>",
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

## Validate Token

This function allows you to validate an access token.

Format:

`LRObject.api.validateToken(accessToken, onSuccess, onError);`

  * **accessToken**: Should be a string containing the access token.

  * **onSuccess**: Pass in a function you would like to use as a callback when the token returns successfully.

  * **onError**: Pass in a function you would like to use as a callback if validation of the token fails.

Example:

```javascript
LRObject.api.validateToken(
  "<access_token>",
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
```

<!-- ## Get Social Data

The Get Social Data function is used to call any API from the [Social APIs](/references/api/social) that require the **GET** method.

To implement get social data, call `LRObject.api.getSocialData` with the access token, the success function, error function, the endpoint, and paramQueryString.

Format:

`LRObject.api.getSocialData(accessToken, onSuccess, onError, endPoint, paramQueryString);`

  * **accessToken**: Should be a string containing the access token.

  * **onSuccess**: Pass in a function you would like to use as a callback when the request is successful.

  * **onError**: Pass in a function you would like to use as a callback for when the request failed.

  * **endPoint**: The desired Endpoint e.g. `/api/v2/like` for the [Like API]().

  * **paramQueryString**: The desired query string parameters (Using the [Like API]() for our example) e.g. `&access_token`

Example:

```javascript
LRObject.api.getSocialData(
  "<access_token>",
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  },
  "<endpoint>",
  "<paramQueryString>"
);
``` -->

<!-- ## Post Social Data

The Post Social Data function is used to call any API from the [Social APIs]() that require the **POST** method.

To implement post social data, call `LRObject.api.postSocialData` with the access_token, a success function, an error function, the desired endpoint, the desired paramQueryString, and the postBodyJson.

Format:

`LRObject.api.LRObject.api.postSocialData(accessToken, onSuccess, onError, endPoint, paramQueryString, postBodyJson);`

  * **accessToken**: Should be a string containing the access token.

  * **onSuccess**: Pass in a function you would like to use as a callback when the request is successful.

  * **onError**: Pass in a function you would like to use as a callback for when the request fails.

  * **endPoint**: The desired Endpoint e.g. `/api/v2/message` for the [Post Message API]().

  * **paramQueryString**: The desired query string parameters (Using the [Post Message API]() for our example) e.g. `&access_token?to=example%40example.com?subject=welcome?message=hello`

  * **postBodyJson**: The desired JSON for the POST body if there are any, otherwise leave this blank.

Example:

```javascript
LRObject.api.postSocialData(
  "<access_token>",
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  },
  "<endpoint",
  "<paramQueryString>",
  postBodyJson
);
``` -->

<!-- ## Smart Login

To implement Smart Login, call `LRObject.api.smartLogin` with emailid/username, success function and error function.

Format:

`LRObject.api.smartLogin(data, onSuccess, onError);`

  * **data**: Data is an object that contains the 'email' parameter.

  * **onSuccess**: Pass in a function you would like to use as a callback for a successful Smart Login.

  * **onError**: Pass in a function you would like to use as a callback for a failed Smart Login attempt.

Example:

```javascript
LRObject.api.smartLogin(
  {email:"xyz@gmail.com"},
  function(response) {
    alert(JSON.stringify(response));
  },
  function(errors) {
    alert(JSON.stringify(errors));
  }
);
``` -->

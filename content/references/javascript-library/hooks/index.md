---
title: "Hooks"
tags: ["LoginRadiusV2.js", "Hooks"]
description: "This is a document detailing Hooks guide for the LoginRadius V2 JavaScript SDK."
path: "/references/javascript-library/hooks"
---

# JavaScript Hooks

In computer language, the term hooking refers to a range of techniques that are used to alter or augment the behavior of an operating system, of applications, or of other software components by intercepting function calls or messages or events passed between software components.

Here we will see how hooks can be implemented in JavaScript to change/alter the functionality of a specific LoginRadius function. The hooks that we can build in JavaScript are achieved with events and/or callbacks.

> Note: All of the advanced customizations explained here require that the LoginRadius User Registration Interface is already configured on your site. Refer back to the <a href="/references/javascript-library/getting-started">Getting Started</a> section for more details.

## JavaScript Hooks Customization Guide

This section will describe the JavaScript hooks available in LoginRadius and the customization options available for them.

Your hooks need to be declared before calling the `LRObject.init` method in your JavaScript code. For example:

```javascript
LRObject.$hooks.call('customizeFormPlaceholder', {
  "emailid" : "Enter your email address",
  "password" : "Enter Your password"
});
LRObject.init('login', options);
```

Most of the hooks described in this section will require that you pass in a field name. Please refer to the reference below for the complete list of possible field names:

|  |  |  |
| :-- | :--: | --: |
| login | twofaotp | addemail |
| socialregistration | showqrcode | removeemail |
| loginrequiredfieldsupdate | updatephone | changeusername |
| registration | changephone | profileeditor |
| verifyemail | forgotpassword | otplogin |
| resetpassword | securityquestions | passwordlessloginbuttonlabel |
| sociallogin | changepassword | passwordlessloginotpbuttonlabel |
| otp | resendemailverification | createtwofactorauthentication |
| sendotp | disablegoogleauthenticator | progressiveprofiling |
| resendotp | disableotpauthenticator | acceptprivacypolicy |
| changenumber | updatesecurityquestion | validatecode |
| backupcode | resetpwdbysecq | onetouchlogin |
| backupcodebutton | smartlogin |  |

### Before Action Init Hook

This hook is used to perform an action before any action initialization.

```javascript
LRObject.$hooks.register('beforeInit', function (action) {
//Code that you would like to run before a action initializes.
});
```

### Label Customization Hook

This hook provides you with ​a quick and easy way to access and customize the label for your user registration form.

```javascript
// "field-name": "New Label"
LRObject.$hooks.call('customizeFormLabel',{
  "emailid" : "Email Address",
  "password" : "Password"
});
```

### Placeholder Customization Hook

This hook helps you set up customized placeholders for form elements.

```javascript
LRObject.$hooks.call('customizeFormPlaceholder', {
  "emailid" : "Enter your email address",
  "password" : "Enter Your password"
});
```

### Default Option Choice Hook

This hook helps you to set the default value in drop-down fields for registration service.

```javascript
LRObject.$hooks.call('defaultChoiceOption', {
  "form-field-id": "<Key of Default value that you want to select>"
});
```

**Example:**
```javascript
LRObject.$hooks.call('defaultChoiceOption', {
  "gender" : "M"
});
```
> Note: Note: For the country field, please add the key and value with the pipe separator.

**Example:**
```javascript
// Here "in" is key and "India" is value.
LRObject.$hooks.call('defaultChoiceOption',{
  "country" : "in|India"
});
```

### Before Form Render Hook

This hook is used to perform an action before the form renders, e.g. show loading, hide some section, etc.

This hook also supports two parameters, `name` and `schema`. When used, the `name` parameter passes the form's name while the `schema` parameter will pass the LoginRadius generated form's schema.

The `schema` parameter can be useful as it allows you to make changes or completely replace the schema before the form renders.

```javascript
LRObject.$hooks.register('beforeFormRender', function (name, schema) {
//Add code you would like to execute before form renders here.
});
```

**Schema output example:**
```javascript
[
  {
    Checked : true,
    DataSource : null,
    Parent : "",
    ParentDataSource : null,
    display : "Email",
    name : "emailid",
    options : null,
    permission : "w",
    rules : "required",
    type : "string"
  },
  {
    Checked : true,
    DataSource : null,
    Parent : "",
    ParentDataSource : null,
    display : "Password",
    name : "Password",
    options : null,
    permission : "w",
    rules : "required",
    type : "string"
  },
  {
    Checked : true,
    DataSource : null,
    Parent : "",
    ParentDataSource : null,
    display : "Confirm Password",
    name : "confirmpassword",
    options : null,
    permission : "w",
    rules : "required|min_length[6]|max_length[32]|matches[password]",
    type : "password"
  }
]
```

### After Form Render Hook

This hook is used to perform an action after a form renders. For example, login, registration, etc.

```javascript
LRObject.$hooks.register('afterFormRender', function (name, schema) {
//Add code you would like to execute after the form has finished rendering.
});
```

### After Form Validation Hook

This hook is used to perform an action after a validation error is triggered. For example validation error on forms like login, registration, etc.

```javascript
LRObject.$hooks.register('afterValidation', function (name) {
//Code to run after a user tries to submit an invalid form.
});
```

### Process Start Hook

The hook is used to add behaviors when the form is being rendered. Use cases include showing a loading animation image, customize the form element, etc.

```javascript
LRObject.$hooks.register('startProcess', function (name) {
  console.log("Start " + name +  " Process");
});
```

### Process End Hook

The hook is used to add behaviors when the form is being submitted. Use cases include showing a loading animation image, customize the form element, etc.

```javascript
LRObject.$hooks.register('endProcess', function (name) {
  console.log("End " + name + " Process");
});
```

### Customize Button Name Hook

This hook provides you with ​a quick and easy way to customize the button name of your form.

```javascript
// "action-name": "New button name"
LRObject.$hooks.call('setButtonsName', {
  login : "Login",
  registration:'Register'
});
```

You can customize button names by passing them as key-value pairs into the hook's options. Refer below for the supported button field names and their corresponding default texts:

| Field Name | Original Text |
| :-- | --: |
| login | Login |
| registration | Register |
| socialregistration | Login |
| loginrequiredfieldsupdate | Login |
| verifyemail | Verify |
| resetpassword | Reset Password |
| sociallogin | Login |
| otp | Verify |
| twofaotp | Verify |
| showqrcode | Verify |
| updatephone | Update |
| changephone | Update |
| forgotpassword | Send |
| securityquestions | Get |
| changepassword | Submit |
| resendemailverification | Send |
| addemail | Send |
| removeemail | Send |
| changeusername | Submit |
| profileeditor | Update Profile |
| otplogin | OTP |
| passwordlessloginbuttonlabel | Email me a link to Sign In |
| passwordlessloginotpbuttonlabel | Send an OTP to Sign In |
| createtwofactorauthentication | 2-Step Verification |
| sendotp | Send OTP |
| resendotp | Resend OTP |
| changenumber | Change Number |
| backupcode | Login |
| backupcodebutton | Try another way to Sign In |
| disablegoogleauthenticator | Disable Google Authenticator |
| disableotpauthenticator | Disable OTP Authenticator |
| updatesecurityquestion | Update Security Question |
| resetpwdbysecq | Reset Password By SecurityQ |
| smartlogin | Smart Login |
| validatecode | Validate |
| onetouchlogin | Login |
| progressiveprofiling | Progressive Profiling |

### Registration Schema Hook

In some cases, you may want to compare a consumer's profile with the default registration schema defined in the LoginRadius Identity Platform.

```javascript
LRObject.$hooks.register('registrationSchemaFilter', function (regSchema, userProfile) {
// console.log( regSchema );
// console.log( userprofile );
});
```

Refer below for a table of the default keys available and their use:

| Field Key in the LR Form | Field Name |
| :-- | --: |
| emailid | Email Id |
| phoneid | Phone ID |
| password | Password |

### Captcha Configuration Hooks

If you need to insert your captcha in a specific div and pass it in a callback function, you can use the following hook. The `container` parameter is the id of the div.

```javascript
LRObject.$hooks.call('addFormCaptcha', container, function (key) {
//the key parameter is used to return the captcha's response.
  console.log(key)
});
```

If you are using Google's Invisible reCAPTCHA, the following hook will need to be called:

```javascript
LRObject.$hooks.call('addFormCaptchaExecute', container);
```

The following code will also need to be present for Invisible reCAPTCHA:

```javascript
window.captchaHandle = captchaHandle;
```

### Social Login Render Hook

The hook is used to add behaviors when the social login missing fields form is rendered. The use case for this hook is hiding the social login interface when the required fields form is rendered.

```javascript
LRObject.$hooks.register('socialLoginFormRender', function () {
//on social login form render
});
```

### Custom Error Message Hook

This hook allows you to write custom error messages and descriptions based on error codes generated by LoginRadius.

```javascript
LRObject.$hooks.call('mapErrorMessages', [
  {
    code: 967,
    message: "Email is improperly formatted",
    description: "Email is improperly formatted"
  }, 
  {
    code: 966,
    message: "Username and password combination is incorrect",
    description: "Username and password combination is incorrect"
  }
]);
```

### Custom Validation Message Hook

This hook allows writing custom validation messages by rules generated from LoginRadius. %s will be replaced by field name.

```javascript
LRObject.$hooks.call('mapValidationMessages', [
  {
    rule: "required",
    message: "The %s field is required."
  },
  {
    rule: "valid_email",
    message: "The %s field must contain a valid email address."
  }
]);
```

You can also target specific fields and map custom validation messages for each field. Do this by overriding the rule with #<fieldname> as shown below:

```javascript
LRObject.$hooks.call('mapValidationMessages', [
  {
    rule: "required#emailid",
    message: "The %s field is a required field."
  },
  {
    rule: "required#password",
    message: "The %s field is a required property."
  },
  {
    rule: "required",
    message: "The %s field is required."
  }
]);
```

### Custom Validation Hook

This hook allows you to add validations to your form fields.

```javascript
LRObject.$hooks.call('formValidationRules', {
  "emailid" : "required|alpha",
  "phoneid" : "required"
});
```

Each form field can be defined a rule. The supported rules are detailed below:

| Rule | Regular Expression |
| :-- | --: |
| alpha | `/^[a-z]+$/i` |
| alpha\_dash | `/^[a-z0-9_\-]+$/i` |
| alpha\_numeric\_dash\_combo | `/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-])[A-Za-z\d][A-Za-z\d-]+$/i` |
| alpha\_numeric | `/^[a-z0-9]+$/i` |
| alphanumeric\_combo  | `/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/` |
| decimal | `/^\-?[0-9]*\.?[0-9]+$/` |
| exact\_length | `No regex usage: exact_length[integer]` |
| greater\_than | `No regex usage: greater_than[integer]` |
| integer | `/^\-?[0-9]+$/` |
| is\_natural | `/^[0-9]+$/i` |
| is\_natural\_no\_zero | `/^[1-9][0-9]*$/i` |
| less\_than | `No regex usage: less_than[integer]` |
| matches | `No regex usage: matches[parameter-name]` |
| max\_length | `No regex usage: max_length[integer]` |
| min\_length | `No regex usage: min_length[integer]` |
| numeric | `/^[0-9]+$/` |
| required | `No regex` |
| valid\_base64 | `/[^a-zA-Z0-9\/\+=]/i` |
| valid\_ca\_zip | `/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/` |
| valid\_email | `/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/` |
| valid\_ip | `/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i` |
| valid\_url | `/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&` |
| valid\_phoneno | `/^(\\+)|(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/` |
| valid\_credit\_card | `/^[\d\-\s]+$/` |
| custom\_validation | `Can be used to implement your custom regEx for any field. ### is the separator for the regEx and custom message. Usage: custom_validation[regEx###Custom-Message]` |
| callback\_valid\_date | `/^(0?[1-9]|1[012])[\/\-] (0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/` |

Here are some example validation hook declarations for reference:

```javascript
LRObject.$hooks.call('formValidationRules',{
  "emailid" : "required|valid_email",
  "name" : "required|max_length[32]|min_length[3]"
});

/* ----------------------------------------------------- */

LRObject.$hooks.call('formValidationRules',{
  "emailid" : "required|valid_email",
  "name" : "required|alpha_dash",
  "phone" : "required|exact_length[10]"
});


/* ----------------------------------------------------- */

LRObject.$hooks.call('formValidationRules',{
  "emailid" : "required|valid_email",
  "password" : "required",
  "confirmpassword" : "matches[password]",
  "phone" : "required|exact_length[10]"
});


/* ----------------------------------------------------- */

LRObject.$hooks.call('formValidationRules',{
  "emailid" : "required|valid_email",
  "zipcode" : "custom_validation[^\\d{5}(-\\d{4})?$###Invalid zipCode format. US format zip code formats (e.g., '94105-0011' or '94105')]"
});
```

As the Pipe `|` character is already used to separate multiple rules for a given field, if you are defining a custom validation regex with a Pipe character being used, you will need to replace it with `$or` in your regex.

For example:
```javascript
"custom_validation[^[1-3]+$|^[5-9]+$###pass digit only 1-3 or 5-9]"
```

Becomes:
```javascript
"custom_validation[^[1-3]+$or^[5-9]+$###pass digit only 1-3 or 5-9]"
```

### Custom Attribute Hook

This hook allows us to append custom attributes to LoginRadius form fields. These attributes are HTML attributes that modify an HTML element type. Multiple attributes can be added to a field by separating each attribute with the `&` character.

```javascript
LRObject.$hooks.call('formAttributes', {
  "emailid" : "autocomplete=off",
  "Name" : "autocomplete=on&maxlength=10"
});
```

### Event Calls Hook

This hook allows you to perform an action after any form validation has triggered e.g. login, registration, etc. This hook is useful for the following cases:

  1. Change options once the registration form validation is triggered and you want to change the captcha type.

  2. Execute code for integrations such as pushing analytics based on action(event) calls.

```javascript
LRObject.$hooks.register('eventCalls', function(name){
  console.log(name)
  if (name == 'registration') {
    console.log("registration event was triggered");
  } else {
    console.log(name);
  }
});
```

### Event On Element Hook

This hook allows you to specify any of the form elements generated by LoginRadiusV2.js and attach them to an event so that you can handle them further.

```javascript
LRObject.$hooks.call('addEventOnElement', {
  "<ID-of-Element>" : [
    {
      "event": "<Event Names = 'change', 'click'>",
      "eventCallback": function () {
        console.log('event called');
      }
    }
  ]
});
```

Example:

```javascript
LRObject.$hooks.call('addEventOnElement', {
  'loginradius-login-emailid': [
    {
      event: 'click',
      eventCallback: function () {
        console.log('Email click event called');
      }
    },
    {
      event: 'change',
      eventCallback: function () {
        console.log('Email change event called');
      }
    }
  ],
  'loginradius-login-password': [
    {
      event: 'change',
      eventCallback: function () {
        console.log('Password Onchange event Called');
      }
    }
  ]
});
```

### Password Strength Customization Hook

This hook allows you to customize the color and message scheme used for the different evaluation cases for the consumer entered password.
<!--For more details regarding activating password strength in the JavaScript library, refer to the [Password Strength]() section of our [Advanced JS Customizations]() document.-->

```javascript
LRObject.$hooks.call(
  'passwordMeterConfiguration',
  [
    {
      case: "<Evaluation case>", // worst, bad, weak, good, strong, secure
      message: "<Message>",//Your minimum password length message.
      color: "<Color>" // Red, Yellow, Green, Blue
    }
  ]
);
```

> Note: In the above password strength configuration hook, **case** is not subject to change, only the **message**, and **color scheme** can be changed.

Example: 
```javascript
LRObject.$hooks.call(
  'passwordMeterConfiguration',
  [
    {
      case: "worst", // Case Can not be changed
      message: "#min_length length is required",//Your minimum password length message.
      color: "Red" // Above message color
    },
    {
      case: "bad", // Case Can not be changed
      message: "Bad",
      color: "Red"
    },
    {
      case: "weak", // Case Can not be changedd
      message: "weak",
      color: "yellow"
    },
    {
      case: "good", // Case Can not be changed
      message: "Good",
      color: "Green"
    },
    {
      case: "strong", // Case Can not be changed
      message: "Strong",
      color: "Green"
    },
    {
      case: "secure", // Case Can not be changed
      message: "Secure",
      color: "Blue"
    }
  ]
);
```

### Language Customization Hook

This hook provides you a way to display the labels, placeholders, validation messages, and error messages for forms in your local language.

```javascript
LRObject.$hooks.call('setLocaleBasedInfo', options);
```

`options` is a JavaScript object containing key-value pairs for customization options (including labels, placeholders, and validation messages). For more information regarding the use of this, refer to our <a href="/concepts/localization#form-contents-customization" target="_blank">Localization</a> document.

[Go Back to Home Page](/)

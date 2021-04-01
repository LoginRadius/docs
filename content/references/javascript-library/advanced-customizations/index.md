---
title: "Advanced Customizations"
tags: ["LoginRadiusV2.js", "JavaScript Library", "Advanced", "Advanced Customizations"]
description: "This is a document detailing advanced info for the LoginRadius V2 JavaScript SDK."
path: "/references/javascript-library/advanced-customizations"
---

# Advanced Customizations

This document covers the Advanced Customizations available in LoginRadius JavaScript library and how to use them. Here we will see how to customize JavaScript to add functionality for a specific LoginRadius function. 

> Note: All of the advanced customizations explained here require that the LoginRadius User Registration Interface is already configured on your site. Refer back to the [Getting Started](/references/javascript-library/getting-started) section for more details.

## JS Version

To get the current version of the JavaScript library, reference the `LRObject.version` constant.

```javascript
LRObject.version
```

## Email Verification

To verify a consumer's email address, use the `LRObject.init` method with the **verifyEmail** action. The following code example can be used for reference:

```javascript
var verifyemail_options = {};
verifyemail_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
verifyemail_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("verifyEmail", verifyemail_options);
});

```

## Resend Email Verification

To implement the Resend Email Verification interface, use the `LRObject.init` method with the **resendVerificationEmail** action. The following code example can be used for reference:

```javascript
var resendemailverification_options= {};
resendemailverification_options.container = "resendemailverification-container";
resendemailverification_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
resendemailverification_options.onError = function(response) {
  // On Error
  console.log(response);
};


LRObject.util.ready(function() {
  LRObject.init("resendVerificationEmail", resendemailverification_options);
});
```

## Add Email

To implement the Add Email interface, use the `LRObject.init` method with the **addEmail** action. The following code example can be used for reference:

```javascript
var addemail_options= {};
addemail_options.container = "addemail-container";
addemail_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
addemail_options.onError = function(response) {
  // On Error
  console.log(response);
};


LRObject.util.ready(function() {
  LRObject.init("addEmail",addemail_options);
});
```

## Remove Email

To implement the Remove Email interface, use the `LRObject.init` method with the **removeEmail** action. The following code example can be used for reference:

```javascript
var removeemail_options= {};
removeemail_options.container = "removeemail-container";
removeemail_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
removeemail_options.onError = function(response) {
  // On Error
  console.log(response);
};

LRObject.util.ready(function() {
  LRObject.init("removeEmail",removeemail_options);
});
```

```html
<div id="removeemail-container"></div>
```

> Note: The success callback will return a JSON object `{IsDeleted: true}` as the action's response.

## Update Phone

To implement the Update Phone interface, use the `LRObject.init` method with the **updatePhone** action. The following code example can be used for reference:

```javascript
var updatephone_options = {};
updatephone_options.container = "updatephone-container";
updatephone_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
updatephone_options.onError = function(response) {
  // On Error
  console.log(response);
};

LRObject.util.ready(function() {
  LRObject.init("updatePhone",updatephone_options);
});
```

```html
<div id="updatephone-container"></div>
```

> Note: The success callback will return a JSON object `{IsPosted: true}` as the action's response.

## Change Password

To implement the Change Password interface, use the `LRObject.init` method with the **changePassword** action. The following code example can be used for reference:

```javascript
var changepassword_options = {};
changepassword_options.container = "changepassword-container";
changepassword_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
changepassword_options.onError = function(response) {
  // On Error
  console.log(response);
};

LRObject.util.ready(function() {
  LRObject.init("changePassword",changepassword_options);
});
```

```html
<div id="changepassword-container"></div>
```

## Delete User

To send a request to delete a consumer's profile, use the `LRObject.init` method with the **deleteUser** action. This action will work when a consumer is logged in. The following code example can be used for reference:

```javascript
var deleteuser_options = {};
deleteuser_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
deleteuser_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("deleteUser", deleteuser_options);
});
```

> Note: The success callback will return a JSON object `{IsDeleteRequestAccepted: true}` as the action's response.

### Confirm Delete User

To confirm the deletion of a consumer's profile, use the `LRObject.init` method with the **deleteUserConfirm** action. The following code example can be used for reference:

```javascript
var deleteuser_confirm_options = {};
deleteuser_confirm_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
deleteuser_confirm_options.onError = function(errors) {
  // On Errors
  console.log(errors);
};

LRObject.util.ready(function() {
  LRObject.init("deleteUserConfirm", deleteuser_confirm_options);
});
```

## Account Linking

Account Linking allows you to provide a flow for consumers to link their social provider accounts into a single unified account.

This section covers the technical aspects of implementing Account Linking. The following steps will only work when the consumer is logged in.

### Account Linking Scenarios

This section covers the different scenarios of account linking:

**Scenario 1:**

  1. The consumer is currently logged in Account 1 with UID of 123456.

  2. The consumer tries to link existing Account 2 with UID 456789.

  3. Once linked, the UID 456789 is removed and is replaced by 123456. The UID 456789 will be lost in this case.

**Scenario 2:**

  1. The consumer is currently logged in Account 1 with UID of 123456, which has two social providers connected (FB, Google).

  2. The consumer tries to link existing Account 2 with UID of 456789, which has one social provider (Twitter).

  3. Once linked, the UID 456789 is removed and is replaced by 123456. The UID 456789 will be lost in this case.

### Implementation Flow

The following are the two different ways to implement Account Linking:

**Method 1: Add Account Linking/Unlinking JS Interfaces**

  1. Load the JavaScript Interface script:

  ```html
  <script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
  ```

  2. Add Account Linking JavaScript Interface code:

  To implement the account linking interface, use the `LRObject.init` method with the **linkAccount** action. The following code example can be used for reference:

  ```javascript
  var la_options = {};
  la_options.container = "interfacecontainerdiv";
  la_options.templateName = 'loginradiuscustom_tmpl_link';
  la_options.onSuccess = function(response) {
    // On Success
    console.log(response);
  };
  la_options.onError = function(errors) {
    // On Errors
    console.log(errors);
  }

  LRObject.util.ready(function() {
    LRObject.init("linkAccount", la_options);
  });
  ```

  Also make sure to have an interfacecontainerdiv in your HTML:

  ```html
  <div id="interfacecontainerdiv" class="interfacecontainerdiv"></div>
  ```

  > Note: The success callback will return a JSON object `{isPosted: true}` as the action's response when different social providers have the same email address. It will return an access token otherwise.

  3. Add Account Unlinking JavaScript Interface code:

  To implement the account unlinking interface, use the `LRObject.init` method with the **unLinkAccount** action. The following code example can be used for reference:

  ```javascript
  var unlink_options = {};
  unlink_options.onSuccess = function(response) {
    // On Success
    console.log(response);
  };
  unlink_options.onError = function(errors) {
    // On Errors
    console.log(errors);
  }

  LRObject.util.ready(function() {
    LRObject.init("unLinkAccount", unlink_options);
  });
  ```

  4. Add Template code:

  ```html
  <script type="text/html" id="loginradiuscustom_tmpl_link">
    <# if(isLinked) { #>
      <div class="lr-linked">
        <a class="lr-provider-label" href="javascript:void(0)" title="<#= Name #>" alt="Connected">
          <#=Name#> is connected
        </a>
        <a  onclick='return  <#=ObjectName#>.util.unLinkAccount(\"<#= Name.toLowerCase() #>\",\"<#= providerId #>\")'>
          delete
        </a>
      </div>
    <# }  else {#>
      <div class="lr-unlinked">
        <a class="lr-provider-label" href="javascript:void(0)" onclick="return  <#=ObjectName#>.util.openWindow('<#= Endpoint #>');" title="<#= Name #>" alt="Sign in with <#=Name#>">
          <#=Name#>
        </a>
      </div>
    <# } #>
  </script>
  ```

  > Note: The template code uses the variable **isLinked** to conditionally display the linked or unlinked account.

**Method 2: REST APIs for Account Linking and Unlinking**

  You can alternatively utilize the [Link Social Identities API]() and [Unlink Social Identities API]() to link and unlink accounts respectively.

  **Sample Code**:

  Refer to the following code example to implement Account linking using APIs:

  ```html
  <!DOCTYPE html>
  <html>
    <head>
      <title>Social Login | LR Social Account Unlinking</title>
      <meta charset="utf-8">
      <script src="https://code.jquery.com/jquery-3.5.1.js"
        integrity="sha256-QWo7LDvxbWT2tbbQ97B53yJnYU3WhH/C8ycbRAkjPDc=" crossorigin="anonymous"></script>
      <script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
    </head>

    <body>
      <h3>Social Login</h3>
      <div id="provider-container">
        <button class="provider" onclick="openWin()">login with google</button>
      </div>
      <script type="text/javascript">
        function openWin() {
          let accessToken = "<LR access token>";//LR access token received from authentication
          let callback = window.location.href;
          let appname = "<LR app name>";
          let apikey = "<LR api key>";
          let url =
              `https://${appname}.hub.loginradius.com/RequestHandlor.aspx?apikey=${apikey}&provider=google&callback=${callback}&same_window=&is_access_token=true&callbacktype=&disablesignup=undefined&scope=&ac_linking=true`;
          window.open(url, "childWindow", 'menubar=1,resizable=1,width=450,height=450,scrollbars=1');
          window.addEventListener("message", LRReceiveMessage, false);


          function LRReceiveMessage(event) {
            console.log(event);
            if (event.origin.indexOf(('hub.loginradius.com')) > -1) {
              console.log("LRTokenKey", event.data);
              let candidatetoken = event.data;
              linkAccountAPI(candidatetoken);
            }
          }

          function linkAccountAPI(candidatetoken) {
            $.ajax({
              async: true,
              type: "POST",
              crossDomain: true,
              url: `https://api.loginradius.com/identity/v2/auth/socialidentity?apikey=${apikey}`,
              dataType: "json",
              headers: {
                "content-Type": "application/json",
                "Authorization": `Bearer ${accessToken}`
              },
              "data": JSON.stringify({
                "candidatetoken": candidatetoken
              })
            }).done(function (response) {
              // write your code after linking successfully
              console.log(response);
            });
          }
        }
      </script>
    </body>
  </html>
  ```

## Profile Editor

To implement the Profile Editor interface, use the `LRObject.init` method with the **profileEditor** action. The following code example can be used for reference:

```javascript
var profileeditor_options = {};
profileeditor_options.container = "profileeditor-container";
profileeditor_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
profileeditor_options.onError = function(response) {
  // On Error
  console.log(response);
};

LRObject.util.ready(function() {
  LRObject.init("profileEditor",profileeditor_options);
});
```

```html
<div id="profileeditor-container"></div>
```

When the Profile Editor is initialized, it loads all of the fields specified in your Registration Form Schema excluding your password fields. The schema is located within the LRObject: `LRObject.registrationFormSchema` and can be hardcoded to any custom schema that you would like to present to the consumer for profile editing.

> Note: At the moment the Profile Editor does not provide support for complex fields / arrays of objects.

## Two-Factor Authentication

> Note: 2FA will not work with Social Login.

To implement the Two-Factor Authentication interface, use the `LRObject.init` method with the **createTwoFactorAuthentication** action. The following code example can be used for reference:

```javascript
var authentication_options = {};
authentication_options.container = "authentication-container";
authentication_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
authentication_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("createTwoFactorAuthentication", authentication_options);
});
```

```html
<div id="authentication-container"></div>
```

### Backup Code Button

This interface allows you to provide your consumers a button to generate backup codes for their 2FA login. To implement this interface, use the `LRObject.init` method with the **backupCodeButton** action. The following code example can be used for reference:

```javascript
var backupcodebutton_options = {};
backupcodebutton_options.container = "backupcodebutton-container";
backupcodebutton_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
backupcodebutton_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("backupCodeButton", backupcodebutton_options);
});
```

```html
<div id="backupcodebutton-container"></div>
```

### Reset Backup Code Button

This interface allows you to provide your consumers a button to reset backup codes for their 2FA login. To implement this interface, use the `LRObject.init` method with the **resetBackupCodeButton** action. The following code example can be used for reference:

```javascript
var resetbackupcodebutton_options = {};
resetbackupcodebutton_options.container = "resetbackupcodebutton-container";
resetbackupcodebutton_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
resetbackupcodebutton_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("resetBackupCodeButton", resetbackupcodebutton_options);
});
```

```html
<div id="resetbackupcodebutton-container"></div>
```

## One Touch Login

To implement the One Touch Login interface, use the `LRObject.init` method with the **onetouchLogin** action. The following code example can be used for reference:

```javascript
var one_touch_options = {};
one_touch_options.container = "onetouchLogin-container";
one_touch_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
one_touch_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("onetouchLogin", one_touch_options);
});

```

```html
<div id="onetouchLogin-container"></div>
```

## Passwordless Login

To implement the Passwordless Login interface, add the **passwordlessLogin** parameter in the `commonOptions` object during instantiation of the LoginRadius Object, and use the `LRObject.init` method with the **passwordlessLoginValidate** action. The following code examples below can be used for reference:

```javascript
var commonOptions = {};
commonOptions.apiKey = "<your api key>";
commonOptions.appName = "<your app name>";
commonOptions.passwordlessLogin = true;
```

```javascript
var passwordless_options= {};

passwordless_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
passwordless_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init('passwordlessLoginValidate', passwordless_options);
});
```

Use the following hook to edit the button name:

```javascript
LRObject.$hooks.call('setButtonsName',{
  passwordlessloginbuttonlabel : "Click Me"
});
```

## Passwordless OTP Login

To implement the Passwordless OTP Login interface, add the **passwordlessLoginOTP** parameter in the `commonOptions` object during instantiation of the LoginRadius Object, and use the `LRObject.init` method with the **login** action. The following code examples below can be used for reference:

```javascript
var commonOptions = {};
commonOptions.apiKey = "<your api key>";
commonOptions.appName = "<your app name>";
commonOptions.passwordlessLoginOTP = true;
```

```javascript
var options = {};
options.onSuccess = function(response) {
  //On Success
  console.log(response);
};
options.onError = function(errors) {
  //On Errors
  console.log(errors);
};
options.container = "login-container";

LRObject.util.ready(function() {
  LRObject.init("login",options);
})
```

Use the following hook to edit the button name:

```javascript
LRObject.$hooks.call('setButtonsName',{
  passwordlessLoginOTPButtonLabel : "Send OTP"
});
```

## Security Questions

### Update Security Question

To implement the Update Security Question interface, use the `LRObject.init` method with the **updateSecurityQuestion** action. The following code example can be used for reference:

```javascript
var securityQ_options = {};
securityQ_options.container = "securityQ-container";
securityQ_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
securityQ_options.onError = function(errors) {
  // On Errors
  console.log(errors);
};

LRObject.util.ready(function() {
  LRObject.init("updateSecurityQuestion", securityQ_options );
});
```

```html
<div id="securityQ-container"></div>
```

### Reset Password by Security Question

To implement the Reset Password by Security Question interface, use the `LRObject.init` method with the **resetPasswordBySecurityQuestion** action. The following code example can be used for reference:

```javascript
var resetPasswordBySecQ_options = {};
resetPasswordBySecQ_options.container = "resetPasswordBySecQ-container";
resetPasswordBySecQ_options.onSuccess = function(response) {
  // On Success
  console.log(response);
};
resetPasswordBySecQ_options.onError = function(errors) {
  // On Errors
  console.log(errors);
}

LRObject.util.ready(function() {
  LRObject.init("resetPasswordBySecurityQuestion", resetPasswordBySecQ_options );
});
```

```html
<div id="resetPasswordBySecQ-container"></div>
```

## Smart Login

To implement the Smart Login interface, add the smartLogin parameters in the `commonOptions` object during instantiation of the LoginRadius Object, and use the `LRObject.init` method with the **smartLogin** action. The following code examples can be used for reference:

```javascript
var commonOptions = {};
commonOptions.apiKey = "<your api key>";
commonOptions.smartLoginPingCount = "<any number>"; //default is 100 times
commonOptions.smartLoginPingInterval = "<any number>"; //default is 5 second
commonOptions.smartLoginEmailTemplate = "<Email template>";
commonOptions.smartLoginRedirectUrl = "<Redirect Url>";
```

```javascript
var options = {};
options.onSuccess = function(response) {
  //On Success
  console.log(response);
  if (response.access_token) {
  // Handle the access token to Login a consumer
  }
};
options.onError = function(errors) {
  //On Error
  console.log(errors);
};
options.container = "smartLogin-container";

LRObject.util.ready(function() {
  LRObject.init("smartLogin", options);
})
```

```html
<div id="smartLogin-container"></div>
```

> Note: After clicking on the login button, the client will continuously ping the server to confirm whether the consumer has clicked on the link in the email.

## Multiple Social Login Interfaces on the Same Page

To generate multiple social login interfaces on the same page, instantiate 2 separate LRObjects:

```javascript
var commonOptions = {};
commonOptions.apiKey = "<your api key>";
commonOptions.appName = "<your app name>";
commonOptions.hashTemplate = true;
commonOptions.accessTokenResponse = true;
commonOptions.callbackUrl = window.location;

var LRObject_one= new LoginRadiusV2(commonOptions);

var LRObject_two= new LoginRadiusV2(commonOptions);

var options = {};
options.templateName = "loginradiuscustom_tmpl";
LRObject_one.util.ready(function() {
  LRObject_one.customInterface("container_one", options);
});
LRObject_two.util.ready(function() {
  LRObject_two.customInterface("container_two", options);
});
```

Initialize the separate LRObjects:

```javascript
var options_one = {};
options_one.onSuccess = function(response) {
  //On Success
  console.log(response);
};
options_one.onError = function(errors) {
  //On Errors
  console.log(errors);
};
options_one.container = "container_one";
LRObject_one.util.ready(function() {
  LRObject_one.init('socialLogin', options_one);
});

var options_two = {};
options_two.onSuccess = function(response) {
  //On Success
  console.log(response);
};
options_two.onError = function(errors) {
  //On Errors
  console.log(errors);
};
options_two.container = "container_two";

LRObject_two.util.ready(function() {
  LRObject_two.init('socialLogin', options_two);
});
```

Add containers to your HTML:

```html
<div id="container_one"></div>
<div id="container_two"></div>
```

## Advanced Registration Methods

The following methods return the **Account ID (UID)** and **Token** for the currently logged-in consumer. These functions can be used after the consumer login.

**To get the Account ID (UID):**

```javascript
LRObject.sessionData.getUid();
```

**To get the Access Token:**

```javascript
LRObject.sessionData.getToken();
```

## Projection of Fields

> Note: This section covers the Projection of Fields when using the LoginRadius JS Interfaces.

Using our JavaScript interfaces you're able to limit which primary/root fields you would like to be returned in your API response. For example: the profile and access_token. This allows you to streamline your process and only get the data that you need as part of your workflow.

The structure is as follows:

**Action Name**: This is the name of the JavaScript interface action that is called in your init method that you will be expecting a response from. For example: "login, registration". You can find a list of all possible actions in the actions table of our [Getting Started](/references/javascript-library/getting-started#initialize-actions) guide.

**Field Name**: The names of the primary / root fields you would like to be returned in your API response. These fields vary depending on the JavaScript Interface you're targeting. The fields that are not included here will be left out from the API response.

To apply this selection, you need to add the projectionFields parameter as part of your options during instantiation of your [LRObject](/references/javascript-library/getting-started#instantiating-the-loginradius-object).

The projectionFields parameter takes an object with the action names as the key and the field names as values inside an array:

**Format**:

```javascript
commonOptions.projectionFields = {"action1":["field1, field2"], "action2":["field1"]};
```

**Example**:

```javascript
commonOptions.projectionFields =  {"login":["access_token"], "registration":["Profile"]}
```

Instead of returning the full consumer profile by default, the above example returns the following:

```javascript
{
  Profile: {
    EmailVerified: true,
    IsDeleted: false,
    Uid: "********************************",
    PhoneId: null,
    PhoneIdVerified: false
  },
  access_token: "********-****-****-****-************"
}
```

## Get JWT

You can retrieve a JWT using a LoginRadius access token after login.

To retrieve a JWT using an access token:

  1. Configure the JWT token configuration in your LoginRadius Dashboard.

  2. Include the following client-side options when instantiating your [LRObject](/references/javascript-library/getting-started#instantiating-the-loginradius-object).

  ```javascript
  commonOptions.tokenType = "jwt";
  commonOptions.integrationName = "<your jwt configuration integration app name>";
  ```

> Note: For additional information regarding configuring, generating, and consuming a JWT, refer to our JWT document [here](/guide/jwt).

## Idempotent Requests

Idempotent requests are requests which are generated with the same set of inputs and return an identical result when called over and over.

LoginRadius prevents such requests from being accidentally executed twice or thrice upon the submit operation of a form (like Registration, Login, Forgot Password, etc). Once a submit operation is performed, it will disable the **Submit** button until the response (success/error) is not received from the server. Once the response is received from the server, it can be set enabled back.

Following options can be used with **commonOptions** during instantiation of your [LRObject](/references/javascript-library/getting-started#instantiating-the-loginradius-object) to enable/disable the Submit Button:

| Name | Type | Description |
| :-- | :--: | --:|
| disableButtonOnsubmit | Boolean | If true, **Submit Button** will be disabled after the first submit operation. By default, it will remain disabled even after a successful API call. Set **enableSubmitOnSuccess** to true to enable it after the successful API call. |
| enableSubmitOnSuccess | Boolean | If true, the **Submit Button** will be enabled after a successful API call. |

**You can configure this feature as follows**:

  1. Set the option **disableButtonOnsubmit** to **true** to disable the submit button on form submission:

  ```javascript
  commonOptions.disableButtonOnsubmit = true;
  ```

  2. By default, the submit button will not be enabled after a successful API call on submit button request. However, we can configure the button to be enabled after a successful API call by setting **enableSubmitOnSuccess** to **true**.

  ```javascript
  commonOptions.enableSubmitOnSuccess = true;
  ```

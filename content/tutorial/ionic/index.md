---
title: "Get started with Ionic"
tags: ["Ionic", "GetStarted"]
description: "This is a tutorial with Ionic sdk implementation."
---

# Get Started - Ionic

The tutorial lets you implement LoginRadius user registration, login, profile, and log out in your Ionic based application.

> You must have Ionic installed.
>
> New to Ionic? Check out [this reference](https://ionicframework.com/docs/cli/commands/start).

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - [Auth Page (IDX)](https://www.loginradius.com/docs/developer/concepts/idx-overview/).

Auth Page (IDX) reflects the configuration changes that you make in [LoginRadius Dashboard](https://dashboard.loginradius.com/getting-started). You can utilize this webpage for authentication requirements on your Ionic application.

> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name** (when you signed up for the LoginRadius account, it created an app for you), **API Key**, and **SOTT**.

- In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your App Name and API Key:

  ![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

- Now click the **Secure Mobile OTP Token(SOTT)** subsection, the below screen will appear:

  ![alt_text](images/sott.png "image_tooltip")

- Generate SOTT and make sure to copy the SOTT value (for security reasons, it's only visible once in the LoginRadius Dashboard).

## Setup Ionic 

1. Create an empty project and run the following command in the command line:

  ```
    ionic start demoApp blank --type=ionic1 --cordova
  ```
2. Install the following additional plugins:

   - Before you can add SDK, you must install the [Apache Cordova InAppBrowser](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-inappbrowser/index.html#page-toc-source) into your current project. Run the following command in the command line: :
     ```
     cd demoApp
     cordova plugin add cordova-plugin-inappbrowser
     ```
  - You must install the [Apache Cordova Whitelist](https://cordova.apache.org/docs/en/8.x/reference/cordova-plugin-whitelist/index.html) into your current project for Network Request. Run the following command in the command line:
  
     ```
     cordova plugin add cordova-plugin-whitelist
     ```

## Install SDK

1. Download the LoginRadius SDK from [github](https://github.com/LoginRadius/ionic-sdk/tree/master/sdk) 

2. Include this file in your project's `demoApp\www\js` folder.

3. Include the reference on the page `demoApp\www\index.html`:

  ```html
  <script src="js/sdkservices.js"></script>
  <script src="https://auth.lrcontent.com/v2/js/LoginRadiusV2.js"></script>
  
  ```

## Configure Project

In the `index.html` file, initialize the LoginRadius registration object for interface using the following code snippet:

```
 var commonOptions = {};
commonOptions.apiKey = "<your loginradius api key>";
commonOptions.appName = "<LoginRadius app name>";
commonOptions.hashTemplate = true;
commonOptions.accessTokenResponse = true;
commonOptions.phoneLogin = false;
commonOptions.sott ="<Get_Sott>";
commonOptions.verificationUrl = "https://auth.lrcontent.com/mobile/verification/index.html    ";
commonOptions.callbackUrl = 'DemoApp://';
commonOptions.isMobile =true;
commonOptions.formValidationMessage=true;
var LRObject= new LoginRadiusV2(commonOptions);

```

Replace the following placeholders in the above :

- apiKey: **API Key** obtained in the [Get Credential](#getcredentials) step.
- appName: **App Name** obtained in the [Get Credential](#getcredentials) step.
- sott: **SOTT** obtained in the [Get Credential](#getcredentials) step.


## Configure Registration and Login Page

1. Create  `controllers.js` file in your `demoApp\www\js` folder.
 
2. Add this dependency injection in your `controllers.js`:

    ```
    .controller("ExampleController",[ '$scope','SDKService', function ($scope,SDKService) {
    }]);

    ```
3. Add the following function to your `controllers.js`. This is used initialize the LoginRadius registration object, when user clicks on the Registration or Login button:

```js
var lroptions = {};
$scope.lr = SDKService.getSDKContext(lroptions);
$scope.lrapi = SDKService.getAPIContext();
lroptions.callback = function(params) {
//Handle the actions for: sociallogin, login, registration, and forgotpassword
switch (params.action) {
//Login returns an accesstoken which can be used to pull user details for APIs calls.
case "login":
//handle Email and Password Functionality
break;
//Registration returns and email message and status which you can use to display messaging to your user.
case "registration":
//Handle successful registration messaging
break;
//Forgot password returns and email message and status which you can use to display messaging to your user.
default:
alert('action not defined');
break;
}
};

```

4. Add the following code snippet to `Index.html` file or wherever you want to use **Registration Interface**. It triggers the registration interface and will return with an action of "registration" to the callback function.

```js
lr.register()
```
You must add an HTML div for Registration interface.

```html
<div id="registration-container"></div>
```

For Example -
```html
    <script id="register.html" type="text/ng-template">
    <ion-view>
     <ion-header-bar align-title="center" class="bar-positive">
  <div class="buttons">
     <div id="div" class="fa fa-chevron-left" ng-click="onBackKeyDown()" style="font-size:25px;color:#fff;margin: 5px;"></div>
  </div>
  <h1 class="title">Register</h1>
 
</ion-header-bar>      
      <ion-content has-header="true" padding="true" ng-init="lr.register()">
       <div id="registration-container"  style="margin-bottom:4%"></div>
      </ion-content>
    </ion-view>
  </script> 
```

5. Add the following code snippet to `Index.html` file or wherever you want to use **Login Interface**. It triggers the login interface and will return with an action of "login" to the callback function.

```js
lr.login()
```
For email/password login to add div for Login interface

```html
<div id="login-container"></div>
```

## Retrieve User Data using Access Token

1. Create a HTML file to call API and get data. For exmaple- create a `Profile.html` file in `demoApp\www\` folder.

2. In the created HTML file (`Profile.html`), add the following code for handle the login and registration action:

```html

var lroptions = {};

$scope.lr = SDKService.getSDKContext(lroptions);
$scope.lrapi = SDKService.getAPIContext();

lroptions.callback = function(params) {

//Handle the actions for: login, registration
switch (params.action) {
//Login returns an accesstoken which can be used to pull user details for APIs calls.
case "login":
 if (params.response.access_token != null) {
 sessionStorage.setItem('LRTokenKey', params.response.access_token);
 window.location = "#/afterloginredirection";
 } else {
 alert(JSON.stringify(params.response));
}
break;
//Registration returns and email message and status which you can use to display messaging to your user.
case "registration":
alert(JSON.stringify(params.response));
break;
default:
break;
}
};

``` 

> Note: Redirecting the user to the `Profile.html` file upon successful login.

3. Add the following code to the `Profile.html` file for getting the user profile:

```
<ion-content ng-controller="ExampleController" padding="true" ng-init="loadUserprofile()">
```
4. Add the following code snippet to `controllers.js` file function for getting user profile data:

```js
$scope.loadUserprofile = function() {
$scope.lrapi.getUserprofile(function(userprofile) {
document.getElementById('userimage').src = userprofile.ImageUrl;
document.getElementById('ID').innerHTML = userprofile.ID;
document.getElementById('Provider').innerHTML = userprofile.Provider;
document.getElementById('username').innerHTML = (userprofile.FirstName || '') + ' ' + (userprofile.MiddleName || '') + ' ' + (userprofile.LastName || '');
document.getElementById('emailid').innerHTML = userprofile.Email && userprofile.Email.length > 0 ? userprofile.Email[0].Value : '';
document.getElementById('birthdate').innerHTML = userprofile.BirthDate;
document.getElementById('gender').innerHTML = userprofile.Gender;
document.getElementById('profileurl').innerHTML = userprofile.ProfileUrl;
 });
 }
```

## Run and See Result

* Run the application by executing the following command in the command line:
  [`ionic serve`]

* Register a user here and then log in. Upon successful login, in response, you will get a user profile in JSON format. The following displays a sample JSON response:

  ![alt_text](../../assets/blog-common/jsonresponse.png "image_tooltip")

## Whitelist Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Domain Whitelisting](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

## Explore Ionic Demo

* **[Download Demo](https://github.com/LoginRadius/ionic-sdk/archive/master.zip)** of the above-explained tutorial to support your implementation.

* **[Refer to GitHub Demo](https://github.com/LoginRadius/ionic-sdk)**  to know how to implement various LoginRadius features using SDK Functions.

## Recommended Next Steps

## Ionic SDK Reference

## API Reference

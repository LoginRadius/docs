---
title: "Get started with Nodejs"
tags: ["NodeJs", "GetStarted"]
description: "This is a tutorial with IDX and node.js sdk implmentation."
path: "/tutorial/node-js"
---

# Get Started - Node.js

The tutorial lets you implement LoginRadius user registration, login, profile, and log out in your Node.js based application.

> **Note:** You must have Node.js installed, and the minimum supported version is 10.0.0.
>
> New to Node.Js? Check out [this reference](https://nodejs.org/en/about/).

Watch this video to get started, or refer to the section below for the text-based guide.

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/efM46qNSaeg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

---

> **Note:** [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - [Auth Page (IDX)](/concepts/idx).

Auth Page (IDX) reflects the configuration changes that you make in [LoginRadius Dashboard](https://dashboard.loginradius.com/getting-started). You can utilize this webpage for authentication requirements on your Node.js application.

## Choose Theme

In your LoginRadius Dashboard, select your app, then navigate to the **Auth Page (IDX)** section located in the left navigation bar and click the **Theme Customization** section. There you can select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")

To preview your login page's theme, click **Go to your Login Page** link highlighted on the above screen. 

> **Note:** Features like Email and Password login, User registration, Forgot password, and Remember me are already configured for your Auth Page(IDX).

## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## Setup Node.js 

This implementation uses the express framework to create Node.js API.

* Create a node project by running the following command in the command line:

  `npm init`

  > Upon completion, it will add a `package.json` file in the project folder.

* Create a server file in the project and name it `server.js`.

* Add the following code snippet to the `server.js` file.

  ```
  var express = require('express');
  var bodyParser = require('body-parser');
  var path = require('path');
  var app = express();
  var PORT = 3000;
  app.use(bodyParser.urlencoded({
    extended: true
  }));

  // your LR API implementation goes here

  app.listen(PORT, () => console.log('App can be accessed at localhost:' + PORT ));

  ```
>**Note:** Make sure you add further code (given in steps below) in place of **// your LR API implementation goes here** text mentioned in the above file.

## Install SDK

Add project dependency and LoginRadius SDK using npm by running the following command in the command line:

`npm install express body-parser loginradius-sdk`

Upon installation, you will find LoginRadius Node.js SDK under the node module. The following displays the project structure:

![alt_text](images/images4.png "image_tooltip")

## Configure Project

Add the following config object in the `server.js` file:

```
 var config = {
      apiDomain: 'api.loginradius.com',
      apiKey: '{{ Your API Key }}',
      apiSecret: '{{ Your API Secret }}',
      siteName: '{{ Your App Name }}',
   	  apiRequestSigning: false,
      proxy:{
        host:'',
        port:'',
        user:'',
        password:''
     }
  }
var lrv2 = require('loginradius-sdk')(config);


```

Replace the placeholders in the above config object with the following values:

* apiKey: **API Key** obtained in the [Get Credentials](#get-credentials) step.
* apiSecret: **API Secret** obtained in the [Get Credentials](#get-credentials) step.
* siteName: **App Name** obtained in the [Get Credentials](#get-credentials) step.

> **Note:** Pass the proxy configurations if you want to set HTTP Server Proxy Configuration through your Node.js SDK. In this case, host and port are required, while username and password are optional.

## Configure Registration and Login URLs

> This tutorial uses Auth Page(IDX) for authentication, where Registration and Login functionality is already implemented.

Navigate your Register or Login links or buttons to the following URLs:

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**

* **LoginRadius App Name** is the name of your app as mentioned in the [Get Credentials](#get-credentials) step.
* **return_url** is where you want to redirect users upon successful registration or login. [Whitelist your domain](#whitelist-domain) if you are not using Local Domain for this tutorial.

> return_url can be your website, frontend app, or backend server url where you are handling the access token.

## Retrieve User Data using Access Token

> **Note:** Once the authentication is done using Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url. The return_url will access the Node.js backend API with query parameter (access token).
>
> The following is an example of the access token in the query string with the Return URL:
>
> `<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`
>
> If return_url is of frontend, pass the token to backend node API (eg: http://localhost:3000) from the application. Or you can use the path of the back end API as the return_url.

Add the following API snippet to `server.js`to get the user profile using the access token:

```
app.get('/', function(req, res) {
    var fields = null; //Optional

    lrv2.authenticationApi.getProfileByAccessToken(req.query.token, fields).then((response) => {
        res.json(response);
       }).catch((error) => {
        res.json({'ErrorMessage':error.message});
       });
  });
```

## Run and See Result

* Run the API Server by executing the following command in the command line:
  [`node server.js`]

* Open your Auth Page(IDX) registration URL `https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`. It will display the following screen:

  ![alt_text](../../assets/blog-common/login-register.png "image_tooltip")

* Register a user here and then log in. Upon successful login, it will redirect you to the return url with the access token. In response, you will get a user profile in JSON format. The following displays a sample JSON response:

  ![alt_text](../../assets/blog-common/jsonresponse.png "image_tooltip")

Similarly, you can implement more features using Node.js SDK.

> In addition to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to [this document](https://www.loginradius.com/docs/developer/concepts/idx-overview/) for more information.

## Whitelist Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Whitelist Your Domain](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

## Explore Node.js Demo

* **[Download Demo](/download/get-started-node-js.zip)** of the above-explained tutorial to support your implementation.

* **[Refer to GitHub Demo](https://github.com/LoginRadius/login-page-demos/blob/master/node-idx-demo)**  to know how to implement various LoginRadius features using SDK Functions.

## Recommended Next Steps

[How to manage email templates for verification and forgot password](/guide/customize-email-and-sms-settings)

[How to personalize interfaces and branding of login pages](/guide/customize-auth-page)

[How to configure SMTP settings for sending emails to consumers](/guide/setup-your-smtp-provider)

[How to implement Social Login options like Facebook, Google](/guide/social-login)

[How to implement Phone Login](/guide/phone-login)

[How to implement Passwordless Login](/guide/passwordless-login)

## Node-js SDK Reference

[Node-js SDK](/references/sdk/node-js)

## API Reference

[APIs](/#api)

[Go Back to Home Page](/)

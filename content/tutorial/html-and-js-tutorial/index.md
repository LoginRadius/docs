---
title: "Get started with HTML and JS"
tags: ["HTML5", "CSS", "JS", "GetStarted"]
description: "This is a tutorial with IDX and HTML5 SDK implementation."
path: "/tutorial/html-and-js-tutorial"
---
# HTML and JS Tutorial

**HTML** is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. JavaScript is a programming language, it enables interactive web pages and is an essential part of web applications.

This demo will help you with a quick implementation of the LoginRadius platform with HTML and JS demo.


> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - [Auth Page (IDX)](/concepts/idx).

Auth Page (IDX) reflects the configuration changes that you make in [LoginRadius Dashboard](https://dashboard.loginradius.com/getting-started). You can utilize this webpage for authentication requirements on your HTML application.


## Choose Theme

In your LoginRadius Dashboard, select the **Auth Page (IDX)** from the left navigation and then click the **Theme Customization** to select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")


To preview your login page's theme, click the **Go to your Login Page** link as highlighted on the above screen. 

> Features like Email and Password login, User registration, Forgot password, and Remember me are already configured on your Auth Page(IDX).


## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

- In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your App Name and API Key:

  ![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

- Now click the the **Secure Mobile OTP Token(SOTT)** subsection, the below screen will appear:

  ![alt_text](../../assets/blog-common/sott.png "image_tooltip")

- Generate SOTT and make sure to copy the SOTT value (for security reasons, it's only visible once in the LoginRadius Dashboard).


## Set Up HTML Project 

> **Prerequisites :** <li> The web server needs to be set up. Refer the guides [here](https://www.maketecheasier.com/setup-local-web-server-all-platforms/) to set up web server locally. You can also set up a small GitHub webserver [here](https://www.maketecheasier.com/setup-local-web-server-all-platforms/).<li> Basic knowledge of HTML and JS.

- Download our HTML and JS demo project from Github [here](https://github.com/LoginRadius/demo), and put it in the root directory of your server.

- Open the `option.js` file and add the following:
  * LoginRadius API Key as obtained from [Get Cedentials](#get-credentials) step.
  * LoginRadius App Name as obtained from [Get Cedentials](#get-credentials) step.
  * SOTT as generated in [Get Cedentials](#get-credentials) step.

```
var commonOptions = {};
commonOptions.apiKey = "<LoginRadius API Key>";
commonOptions.appName = "<LoginRadius Site Name>";
commonOptions.hashTemplate= true;
commonOptions.sott ="<Sott>";
commonOptions.verificationUrl = window.location;//Change as per requirement

var LRObject= new LoginRadiusV2(commonOptions);

```
- After configuring the above options, go to your web browser and type in the root directory URL that your server is hosting.
- Now, you can start the demo and play with the available features in it.

## Run and See Result

1. Fill in your LoginRadius credentials in options.js as described in sections above

2. Execute the index.html file in your browser

3. Create a user by clicking on **Register Here**, upon successful user creation you'll be redirected to Login page

![alt_text](/images/loginscreen.png "image_tooltip")

![alt_text](/images/registration.png "image_tooltip")

4. Log in. Upon successful login, it will redirect you to the return url with the access token. In response, you will get a user profile in JSON format. Open **Developer Tools** in your browser, navigate to **Console** and you'll find a JSON response. The following displays a sample JSON response:



![alt_text](/images/jsonresponse.png "image_tooltip")

## Whitelist Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Domain Whitelisting](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

## Explore Demo

* **[Refer to GitHub Demo](/download/html5-sdk-demo.zip)**  to know how to implement various LoginRadius features using SDK Functions.

## Recommended Next Steps

[How to manage email templates for verification and forgot password](/guide/customize-email-and-sms-settings)

[How to personalize interfaces and branding of login pages](/guide/customize-auth-page)

[How to configure SMTP settings for sending emails to consumers](/guide/setup-your-smtp-provider)

[How to implement Social Login options like Facebook, Google](/guide/social-login)

[How to implement Phone Login](/guide/phone-login)

[How to implement Passwordless Login](/guide/passwordless-login)

## HTML SDK Reference

[HTML SDK](/references/sdk/html5-sdk)

## API Reference

[APIs](/#api)

[Go Back to Home Page](/)

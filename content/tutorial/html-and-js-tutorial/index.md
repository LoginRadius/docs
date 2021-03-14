---
title: "Get started with HTML and JS"
tags: ["HTML5", "CSS", "JS", "GetStarted"]
description: "This is a tutorial with IDX and HTML5 SDK implementation."
---
# HTML AND JS Tutorial

**HTML** is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. JavaScript is a programming language, it enables interactive web pages and is an essential part of web applications.
This demo will help you with a quick implementation of the LoginRadius platform with HTML and JS demo.


> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - [Auth Page (IDX)](https://www.loginradius.com/docs/developer/concepts/idx-overview/).

Auth Page (IDX) reflects the configuration changes that you make in [LoginRadius Dashboard](https://dashboard.loginradius.com/getting-started). You can utilize this webpage for authentication requirements on your HTML application.


## Choose Theme

In your LoginRadius Dashboard, select the **Auth Page (IDX)** from the left navigation and then click the **Theme Customization** to select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")



To preview your login page's theme, click **Go to your Login Page** link as highlighted on the above screen. 

> Features like Email and Password login, User registration, Forgot password, and Remember me are already implemented on your Auth Page(IDX).


## Whitelist Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Domain Whitelisting](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")



## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.



![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")


## Setting up HTML project 



> **Prerequisites :** <li> The web server needs to be set up. Refer the guides [here](https://www.maketecheasier.com/setup-local-web-server-all-platforms/) to set up web server locally. You can also set up a small GitHub webserver [here](https://www.maketecheasier.com/setup-local-web-server-all-platforms/).<li> Basic knowledge of HTML and JS.
## Getting Started

- Download our HTML and JS demo project from Github [here](https://github.com/LoginRadius/demo), and put it in the root directory of your server.
- Open the option.js file and add LoginRadius [API Key](https://www.loginradius.com/docs/api/v2/admin-console/platform-security/api-key-and-secret/), [Sitename](https://www.loginradius.com/docs/api/v2/admin-console/deployment/get-site-app-name/), and [SOTT](https://www.loginradius.com/docs/api/v2/customer-identity-api/sott-usage/#staticsott4) in it. Also, if you want to generate a dynamic SOTT refer to the guide [here](https://www.loginradius.com/docs/api/v2/customer-identity-api/sott-usage/).


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

> **Note :** You can edit the registration scheme from LoginRadius [Admin Console](https://adminconsole.loginradius.com/platform-configuration/authentication-configuration/standard-login/data-schema) and you can also configure social logins from [here](https://www.loginradius.com/docs/api/v2/customer-identity-api/social-login/getting-started/).





[Go Back to Home Page](https://lr-developer-docs.netlify.app)
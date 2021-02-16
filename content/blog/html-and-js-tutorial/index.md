# HTML AND JS Tutorial

**HTML** is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript. JavaScript is a programming language, it enables interactive web pages and is an essential part of web applications.
This demo will help you with a quick implementation of the LoginRadius platform with HTML and JS demo.

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




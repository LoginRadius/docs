# Get Started - Node.js

The tutorial lets you implement LoginRadius user registration, login, profile, and log out to your Node.js based application. 



> You must have Node.js installed, and the minimum supported version is 10.0.0. New to Node.Js? Check out [this reference](https://nodejs.org/en/about/).

Watch the video to get started, or refer to the section below for the text-based guide.


<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/efM46qNSaeg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

---------------------------------------------------
> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - [Auth Page (IDX)](https://www.loginradius.com/docs/developer/concepts/idx-overview/).

Auth Page (IDX) reflects the configuration changes that you make in [LoginRadius Dashboard](https://dashboard.loginradius.com/getting-started). You can utilize this webpage for authentication requirements on your Node.js application.


## Choose Theme

In your LoginRadius Dashboard, from the left navigatation, click the **Auth Page (IDX)** and click the **Theme Customization** to choose the theme of your choice or customize it's look and feel:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")



To preview your login page's theme, click **Go to your Login Page** link as highlighted on the above screen. Features like Email and Password login, User registration, Forgot password, and Remember me are already implemented on your Auth Page(IDX).


## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.


![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")



## Node JS Implementation

Here we are using the express framework to create Node.js API. Perform the following steps: 

- Create a node project by running following command in the command line: 

  `npm init`

  Upon completion, it will add a `package.json` file in the project folder. 

- Create a server file in project and name it `server.js`.

- Add the following snippet in the `server.js`.

```
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
var PORT = 3000;
app.use('/demo', express.static(path.join(__dirname, '/demo')));
app.use(bodyParser.urlencoded({
  extended: true
}));

app.get('/', function (req, res) {

})

```



## SDK Installation

Add project dependency and LoginRadius SDK using npm by running the following command in the command line:

`npm install express body-parser loginradius-sdk`

Upon installation, you will find LoginRadius Node.js SDK under the node module. The following displays the project structure:

![alt_text](images/images4.png "image_tooltip")

## Configuration

Add the following config object in the `server.js` file:

```
 var config = {
      apiDomain: 'https://api.loginradius.com',
      apiKey: '{{ Your API Key }}',
      apiSecret: '{{ Your API Secret }}',
      siteName: '{{ Your App Name }}',
      proxy:{
        host:'',
        port:'',
        user:'',
        password:''
     }
  }
var lrv2 = require('loginradius-sdk')(config);

```

Replace the following placeholders in the above config object in `server.js`:
- apiKey:  **API Key** obtained in the Get Credential step.
- apiSecret: **API Secret** obtained in the Get Credential step.
- siteName: **App Name** obtained in the Get Credential step.

>Pass the proxy configurations if you want to set HTTP Server Proxy Configuration through your Node.js SDK. In this case, host and port are required, while username and password are optional.


## Registration or Login

In this tutorial, we are using Auth Page(IDX) for authentication. Thus, use the following registration and login URLs at the front end of your application. For example, you can add these links to **Sign Up** and **Sign In** buttons of your application. 

> Registration and Login functionality is already implemented on your Auth Page (IDX). Thus, you don’t need to implement them separately.

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**
- LoginRadius App Name is the name of your app as mentioned in Get Credential step.
- return_url is where you want to redirect users upon successful registration or login.

> return_url can be your website, frontend app, or backend server url where you are handling the access token. 



##  Obtain Access Token

On successful authentication on the Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url.

The following is an example of the access token in the query string with the Return URL:

`<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`

> If return_url is frontend, then from that application, pass the token to backend node API. Else you can use path of back end API as the return_url.

You can use the access token to retrieve profile data and handle other user functionality.

> Similar to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to [this document](https://www.loginradius.com/docs/developer/concepts/idx-overview/) for more information.



## Retrieve User Data using Access Token

Once the authentication is done using Auth Page, the return_url will access the Node.js backend API with query parameter (access token). You can use this token to fetch the user profile.

For example: To get the user profile, add the following API snippet to `server.js`:

```
router.get('/userProfile', function(req, res) {
    var fields = null; //Optional

    lrv2.authenticationApi.getProfileByAccessToken(req.query.token, fields).then((response) => {
        res.json(response);   
       }).catch((error) => {
        res.json({'ErrorMessage':error.message});   
       });
  });
});
```
##  Domain Whitelisting

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default. 

To whilelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Domain Whitelisting](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")


> Now, run the API Server and you should get the user profile in response (json format). Similarly, you can implement more features using Node.js SDK. 

##  Explore Node.js Demo

Check out our Node.js demo to know how you can implement various LoginRadius features using SDK and its functions.

**[GitHub Demo Link](https://github.com/LoginRadius/login-page-demos/blob/master/node-idx-demo)**   |   **[Download Demo](https://github.com/LoginRadius/login-page-demos/archive/master.zip)**   


# Recommended Next Steps

How to manage email templates for verification and forgot password

How to personalize interfaces and branding of login pages

How to configure SMTP settings for sending emails to consumers

How to implement Social Login options like Facebook, Google

How to implement Phone Login

How to implement Passwordless Login


# Node.js SDK Reference

< Link to Node.js SKD doc >


# API Reference

< Link to APIs doc >

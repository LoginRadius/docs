# Get Started - Node.js

The tutorial lets you implement user registration, login, profile, and log out to your Node.js based application. 


```
You must have Node.js installed and minimum supported version is 10.0.0
```


Watch the video to get started or refer to the section below for the text-based guide

<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/efM46qNSaeg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

---------------------------------------------------

Signing up for LoginRadius created an app for you, this app is linked to a ready to use web page - Auth Page (IDX). Auth Page (IDX), let’s you see the execution of configuration made in LoginRadius Dashboard and you can utilize this webpage for authentication requirements on your Node.js application.


```
Create an account to get started, if you don't have one yet!
```



## Choose Theme

In your LoginRadius Dashboard, navigate to the Auth Page (IDX) and select a theme of your choice. It will be the design theme of your login page:

![alt_text](images/image1.png "image_tooltip")


To check your login page’s/ auth page’s theme, click **Go to your Login Page** link as highlighted on the above screen. There are various features already implemented on your Auth Page like Email and Password login, User registration, forgot password and remember password. 


## Get Credentials

Signing up for LoginRadius created an app for you, you need to get **App Name**, **API Key** and **API Secret** to configure and start implementation.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://staging-dashboard.lrinternal.com/configuration)** and get your API credentials.


![alt_text](images/image2.png "image_tooltip")



## Node JS Implementation

Here we are using express framework to create node js api.

## Installation

Install loginradius-sdk to use loginradius features and functionality.

`npm install loginradius-sdk@10.0.0`

## Configuration

Initialize configuration object.
```
 var config = {
      apiDomain: 'https://api.loginradius.com',
      apiKey: '{{ Your API KEY }}',
      apiSecret: '{{ Your API Secret }}',
      siteName: '{{ Your Sitename }}',
      proxy:{
        host:'',
        port:'',
        user:'',
        password:''
     }
  }
```

Replace the placeholders in the config object with your LoginRadius credentials **apikey, apisecret, sitename**. which find from previous step.

Pass the proxy configurations if you want to set Http Server Proxy Configuration through your Node.js SDK. Host and port are required to set Http Server Proxy configuration (username and password are optional).

Require the `loginradius-sdk` package and pass the config object

`var lrv2 = require('loginradius-sdk')(config);`



# Obtain Access Token

Access tokens are used to retrieve profile data and handle other user functionality. A client passes the access token to the server, and the server uses this token to decide whether the client is authorized to access the resource or not.


On successful authentication on the Auth Page (IDX), LoginRadius’s default script sends an access token in the query string as a token parameter with the return_url that you specified in the action URL.

Below is the access URL for Login Action:


`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

Upon registration or login, the user is redirected to the specified return URL with a token appended. The following is an example:

`<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`

Check out our [Auth Page (IDX)](https://www.loginradius.com/docs/developer/concepts/idx-overview/) for more information about available actions and key benefits.

# Retrieve User Data using Access Token

Once the authentication is done using Auth Page, the return_url will access the node js backend api with query parameter (access token), then can use the same token to fetch to user profile.

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



# Explore Node.js Demo

Check out our Node.js demo to know how you can implement various LoginRadius features using SDK and its functions.

**[GitHub Demo Link](https://github.com/LoginRadius/login-page-demos/blob/master/node-idx-demo)**   |   **[Download Demo](https://gitlab.com/loginradius/product/pioneer/hostedpagebackup/-/archive/dev/hostedpagebackup-dev.zip)**   


# Recommended Next Steps

How to manage email templates for verification and forgot password

How to personalize interfaces and branding of login pages

How to configure SMTP settings for sending emails to consumers

How to implement social login options like Facebook, Google

How to implement Phone Login

How to implement Passwordless Login


# Node.js SDK Reference

< Link to Node.js SKD doc >


# API Reference

< Link to APIs doc >

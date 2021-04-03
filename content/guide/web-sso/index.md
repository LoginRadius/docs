---
title: Enable Web SSO
description: "A guide on how to implement web sso in any web application."
summary: "A guide on how to implement web sso in any web application"
path: "/guide/web-sso"
---

# Enable Web SSO

Single sign-on (SSO) is the authentication mechanism, which allows consumers to sign in to different applications with a single digital identity. Also, upon signing into one application consumer is signed into another (SSO enabled) application automatically. 


Web SSO is a method of browser-based session management that utilizes browser storage mechanisms like sessionStorage, localStorage, cookies to maintain the consumer’s session across your applications.

> Note: Web SSO is only available for the developer and higher plans.

**LoginRadius Web SSO**: A centralized domain managed by LoginRadius Auth Page ( IDX ) is utilized to perform the authentication. When requested, this centralized domain shares the session with authorized applications.

So that the consumers logged in to one application automatically logs into other applications, independent of technology, platform, or domain the consumer is using.

## Configuration

### Step 1: Whitelist Your Domain

1. Login to your LoginRadius Dashboard account, from the left navigation panel, click the **Configuration**.


2. From the appeared screen, click the down arrow given against the **Whitelist Your Domain** section, the following screen will appear:

   ![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

3. Enter the desired domains in the **Add Domain** textbox highlighted above, and then click the Add button. These are the domains where you want to enable SSO.

### Step 2: Set SSO Token

Now lets set a LoginRadius access_token for SSO. There are 2 ways to achieve this - [Ajax Call](#set-sso-token-via-ajax-call) or [HTTPs Redirect](#set-sso-token-via-https-redirect).

#### Set SSO Token via Ajax Call

To manually set the access_token for SSO via AJAX, make an AJAX call to the following endpoint: `https://<LoginRadius Site Name>.hub.loginradius.com/ssologin/setToken`

The following are the **Query Parameters**:

- **token**: Pass in the access_token that you desire to set for SSO.

- **apikey**: Your LoginRadius API Key.

- **callback**: Your AJAX callback method.


Example of an AJAX Call function:

```javascript
$.ajax({
            type: "GET",
            url: "https://<your lr app name>.hub.loginradius.com/ssologin/setToken",
            dataType: "json",
            data: $.param({
                token: token,
                apikey: "your-API-key"
            }),
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                console.log(response);
                //write your code here after setting the token successfully
            },
            error: function (xhr, status, error) {
                console.log(error);
                //write your code here for error handling
            }
        });

```

#### Set SSO Token via HTTPs Redirect

In Safari browsers, there is an additional security layer preventing cookies from being modified externally, which restricts the use of JSONP for this use case. As a solution, you can simply use an HTTPs redirect for your Safari consumers.

Do a redirect to the following endpoint:

`https://<sitename>.hub.loginradius.com/ssologin/setSafariToken`

The following are the **Query Parameters**:

- **token**: Pass in the access_token that you desire to set for SSO.

- **apikey**: Your LoginRadius API Key.

- **callback**: The callback URL where you would like the redirect the consumer.

Example of a redirect method:

```javascript
if(safari){ // This is for safari browser, you need to check if your consumer is using safari or not
window.location="https://<sitename>.hub.loginradius.com/ssologin/setSafariToken?token=<accesstoken>&apiKey=<apikey>&callback=<callbackURL>"
}else{
   	Ajax function provided previously
}
```



[Go Back to Home Page](https://lr-developer-docs.netlify.app)

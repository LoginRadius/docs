---
title: Handle Token
description: "This guide will explain everything about token handling."
summary: "This guide will explain everything about token handling."
---

> Access tokens are used to retrieve profile data and handle other user functionality. A client passes the access token to the server, and the server uses this token to decide whether the client is authorized to access the resource or not.


On successful authentication on the Auth Page (IDX), LoginRadius’s default script sends an access token in the query string as a token parameter with the return_url that you specified in the action URL. 

Below is the access URL for Login Action:

```
https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>
```

Upon registration or login, the user is redirected to the specified return URL with a token appended. The following is an example: 

` <Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`


Check out our [Auth Page (IDX)](/concepts/idx-overview/) for more information about available actions and key benefits.
## Access Token Lifetime
Access tokens have a default expiration time in the LoginRadius Identity Platform, and you can change it as per the business requirements. For example, access tokens should quickly expire in banking applications for security reasons.


Check out our [Session Management](/security/session-management/) document for more details about the access token lifetime.
## Token Handling

Once your application receives an access token, store this token client-side/server-side and use it further for API calls or via our SDKs by passing this as a **Bearer** credentials in HTTP **Authorization header**.

### Web SDKs

Following are the examples of [Web SDKs](/sdk-libraries/overview/) utilizing multiple languages to identify this token and retrieve user data.

PHP
```PHP
<?php
include "config.php";
$actual_link = "http://" . $_SERVER[HTTP_HOST] . $_SERVER[REQUEST_URI];
$actual_link = preg_replace('/\?.*/', '', $actual_link);
if (isset($_REQUEST['token']) && !empty($_REQUEST['token'])) {
use \LoginRadiusSDK\CustomerRegistration\Authentication\AuthenticationAPI;
$authenticationAPI = new AuthenticationAPI(); 

$result = $authenticationAPI->getProfileByAccessToken($_REQUEST['token'],null);

echo '<pre>';
    var_dump($result);
    echo '</pre>';
    }

view:

    <!DOCTYPE html>
    <html>
    <body>
        <div>
            <a href="https://<LoginRadius Site Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Your Website Domain>.index.php">Login</a>
        </div>
    </body>
    </html>
```

Node.JS
```js
    router.get('/login/tonkenhandling', function (req, res) {

    var fields = null; //Optional

    lrv2.authenticationApi.getProfileByAccessToken(req.query.token, fields).then((response) => {
       console.log(response);
       }).catch((error) => {
       console.log(error);
       });
  });


view:

<!DOCTYPE html>
<html>
 <head>
   <title>Node JS</title>
 </head>
 <body>
   <h1>Node JS SDK</h1>
   <a href="https://internal-narendra.hub.loginradius.com/auth.aspx?action=login&return_url=http://localhost:3000/login/tonkenhandling">Login</a><p>To get the profile....</p>
 </body>
</html>
```

### Mobile SDKs

Following are the examples of utilizing Android and iOS [SDKs](/mobile-sdk-libraries/android-library/) to identify this token and retrieve user data.

Android

```js
// make sure LoginRadius instance exists
QueryParams params = new QueryParams();
params.setEmail("Your Email ID");
params.setPassword("Your Password");
AuthenticationAPI api = new AuthenticationAPI();
api.login(getApplicationContext(), params, new AsyncHandler<LoginData>() {
    @Override
    public void onSuccess(LoginData logindata) {
                Log.e("User Profile", logindata.getProfile());
    }
    @Override
    public void onFailure(Throwable error, String errorcode) {
            Log.e("error", error.getMessage());
    }
});
```

iOS
```js
  // make sure LoginRadius instance exists
let parameter:AnyObject = ["email":"email", "password":"password" ] as AnyObject

AuthenticationAPI.authInstance().login(withPayload:parameter as? [AnyHashable : Any], loginurl:nil, emailtemplate:nil, smstemplate:nil, g_recaptcha_response:nil,completionHandler: { (data, error) in

        if let err = error {
        print("Error")
    } else {
        print("login successful")
    }
})
```


> You can check out our GitHub repository for [developer authentication demos](https://github.com/LoginRadius/developer-authentication-demos) using IDX in multiple languages.
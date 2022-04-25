---
title: "Coldfusion SDK Library"
tags: ["Coldfusion", "SDK"]
description: "This is a document detailing the LoginRadius Coldfusion SDK Library."
path: "/references/sdk/coldfusion-sdk"
---

# Coldfusion SDK

> **Disclaimer:** This library is meant to help you with a quick implementation of the LoginRadius platform and also to serve as a reference point for the LoginRadius API. Keep in mind that it is an open source library, which means you are free to download and customize the library functions based on your specific application needs.

This document contains information and examples regarding the LoginRadius Coldfusion SDK. It provides guidance for working with social authentication, user profile data, and sending messages with a variety of social networks such as Facebook, Google, Twitter, Yahoo, LinkedIn, and more. You can get the SDK from [here](https://github.com/LoginRadius/coldfusion-sdk).

## SDK Installation and Configuration

Copy the lrsdk component files to your project directory.


## API Methods

### Social Login APIs
This API is used to manage a custom object for the user and relies on the User Entity object. If you are unsure of your Object ID, you can reach out to the support team for details on this. If you haven't already initialized the User Registration Custom Object API, do so now.

Initialize the social object:

```
<cfset socialObject = createObject("component","lrsdk.socialloginapi").init(
       lr_api_key = "APIKEY",
       lr_api_secret = "APISECRET"
      )>
```

List of APIs in this Section:

Access Token
Validate Access Token
Invalidate Access Token
User Profile
Trackable Status Posting
Post Message API
Get Trackable Status Stats
Trackable Status Fetching
Shorten URL
Get Active Session Details


#### Access Token
This API Is used to translate the Request Token returned during authentication into an Access Token.

Try the following:

 /**
  * @param access_token     
  * @return access token
  */
```
<cftry> 
  <cfset result = socialObject.loginradiusExchangeAccessToken( access_token )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

#### Validate Access Token

This API validates access token.

Try the following:

 /**
  * @param access_token     
  * @return access token
  */
```
<cftry> 
  <cfset result = socialObject.loginradiusTokenValidate( access_token )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

#### Invalidate Access Token

This API invalidates the access token.

Try the following:

 /**
  * @param access_token     
  * @return {"isPosted": true}
  */
```
<cftry> 
  <cfset result = socialObject.loginradiusTokenInvalidate( access_token )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

#### User Profile
Get user profile by the access token.

Try the following:

 /**
 * @param access_token
 * @Return object of userProfile.
 */
 
 ```
<cftry> 
  <cfset result = socialObject.loginradiusGetUserProfiledata( access_token )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

#### Trackable Status Posting
The Trackable Status API is used to update the status on the user's wall and return a Post ID value.

Try the following:

 /**
 * @param access_token
 * @param status
 * @param title
 * @param url
 * @param imageurl
 * @param caption
 * @param description
 * @Return object
 */

```
<cftry> 
  <cfset result = socialObject.loginradiusTrackableStatusPosting( access_token, status, title, url, imageurl, caption, description )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

#### Post Message API
The Message API is used to post messages to the user's contacts.

Try the following:

 /**
 * @param access_token
 * @param to
 * @param subject
 * @param message
 * @Return object
 */

<cftry> 
  <cfset result = socialObject.loginradiusSendMessagePost( access_token, to, subject, message )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>

#### Get Trackable Status Stats
The Trackable Status API is used to update the status on the user's wall and return a Post ID value.

Try the following:

 /**
 * @param access_token
 * @param status
 * @param title
 * @param url
 * @param imageurl
 * @param caption
 * @param description
 * @Return object
 */
```
<cftry> 
  <cfset result = socialObject.loginradiusGetTrackableStatusStats( access_token, status, title, url, imageurl, caption, description )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

#### Trackable Status Fetching
This API is used to retrieve a tracked post based on the passed in post ID value.

Try the following:

 /**
 * @param postid
 * @Return object
 */
 ```
<cftry> 
  <cfset result = socialObject.loginradiusTrackableStatusFetching( postid )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

#### Shorten URL
The Shorten URL API is used to convert your URLs to the LoginRadius short URL - ish.re

Try the following:

 /**
 * @param url
 * @Return object
 */
 ```
<cftry> 
  <cfset result = socialObject.loginradiusShortenUrl( url )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

#### Get Active Session Details
This API is used to get all active sessions by Access Token.

Try the following:

 /**
 * @param access_token
 * @Return object
 */
 ```
<cftry> 
  <cfset result = socialObject.loginradiusGetActiveSessionDetail( access_token )> 
  <cfcatch type = "LoginRadiusException"> 
    <cfset message ='#cfcatch.message#'> 
  </cfcatch> 
</cftry>
```

You can get a copy of the demo project from [Github](https://github.com/LoginRadius/coldfusion-sdk)
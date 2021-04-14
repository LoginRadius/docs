---
title: "Get started with Dot Net WebForms"
tags: ["WebForms", ".NET", "Dot Net", "GetStarted"]
description: "This is a tutorial with IDX and .NET WebForms implementation."
path: "/tutorial/dotnet-webforms"
---

# Get Started - ASP&#46;NET Web Forms

The purpose of this tutorial is to help you with implementing LoginRadius user registration, log in and log out functionalities in your ASP&#46;NET Web Forms application.

> This tutorial assumes that you have Visual Studio 2019 with &#46;NET Framework installed.


When you signed up for a LoginRadius account, an app was created for you. This app is linked to a ready to use web page, known as the [Auth Page (IDX)](/concepts/idx). When you make changes to your configurations in the LoginRadius Dashboard, your changes will automatically be reflected on your Auth Page (IDX). You can utilize this web page for your authentication requirements in your Web Forms application.

> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

## Choose Theme

In your LoginRadius Dashboard, navigate to the **Auth Page (IDX)** section located in the left navigation bar and click the **Theme Customization** section. There you can select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")

To preview your theme and content, click the **Go to your Login Page** link as highlighted on the above screen. 

> There are various features already configured on your Auth Page, such as Email and Password Login, User Registration, Forgot Password, and Remember Password.

## Get Credentials

Before using any of the APIs or methods that LoginRadius provides, you will need to retrieve your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)**, and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## Set Up Project 

Set up a Web Forms project as explained below:

- Open Visual Studio and select `New` &rarr; `Project` from the `File` menu on your top bar.

- Select `ASP.NET Web Application (.NET Framework)` and click `Next`.

- Give your project a name, select a &#46;NET Framework version to use for your project, and click `Create`. This tutorial is using &#46;NET Framework 4.7.2.

- Select the `Web Forms` template and click `Create`.

## Install SDK 

This tutorial uses JavaScript to make API calls to LoginRadius.

- Download the LoginRadius HTML5 SDK from **[Github](https://github.com/LoginRadius/HTML5-SDK)**. You will find the SDK script file `LoginRadiusV2SDK.x.x.x.js` or `LoginRadiusV2SDK.x.x.x.min.js` (minified version) under `html5-sdk/lib`.

- Save the SDK script in your project's directory. In this example, we've saved it in our project's `Scripts` folder like:

  ![alt_text](images/scripts.png "image_tooltip")

- Include this script on any web page where you'd like to make API calls to LoginRadius. You can do this by pasting the following script tag inside your web page's `<asp:Content></asp:Content>` tag:

  ```html
  <script
    src="/Scripts/LoginRadiusV2SDK.11.0.0.js"
    type="text/javascript"
  ></script>
  ```

## Configure Project

Initialize the SDK under your SDK script declaration. It should look something like this:

```html
<script
  src="/Scripts/LoginRadiusV2SDK.11.0.0.js"
  type="text/javascript"
></script>
<script>
  var sdkOptions = {
    apiKey: "{{YOUR API KEY}}",
  }

  LoginRadiusSDK.initSDK(sdkOptions)
</script>
```

Replace the following placeholder in the above configuration object:

- `{{YOUR API KEY}}` : **API Key** obtained in the [Get Credentials](#get-credentials) step.

## Configure Registration and Login URLs

> This tutorial uses Auth Page (IDX) for authentication, where Registration and Login functionality is already implemented.

Navigate your Register or Login links or buttons to the following URLs:

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**

- **LoginRadius App Name** is the name of your app as mentioned in the [Get Credentials](#get-credentials) step.
- **return_url** is where you want to redirect users upon successful registration or login. [Whitelist your domain](#whitelist-your-domain) if you are not using Local Domain for this tutorial.

> For your Web Forms application, this will likely be a static page that requires data from your logged in user. However, the return_url can be anything from a static page to a backend server endpoint.

## Retrieve User Data using Access Token

> Once the authentication is done using Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url. The return_url should be your application's web page where you would like to receive the access token.
> The following is an example of the access token in the query string with the Return URL:
>
> `<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`

Add the script to your web page specified in the `return_url` to get user profile data from LoginRadius:

```javascript
var url = new URL(window.location.href)
var accessToken = url.searchParams.get("token")

if (accessToken !== null) {
  LoginRadiusSDK.authenticationApi.getProfileByAccessToken(
    accessToken,
    null,
    function (error, data) {
      if (error) {
        console.log(error)
        return
      }

      console.log(data)
    }
  )
}
```

Along with your SDK declaration and initialization, your web page might look something like this:

```html
<script
  src="/Scripts/LoginRadiusV2SDK.11.0.0.js"
  type="text/javascript"
></script>
<script>
  var sdkOptions = {
    apiKey: "{{YOUR API KEY}}",
  }

  LoginRadiusSDK.initSDK(sdkOptions)

  var url = new URL(window.location.href)
  var accessToken = url.searchParams.get("token")

  if (accessToken !== null) {
    LoginRadiusSDK.authenticationApi.getProfileByAccessToken(
      accessToken,
      null,
      function (error, data) {
        if (error) {
          console.log(error)
          return
        }

        console.log(data)
      }
    )
  }
</script>
```

From here, you can use JQuery or Vanilla JavaScript to populate your web page with the retrieved user profile.

## Run and See Result

- Add the above mentioned script to the web page that you have specified as a return_url after login.

- Start your Web Forms Application.

- Open your Auth Page (IDX) registration URL `https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`. It should display something similar to:

  ![alt_text](../../assets/blog-common/login-register.png "image_tooltip")

- Register a user here and then log in. Upon successful login, it will redirect you to the page you have specified in the return url. Using the script included above, the user profile corresponding to the provided log in details will be printed to your browser console. 

  Here is an example user profile object that is returned from the `getProfileByAccessToken` SDK call:

  ```
  {
    "Identities": null,
    "Password": "**********",
    "LastPasswordChangeDate": "2021-02-11T02:36:01.8420000Z",
    "PasswordExpirationDate": null,
    "LastPasswordChangeToken": null,
    "EmailVerified": true,
    "IsActive": true,
    "IsDeleted": false,
    "Uid": "0df01f54954d4e9f9b3b18c30fa5b0ea",
    "CustomFields": null,
    "IsEmailSubscribed": false,
    "UserName": null,
    "NoOfLogins": 6,
    "PhoneId": null,
    "PhoneIdVerified": false,
    "Roles": null,
    "ExternalUserLoginId": null,
    "RegistrationProvider": "Email",
    "IsLoginLocked": false,
    "LoginLockedType": "None",
    "LastLoginLocation": "Vancouver, Canada",
    "RegistrationSource": "https://***.hub.loginradius.com/",
    "IsCustomUid": false,
    "UnverifiedEmail": null,
    "IsSecurePassword": null,
    "PrivacyPolicy": null,
    "ExternalIds": null,
    "IsRequiredFieldsFilledOnce": true,
    "ConsentProfile": null,
    "PIN": null,
    "RegistrationData": null,
    "ID": "5446de8561ec47809325f9b430e2750e",
    "Provider": "Email",
    "Prefix": null,
    "FirstName": null,
    "MiddleName": null,
    "LastName": null,
    "Suffix": null,
    "FullName": null,
    "NickName": null,
    "ProfileName": null,
    "BirthDate": null,
    "Gender": null,
    "Website": null,
    "Email": [
      {
        "Type": "Primary",
        "Value": "***@***.com"
      }
    ],
    "Country": null,
    "ThumbnailImageUrl": null,
    "ImageUrl": null,
    "Favicon": null,
    "ProfileUrl": null,
    "HomeTown": null,
    "State": null,
    "City": null,
    "Industry": null,
    "About": null,
    "TimeZone": null,
    "LocalLanguage": null,
    "CoverPhoto": null,
    "TagLine": null,
    "Language": null,
    "Verified": null,
    "UpdatedTime": null,
    "Positions": null,
    "Educations": null,
    "PhoneNumbers": null,
    "IMAccounts": null,
    "Addresses": null,
    "MainAddress": null,
    "Created": null,
    "CreatedDate": "2020-10-15T22:09:55.8440000Z",
    "ModifiedDate": "2020-10-15T22:09:55.8630000Z",
    "ProfileModifiedDate": null,
    "LocalCity": "Vancouver",
    "ProfileCity": null,
    "LocalCountry": "Canada",
    "ProfileCountry": null,
    "FirstLogin": false,
    "IsProtected": false,
    "RelationshipStatus": null,
    "Quota": null,
    "Quote": null,
    "InterestedIn": null,
    "Interests": null,
    "Religion": null,
    "Political": null,
    "Sports": null,
    "InspirationalPeople": null,
    "HttpsImageUrl": null,
    "FollowersCount": 0,
    "FriendsCount": 0,
    "IsGeoEnabled": null,
    "TotalStatusesCount": 0,
    "Associations": null,
    "NumRecommenders": 0,
    "Honors": null,
    "Awards": null,
    "Skills": null,
    "CurrentStatus": null,
    "Certifications": null,
    "Courses": null,
    "Volunteer": null,
    "RecommendationsReceived": null,
    "Languages": null,
    "Projects": null,
    "Games": null,
    "Family": null,
    "TeleVisionShow": null,
    "MutualFriends": null,
    "Movies": null,
    "Books": null,
    "AgeRange": null,
    "PublicRepository": null,
    "Hireable": false,
    "RepositoryUrl": null,
    "Age": null,
    "Patents": null,
    "FavoriteThings": null,
    "ProfessionalHeadline": null,
    "ProviderAccessCredential": null,
    "RelatedProfileViews": null,
    "KloutScore": null,
    "LRUserID": null,
    "PlacesLived": null,
    "Publications": null,
    "JobBookmarks": null,
    "Suggestions": null,
    "Badges": null,
    "MemberUrlResources": null,
    "TotalPrivateRepository": 0,
    "Currency": null,
    "StarredUrl": null,
    "GistsUrl": null,
    "PublicGists": 0,
    "PrivateGists": 0,
    "Subscription": null,
    "Company": null,
    "GravatarImageUrl": null,
    "ProfileImageUrls": null,
    "WebProfiles": null,
    "PinsCount": 0,
    "BoardsCount": 0,
    "LikesCount": 0,
    "SignupDate": "2020-10-15T22:09:55.8440000Z",
    "LastLoginDate": "2021-02-16T19:53:28.3120000Z",
    "PreviousUids": null
  }
  ```

> In addition to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to [this document](/concepts/idx) for more information.

## Whitelist Your Domain

For security reasons, LoginRadius will only process API calls coming from domains included in your app's whitelist. Local domains (http://localhost and http://127.0.0.1) are already whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard navigate to **[Configuration > Whitelist Your Domain](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

## Recommended Next Steps

[How to manage email templates for verification and forgot password](/guide/customize-email-and-sms-settings)

[How to personalize interfaces and branding of login pages](/guide/customize-auth-page)

[How to configure SMTP settings for sending emails to consumers](/guide/setup-your-smtp-provider)

[How to implement Social Login options like Facebook, Google](/guide/social-login)

[How to implement Phone Login](/guide/phone-login)

[How to implement Passwordless Login](/guide/passwordless-login)

## Dotnet SDK Reference

[Dotnet SDK](/references/sdk/dotnet-sdk)

## API Reference

[API Reference](/#api)

[Go Back to Home Page](/)

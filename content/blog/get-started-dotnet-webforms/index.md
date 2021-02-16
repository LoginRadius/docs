# Get Started - ASP&#46;NET Web Forms

The purpose of this tutorial is to help you with implementing LoginRadius user registration, log in and log out functionalities in your ASP&#46;NET Web Forms application.

---------------------------------------------------

When you signed up for a LoginRadius account, an app was created for you. This app is linked to a ready to use web page, known as the [Auth Page (IDX)](https://www.loginradius.com/docs/developer/concepts/idx-overview/). When you make changes to your configurations in the LoginRadius Dashboard, your changes will automatically be reflected on your Auth Page (IDX). You can utilize this web page for your authentication requirements in your Web Forms application.

> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

## Choose Theme

In your LoginRadius Dashboard, navigate to the **Auth Page (IDX)** section located in the left navigation bar and click the **Theme Customization** section. There you can select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")

To preview your theme and content, click the **Go to your Login Page** link as highlighted on the above screen. There are various features already implemented on your Auth Page, such as Email and Password Login, User Registration, Forgot Password, and Remember Password.

## Get Credentials

Before using any of the APIs or methods that LoginRadius provides, you will need to retrieve your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)**, and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## SDK Installation

In this tutorial, we will use JavaScript to make API calls to LoginRadius. 

- Download the LoginRadius HTML5 SDK from **[Github](https://github.com/LoginRadius/HTML5-SDK)**.
- Include the JavaScript file on your web page. In this example, we've saved the SDK script file to project's `Scripts` folder like such:

![alt_text](images/scripts.png "image_tooltip")

- Include the script in the web page with the following:

```html
<script src="/Scripts/LoginRadiusV2SDK.11.0.0.js" type="text/javascript"></script>
```

## Configuration

Initialize the SDK under your SDK script declaration:

```html
<script>
  var sdkOptions = {
      "apiKey": "{{YOUR API KEY}}"
  };

  LoginRadiusSDK.initSDK(sdkOptions);
</script>
```

Replace the following placeholder in the above configuration object:
- `{{YOUR API KEY}}` : **API Key** obtained in the [Get Credentials](#get-credentials) step.

## Configure Registration and Login URLs

> In this tutorial, we are using Auth Page(IDX) for authentication, where Registration and Login functionality  is already implemented. 

Navigate your Register or Login links or buttons to the following URLs:

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**
- **LoginRadius App Name** is the name of your app as mentioned in Get Credential step.
- **return_url** is where you want to redirect users upon successful registration or login. [Whitelist your domain](#domain-whitelisting) if you are not using Local Domain for this tutorial. 

> return_url can be your website, frontend app, or backend server url where you are handling the access token. 


## Retrieve User Data using Access Token

> Once the authentication is done using Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url. The return_url should be your application's web page where you would like to receive the access token.
>The following is an example of the access token in the query string with the Return URL:
>
>`<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`
>

Add the following script tag to your web page to get the user profile:

```html
<script>
  var url = new URL(window.location.href);
  var accessToken = url.searchParams.get("token");

  if (accessToken !== null) {
    LoginRadiusSDK.authenticationApi.getProfileByAccessToken(accessToken, null, function (error, data) {
        if (error) {
            console.log(error);
            return;
        }

        console.log(data);
    });
  }
</script>
```

From here, you can use JQuery or vanilla JavaScript to populate your webpage with the retrieved user profile.

## Run and See Result

- Add the mentioned above script to the web page that you have specified as a return_url after login.

- Start your Web Forms Application.

- Open your Auth Page (IDX) registration URL `https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`. It will display the following screen:

![alt_text](../../assets/blog-common/login-register.png "image_tooltip")

- Register a user here and then log in. Upon successful login, it will redirect you to the page you have specified in the return url. Using the script included above, the user profile corresponding to the log in details provided will be printed to your browser console. Here is an example user profile object that is returned from the `getProfileByAccessToken` SDK call:

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

> In addition to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to [this document](https://www.loginradius.com/docs/developer/concepts/idx-overview/) for more information.

## Domain Whitelisting

For security reasons, LoginRadius will only process API calls coming from domains included in your app's whitelist. Local domains (http://localhost and http://127.0.0.1) are already whitelisted by default. 

To whitelist your domain, in your LoginRadius Dashboard navigate to **[Configuration > Domain Whitelisting](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

# Recommended Next Steps

How to manage email templates for verification and forgot password

How to personalize interfaces and branding of login pages

How to configure SMTP settings for sending emails to consumers

How to implement Social Login options like Facebook, Google

How to implement Phone Login

How to implement Passwordless Login

# HTML SDK Reference

< Link to HTML SDK doc >

# API Reference

< Link to API docs >

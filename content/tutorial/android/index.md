---
title: "Get started with Android"
tags: ["Android", "GetStarted"]
description: "This is a tutorial with IDX and Android."
path: "/tutorial/android"
---

# Get Started - Android

The tutorial lets you implement LoginRadius user registration, login, profile, and log out in your Android mobile application.

> You must have the following:
>
> - Android SDK Version >= 15
>
> - Build Tools Version = 28.0.0 (changeable in build.gradle)
>
> - Android Studio >= 3.5.2
>
>  New to Android? Check out <a href="https://developer.android.com/training/basics/firstapp/creating-project" target="_blank">this reference</a>.


---

> <a href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register" target="_blank">Create an account</a> to get started if you don't have one yet!

## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name** (when you signed up for the LoginRadius account, it created an app for you), **API Key**, and **SOTT**.

- In your LoginRadius Dashboard, navigate to **<a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > API Credentials</a>** and click the **API Key And Secret** subsection to retrieve your App Name and API Key:

  ![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

- Now click the the **Secure Mobile OTP Token(SOTT)** subsection, the below screen will appear:

  ![alt_text](../../assets/blog-common/sott.png "image_tooltip")

- Generate SOTT and make sure to copy the SOTT value (for security reasons, it's only visible once in the LoginRadius Dashboard).

## Install SDK 

Add the following dependency in your app's `build.gradle`:

```
implementation 'com.loginradius.android:androidsdk:4.8.0'
```

## Configuration

- Add the following code to the `onCreate()` method in `MainActivity.java`:

  ```java

  LoginRadiusSDK.Initialize init = new LoginRadiusSDK.Initialize();
  init.setApiKey("<apikey>");
  init.setSiteName("<sitename>");
  ```

- Replace the following placeholders in the above :

  - apiKey: **API Key** obtained in the [Get Credentials](#get-credentials) step.
  - siteName: **App Name** obtained in the [Get Credentials](#get-credentials) step.

- Add the following permissions in your app's `manifests/AndroidManifest.xml` :

  ```xml
  <uses-permission android:name="android.permission.INTERNET" />
  <uses-permission android:name="android.permission.ACCESS_NETWORK_STATE" />
  <uses-permission android:name="android.permission.ACCESS_WIFI_STATE" />
  <uses-permission android:name="android.permission.GET_ACCOUNTS" />
  <uses-permission android:name="android.permission.MANAGE_ACCOUNTS" />
  <uses-permission android:name="android.permission.USE_CREDENTIALS" />

  ```
- Add the following dependency in your app's `build.gradle`:

```
implementation 'com.squareup.retrofit2:retrofit:2.4.0'
implementation 'com.google.code.gson:gson:2.8.5'
implementation 'io.reactivex.rxjava2:rxandroid:2.1.0'
implementation 'com.squareup.retrofit2:adapter-rxjava2:2.4.0'

```

## Implement Registration

> Add a button to your application that calls the below function for registration.

Add the following code to implement registration:

```java
          private void doRegistration() {
             QueryParams params = new QueryParams();
             params.setEmailTemplate("<email-template>");        //put your emailTemplate(optional)
           String sott = "put_your_sott_here"; //Required
             final RegistrationData data = new RegistrationData();
             data.setFirstName("Lee");
             data.setLastName("com");
             data.setPassword("123456");
             Email emailObj = new Email();
             emailObj.setType("Primary");
             emailObj.setValue("xyz@mailinator.com");
             data.setEmail(new ArrayList<Email>(Arrays.asList(emailObj)));

             AuthenticationAPI api = new AuthenticationAPI();
             api.register(params,sott,data,new AsyncHandler<RegisterResponse>() {
                 @Override
                 public void onSuccess(RegisterResponse registerResponse) {
                     Log.e("data",registerResponse.getIsPosted().toString());
                 }
                 @Override
                 public void onFailure(Throwable error, String errorcode) {
                     Toast.makeText(MainActivity.this, error.getMessage(), Toast.LENGTH_LONG).show();

                 }
             });
          }

```
- sott: **SOTT** obtained in the [Get Credentials](#get-credentials) step.


## Implement Login

> Add a button to your application that calls the below function for login.

Add the following code to implement login:

```java
private void doLogin() {
QueryParams params = new QueryParams();
params.setEmail("xyz@mailinator.com");
params.setPassword("123456");
params.setEmailTemplate("<email-template>"); //put your emailTemplate(optional)
AuthenticationAPI api = new AuthenticationAPI();
api.login(LoginActivity.this, params, new AsyncHandler < LoginData > () {
    @Override
    public void onSuccess(LoginData logindata) {
        List < String > result = new ArrayList < String > ();
        try {
            for (Field field: logindata.getClass().getDeclaredFields()) {
                field.setAccessible(true);
                Object value = field.get(logindata);
                Log.e("access_token", logindata.getAccessToken());
                Log.e("provider", logindata.getProfile().getProvider().toLowerCase());
                Log.e("FirstName", logindata.getProfile().getFirstName().toString());
            }
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
    @Override
    public void onFailure(Throwable error, String errorcode) {
        Toast.makeText(LoginActivity.this, error.getMessage(), Toast.LENGTH_LONG).show();
    }
});
}

```

## Retrieve User Data using Access Token

> You will get an `access token` in response to Registration and Login functions.

Once the authentication is done, you can use the `access token` to retrieve profile data and handle other user functionality. Add the following code to get the user profile:

```java
public void readAllUserProfile(String access_token) {
 QueryParams params = new QueryParams();
 params.setAccess_token(access_token);
 AuthenticationAPI api = new AuthenticationAPI();
 api.readAllUserProfile(params, new AsyncHandler < LoginRadiusUltimateUserProfile > () {
  @Override
  public void onSuccess(LoginRadiusUltimateUserProfile userProfile) {
   Toast.makeText(context, "First Name: " + userProfile.FirstName + " Last Name:" + userProfile.LastName, Toast.LENGTH_SHORT).show();
  }

  @Override
  public void onFailure(Throwable error, String errorcode) {
   Toast.makeText(context, error.getMessage(), Toast.LENGTH_SHORT).show();
  }
 });
}

```

> Call the `readAllUserProfile` function after login and verify that the user's profile information has been returned in the `onSuccess` callback.

Here is an example user profile object that is returned from the `readAllUserProfile` SDK call:

  ```json
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


## Explore Android Demo

Check out our Android demo to know how you can implement various LoginRadius features using SDK and its functions.

**<a href="https://github.com/LoginRadius/android-sdk" target="_blank">GitHub Demo Link</a>** | **<a href="https://github.com/LoginRadius/android-sdk/archive/master.zip" target="_blank">Download Demo</a>**

## Recommended Next Steps

* <a href="https://www.loginradius.com/docs/developer/guide/customize-email-and-sms-settings" target="_blank">How to manage email templates for verification and forgot password</a>

* <a href="https://www.loginradius.com/docs/developer/guide/customize-auth-page" target="_blank">How to personalize interfaces and branding of login pages</a>

* <a href="https://www.loginradius.com/docs/developer/guide/setup-your-smtp-provider" target="_blank">How to configure SMTP settings for sending emails to consumers</a>

* <a href="https://www.loginradius.com/docs/developer/guide/social-login" target="_blank">How to implement Social Login options like Facebook, Google</a>

* <a href="https://www.loginradius.com/docs/developer/guide/phone-login" target="_blank">How to implement Phone Login</a>

* <a href="https://www.loginradius.com/docs/developer/guide/passwordless-login" target="_blank">How to implement Passwordless Login</a>

## Android SDK Reference

<a href="https://www.loginradius.com/docs/developer/references/sdk/android-sdk" target="_blank">Android SDK</a>

## API Reference

[APIs](/#api)

[Go Back to Home Page](/)


---
title: "Integrate Inbound SSO-OAuth2 "
tags: ["Integrate","OAuth2","app","IDP","SP","SSO"]
description: "This is a guide for integration Inbound SSO-OAuth2 app."
path: "/guide/inbound-sso-oauth2"
---


# Inbound SSO-OAuth2

This document will help you integrate a custom identity provider to your Loginradius Identity platform using Inbound OAuth2-SSO which will allow your consumers to login to your application with their identity provider using SSO.

> For the purposes of demonstration, we will be using Azure AD as custom identity provider for the guide. Any other identity provider may also be used, given that it support OAuth2


## Identity Provider Configuration (Azure AD)

1. Login in to your identity provider portal. In this case, [Azure Portal](https://portal.azure.com/signin/index/).
   
2. Click on **App Services** on your Azure AD dashboard and then select Manage Azure Active Directory.

![alt_text](/images/dashboard_azure_ad.png "image_tooltip")

3. Select **App registrations** service from left-hand navigations then click **New registration**.

![alt_text](/images/Azure-ad-sso-registration-of-application.png "image_tooltip")

4. On the Create page, enter the following registration information:

| Name        |             |
| ----------- | ----------- |
| Application type     | Select "Web app / API" for client applications and resource/API applications that are installed on a secure server. This setting is used for OAuth confidential web clients and public user-agent-based clients. The same application can also expose both a client and resource/API.     |
| Sign-On URL  | For "Web app / API" applications, provide the base URL of your app. eg, https://<domain-name> might be the URL for a web app running on your local machine. Users would use this URL to sign in to a web client application.       |

5. Click **Register** once you are done, the application is registered and **Application ID** as well as **Directory ID** gets displayed on screen. Save this information as it'll be required when we setup OAuth2 on Loginradius side.

![alt_text](/images/application-id.png "image_tooltip")


6. For the **Secret Key**, select **Certificates and Secrets** from navigation pane on left side of screens. Select **New Client Secret** fill description and expiration time, click on **Add** button once done.

![alt_text](/images/secret-key.png "image_tooltip")

The configuration of **Azure AD** as **OAuth2 provider** for achieving. 

## Loginradius as OAuth2 Client

To support Inbound SSO-OAuth2, you will need to handle the following:

1. Log into your [LoginRadius Dashboard](https://dashboard.loginradius.com) account, select your app and then navigate to the Integration section.
The following screen will appear:


![alt_text](/images/configure.png "image_tooltip")

2. Click the **Add** for adding a new Inbound OAuth2 app. The configuration will appear.

3. Search for **Inbound SSO OAuth2** in the search bar, locate **Inbound SSO OAuth2** and click **Let's Configure**, following screen appears: 

![alt_text](/images/inbound-sso-oauth.png "image_tooltip")

4. Go to Configure OAuth tab and enter Provider Name, Application ID, Client Secret, Developer ID and Policy from above steps in respective fields.

   - Authorization Endpoint: https://login.microsoftonline.com/<tenant-id>/oauth2/authorize 
   - Access Token Endpoint: https://login.microsoftonline.com/<tenant-id>/oauth2/token
   - Scope : openid
   - Profile endpoint: https://login.windows.net/common/openid/userinfo

> These values may be different as per your own OAuth2 provider.

Fill the other values and map fields as required.

5.. Click on **Save** button.

You have now successfully configured IDP using Inbound SSO OAuth2. Open the Auth Page(IDX) of your app, and the Login with IDP option will appear.





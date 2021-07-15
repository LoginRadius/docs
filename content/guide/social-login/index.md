---
title: "how to implement Social login"
tags: ["social", "login","implement"]
description: "step by step guide to implement social login."
path: "/guide/social-login"
---

#Implement Social Login

   
You can implement Social Login for a quick and convenient approach for consumer registration and login. This guide explains how to add and configure the desired Social Login providers on your application using LoginRadius Dashboard.

Watch this video for step by step information, or refer to the section below for the text-based guide.


<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/gd5Ig1S4P_U" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

---

## Configuration

### Step 1: Choose Login Method 

1. Login to your LoginRadius Dashboard account, from the left navigation panel, click **Configuration** and then navigate to the **Login Methods** section.

   ![alt_text](../../assets/blog-common/configuration.png "image_tooltip")


2. Click the down arrow, and the **Login Methods** section will expand.

3. Click the **Add Method** drop-down and select your desired social provider from the available providers’ list as displayed in the following screen:

   ![alt_text](./images/selectproviders.png "image_tooltip")


   It will open the steps section to set up the respective social provider app. 

   > The list of [supported social providers](#supported-social-providers) varies based on your plan. 

### Step 2: Configure Social Login 

1. Follow the step by step guide displayed on the LoginRadius Dashboard screen for configuration. For example, the following screen displays the configuration steps for configuring Google as social login option:

   ![alt_text](./images/configsteps.png "image_tooltip")

2. Perform each step and click the **Next** button to go to the next step.
The steps for configuring each social provider will be different and displayed after selecting the respective social provider.


3. Upon completing the selected Social ID Provider’s configuration steps, you will get the credentials, you will get the credentails. Save these credentials and then click the **Take Me To Setup** from the guide’s right corner.

   ![alt_text](./images/takemetosetup.png "image_tooltip")


4. Enter the obtained credentials in the **Configure App** section and click the **Save** button.

   ![alt_text](./images/configuresave.png "image_tooltip")

### Step 3: Whitelist Domain

Whitelist your application domain to allow the LoginRadius API access.

In your LoginRadius Dashboard, navigate to **<a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > Whitelist Your Domain</a>** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

> Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.


### Step 4: Check Auth Page (IDX)

Open your **Auth Page (IDX)** (https://</your-app-name/>.hub.loginradius.com/auth.aspx ) and it will display the social icon for the configured social provider:

![alt_text](./images/idxsocial.png "image_tooltip")

> The Social Login is now configured and functioning on your Auth Page (IDX). If you are not using Auth Page (IDX) for authentication, use LoginRadius SDK or APIs to utilize the configured Social Login in your application.

## Supported Social Providers

The following are the social providers that LoginRadius supports for the Free, Developer, and Developer Pro plans.


|PLAN |	FACEBOOK |	GOOGLE |	TWITTER |	LINKEDIN |	GITHUB  |
|:---|:---|:---|:---|:---|:---|:---|
|Free |	Yes |	Yes |	Yes |	No | No |
|Developer	| Yes	| Yes	| Yes	| Yes	| Yes |
|Developer Pro	| Supports| 20+ | Social| ID | Providers| 


## References

* <a href="https://www.loginradius.com/docs/developer/guide/custom-registration" target="_blank">Customize Registration Form Fields</a>


[Go Back to Home Page](/)

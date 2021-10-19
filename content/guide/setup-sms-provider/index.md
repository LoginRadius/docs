---
title: "Setup SMS Provider"
tags: ["SMS", "Provider","Settings","Setup"]
description: "This is a guide for configuring SMS provider settings."
path: "/guide/setup-sms-provider"
---

<span class="devloper-premium plan-tag">Developer Pro</span>

# Setup SMS Provider

Setting up an SMS provider allows you to send and receive text messages to and from an SMS capable device over the network. LoginRadius Identity Platform establishes SMS communication by sending the SMS from your SMS provider to your consumers. To send out SMS from your SMS provider, you should follow the below steps.


## Step 1: Access SMS Provider

1. Log in to your <a href="https://dashboard.loginradius.com/dashboard" target="_blank">LoginRadius Dashboard</a> account.
2. Select your app and navigate to **Integration** from the left navigation panel. The following screen will appear:

   ![alt_text](../../assets/blog-common/configured-integration.png "image_tooltip")
   
3. Click the **Add** button, the available integrations screen will appear.
4. Either search for **SMS** in the search bar or go to the **Select Category** dropdown and select **Communication** category. Locate **SMS Provider**. 

   ![alt_text](images/sms-provider-integration.png "image_tooltip")

   > **Note**: SMS Provider option will appear in the **Integration** section only when **Phone Login** feature is enabled for your app.

5. Click the **Let's Configure** option, the following screen will appear:

   ![alt_text](images/sms-provider-configuration.png "image_tooltip")

## Step 2: Configure SMS Provider Settings

You can select the SMS Provider from the drop-down list. The supported providers are:

* Twilio
* Message Bird
* Text Local

The following explains how to configure **Twilio** as SMS provider: 

1. **SMS Provider**: Select Twilio SMS Provider.
2. **Twilio Account SID**: Enter the Twilio Account SID. Check <a href="https://support.twilio.com/hc/en-us/articles/223136607-What-is-an-Application-SID-" target="_blank">Twilio help center</a> for Account SID.
3. **Twilio Auth Token**: Enter the Twilio Auth Token.
4. **Twilio Number**: Enter the Twilio registered number.

   > **Note**:To obtain the **Twilio Account SID**, **Auth Token** and **Number**, sign up for <a href="https://www.twilio.com/try-twilio" target="_blank">Twilio</a> account.
5. Save the settings by clicking the **Save** button.

The following explains how to configure **Message Bird** or **Text Local** as SMS provider:
1. **SMS Provider**: Select **Message Bird** or **Text Local** SMS Provider. The following fields will appear on the screen:

   ![alt_text](images/sms-provider-configuration1.png "image_tooltip")

2. **Provider Number**: Enter the provider number for the selected provider.
3. **Access Key**: Enter the access key for the selected provider.
4.  Save the settings by clicking the **Save** button.


[Go Back to Home Page](/)

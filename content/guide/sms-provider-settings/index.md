---
title: "SMS Provider Settings"
tags: ["SMS", "Provider","Settings"]
description: "This is a guide for configuring SMS provider settings."
---

# Setup SMS Provider

Setting up an SMS provider allows you to send and receive text messages to and from an SMS capable device over the network. LoginRadius Identity Platform establishes SMS communication by sending the SMS from your SMS provider to your consumers. To send out SMS from your SMS provider, you should follow the below steps.


## Step 1: Access SMS Provider Settings

1. Login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account.
2. From the left navigation panel, click **Configuration** and then navigate to the **Email/SMS Provider Settings** section. 
3. Click the down arrow and select the **SMS Provider Settings** section as highlighted in the below screen.

   ![alt_text](images/sms-provider.png "image_tooltip")


## Step 2: Configure SMS Provider Settings

Provide the following default supported Twilio SMS provider details:

1.  **SMS Provider**: Select Twilio SMS Provider
2.  **Twilio Account SID**: Enter the Twilio Account SID. Check [Twilio help center](https://support.twilio.com/hc/en-us/articles/223136607-What-is-an-Application-SID-) for Account SID.
3.  **Twilio Auth Token**: Enter the Twilio Auth Token.
4.  **Twilio Number**: Enter the Twilio registered number.

> To obtain the **Twilio Account SID**, **Auth Token** and **Number**, sign up for [Twilio](https://www.twilio.com/try-twilio) account.

Save the settings by clicking the **Save** button.

---
title: "Setup SMS Provider"
tags: ["SMS", "Provider","Settings","Setup"]
description: "This is a guide for configuring SMS provider settings."
path: "/guide/setup-sms-provider"
---

<span class="devloper-premium plan-tag">Paid</span>

# Setup SMS Provider

Setting up an SMS provider allows you to send and receive text messages to and from an SMS capable device over the network. LoginRadius Identity Platform establishes SMS communication by sending the SMS from your SMS provider to your consumers. To send out SMS from your SMS provider, you should follow the below steps.


## Step 1: Access SMS Provider Settings

1. Log in to your <a href="https://dashboard.loginradius.com/dashboard" target="_blank">LoginRadius Dashboard</a> account.
2. Select your app, then from the left navigation panel, click **Configuration** and then navigate to the **Email/SMS Provider Settings** section. 
3. Click the down arrow and select the **SMS Provider Settings** section as highlighted in the below screen.

   ![alt_text](images/sms-provider.png "image_tooltip")


## Step 2: Configure SMS Provider Settings

Provide the following default supported Twilio SMS provider details:

1.  **SMS Provider**: Select Twilio SMS Provider
2.  **Twilio Account SID**: Enter the Twilio Account SID. Check <a href="https://support.twilio.com/hc/en-us/articles/223136607-What-is-an-Application-SID-" target="_blank">Twilio help center</a> for Account SID.
3.  **Twilio Auth Token**: Enter the Twilio Auth Token.
4.  **Twilio Number**: Enter the Twilio registered number.

> To obtain the **Twilio Account SID**, **Auth Token** and **Number**, sign up for <a href="https://www.twilio.com/try-twilio" target="_blank">Twilio</a> account.

Save the settings by clicking the **Save** button.




[Go Back to Home Page](/)

---
title: "SMTP Provider Settings"
tags: ["SMTP", "provider","settings"]
description: "This is a guide for configuring SMTP Provider Settings."
---

# Setup SMTP Provider

Setting up the SMTP server in LoginRadius allows the system to send out all email correspondences directly through your SMTP provider. It enables you to get deliverability stats and analytics and also optimize your email messaging. 

Setup your SMTP provider by following the below steps.

## Step 1: Access SMTP Provider Settings
1. Login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account. 
2. From the left navigation panel, click **Configuration** and then navigate to the **Email/SMS Provider Settings** section. 
3. Click the down arrow, the **SMTP Provider Settings** screen will appear.

   ![alt_text](images/smtp.png "image_tooltip")

## Step 2: Configure SMTP Provider Settings

Enter or select the following SMTP details:

1. **From Name:** Enter the name of the sender.
2. **SMTP Providers:** Select a pre-configured provider or other for a custom provider.
3. **From Email Address:** Enter the email of the sender.
4. **SMTP Host:** If you have selected the SMTP provider from the default list (rather than Others), enter the SMTP host details.
5. **SMTP User Name:** Enter the SMTP username.
6. **SMTP Port:** If you have selected the SMTP provider from the default list (rather than Others), enter the SMTP port details.
7. **SMTP Password:** Enter the password for the SMTP username.
8. **Enable SSL:** Select this option to make email communication more secure.

> **Note**: The following are the default SMTP providers list:
> 
> * Amazon SES (US East)
> * Amazon SES (US West)
> * Amazon SES (EU)
> * Gmail
> * Mandrill
> * Rackspace-mailgun
> * SendGrid
> * Yahoo

## Step 3: Verify and Save SMTP Provider Settings

1. Click the **Verify** button, the following pop-up will appear:

   ![alt_text](images/verify-smtp.png "image_tooltip")

2. Enter the email id in the **To Email** textbox and click the **Send** button. If the email is sent successfully, a success message will be displayed on the screen.


3. Save the configured SMTP settings by clicking the **Save** button.


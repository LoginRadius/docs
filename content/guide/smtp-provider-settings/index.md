---
title: "SMTP Provider Settings"
tags: ["SMTP", "provider","settings"]
description: "This is a guide for configuring SMTP Provider Settings."
---

#SMTP Provider Settings

Setting up the SMTP server in LoginRadius allows the system to send out all email correspondences directly through your SMTP provider. It enables you to get deliverability stats and analytics and also optimize your email messaging. 


##Configuration

Setup your own SMTP provider by following the below steps.

###Step 1:Navigation
1. Login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account. 
2. From the left navigation panel, click **Configuration** and then navigate to the **Email/SMS Provider Settings** section. 
3. Click the down arrow or anywhere within the section. The **SMTP Provider Settings** screen will appear.

![alt_text](images/smtp.png "image_tooltip")

###Step 2:Configure the Details
Enter or select the following SMTP details:

1.   **From Name:** Enter the name of the sender.
2.   **SMTP Providers:** Select a pre-configured provider or other for a custom provider.
3.  **From Email Address:** Enter the email of the sender.
4.   **SMTP Host:** If you have selected the SMTP provider from the default list (rather than Others), enter the SMTP host details.
5.   **SMTP User Name:** Enter the SMTP username.
6.   **SMTP Port:** If you have selected the SMTP provider from the default list (rather than Others), enter the SMTP port details.
7.   **SMTP Password:** Enter the password for the SMTP username.
8.   **Enable SSL:** Select this option to make email communication more secure.

###Step 3:Verify
Click the **Verify** button, the following pop-up will appear:

![alt_text](images/verify-smtp.png "image_tooltip")

Enter the email id in the **To Email** textbox and click the **Send** button. If the email is sent successfully, a success message will be displayed on the screen.

###Step 4:Save SMTP Provider Settings
Save the configured SMTP settings by clicking the **Save** button.

> Note: The following are the default SMTP providers list:

1.   Amazon SES (US East)
2.   Amazon SES (US West)
3.   Amazon SES (EU)
4.   Gmail
5.   Mandrill
6.   Rackspace-mailgun
7.   SendGrid
8.   Yahoo
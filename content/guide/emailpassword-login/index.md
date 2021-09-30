---
title: "Customize Email for Email/Password Login"
tags: ["Login"]
description: "This is a guide for managing the email content for the Email and Password Login method in LoginRadius."
path: "/guide/emailpassword-login"
---

# Customize Email for Email/Password Login

The LoginRadius Identity Platform provides Email and Password as the default registration and login method. This guide explains how to configure the content of emails that LoginRadius sends to your consumers using the LoginRadius Dashboard.

## Configuration

### Step 1: Choose Login Method

1. Log in to your <a href="https://dashboard.loginradius.com/dashboard" target="_blank">LoginRadius Dashboard</a> account. Select your app, then from the left navigation panel, click **Configuration** and then navigate to the **Login Methods** section.

2. Click the down caret, and the **Login Methods** screen will appear:

![alt_text](../../assets/blog-common/configuration.png "image_tooltip")

In the above screen, you will see that the Email/Password method is enabled by default for your application.

### Step 2: Configure Email Templates

1. Click the **Edit** icon given next to the Email/Password provider, as highlighted in the screen below:

![alt_text](images/edit-template.png "image_tooltip")

2. When certain events related to the Email/Password Login method occur, LoginRadius will send an email to your consumer. The following are the types of email templates that will be used, along with the event that will send it: 

![alt_text](images/templates.png "image_tooltip")

* **Verification Email**: The Verification Email is sent to your consumer when they first register on your application. This email contains a link that will need to be clicked to verify their email address.

* **Forgot Password Email**: The Forgot Password Email is sent to your consumer when they request to reset their password. This email contains a link that will need to be clicked to reset their password.

3. With an email template type selected, you can perform the following actions:

* Edit template content.
* Reset the template to its default content.
* Send a test email using the configured template. You can only send a test email if the required email configuration has been done as explained in <a href="https://www.loginradius.com/docs/developer/guide/setup-your-smtp-provider" target="_blank">SMTP Configuration</a>.

These actions are available in the action bar highlighted in the image below:

![alt_text](images/template-action-bar.png "image_tooltip")

4. When editing a template, you can update the following:

* **SUBJECT**: The subject line of the template.
* **HTML BODY**: The HTML version of the template. This content will appear in clients that support HTML content in emails. You can use [Placeholder](#placeholder-tags) and [Section](#section-tags) tags in the HTML Body.
* **TEXT BODY**: The plain text version of the template. This content will appear in clients that support only plain text content in emails. You can use [Placeholder](#placeholder-tags) and [Section](#section-tags) tags in the Text Body.

In your templates, you can use predefined tags to define where LoginRadius data will appear in your email. 

To save your changes, click the **Save** button.

## Placeholder Tags

These tags are used to define where LoginRadius retrieved data will appear in your email.

* **#Name#**: The consumer's name as defined in your registration form.
* **#GUID#**: The token used by LoginRadius to identify the consumer's email verification/forgot password request. You should typically append it to the query parameter `vtoken`.
* **#Url#**:  The URL used to receive email verification and forgot password requests. This will be the URL of your IDX Auth Page by default. You can modify this by passing an alternate URL in the relevant API endpoints.
* **#Providers#**: The name of the social provider (if any) using which the consumer logged in.
* **#Email#**: The consumer's email address used to register their account.
* **#FirstName#**: The consumer's first name as defined in your registration form.
* **#LastName#**: The consumer's last name as defined in your registration form.
* **#IpAddress#**: The IP address of the consumer.
* **#UserAgent#**: The browser information of the consumer.

## Section Tags

These tags are specific to the **Forgot Password** email template. The text defined inside each tag will appear in forgot password emails depending on the consumer's login method.

* **#FPass \<Content\> FPass#**: This tag defines a section that will appear in cases where the consumer has signed up using a traditional Email and Password. You should typically use this section with the **#Url#** and **#GUID#** placeholder tags to display a link for the consumer to reset their password.

* **#FProv \<Content\> FProv#**: This tag defines a section that will appear in cases where the consumer has signed up using a social provider. You should typically use this section with the **#Providers#** placeholder tag to inform the consumer about the social provider they used for registration.

## References

* <a href="https://www.loginradius.com/docs/developer/guide/custom-registration" target="_blank">Customize Registration Form Fields</a>


[Go Back to Home Page](/)

---
title: "Implementing Captcha"
tags: ["Captcha"]
description: "This is a guide for implementing Captcha in the LoginRadius Identity Platform."
---
# Implementing Captcha with LoginRadius

LoginRadius Identity Platform provides you the feature to add another layer of security to your registration form by configuring CAPTCHA, which ensures that the person registering is not a bot.

> Note: CAPTCHA is mainly used as a security check to ensure only humans can pass through. Generally, bots are not capable of solving a captcha.

As a part of your Login and Registration flows, LoginRadius CAPTCHA settings allow you to enable [Google reCaptcha](#Google-reCAPTCHA-configuration), which is a service from Google that protects web applications from spam and abuse. It is easy for humans to solve, but hard for “bots” and other malicious software to figure out.

Currently, LoginRadius supports two different versions of the Google reCAPTCHA.

* **reCAPTCHA v2:** This is the second version of the reCAPTCHA service. With this, consumers are presented with descriptions along with a set of images to identify based on the description.

* **Invisible reCAPTCHA:** This version provides a better experience to the consumers by tracking mouse movements to identify if a human is interacting with the application or it is a bot. If identified as a bot, it displays the CAPTCHA option on the screen.

> **Note:** You can select one of the reCAPTCHA options while configuring CAPTCHA settings in Google.

The following explains the configuration and deployment of the above CAPTCHA features:

## Step 1: Google reCAPTCHA Configuration

This section covers the required configurations that you need to perform to implement the Google reCAPTCHA functionality.

1. Log in to your Google account, navigate to https://www.google.com/recaptcha/intro/v3.html, and select **Admin console** on the top right, as highlighted in the following screen:

   You will be redirected to the reCAPTCHA's configuration section.

2. Click the **+ (create)** button, as highlighted in the following screen:

    The following screen will appear:

    ![alt_text](images/add-site.png "image_tooltip")

3. Enter the name/label for the reCAPTCHA configuration (you can use your application’s name) and select the version of the reCAPTCHA you would like to use.

   Upon selecting the reCAPTCHA type, the following screen will appear:

   ![alt_text](images/keys.png "image_tooltip")

4. Enter the domain where this reCAPTCHA will be used. The purpose is to whitelist your application domain. If you are implementing in your development environment, enter **localhost**.

5. Accept the reCaptcha terms of service and then click the **Register** button, as highlighted in the following screen:
term and condition

   ![alt_text](images/register.png "image_tooltip")

6. Upon registration, reCAPTCHA credentials will be generated, as highlighted in the following screen.

   > Note: Make a note of these credentials for configuring reCAPTCHA in the LoginRadius Identity Platform.

7. Log in to your Darwin Dashboard account and navigate to **Security > CAPTCHA** setting. The following screen will appear:

   ![alt_text](images/credentials.png "image_tooltip")

8. In the **Google ReCAPTCHA2 Settings** tab, enter the Google reCAPTCHA credentials obtained from **Step 6** and click the **Save** button.

## Step 2: CAPTCHA Deployment

1. Login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account, from the left navigation panel, click **Security** and then navigate to the **CAPTCHA Setting** section.

2. Click the down arrow and the **CAPTCHA Setting** screen will appear:

   ![alt_text](/images/captcha-setting.png "image_tooltip")

3. Enter or select the following CAPTCHA details:

   * reCAPTCHA Type: Choose the type of reCAPTCHA from the dropdown.
   * Public Key: Enter the Public Key provided by Google reCAPTCHA.
   * Private Key: Enter the Private Key provided by Google reCAPTCHA.

   > **Note:** Check the [Step 1](#google-reCAPTCHA-configuration) to get the Public and Private key and to register for Google reCAPTCHA.

4. Click the **Save** button.


## Step 3: See Result

In case of reCAPTCHA v2, the captcha will be available on your Auth Page `<your-app-name>.hub.loginradius.com/auth.aspx` as highlighted in the below screen`.


![alt_text](/images/auth-captcha.png "image_tooltip")



[Go Back to Home Page](https://lr-developer-docs.netlify.app)


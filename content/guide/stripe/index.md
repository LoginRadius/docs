---
title: "Stripe"
tags: ["Stripe"]
description: "This is a guide for integrating Stripe with LoginRadius services"
path: "/guide/stripe"
---

# Stripe

Stripe allows private individuals and businesses to accept payments.

Let's integrate Stripe into your Loginradius Application.

## Step 1: Visit Integration Section

Log in to your <a href="https://dashboard.loginradius.com/dashboard" target="_blank">LoginRadius Dashboard</a> account, select your app, then from the left navigation panel, click the **Integration** and the Configured Integrations screen will appear:

   ![alt_text](../../assets/blog-common/configured-integration.png "image_tooltip")

## Step 2: Add Integration

Click the **Add** button from the above screen, and you will find the list of all available integrations as displayed in the below screen:

   ![alt_text](images/available-integration.png "image_tooltip")

## Step 3: Enable Stripe

Search for Stripe in the search bar, locate **Stripe** and click the **Try It For Free** option. 

   ![alt_text](images/stripe.png "image_tooltip")

The following pop-up will appear, click the **Enable** button.

   ![alt_text](images/stripe2.png "image_tooltip")

## Step 4: Configure Stripe

From the **Available Integrations** screen, click the **Let’s Configure** under the Stripe box. The following screen will appear:

   ![alt_text](images/stripe3.png "image_tooltip")

Enter or select the following details to configure Stripe:

a. Select the **Event** from the dropdown

b. Enter the **Credentials** namely 
   
   * **ApiKeySecret**

> **Note:** Credentials can contain maximum of 245 characters.

c. Enter the **Metadata** details namely

   * **DatabaseID**

   * **URL**

   * **UpdateExisting**

   * **Mapping**

   * **Plugin Filters**

   * **Filters**

   * **Script**

> **Note:** Metadata details of Plugin Filters, Filters and Script are optional

Click the **Save** button to save the configuration.
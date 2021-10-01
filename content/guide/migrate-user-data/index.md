---
title: "Migrate User Data"
tags: ["Data Migration", "Migrate Users"]
description: "This is a guide for migrating users into the LoginRadius Identity Platform."
path: "/guide/migrate-user-data"
---
<span class="devloper-premium plan-tag">Premium</span>

# Migrate User Data

This guide explains how to mass import user data from another application/service/database into the LoginRadius database using CSV files. 

> **Note**: The **Manage Users** feature should be enabled for your app to import user data.

## Access Import Users Section

1. Log in to your <a href="https://dashboard.loginradius.com/dashboard" target="_blank">LoginRadius Dashboard</a> account. Select your app, then from the left navigation panel, click **User Management** and then navigate to the **Manage Users** section.

2. Click the down caret, and the **Manage Users** screen will appear:

   ![alt_text](images/manage-users.png "image_tooltip")

3. At the bottom right of the screen, click the **Add User** button and select the **Import Users** option in the dropdown menu:

   ![alt_text](images/import-users-link2.png "image_tooltip")

   The **Import Users** screen will appear as below:

   ![alt_text](../../assets/blog-common/import-users.png "image_tooltip")


## Import Users

1. Download the CSV template for reference.

   ![alt_text](images/download-template.png "image_tooltip")

2. Export your customer data into a similar CSV format. Using the provided template as a guide, map each value of your data into the template's respective field. The first line of your CSV file will be skipped during processing.

3. Upload the CSV file containing your user data by clicking the upload button available under the **Upload CSV** option:

   ![alt_text](images/upload-csv.png "image_tooltip")

4. Set the password for the log file that will be generated from your import in the provided input field:

   ![alt_text](images/set-password.png "image_tooltip")

5. Click the **Import** button to submit your import request.

   ![alt_text](images/submit-request.png "image_tooltip")

  > **Note**: After the import process is complete, LoginRadius will send you an email notification with a secure link to access your import report file.
  >
  > Depending on the number of requests in the pipeline, it may take up to an hour for your import request to complete.

## Check Import Logs

You can view the request history for your import requests, as well as the download links for its report if available. You can access your logs by clicking the **Import Logs** link as highlighted on the screen below:

![alt_text](images/import-logs-link.png "image_tooltip")

The **Import User Logs** table will show as below:

![alt_text](images/import-logs.png "image_tooltip")

In your logs table, you will find the following details for each import request:

  * **Start Time (UTC)**: The time at which the import request was submitted.

  * **Expiry Time (UTC)**:  The time at which the report link expires.

  * **Status**: The current status of the import request.

  * **Download Report**: The download link for the import report file.

You can download the report for your import request by clicking on the download button available in its respective **Download Report** column. This file is a password-protected CSV containing the records which LoginRadius failed to import, as well as the reason for its failure.

![alt_text](images/download-report.png "image_tooltip")




[Go Back to Home Page](/)

---
title: "Enable Force Logout"
tags: ["Enable", "Force", "Logout", "Remember"]
description: "This is a guide for Enabling Force Logout."
path: "/guide/enable-force-logout"
---

<span class="developer plan-tag">Developer</span>
<span class="devloper-premium plan-tag">Developer Pro</span>

# Force Logout and Remember Me

Force Logout enables you to expire all active sessions of the consumer account on Password Reset or Change, except the session in which the password has been reset/changed. Also, enabling the Remember Me option will keep the customer logged in until the access token expires.

## Force Logout

The **Force Logout** option is enabled by default for all your LoginRadius apps, considering it a security measure. You cannot manage it manually or turn it On/Off.


## Remember Me 

You can enable the **Remember Me** option to keep your consumers logged in until the access token expires, even after the browser is closed.

By enabling this option, a **Remember Me** checkbox will show up on your Auth Page(IDX) `<your-app-name>.hub.loginradius.com/auth.aspx` as highlighted in the below screen.

![alt_text](images/remember-me.png "image_tooltip")

> Note: Remember me token expiry duration will be the same as token lifetime.

[Go Back to Home Page](/)

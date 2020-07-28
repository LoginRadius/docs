---
title: IDX Overview
description: ""
summary: "An Overview about Identity Experience Framework"
---

**IDX (Identity Experience Framework)** is a ready-to-use web page available on a dedicated instance in LoginRadius. It is a set of registration, login, and related web pages such as forgot password, profile.

All the available actions such as Login, Registration, Forgot password, Profile page, logout with the Identity Experience Framework page, can be utilized as per your needs.

Below is a list of the available actions with the LoginRadius Identity Experience Framework Page:

### Login
To display the Login interface, direct your customers to this URL:
```
https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>
```

### Registration
To display the Registration interface, direct your customers to this URL:
```
https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>
```

### Forgot Password
To display the Forgot Password interface, direct your customers to this URL:
```
https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=forgotpassword&return_url=<Return URL>
```

### Profile Page
To display the User Profile interface, direct your customers to this URL:
```
https://<LoginRadius APP Name>.hub.loginradius.com/profile.aspx
```

### Logout
To display the Logout interface, direct your customers to this URL:
```
https://<LoginRadius APP Name>hub.loginradius.com/auth.aspx?action=logout&return_url=<Return URL>
```


> **Note**: Replace `<LoginRadius APP Name>` with The LoginRadius APP Name that you can find on [Setup your Dashboard](https://www.loginradius.com/docs/developer/howto/dashboard-setup/) page and the `<Return URL>` with the locations you would like to direct customers after completing the action.
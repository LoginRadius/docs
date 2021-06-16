---
title: "Auth Page IDX concepts"
tags: ["Auth Page IDX", "Concepts"]
description: "An Overview about Auth Page (Identity Experience Framework)."
path: "/concepts/idx"
---

# Auth Page (IDX)

**Auth Page (IDX)** is a ready-to-use web page available on a dedicated instance in LoginRadius and allows you to setup a centralized authentication page. It is a set of registration, login, and related web pages such as forgot password, profile.

There are a few predefined layouts that can be further customized via your LoginRadius Dashboard under <a href="https://dashboard.loginradius.com/auth-page" target="_blank">Auth Page Customization</a>.

Go through the <a href="https://www.loginradius.com/docs/developer/guide/customize-auth-page" target="_blank">Auth Page (IDX) customization</a> for more details.


## Actions

All the available actions such as Login, Registration, Forgot password, Profile page, logout with the Auth Page (IDX), can be utilized as per your needs.

Below is a list of the available actions with the Auth Page(IDX):

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


> **NOTE:**  After the successful completion of Login or Registration action, token will get appended with the mentioned Return URL <Return URL>?token=745******-3e8e-****-b3**2-9c0******1e. This token can further be utilized as per your requirement.

### Forgot Password

To display the Forgot Password interface, direct your customers to this URL:


```
https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=forgotpassword&return_url=<Return URL>

```

### Profile Page

To display the Consumer/User Profile interface, direct your customers to this URL:

```
https://<LoginRadius APP Name>.hub.loginradius.com/profile.aspx

```

### Logout

To display the Consumer/User Profile interface, direct your customers to this URL:

```
https://<LoginRadius APP Name>hub.loginradius.com/auth.aspx?action=logout&return_url=<Return URL>

```

> **Note:** Replace <LoginRadius APP Name> with The LoginRadius APP Name that you can find on Setup your Dashboard page and the <Return URL> with the locations you would like to direct customers after completing the action.


## Customization

Go through <a href="https://www.loginradius.com/docs/developer/guide/customize-auth-page" target="_blank">this document</a> for Auth Page (IDX) customization.

## Key Benefits

Auth Page (IDX) is useful for authentication needs, you can direct your consumers to Auth Page (IDX), and after successful authentication or registration, direct them back to your domain.

- Centralized: You will be able to handle multiple sites' Login and Registration flows in a single location and service multiple properties with a single set of styles and configurations.

- Customizable: You can choose predefined awesome themes and further customize the look and feel of your Auth Page (IDX).

- Cut down on UI/UX design time: Utilize the classic login screen layout without the fuss.

- Less Complexity: Using LoginRadius Auth Page (IDX) means, don't need to handle authentication, new consumers registration, forgot password, etc.


[Go Back to Home Page](/)


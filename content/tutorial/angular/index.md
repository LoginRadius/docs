---
title: "Get started with Angular"
tags: ["Angular", "GetStarted", "Node", "JavaScript"]
description: "This is a tutorial with IDX and Angular basic implementation."
path: "/tutorial/angular"
---

# Get Started - Angular

The tutorial lets you implement LoginRadius user registration, login, and view profile on your Angular application. 

> <a href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register" target="_blank">Create an account</a> to get started if you don't have one yet!

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - <a href="https://www.loginradius.com/docs/developer/concepts/idx" target="_blank">Auth Page (IDX)</a>.

Auth Page (IDX) reflects the configuration changes that you make in <a href="https://dashboard.loginradius.com/getting-started" target="_blank">LoginRadius Dashboard</a>. You can utilize this webpage for authentication requirements on your Angular application.


## Choose Theme

In your LoginRadius Dashboard, select your app, then navigate to the **Auth Page (IDX)** section located in the left navigation bar and click the **Theme Customization** section. There you can select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")



To preview your login page's theme, click **Go to your Login Page** link highlighted on the above screen. 

> Features like Email and Password login, User registration, Forgot password, and Remember me are already configured on your Auth Page(IDX).


## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **<a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > API Credentials</a>** and click the **API Key And Secret** subsection to retrieve your API Credentials.



![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")


## Setup Angular 

This example uses a sample Angular application based on the Angular official tutorial. 
A shortened version of the process is provided below, and for more information, visit the <a href="https://angular.io/docs" target="_blank">Angular Documentation page.</a>

- To install the Angular CLI tool, run the following command:

  `npm install -g @angular/cli`

- Navigate to the folder where you would like to setup the project. From there, run the following command to create the Angular boilerplate application: 

  `ng new lr-demo-application --routing`

  This will create a new (sample) application in the current folder named `lr-demo-application`, and enable Routing, which is important for this tutorial.

- Remove the placeholder landing page so it is less cluttered, and we can see the data in later steps more easily. From the project root, navigate to `src/app/app.component.html` and modify the content to be as follows:

  ```HTML
  <style>
    div {
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>

  <div>Application home</div>
  <br />

  <router-outlet></router-outlet>
  ```

## Configure Registration and Login URLs

> This tutorial uses Auth Page(IDX) for authentication, where Registration and Login functionality  is already implemented. 

Navigate your Register or Login links or buttons to the following URLs:

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**
- **LoginRadius App Name** is the name of your app as mentioned in [Get Credentials](#get-credentials) step.
- **return_url** is where you want to redirect users upon successful registration or login. [Whitelist your domain](#whitelist-your-domain) if you are not using Local Domain for this tutorial. 

> return_url can be your website, frontend app, or backend server url where you are handling the access token. 


## Retrieve User Data using Access Token

> Once the authentication is done using Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url. The return_url should be your application's web page where you would like to receive the access token.
>The following is an example of the access token in the query string with the Return URL:
>
>`<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`
>
> Point return_url to a route in your Angular application to capture the access token and retrieve the user profile data.

- From the Angular application, we will implement a new Login component to capture the access token and fetch user data accordingly. Start by using Angular CLI to generate a new `login` component. From the project root folder, run the following command:

  `ng generate component login`

  > A new folder and default files will be generated for Login component. We can proceed to register the new component with the app. 

- Navigate to `src\app\app.module.ts` and update the content as follows:

  ```JavaScript
  import { NgModule } from '@angular/core';
  import { BrowserModule } from '@angular/platform-browser';

  import { AppRoutingModule } from './app-routing.module';
  import { AppComponent } from './app.component';
  import { LoginComponent } from './login/login.component';

  @NgModule({
    declarations: [
      AppComponent,
      LoginComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
  })
  export class AppModule { }
  ```

- Navigate to `src\app\app-routing.module.ts` and update content as follows:

  ```JavaScript
  import { NgModule } from '@angular/core';
  import { RouterModule, Routes } from '@angular/router';
  import { LoginComponent } from './login/login.component';

  const routes: Routes = [
    { path: 'login', component: LoginComponent },
  ];

  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }
  ```
  > From here, we can proceed to implement the Login component view and logic. 

- Navigate to `src\app\login\login.component.html` and update the content as follows:

  ```HTML
  <style>
    span {
      white-space: pre-wrap;
      text-align: left;
      font-family: Arial, Helvetica, sans-serif;
    }
  </style>

  <div>
    <div class="apiResponse">
      <span>{{ apiResponse }}</span>
    </div>
  </div>
  ```

- Update `src\app\login\login.component.ts`with the following snippet:

  ```JavaScript
  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute } from '@angular/router';

  const apiKey = {{YOUR API KEY}};

  @Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

  export class LoginComponent implements OnInit {
    token: string;
    apiResponse: string;

    constructor(private activatedRoute: ActivatedRoute) {
      this.token = "";
      this.apiResponse = "";
    }

    ngOnInit(): void {
      this.activatedRoute.queryParams.subscribe(params => {
        this.token = params['token'];

        if (this.token) {
          fetch("https://api.loginradius.com/identity/v2/auth/account?apikey=" + apiKey, {
            method: 'GET',
            headers: {
              'Authorization': 'Bearer ' + this.token
            },
          })
            .then(res => res.json())
            .then(res => {
              this.apiResponse = JSON.stringify(res, null, 4);
            })
            .catch(e => {
              console.log(e);
            })
        }
      });
    }
  }
  ```

- Replace the following placeholder in the above code:
  {{YOUR API KEY}} : API Key obtained in the [Get Credentials](#get-credentials) step.


- Once the `Login` component is implemented. Set the `return_url` to point to the `/login` subdomain of your application. For example, in the local Angular instance, it can point to `http://localhost:4200/login`. This way, after logging in through the Auth Page (IDX), your user will be redirected to the Login component that we just implemented.

## Run and See Result

- From your command line, run the Angular application:
  
  `ng serve --open`

- Wait for the application to finish launching

- Open your Auth Page(IDX) registration URL `https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=http://localhost:4200/login`. It will display the following screen:

  ![alt_text](../../assets/blog-common/login-register.png "image_tooltip")

- Register a user here and then log in. Upon successful login, it will redirect you to the return url with the access token. In response, you will get a user profile in the JSON format displayed in the "/login" route. The following displays a sample JSON response:

  ![alt_text](../../assets/blog-common/jsonresponse.png "image_tooltip")

> In addition to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to <a href="https://www.loginradius.com/docs/developer/concepts/idx/" target="_blank">this document</a> for more information.

##  Whitelist Your Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default. 

To whitelist your domain, in your LoginRadius Dashboard, navigate to **<a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > Whitelist Your Domain</a>** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")



##  Explore Node.js Demo

As an alternative to handling all API calls in the Angular frontend, you may also opt to access the LoginRadius API from a Node backend. If you wish to do so, you can check out our Node.js demo to learn how to implement various LoginRadius features using SDK and its functions.

**<a href="https://github.com/LoginRadius/login-page-demos/blob/master/node-idx-demo" target="_blank">GitHub Demo Link</a>**   |   **<a href="https://github.com/LoginRadius/login-page-demos/archive/master.zip" target="_blank">Download Demo/a>**   


## Recommended Next Steps

<a href="https://www.loginradius.com/docs/developer/guide/customize-email-and-sms-settings" target="_blank">How to manage email templates for verification and forgot password</a>

<a href="https://www.loginradius.com/docs/developer/guide/customize-auth-page" target="_blank">How to personalize interfaces and branding of login pages</a>

<a href="https://www.loginradius.com/docs/developer/guide/setup-your-smtp-provider" target="_blank">How to configure SMTP settings for sending emails to consumers</a>

<a href="https://www.loginradius.com/docs/developer/guide/social-login" target="_blank">How to implement Social Login options like Facebook, Google</a>

<a href="https://www.loginradius.com/docs/developer/guide/phone-login" target="_blank">How to implement Phone Login</a>

<a href="https://www.loginradius.com/docs/developer/guide/passwordless-login" target="_blank">How to implement Passwordless Login</a>

## Node-js SDK Reference

<a href="https://www.loginradius.com/docs/developer/references/SDK/nodejs-SDK" target="_blank">Node-js SDK</a>

## API Reference

[APIs](/#api)

[Go Back to Home Page](/)


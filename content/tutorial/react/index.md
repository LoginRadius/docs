---
title: "Get started with React"
tags: ["React", "GetStarted"]
description: "This is a tutorial with IDX and React basic implementation."
path: "/tutorial/react"
---

# Get Started - React.js

The tutorial lets you implement LoginRadius user registration, login, and view profile on your React.js based application.

> <a href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register" target="_blank">Create an account</a> to get started if you don't have one yet!

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - <a href="https://www.loginradius.com/docs/developer/concepts/idx" target="_blank">Auth Page (IDX)</a>.

Auth Page (IDX) reflects the configuration changes that you make in <a href="https://dashboard.loginradius.com/getting-started" target="_blank"> LoginRadius Dashboard></a>. You can utilize this webpage for authentication requirements on your React.js application.

## Choose Theme

In your LoginRadius Dashboard, select your app, then navigate to the **Auth Page (IDX)** section located in the left navigation bar and click the **Theme Customization** section. There you can select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")

To preview your login page's theme, click the **Go to your Login Page** link highlighted on the above screen. 

> Features like Email and Password login, User registration, Forgot password, and Remember me are already configured on your Auth Page(IDX).

## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **<a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > API Credentials</a>** and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## Setup React JS

This example uses a sample app based on the Create React App (CRA) boilerplate. For directions on how to Create React App, you can reference <a href="https://reactjs.org/docs/create-a-new-react-app.html" target="_blank">here.</a>

Once the CRA boilerplate is set up, follow these steps:

- Navigate to the project root and install `react-router-dom`:

  `npm install react-router-dom`

- Go to `App.js` and modify the App component as follows:

  ```JavaScript
  import './App.css';
  import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Login from './Login'

  function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <div>{"Application home"}</div>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  export default App;
  ```

## Configure Registration and Login URLs

> This tutorial uses Auth Page(IDX) for authentication, where Registration and Login functionality is already implemented.

Navigate your Register or Login links or buttons to the following URLs:

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**

- **LoginRadius App Name** is the name of your app as mentioned in [Get Credential](#get-credentials) step.
- **return_url** is where you want to redirect users upon successful registration or login. [Whitelist your domain](#whitelist-your-domain) if you are not using Local Domain for this tutorial.

> return_url can be your website, frontend app, or backend server url where you are handling the access token.
>
> For this tutorial, set the `return_url` to point to the `/login` subdomain of your application. For example, in the local React instance, it can point to `http://localhost:3000/login`. This way, after logging in through the Auth Page (IDX) Login page, it will redirect the user to the Login component implemented in below [step](#retrieve-user-data-using-access-token).

## Retrieve User Data using Access Token

> Once the authentication is done using Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url. The return_url should be your application's web page where you would like to receive the access token.
> The following is an example of the access token in the query string with the Return URL:
>
> `<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`
>
> Point return_url to a route in your React application to capture the access token and retrieve the user profile data.

- Add the `"/login"` route to the `App` component to get the user profile. Your `App.js` file should look like this:

  ```JavaScript
  import './App.css';
  import {
    BrowserRouter as Router,
    Switch,
    Route
  } from "react-router-dom";
  import Login from './Login'

  function App() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path="/">
              <div>{"Application home"}</div>
            </Route>
            <Route path="/login">
              <Login />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }

  export default App;
  ```

- Create a `Login` folder (case-sensitive) for the new component under the `src` folder, then create a new empty file `index.js` within `Login` folder:

  ![alt_text](./images/folder-tree1.png "image_tooltip")

- Populate the `src/Login/index.js` file with:

  ```JavaScript
  import React from "react"
  import { withRouter } from "react-router-dom";

  const apiKey = '{{ Your API Key }}';

  class Login extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        userProfileResponse: null
      }
    }

    componentDidMount() {
      const token = new URLSearchParams(this.props.location.search).get("token");
      fetch("https://api.loginradius.com/identity/v2/auth/account?apikey=" + apiKey, {
        method: 'GET',
        headers: {
          'Authorization': 'Bearer ' + token
        },
      })
        .then(res => res.json())
        .then(res => {
          this.setState({ userProfileResponse: res })
        })
        .catch(e => {
          console.log(e);
        })
    }

    render() {
      const { userProfileResponse } = this.state;

      return (
        <div>
          <span style={{ whiteSpace: "pre-wrap", textAlign: "left" }}>
            {JSON.stringify(userProfileResponse, null, 4)}
          </span>
        </div>
      );
    }
  }

  export default withRouter(Login);
  ```

- Replace the following placeholder in the above code:
  {{YOUR API KEY}}: API Key obtained in the [Get Credentials](#get-credentials) step.


## Run and See Result

- From your command line, run the React application:

  `npm start`

- Wait for the application to finish launching.

- Open your Auth Page(IDX) registration URL `https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=http://localhost:3000/login`. It will display the following screen:

  ![alt_text](../../assets/blog-common/login-register.png "image_tooltip")

- Register a user here and then log in. Upon successful login, it will redirect you to the return url with access token. In response, you will get user profile in JSON format displayed in the "/login" route. The following displays a sample JSON response:

  ![alt_text](../../assets/blog-common/jsonresponse.png "image_tooltip")

> In addition to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to <a href="https://www.loginradius.com/docs/developer/concepts/idx-overview/" target="_blank">this document</a> for more information.

## Whitelist Your Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **<a href="https://dashboard.loginradius.com/configuration" target="_blank">Configuration > Whitelist Your Domain</a>** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

## Explore Node.js Demo

As an alternative to handling all API calls in the React frontend, you may also opt to access the LoginRadius API from a Node backend. If you wish to do so, you can check out our Node.js demo to learn how to implement various LoginRadius features using SDK and its functions.

**<a href="https://github.com/LoginRadius/login-page-demos/blob/master/node-idx-demo" target="_blank">GitHub Demo Link</a>** | **<a href="https://github.com/LoginRadius/login-page-demos/archive/master.zip" target="_blank">Download Demo</a>**

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

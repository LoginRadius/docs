---
title: "Get started with JAVA"
tags: ["JAVA", "GetStarted"]
description: "This is a tutorial with IDX and JAVA SDK implementation."
---

# Get Started - JAVA

The tutorial lets you implement LoginRadius user registration, login, profile, and log out in your JAVA application. 

> For developing a JAVA project a JDK is required. For this guide, the supported version is JDK 8.0 or JDK 11.0. The guide to install JDK can be found [here](https://medium.com/how-to-start-developing-java-applications/how-to-install-java-development-kit-jdk-on-windows-bb68641c516c).

> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - [Auth Page (IDX)](https://www.loginradius.com/docs/developer/concepts/idx-overview/).

Auth Page (IDX) reflects the configuration changes that you make in [LoginRadius Dashboard](https://dashboard.loginradius.com/getting-started). You can utilize this webpage for authentication requirements on your JAVA application.


## Choose Theme

In your LoginRadius Dashboard, select the **Auth Page (IDX)** from the left navigation and then click the **Theme Customization** to select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")



To preview your login page's theme, click **Go to your Login Page** link as highlighted on the above screen. 

> Features like Email and Password login, User registration, Forgot password, and Remember me are already implemented on your Auth Page(IDX).


## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.



![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")



## Setup a JAVA project



Next, we can either install Eclipse or VSCode (available from their respective websites) as an IDE to run our JAVA project. For this project, we are choosing Visual Studio Code. For Eclipse, refer [here](https://medium.com/how-to-start-developing-java-applications/simple-hello-world-application-in-java-using-eclipse-1ebae99d9fcf).


Once you have both JDK and VSCode installed, we can follow [this guide](https://medium.com/@tariqul.islam.rony/learning-java-and-spring-boot-with-visual-studio-code-vscode-part-1-54073f2fa264) to setup a JAVA environment in Visual Studio Code.

## Set up a server for the JAVA project

Usually, web applications require a server for setting up, for this we will be needing SpringBoot. To set up spring-boot:

Install the Spring boot Extensions Pack for getting Spring boot Development Environment to Visual Studio Code from VSCode Extensions marketplace.


![alt_text](/images/springboot-setup.png "image_tooltip")


## Implementing Loginradius SDK in JAVA

Loginradius offers an already done for you Loginradius JAVA-SDK kit that can be used to implement basic features such as user authorization and registration for your app easily.

For this, you'll be needing Git for VSCode, which if not already setup can be done so by following [this guide](https://www.jcchouinard.com/install-git-in-vscode/).

After setting up git, run this command in your VSCode terminal:

`git clone https://github.com/LoginRadius/java-sdk.git`


## Configure Project

Locate to the demo folder:

`java-sdk/demo`

This is the file structure you will get in the Java demo, let's see what each file does

- **demo folder** - Contains all the HTML, CSS, and JS files to create UI for the test application.

- **static folder** - Contains all the CSS and JS files to create UI for the test application.

- **java folder** - Contains server-side code and routing API to be used in the demo

- **templates folder** - contains the HTML template for Login and profile page

```
.project
pom.xml
README.md
src
| -- main
| -- |--- |java/
| -- |--- |resources/
| -- |--- |-- application.properties
| -- |--- |-- static
| -- |--- |-- templates
| -- |--- |-- --- index.html
| -- |--- |-- --- profile.html
```


You need to add your LoginRadius credentials in the demo app to communicate with LoginRadius SDK

-Server side: demo/src/main/resources/application.properties

```
server.port= 8080
app.apikey=xxxxxxxxxx //Add api key
app.apisecret=xxxxxxxxx //Add api secret
```

-Client-side: demo/src/main/resources/static/js/options.js

```
commonOptions.apiKey = "<LoginRadius API Key>"; //Add api key
commonOptions.appName = "<App Name>"; //Add app name
```



Visit http://localhost:8080 (8080 is the default port for hosting the web page, you can check out the port number from within the terminal after execution is finished and the web page is set up) in your browser.

## Configure Registration and Login URLs

> This tutorial uses Auth Page(IDX) for authentication, where Registration and Login functionality is already implemented.

Navigate your Register or Login links or buttons to the following URLs:

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**

* **LoginRadius App Name** is the name of your app as mentioned in the [Get Credentials](#get-credentials) step.
* **return_url** is where you want to redirect users upon successful registration or login. [Whitelist your domain](#whitelist-domain) if you are not using Local Domain for this tutorial.

> return_url can be your website, frontend app, or backend server url where you are handling the access token.

## Retrieve User Data using Access Token

> Once the authentication is done using Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url. The return_url will access the Golang backend API with query parameter (access token).
>
> The following is an example of the access token in the query string with the Return URL:
>
> `<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`
>
> If return_url is of frontend, pass the token to backend JAVA API (eg: http://localhost:8080) from the application. Or you can use the path of the back end API as the return_url.

Add the following API snippet to `LoginRadiusService.java`to get the user profile using the access token:

```
public String getUserProfileByAccessToken(HttpServletRequest request) {
String accessToken = "<accessToken>"; //Required

AuthenticationApi authenticationApi = new AuthenticationApi();
authenticationApi.getAccessTokenInfo(accessToken ,  new AsyncHandler<TokenInfoResponseModel> (){

@Override
 public void onFailure(ErrorResponse errorResponse) {
 System.out.println(errorResponse.getDescription());
 }
 @Override
 public void onSuccess(TokenInfoResponseModel response) {
  System.out.println(response.getAccess_Token());
 }
});
}

```

and this route configuration to `LoginRadiusController.java`:

```
 @RequestMapping(value="/getUserInfoByAccessToken", method=RequestMethod.GET)
    public String getUserProfileByAccessToken(){
        return "index";
    }

```

## Run and See Result

* Run the API Server by executing the following command in the command line:
  [`mvn spring-boot:run`] 

  > NOTE: If you don't have Maven already installed, you can install it from [here](https://maven.apache.org)

* Open your Auth Page(IDX) registration URL `https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`. It will display the following screen:

  ![alt_text](../../assets/blog-common/login-register.png "image_tooltip")

* Register a user here and then log in. Upon successful login, it will redirect you to the return url with the access token. In response, you will get a user profile in JSON format. The following displays a sample JSON response:

  ![alt_text](../../assets/blog-common/jsonresponse.png "image_tooltip")

Similarly, you can implement more features using JAVA SDK.

> In addition to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to [this document](https://www.loginradius.com/docs/developer/concepts/idx-overview/) for more information.

## Explore JAVA Demo

* **[Refer to GitHub Demo](https://github.com/LoginRadius/java-sdk)**  to know how to implement various LoginRadius features using SDK Functions.

## Recommended Next Steps

## JAVA SDK Reference


## API Reference







[Go Back to Home Page](https://lr-developer-docs.netlify.app)



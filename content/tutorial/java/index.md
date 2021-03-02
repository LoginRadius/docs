---
title: "Get started with JAVA"
tags: ["JAVA", "GetStarted"]
description: "This is a tutorial with IDX and JAVA SDK implementation."
---

# Get Started - JAVA

The tutorial lets you implement LoginRadius user registration, login, profile, and log out in your JAVA application. 


## Choose Theme

In your LoginRadius Dashboard, select the **Auth Page (IDX)** from the left navigation and then click the **Theme Customization** to to select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")



To preview your login page's theme, click **Go to your Login Page** link as highlighted on the above screen. Features like Email and Password login, User registration, Forgot password, and Remember me are already implemented on your Auth Page(IDX).


## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.



![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")



### Setup a JAVA project

For developing a JAVA project a JDK is required. The guide to install JDK can be found [here](https://medium.com/how-to-start-developing-java-applications/how-to-install-java-development-kit-jdk-on-windows-bb68641c516c).

Next, we can either install Eclipse or VSCode (available from their respective websites) as an IDE to run our JAVA project. For this project, we are choosing Visual Studio Code. For Eclipse, refer [here](https://medium.com/how-to-start-developing-java-applications/simple-hello-world-application-in-java-using-eclipse-1ebae99d9fcf).


After installing JDK, we can follow [this guide] (https://medium.com/@tariqul.islam.rony/learning-java-and-spring-boot-with-visual-studio-code-vscode-part-1-54073f2fa264) to setup a JAVA environment in Visual Studio Code.

### Set up a server for JAVA project

Usually, web applications require a server for setting up, for this we will be needing SpringBoot. To set up spring-boot:

Install the Spring boot Extensions Pack for getting Spring boot Development Environment to Visual Studio Code from VSCode Extensions marketplace.


### Implementing Loginradius SDK in JAVA

Loginradius offers an already done for you java-SDK kit that can be used to implement user authorization and registration for your app easily.

For this, you'll be needing Git for VSCode, which if not already setup can be done so by following [this guide](https://www.jcchouinard.com/install-git-in-vscode/).

After setting up git, run this command in your VSCode terminal:

`git clone https://github.com/LoginRadius/java-sdk.git`


### Exploring JAVA demo

Locate to the demo folder:

`java-sdk/demo`

This is the file structure you will get in the Java demo, let's see what each file does

-demo folder - Contains all the HTML, CSS, and JS files to create UI for the test application.

-static folder - Contains all the CSS and JS files to create UI for the test application.

-java folder - Contains server-side code and routing API to be used in the demo

-templates folder - contains the HTML template for Login and profile page



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


Once the repo is created, we can run the server by running the Application.java file from our VSCode. For that:

Locate Application.java file in VSCode file explorer:

`java-sdk/demo/src/main/java/com/demo/Application.java`



From there press the F5 key (or fn+F5 if on MAC) to run the application. This will set up the application on your system, on the terminal you can see the port number on which your app will be hosted.

Visit http://localhost:8080 (8080 is the default port for hosting the web page, you can check out the port number from within the terminal after execution is finished and the web page is set up) in your browser.



### Recommended next steps


### API Reference







[Go Back to Home Page](https://lr-developer-docs.netlify.app)



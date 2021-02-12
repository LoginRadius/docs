# Get Started - ROR

The tutorial lets you implement LoginRadius user registration, login, profile, and log out to your ROR based application. 



> You must have ROR installed in your system

Watch the video to get started, or refer to the section below for the text-based guide.


<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/efM46qNSaeg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

---------------------------------------------------
> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - [Auth Page (IDX)](https://www.loginradius.com/docs/developer/concepts/idx-overview/).

Auth Page (IDX) reflects the configuration changes that you make in [LoginRadius Dashboard](https://dashboard.loginradius.com/getting-started). You can utilize this webpage for authentication requirements on your ROR application.


## Choose Theme

In your LoginRadius Dashboard, select the **Auth Page (IDX)** from the left navigation and then click the **Theme Customization** to select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")



To preview your login page's theme, click **Go to your Login Page** link as highlighted on the above screen. Features like Email and Password login, User registration, Forgot password, and Remember me are already implemented on your Auth Page(IDX).


## Get Credentials {#getcredential}

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.



![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")



## ROR Implementation


## SDK Installation

Add project dependency and loginradius SDK by adding this line to your application's Gemfile:

```
 gem 'login_radius', '~> 11.0' 
```
Once your gems are added, run the following command in command line:
 
 ```
 bundle install
 ```

## Configuration
Define the global constant in `config/application.yml`:

```

SITE_NAME: "<App Name>"
API_KEY: "<API Key>"
API_SECRET: "<API Secret>"
CUSTOM_API_DOMAIN: "<custom-domain-url-if-any>"
API_REQUEST_SIGNING: "false"


```
Replace the following placeholders in the above config object in `config/application.yml`:
- apiKey:  **API Key** obtained in the [Get Credential](#getcredential) step.
- apiSecret: **API Secret** obtained in the [Get Credential](#getcredential) step.
- siteName: **App Name** obtained in the [Get Credential](#getcredential) step.

Now create `login_radius.rb` in `/config/initializers` to instantiate the module and add following code in it:

```
require 'login_radius'

::AuthenticationApi = LoginRadius::AuthenticationApi.new
::AccountApi = LoginRadius::AccountApi.new

```

## Perform Registration or Login

In this tutorial, we are using Auth Page(IDX) for authentication, where Registration and Login funtionality is already implemented. Thus, navigate your Register or Login links or buttons to the following URLs:

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**
- LoginRadius App Name is the name of your app as mentioned in [Get Credential](#getcredential) step.
- return_url is where you want to redirect users upon successful registration or login.

> return_url can be your website, frontend app, or backend server url where you are handling the access token. 


##  Obtain Access Token

On successful authentication on the Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url.

The following is an example of the access token in the query string with the Return URL:

`<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`

> If return_url is frontend, then from that application, pass the token to the backend ROR API. Else you can use the path of back end API as the return_url.

You can use the access token to retrieve profile data and handle other user functionality.

> Similar to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to [this document](https://www.loginradius.com/docs/developer/concepts/idx-overview/) for more information.



## Retrieve User Data using Access Token

Once the authentication is done using Auth Page, the return_url will access the ROR backend API with query parameter (access token). You can use this token to fetch the user profile:

For example- To get user profile add below function snippet 

```
access_token = "<access_token>" #Required
fields = nil #Optional

response = AuthenticationApi.get_profile_by_access_token(access_token, fields)
```

##  Domain Whitelisting

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default. 

To whitelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Domain Whitelisting](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")



> Now, run the API Server and you should get the user profile in response (json format). Similarly, you can implement more features using ROR SDK. 

##  Explore ROR Demo

Check out our ROR demo to know how you can implement various LoginRadius features using SDK and its functions.

**[GitHub Demo Link](https://github.com/LoginRadius/login-page-demos/tree/master/ruby-on-rails-idx-demo)**   |   **[Download Demo](https://github.com/LoginRadius/login-page-demos/archive/master.zip)**   


# Recommended Next Steps

How to manage email templates for verification and forgot password

How to personalize interfaces and branding of login pages

How to configure SMTP settings for sending emails to consumers

How to implement Social Login options like Facebook, Google

How to implement Phone Login

How to implement Passwordless Login


# ROR SDK Reference

< Link to ROR SKD doc >


# API Reference

< Link to APIs doc >

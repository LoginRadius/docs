---
title: "Get started with Ruby On Rails"
tags: ["Ruby on Rails", "ROR", "GetStarted"]
description: "This is a tutorial with IDX and ROR basic implementation."
path: "/tutorial/ror"
---

# Get Started - ROR

The tutorial lets you implement LoginRadius user registration, login, profile, and log out for your ROR based application.

> You must have [Ruby On Rails](https://www.ruby-lang.org/en/downloads/) installed in your system.
>
> New to Ruby on rails? Check out this [reference](https://guides.rubyonrails.org/v5.0/getting_started.html).


---

When you signed up for the LoginRadius account, it created an app for you. This app is linked to a ready to use web page - [Auth Page (IDX)](https://www.loginradius.com/docs/developer/concepts/idx-overview/).

Auth Page (IDX) reflects the configuration changes that you make in [LoginRadius Dashboard](https://dashboard.loginradius.com/getting-started). You can utilize this webpage for authentication requirements on your ROR application.

> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!

## Choose Theme

In your LoginRadius Dashboard, select the **Auth Page (IDX)** from the left navigation and then click the **Theme Customization** to select a design theme for your login page, or further customize the content displayed:

![alt_text](../../assets/blog-common/theme-customization.png "image_tooltip")

To preview your login page's theme, click the **Go to your Login Page** link highlighted on the above screen. 

> Features like Email and Password login, User registration, Forgot password, and Remember me are already configured on your Auth Page(IDX).

## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name**, **API Key**, and **API Secret**.

In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your API Credentials.

![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

## Install SDK

Add project dependency and loginradius SDK by adding this line to your application's Gemfile:

```
gem 'login_radius', '~> 11.0'
```

Once your gems are added, run the following command in the command line:

```
bundle install
```

## Configure Project

Add `Figaro` for secure environment variables by this line to your application's Gemfile:

```
gem "figaro" 
```

Run `bundle exec figaro install`, then configure the generated `/config/application.yml` file.
```

SITE_NAME: "<App Name>"
API_KEY: "<API Key>"
API_SECRET: "<API Secret>"

```

Replace the following placeholders in the above config object in `config/application.yml`:

- apiKey: **API Key** obtained in the [Get Credentials](#get-credentials) step.
- apiSecret: **API Secret** obtained in the [Get Credentials](#get-credentials) step.
- siteName: **App Name** obtained in the [Get Credentials](#get-credentials) step.

Now create `login_radius.rb` in `/config/initializers` to instantiate the module and add following code in it:

```
require 'login_radius'

::AuthenticationApi = LoginRadius::AuthenticationApi.new
```

## Configure Registration and Login URL

> This tutorial uses Auth Page(IDX) for authentication, where Registration and Login functionality is already implemented.

Navigate your Register or Login links or buttons to the following URLs:

**Registration Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`

**Login Page URL:**

`https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=login&return_url=<Return URL>`

**Where:**

- **LoginRadius App Name** is the name of your app as mentioned in the [Get Credentials](#get-credentails) step.
- **return_url** is where you want to redirect users upon successful registration or login. [Whitelist your domain](#domain-whitelisting) if you are not using Local Domain for this tutorial.

> return_url can be your website, frontend app, or backend server url where you are handling the access token.

## Retrieve User Data using Access Token

> Once the authentication is done using Auth Page (IDX), the default script of LoginRadius sends an access token in the query string as a token parameter with the return_url. The return_url will access the Node.js backend API with query parameter (access token).
>
> The following is an example of the access token in the query string with the Return URL:
>
> `<Return URL>?token=745******-3e8e-****-b3**2-9c0******1e.`
>
> If return_url is frontend, then from that application, pass the token to the backend ROR API. Otherwise, use the path of the back end API as the return_url.

Create profile controller `app/controllers/api/profile_controller.rb `  and add the method to retrieve user profile using the received access token:

```
    def read_profile_by_access_token
      puts "params #{params[:auth]}"
      access_token = params[:auth]
      fields = ''
      response = AuthenticationApi.get_profile_by_access_token(access_token, fields)

      render :status => response.code, :json => response.body
    end
```

Your profile controller should look something like this:

```
module Api
  class ProfileController < ApplicationController
    def read_profile_by_access_token
      puts "params #{params[:auth]}"
      access_token = params[:auth]
      fields = ''
      response = AuthenticationApi.get_profile_by_access_token(access_token, fields)

      render :status => response.code, :json => response.body
    end
  end
end
```

You can call this function from `config/routes.rb`

```
Rails.application.routes.draw do

  namespace :api do
get "profile", action: "read_profile_by_access_token", controller: "profile"
 end
end
```

## Run and See Result

- Run the server using the following command in the command line `rails server`.

- Open your Auth Page(IDX) registration URL `https://<LoginRadius APP Name>.hub.loginradius.com/auth.aspx?action=register&return_url=<Return URL>`. It will display the following screen:

  ![alt_text](../../assets/blog-common/login-register.png "image_tooltip")

- Register a user here and then log in. Upon successful login, it will redirect you to the URL with an access token and give you a user profile in response (JSON format). The following displays a sample JSON response:

  ![alt_text](../../assets/blog-common/jsonresponse.png "image_tooltip")

Similarly, you can implement more features using ROR SDK.

> In addition to Registration and Login actions, the Auth Page (IDX) supports more actions. Refer to [this document](https://www.loginradius.com/docs/developer/concepts/idx-overview/) for more information.

## Whitelist Your Domain

For security reasons, LoginRadius processes the API calls that are received from the whitelisted domains. Local domains (http://localhost and http://127.0.0.1) are whitelisted by default.

To whitelist your domain, in your LoginRadius Dashboard, navigate to **[Configuration > Whitelist Your Domain](https://dashboard.loginradius.com/configuration)** and add your domain name:

![alt_text](../../assets/blog-common/domain-whitelisting.png "image_tooltip")

## Explore ROR Demo

Check out our ROR demo to know how you can implement various LoginRadius features using SDK and its functions.

**[GitHub Demo Link](https://github.com/LoginRadius/login-page-demos/tree/master/ruby-on-rails-idx-demo)** | **[Download Demo](https://github.com/LoginRadius/login-page-demos/archive/master.zip)**

## Recommended Next Steps

How to manage email templates for verification and forgot password

How to personalize interfaces and branding of login pages

How to configure SMTP settings for sending emails to consumers

How to implement Social Login options like Facebook, Google

How to implement Phone Login

How to implement Passwordless Login

## ROR SDK Reference

< Link to ROR SKD doc >

## API Reference

[API Reference](/#api)

[Go Back to Home Page](https://lr-developer-docs.netlify.app)

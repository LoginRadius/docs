# Get Started - iOS

The tutorial lets you implement LoginRadius user registration, login, profile, and log out in your iOS mobile application. 


> You must have the OS X, Xcode and iOS 9 or higher.



Watch the video to get started, or refer to the section below for the text-based guide.


<figure class="video_container">
<iframe width="560" height="315" src="https://www.youtube.com/embed/efM46qNSaeg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></figure>

---------------------------------------------------
> [Create an account](https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register) to get started if you don't have one yet!



## Get Credentials

Before using any of the APIs or Methods that LoginRadius provides, you need to get your **App Name** (when you signed up for the LoginRadius account, it created an app for you), **API Key**, and **SOTT**.

- In your LoginRadius Dashboard, navigate to **[Configuration > API Credentials](https://dashboard.loginradius.com/configuration)** and click the **API Key And Secret** subsection to retrieve your App Name and API Key:

  ![alt_text](../../assets/blog-common/api-credentials.png "image_tooltip")

- Now click the the **Secure Mobile OTP Token(SOTT)** subsection, the below screen will appear:

  ![alt_text](images/sott.png "image_tooltip")

- Generate SOTT and make sure to copy the SOTT value (for security reasons, it's only visible once in the LoginRadius Dashboard). 

## iOS Implementation

We recommend using CocoaPods for installing the library in a project.

CocoaPods is a dependency manager for Cocoa projects. You can install it with the following command:

```
$ gem install cocoapods

```

**Podfile**

Open a terminal window and navigate to the location of the Xcode project for your application. If you have not already created a Podfile for your application, create one now:

```
$ pod init

```
## SDK Installation

Integrate LoginRadiusSDK into your Xcode project using CocoaPods, specify it in your `Podfile`:

```
source 'https://github.com/CocoaPods/Specs.git '
platform :ios, '9.0'
target 'TargetName' do

# Comment the next line if you don't want to use dynamic frameworks
use_frameworks!
pod 'LoginRadiusSDK', '~> 5.4.2'
end

```

## Configuration

1. Create a new File `LoginRadius.plist` and add it to your App.

2. Add the following entries to your `LoginRadius.plist`.

```
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0">
<dict>
	<key>apiKey</key>
	<string>API_Key</string>
	<key>siteName</key>
	<string>APP_Name</string>
	
</dict>
</plist>
```
- Replace the following placeholders in the above :
  - apiKey:  **API Key** obtained in the [Get Credential](#getcredentials) step.
  - siteName: **App Name** obtained in the [Get Credential](#getcredentials) step.

- Import the SDK with `import LoginRadiusSDK` and Initialize with your API key and Site name in your `AppDelegate.swift` as below.

```

import LoginRadiusSDK
 ...

@UIApplicationMain class AppDelegate: UIResponder, UIApplicationDelegate {

...

func application(_ application: UIApplication, didFinishLaunchingWithOptions launchOptions:[UIApplicationLaunchOptionsKey: Any]?) -> Bool {

            let sdk:LoginRadiusSDK = LoginRadiusSDK.instance();
            sdk.applicationLaunched(options: launchOptions);

            //Your code

            return true
 }

...

}

```



## Implement Registration 

> Add a button to your application that calls below function for registration.

Add the following code to implement registration:

```
let email:AnyObject = [ "Type":"Primary","Value":"test@gmail.com" ] as AnyObject
let parameter:AnyObject = [ "Email": [email],
                            "Password":"password"
                          ]as AnyObject

AuthenticationAPI.authInstance().userRegistration(withSott:sott,payload:parameter as! [AnyHashable : Any], emailtemplate:nil, smstemplate:nil,preventVerificationEmail:false, completionHandler: { (data, error) in

        if let err = error
        {
            print(err.localizedDescription)
        }else{
            print("successfully registered");
        }

}) 
```
- sott: **SOTT** obtained in the [Get Credential](#getcredential) step.

## Implement Login 

> Add a button to your application that calls below function for login.

Add the following code to implement login:

```
let parameter:AnyObject = ["email":"email",
                           "password":"password",
                           "securityanswer":""
                          ]as AnyObject

AuthenticationAPI.authInstance().login(withPayload:parameter as! [AnyHashable : Any], loginurl:nil, emailtemplate:nil, smstemplate:nil, g_recaptcha_response:nil,completionHandler: { (data, error) in

     if let err = error {
        print(err.localizedDescription)
    } else {
        print("login successful")
    }
})
```  

##  Retrieve User Data using Access Token

> You will get an `access token` in response to Registration and Login functions.

Once the authentication is done, you can use the `access token` to retrieve profile data and handle other user functionality. Add the following code to get the user profile:

```
AuthenticationAPI.authInstance().profiles(withAccessToken:"<access_token>", completionHandler:{ (data, error) in

        if let err = error {
         print(err.localizedDescription)
        } else {
         print("success",data)
    }
})}

```

> Call the `profileswithAccessToken` function after login and verify that the user's profile information has been returned in the `data` field.


##  Explore iOS Demo

Check out our iOS demo to know how you can implement various LoginRadius features using SDK and its functions.

**[GitHub Demo Link](https://github.com/LoginRadius/ios-sdk)**   |   **[Download Demo](https://github.com/LoginRadius/ios-sdk/archive/master.zip)**   


# Recommended Next Steps

How to manage email templates for verification and forgot password

How to personalize interfaces and branding of login pages

How to configure SMTP settings for sending emails to consumers

How to implement Social Login options like Facebook, Google

How to implement Phone Login

How to implement Passwordless Login


# iOS SDK Reference

< Link to iOS SDK doc >


# API Reference

< Link to APIs doc >

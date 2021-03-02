#What is MFA

Multi-factor authentication (or MFA) is a multi-layered protection framework that verifies the login or other transaction identities of users. A few examples of multi-factor authentication are codes created by mobile apps, answers to personal security questions, codes sent to an email address, fingerprints, etc.

#What is 2FA
Two-Factor Authentication adds an extra layer of security for the users' accounts. With this feature enabled, once the user enters their login credentials or proceeds with social login, they are sent an authentication code to complete the login.

#Implement 2FA
Two-Factor Authentication feature is available on an add-on basis, and you can either make it optional or required for the users as per your business requirement.To add the Two Factor Authentication on you app, you should follow the below steps

> Note: When both [Passwordless Login](/docs/developer/howto/manage-passwordless-login/) and Two Factor Authentication (2FA) are implemented for your application, the customer will not be prompted for 2FA, if they choose to authenticate with Passwordless Login method.

##Configuration

###Step1
1. Login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account, from the left navigation panel, click **Security** and then navigate to the **Two Factor Authentication** section. Click the down arrow or anywhere within the section. The **Two Factor Authentication** screen will appear:

![alt_text](/images/2fa.png "image_tooltip")

###Step2
In the following ways, the user can receive the code. Choose any one:

1. **SMS Passcode**

2. **Google Authenticator**

3. From the following screen, you can choose the desired Two-Factor Authentication methods and whether it is going to be optional or required for the users:

    1. *Optional*: End users will have the ability to enable or disable Two Factor Authentication on login.
    
    2. *Required*: End users will be required to authenticate themself using enabled 2FA option in addition to the initial authentication for login.

![alt_text](/images/main.png "image_tooltip")

###Step3

a. **SMS Passcode**

Two-Factor Authentication with SMS Passcode will be the default option for the users, and in this section, you are allowed to customize the Two Factor Authentication template.

1. To access the respective SMS template, click the down arrow available next to the SMS Passcode option or anywhere within the section.The following screen will appear:

![alt_text](/images/onetimepasscode.png "image_tooltip")

2. Two Factor Authentication SMS Template

Two Factor Authentication SMS template is sent to your users when they authenticate through their credentials. This SMS will contain an OTP that the users will need to enter to complete the log in.

b. **Google Authenticator**

To enable two-factor authentication with Google Authenticator, you need to configure a few settings under the Google Authenticator section.

1.  Select the Google Authenticator checkbox.

2.  Click the edit button available next to the Google Authenticator option.The following section will appear on the screen:

    ![alt_text](/images/googleauth.png "image_tooltip")

3.   Enter the Issuer ID, it can be your product/company name.

4.   Enter valid values for QR Code Width and Qr Code Height (ideal values are 200 for both)

5.  Save the settings.

6. After saving the configuration, open your authentication page and it will display the following google authenticator options (where end user can either scan the QR code or via the google authenticator app or enter the code generated via the app):

![alt_text](/images/google-auth-page.png "image_tooltip")

The two factor authentication is now configured

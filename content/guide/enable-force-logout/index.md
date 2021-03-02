#What is Force Logout?
 
Force Logout enables you to expire all active sessions of the customer account on Password Reset or Change, except the session in which the password has been reset/changed.This can be done by the following steps:

##Step1 :Navigation
1. To access **Session Management** options, login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account
2. From the left navigation panel, click **Security** and then navigate to the **Session Management** section. 
3. Click the down arrow or anywhere within the section and the **Session Management** screen will appear
4. Select the Force Logout Option

![alt_text](./../../assets/blog-common/session-management-settings.png "image_tooltip")

##Step2 Enable Force Logout

Select Whether to Force-logout or not

##Step3(Additional) Remember-me option

1. **Remember Me** feature allows your customer to stay logged in until the access token expires, even after the browser is closed.

> Remember me expiry duration will be same as token lifetime.

2. By enabling this option, a Remember Me checkbox will show up on your IDX - Auth Page `<your-app-name>.hub.loginradius.com/auth.aspx` as highlighted in the below screen.

![alt_text](/images/remember-me.png "image_tooltip")

This way Force Logout can be enabled
#What is Session Lifetime?

Session Management allows you to control and manage your customer’s login session.Change Session Lifetime feature is available through the **Token Lifetime** option inside Session Management Section. **Token lifetime** is the amount of time a customer is logged in to your application until it expires and prompts the customer to log back in.This can be done by the following steps:

##Step1 :Navigation
1. To access **Session Management** options, login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account
2. From the left navigation panel, click **Security** and then navigate to the **Session Management** section. 
3. Click the down arrow or anywhere within the section and the **Session Management** screen will appear
4. Select the Token Lifetime Option

![alt_text](./../../assets/blog-common/session-management-settings.png "image_tooltip")

##Step2 :Configire Token Lifetime

Here you can set the token expiration time and extend the token validity if it has been accessed/used before the expiration time.

1. **Use Case**: A token having the expiration at 7.00 will be extended to the configured expiration time if your customer logged in before the expiry (i.e., 7.00).

> The default token lifetime is 15 min and configurable from 15 min to 24 hours.

This way the Session Lifetime can be changed

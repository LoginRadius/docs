---
title: "Setup Strong Password Policy"
tags: ["Setup", "Strong","Password","Policy"]
description: "This is a guide for configuring Strong Password Policy."
---


# Set Strong Password Policy
The **Password Policy** feature allows you to enhance authentication security by defining the password rules. This guide will help you in setting a Password Policy using various password scales.

## Navigation
1. To set a Password Policy, login to your [LoginRadius Dashboard](https://dashboard.loginradius.com/dashboard) account
2. From the left navigation panel, click **Security** and then navigate to the **Password Policy** section.

Click the down arrow or anywhere within the section, the **Password Policy** screen will appear:

![alt_text](/images/main.png "image_tooltip")


LoginRadius allows you to set up password strength from Weak to Very Strong with a set of predefined rules, or you can set your custom rules for the password.

## Set of Rules

LoginRadius provides a predefined list of rules for your ease, or you can select the Custom option to set the desired policy rules. The following explains what each rule offers:

1. **Weak**
Allows your consumers to set passwords from min length 6 to max length 20 with alphanumeric characters.

2 **Medium**
Allows your consumers to set passwords from min length 6 to max length 20 with at least 1 uppercase character, 1 special character and 1 digit required. Commonly used passwords will not be allowed to be set as passwords.

3. **Strong**
Allows your consumers to set passwords from min length 6 to max length 20 with at least 1 uppercase character, 1 special character and 1 digit required. Commonly used passwords, dictionary words, profile words will not be allowed to set as passwords. Also, the consumers cannot use the last 3 passwords again for their account.

4. **Very Strong**
Allows your consumers to set passwords from min length 6 to max length 20 with at least 1 uppercase character, 1 special character and 1 digit required. Commonly used passwords, dictionary words, profile words will not be allowed to set as passwords. Also, the consumers cannot use the last 3 passwords again and must change passwords each month.

## Setup Custom Password Policy

To set up a custom password policy ruleset, click anywhere on the Custom scale. The **Custom Password Policy** screen will appear:

![alt_text](/images/custom.png "image_tooltip")


Enter or select the following configuration details:

1.   **Password Validation**: The Password Validation allows you to set the length (6 to 32 ) and type of the password (alphabet, alphanumeric or Most used combination).

>   Note: Most used combinations contain at least 1 uppercase character, 1 special character, one number.

![alt_text](/images/password-type.png "image_tooltip")
       

2.  **Common Password Protection**: Common Password Protection enables you to prevent consumers from using common passwords. The list of [common passwords](/docs/developer/general/common-passwords/) is maintained by LoginRadius and gets updated regularly.

3.   **Profile Password Prevention**: Profile Password Prevention enables you to prevent your consumers from using the profile data for the account password. For example, the values of consumer profile fields like username, email id, first name, etc cannot be used as an account password.

4.   **Dictionary Password Prevention**: Dictionary Password Prevention enables you to prevent your consumers from setting the dictionary passwords. LoginRadius uses this dynamic [Password Dictionary](https://raw.githubusercontent.com/danielmiessler/SecLists/master/Passwords/Common-Credentials/10-million-password-list-top-1000000.txt) to avoid the use of dictionary passwords.

5.   **Password History**: You can configure the number of unique passwords a consumer must set before reusing an old password. This enables you to enhance security by ensuring that old passwords are not reused frequently.

6.   **Password Expiration**: You can set the password expiry configuration to request an updated password from your consumers periodically. This feature allows you to customize how often you want your consumers to reset their passwords.

---
title: "Localization"
tags: ["Language customization", "Localization"]
description: "This is a document detailing how to localize your website."
path: "/concepts/localization"
---

# Localization

This document takes you through the various ways in which LoginRadius can help you localize your website according to a country or region.

**This document will cover below topics:**

- [Form Contents Customization](#form-contents-customization)
- [Email and SMS Template Customization](#email-and-sms-template-customization)
- [Toggle between Multiple Languages](#toggle-between-multiple-languages)
- [Google Recaptcha Customization](#google-recaptcha-customization)

## Form Contents Customization

For language customization related to labels, placeholders, validation messages, and error messages, our JS library provides a hook for localization.

**Step 1**: A sample implementation using French is given below. This is meant to be a template that you can modify to use with your desired language and is not restricted to any language.

**Step 2**: Include your language file in a script tag on your web page.

```html
<script src= "js/french.js"></script>
```

Following is the code of `french.js`:

```JS
var french = {
    "labels": {                                                    // LoginRadius standard fields/labels Language handling
        "emailid": "Courriel",
        "password": "Mot de passe"
    },
    "placeholders": {                                             // LoginRadius placeholders language handling
        "emailid": "Entrez votre courriel.",
        "password": "Entrez votre mot de passe."
    },
    "validationMessages": [{                                     // LoginRadius validation messages language handling
            "rule": "required",
            "message": "Le champ %s est requis."
        },
        {
            "rule": "valid_email",
            "message": "Le champ %s doit contenir un courriel valide."
        }
    ],
    "errorMessages": [{                                         // LoginRadius error message language handling
            "code": 966,
            "message": "Le nom d'utilisateur et mot de passe sont incorrecte.",
            "description": "Le nom d'utilisateur et mot de passe sont incorrecte, veuillez s.v.p. entrer la bonne combinaison."
        },
        {
            "code": 967,
            "message": "Le format du Courriel n'est pas valide",
            "description": "Le format du Courriel n'est pas valide"
        },
        {
            "code": 901,
            "message": "Clé d'API n'est pas valide",
            "description": "La Clé d'API n'est pas valide ou n'est pas autorisé, veuillez vérifiez la Clé d'API pour votre compte LoginRadius."
        }
    ],
    "passwordMeterConfiguration": [{                           // LoginRadius  password strength meter language handling
            case: "worst",
            message: "#min_length Longueur requise",
            color: "Red"
        },
        {
            case: "bad",
            message: "Mal",
            color: "Red"
        },
        {
            case: "weak",
            message: "faible",
            color: "yellow"
        },
        {
            case: "good",
            message: "Bien",
            color: "Green"
        },
        {
            case: "strong",
            message: "Strong",
            color: "Green"
        },
        {
            case: "secure",
            message: "Secure",
            color: "Blue"
        }
    ],
    "buttonsName": {
        "login": "Connexion",
        "registration": "Enregistrement"
    }
}
```

The above code contains key-value pairs for labels, placeholders, validationMessages, etc. keys are properties, and values are objects/array of objects in your local language.

**Step 3**: In case of Identity Experience Framework, copy the code snippet of french.js and add it to the beginning of the **Before Script** file on the LoginRadius Dashboard (available in Advanced Editor), navigate to [Auth Page (IDX) Customization](https://dashboard.loginradius.com/auth-page#advanceEditor).

**Step 4**: Calling the Loginradius HOOK to set the local language and once you have provided the desired details, simply call this hook with the name of your locale object as a parameter before LRObject.init

```JS
LRObject.$hooks.call('setLocaleBasedInfo',french);
```

> **Note**: In case of custom labels or fields, language customization must be handled explicitly by using jQuery or javascript methods.

## Email and SMS Template Customization

When there is a need to localize emails and SMS, it is better to create separate templates for each language and name them accordingly. For example, if a template needs to be created for email verification in French, it should be named as email-verification-fr. And, if it is needed in German, it can be named as email-verification-de. If a template needs to be created for Welcome SMS in French, it should be named as welcome-sms-fr. It will be easier to differentiate and manage multiple email and SMS templates for multiple languages. If your website is displaying in French, then you need to pass the name of your French email and French SMS template (email-verification-fr) in your JavaScript Options Object using the commonOptions.verificationEmailTemplate option. You can use the code below, For example, on how you can select the email template in multiple languages.

```JS
var queryString = LRObject.util.parseQueryString(window.location.search.replace("?", ""));
if(queryString.language == 'french’){
commonOptions.verificationEmailTemplate = 'email-verification-fr';
commonOptions.smsTemplateWelcome = 'welcome-sms-fr';
}
else
{
commonOptions.verificationEmailTemplate = 'verification-default';
commonOptions.smsTemplateWelcome = 'welcome-default';

}
```

The `language` variable contains the name of the current language.

> **Note**: Above code should be added before initializing LRObject, i.e. `"var LRObject = new LoginRadiusV2(commonOptions);"`

### Common Options for Email Templates

| Email Template Name | Common option |
| --- | --- |
| Verification Email | verificationEmailTemplate (String) |
| Forgot password email/Password Reset Email | resetPasswordEmailTemplate (String) |
| Welcome Email | welcomeEmailTemplate (String) |
| Delete Account Email	deleteUserEmailTemplate(String)
| Add Email | addEmailTemplate(String) |
| One Touch Login | onetouchLoginEmailTemplate(String) |

### Common Option for SMS Templates

| SMS Template Name | Common option |
| ---  | --- |
| Phone Number Verification | smsTemplatePhoneVerification (String) |
| Phone Number Change | smsTemplateUpdatePhone (String) |
| Forgot Password | smsTemplateForgot (String) |
| Welcome SMS | smsTemplateWelcome (String) |
| One Touch Login | smsTemplateOneTouchLogin |

## Toggle between Multiple Languages

In the case of a **multilingual website** where the customer needs to switch between the languages to generate the form accordingly, create the **toggle** and on every switch you need to reload the page as given below and detect the language, based on language detected it will display the form in the respective language.

**Step 1**: Add the following Html code for toggle on your webpage

```HTML
<select name="lang_toggle" id="lang_toggle">
<option value>default</option>
<option value="/auth.aspx?lang=chinese">chinese</option>
</select>
```

**Step 2**: Add the following js code in the javascript file to parse language parameter from toggle to the URL:

```HTML
$('#lang_toggle').on('change', function() {
  var value = $(this).val();
window.location.href = value;
});
```

**Step 3**: Add the language objects modifying the labels in French and Chinese in the javascript. This is meant to be a template that you can modify to include placeholders, validation messages, and error messages in the local languages.

```JS
var french = {
    "labels": {
        "emailid": "Adresse Courriel",
        "password": "Mot de passe."
    },
}
var chinese = {
    "labels": {
        "emailid": "電子郵件",
        "password": "密碼"
    }
}
```

**Step 4**: Add the following code to set the language as per the query parameter

```JS
var queryString = LRObject.util.parseQueryString(window.location.search.replace("?", ""));
if (queryString.lang) {
 $('#lang_toggle').val("?lang=" + queryString.lang);
}
if (queryString.language == 'french') {
    LRObject.$hooks.call('setLocaleBasedInfo', french);
} else if (queryString.language == 'chinese') {
    LRObject.$hooks.call('setLocaleBasedInfo', chinese);
}
```

> **Note**: Make sure to call this hook after the `LRObject.init` method call.

## Google Recaptcha Customization

One can customize Google ReCaptcha as well based on localization.

- You need to use v2RecaptchaLanguage common option for localization, to get more details regarding common - options follow User Registration Getting Started document.

- You can find multiple languages code here, a sample implementation using the French language is given below.

```JS
var queryString = LRObject.util.parseQueryString(window.location.search.replace("?", ""));
if(queryString.language == 'french’){
commonOptions.v2RecaptchaLanguage  = ‘fr';
}
else
{
commonOptions.v2RecaptchaLanguage = 'en';
}
```

---
title: "Customizing Your Registration Schema"
tags: ["LoginRadiusV2.js", "JavaScript Library", "Registration Schema", "Registration Fields"]
description: "This is a document detailing registration schema customizations."
path: "/references/javascript-library/customizing-your-registration-schema"
---

<span class="devloper-premium plan-tag">Paid</span>

# Customizing Your Registration Schema

Your application follows a configured schema which populates the registration forms generated using the LoginRadius JavaScript Library (LoginRadiusV2.js). You are free to override this default configuration during the initialization of the JavaScript Library.

## Schema Format

A schema object is typically defined using the following format:

```js
{
  "type": "",
  "name": "",
  "display": "",
  "rules": ""
}
```

A schema object with type `option` is defined using the following format:

```js
{
  "type": "",
  "name": "",
  "display": "",
  "rules": "",
  "options": [
    {
      "text": "",
      "value": ""
    }
  ]
}
```

### type

The type of field to display. This key supports `string`, `password`, `multi`, `option`, `email` and `text` as possible values.

  * `string`: Displays the consumer's input normally.

  * `password`: Hides the consumer's input.

  * `multi`: Displays a checkbox.

  * `option`: Displays a dropdown select field. The `options` key is also required for an input of this type.

  * `email`: Displays an input of type email. This specifically creates an HTML input tag with the attribute `type` set to `email`. This will be automatically validated by supported browsers.

  * `text`: Displays an expandable textarea.

### name

The name of the field to be added. This links the data entered in the field to a supported attribute in your app's user object. This key supports `firstname`, `lastname` and `company`.

### display

The text to display for your field in the registration form. You can enter any value here.

### rules

The validation rules to be used for this field. Refer to the [Validation Rules](#validation-rules) section for more information.

### options

The array of options to provide as selectable to the consumer. This key is only applicable to schemas of type `option`, and is required.

  * `text`: The display text to be displayed to your consumer.

  * `value`: The value to be saved corresponding to the text your consumer selects.

## Adding Fields

As mentioned in the JavaScript Library <a href="https://www.loginradius.com/docs/developer/references/javascript-library/getting-started#registration" target="_blank">Getting Started</a> document, the registration schema objects are contained in the `LRObject.registrationFormSchema` array object.

You can add to the default schema by utilizing the <a href="https://www.loginradius.com/docs/developer/references/javascript-library/hooks#process-start-hook" target="_blank">Process Start Hook</a> for the `registrationSchema` event and concatenating additional schema objects to the `LRObject.registrationFormSchema` array object.

For example, here we are adding schemas utilizing the `company`, `firstname` and `lastname` data fields to `LRObject.registrationFormSchema`.

```javascript
  LRObject.$hooks.register("startProcess", function (name) {
    if (name === "registrationSchema") {
      LRObject.registrationFormSchema = LRObject.registrationFormSchema.concat([
        {
          "type": "string",
          "name": "company",
          "display": "Your Company Name",
          "rules": "min_length[1]|max_length[15]"
        },
        {
          "type": "string",
          "name": "firstname",
          "display": "Your First Name",
          "rules": "required|min_length[1]|max_length[32]"
        },
        {
          "type": "string",
          "name": "lastname",
          "display": "Your Last Name",
          "rules": "required|min_length[1]|max_length[32]"
        }
      ]);
    }
  });
```

## Validation Rules

You can define the rules that will validate your consumer's input for a given field by using the `rules` key in your schema object. These should be entered as a string. If multiple rules are required, they should be delimited with the `|` pipe character.

For example, in the following schema, we have defined the `firstname` field to validate that the consumer input contains only alphabetical characters, and has a minimum and maximum character length of 7 and 15 respectively:

```javascript
{
  "type": "string",
  "name": "firstname",
  "display": "Your First Name",
  "rules": "alpha|min_length[7]|max_length[15]"
}
```

Each supported rule and its corresponding regular expression that is used to validate input is provided below. If you wish to use your own regular expression to validate input, use the `custom_validation` rule.

Please note that the `|` pipe character is reserved to delimit rules within the `rules` key. If you are using the `custom_validation` rule, replace any uses of the `|` pipe character in your custom regular expression with `or`. 

For example, if your custom regex is defined as the following:
```
^[1-3]+$|^[5-9]+$
```

Your custom validation rule should be defined as the following:
```
custom_validation[^[1-3]+$or^[5-9]+$###your custom validation message]
```

| Rule | Regular Expression |
| :-- | --: |
| alpha | `/^[a-z]+$/i` |
| alpha\_dash | `/^[a-z0-9_\-]+$/i` |
| alpha\_numeric\_dash\_combo | `/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[-])[A-Za-z\d][A-Za-z\d-]+$/i` |
| alpha\_numeric | `/^[a-z0-9]+$/i` |
| alphanumeric\_combo  | `/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/` |
| decimal | `/^\-?[0-9]*\.?[0-9]+$/` |
| exact\_length | `No regex usage: exact_length[integer]` |
| greater\_than | `No regex usage: greater_than[integer]` |
| integer | `/^\-?[0-9]+$/` |
| is\_natural | `/^[0-9]+$/i` |
| is\_natural\_no\_zero | `/^[1-9][0-9]*$/i` |
| less\_than | `No regex usage: less_than[integer]` |
| matches | `No regex usage: matches[parameter-name]` |
| max\_length | `No regex usage: max_length[integer]` |
| min\_length | `No regex usage: min_length[integer]` |
| numeric | `/^[0-9]+$/` |
| required | `No regex` |
| valid\_base64 | `/[^a-zA-Z0-9\/\+=]/i` |
| valid\_ca\_zip | `/^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$/` |
| valid\_email | `/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/` |
| valid\_ip | `/^((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})$/i` |
| valid\_url | `/^((http|https):\/\/(\w+:{0,1}\w*@)?(\S+)|)(:[0-9]+)?(\/|\/([\w#!:.?+=&` |
| valid\_phoneno | `/^(\\+)|(9[976]\d|8[987530]\d|6[987]\d|5[90]\d|42\d|3[875]\d|2[98654321]\d|9[8543210]|8[6421]|6[6543210]|5[87654321]|4[987654310]|3[9643210]|2[70]|7|1)\d{1,14}$/` |
| valid\_credit\_card | `/^[\d\-\s]+$/` |
| custom\_validation | `Can be used to implement your custom regEx for any field. ### is the separator for the regEx and custom message. Usage: custom_validation[regEx###Custom-Message]` |
| callback\_valid\_date | `/^(0?[1-9]|1[012])[\/\-] (0?[1-9]|[12][0-9]|3[01])[\/\-]\d{4}$/` |

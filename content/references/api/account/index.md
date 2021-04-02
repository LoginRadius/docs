---
title: "Account API"
tags: ["Account API"]
description: "This is a document detailing the LoginRadius Account APIs."
path: "/references/api/account"
---

# Account API

## Account Create

  Creates a new consumer. This will bypass the normal email verification process.

  > Note: All mandatory fields must be included when creating a new consumer.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/manage/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |Email|boolean type value, default is true
  |FirstName|user's first name
  |LastName|user's last name
  |Password|Password for the email | Model Class containing Definition of payload for Account Create API [**Required**] 

## Forgot Password Token

  Generates a Forgot Password token for the specified Email ID. This can optionally send a Forgot Password email to the consumer.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/manage/account/forgot/token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | ResetPasswordUrl | none | Url to which user should get re-directed to for resetting the password [**Optional**] |
  | SendEmail | none | If set to true, the API will also send a Forgot Password email to the customer, bypassing any Bot Protection challenges that they are faced with. [**Optional**] |

## Email Verification Token

  Generates an Email Verification token for the specified Email ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/manage/account/verify/token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

## Account Profile by Email

  Retrieves consumer profile data corresponding to the specified Email ID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Email | none | Email of the user [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

## Account Profile by Phone ID

  Retrieves consumer profile data corresponding to the specified Phone ID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Phone | none | The Registered Phone Number [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

## Account Profile by UID

  Retrieves consumer profile data corresponding to the specified UID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/{uid}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

## Account Password

  Retrieves hashed password for the consumer corresponding to the specified UID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/{uid}/password`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

## Access Token by UID

  Gets a LoginRadius access token corresponding to the specified UID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/access_token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Uid | none | UID, the unified identifier for each user account [**Required**] |

## Account Identities by Email

  Retrieves all consumer identities corresponding to the specified Email.

  > Note: This is intended for specific workflows where an email may correspond with multiple UIDs.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/identities`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Email | none | Email of the user [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

## Account Update

  Updates profile information of the consumer profile corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | NullSupport | none | Boolean, pass true if you wish to update any user profile field with a NULL value, You can get the details [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |FirstName|user's first name
  |LastName|user's last name | Model Class containing Definition of payload for Account Update API [**Required**]

## Update Phone ID by UID

  Updates Phone ID for the consumer corresponding to the specified UID. You can update the Phone ID for both verified and unverified consumers. This will directly replace their Phone ID, bypassing the OTP verification process.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/PhoneId`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

## Account Set Password

  Sets password for the consumer corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/password`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

## Account Invalidate Verification Email

  Invalidates Email ID verification status for the consumer corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/invalidateEmail`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

## Reset Phone ID Verification

  Resets Phone ID verification for the consumer corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/invalidatePhone`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

## Upsert Email

  Adds/Upserts emails for the consumer corresponding to the specified UID by email type. If the email type specified already exists, the existing email value will be updated. Otherwise, a new email record will be added into the account's email array.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |Email|user's email | Model Class containing Definition of payload for UpsertEmail Property [**Required**]

## Update UID

  Updates consumer's UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/uid`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Key [**Required**] |
  | Uid | none | UID, the unified identifier for each user account [**Required**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |NewUid|New Uid | Payload containing Update UID [**Required**] 

## Account Delete

  Deletes consumer corresponding to the specified UID from your app. They will be able to re-register for a new account.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}`


  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

## Account Remove Email

  Removes given email from the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}/email`


  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

## Delete User Profile by Email

  Deletes consumer corresponding to the specified Email.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Email | none | Email of the user [**Required**] |

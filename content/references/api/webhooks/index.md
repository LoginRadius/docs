---
title: "Webhooks API"
tags: ["Webhooks API"]
description: "This is a document detailing the LoginRadius Webhooks APIs."
path: "/references/api/webhooks"
---

# Webhooks API

## Webhook Subscribe

  Configures a webhook on your LoginRadius app.

  ### Endpoint
  `POST` `https://api.loginradius.com/api/v2/webhook`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |Event|Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject|
  |TargetUrl|URL where trigger will send data when it invoke | Model Class containing Definition of payload for Webhook Subscribe API [**Required**] |

## Webhook Subscribed URLs

  Fetches all subscribed URLs for a particular event.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/webhook`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | event | none | Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject [**Required**] |
 
## Webhook Test

  Tests a subscribed webhook.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/webhook/test`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
 
## Webhook Unsubscribe

  Unsubscribes a webhook configured on your LoginRadius app.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/api/v2/webhook`

  ### Query Parameters
  | Parameter    | Default | Description |
  | ------------ | ------- | -------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Description 
  | ------------ | ------- | -------------------------------------------------------------------------------- | 
  |Event|Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject |
  |TargetUrl|URL where trigger will send data when it invoke | Model Class containing Definition of payload for Webhook Subscribe API [**Required**] |

[Go Back to Home Page](/)

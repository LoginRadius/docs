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
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |Event|string|Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject|
  |TargetUrl|string|URL where trigger will send data when it invoke | Model Class containing Definition of payload for Webhook Subscribe API [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="webhook-subscribe" endpoint="https://api.loginradius.com/api/v2/webhook" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"targeturl":"","event":""}}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Webhook Subscribed URLs

  Fetches all subscribed URLs for a particular event.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/webhook`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | event | none | Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="webhook-subscribed-urls" endpoint="https://api.loginradius.com/api/v2/webhook" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"event"}]}' sampleresponse='{ "data": [ { "TargetUrl": "https://xxxx.abc.com/acjhgj/gkgkj", "Event": "AssignRoles" }, { "TargetUrl": "https://xxxx.abc.com/kjnplatfhjhjorhjhgm-confihgjghguratihjon/stjyxxxndardn", "Event": "AssignRoles" } ], "Count": 2 }'></try-me-out>
 
## Webhook Test

  Tests a subscribed webhook.

  ### Endpoint
  `GET` `https://api.loginradius.com/api/v2/webhook/test`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="webhook-test" endpoint="https://api.loginradius.com/api/v2/webhook/test" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}' sampleresponse='{ "IsAllowed": true }'></try-me-out>
 
## Webhook Unsubscribe

  Unsubscribes a webhook configured on your LoginRadius app.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/api/v2/webhook`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |Event|string|Allowed events: Login, Register, UpdateProfile, ResetPassword, ChangePassword, emailVerification, AddEmail, RemoveEmail, BlockAccount, DeleteAccount, SetUsername, AssignRoles, UnassignRoles, SetPassword, LinkAccount, UnlinkAccount, UpdatePhoneId, VerifyPhoneNumber, CreateCustomObject, UpdateCustomobject, DeleteCustomObject |
  |TargetUrl|string|URL where trigger will send data when it invoke | Model Class containing Definition of payload for Webhook Subscribe API [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="webhook-unsubscribe" endpoint="https://api.loginradius.com/api/v2/webhook" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"targeturl":"","event":""}}' sampleresponse='{ "IsDeleted": true }'></try-me-out>

[Go Back to Home Page](/)

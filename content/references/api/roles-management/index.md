---
title: "Roles Management API"
tags: ["Roles Management API"]
description: "This is a document detailing the LoginRadius Roles Management APIs."
path: "/references/api/roles-management"
---

# Roles Management API

## Roles Create

  Creates a Role with Permissions.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/manage/role`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |Roles|Array of Role objects | Model Class containing Definition of payload for Roles API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="roles-create" endpoint="https://api.loginradius.com/identity/v2/manage/role" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"roles":[{"name":"role_name","permissions":{"permission_name1":true,"permission_name2":true}}]}}' sampleresponse='{ "data": [ { "Name": "SubAdministrator", "Permissions": { "Edit": true, "CreateUser": true, "DeleteUser": true } } ], "Count": 1 }'></try-me-out>
 
## Roles by UID

  Retrieves all assigned Roles of the consumer corresponding to the specified UID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/{uid}/role`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="roles-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/role" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}]}' sampleresponse='{ "Roles": [ "Editor" ] }'></try-me-out>
 
## Get Context with Roles and Permissions

  Retrieves configured Role Contexts and its associated Roles and Permissions.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="get-context-with-roles-and-permissions" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}]}' sampleresponse='{ "Data": [ { "Context": "Home", "Roles": [ "SubAdministrator", "Administrator" ], "AdditionalPermissions": [ "X", "Y", "Z" ], "Expiration": "2018-07-15T08:30:08Z" }, { "Context": "Work", "Roles": [ "Editor" ], "AdditionalPermissions": [ "X", "Y", "Z" ], "Expiration": "2018-07-15T08:30:08Z" } ] }'></try-me-out>
 
## Role Context Profile

  Retrieves a Role Context by its name.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/roleContext/{contextName}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="get-context-with-roles-and-permissions" endpoint="https://api.loginradius.com/identity/v2/manage/account/roleContext/{contextName}" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"contextName"}]}' sampleresponse='{ "Data": [ { "RoleContext": { "Roles": [ "Marketing" ], "AdditionalPermissions": [ "ApiAccess" ], "Expiration": null }, "Uid": "29b1bf77a7exxxxxxxxxxxx002699f38ab", "LastLoginDate": "2018-12-21T10:06:04.9690000Z", "FullName": "Lucile Turner", "Email": [ { "Type": "Primary", "Value": "lucile.turner@example.com" } ], "ImageUrl": "https://lh3.googleusercontent.com/-Y_J3VCQOgrI/AAAAAAAAAAI/AAAAAAAAAAA/IgpyZta5ccw/photo.jpg" } ] }'></try-me-out>
 
## Roles List

  Retrieves all Roles with Permissions configured in your app.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/role`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="roles-list" endpoint="https://api.loginradius.com/identity/v2/manage/role" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}' sampleresponse='{ "data": [ { "Name": "Sub Administrator", "Permissions": { "Edit": true, "Create user": true, "Delete user": true } }, { "Name": "Administrator", "Permissions": { "AddUser": true, "DeleteUser": true, "EditUser": true } }, { "Name": "Editor", "Permissions": { "abc": true, "xyz": true, "lmn": true } } ], "Count": 3 }'></try-me-out>
 
## Assign Roles by UID

  Assigns specified Roles to the consumer corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/role`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |Roles|Array of string|The strings represent the role names | Model Class containing Definition of payload for Create Role API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="assign-roles-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/role" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"contextName"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"roles":["role_name"]}}' sampleresponse='{ "Roles": [ "Editor" ] }'></try-me-out>
 
## Upsert Context

  Creates a Role Context with a set of Roles.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |RoleContext|Array of RoleContext object| Model Class containing Definition of RoleContext payload [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="upsert-context" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"rolecontext":[{"context":"exampleContext","roles":["role1"],"additionalpermissions":["additionalpermission1"],"expiration":"07/15/2018 8:30:08 AM"}]}}' sampleresponse='{ "Data": [ { "Context": "Home", "Roles": [ "SubAdministrator", "Administrator" ], "AdditionalPermissions": [ "X", "Y", "Z" ], "Expiration": "2018-07-15T08:30:08Z" }, { "Context": "Work", "Roles": [ "Editor" ], "AdditionalPermissions": [ "X", "Y", "Z" ], "Expiration": "2018-07-15T08:30:08Z" } ] }'></try-me-out>

## Add Permissions to Role

  Adds specified Permissions to a Role.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/role/{role}/permission`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |Permissions|object|Any Permission name for the role | Model Class containing Definition for PermissionsModel Property [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="add-permissions-to-role" endpoint="https://api.loginradius.com/identity/v2/manage/role/{role}/permission" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"role"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"permissions":["permission_name1","permission_name2"]}}' sampleresponse='{ "Name": "Editor", "Permissions": { "abc": true, "xyz": true, "lmn": true, "Edit": true, "ABC": true } }'></try-me-out>

## Unassign Roles by UID

  Unassigns Roles from the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}/role`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |Roles | Array of string | Strings represent the role names | Model Class containing Definition of payload for Create Role API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="unassign-roles-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/role" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"roles":["role_name1","role_name2"]}}' sampleresponse='{ "IsDeleted": true }'></try-me-out>
 
## Delete Role Context

  Deletes a specified Role Context from the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="delete-role-context" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"},{"key":"contextName"}]}' sampleresponse='{ "IsDeleted": true }'></try-me-out>
 
## Delete Role from Context

  Deletes a specified Role from Role Context of the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}/role`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |Roles|Array of string| Strings represent the role names | Model Class containing Definition of payload for RoleContextRemoveRole API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="delete-role-from-context" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}/role" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"},{"key":"contextName"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"roles":["role_name1"]}}' sampleresponse='{ "IsDeleted": true }'></try-me-out>
 
## Delete Additional Permission from Context

  Deletes Additional Permissions from Role Context of the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}/additionalPermission`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |AdditionalPermissions|Array of string| Strings represent the additional permissions | Model Class containing Definition of payload for RoleContextAdditionalPermissionRemoveRole API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="delete-additional-permission-from-context" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}/additionalPermission" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"},{"key":"contextName"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"additionalpermissions":["additionalpermission1"]}}' sampleresponse='{ "IsDeleted": true }'></try-me-out>
 
## Account Delete Role

  Deletes a specified Role.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/role/{role}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-delete-role" endpoint="https://api.loginradius.com/identity/v2/manage/role/{role}" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"role"}]}' sampleresponse='{ "IsDeleted": true }'></try-me-out>
 
## Remove Permissions

  Removes permissions from a specified Role.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/role/{role}/permission`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Body Attributes
  | Attribute | Type | Description 
  | :------------ | :------- | :------- | :-------------------------------------------------------------------------------- | 
  |Permissions|object|Any Permission name for the role | Model Class containing Definition for PermissionsModel Property [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="remove-permissions" endpoint="https://api.loginradius.com/identity/v2/manage/role/{role}/permission" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"role"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"permissions":["permission_name1"]}}' sampleresponse='{ "Name": "Editor", "Permissions": { "xyz": true, "lmn": true, "ABC": true } }'></try-me-out>

[Go Back to Home Page](/)

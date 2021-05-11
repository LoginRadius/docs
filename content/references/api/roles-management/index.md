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
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Roles|Array of Role objects | Model Class containing Definition of payload for Roles API [**Required**]

  ### Try Me Out
  <try-me-out id="roles-create" endpoint="https://api.loginradius.com/identity/v2/manage/role" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"roles":[{"name":"role_name","permissions":{"permission_name1":true,"permission_name2":true}}]}}'></try-me-out>
 
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
  <try-me-out id="roles-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/role" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}]}'></try-me-out>
 
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
  <try-me-out id="get-context-with-roles-and-permissions" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}]}'></try-me-out>
 
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
  <try-me-out id="get-context-with-roles-and-permissions" endpoint="https://api.loginradius.com/identity/v2/manage/account/roleContext/{contextName}" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"contextName"}]}'></try-me-out>
 
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
  <try-me-out id="roles-list" endpoint="https://api.loginradius.com/identity/v2/manage/role" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}'></try-me-out>
 
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
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Roles|Array of String, which represents the role name | Model Class containing Definition of payload for Create Role API [**Required**]

  ### Try Me Out
  <try-me-out id="assign-roles-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/role" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"contextName"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"roles":["role_name"]}}'></try-me-out>
 
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
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |RoleContext|Array of RoleContext object, see body tab for structure | Model Class containing Definition of RoleContext payload [**Required**]

  ### Try Me Out
  <try-me-out id="upsert-context" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"rolecontext":[{"context":"exampleContext","roles":["role1"],"additionalpermissions":["additionalpermission1"],"expiration":"07/15/2018 8:30:08 AM"}]}}'></try-me-out>

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
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Permissions|Any Permission name for the role | Model Class containing Definition for PermissionsModel Property [**Required**]

  ### Try Me Out
  <try-me-out id="add-permissions-to-role" endpoint="https://api.loginradius.com/identity/v2/manage/role/{role}/permission" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"role"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"permissions":["permission_name1","permission_name2"]}}'></try-me-out>

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
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Roles|Array of String, which represents the role name | Model Class containing Definition of payload for Create Role API [**Required**]

  ### Try Me Out
  <try-me-out id="unassign-roles-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/role" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"roles":["role_name1","role_name2"]}}'></try-me-out>
 
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
  <try-me-out id="delete-role-context" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"},{"key":"contextName"}]}'></try-me-out>
 
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
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Roles|Array of String, which represents the role name | Model Class containing Definition of payload for RoleContextRemoveRole API [**Required**]

  ### Try Me Out
  <try-me-out id="delete-role-from-context" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}/role" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"},{"key":"contextName"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"roles":["role_name1"]}}'></try-me-out>
 
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
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |AdditionalPermissions|Array of String, which represents the additional permissions | Model Class containing Definition of payload for RoleContextAdditionalPermissionRemoveRole API [**Required**]

  ### Try Me Out
  <try-me-out id="delete-additional-permission-from-context" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}/additionalPermission" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"},{"key":"contextName"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"additionalpermissions":["additionalpermission1"]}}'></try-me-out>
 
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
  <try-me-out id="account-delete-role" endpoint="https://api.loginradius.com/identity/v2/manage/role/{role}" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"role"}]}'></try-me-out>
 
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
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Permissions|Any Permission name for the role | Model Class containing Definition for PermissionsModel Property [**Required**]

  ### Try Me Out
  <try-me-out id="remove-permissions" endpoint="https://api.loginradius.com/identity/v2/manage/role/{role}/permission" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"role"}]},"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"permissions":["permission_name1"]}'></try-me-out>

[Go Back to Home Page](/)

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
  |Roles|Array of String, which represents the role name | Model Class containing Definition of payload for Roles API [**Required**] 
 
## Roles by UID

  Retrieves all assigned Roles of the consumer corresponding to the specified UID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/{uid}/role`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
 
## Get Context with Roles and Permissions

  Retrieves configured Role Contexts and its associated Roles and Permissions.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
 
## Role Context Profile

  Retrieves a Role Context by its name.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/roleContext/{contextName}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
 
## Roles List

  Retrieves all Roles with Permissions configured in your app.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/role`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
 
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
 
## Delete Role Context

  Deletes a specified Role Context from the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}/roleContext/{contextName}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
 
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
 
## Account Delete Role

  Deletes a specified Role.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/role/{role}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
 
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

[Go Back to Home Page](/)

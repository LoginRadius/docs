---
title: JWT code
description: Addition to user registration systems is the ability to define roles for your users and restrict access to portions of your site based on user permissions.
path: "/references/api/jwt"
---


# JWT code

## JWT Token

Use this API to get JWT token by access token.

HTTP Request

GET
https://api.loginradius.com/sso/jwt/api/token


### Query Parameters


| Name      | Type      | Default   | Description   |
|---        |---        |---        |---            |
| apikey    |  String       |  none         |   LoginRadius API Key [REQUIRED]          |
| access_token          |String         | none  | Token generated from a successful oauth from social platform [REQUIRED]               |
| jwtapp        |  String       | none          | JWT App Name [Required]           |   

The following displays the sample  response body code:

```
{
    "signature": "vZ2lucmFkaXVzLmNvbSIsImlhdCI6MTUxMTkyOTgyNy**********NTExOTI5ODI3LCJleHAiOjE1MTE5"
}

```


### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)






## JWT Token by Username

Use this API to get JWT token by access token by Username.

HTTP Request

POST
https://api.loginradius.com/sso/jwt/api/login


### Query Parameters


| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
| apikey    |  String     |  none         |   LoginRadius API Key [REQUIRED]          |
| verificationurl       |String         | none  | Verification URL              |
| jwtapp      |  String       | none        | JWT App Name [Required]           |  
|loginurl       |String         |   none            |    Login URL              | 
|emailtemplate  |String         | none              |Email template Name        |

### Body Parameters


| Name    | Type    | Default   | Description   |
|---      |---      |---      |---          |
|username   |  String     |  none         |   User's registered username [REQUIRED]         |
| password      |String         | none  | User's password[REQUIRED]             |

This is what response sample code looks like:

```
{
  "signature": "NTExOTI5ODI3LCJleHAiOjE1MTE5*********.*74bizmpE47oJJmqN00Pzcm******VE5kXzCTkc****"
}

```

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)




## JWT Token by Email

Use this API to get JWT token by access token by email

HTTP Request

POST
https://api.loginradius.com/sso/jwt/api/login


### Query Parameters


| Name   | Type   | Default   | Description     |
|---      |---     |---     |---         |
| apikey    |  String       |  none          |   LoginRadius API Key [REQUIRED]          |
| jwtapp        |  String      | none         | JWT App Name [Required]         |
| verificationurl        |String        | none  | Verification URL              |
|loginurl       |String         |   none            |    Login URL              | 
|emailtemplate  |String         | none              |Email template Name        |

### Body Parameters


| Name   | Type   | Default   | Description     |
|---      |---     |---     |---         |
| email  |  String       |  none          |   User's registered email address [REQUIRED]       |
| password      |String        | none  | User's password[REQUIRED]              |

This is what response sample code looks like:

```
{
   "signature": "vZ2lucmFkaXVzLmNvbSIsImlhdCI6MTUxMTkyOTgyNy**********NTExOTI5ODI3LCJleHAiOjE1MTE5"
}

```

### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)




## JWT Token by Phone

Use this API to get JWT token by access token by Phone

HTTP Request

POST
https://api.loginradius.com/sso/jwt/api/login


### Query Parameters


| Name      | Type      | Default   | Description   |
|---        |---        |---        |---            |
| apikey    |  String       |  none         |   LoginRadius API Key [REQUIRED]          |
| jwtapp        |  String       | none          | JWT App Name [Required]        |
| verificationurl       |String         | none  | Verification URL              |
|loginurl       |String         |   none            |    Login URL              | 
|emailtemplate  |String         | none              |Email template Name        |

### Body Parameters


| Name      | Type      | Default   | Description   |
|---        |---        |---        |---            |
| phone     |  String       |  none         |   User's registered phone number [REQUIRED]       |
| password      |String         | none  | User's password[REQUIRED]             |

This is what response sample code looks like:

```
{
    "signature": "vZ2lucmFkaXVzLmNvbSIsImlhdCI6MTUxMTkyOTgyNy**********NTExOTI5ODI3LCJleHAiOjE1MTE5"
}

```
### Remarks

#### Error Codes

More Details : [SSO API Error Codes](#)


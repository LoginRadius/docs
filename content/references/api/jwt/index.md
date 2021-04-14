---
title: JWT code
description: Addition to user registration systems is the ability to define roles for your users and restrict access to portions of your site based on user permissions.
path: "/references/api/jwt"
---


# JWT 

## JWT Token by Username

Use this API to get JWT token by access token by Username.

### Endpoint

`POST` `https://api.loginradius.com/sso/jwt/api/login`

### Query Parameters


| Name      | Type  | Description   |
|:---        |:---               |:---            |
| apikey    |  String               |   LoginRadius API Key [REQUIRED]          |
| access_token          |String          | Token generated from a successful oauth from social platform [REQUIRED]               |
| jwtapp        |  String                | JWT App Name [Required]           |   



### Body Parameters


| Name    | Type    | Default   | Description   |
|:---      |:---      |:---      |:---          |
|username   |  String     |  none         |   User's registered username [REQUIRED]         |
| password      |String         | none  | User's password[REQUIRED]             |


This is sample API call :

- **Ruby**

```ruby

require 'uri'
require 'net/http'
url = URI('https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate=')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = false
request = Net::HTTP::Post.new(url)
request.body = "{\n  \"username\": \"\",\n  \"password\": \"\"\n}"
request['content-Type'] = 'application/json'
response = http.request(request)
puts response.read_body



```

- **Python**

```python

import requests

url = "https://cloud-api.loginradius.com/sso/jwt/api/login"
querystring = {"apikey":"","jwtapp":"","verificationurl":"","loginurl":"","emailtemplate":""}
payload = "{\n  \"username\": \"\",\n  \"password\": \"\"\n}"
headers = {
    'content-Type': 'application/json',
}
response = requests.request("POST", url, data=payload, headers=headers, params=querystring)
print(response.text)



``` 

- **Shell**

```shell
wget --quiet \
    --method POST \
    --header 'content-Type: application/json' \
    --body-data "{\n  \"username\": \"\",\n  \"password\": \"\"\n}" \
    --output-document \
    - 'https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate='



```

- **Javascript**

```javascript

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate=",
    "method": "POST",
    "headers": {
"content-Type" : "application/json",
},
    "data": "{\n  \"username\": \"\",\n  \"password\": \"\"\n}"
}
$.ajax(settings).done(function (response) {
    console.log(response);
});


```
> This is sample request body code :

```json

{
  "apikey": "********-****-****-*****************",
  "jwtapp": "dev-dummy-app",
  "access_token": "********-****-****-*****************",
  
}

```

> This is what response sample code looks like:

```
{
  "signature": "NTExOTI5ODI3LCJleHAiOjE1MTE5*********.*74bizmpE47oJJmqN00Pzcm******VE5kXzCTkc****"
}

```


## JWT Token by Email



Use this API to get JWT token by access token by email

### Endpoint

`POST` `https://api.loginradius.com/sso/jwt/api/login`


### Query Parameters


| Name   | Type     | Description     |
|:---      |:---         |:---         |
| apikey    |  String                |   LoginRadius API Key [REQUIRED]          |
| jwtapp        |  String              | JWT App Name [Required]         |
| verificationurl        |String         | Verification URL              |
|loginurl       |String                     |    Login URL              | 
|emailtemplate  |String                      |Email template Name        |

### Body Parameters


| Name   | Type   | Description     |
|:---      |:---         |:---         |
| email  |  String                |   User's registered email address [REQUIRED]       |
| password      |String         | User's password[REQUIRED]              |

This is sample API code:

- **Ruby**

```ruby
require 'uri'
require 'net/http'
url = URI('https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate=')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = false
request = Net::HTTP::Post.new(url)
request.body = "{\n  \"email\": \"\",\n  \"password\": \"\"\n}"
request['content-Type'] = 'application/json'
response = http.request(request)
puts response.read_body



```

- **Shell**

```shell

wget --quiet \
    --method POST \
    --header 'content-Type: application/json' \
    --body-data "{\n  \"email\": \"\",\n  \"password\": \"\"\n}" \
    --output-document \
    - 'https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate='



```

- **Python**

```python

import requests

url = "https://cloud-api.loginradius.com/sso/jwt/api/login"
querystring = {"apikey":"","jwtapp":"","verificationurl":"","loginurl":"","emailtemplate":""}
payload = "{\n  \"email\": \"\",\n  \"password\": \"\"\n}"
headers = {
    'content-Type': 'application/json',
}
response = requests.request("POST", url, data=payload, headers=headers, params=querystring)
print(response.text)



```

- **Javascript**

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate=",
    "method": "POST",
    "headers": {
"content-Type" : "application/json",
},
    "data": "{\n  \"email\": \"\",\n  \"password\": \"\"\n}"
}
$.ajax(settings).done(function (response) {
    console.log(response);
});


``` 

> This is sample request body code :

```json

{
  "apikey": "********-****-****-*****************",
  "jwtapp": "dev-dummy-app",
  "access_token": "********-****-****-*****************",
  
}

```

> This is what response sample code looks like:

```
{
   "signature": "vZ2lucmFkaXVzLmNvbSIsImlhdCI6MTUxMTkyOTgyNy**********NTExOTI5ODI3LCJleHAiOjE1MTE5"
}

```

## JWT Token by Phone

Use this API to get JWT token by access token by Phone

### Endpoint

`POST` `https://api.loginradius.com/sso/jwt/api/login`

### Query Parameters


| Name      | Type  | Description   |
|:---        |:---              |:---            |
| apikey    |  String               |   LoginRadius API Key [REQUIRED]          |
| jwtapp        |  String                | JWT App Name [Required]        |
| verificationurl       |String          | Verification URL              |
|loginurl       |String                     |    Login URL              | 
|emailtemplate  |String                      |Email template Name        |


### Body Parameters

| Name      | Type  | Description   |
|:---        |:---            |:---            |
| phone     |  String               |   User's registered phone number [REQUIRED]       |
| password      |String          | User's password[REQUIRED]             |

This is sample API code:

- **Ruby**

```ruby
require 'uri'
require 'net/http'
url = URI('https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate=')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = false
request = Net::HTTP::Post.new(url)
request.body = "{\n  \"phone\": \"\",\n  \"password\": \"\"\n}"
request['content-Type'] = 'application/json'
response = http.request(request)
puts response.read_body


```

- **Python**

```python
import requests

url = "https://cloud-api.loginradius.com/sso/jwt/api/login"
querystring = {"apikey":"","jwtapp":"","verificationurl":"","loginurl":"","emailtemplate":""}
payload = "{\n  \"phone\": \"\",\n  \"password\": \"\"\n}"
headers = {
    'content-Type': 'application/json',
}
response = requests.request("POST", url, data=payload, headers=headers, params=querystring)
print(response.text)


```

- **Shell**

```shell

wget --quiet \
    --method POST \
    --header 'content-Type: application/json' \
    --body-data "{\n  \"phone\": \"\",\n  \"password\": \"\"\n}" \
    --output-document \
    - 'https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate='


```

- **Javascript**

```javascript

var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cloud-api.loginradius.com/sso/jwt/api/login?apikey=&jwtapp=&verificationurl=&loginurl=&emailtemplate=",
    "method": "POST",
    "headers": {
"content-Type" : "application/json",
},
    "data": "{\n  \"phone\": \"\",\n  \"password\": \"\"\n}"
}
$.ajax(settings).done(function (response) {
    console.log(response);
});


```


>This is sample request code:

```json

 {
    "apikey": "********-****-****-*****************",
    "jwtapp": "<app name>",
    "verificationurl": "<verification-url>",
    "loginurl": "<login url>",
    "emailtemplate": "<template name>"
  }
  
```


> This is what response sample code looks like:

```
{
    "signature": "vZ2lucmFkaXVzLmNvbSIsImlhdCI6MTUxMTkyOTgyNy**********NTExOTI5ODI3LCJleHAiOjE1MTE5"
}

```


## JWT Token

Use this API to get JWT token by access token.

### Endpoint

`GET` `https://api.loginradius.com/sso/jwt/api/token`

### Query Parameters


| Name      | Type      | Default   | Description   |
|:---        |:---        |:---        |:---            |
| apikey    |  String       |  none         |   LoginRadius API Key [REQUIRED]          |
| access_token          |String         | none  | Token generated from a successful oauth from social platform [REQUIRED]               |
| jwtapp        |  String       | none          | JWT App Name [Required]           |   


This is sample API code:

- **Ruby**

```ruby

require 'uri'
require 'net/http'
url = URI('https://cloud-api.loginradius.com/sso/jwt/api/token?apikey=&jwtapp=&access_token=')
http = Net::HTTP.new(url.host, url.port)
http.use_ssl = true
http.verify_mode = false
request = Net::HTTP::Get.new(url)
request['content-Type'] = 'application/x-www-form-urlencoded'
response = http.request(request)
puts response.read_body



```

- **Python**

```python

import requests

url = "https://cloud-api.loginradius.com/sso/jwt/api/token"
querystring = {"apikey":"","jwtapp":""}
headers = {
    'content-Type': 'application/x-www-form-urlencoded',
}
response = requests.request("GET", url, headers=headers, params=querystring)
print(response.text)



```
- **Shell** 

```shell
wget --quiet \
    --method GET \
    --header 'content-Type: application/x-www-form-urlencoded' \
    --output-document \
    - 'https://cloud-api.loginradius.com/sso/jwt/api/token?apikey=&jwtapp=&access_token='


```

- **Javascript**

```javascript
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://cloud-api.loginradius.com/sso/jwt/api/token?apikey=&jwtapp=&access_token=",
    "method": "GET",
    "headers": {
"content-Type" : "application/x-www-form-urlencoded",
},
}
$.ajax(settings).done(function (response) {
    console.log(response);
});



```


> This is sample request body code :

```json

{
    "apikey": "********-****-****-*****************",
    "jwtapp": "dev-dummy-app",
    "access_token": "********-****-****-*****************",
    
}

```

> The following displays the sample  response body code:

```
{
    "signature": "vZ2lucmFkaXVzLmNvbSIsImlhdCI6MTUxMTkyOTgyNy**********NTExOTI5ODI3LCJleHAiOjE1MTE5"
}

```


[Go Back to Home Page](/)

---
title: "B2B Identity API"
tags: ["B2B Identity API"]
description: "This is a document detailing the LoginRadius B2B Identity APIs."
path: "/references/api/b2b-identity"
---

# B2B Identity Managment API

## Create Organization

This API is used to create an organization

### Endpoint

`POST` `https://api.loginradius.com/identity/v2/manage/organizations`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |

### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|Name| Name of the Organization  [**Required**]|
|OwnerUid| Uid of the Owner [**Required**]|
|DisplayName| A Display name of the organization  [**Opitonal**]

### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="create-org" endpoint="https://api.loginradius.com/identity/v2/manage/organizations" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"body":{"Name":"","DisplayName":"","OwnerUid":""}}'></try-me-out>

## Update Organization

This API is used to update an organization

### Endpoint

`PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{id}`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|Name| Name of the Organization  [**Required**]|
|DisplayName| A Display name of the organization  [**Opitonal**]


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="update-org" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Name":"","DisplayName":""}}'></try-me-out>

## Remove Organization

This API is used to remove an organization

### Endpoint

`DELETE` `https://api.loginradius.com/identity/v2/manage/organizations/{id}`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="remove-org" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}'></try-me-out>

## Organization by Id

This API is used to get an organization.

### Endpoint

`GET` `https://api.loginradius.com/identity/v2/manage/organizations/{id}`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="get-org-id" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}'></try-me-out>

## Organization By Organization Name

This API is used to get an organization by organization name.

### Endpoint

`GET` `https://api.loginradius.com/identity/v2/manage/organizations/name/{org_name}`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="get-org-name" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/name/{org_name}" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}'></try-me-out>

## All Organizations

This API is used to get all organizations.

### Endpoint

`GET` `https://api.loginradius.com/identity/v2/manage/organizations`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="get-all-org" endpoint="https://api.loginradius.com/identity/v2/manage/organizations" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}'></try-me-out>

## Update Status of Organization

This API is used to update the status of an organization.

### Endpoint

`PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{id}/status`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|IsActive| Update the status either true/false  [**Required**]|


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="update-org-status" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}/status" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"IsActive":true}}'></try-me-out>

## Add/Update Roles

This API is used to update an organization's default roles

### Endpoint

`PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{id}/defaultroles`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|DefaultRoles| Array of Default roles which needs to be assigned to Organization Users|

### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="update-org-status" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}/defaultroles" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"DefaultRoles":["Developer","ProductOwner"]}}'></try-me-out>

## Add user to Organization

This API is used to add users to the organization.

### Endpoint

`POST` `https://api.loginradius.com/identity/v2/manage/organizations/{id}/members`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |
| emailtemplate | ADDUSERTOORGANIZATION | Email Template Name [**Optional**] |
| resetPasswordUrl | https://&lt;AppName&gt;.&lt;Domain&gt;/auth | Url used to reset the password by the user [**Optional**] |
| loginUrl | https://&lt;AppName&gt;.&lt;Domain&gt;/auth?org_name=&lt;orgName&gt; | Url used to login to the organization [**Optional**] | 


### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|Email|An Email of the added User [**Required**]|
|FirstName|User's first name [**Optional**]|
|LastName|User's last name [**Opitonal**]


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="add-org-members" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}/members" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"emailtemplate","default":"ADDUSERTOORGANIZATION"},{"key":"resetPasswordUrl","default":"https://<AppName>.<Domain>/auth"},{"key":"loginUrl","default":"https://<AppName>.<Domain>/auth?org_name=<orgName>"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Name":"","DisplayName":"","OwnerUid":""}}'></try-me-out>

## Organization Members

This API is used to get organization members.

### Endpoint

`GET` `https://api.loginradius.com/identity/v2/manage/organizations/{id}/members`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |

### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="org-members" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}/members" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}' sampleresponse='{"Data": [ {"UId":"","Email":[{"Type":"Primary","Value":"john.doe@gmail.com"}],"FullName":"John doe","IsActive":true,"GlobalIdpEnabled":true}
]}'></try-me-out>

## Remove Members From Organization

This API is used to remove members from the organization.

### Endpoint

`DELETE` `https://api.loginradius.com/identity/v2/manage/organizations/{id}/members`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |

### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|UId|Array of UIds [**Required**]


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="remove-org-members" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}/members" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"UId": ["12","34"]}}' sampleresponse='{"IsDeleted": true}'></try-me-out>

## Set Global IDP on profile

This API is used to enable/disable the App's authentication method for a profile.

### Endpoint

`PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{org_id}/members/{uid}/idp/global`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |

### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|IsEnabled|Status of the Global IDP true/false [**Required**]


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="set-global-idp-memeber" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{org_id}/members/{uid}/idp/global" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"IsEnabled":true}}' sampleresponse='{{"IsEdited":true}}'></try-me-out>

## Set Global authentication method on Organization

This API is used to enable/disable the App's authentication method for an organization.

### Endpoint

`PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{org_id}/idp/global`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |

### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|IsEnabled|Status of the Global IDP true/false [**Required**]


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="set-global-org" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{org_id}/idp/global" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"IsEnabled":true}}' sampleresponse='{{"IsEdited":true}}'></try-me-out>

## Create an Organizational SAML IDP

This API is used to create an organizational saml idp

### Endpoint

`POST` `https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/saml`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |

### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|Provider|Provider Name [**Required**]|
|Config| SAML Configuration [**Required**]|

### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="create-saml-cpnfig" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/saml" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Provider":"MySAMLIdp","Config":{"FriendlyProviderName":"","IdentityProvider":{"Binding":"","Location":"","LogOut":""},"IdpCertificate":{"Certificate":""},"SpCertificate":{"Key":"","Certificate":""},"IsIdpInitiated":false,"DataMap":{"Email":"email","FirstName":"username"}}}}'></try-me-out>

## All IDPs of an Organization

This API is used to get all IDPs of an organization.

### Endpoint

`GET` `https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/saml/{idpid}`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="get-all-org-idp" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/saml/{idpid}" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}'></try-me-out>

## SAML IDP of an Organization By Id

This API is used to get the SAML IDP of an organization By Id.

### Endpoint

`GET` `https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="get-all-org-idp" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}]}'></try-me-out>


## Update Status of an Organizational idp

This API is used to update the status of organizational idp.

### Endpoint

`PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/{id}/status`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |

### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|IsActive|Status of the Organizational IDP - true/false [**Required**]


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="update-org-idp" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/{id}/status" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"IsActive":true}}'></try-me-out>

## Remove an Organizational idp

This API is used to remove an organizational idp

### Endpoint

`DELETE` `https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/{id}`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="remove-org-idp" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/{id}" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}]}'></try-me-out>


[Go Back to Home Page](/)

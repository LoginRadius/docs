---
title: "B2B Identity API"
tags: ["B2B Identity API"]
description: "This is a document detailing the LoginRadius B2B Identity APIs."
path: "/references/api/b2b-identity"
---

# B2B Identity Management API

Refer <a href="https://www.loginradius.com/docs/developer/faq/#how-to-retrieve-api-key-and-secret" target="_blank">this document</a> to get API Key and Secret.

## Create Organization

Creates the organization with name, Uid and display name.

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
|Name| Name of the organization  [**Required**]|
|OwnerUid| Uid of the owner [**Required**]|
|DisplayName| Display name of the organization  [**Opitonal**]

### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="create-org" endpoint="https://api.loginradius.com/identity/v2/manage/organizations" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"body":{"Name":"","DisplayName":"","OwnerUid":""}}'></try-me-out>

## Update Organization

Updates the organization for the provided organization Id.

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
|Name| Name of the organization  [**Required**]|
|DisplayName| Display name of the organization  [**Opitonal**]


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="update-org" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Name":"","DisplayName":""}}'></try-me-out>

## Remove Organization

Removes the organization for the provided organization Id.

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

Gets the organization by organization Id.

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

## Organization by Organization Name

Gets the organization by organization name.

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

## Get Organizations

Gets all organizations.

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

Updates the status of an organization for the provided organization Id.

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

Updates the organization's default roles for the provided organization Id.

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

## Add User to Organization

Adds users to the organization for the provided organization Id.

### Endpoint

`POST` `https://api.loginradius.com/identity/v2/manage/organizations/{id}/members`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |
| emailtemplate | ADDUSERTOORGANIZATION | Email Template Name [**Optional**] |
| resetPasswordUrl | https://&lt;AppName&gt;.&lt;Domain&gt;/auth | URL to reset the password by the user [**Optional**] |
| loginUrl | https://&lt;AppName&gt;.&lt;Domain&gt;/auth?org_name=&lt;orgName&gt; | URL to login to the organization [**Optional**] | 


### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|Email|Email of the added User [**Required**]|
|FirstName|User's first name [**Optional**]|
|LastName|User's last name [**Opitonal**]


### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="add-org-members" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}/members" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"emailtemplate","default":"ADDUSERTOORGANIZATION"},{"key":"resetPasswordUrl","default":"https://<AppName>.<Domain>/auth"},{"key":"loginUrl","default":"https://<AppName>.<Domain>/auth?org_name=<orgName>"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Email":"","FirstName":"","LastName":""}}'></try-me-out>

## Organization Users

Gets organization users by organization Id.

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

## Remove Users from Organization

Removes users from the organization by organization Id.

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

## Set Global IDP on Profile

Enables/disables the app’s authentication method for a profile by organization id and owner's uid.

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

## Set Global Authentication Method for Organization

Enables/disables the App's authentication method for an organization for the provided organization Id.

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

## Create Organizational SAML IDP

Creates the organizational SAML IDP for the provided organization Id.

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

## Update Organizational SAML IDP

Updates an organization's SAML IDP for the provided organization Id and SAML Id.

### Endpoint

`PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/saml/{id}`

### Query Parameters

| Parameter | Default | Description                           |
| :-------- | :------ | :------------------------------------ |
| Apikey    | none    | LoginRadius API Key [**Required**]    |
| Apisecret | none    | LoginRadius API Secret [**Required**] |

### Body Attributes

| Attribute | Description 
| :------------ | :------- | :-------------------------------------------------------------------------------- | 
|Config| SAML Configuration [**Required**]|

### Try Me Out

Enter query parameters and send a request to view the sample response.

<try-me-out id="update-saml-cpnfig" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{org id}/idp/saml" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Config":{"FriendlyProviderName":"","IdentityProvider":{"Binding":"","Location":"","LogOut":""},"IdpCertificate":{"Certificate":""},"SpCertificate":{"Key":"","Certificate":""},"IsIdpInitiated":false,"DataMap":{"Email":"email","FirstName":"username"}}}}'></try-me-out>

## All IDPs of Organization

Gets all IDPs of an organization by organization Id and IDP Id.

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

## SAML IDP of Organization by Id

Gets the SAML IDP of an organization by organization Id.

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
## Update Status of Organizational IDP

Updates the status of organizational IDP by organization Id and IDP Id.

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

## Remove Organizational IDP

Removes the IDP of an organization by organization Id and IDP Id.

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

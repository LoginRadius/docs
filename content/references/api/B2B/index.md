---
title: "B2B API"
tags: ["B2B API"]
description: "This is a document detailing the LoginRadius B2B APIs."
path: "/references/api/b2b"
---

# B2B API

## Create Organization

  This API is used to create an organization

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/manage/organizations`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

   <try-me-out id="create_organization" endpoint="https://api.loginradius.com/identity/v2/manage/organizations" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Name":"",
    "DisplayName":"", "OwnerUid":""}}' sampleresponse='{ "Id":"","Name": "myorg","DisplayName": "My Organization","DefaultRoles": ["Developer","ProductOwner"],"IsActive":true,"CreatedDate":"","ModifiedDate":""}'></try-me-out>

## Update Organization

  This API is used to update an organization

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{id}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

   <try-me-out id="update_organization" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Name":"","DisplayName":""},"templateParams":[{"key":"id"}]}' sampleresponse='{ "Id":"","Name": "myorg","DisplayName": "My Organization","DefaultRoles": ["Developer","ProductOwner"],"IsActive":true,"CreatedDate":"","ModifiedDate":""}'></try-me-out>

## Remove Organization

  This API is used to remove an organization

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/organizations/{id}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

   <try-me-out id="remove_organization" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"templateParams":[{"key":"id"}]}' sampleresponse='{ "IsDeleted": true}'></try-me-out>

## Get organization by Id

  This API is used to get an organization.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/organizations/{id}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

   <try-me-out id="update_organization" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"templateParams":[{"key":"id"}]}' sampleresponse='{ "Id":"","Name": "myorg","DisplayName": "My Organization","DefaultRoles": ["Developer","ProductOwner"],"IsActive":true,"CreatedDate":"","ModifiedDate":""}'></try-me-out>

## Get organization By Organization Name

  This API is used to get an organization.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/organizations/name/{org_name}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

   <try-me-out id="update_organization" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/name/{org_name}" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"templateParams":[{"key":"org_name"}]}' sampleresponse='{ "Id":"","Name": "myorg","DisplayName": "My Organization","DefaultRoles": ["Developer","ProductOwner"],"IsActive":true,"CreatedDate":"","ModifiedDate":""}'></try-me-out>

## GET All Organizations

  This API is used to get all organizations.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/organizations`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

   <try-me-out id="update_organization" endpoint="https://api.loginradius.com/identity/v2/manage/organizations" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}]' sampleresponse='{ "Data": [ {} ]}'></try-me-out>

## Update Status of Organization

  This API is used to update the status of an organization.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{id}/status`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

   <try-me-out id="update_organization" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}/status" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"templateParams":[{"key":"id"}]}' sampleresponse='{ "IsEdited": true}'></try-me-out>

## Add/Update Roles

  This API is used to update an organization's default roles

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/organizations/{id}/defaultroles`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

   <try-me-out id="update_organization" endpoint="https://api.loginradius.com/identity/v2/manage/organizations/{id}/defaultroles" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"IsActive": true},"templateParams":[{"key":"id"}]}' sampleresponse='{ "IsEdited": true}'></try-me-out>

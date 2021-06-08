# SSO API Response Codes

---

This section details the LoginRadius SSO API codes and some suggestions on how to resolve them.

## HTTP Error Response Structure:

```
{
  "Description": {{String}},
  "ErrorCode": {{Integer}},
  "Message": {{String}},
  "IsProviderError": {{Boolean}},
  "ProviderErrorResponse": {{String or NULL}}
}
```

## HTTP Response Descriptions:

| HTTP Code | Message         | Description                                                                                                                                                                               |
| :--------- | :-------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | 
| 200        | OK                    | The API was accessed successfully.                                                                                                                                                        |
| 400        | Bad Request           | Verify that the API endpoint you are accessing is correctly formatted and has all the required parameters.                                                                                |
| 401        | Unauthorized          | Verify your LoginRadius API key and secret, also verify that your access token has not expired.                                                                                           |
| 403        | Forbidden             | Verify all parameters are correctly formatted and the API endpoint is correct.                                                                                                            |
| 404        | Not Found             | The API endpoint is not correct or your account does not have sufficient permissions to access this endpoint.                                                                             |
| 405        | Method not allowed    | Verify that you are accessing the API endpoint with the correct format (ie. Get or Post)
|429          | Too Many Request      | Response status code indicates the user has sent too many requests in a given amount of time (i.e. rate limiting)                                                                                                  |
| 500        | Internal Server Error | Something has gone wrong with the processing of the request, check your server error logs and <a href="https://secure.loginradius.com/support/support-tickets" target="_blank">contact us</a> if the error persists. |

## LoginRadius Error Response Descriptions:

| Error Code | Error Message                                                                                           | Description | HTTP Code                                                                                                                                                                       |
| :--------- | :------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | :------------|
|901| The API key is unauthorized. | The provided LoginRadius API key is invalid or is not authorized, please use a valid or authorized LoginRadius API key or check the API key for your LoginRadius account. |403 |        
|902| The API Secret is unauthorized. | The provided LoginRadius API Secret is invalid or is not authorized, please use a valid or authorized LoginRadius API Secret or check the API Secret for your LoginRadius account. | 403 |    
|908| A parameter is not formatted correctly in the request, please check all the parameters in the API call. | A parameter is not formatted correctly | 400 |
|920| API key is invalid. | The provided LoginRadius API key is invalid, please use a valid API key of your LoginRadius account. | 400 |
|921| API secret is invalid. | The provided LoginRadius API secret is invalid, please use a valid API secret of your LoginRadius account. | 400 |
|922| API key is missing. | The request is missing the API key, please use the valid API key parameter in order to process this request. | 400 |
|923| API secret is missing. | The request is missing the API secret, please use the valid API secret parameter in order to process this request. |400 |
|929| Access token is missing from social ID provider. | The ID Provider access token is required to generate the LoginRadius access token, please use the correct token in order to process this request. |400 |
|950| The operation failed due to an unknown error. | An unknown error has occurred, please try again in a few minutes or contact your system admin. |403 |
|965| The post body is invalid. | Please use a valid post body and make sure that it is in a valid JSON format. | 400 |
|1000| Oops, something is going wrong, please try again. | Oops, something is going wrong, please try again. | 403 |
|1038| The email is not valid, please check your email again. | The provided email ID is invalid or not well-formatted, a valid email ID is required in order to process this request. | 400 |
|1060| Access token is missing. | This request is missing the access token, please use the valid access token parameter in order to process this request. | 400 |
|1067| Invalid OTP Code | The OTP code is invalid, please request for a new OTP. | 403 |
|1102| Google two factor authentication code is incorrect | The Google two factor authentication code is incorrect, please enter the correct authentication code for login. | 403 |
|1109| The emailid is a required parameter. | This request could not be processed, The emailid must be specified in the request body. |400 |
|1128| Two factor authentication backup code is not configured | The two factor authentication backup code is not enabled, please enable or configure two factor authentication for login. |403 |
|1129| Two factor authentication backup bode is not valid or has already been used | The two factor authentication backup code is not valid or has already been used, please use a valid two factor authentication backup code for login. |403 |
|1178| Hosted Plugin configuration not found. | Hosted Plugin configuration not found or the resource does not exist. |401 |
|1179| Password setting is not configured. | The password setting is not configured for this site, Please configure your password settings. |401 |
|1180| JWT configuration not valid. | The JWT configuration is not valid, Please check the JWT configuration for your LoginRadius account. |401 |
|1182| Some Issue with password validation API |“Some Issue with password validation API” or error desc passed on from request to external service| 401 |
|1183| Form API configuration not found. | The Form API configuration not found or the resource does not exist. |401 |
|1186| Custom login API name is invalid. | The provided Custom login API name is invalid, please provide a valid name. |400 |
|1187| The Email address is a required parameter. | The Email address is required, please use a valid email address in order to process this request. |400 |
|1188| The Phone number is a required parameter. | The Phone number is required, please use a valid phone number in order to process this request. | 400 |
|1189| The API name is a required parameter. | The API name is required, please use a valid API name in order to process this request. | 400 |
|1190| This Social Provider Name is not Valid. | This Social Provider Name is invalid or not supported by LoginRadius. |403 |
|1192| The Hosted Plugin configuration not valid | The Hosted Plugin configuration not valid, please check your configuration |401 |
|1193| The store name is a required parameter. | The store name is a required parameter, please use a valid store name in order to process this request. |400 |
|1194| The API name is a required parameter | The API name is a required parameter, please use a valid API name in order to process this request. |400 |
|1195| Bigcommerce API Error | Bigcommerce API error, please try again. |401 |
|1196| The Jwt app name is a required parameter | The Jwt app name is a required parameter, please use a valid app name in order to process this request. |400 |
|1197| The SAML configuration not valid | The SAML configuration not valid, please check your configuration | 401 |
|1198| The password is not valid. | Password is not valid, please check your password again. | 400 |
|2000| The phone is a required parameter. | This request could not be processed, the phone must be specified in the request body. | 400 |
|2001| The email/phone is a required parameter. | This request could not be processed because the email/phone must be specified in the request body. | 400 |
|2002| The user does not exist on customer's server. | The user does not exist on the customer's server. |403 |
|2003| The user claim is not valid. | The provided SAML attributes are invalid, please use a valid SAML attributes in the configuration. |401 |
|2004| The Assertion Consumer Service Location is required. | The Assertion Consumer Service Location is required in SAML configuration. | 401 |
|2005| The code is expired. | The code is expired, please try again. |401 |
|2006| The redirect_uri is not valid. | The redirect_uri is not the same as passed into get code. |400 |
|2007| The code is not valid. | The code is not valid. |401 |
|2008| invalid_request | invalid_request |400 |
|2009| invalid_client | invalid_client |401 |
|2010| invalid_grant | invalid_grant |400 |
|2011| unauthorized_client | unauthorized_client |403 |
|2012| unsupported_grant_type | unsupported_grant_type | 400 |
|2013| invalid_scope | invalid_scope |400 |
|2014| redirect_uri_mismatch | Parameter redirect_uri does not match as provided in the authorization | 401 |
|2015| SAML request singing certificate doesn't match. | The service provider certificate doesn't match to SAML authentication request, Please check the configuration. |401 |
|2016| The SAML Authenticate Request is not found | The SAML Authenticate Request is not found as a Default Request Binding Configuration. |401 |
|2016| Some Issue with Perfectmind Rest API. | An error has occurred at the Perfectmind Rest API, please check the ‘ProviderErrorResponse’ for more details. |401 |
|2017| The Hosted Plugin mapping fields are required. | The #Fields #HelpingVerb required parameter#Plural, Parameter#Plural value cannot be null or blank. | 400 |
|2019| The CustomObject#Plural #HelpingVerb not found. | The CustomObject#Plural #CustomObjectName #HelpingVerb not found. | 400 |

## OpenID Connect error messages:

| Error Message                                                                                           | Error Description                                                                                                                                                                        |
| :--------- | :------------------------------------------------------------------------------------------------------ | :--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|invalid_request | The redirect_uri is a required parameter	|
|invalid_request	 | The redirect_uri is not valid, check redirect_uri parameter again	
|invalid_request| The response_type is a required parameter|
|invalid_request| The response_type must contains valid value|
|invalid_request| The state is a required parameter|
|invalid_request| The scope is a required parameter|
|request_not_supported  | openid must exist in the scope parameter|
|invalid_request| The response_mode is not valid|
|invalid_request| The display is not valid|
|invalid_request| The prompt is not valid|
|invalid_request| The claims is not valid|
|invalid_request| The max_age is not valid|
|invalid_request| The acr_values is not valid|
|invalid_request| The client_secret is a required parameter|
|invalid_client | The client_id is not valid, check your client_id again|
|unsupported_grant_type|  The grant_type is not valid, check grant_type parameter again|
|unauthorized_client |The client_secret is not valid, check your client_secret again|
|invalid_request| The code is a required parameter|
|invalid_request| The refresh_token is a required parameter|
|invalid_request| The access_token is a required parameter|
|unauthorized_client| Openid configuration not found|
|login_required|  User need to re-authenticate|
|unauthorized_client| The Openid configuration is not valid|
|login_required|  non-matching login_hint value|
|invalid_grant|   The code is not valid|
|invalid_grant|   The code has been expired|
|invalid_grant|   The code is already used|
|invalid_grant|   The code is invalid or expired|
|invalid_grant|   The refresh_token is not valid|
|invalid_grant|   The access_token is invalid or expired|
|unauthorized_client| oops something is going wrong, please try again|
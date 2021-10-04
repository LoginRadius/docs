This documentation lists out the various API error codes of <b>LoginRadius</b> along with their message and description.

| Error Code | Message | Description |
| :------ | :------ | :------ |
| 901 |	The API key is unauthorized.	| The provided LoginRadius API key is invalid or is not authorized, please use a valid or authorized LoginRadius API key or check the API key for your LoginRadius account. |
| 902 |	The API Secret is unauthorized. |	The provided LoginRadius API Secret is invalid or is not authorized, please use a valid or authorized LoginRadius API Secret or check the API Secret for your LoginRadius account. |
| 908 | A parameter is not formatted correctly in the request, please check all the parameters in the API call. | A parameter is not formatted correctly. |
| 920 | 	API key is invalid. | 	The provided LoginRadius API key is invalid, please use a valid API key of your LoginRadius account. |
| 921 | 	API secret is invalid. | The provided LoginRadius API secret is invalid, please use a valid API secret of your LoginRadius account. |
| 922 | API key is missing. | The request is missing the API key, please use the valid API key parameter in order to process this request. |
| 923 | API secret is missing. | The request is missing the API secret, please use the valid API secret parameter in order to process this request. |
| 929 | Access token is missing from social ID provider. | The ID Provider access token is required to generate the LoginRadius access token, please use the correct token in order to process this request. |
| 950 | The operation failed due to an unknown error. | An unknown error has occurred, please try again in a few minutes or contact your system admin. |
| 965 | The post body is invalid. | Please use a valid post body and make sure that it is in a valid JSON format. |
| 1000 | Oops, something is going wrong, please try again. | Oops, something is going wrong, please try again. |
| 1038 | The email is not valid, please check your email again. | The provided email ID is invalid or not well-formatted, a valid email ID is required in order to process this request. |
| 1060 | 	Access token is missing. | This request is missing the access token, please use the valid access token parameter in order to process this request. |
| 1067 | Invalid OTP Code. | The OTP code is invalid, please request for a new OTP. |
| 1102 | Google two factor authentication code is incorrect. | The Google two factor authentication code is incorrect, please enter the correct authentication code for login. |
| 1109 | The email id is a required parameter. | This request could not be processed, The emailid must be specified in the request body. |
| 1128 | Two factor authentication backup code is not configured. | The two factor authentication backup code is not enabled, please enable or configure two factor authentication for login. |
| 1129 | 	Two factor authentication backup bode is not valid or has already been used. | The two factor authentication backup code is not valid or has already been used, please use a valid two factor authentication backup code for login. |
| 1178 | Hosted Plugin configuration not found. | 	Hosted Plugin configuration not found or the resource does not exist. |
| 1179 | Password setting is not configured. | The password setting is not configured for this site, Please configure your password settings. |
| 1180 | JWT configuration not valid. | 	The JWT configuration is not valid, Please check the JWT configuration for your LoginRadius account. |
| 1182 | Some Issue with password validation API. | “Some Issue with password validation API” or error desc passed on from request to external service. |
| 1183 | 	Form API configuration not found. | The Form API configuration not found or the resource does not exist. |
| 1186 | 	Custom login API name is invalid. | The provided Custom login API name is invalid, please provide a valid name. |
| 1187 | The Email address is a required parameter. | The Email address is required, please use a valid email address in order to process this request. |
| 1188 | The Phone number is a required parameter. | The Phone number is required, please use a valid phone number in order to process this request. |
| 1189 | The API name is a required parameter. | 	The API name is required, please use a valid API name in order to process this request. |
| 1190 | This Social Provider Name is not Valid. | This Social Provider Name is invalid or not supported by LoginRadius. |
| 1192 | 	The Hosted Plugin configuration not valid. | 	The Hosted Plugin configuration not valid, please check your configuration. |
| 1193 | The store name is a required parameter. | The store name is a required parameter, please use a valid store name in order to process this request. |
| 1194 | 	The API name is a required parameter. | The API name is a required parameter, please use a valid API name in order to process this request. |
| 1195 | Bigcommerce API Error. | Bigcommerce API error, please try again. |
| 1196 | The Jwt app name is a required parameter. | The Jwt app name is a required parameter, please use a valid app name in order to process this request. |
| 1197 | The SAML configuration not valid. | The SAML configuration not valid, please check your configuration. |
| 1198 | The password is not valid. | Password is not valid, please check your password again. |
| 2000 | The phone is a required parameter. | This request could not be processed, the phone must be specified in the request body. |
| 2001 | 	The email/phone is a required parameter. | This request could not be processed because the email/phone must be specified in the request body. |
| 2002 | 	The user does not exist on customer’s server. | The user does not exist on the customer’s server. |
| 2003 | The user claim is not valid. | The provided SAML attributes are invalid, please use a valid SAML attributes in the configuration. |
| 2004 | The Assertion Consumer Service Location is required. | The Assertion Consumer Service Location is required in SAML configuration. |
| 2005 | 	The code is expired. | The code is expired, please try again. |
| 2006 | The redirect_uri is not valid. | 	The redirect_uri is not the same as passed into get code. |
| 2007 | The code is not valid. | 	The code is not valid. |
| 2008 | invalid_request | invalid_request |
| 2009 | invalid_client | invalid_client |
| 2010 | 	invalid_grant | 	invalid_grant |
| 2011 | unauthorized_client | unauthorized_client |
| 2012 | unsupportedgranttype | unsupportedgranttype |
| 2013 | invalid_scope | invalid_scope |
| 2014 | redirecturimismatch | Parameter redirect_uri does not match as provided in the authorization. |
| 2015 | 	SAML request singing certificate doesn’t match. | The service provider certificate doesn’t match to SAML authentication request, Please check the configuration. |
| 2016 | The SAML Authenticate Request is not found. | The SAML Authenticate Request is not found as a Default Request Binding Configuration. |
| 2016 | Some Issue with Perfectmind Rest API. | 	An error has occurred at the Perfectmind Rest API, please check the ‘ProviderErrorResponse’ for more details. |
| 2017 | 	The Hosted Plugin mapping fields are required. | The #Fields #HelpingVerb required parameter#Plural, Parameter#Plural value cannot be null or blank. |
| 2019 | 	The CustomObject#Plural #HelpingVerb not found. | The CustomObject#Plural #CustomObjectName #HelpingVerb not found. |

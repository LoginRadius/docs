---
title: "Authentication API"
tags: ["Authentication API"]
description: "This is a document detailing the LoginRadius Authentication APIs."
path: "/references/api/authentication"
---

# Authentication API

## Auth Add Email

  Adds additional emails to the consumer corresponding to the specified access token.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-add-email" endpoint="https://api.loginradius.com/identity/v2/auth/email" method="POST" params='{"queryParams":[{"key":"access_token"},{"key":"apiKey","default":""},{"key":"verificationUrl","default":""},{"key":"emailTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"example@example.com","type":"Secondary"}}' sampleresponse='{ "IsPosted": true }'></try-me-out>
 
## Auth Login by Email

  Exchanges consumer login details for a copy of their user data and a LoginRadius access token.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/login`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | LoginUrl | none | Url where the user is logging from [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |email|user's email
  |password|Password for the email | Model Class containing Definition of payload for Email Authentication API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-login-by-email" endpoint="https://api.loginradius.com/identity/v2/auth/login" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"verificationUrl","default":""},{"key":"loginUrl"},{"key":"emailTemplate"},{"key":"fields"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"example@example.com","password":""}}' sampleresponse='{ "Profile": { "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "phoneId": "824525-add135", "PhoneIdVerified": true, "Roles": [ "teacher" ], "ExternalUserLoginId": "asybkyabskdhbkad", "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "Country": { "Code": "HS", "Name": "House Smith" }, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "skiing", "reading" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "a02**8a7-****-4453-****-a5e7**e1f358", "TokenSecret": "b129e8a7-****-8652-****-a7e611e1f123" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false }, "access_token": "a029e8a7-****-4453-****-a5e721e1f358", "expires_in": "2017-08-17T10:52:36.1644137Z" }'></try-me-out>
 
## Auth Forgot Password

  Sends a reset password URL to the consumer corresponding to the specified Email ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/password`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | ResetPasswordUrl | none | Url to which user should get re-directed to for resetting the password [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-forgot-password" endpoint="https://api.loginradius.com/identity/v2/auth/password" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"resetPasswordUrl","default":""},{"key":"emailTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"example@example.com"}}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Auth User Registration by Email

  Creates a new consumer, sending a verification email to the specified Email ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/register`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | sott | none | LoginRadius Secured One Time Token [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | Options | none | PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow) [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
  | WelcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Email|boolean type value, default is true
  |FirstName|user's first name
  |LastName|user's last name
  |Password|Password for the email | Model Class containing Definition of payload for Auth User Registration API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-user-registration-by-email" endpoint="https://api.loginradius.com/identity/v2/auth/register" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"sott","default":""},{"key":"emailTemplate"},{"key":"fields"},{"key":"options"},{"key":"verificationUrl"},{"key":"welcomeEmailTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"Test","LastName":"Account","Email":[{"Type":"Primary","Value": "example@example.com"}],"Password":"xxxxxxxxxxxx"}}' sampleresponse='{ "IsPosted": true, "Data": { "Profile": { "Password": "Rfc289*****veBytes$1*****CTahpWvWI*****QeTOiSg==$1e*****Ou8pryxrZlpZCz*****MzswdWV0Ir*****oQ=", "LastPasswordChangeDate": null, "PasswordExpirationDate": null, "LastPasswordChangeToken": null, "EmailVerified": false, "IsActive": true, "IsDeleted": false, "Uid": "4b4*****38724*****200196*****3959", "CustomFields": null, "IsEmailSubscribed": false, "UserName": null, "NoOfLogins": 1, "PhoneId": null, "PhoneIdVerified": false, "Roles": null, "ExternalUserLoginId": null, "RegistrationProvider": "Email", "IsLoginLocked": false, "LoginLockedType": "None", "LastLoginLocation": "Washington, United States", "RegistrationSource": "API", "IsCustomUid": false, "UnverifiedEmail": null, "IsSecurePassword": true, "PrivacyPolicy": null, "ExternalIds": null, "IsRequiredFieldsFilledOnce": true, "ConsentProfile": null, "PIN": { "Skipped": false, "PIN": "Rfc28*****iveBytes$100*****whUBfaF3s50M*****MA==$foHKnpz+J*****lEjyFzAulTvvgZE2Vs*****dGKkTA=", "LastPINChangeDate": "2019-09-30T09:36:21.3750000Z", "SkippedDate": "0001-01-01T00:00:00.0000000Z" }, "RegistrationData": null, "ID": "e48*****38a14*****8fbd4ed*****c3", "Provider": "Email", "Prefix": null, "FirstName": null, "MiddleName": null, "LastName": null, "Suffix": null, "FullName": null, "NickName": null, "ProfileName": null, "BirthDate": null, "Gender": null, "Website": null, "Email": [ { "Type": "Primary", "Value": "example@example.com" } ], "Country": null, "ThumbnailImageUrl": null, "ImageUrl": null, "Favicon": null, "ProfileUrl": null, "HomeTown": null, "State": null, "City": null, "Industry": null, "About": null, "TimeZone": null, "LocalLanguage": null, "CoverPhoto": null, "TagLine": null, "Language": null, "Verified": null, "UpdatedTime": null, "Positions": null, "Educations": null, "PhoneNumbers": null, "IMAccounts": null, "Addresses": null, "MainAddress": null, "Created": null, "CreatedDate": "2019-09-30T09:36:21.3720000Z", "ModifiedDate": "2019-09-30T09:36:22.9190000Z", "ProfileModifiedDate": null, "LocalCity": "Washington", "ProfileCity": null, "LocalCountry": "United States", "ProfileCountry": null, "FirstLogin": true, "IsProtected": false, "RelationshipStatus": null, "Quota": null, "Quote": null, "InterestedIn": null, "Interests": null, "Religion": null, "Political": null, "Sports": null, "InspirationalPeople": null, "HttpsImageUrl": null, "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": null, "TotalStatusesCount": 0, "Associations": null, "NumRecommenders": 0, "Honors": null, "Awards": null, "Skills": null, "CurrentStatus": null, "Certifications": null, "Courses": null, "Volunteer": null, "RecommendationsReceived": null, "Languages": null, "Projects": null, "Games": null, "Family": null, "TeleVisionShow": null, "MutualFriends": null, "Movies": null, "Books": null, "AgeRange": null, "PublicRepository": null, "Hireable": false, "RepositoryUrl": null, "Age": null, "Patents": null, "FavoriteThings": null, "ProfessionalHeadline": null, "ProviderAccessCredential": null, "RelatedProfileViews": null, "LRUserID": null, "PlacesLived": null, "Publications": null, "JobBookmarks": null, "Suggestions": null, "Badges": null, "MemberUrlResources": null, "TotalPrivateRepository": 0, "Currency": null, "StarredUrl": null, "GistsUrl": null, "PublicGists": 0, "PrivateGists": 0, "Subscription": null, "Company": null, "GravatarImageUrl": null, "ProfileImageUrls": null, "WebProfiles": null, "PinsCount": 0, "BoardsCount": 0, "LikesCount": 0, "SignupDate": "2019-09-30T09:36:21.3720000Z", "LastLoginDate": "2019-09-30T09:36:22.9196327Z", "PreviousUids": null, "Identities": null }, "access_token": "991****9-d35b-4**a-9**f-f36****7df13", "refresh_token": "f****b85-e**5-4**8-b**0-1719*****f14", "expires_in": "2019-09-30T09:51:22.8149253Z", "session_token": "7da****7-9fde-4**9-b**c-27***cc5***6", "session_expires_in": "2019-10-07T09:36:22.8149403Z" } }'></try-me-out>

## Auth User Registration By Captcha

  Creates a new consumer using the Captcha flow, sending a verification email to the specified Email ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/register/captcha`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | Options | none | PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow) [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
  | WelcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Email|boolean type value, default is true
  |FirstName|user's first name
  |g-recaptcha-response|The acknowledgement received by Google in Google recaptcha authorisation process.
  |LastName|user's last name
  |Password|Password for the email | Model Class containing Definition of payload for Auth User Registration by Recaptcha API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-user-registration-by-captcha" endpoint="https://api.loginradius.com/identity/v2/auth/register/captcha" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"emailTemplate"},{"key":"fields"},{"key":"options"},{"key":"verificationUrl"},{"key":"welcomeEmailTemplate"},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"Test","LastName":"Account","Email":[{"Type":"Primary","Value":"example@example.com"}],"Password":"xxxxxxxxxxxx","g-recaptcha-response":""}}' sampleresponse='{ "IsPosted": true, "Data": { "Profile": { "Password": "Rfc289*****veBytes$1*****CTahpWvWI*****QeTOiSg==$1e*****Ou8pryxrZlpZCz*****MzswdWV0Ir*****oQ=", "LastPasswordChangeDate": null, "PasswordExpirationDate": null, "LastPasswordChangeToken": null, "EmailVerified": false, "IsActive": true, "IsDeleted": false, "Uid": "4b4*****38724*****200196*****3959", "CustomFields": null, "IsEmailSubscribed": false, "UserName": null, "NoOfLogins": 1, "PhoneId": null, "PhoneIdVerified": false, "Roles": null, "ExternalUserLoginId": null, "RegistrationProvider": "Email", "IsLoginLocked": false, "LoginLockedType": "None", "LastLoginLocation": "Washington, United States", "RegistrationSource": "API", "IsCustomUid": false, "UnverifiedEmail": null, "IsSecurePassword": true, "PrivacyPolicy": null, "ExternalIds": null, "IsRequiredFieldsFilledOnce": true, "ConsentProfile": null, "PIN": { "Skipped": false, "PIN": "Rfc28*****iveBytes$100*****whUBfaF3s50M*****MA==$foHKnpz+J*****lEjyFzAulTvvgZE2Vs*****dGKkTA=", "LastPINChangeDate": "2019-09-30T09:36:21.3750000Z", "SkippedDate": "0001-01-01T00:00:00.0000000Z" }, "RegistrationData": null, "ID": "e48*****38a14*****8fbd4ed*****c3", "Provider": "Email", "Prefix": null, "FirstName": null, "MiddleName": null, "LastName": null, "Suffix": null, "FullName": null, "NickName": null, "ProfileName": null, "BirthDate": null, "Gender": null, "Website": null, "Email": [ { "Type": "Primary", "Value": "example@example.com" } ], "Country": null, "ThumbnailImageUrl": null, "ImageUrl": null, "Favicon": null, "ProfileUrl": null, "HomeTown": null, "State": null, "City": null, "Industry": null, "About": null, "TimeZone": null, "LocalLanguage": null, "CoverPhoto": null, "TagLine": null, "Language": null, "Verified": null, "UpdatedTime": null, "Positions": null, "Educations": null, "PhoneNumbers": null, "IMAccounts": null, "Addresses": null, "MainAddress": null, "Created": null, "CreatedDate": "2019-09-30T09:36:21.3720000Z", "ModifiedDate": "2019-09-30T09:36:22.9190000Z", "ProfileModifiedDate": null, "LocalCity": "Washington", "ProfileCity": null, "LocalCountry": "United States", "ProfileCountry": null, "FirstLogin": true, "IsProtected": false, "RelationshipStatus": null, "Quota": null, "Quote": null, "InterestedIn": null, "Interests": null, "Religion": null, "Political": null, "Sports": null, "InspirationalPeople": null, "HttpsImageUrl": null, "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": null, "TotalStatusesCount": 0, "Associations": null, "NumRecommenders": 0, "Honors": null, "Awards": null, "Skills": null, "CurrentStatus": null, "Certifications": null, "Courses": null, "Volunteer": null, "RecommendationsReceived": null, "Languages": null, "Projects": null, "Games": null, "Family": null, "TeleVisionShow": null, "MutualFriends": null, "Movies": null, "Books": null, "AgeRange": null, "PublicRepository": null, "Hireable": false, "RepositoryUrl": null, "Age": null, "Patents": null, "FavoriteThings": null, "ProfessionalHeadline": null, "ProviderAccessCredential": null, "RelatedProfileViews": null, "LRUserID": null, "PlacesLived": null, "Publications": null, "JobBookmarks": null, "Suggestions": null, "Badges": null, "MemberUrlResources": null, "TotalPrivateRepository": 0, "Currency": null, "StarredUrl": null, "GistsUrl": null, "PublicGists": 0, "PrivateGists": 0, "Subscription": null, "Company": null, "GravatarImageUrl": null, "ProfileImageUrls": null, "WebProfiles": null, "PinsCount": 0, "BoardsCount": 0, "LikesCount": 0, "SignupDate": "2019-09-30T09:36:21.3720000Z", "LastLoginDate": "2019-09-30T09:36:22.9196327Z", "PreviousUids": null, "Identities": null }, "access_token": "991****9-d35b-4**a-9**f-f36****7df13", "refresh_token": "f****b85-e**5-4**8-b**0-1719*****f14", "expires_in": "2019-09-30T09:51:22.8149253Z", "session_token": "7da****7-9fde-4**9-b**c-27***cc5***6", "session_expires_in": "2019-10-07T09:36:22.8149403Z" } }'></try-me-out>

## Auth Validate Access Token

  Validates specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/access_token/validate`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-validate-access-token" endpoint="https://api.loginradius.com/identity/v2/auth/access_token/validate" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"}]}' sampleresponse='{ "access_token": "ee774651-1a2a-4df4-84dc-db75517842b2", "expires_in": "2020-12-24T01:49:51.474Z" }'></try-me-out>
 
## Access Token Invalidate

  Invalidates specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/access_token/invalidate`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | PreventRefresh | none | Boolean value that when set as true, in addition of the access token being invalidated, it will no longer have the capability of being refreshed. [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="access-token-invalidate" endpoint="https://api.loginradius.com/identity/v2/auth/access_token/invalidate" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"preventRefresh"}]}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Access Token Info

  Retrieves token data for the specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/access_token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Try Me Out  

  Enter query parameters and send a request to view the sample response.

  <try-me-out id="access-token-info" endpoint="https://api.loginradius.com/identity/v2/auth/access_token" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"}]}' sampleresponse='{ "provider": "facebook", "access_token": "********-****-****-****-************", "isrememberme": true }'></try-me-out>
 
## Auth Get Profiles by Token

  Retrieves consumer profile data corresponding to the specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-get-profiles-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/account" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"fields"}]}' sampleresponse='{ "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "phoneId": "824525-add135", "ExternalUserLoginId": "asybkyabskdhbkad", "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "Country": { "Code": "HS", "Name": "House Smith" }, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "blah", "blah" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "anlkeruna;sa", "TokenSecret": "adga!rgagads" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false }'></try-me-out>
 
## Auth Delete Account

  Deletes consumer corresponding to the specified delete token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/account/delete`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | deletetoken | none | Delete token received in the email [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-delete-account" endpoint="https://api.loginradius.com/identity/v2/auth/account/delete" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"deleteToken"}]}' sampleresponse='{ "IsPosted": true }'></try-me-out>
 
## Auth Check Email Availability

  Checks if the specified Email ID already exists on your app.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Email | none | Email of the user [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-check-email-availability" endpoint="https://api.loginradius.com/identity/v2/auth/email" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"email"}]}' sampleresponse='{ "IsExist": true }'></try-me-out>
  
## Auth Verify Email

  Verifies email of the consumer corresponding to the specified verification token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | VerificationToken | none | Verification token received in the email [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | Url | none | Mention URL to log the main URL(Domain name) in Database. [**Optional**] |
  | WelcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-verify-email" endpoint="https://api.loginradius.com/identity/v2/auth/email" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"verificationToken"},{"key":"fields"},{"key":"url"},{"key":"welcomeEmailTemplate"}]}' sampleresponse='{ "Password": "********************", "LastPasswordChangeDate": "2018-03-05T22:13:36.48263Z", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "EmailVerified": false, "IsActive": true, "IsDeleted": false, "Uid": "ffa5884ec3a943db8b5484f0d18e2fde", "CustomFields": { "CustomField1": "Custom data value 1 ", "CustomField2": "Custom data value 2" }, "IsEmailSubscribed": false, "UserName": "Johndoe123", "NoOfLogins": 7, "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "PhoneId": "+16045552368", "PhoneIdVerified": false, "ExternalUserLoginId": "Johndoe123", "RegistrationProvider": "Email", "IsLoginLocked": false, "LoginLockedType": "None", "LastLoginLocation": "Vancouver, Canada", "RegistrationSource": "API", "IsCustomUid": false, "UnverifiedEmail": [ { "Type": "Secondary", "Value": "abc@example.com" } ], "IsSecurePassword": true, "ID": "0e0d1f048d8844408315aeb100f39649", "Provider": "Email", "Prefix": "Dr.", "FirstName": "John", "MiddleName": "Doe", "LastName": "Order", "Suffix": "Sr.", "FullName": "John Doe Order", "NickName": "Johnny", "ProfileName": "Johnny", "BirthDate": "10-12-1985", "Gender": "M", "Website": "www.example.com", "Email": [ { "Type": "Primary", "Value": "example@example.com" } ], "Country": { "Code": "ca", "Name": "Canada" }, "ThumbnailImageUrl": "https://example.com/image_thumb.png", "ImageUrl": "https://example.com/image_full.png", "Favicon": "https://example.com/image_fav.png", "ProfileUrl": "https://example.com/profile", "HomeTown": "Vancouver", "State": "British-Columbia", "City": "Vancouver", "Industry": "IT", "About": "I keep track of the latest trends", "TimeZone": "-8", "LocalLanguage": "en-US", "CoverPhoto": "https://example.com/profile/cover/cover_img.png", "TagLine": "To be or not to be, that is the question", "Language": "en-US", "Verified": true, "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "+16045552368" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Example" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "5/20/2008 12:33:35 AM +00:00", "CreatedDate": "2018-03-05T22:13:36.2013716Z", "ModifiedDate": "2018-03-05T22:13:36.48263Z", "LocalCity": "Vancouver", "ProfileCity": "Vancouver", "LocalCountry": "Canada", "ProfileCountry": "Canada", "FirstLogin": false, "IsProtected": false, "RelationshipStatus": "Single", "Quota": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "Quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.", "InterestedIn": [ "female" ], "Interests": [ { "InterestedType": "Sports", "InterestedName": "Badminton" } ], "Religion": "Undecided", "Political": "Undecided", "Sports": [ { "Id": "23423534563463466", "Name": "Badminton" } ], "InspirationalPeople": [ { "Id": "234523234323423423432424", "Name": "Bill Gates" } ], "HttpsImageUrl": "https://www.example.com/profile/image.png", "FollowersCount": 70, "FriendsCount": 800, "IsGeoEnabled": "false", "TotalStatusesCount": 11, "Associations": "Board of Canada", "NumRecommenders": 3, "Honors": "Valedictorian", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "123", "Name": "C++" } ], "CurrentStatus": [ { "Id": "328", "Text": "Gone for help", "Source": "examplesource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teaching people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Business" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Battleship", "Category": "Strategy", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Le Voyage dans la Lune", "Category": "Sci-Fi", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Macbeth", "Category": "Theatre", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": 5, "Hireable": false, "RepositoryUrl": "https://api.example.com/users/johnnyd/repos", "Age": "32", "Patents": [ { "Id": "516", "Title": "Machine that flies", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "Always, ready", "ProviderAccessCredential": { "AccessToken": "**************************************", "TokenSecret": "**************************************" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "user32134", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "test", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "John" }, "Company": "Night Watch", "GravatarImageUrl": "www.gravatar.com/avatar/*********************", "ProfileImageUrls": { "Image Url": "https://example.com.com/*****/picture?type=small", "ThumbnailImage Url": "https://example.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "PinsCount": 2, "BoardsCount": 3, "LikesCount": 20, "SignupDate": "2018-03-05T22:13:36.2013716Z", "LastLoginDate": "0001-01-01T00:00:00", "Identities": [ "&ltArray of Identities&gt" ], "access_token": "49568f51-66af-4ae5-9b3e-47605b0b5dce", "refresh_token": "acbc1700-c350-416e-a542-09bcb0b0f60b", "expires_in": "2019-08-13T21:13:54.8018664Z" }'></try-me-out>
 
## Auth Social Identity

  Retrieves all consumer's profiles and social identities corresponding to the specified access token.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/socialIdentity`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-social-identity" endpoint="https://api.loginradius.com/identity/v2/auth/socialIdentity" method="GET" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"fields"}]}' sampleresponse='{ <LoginRadius Profile Data> }'></try-me-out>

 
## Auth Update Profile by Token

  Updates consumer's profile corresponding to the specified access token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | NullSupport | none | Boolean, pass true if you wish to update any user profile field with a NULL value, You can get the details [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |FirstName|user's first name
  |LastName|user's last name | Model Class containing Definition of payload for User Profile update API [**Required**]
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-update-profile-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/account" method="PUT" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey","default":""},{"key":"emailTemplate"},{"key":"fields"},{"key":"nullSupport"},{"key":"smsTemplate"},{"key":"verificationUrl"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"", "LastName":""}}' sampleresponse='{ "IsPosted": true, "Data": { "Identities": [ "&ltArray of Identites&gt" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "phoneId": "824525-add135", "PhoneIdVerified": true, "Roles": [ "teacher" ], "ExternalUserLoginId": "asybkyabskdhbkad", "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "Country": { "Code": "HS", "Name": "House Smith" }, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "blah", "blah" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "anlkeruna;sa", "TokenSecret": "adga!rgagads" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false } }'></try-me-out>

## Auth Reset Password by Reset Token

  Sets a new password for the consumer corresponding to the specified reset token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/password/reset`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  | resettoken | The reset token received in the forgot password email. [**Required**]
  | password | The new password for the consumer's account. [**Required**]
  | welcomeemailtemplate | Welcome email template. [**Optional**]
  | resetpasswordemailtemplate | Reset password email template. [**Optional**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-reset-password-by-reset-token" endpoint="https://api.loginradius.com/identity/v2/auth/password/reset" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"resettoken":"","password":"","welcomeemailtemplate": "","resetpasswordemailtemplate":""}}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Auth Resend Email Verification

  Resends the verification email to the consumer corresponding to the specified Email ID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/register`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | emailTemplate | none | Email template name [**Optional**] |
  | verificationUrl | none | Email verification url [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-resend-email-verification" endpoint="https://api.loginradius.com/identity/v2/auth/register" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"emailTemplate"},{"key":"verificationUrl"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":""}}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Auth Delete Account with Email Confirmation

  Triggers the delete account process for the consumer corresponding to the specified access token. A confirmation email for account deletion will be sent to the consumer.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/auth/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | DeleteUrl | none | Url of the site [**Optional**] |
  | EmailTemplate | none | Email template name [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-delete-account-with-email-confirmation" endpoint="https://api.loginradius.com/identity/v2/auth/account" method="DELETE" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"deleteUrl"},{"key":"emailTemplate"}]}' sampleresponse='{ "IsDeleteRequestAccepted": true }'></try-me-out>
 
## Auth Remove Email

  Removes additional emails from the consumer corresponding to the specified access token.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/auth/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="auth-remove-email" endpoint="https://api.loginradius.com/identity/v2/auth/email" method="DELETE" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":""}}' sampleresponse='{ "IsDeleted": true }'></try-me-out>

[Go Back to Home Page](/)

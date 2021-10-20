---
title: "Phone Authentication API"
tags: ["Phone Authentication API"]
description: "This is a document detailing the LoginRadius Phone Authentication APIs."
path: "/references/api/phone-authentication"
---

# Phone Authentication

## Phone Login

  Exchanges consumer login details for a copy of their user data and a LoginRadius access token.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/login`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | LoginUrl | none | Url where the user is logging from [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |password|Password for the email
  |phone|New Phone Number | Model Class containing Definition of payload for PhoneAuthenticationModel API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-login" endpoint="https://api.loginradius.com/identity/v2/auth/login" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"fields","default":""},{"key":"loginUrl"},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phone":"","password":""}}' sampleresponse='{ "Profile": { "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "phoneId": "824525-add135", "ExternalUserLoginId": "asybkyabskdhbkad", "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "Country": { "Code": "HS", "Name": "House Smith" }, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "skiing", "reading" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "a02**8a7-****-4453-****-a5e7**e1f358", "TokenSecret": "b129e8a7-****-8652-****-a7e611e1f123" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false }, "access_token": "a029e8a7-****-4453-****-a5e721e1f358", "expires_in": "2017-08-17T10:52:36.1644137Z" }'></try-me-out>
 
## Phone Forgot Password by OTP

  Sends a verification OTP SMS to reset the consumer's password.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/password/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-forgot-password-by-otp" endpoint="https://api.loginradius.com/identity/v2/auth/password/otp" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phone":""}}' sampleresponse='{ "IsPosted": true, "Data": { "AccountSid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "Sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" } }'></try-me-out>
 
## Phone Resend Verification OTP

  Resends a verification OTP SMS to verify the consumer's Phone ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/phone/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-resend-verification-otp" endpoint="https://api.loginradius.com/identity/v2/auth/phone/otp" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phone":""}}' sampleresponse='{ "IsPosted": true, "Data": { "AccountSid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "Sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" } }'></try-me-out>
 
## Phone Resend Verification OTP by Token

  Resends a verification OTP SMS to verify the consumer's Phone ID in cases where the consumer is already logged in.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/phone/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-resend-verification-otp-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/phone/otp" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"access_token"},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phone":""}}' sampleresponse='{ "IsPosted": true, "Data": { "AccountSid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "Sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" } }'></try-me-out>

## Phone User Registration by SMS

  Registers a new consumer on your app and triggers the Phone ID verification process.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/auth/register`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | sott | none | LoginRadius Secured One Time Token [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | Options | none | PreventVerificationEmail (Specifying this value prevents the verification email from being sent. Only applicable if you have the optional email verification flow) [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
  | WelcomeEmailTemplate | none | Name of the welcome email template [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |FirstName|user's first name
  |LastName|user's last name
  |Password|Password for the email
  |PhoneId|Phone ID (Unique Phone Number Identifier of the user) | Model Class containing Definition of payload for Auth User Registration API [**Required**]

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-user-registration-by-sms" endpoint="https://api.loginradius.com/identity/v2/auth/register" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"sott"},{"key":"fields"},{"key":"options"},{"key":"smsTemplate"},{"key":"verificationUrl"},{"key":"welcomeEmailTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"","LastName":"","Password":"","PhoneId":""}}' sampleresponse='{ "IsPosted": true }'></try-me-out>
 
## Phone Number Availability

  Checks if the specified Phone ID already exists on your app.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/auth/phone`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Phone | none | The Registered Phone Number [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-number-availability" endpoint="https://api.loginradius.com/identity/v2/auth/phone" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"phone"}]}' sampleresponse='{ "IsExist": true }'></try-me-out>
 
## Phone Reset Password by OTP

  Resets the consumer's password by consuming their verification OTP.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/password/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |otp|The Verification Code
  |password|Password for the email
  |Phone|New Phone Number | Model Class containing Definition of payload for ResetPasswordByOTP API [**Required**]
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-reset-password-by-otp" endpoint="https://api.loginradius.com/identity/v2/auth/password/otp" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"otp":"", "password":"","phone":""}}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Phone Verification OTP

  Validates the verification OTP sent to verify the consumer's Phone ID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/phone/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Otp | none | The Verification Code [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-verification-otp" endpoint="https://api.loginradius.com/identity/v2/auth/phone/otp" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"otp"},{"key":"fields"},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phone":""}}' sampleresponse='{ "Profile": { "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "phoneId": "824525-add135", "ExternalUserLoginId": "asybkyabskdhbkad", "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "Country": { "Code": "HS", "Name": "House Smith" }, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "skiing", "reading" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "a02**8a7-****-4453-****-a5e7**e1f358", "TokenSecret": "b129e8a7-****-8652-****-a7e611e1f123" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false }, "access_token": "a029e8a7-****-4453-****-a5e721e1f358", "expires_in": "2017-08-17T10:52:36.1644137Z" }'></try-me-out>

## Phone Verification OTP by Token

  Consumes the verification OTP sent to verify the consumer's Phone ID when the consumer is already logged in.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/phone/otp`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | Otp | none | The Verification Code [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-verification-otp-by-token" endpoint="https://api.loginradius.com/identity/v2/auth/phone/otp" method="PUT" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"otp"},{"key":"smsTemplate"}]}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Phone Number Update

  Updates the Phone ID of the consumer corresponding to the specified access token.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/auth/phone`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="phone-number-update" endpoint="https://api.loginradius.com/identity/v2/auth/phone" method="PUT" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"},{"key":"smsTemplate"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"phone":""}}' sampleresponse='{ "IsPosted": true, "Data": { "AccountSid": "ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX", "Sid": "SMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX" } }'></try-me-out>

## Remove Phone ID by Access Token

  Deletes the Phone ID from the consumer corresponding to the specified access token.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/auth/phone`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | access_token | none | Uniquely generated identifier key by LoginRadius that is activated after successful authentication. [**Required**] |
  | apikey | none | LoginRadius API Key [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="remove-phone-id-by-access-token" endpoint="https://api.loginradius.com/identity/v2/auth/phone" method="PUT" params='{"queryParams":[{"key":"access_token","default":""},{"key":"apiKey"}]}' sampleresponse='{ "IsDeleted": true }'></try-me-out>

[Go Back to Home Page](/)

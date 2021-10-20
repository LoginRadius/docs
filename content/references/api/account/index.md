---
title: "Account API"
tags: ["Account API"]
description: "This is a document detailing the LoginRadius Account APIs."
path: "/references/api/account"
---

# Account API

## Account Create

  Creates a new consumer. This will bypass the normal email verification process.

  > Note: All mandatory fields must be included when creating a new consumer.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/manage/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Email|boolean type value, default is true
  |FirstName|user's first name
  |LastName|user's last name
  |Password|Password for the email | Model Class containing Definition of payload for Account Create API [**Required**]

  ### Try Me Out

  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-create" endpoint="https://api.loginradius.com/identity/v2/manage/account" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"Test","LastName":"Account","Email":[{"Type":"Primary","Value": "example@example.com"}],"Password":"xxxxxxxxxxxx"}}' sampleresponse='{"Password": "********************","LastPasswordChangeDate": "2018-03-05T22:13:36.48263Z","PasswordExpirationDate": "2028-02-07T19:02:55.803Z","LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e","EmailVerified": false,"IsActive": true,"IsDeleted": false,"Uid": "ffa5884ec3a943db8b5484f0d18e2fde","CustomFields": {"CustomField1": "Custom data value 1 ","CustomField2": "Custom data value 2"},"IsEmailSubscribed": false,"UserName": "Johndoe123","NoOfLogins": 7,"PreviousUids": "61432e56***1495e89d3a100e36aeb8b","PhoneId": "+16045552368","PhoneIdVerified": false,"ExternalUserLoginId": "Johndoe123","RegistrationProvider": "Email","IsLoginLocked": false,"LoginLockedType": "None","LastLoginLocation": "Vancouver, Canada","RegistrationSource": "API","IsCustomUid": false,"UnverifiedEmail": [{"Type": "Secondary","Value": "abc@example.com"}],"IsSecurePassword": true,"ID": "0e0d1f048d8844408315aeb100f39649","Provider": "Email","Prefix": "Dr.","FirstName": "John","MiddleName": "Doe","LastName": "Order","Suffix": "Sr.","FullName": "John Doe Order","NickName": "Johnny","ProfileName": "Johnny","BirthDate": "10-12-1985","Gender": "M","Website": "www.example.com","Email": [{"Type": "Primary","Value": "example@example.com"}],"Country": {"Code": "ca","Name": "Canada"},"ThumbnailImageUrl": "https://example.com/image_thumb.png","ImageUrl": "https://example.com/image_full.png","Favicon": "https://example.com/image_fav.png","ProfileUrl": "https://example.com/profile","HomeTown": "Vancouver","State": "British-Columbia","City": "Vancouver","Industry": "IT","About": "I keep track of the latest trends","TimeZone": "-8","LocalLanguage": "en-US","CoverPhoto": "https://example.com/profile/cover/cover_img.png","TagLine": "To be or not to be, that is the question","Language": "en-US","Verified": true,"UpdatedTime": "2018-02-06T19:02:55.803Z","Positions": [{"Position": "astronaut","Summary": "An astronaut.","StartDate": "2008-02-07T19:02:55.803Z","EndDate": "2015-02-07T19:02:55.803Z","IsCurrent": "false","Location": "Houston","Comapny": {"Name": "NASA","Type": "astronaut","Industry": "National secure"},"Company": {"Name": "NASA","Type": "astronaut","Industry": "National secure"}}],"Educations": [{"School": "UCL","year": "2010","type": "student","notes": "great","activities": "sports","degree": "master","fieldofstudy": "astronaut","StartDate": "2004-02-07T19:02:55.803Z","EndDate": "2005-02-07T19:02:55.803Z"}],"PhoneNumbers": [{"PhoneType": "Mobile","PhoneNumber": "+16045552368"}],"IMAccounts": [{"AccountType": "primary","AccountName": "Example"}],"Addresses": [{"Type": "Primary","Address1": "1281 West Mall","Address2": "Room 121","City": "Edmonton","State": "Alberta","PostalCode": "546841","Region": "Myself","Country": "Canada"}],"MainAddress": "1281 West Mall rm 121","Created": "5/20/2008 12:33:35 AM +00:00","CreatedDate": "2018-03-05T22:13:36.2013716Z","ModifiedDate": "2018-03-05T22:13:36.48263Z","LocalCity": "Vancouver","ProfileCity": "Vancouver","LocalCountry": "Canada","ProfileCountry": "Canada","FirstLogin": false,"IsProtected": false,"RelationshipStatus": "Single","Quota": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","Quote": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.","InterestedIn": ["female"],"Interests": [{"InterestedType": "Sports","InterestedName": "Badminton"}],"Religion": "Undecided","Political": "Undecided","Sports": [{"Id": "23423534563463466","Name": "Badminton"}],"InspirationalPeople": [{"Id": "234523234323423423432424","Name": "Bill Gates"}],"HttpsImageUrl": "https://www.example.com/profile/image.png","FollowersCount": 70,"FriendsCount": 800,"IsGeoEnabled": "false","TotalStatusesCount": 11,"Associations": "Board of Canada","NumRecommenders": 3,"Honors": "Valedictorian","Awards": [{"Id": "001","Name": "One of Smith","Issuer": "Lord Smith"}],"Skills": [{"Id": "123","Name": "C++"}],"CurrentStatus": [{"Id": "328","Text": "Gone for help","Source": "examplesource","CreateDate": "2006-02-07T19:02:55.803Z"}],"Certifications": [{"Id": "512","Name": "Engineer certification","Authority": "The Great Engineer Association","Number": "1","StartDate": "2006-02-07T19:02:55.803Z","EndDate": "2007-02-07T19:02:55.803Z"}],"Courses": [{"Id": "888","Name": "Advanced Algorithm","Number": "1"}],"Volunteer": [{"Id": "456","Role": "Teacher","Organization": "The Great Wall","Cause": "Teaching people to defend the Wall"}],"RecommendationsReceived": [{"Id": "846","RecommendationType": "Primary","RecommendationText": "The Great Wall","Recommender": "King"}],"Languages": [{"Id": "484","Name": "Latin","Proficiency": "Business"}],"Projects": [{"Id": "789","Name": "Night Watcher","Summary": "Defend the wall","With": [{"Id": "555","Name": "Meng"}],"StartDate": "2010-02-07T19:02:55.803Z","EndDate": "2011-02-07T19:02:55.803Z","isCurrent": "false"}],"Games": [{"Id": "777","Name": "Battleship","Category": "Strategy","CreateDate": "2010-10-07T19:02:55.803Z"}],"Family": [{"Id": "055","Name": "Robb Smith","Relationship": "Brother"},{"Id": "056","Name": "Eddard Smith","Relationship": "Father"}],"TeleVisionShow": [{"Id": "777","Name": "Getting out","Category": "Comedy","CreateDate": "2011-02-07T19:02:55.803Z"}],"MutualFriends": [{"Id": "060","Name": "Robb Smith","FirstName": "Robb","LastName": "Smith","Birthday": "2000-08-24T12:21:41.808Z","Hometown": "Vancouver","Link": "classmate","Gender": "M"},{"Id": "061","Name": "Sansa Smith","FirstName": "Sansa","LastName": "Smith","Birthday": "2000-08-24T12:21:41.808Z","Hometown": "Vancouver","Link": "classmate","Gender": "F"}],"Movies": [{"Id": "788","Name": "Le Voyage dans la Lune","Category": "Sci-Fi","CreateDate": "2017-02-07T19:02:55.803Z"}],"Books": [{"Id": "788","Name": "Macbeth","Category": "Theatre","CreateDate": "2000-01-15T19:02:55.803Z"}],"AgeRange": {"Min": "15","Max": "20"},"PublicRepository": 5,"Hireable": false,"RepositoryUrl": "https://api.example.com/users/johnnyd/repos","Age": "32","Patents": [{"Id": "516","Title": "Machine that flies","Date": "2009-02-07T19:02:55.803Z"}],"FavoriteThings": [{"Id": "781","Name": "BasketBall","Type": "Sports"}],"ProfessionalHeadline": "Always, ready","ProviderAccessCredential": {"AccessToken": "**************************************","TokenSecret": "**************************************"},"RelatedProfileViews": [{"Id": "884","FirstName": "Jemery","LastName": "Fir"}],"KloutScore": {"KloutId": "51656","Score": "52.0"},"LRUserID": "user32134","PlacesLived": [{"Name": "Allision road","IsPrimary": "True"}],"Publications": [{"Id": "51656","Title": "ASA","Publisher": "Fisher","Authors": [{"Id": "51","Name": "Darker"}],"Date": "1997-02-07T19:02:55.803Z","Url": "whatwebsite.com","Summary": "What would you do as soon as you can?"}],"JobBookmarks": [{"IsApplied": "true","ApplyTimestamp": "541","IsSaved": "false","SavedTimestamp": "588","Job": {"Active": "true","Id": "51","DescriptionSnippet": "Darker","Compony": {"Id": "489","Name": "Night Watch"},"Position": {"Title": "Commander"},"PostingTimestamp": "988"}}],"Suggestions": {"CompaniestoFollow": [{"Id": "568","Name": "Amazon"}],"IndustriestoFollow": [{"Id": "695","Name": "Software"}],"NewssourcetoFollow": [{"Id": "352","Name": "NewYorkFans"}],"PeopletoFollow": [{"Id": "845","Name": "Anna Smith"}]},"Badges": [{"BadgeId": "531","Name": "MVP","BadgeMessage": "Most Valuable Person","Description": "An award to triple double","ImageUrl": "www.imageMVP.com"}],"MemberUrlResources": [{"Url": "www.memberurl.com","UrlName": "MemberURL"}],"TotalPrivateRepository": 0,"Currency": "CAD","StarredUrl": "www.image.com","GistsUrl": "www.gists.com","PublicGists": 0,"PrivateGists": 0,"Subscription": {"Name": "test","Space": "none","PrivateRepos": "testRepo1","Collaborators": "John"},"Company": "Night Watch","GravatarImageUrl": "www.gravatar.com/avatar/*********************","ProfileImageUrls": {"Image Url": "https://example.com.com/*****/picture?type=small","ThumbnailImage Url": "https://example.com/*****/picture?type=square"},"WebProfiles": {"Small": "https://graph.facebook.com/*****/picture?type=small","Square": "https://graph.Profile.com/*****/picture?type=square","Large": "https://graph.facebook.com/*****/picture?type=large","Profile": "https://graph.facebook.com/******/picture?type=normal"},"PinsCount": 2,"BoardsCount": 3,"LikesCount": 20,"SignupDate": "2018-03-05T22:13:36.2013716Z","LastLoginDate": "0001-01-01T00:00:00","Identities": ["<Array of Identities>"]}'></try-me-out>

## Forgot Password Token

  Generates a Forgot Password token for the specified Email ID. This can optionally send a Forgot Password email to the consumer.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/manage/account/forgot/token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | ResetPasswordUrl | none | Url to which user should get re-directed to for resetting the password [**Optional**] |
  | SendEmail | none | If set to true, the API will also send a Forgot Password email to the customer, bypassing any Bot Protection challenges that they are faced with. [**Optional**] |

  ### Try Me Out
  
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="forgot-password-token" endpoint="https://api.loginradius.com/identity/v2/manage/account/forgot/token" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"sendEmail"},{"key":"emailTemplate"},{"key":"resetPasswordUrl"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"example@example.com"}}' sampleresponse='{ "ForgotToken": "7be0d7b06a********f98f46ca84083", "IdentityProviders": [ "Facebook" ] }'></try-me-out>

## Email Verification Token

  Generates an Email Verification token for the specified Email ID.

  ### Endpoint
  `POST` `https://api.loginradius.com/identity/v2/manage/account/verify/token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="email-verification-token" endpoint="https://api.loginradius.com/identity/v2/manage/account/verify/token" method="POST" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"email":"example@example.com"}}' sampleresponse='{ "VerificationToken": "*****ae92c458c*****c76a9b29" }'></try-me-out>

## Account Profile by Email

  Retrieves consumer profile data corresponding to the specified Email ID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Email | none | Email of the user [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-profile-by-email" endpoint="https://api.loginradius.com/identity/v2/manage/account" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"email"}]}' sampleresponse='{ "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "Password": "Rfc2898DeriveBytes$1000$********************************aAHpytClCaWXINQESGnOTCwMjc1mQE9gdZ9NUE=", "PhoneId": "146*****409", "PhoneIdVerified": false, "Roles": [ "teacher" ], "PinsCount": 0, "PrivacyPolicy": { "Version": "version2", "AcceptSource": "API", "AcceptDateTime": "2018-03-13T16:46:38.3957202Z" }, "ExternalUserLoginId": "asybkyabskdhbkad", "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "RegistrationSource": "https://<site-name>.hub.loginradius.com/auth.aspx", "SignupDate": "2018-03-23T05:19:53.621Z", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "EmailVerified": false, "FirstLogin": false, "Country": { "Code": "HS", "Name": "House Smith" }, "IsActive": true, "IsCustomUid": false, "IsDeleted": false, "IsLoginLocked": false, "IsSecurePassword": null, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "LastLoginDate": "2018-03-23T08:09:59.465Z", "LastLoginLocation": "Mumbai, India", "LastPasswordChangeDate": "2017-08-24T13:04:12.1810017Z", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "NoOfLogins": 7, "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "BoardsCount": 0, "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "blah", "blah" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "LikesCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "anlkeruna;sa", "TokenSecret": "adga!rgagads" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false }'></try-me-out>

## Account Profile by Phone ID

  Retrieves consumer profile data corresponding to the specified Phone ID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Phone | none | The Registered Phone Number [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-profile-by-phoneid" endpoint="https://api.loginradius.com/identity/v2/manage/account" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"phone"}]}' sampleresponse='{ "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "Password": "Rfc2898DeriveBytes$1000$********************************aAHpytClCaWXINQESGnOTCwMjc1mQE9gdZ9NUE=", "PhoneId": "146*****409", "PhoneIdVerified": false, "PinsCount": 0, "PrivacyPolicy": { "Version": "version2", "AcceptSource": "API", "AcceptDateTime": "2018-03-13T16:46:38.3957202Z" }, "ExternalUserLoginId": "asybkyabskdhbkad", "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "RegistrationSource": "https://<site-name>.hub.loginradius.com/auth.aspx", "SignupDate": "2018-03-23T05:19:53.621Z", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "EmailVerified": false, "FirstLogin": false, "Country": { "Code": "HS", "Name": "House Smith" }, "IsActive": true, "IsCustomUid": false, "IsDeleted": false, "IsLoginLocked": false, "IsSecurePassword": null, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "LastLoginDate": "2018-03-23T08:09:59.465Z", "LastLoginLocation": "Mumbai, India", "LastPasswordChangeDate": "2017-08-24T13:04:12.1810017Z", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "NoOfLogins": 7, "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "BoardsCount": 0, "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "blah", "blah" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "LikesCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "anlkeruna;sa", "TokenSecret": "adga!rgagads" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false }'></try-me-out>

## Account Profile by UID

  Retrieves consumer profile data corresponding to the specified UID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/{uid}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-profile-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}]}' sampleresponse='{ "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "Password": "Rfc2898DeriveBytes$1000$********************************aAHpytClCaWXINQESGnOTCwMjc1mQE9gdZ9NUE=", "PhoneId": "146*****409", "PhoneIdVerified": false, "PinsCount": 0, "PrivacyPolicy": { "Version": "version2", "AcceptSource": "API", "AcceptDateTime": "2018-03-13T16:46:38.3957202Z" }, "ExternalUserLoginId": "asybkyabskdhbkad", "Roles": [ "teacher" ], "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "RegistrationSource": "https://<site-name>.hub.loginradius.com/auth.aspx", "SignupDate": "2018-03-23T05:19:53.621Z", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "EmailVerified": false, "FirstLogin": false, "Country": { "Code": "HS", "Name": "House Smith" }, "IsActive": true, "IsCustomUid": false, "IsDeleted": false, "IsLoginLocked": false, "IsSecurePassword": null, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "LastLoginDate": "2018-03-23T08:09:59.465Z", "LastLoginLocation": "Mumbai, India", "LastPasswordChangeDate": "2017-08-24T13:04:12.1810017Z", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "NoOfLogins": 7, "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "BoardsCount": 0, "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "blah", "blah" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "LikesCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "anlkeruna;sa", "TokenSecret": "adga!rgagads" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false }'></try-me-out>

## Account Password

  Retrieves hashed password for the consumer corresponding to the specified UID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/{uid}/password`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-password" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/password" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}]}' sampleresponse='{ "PasswordHash": "Rfc2898Deriv*********A1lgjyagUkYkPiBhDjMDA==**********DWkIQd0dXyW666c=" }'></try-me-out>

## Access Token by UID

  Gets a LoginRadius access token corresponding to the specified UID.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/access_token`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Uid | none | UID, the unified identifier for each user account [**Required**] |

  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="access-token-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/access_token" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"uid"}]}' sampleresponse='{ "access_token": "62c44156-****-4176-****-3559ce8d0baa", "refresh_token": "26f50538-****-4933-****-f69644a6b535", "expires_in": "2020-05-17T01:22:06.7774302Z" }'></try-me-out>

## Account Identities by Email

  Retrieves all consumer identities corresponding to the specified Email.

  > Note: This is intended for specific workflows where an email may correspond with multiple UIDs.

  ### Endpoint
  `GET` `https://api.loginradius.com/identity/v2/manage/account/identities`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Email | none | Email of the user [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-identities-by-email" endpoint="https://api.loginradius.com/identity/v2/manage/account/identities" method="GET" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"email"},{"key":"fields"}]}' sampleresponse='{ "Data": [ { "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "Password": "Rfc2898DeriveBytes$1000$********************************aAHpytClCaWXINQESGnOTCwMjc1mQE9gdZ9NUE=", "PhoneId": "146*****409", "PhoneIdVerified": false, "PinsCount": 0, "PrivacyPolicy": { "Version": "version2", "AcceptSource": "API", "AcceptDateTime": "2018-03-13T16:46:38.3957202Z" }, "ExternalUserLoginId": "asybkyabskdhbkad", "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "RegistrationSource": "https://<site-name>.hub.loginradius.com/auth.aspx", "SignupDate": "2018-03-23T05:19:53.621Z", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "EmailVerified": false, "FirstLogin": false, "Country": { "Code": "HS", "Name": "House Smith" }, "IsActive": true, "IsCustomUid": false, "IsDeleted": false, "IsLoginLocked": false, "IsSecurePassword": null, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "LastLoginDate": "2018-03-23T08:09:59.465Z", "LastLoginLocation": "Mumbai, India", "LastPasswordChangeDate": "2017-08-24T13:04:12.1810017Z", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "NoOfLogins": 7, "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "BoardsCount": 0, "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "blah", "blah" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "LikesCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "anlkeruna;sa", "TokenSecret": "adga!rgagads" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false } ] }'></try-me-out>

## Account Update

  Updates profile information of the consumer profile corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  | NullSupport | none | Boolean, pass true if you wish to update any user profile field with a NULL value, You can get the details [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |FirstName|user's first name
  |LastName|user's last name | Model Class containing Definition of payload for Account Update API [**Required**]
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-update" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"nullSupport"}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"FirstName":"", "LastName":""}}' sampleresponse='{ "Identities": [ "Array of Identites" ], "UserName": "JohnSmith", "Uid": "f2005bd20****************3278343", "PasswordExpirationDate": "2028-02-07T19:02:55.803Z", "PreviousUids": "61432e56***1495e89d3a100e36aeb8b", "CustomFields": { "id": "https://graph.facebook.com/*****/picture?type=small", "id2": "https://graph.Profile.com/*****/picture?type=square" }, "LastPasswordChangeToken": "1542daac-4df0-4270-b5b5-5d7922492d7e", "Password": "Rfc2898DeriveBytes$1000$********************************aAHpytClCaWXINQESGnOTCwMjc1mQE9gdZ9NUE=", "PhoneId": "146*****409", "PhoneIdVerified": false, "PinsCount": 0, "PrivacyPolicy": { "Version": "version2", "AcceptSource": "API", "AcceptDateTime": "2018-03-13T16:46:38.3957202Z" }, "ExternalIds": [ { "Source": "source_name{{PerfectMind}}", "SourceId": "id{{*******}}" } ], "ExternalUserLoginId": "asybkyabskdhbkad", "Roles": [ "teacher" ], "RegistrationProvider": "Email", "UnverifiedEmail": "John1Smith@hmail.com", "ID": "dfb7****fc947618****f0ae46ff", "Provider": "Email", "Prefix": "Mr.", "FirstName": "Test1", "MiddleName": "M.", "LastName": "Account2", "Suffix": "Junior", "FullName": "Test1 M. Account2", "NickName": "TMC", "ProfileName": "TMA", "BirthDate": "1990-02-07", "RegistrationSource": "https://<site-name>.hub.loginradius.com/auth.aspx", "SignupDate": "2018-03-23T05:19:53.621Z", "Gender": "F", "Website": "www.whatwebsite.com", "Email": [ { "Type": "Primary", "Value": "NorthOfKing@Westeros0.com" } ], "EmailVerified": false, "FirstLogin": false, "Country": { "Code": "HS", "Name": "House Smith" }, "IsActive": true, "IsCustomUid": false, "IsDeleted": false, "IsLoginLocked": false, "IsSecurePassword": null, "ThumbnailImageUrl": "www.image.com", "ImageUrl": "www.image.com", "Favicon": "www.image.com", "ProfileUrl": "www.image.com", "HomeTown": "Vancouver", "State": "BC", "City": "Vancouver", "Industry": "IT", "About": "a junior engineer", "TimeZone": "+8", "LocalLanguage": "English", "CoverPhoto": "www.beatiufulimage.com", "TagLine": "#engineer", "Language": "English", "Verified": "false", "LastLoginDate": "2018-03-23T08:09:59.465Z", "LastLoginLocation": "Mumbai, India", "LastPasswordChangeDate": "2017-08-24T13:04:12.1810017Z", "UpdatedTime": "2018-02-06T19:02:55.803Z", "Positions": [ { "Position": "astronaut", "Summary": "An astronaut.", "StartDate": "2008-02-07T19:02:55.803Z", "EndDate": "2015-02-07T19:02:55.803Z", "IsCurrent": "false", "Location": "Houston", "Comapny": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" }, "Company": { "Name": "NASA", "Type": "astronaut", "Industry": "National secure" } } ], "Educations": [ { "School": "UCL", "year": "2010", "type": "student", "notes": "great", "activities": "sports", "degree": "master", "fieldofstudy": "astronaut", "StartDate": "2004-02-07T19:02:55.803Z", "EndDate": "2005-02-07T19:02:55.803Z" } ], "PhoneNumbers": [ { "PhoneType": "Mobile", "PhoneNumber": "84684*543" } ], "IMAccounts": [ { "AccountType": "primary", "AccountName": "Guessnot" } ], "Addresses": [ { "Type": "Primary", "Address1": "1281 West Mall", "Address2": "Room 121", "City": "Edmonton", "State": "Alberta", "PostalCode": "546841", "Region": "Myself", "Country": "Canada" } ], "MainAddress": "1281 West Mall rm 121", "Created": "true", "CreatedDate": "2017-08-24T12:21:41.808Z", "ModifiedDate": "2017-08-24T13:04:12.1810017Z", "NoOfLogins": 7, "LocalCity": "Vancouver", "ProfileCity": "Edmonton", "LocalCountry": "House Smith", "ProfileCountry": "Canada", "BoardsCount": 0, "IsProtected": "false", "RelationshipStatus": "single", "Quota": "Winter is coming", "Quote": "North remembers", "InterestedIn": [ "blah", "blah" ], "Interests": [ { "InterestedType": "Most", "InterestedName": "Shoot" } ], "Religion": "None", "Political": "None", "Sports": [ { "Id": "545", "Name": "Swimming" } ], "InspirationalPeople": [ { "Id": "5846", "Name": "Sansa" } ], "HttpsImageUrl": "www.image.com", "FollowersCount": 0, "FriendsCount": 0, "LikesCount": 0, "IsGeoEnabled": "false", "TotalStatusesCount": 0, "Associations": "North Army", "NumRecommenders": 0, "Honors": "the engineer of the year", "Awards": [ { "Id": "001", "Name": "One of Smith", "Issuer": "Lord Smith" } ], "Skills": [ { "Id": "133", "Name": "debug" } ], "CurrentStatus": [ { "Id": "328", "Text": "Go for help", "Source": "testsource", "CreateDate": "2006-02-07T19:02:55.803Z" } ], "Certifications": [ { "Id": "512", "Name": "Engineer certification", "Authority": "The Great Engineer Association", "Number": "1", "StartDate": "2006-02-07T19:02:55.803Z", "EndDate": "2007-02-07T19:02:55.803Z" } ], "Courses": [ { "Id": "888", "Name": "Advanced Algorithm", "Number": "1" } ], "Volunteer": [ { "Id": "456", "Role": "Teacher", "Organization": "The Great Wall", "Cause": "Teach people to defend the Wall" } ], "RecommendationsReceived": [ { "Id": "846", "RecommendationType": "Primary", "RecommendationText": "The Great Wall", "Recommender": "King" } ], "Languages": [ { "Id": "484", "Name": "Latin", "Proficiency": "Okay" } ], "Projects": [ { "Id": "789", "Name": "Night Watcher", "Summary": "Defend the wall", "With": [ { "Id": "555", "Name": "Meng" } ], "StartDate": "2010-02-07T19:02:55.803Z", "EndDate": "2011-02-07T19:02:55.803Z", "isCurrent": "false" } ], "Games": [ { "Id": "777", "Name": "Working out", "Category": "Sports", "CreateDate": "2010-10-07T19:02:55.803Z" } ], "Family": [ { "Id": "055", "Name": "Robb Smith", "Relationship": "Brother" }, { "Id": "056", "Name": "Eddard Smith", "Relationship": "Father" } ], "TeleVisionShow": [ { "Id": "777", "Name": "Getting out", "Category": "Comedy", "CreateDate": "2011-02-07T19:02:55.803Z" } ], "MutualFriends": [ { "Id": "060", "Name": "Robb Smith", "FirstName": "Robb", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "M" }, { "Id": "061", "Name": "Sansa Smith", "FirstName": "Sansa", "LastName": "Smith", "Birthday": "2000-08-24T12:21:41.808Z", "Hometown": "Vancouver", "Link": "classmate", "Gender": "F" } ], "Movies": [ { "Id": "788", "Name": "Getting in", "Category": "Comedy", "CreateDate": "2017-02-07T19:02:55.803Z" } ], "Books": [ { "Id": "788", "Name": "Getting in", "Category": "Interest", "CreateDate": "2000-01-15T19:02:55.803Z" } ], "AgeRange": { "Min": "15", "Max": "20" }, "PublicRepository": "Master", "Hireable": false, "RepositoryUrl": "www.master.com", "Age": "18", "Patents": [ { "Id": "516", "Title": "POST", "Date": "2009-02-07T19:02:55.803Z" } ], "FavoriteThings": [ { "Id": "781", "Name": "BasketBall", "Type": "Sports" } ], "ProfessionalHeadline": "dragon", "ProviderAccessCredential": { "AccessToken": "anlkeruna;sa", "TokenSecret": "adga!rgagads" }, "RelatedProfileViews": [ { "Id": "884", "FirstName": "Jemery", "LastName": "Fir" } ], "KloutScore": { "KloutId": "51656", "Score": "52.0" }, "LRUserID": "526526", "PlacesLived": [ { "Name": "Allision road", "IsPrimary": "True" } ], "Publications": [ { "Id": "51656", "Title": "ASA", "Publisher": "Fisher", "Authors": [ { "Id": "51", "Name": "Darker" } ], "Date": "1997-02-07T19:02:55.803Z", "Url": "whatwebsite.com", "Summary": "What would you do as soon as you can?" } ], "JobBookmarks": [ { "IsApplied": "true", "ApplyTimestamp": "541", "IsSaved": "false", "SavedTimestamp": "588", "Job": { "Active": "true", "Id": "51", "DescriptionSnippet": "Darker", "Compony": { "Id": "489", "Name": "Night Watch" }, "Position": { "Title": "Commander" }, "PostingTimestamp": "988" } } ], "Suggestions": { "CompaniestoFollow": [ { "Id": "568", "Name": "Amazon" } ], "IndustriestoFollow": [ { "Id": "695", "Name": "Software" } ], "NewssourcetoFollow": [ { "Id": "352", "Name": "NewYorkFans" } ], "PeopletoFollow": [ { "Id": "845", "Name": "Anna Smith" } ] }, "Badges": [ { "BadgeId": "531", "Name": "MVP", "BadgeMessage": "Most Valuable Person", "Description": "An award to triple double", "ImageUrl": "www.imageMVP.com" } ], "MemberUrlResources": [ { "Url": "www.memberurl.com", "UrlName": "MemberURL" } ], "TotalPrivateRepository": 0, "Currency": "CAD", "StarredUrl": "www.image.com", "GistsUrl": "www.gists.com", "PublicGists": 0, "PrivateGists": 0, "Subscription": { "Name": "Song of Ice and Fire", "Space": "none", "PrivateRepos": "testRepo1", "Collaborators": "No idea" }, "Company": "Night Watch", "GravatarImageUrl": "www.image.com", "ProfileImageUrls": { "test1": "https://graph.facebook.com/*****/picture?type=small", "test2": "https://graph.Profile.com/*****/picture?type=square" }, "WebProfiles": { "Small": "https://graph.facebook.com/*****/picture?type=small", "Square": "https://graph.Profile.com/*****/picture?type=square", "Large": "https://graph.facebook.com/*****/picture?type=large", "Profile": "https://graph.facebook.com/******/picture?type=normal" }, "IsEmailSubscribed": false }'></try-me-out>

## Update Phone ID by UID

  Updates Phone ID for the consumer corresponding to the specified UID. You can update the Phone ID for both verified and unverified consumers. This will directly replace their Phone ID, bypassing the OTP verification process.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/PhoneId`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="update-phoneid-by-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/phoneid" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Phone":""}}' sampleresponse='{ "Password": "54da3c7a375f3fxxxxxxxxxxxxxxxxxxxxb39a173a3329499db:cCvb7wqA", "LastPasswordChangeDate": null, "PasswordExpirationDate": "2020-03-11T10:24:55.3710000Z", "LastPasswordChangeToken": null, "EmailVerified": true, "IsActive": true, "IsDeleted": false, "Uid": "9c94c6xxxxxxxxxxxxa57ef6a32a", "CustomFields": null, "IsEmailSubscribed": false, "UserName": null, "NoOfLogins": 0, "PhoneId": "12XXXXXX849", "PhoneIdVerified": false, "ExternalUserLoginId": null, "RegistrationProvider": "Email", "IsLoginLocked": false, "LoginLockedType": "None", "LastLoginLocation": null, "RegistrationSource": "API", "IsCustomUid": false, "UnverifiedEmail": null, "IsSecurePassword": null, "PrivacyPolicy": null, "ExternalIds": null, "IsRequiredFieldsFilledOnce": true, "ID": "e05aabfxxxxxxxxe7af689b2b", "Provider": "Email", "Prefix": null, "FirstName": null, "MiddleName": null, "LastName": null, "Suffix": null, "FullName": null, "NickName": null, "ProfileName": null, "BirthDate": null, "Gender": null, "Website": null, "Email": [ { "Type": "Primary", "Value": "newemail04r@mailazy.com" }, { "type": "Secondary", "value": "xxxx01@example.com" }, { "type": "Business", "value": "xxxx02@example.com" } ], "Country": null, "ThumbnailImageUrl": null, "ImageUrl": null, "Favicon": null, "ProfileUrl": null, "HomeTown": null, "State": null, "City": null, "Industry": null, "About": null, "TimeZone": null, "LocalLanguage": null, "CoverPhoto": null, "TagLine": null, "Language": null, "Verified": null, "UpdatedTime": null, "Positions": null, "Educations": null, "PhoneNumbers": null, "IMAccounts": null, "Addresses": null, "MainAddress": null, "Created": null, "CreatedDate": "2019-03-11T10:24:55.3560000Z", "ModifiedDate": "2019-03-11T10:28:22.1053952Z", "ProfileModifiedDate": "2019-03-11T10:28:22.1053952Z", "LocalCity": null, "ProfileCity": null, "LocalCountry": null, "ProfileCountry": null, "FirstLogin": false, "IsProtected": false, "RelationshipStatus": null, "Quota": null, "Quote": null, "InterestedIn": null, "Interests": null, "Religion": null, "Political": null, "Sports": null, "InspirationalPeople": null, "HttpsImageUrl": null, "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": null, "TotalStatusesCount": 0, "Associations": null, "NumRecommenders": 0, "Honors": null, "Awards": null, "Skills": null, "CurrentStatus": null, "Certifications": null, "Courses": null, "Volunteer": null, "RecommendationsReceived": null, "Languages": null, "Projects": null, "Games": null, "Family": null, "TeleVisionShow": null, "MutualFriends": null, "Movies": null, "Books": null, "AgeRange": null, "PublicRepository": null, "Hireable": false, "RepositoryUrl": null, "Age": null, "Patents": null, "FavoriteThings": null, "ProfessionalHeadline": null, "ProviderAccessCredential": null, "RelatedProfileViews": null, "KloutScore": null, "LRUserID": null, "PlacesLived": null, "Publications": null, "JobBookmarks": null, "Suggestions": null, "Badges": null, "MemberUrlResources": null, "TotalPrivateRepository": 0, "Currency": null, "StarredUrl": null, "GistsUrl": null, "PublicGists": 0, "PrivateGists": 0, "Subscription": null, "Company": "LoginRadius", "GravatarImageUrl": null, "ProfileImageUrls": null, "WebProfiles": null, "PinsCount": 0, "BoardsCount": 0, "LikesCount": 0, "SignupDate": "2019-03-11T10:24:55.3560000Z", "LastLoginDate": "0001-01-01T00:00:00.0000000Z", "PreviousUids": null, "Identities": null }'></try-me-out>

## Account Set Password

  Sets password for the consumer corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/password`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-set-password" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/password" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Password":""}}' sampleresponse='{ "PasswordHash": "Rfc2898Derive******mRWi9Uc0G$s5IZG0eO5S6Z*********RBPjyEpGc1hteHTVNl15OM=" }'></try-me-out>

## Account Invalidate Verification Email

  Invalidates Email ID verification status for the consumer corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/invalidateEmail`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | EmailTemplate | none | Email template name [**Optional**] |
  | VerificationUrl | none | Email verification url [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-invalidate-verification-email" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/invalidateemail" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"verificationUrl"},{"key":"emailTemplate"}],"templateParams":[{"key":"uid"}]}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Reset Phone ID Verification

  Resets Phone ID verification for the consumer corresponding to the specified UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/invalidatePhone`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | SmsTemplate | none | SMS Template name [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="reset-phoneid-verification" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/invalidatePhone" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"smsTemplate"}],"templateParams":[{"key":"uid"}]}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Upsert Email

  Adds/Upserts emails for the consumer corresponding to the specified UID by email type. If the email type specified already exists, the existing email value will be updated. Otherwise, a new email record will be added into the account's email array.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/{uid}/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |Email|user's email | Model Class containing Definition of payload for UpsertEmail Property [**Required**]
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="upsert-email" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/email" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"fields"}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Email":[{"Type":"Secondary","Value": "example@example.com"}]}}' sampleresponse='{ "Password": "54da3c7a375f3fxxxxxxxxxxxxxxxxxxxxb39a173a3329499db:cCvb7wqA", "LastPasswordChangeDate": null, "PasswordExpirationDate": "2020-03-11T10:24:55.3710000Z", "LastPasswordChangeToken": null, "EmailVerified": true, "IsActive": true, "IsDeleted": false, "Uid": "9c94c6xxxxxxxxxxxxa57ef6a32a", "CustomFields": null, "IsEmailSubscribed": false, "UserName": null, "NoOfLogins": 0, "PhoneId": null, "PhoneIdVerified": false, "Roles": [ "teacher" ], "ExternalUserLoginId": null, "RegistrationProvider": "Email", "IsLoginLocked": false, "LoginLockedType": "None", "LastLoginLocation": null, "RegistrationSource": "API", "IsCustomUid": false, "UnverifiedEmail": null, "IsSecurePassword": null, "PrivacyPolicy": null, "ExternalIds": null, "IsRequiredFieldsFilledOnce": true, "ID": "e05aabfxxxxxxxxe7af689b2b", "Provider": "Email", "Prefix": null, "FirstName": null, "MiddleName": null, "LastName": null, "Suffix": null, "FullName": null, "NickName": null, "ProfileName": null, "BirthDate": null, "Gender": null, "Website": null, "Email": [ { "Type": "Primary", "Value": "example@example.com" }, { "type": "Secondary", "value": "xxxx01@example.com" }, { "type": "Business", "value": "xxxx02@example.com" } ], "Country": null, "ThumbnailImageUrl": null, "ImageUrl": null, "Favicon": null, "ProfileUrl": null, "HomeTown": null, "State": null, "City": null, "Industry": null, "About": null, "TimeZone": null, "LocalLanguage": null, "CoverPhoto": null, "TagLine": null, "Language": null, "Verified": null, "UpdatedTime": null, "Positions": null, "Educations": null, "PhoneNumbers": null, "IMAccounts": null, "Addresses": null, "MainAddress": null, "Created": null, "CreatedDate": "2019-03-11T10:24:55.3560000Z", "ModifiedDate": "2019-03-11T10:28:22.1053952Z", "ProfileModifiedDate": "2019-03-11T10:28:22.1053952Z", "LocalCity": null, "ProfileCity": null, "LocalCountry": null, "ProfileCountry": null, "FirstLogin": false, "IsProtected": false, "RelationshipStatus": null, "Quota": null, "Quote": null, "InterestedIn": null, "Interests": null, "Religion": null, "Political": null, "Sports": null, "InspirationalPeople": null, "HttpsImageUrl": null, "FollowersCount": 0, "FriendsCount": 0, "IsGeoEnabled": null, "TotalStatusesCount": 0, "Associations": null, "NumRecommenders": 0, "Honors": null, "Awards": null, "Skills": null, "CurrentStatus": null, "Certifications": null, "Courses": null, "Volunteer": null, "RecommendationsReceived": null, "Languages": null, "Projects": null, "Games": null, "Family": null, "TeleVisionShow": null, "MutualFriends": null, "Movies": null, "Books": null, "AgeRange": null, "PublicRepository": null, "Hireable": false, "RepositoryUrl": null, "Age": null, "Patents": null, "FavoriteThings": null, "ProfessionalHeadline": null, "ProviderAccessCredential": null, "RelatedProfileViews": null, "KloutScore": null, "LRUserID": null, "PlacesLived": null, "Publications": null, "JobBookmarks": null, "Suggestions": null, "Badges": null, "MemberUrlResources": null, "TotalPrivateRepository": 0, "Currency": null, "StarredUrl": null, "GistsUrl": null, "PublicGists": 0, "PrivateGists": 0, "Subscription": null, "Company": "LoginRadius", "GravatarImageUrl": null, "ProfileImageUrls": null, "WebProfiles": null, "PinsCount": 0, "BoardsCount": 0, "LikesCount": 0, "SignupDate": "2019-03-11T10:24:55.3560000Z", "LastLoginDate": "0001-01-01T00:00:00.0000000Z", "PreviousUids": null, "Identities": null }'></try-me-out>

## Update UID

  Updates consumer's UID.

  ### Endpoint
  `PUT` `https://api.loginradius.com/identity/v2/manage/account/uid`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Key [**Required**] |
  | uid | none | UID, the unified identifier for each user account [**Required**] |

  ### Body Attributes
  | Attribute | Description 
  | :------------ | :------- | :-------------------------------------------------------------------------------- | 
  |NewUid|New Uid | Payload containing Update UID [**Required**]
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="update-uid" endpoint="https://api.loginradius.com/identity/v2/manage/account/uid" method="PUT" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"NewUid":""}}' sampleresponse='{ "IsPosted": true }'></try-me-out>

## Account Delete

  Deletes consumer corresponding to the specified UID from your app. They will be able to re-register for a new account.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-delete" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""}],"templateParams":[{"key":"uid"}]}' sampleresponse='{ "IsDeleted": true }'></try-me-out>

## Account Remove Email

  Removes given email from the consumer corresponding to the specified UID.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account/{uid}/email`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Fields | none | The fields parameter filters the API response so that the response only includes a specific set of fields [**Optional**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="account-remove-email" endpoint="https://api.loginradius.com/identity/v2/manage/account/{uid}/email" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"fields"}],"templateParams":[{"key":"uid"}],"headers":[{"key":"Content-Type","default":"application/json"}],"body":{"Email":""}}' sampleresponse='{ "IsDeleted": true }'></try-me-out>

## Delete User Profile by Email

  Deletes consumer corresponding to the specified Email.

  ### Endpoint
  `DELETE` `https://api.loginradius.com/identity/v2/manage/account`

  ### Query Parameters
  | Parameter    | Default | Description |
  | :------------ | :------- | :-------------------------------------------------------------------------------- |
  | apikey | none | LoginRadius API Key [**Required**] |
  | apisecret | none | LoginRadius API Secret [**Required**] |
  | Email | none | Email of the user [**Required**] |
  
  ### Try Me Out
    
  Enter query parameters and send a request to view the sample response.

  <try-me-out id="delete-user-profile-by-email" endpoint="https://api.loginradius.com/identity/v2/manage/account" method="DELETE" params='{"queryParams":[{"key":"apiKey","default":""},{"key":"apiSecret","default":""},{"key":"email"}]}' sampleresponse='{ "IsDeleted": true, "RecordsDeleted": 1 }'></try-me-out>

[Go Back to Home Page](/)

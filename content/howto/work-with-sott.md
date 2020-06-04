---
title: Work with SOTT
description: ""
summary: "A guide on how to generate SOTT (Secure One Time Token)"
---

Our Registration API is public and uses API key for request. To avoid spam automated registrations, in the request header, LoginRadius supports an additional token - **SOTT (Secure One Time Token)** along with API key

SOTT can be created using the API key, API secret, and a timestamp (start time and end time)


> **Note:** Once generated, SOTT can be used only for a short time. Thus, it helps to avoid Spams and Brute Force Attacks.

> In our SDKs, SOTT is automatically handled when the SDK calls the authentication APIs, user registration methods. 

If you wish to manually create a SOTT then follow the sections below for the steps based on your particular language.


## Steps to generate SOTT
This section goes over the algorithm that you can use to create your own SOTT generation code.

Constant values to generate SOTT-

1. const INITVECTOR = "tu89geji340t89u2";
2. const KEYSIZE = 256;
3. const DateFormat = "YYYY/MM/DD H:i:s";

> An **initialization vector (IV)** is a random number used in combination with a secret key as a means to encrypt data. This number is sometimes referred to as a **nonce, or “number occuring once,”** as an encryption program uses it only once per session.


#### Steps to generate SOTT

1. Calculate DateInterval( Difference of start time and end time ) in the above DateFormat.
2. Calculate plain text like StartDateInterval + "#" + + "#" + EndDateInterval.
3. Generate a PBKDF2 key derivation of a supplied encoded Secret key.
4. Encrypt the text with below parameters
    1. PBKDF2 key
    2. Plain text
    3. Encoded INITVECTOR
- Now encode the result data with base64.
- Now initialize an incremental hashing context with MD5 and pass the result data into the active hashing context.

## Implement using Node.js

The Node.js code below will calculate and generate a SOTT dynamicaaly

```JavaScript
'use strict';
// Secret - Your APP secret 
// key -- Your API key
module.exports = function (secret, key, startDate, endDate) {
  var crypto = require('crypto');

  return new Promise(
    function (resolve, reject) {
      var tempToken = '';
      if (!startDate) {
        var date = new Date();
        var nextMonth = date.getUTCMonth() + 1;
        tempToken = date.getUTCFullYear() + '/' + nextMonth + '/' + date.getUTCDate() + ' ' + date.getUTCHours() + ':' + (date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes()) + ':' + (date.getUTCSeconds() < 10 ? '0' + date.getUTCSeconds() : date.getUTCSeconds()) + '#' + key + '#';
        date.setUTCMinutes(date.getUTCMinutes() + 10);

        tempToken += date.getUTCFullYear() + '/' + nextMonth + '/' + date.getUTCDate() + ' ' + date.getUTCHours() + ':' + (date.getUTCMinutes() < 10 ? '0' + date.getUTCMinutes() : date.getUTCMinutes()) + ':' + (date.getUTCSeconds() < 10 ? '0' + date.getUTCSeconds() : date.getUTCSeconds());
      } else {
        tempToken = startDate + '#' + key + '#' + endDate;
      }
      encrypt(tempToken, resolve, reject);
    }
  );

  function encrypt (plainText, resolve, reject) {
    var initVector = 'tu89geji340t89u2';
    var keySize = 256;
    var iterations = 10000;
    var keyLenNumber = 8;
    var initVectorBuffer = Buffer.from(initVector, 'utf8');
    var plainTextBuffer = Buffer.from(plainText, 'utf8');
    crypto.pbkdf2(secret, Buffer.from(new Array(keyLenNumber)), iterations, keySize / keyLenNumber, 'sha1', function (err, keyBytes) {
      if (err) reject(err);
      var cipher = crypto.createCipheriv('aes-256-cbc', keyBytes, initVectorBuffer);
      var cryptedText = cipher.update(plainTextBuffer, 'utf8', 'base64');
      cryptedText += cipher.final('base64');

      var hash = crypto.createHash('md5');
      hash.update(cryptedText, 'ascii');
      resolve(cryptedText + '*' + (hash.digest()).toString('hex'));
    });
  }
};
```

## Generate SOTT using SDKs

You can also use our SDKs to generate the SOTT dynamically in your application

1. Using PHP SDK

```PHP
$sottObject =  new SOTT();
$encrypt =  $sottObject ->encrypt();
```

2. Using Java SDK

```JAVA
Sott sott =new Sott();
String sottresponse =sott.main( < YOUR API KEY >, < YOUR API SECRET > );
```
3. Using Node JS SDK

-Create var config in project

```JavaScript
var config = {
    apikey: '{{ Your API KEY }}',
    apisecret: '{{ Your API Secret }}',
    sitename: '{{ Your Sitename }}'
}
```
- Require the loginradius-v2-sdk package and pass it the config object

```Javascript
var lrv2 = require('loginradius-sdk')(config);
```

- Call the getSott function

```Javascript
var startDate = "2017-05-15 07:10:42" // Valid Start Date with Date and time
var endDate = "2017-05-15 07:20:42" // Valid End Date with Date and time

lrv2.authentication.getSott( startDate, endDate ).then( function( response ) {
    console.log( response );
}).catch( function( error ) {
    console.log( error );
});
```
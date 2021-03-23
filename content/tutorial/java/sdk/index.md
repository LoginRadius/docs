# JAVA SDK

This document descripbes how to start using JAVA SDK and its various features.

> **Note:** You must have JAVA JDK 8 or JDK 11 installed on your system.

## SDK Installation

Download the JAVA SDK from [here](https://github.com/LoginRadius/java-sdk).

Once the project is downloaded, the folder structure is like this .

```
.project
pom.xml
README.md
src
| -- main
| -- |--- |java/
| -- |--- |resources/
| -- |--- |-- application.properties
| -- |--- |-- static
| -- |--- |-- templates
| -- |--- |-- --- index.html
| -- |--- |-- --- profile.html
```

add this snippet in pom.xml

```
<dependency>
  <groupId>com.loginradius.sdk</groupId>
  <artifactId>java-sdk</artifactId>
  <version>11.0.1</version>
</dependency>

```

> LoginRadius is now using Maven. The jars are also available [here](https://search.maven.org/search?q=loginradius) on Maven repository. Select the directory for the latest version and download the jar files.

> For more information on SDK configuration and obtaining API credentials, refer to this [tutorial](https://lr-developer-docs.netlify.app/tutorial/java/).


### API Methods

Similar to above example, you can use other API Methods to implement more features.

> You can utilize these methods to implement features covered in your subscribed [plan](https://www.loginradius.com/pricing/).

Below is the list of APIs with sample use of respective API Method:

#### Authentication API Methods


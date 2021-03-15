---
title: "Guide to Federated SSO "
tags: ["FedSSO", "GetStarted"]
description: "This document covers the Federated SSO introduction, and its protocols supported by the LoginRadius Identity Platform."
---


# Federated SSO

This document covers the Federated SSO introduction, and its protocols supported by the LoginRadius Identity Platform.

## Federated SSO Introduction

Federated SSO comes in handy while implementing SSO with third-party applications. For interaction with third-party web applications, common standards and protocols are used to manage and map user identities via trust relationships. LoginRadius Identity Platform supports SAML, JWT, OAuth, and OpenID protocols for Federated SSO. In the Federated SSO process, the LoginRadius Identity Platform acts as Identity Provider(IDP).

LoginRadius acts as an IdP, which stores and authenticates the identities that your customers use to log in to your systems, applications, files servers, and more depending upon the configuration. The following flow diagram displays the role of LoginRadius as IDP:

![alt_text](/images/fed-sso-flow.png "image_tooltip")

## Federated SSO Protocols

The following are the list of Federated SSO Protocols supported by LoginRadius Identity Platform:

SAML

JWT

OAuth 2.0

OpenID Connect

### SAML

LoginRadius Identity Platform supports both SAML 1.1 and SAML 2.0 flows to manage to act as either an Identity Provider (IDP) or as a Service Provider (in case of Custom IDP). It supports both IDP initiated, and SP-initiated SAML flows.

The LoginRadius Admin Console allows you to configure the SAML app by customizing the assertions, keys, and endpoints to match any SAML provider requirements.

For more information, refer to the following documents:

* [LoginRadius SAML Docs](../../guide/saml)

* [SAML Specs Document](http://saml.xml.org/saml-specifications)

### JWT

This protocol allows you to generate a JSON formatted, encrypted token. LoginRadius Admin Console allows you to configure the JWT App and customize the token's encryption method based on the Service Provider requirement.

For more information, refer to the following documents:

* [LoginRadius JWT Document](../../guide/jwt)

* [JWT RFC 7519](https://tools.ietf.org/html/rfc7519)

### OAuth

LoginRadius Identity Platform can function as either an OAuth 2 Identity Provider or as a Service Provider (In the case of Custom IDP) that delegates the authentication process to an IDP that supports the OAuth Framework.

LoginRadius Admin Console allows you to configure the OAuth App. For more information, refer to the following documents:

* [LoginRadius OAuth Documentation](../../guide/oauth)
* [OAuth 2 RFC 6749](https://tools.ietf.org/html/rfc6749)

### OpenID

LoginRadius Identity Platform provides a way to integrate your OpenID client with our APIs by following the standards. LoginRadius Admin Console allows you to configure the OAuth App. For more information, refer to the following documents:

* [LoginRadius OpenID Connect Documentation](../../guide/oidc)
* [OpenID Connect Specs](https://openid.net/specs/openid-authentication-2_0.html)

### Delegation

The delegation concept comes into the picture when the SSO needs to be implemented between the applications having different login forms or when the third-party application stores the passwords of your customers.

LoginRadius Delegation APIs cover the following two flows that allow you to:

* Delegate the full authentication via the [Delegation Authentication API](#).
* Delegate the password management via the [Password Delegation API](#). Password delegation allows you to use a third-party service to store your passwords rather than LoginRadius Cloud Directory.

### WS Federation

Several identity protocols are commonly supported by Identity Providers today like OAuth2, OIDC, SAML, and many more likewise WS-Federation is also a Legacy Protocol that is used by Microsoft Products.

Web Services Federation (WS-Federation or WS-Fed) is part of the larger WS-Security framework and an extension to the functionality of WS-Trust. The features of WS-Federation can be used directly by SOAP applications and web services. WS-Federation provides mechanisms for brokering of identity, attribute discovery and retrieval, authentication and authorization claims between federation partners, and protecting the privacy of these claims across organizational boundaries. WS-Fed is a protocol that can be used to negotiate the issuance of a token. It works similar to SAML except it has different header input values in URL and it gets a response in SAML 1.0.
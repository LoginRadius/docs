---
title: "Guide to Federated SSO "
tags: ["FedSSO", "GetStarted"]
description: "This document covers the Federated SSO introduction and its protocols supported by the LoginRadius Identity Platform."
path: "/guide/fed-sso"
---

<span class="devloper-premium plan-tag">Developer Pro</span>
<span class="devloper-premium plan-tag">Add on</span>

# Federated SSO

This document covers the Federated SSO introduction and its protocols supported by the LoginRadius Identity Platform.

## Federated SSO Introduction

Federated SSO comes in handy while implementing SSO with third-party applications. For interaction with third-party web applications, common standards and protocols are used to manage and map user identities via trust relationships. LoginRadius Identity Platform supports SAML, JWT, OAuth, and OpenID protocols for Federated SSO. In the Federated SSO process, the LoginRadius Identity Platform acts as Identity Provider(IDP).

LoginRadius acts as an IdP, which stores and authenticates the identities that your consumers use to log in to your systems, applications, files servers, and more depending upon the configuration. The following flow diagram displays the role of LoginRadius as IDP:

![alt_text](/images/fed-sso-flow.png "image_tooltip")

## Federated SSO Protocols

The following are the list of Federated SSO Protocols supported by LoginRadius Identity Platform:

[SAML](#saml)

[JWT](#jwt)

[OAuth 2.0](#oauth)

[OpenID Connect](#openid-connect)

### SAML

LoginRadius Identity Platform supports both SAML 1.1 and SAML 2.0 flows to manage to act as either an Identity Provider (IDP) or as a Service Provider (in case of Custom IDP). It supports both IDP initiated and SP-initiated SAML flows.

The LoginRadius Dashboard allows you to configure the SAML app by customizing the assertions, keys, and endpoints to match any SAML provider requirements.

For more information, refer to the following documents:

* <a href="https://www.loginradius.com/docs/developer/guide/saml" target="_blank">LoginRadius SAML Document</a>

* <a href="http://saml.xml.org/saml-specifications" target="_blank>SAML Specs Document</a>

### JWT

This protocol allows you to generate a JSON format encrypted token. LoginRadius Dashboard allows you to configure the JWT App and customize the token's encryption method based on the Service Provider requirement.

For more information, refer to the following documents:

* <a href="https://www.loginradius.com/docs/developer/guide/jwt" target="_blank">LoginRadius JWT Document</a>

* <a href="https://tools.ietf.org/html/rfc7519" target="_blank">JWT RFC 7519</a>

### OAuth

LoginRadius Identity Platform can function as either an OAuth 2 Identity Provider or as a Service Provider (In the case of Custom IDP) that delegates the authentication process to an IDP that supports the OAuth Framework.

LoginRadius Dashboard allows you to configure the OAuth App. For more information, refer to the following documents:

* <a href="https://www.loginradius.com/docs/developer/guide/oauth" target="_blank">LoginRadius OAuth Document</a>

* <a href="https://tools.ietf.org/html/rfc6749" target="_blank">OAuth 2 RFC 6749</a>

### OpenID Connect

LoginRadius Identity Platform provides a way to integrate your OpenID client with our APIs by following the standards. LoginRadius Dashboard allows you to configure the OAuth App. For more information, refer to the following documents:

* <a href="https://www.loginradius.com/docs/developer/guide/oidc" target="_blank">LoginRadius OpenID Connect Document</a>

* <a href="https://openid.net/specs/openid-authentication-2_0.html" target="_blank">OpenID Connect Specs</a>



[Go Back to Home Page](/)


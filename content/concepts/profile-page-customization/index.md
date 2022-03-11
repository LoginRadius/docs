---
title: "Profile Page Customizations"
tags: ["Profile Page", "Customization"]
description: "A description of the markups, custom styling, and custom scripting about the profile page."
path: "/concepts/profile-page-customization"
---

# Profile Page Customizations

## Markup

The User Profile Page is fully customizable. You can modify the HTML layout as per your requirements. To populate the containers, we have to include some JavaScript handlers to help make the associations between LoginRadius scripts and the Auth (IDX) Page.

### Social Linking Interface

The default Social Linking Interface is comprised of two templates. The first **Linked Account** template is assigned to the following container:

```html
<div id="lr-linked-social"></div>
```

You can change the above id but will also need to modify the `default-profile-before-script.js` by changing the value for `window.lr_raas_settings.accountLinking.containerid` to your new id.
The actual template is defined using the following script:

```html
<script type="text/html" id="linkedAccountsTemplate">
    <# if(isLinked) { #>
        <div class="lr-social-account">
            <span class="lr-social-icon lr-flat-<#= Name.toLowerCase() #> button-shade lr-sl-icon lr-sl-icon-<#= Name.toLowerCase() #>"></span>
            <span class="lr-social-info"><#= Name #></span>
            <span class="lr-social-unlink"><a onclick='return window["loginradiusv1"]? unLinkAccount(\"<#= Name.toLowerCase() #>\",\"<#= providerId #>\") : LRObject.util.unLinkAccount(\"<#= Name.toLowerCase() #>\",\"<#= providerId #>\")'>Unlink</a></span>
        </div>
        <# } #>
</script>
```

You can modify the above template as per your design requirements.

> **Note:** If you change the script id, make sure to modify the `default-profile-before-script.js` by changing the value for `window.lr_raas_settings.accountLinking.linkedAccountsTemplate` to your new id.


The second part of the account linking interface is the **Not Linked Account** template and is assigned to the following container:
```html
<div id="lr-not-linked-social"></div>
```

You can change the above id but will also need to modify the default-profile-before-script.js by changing the value for `window.lr_raas_settings.accountLinking.containerid` to your new id.

The actual template is defined using the following script:

```html
<script type="text/html" id="notLinkedAccountsTemplate">
    <# if(!isLinked) { #>
        <span class="lr-social-icon lr-flat-<#= Name.toLowerCase() #> button-shade lr-sl-icon lr-sl-icon-<#= Name.toLowerCase() #>"
              onclick='LRObject.util.openWindow("<#= Endpoint #>&is_access_token=true&callback=<#= window.location.href #>");'></span>
        <# } #>
</script>
```

You can modify the above template as per your design requirements.
> **Note:** If you change the script id, make sure to modify the `default-profile-before-script.js` by changing the value for `window.lr_raas_settings.accountLinking.notLinkedAccountsTemplate` to your new id.


### Profile Editor
The default Profile Editor interface is set to the following container:

```html
<div id="profile-editor-container"></div>
```

You can change the above id but make sure to modify the default-profile-before-script.js by changing the value for `window.lr_raas_settings.profileEditor.containerid` to your new id.

### Change Password

The default **Change Password** interface is set to the following container:

```html
<div id="change-password"></div>
```

You can change the above id but make sure to modify the default-profile-before-script.js by changing the value for `window.lr_raas_settings.changePassword.containerid` to your new id.

## Custom Styling

You can customize the CSS styling applied to the page by making changes to the provided **hosted-auth-default.css** according to your design or branding requirements.

## Custom Scripts

You can control some additional functionality from the **default-profile-before-script.js** and include additional JS to customize the interfaces further. Refer to [our Advance Customization document](https://www.loginradius.com/docs/developer/references/javascript-library/advanced-customizations).

The **default-profile-before-script.js** includes the following customization options:

### Change Message

Find object **successMessages** in `default-profile-before-script.js` and change the message according to your requirements.

### Change Loading Image

Find function **visibleLoadingSpinner** in `default-profile-before-script.js` and customize it to your requirements.


### Change Edit Profile

Find hook function **renderProfileEditorHook** in `default-profile-before-script.js` and customize it to your requirements just below the default code.


### Change Message Settings

Find function **setMessage** in `default-profile-before-script.js` and customize it to your requirements.


### Other Customizations

Find hook **startProcess** in `default-profile-before-script.js` to customize it. Customizations examples are - displaying a loader or message before starting the actions like change password or edit profile.

Find hook **endProcess** in `default-profile-before-script.js` to customize it. Customization example -displaying a message after an action is complete.








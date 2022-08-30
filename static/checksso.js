var s = document.createElement('script');
s.setAttribute('src', "//auth.lrcontent.com/v2/js/LoginRadiusV2.js");
s.onload = lrssocallback;
document.body.appendChild(s);
function redirectUnauthUser(token){
    if(typeof(token) == "undefined"){
        window.location.href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login";
    }
}
function lrssocallback() {
    var options = {};
    options.apiKey = "83952b6c-61de-43fd-93bf-b88d90c76489";
    options.appName = "lr";
    options.appPath = "https://www.loginradius.com/docs/";
    $LR = new LoginRadiusV2(options);
    var ssologin_options = {};
    ssologin_options.onError = redirectUnauthUser;
    ssologin_options.onSuccess = redirectUnauthUser;
    $LR.init("ssoNotLoginThenLogout", ssologin_options);
}

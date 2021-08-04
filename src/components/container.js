import React, { useEffect, useState } from "react"
import Modal from "react-modal"
import { Link, withPrefix } from "gatsby"
import PopUp from "./modal.js"
import LogoVideo from "../../static/images/logovideo.svg"
const Middle = () => {
  const apiRef = React.createRef()
  const sdkRef = React.createRef()
  const gotQRef = React.createRef()
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    if (
      window &&
      window.location &&
      window.location.hash &&
      window.location.hash !== ""
    ) {
      if (window.location.hash === "#api") {
        window.history.scrollRestoration = "manual"
        apiRef.current.scrollIntoView({ block: "start" })
      } else if (window.location.hash === "#sdk") {
        window.history.scrollRestoration = "manual"
        sdkRef.current.scrollIntoView({ block: "start" })
      } else if (window.location.hash === "#loginmethods") {
        window.history.scrollRestoration = "manual"
        gotQRef.current.scrollIntoView({ block: "start" })
      }
    }
  })

  return (
    <main>
      {/*Hero section*/}
      <section className="hero py-72">
        <div className="grid-50 d-flex align-items-end justify-content-between">
          <div>
            <h1>LoginRadius Documentation</h1>
            <p>
              Your quest to implement the best User Authentication, Single
              Sign-On (SSO), and Secure Access has come to an end with
              LoginRadius! Be it Web and Mobile Application or Smart and IoT
              device based Apps, you can use LoginRadius solution everywhere.
            </p>
            <p>
              On top of that, you can easily extend Authentication and User Data
              to third-party applications using 30+ Integration options.
            </p>
            <div className="btn-group">
              <Link
                to="/tutorial/html-and-js-tutorial"
                className="btn btn-outline"
              >
                Curious How It Works?
              </Link>
              <Link to="/questionnaire" className="btn btn-primary">
                Take Our Short Quiz!
              </Link>
              <a
                onClick={() => setDisplay(true)}
                className="btn btn-primary show-mobile"
              >
                Try 4 Minute Setup Guide
              </a>
            </div>
          </div>
          <div className="video-thumbnail">
            <div className="video-logo">
              <img src={LogoVideo} title="LoginRadius" alt="LoginRadius" />
            </div>
            <div className="play-icon">
              <a onClick={() => setDisplay(true)}>
                <svg
                  width="72"
                  height="72"
                  viewBox="0 0 72 72"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="36" cy="36" r="36" fill="white" />
                  <path
                    d="M29.75 24.8087L50 36.5L29.75 48.1913L29.75 24.8087Z"
                    stroke="#008ECF"
                    strokeWidth="2"
                  />
                </svg>
              </a>
            </div>
            <div className="footer-text">Try 4 Minute Setup Guide</div>
            <Modal id="setup-guide-video" isOpen={display} ariaHideApp={false}>
              <div className="card no-shadow p-0">
                <div className="popup-header">
                  <h3 className="title">Try this 4 Minute Setup Guide</h3>
                  <a onClick={() => setDisplay(false)}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      class="feather feather-x"
                    >
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  </a>
                </div>

                <div class="popup-content">
                  <iframe
                    width="100%"
                    height="400"
                    src="https://www.youtube.com/embed/wgkT2x2khV4"
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allow="fullscreen;"
                  ></iframe>
                </div>
              </div>
            </Modal>
          </div>

          <div
            className="btn-group"
            style={{
              display: "flex",
              width: "100%",
              justifyContent: "space-around",
              backgroundColor: "#008ecf",
              color: "#fff",
              padding: 30,
              borderRadius: "0.5rem"
            }}
          >
            <div>
              <h2>Does LoginRadius support my use case?</h2>
              <p style={{color: "#fff"}}>Answer a few questions and get a self-served implementation guide addressing your needs</p>
            </div>
            <div style={{display: "flex", alignItems: "center"}}>
              <Link
                to="/questionnaire"
                className="btn btn-secondary"
                style={{
                  height: 48,
                  backgroundColor: "#fff",
                  color: "#f15e22"
                }}
              >
                Take Our Short Quiz!
              </Link>
            </div>
          </div>

          {/* <div className="wrapper">
            <div className="steps" id="steps">
              <div className="step step1">
                <div className="number">
                  <img src="images/step1.png" width={36} />
                </div>
                <div className="info">
                  <p className="title">
                    Create Your Account <span>(it’s free)</span>
                  </p>
                </div>
              </div>
              <div className="step step2">
                <div className="number">
                  <img src="images/step2.png" width={36} />
                </div>
                <div className="info">
                  <p className="title">Setup Your App</p>
                </div>
              </div>
              <div className="step step3">
                <div className="number">
                  <img src="images/step3.png" width={36} />
                </div>
                <div className="info">
                  <p className="title">Get Started</p>
                </div>
              </div>
            </div>
          </div> */}
        </div>
      </section>
      {/*Hero section*/}
      {/*Tutorials section*/}

      <section className="tutorials py-72">
        <div className="section-header">
          <h2>Ready To Start Building?</h2>
          <p>
            Choose your application type and implement authentication in a few
            minutes. Or refer to <a href="#api">APIs</a> if your application
            type doesn’t fall into the ones mentioned below.
          </p>
        </div>
        <div className="grid-25">
          <div className="card">
            <div className="icon">
              <img src="images/single-page-app.svg" />
            </div>
            <h3 className="title">Single Page App</h3>
            <ul>
              <li>
                <Link to="/tutorial/react">
                  <img src="images/react.svg" width={20} />
                  <span>React</span>
                </Link>
              </li>
              <li>
                <Link to="/tutorial/angular">
                  <img src="images/angular.svg" width={20} />
                  <span>Angular</span>
                </Link>
              </li>
              <li>
                <Link to="/tutorial/vue">
                  <img src="images/vue-dot-js.svg" width={20} />
                  <span>VueJs</span>
                </Link>
              </li>
              <li>
                <Link to="/tutorial/html-and-js-tutorial">
                  <img src="images/html5.svg" width={20} />
                  <span>HTML and JS</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="icon">
              <img src="images/web-apps.svg" />
            </div>
            <h3 className="title">Web Apps</h3>
            <ul>
              <li>
                <Link to="/tutorial/node-js">
                  <img src="images/node-dot-js.svg" width={20} />
                  <span>NodeJs</span>
                </Link>
              </li>
              <li>
                <Link to="/tutorial/php">
                  <img src="images/php.svg" width={20} />
                  <span>PHP</span>
                </Link>
              </li>
              <li>
                <Link to="/tutorial/java">
                  <img src="images/java.svg" width={20} />
                  <span>JAVA</span>
                </Link>
              </li>
            </ul>
            <PopUp
              data={[
                {
                  link: "/tutorial/node-js",
                  icon: "images/node-dot-js.svg",
                  text: "Node.js",
                },
                {
                  link: "",
                  icon: "images/php.svg",
                  text: "PHP",
                },
                {
                  link: "",
                  icon: "images/java.svg",
                  text: "JAVA",
                },
                {
                  link: "/tutorial/dotnet-webforms",
                  icon: "images/visualstudio.svg",
                  text: "ASP.NET Web Forms",
                },
                {
                  link: "/tutorial/dotnetcore-razor",
                  icon: "images/visualstudio.svg",
                  text: "ASP.NET Core Razor Pages",
                },
                {
                  link: "/tutorial/dotnetcore-mvc",
                  icon: "images/visualstudio.svg",
                  text: "ASP.NET Core MVC",
                },
                {
                  link: "/tutorial/golang",
                  icon: "images/golang.svg",
                  text: "Golang",
                },
                {
                  link: "/tutorial/python",
                  icon: "images/python.svg",
                  text: "Python",
                },
                {
                  link: "/tutorial/ror",
                  icon: "images/ruby.svg",
                  text: "Ruby",
                },
              ]}
            />
          </div>
          <div className="card">
            <div className="icon">
              <img src="images/mobile-apps.svg" />
            </div>
            <h3 className="title">Mobile Apps</h3>
            <ul>
              <li>
                <Link to="/tutorial/android">
                  <img src="images/android.svg" width={20} />
                  <span>Android</span>
                </Link>
              </li>
              <li>
                <Link to="/tutorial/ios">
                  <img src="images/ios.svg" width={20} />
                  <span>iOS</span>
                </Link>
              </li>
              <li>
                <Link to="/tutorial/ionic">
                  <img src="images/ionic.svg" width={20} />
                  <span>Ionic </span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="card">
            <div className="icon">
              <img src="images/cms-app.svg" />
            </div>
            <h3 className="title">CMS App</h3>
            <ul>
              <li>
                <Link to="/guide/wordpress">
                  <img src="images/wordpress.svg" width={20} />
                  <span>WordPress </span>
                </Link>
              </li>
              <li>
                <Link to="/guide/drupal">
                  <img src="images/drupal.svg" width={20} />
                  <span>Drupal </span>
                </Link>
              </li>
              <li>
                <Link to="/guide/big-commerce">
                  <img src="images/bigcommerce.svg" width={20} />
                  <span>BigCommerce </span>
                </Link>
              </li>
              <li>
                <Link to="/guide/shopify">
                  <img src="images/shopify.svg" width={20} />
                  <span>Shopify </span>
                </Link>
              </li>
              {/* <li>
                <a href="#">
                  <img src="images/joomla.svg" width={20} />
                  <span>Joomla</span>
                </a>
              </li> */}
            </ul>
          </div>
        </div>
      </section>
      {/*Tutorials section*/}
      {/*Section Recommended Resources*/}
      <section className="resources py-72">
        <div ref={gotQRef} className="section-header">
          <h2>Explore Features and Use Cases</h2>
          <p>
            Learn about features and how to customize them as per your
            requirements. Also, find the vast list of third-party integrations
            to utilize for your application.
          </p>
        </div>
        <div className="grid-50">
          {/*Login Methods we offer*/}
          <div className="card">
            <div className="icon">
              <img src="images/login-methods.svg" />
            </div>
            <h3 className="title">Add Login Methods</h3>
            <ul>
              <li>
                <Link to="/guide/emailpassword-login">
                  <span>Email/Password Login</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/social-login">
                  <span>Social Login</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/phone-login">
                  <span>Phone Login</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/passwordless-login">
                  <span>Passwordless Login</span>
                </Link>
              </li>
            </ul>
          </div>
          {/*Login Methods we offer*/}
          {/*Explore user managment options*/}
          <div className="card">
            <div className="icon">
              <img src="images/user-managment.svg" />
            </div>
            <h3 className="title">Manage Users with LoginRadius</h3>
            <ul>
              <li>
                <Link to="/guide/manage-users">
                  <span>Manage Users</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/migrate-user-data">
                  <span>Migrate User Data</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/manage-roles">
                  <span>Manage Roles</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/setup-your-smtp-provider">
                  <span>Setup Your SMTP Provider</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/manage-team-members">
                  <span>Manage Team Members</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/setup-sms-provider">
                  <span>Setup SMS Provider</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/view-subscription-logs">
                  <span>View Subscription Logs</span>
                </Link>
              </li>
            </ul>
          </div>
          {/*Explore user managment options*/}
          {/*Personalize interfaces and branding*/}
          <div className="card">
            <div className="icon">
              <img src="images/branding.svg" />
            </div>
            <h3 className="title">
              Personalize Your Login Interface and Branding
            </h3>
            <ul>
              <li>
                <Link to="/guide/customize-auth-page">
                  <span>Customize Auth Page (IDX)</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/auth-page-advanced-editor">
                  <span>Advanced Editor</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/customize-email-and-sms-settings">
                  <span>Customize Email and SMS Settings</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/customize-domain">
                  <span>Setup Custom Domain (IDX)</span>
                </Link>
              </li>
              <li>
                <Link to="/guide/custom-registration">
                  <span>Customize Registration Form Fields</span>
                </Link>
              </li>
            </ul>
          </div>
          {/*Personalize interfaces and branding*/}
          {/*Single Sign On*/}
          <div className="card">
            <div className="icon">
              <img src="images/sso.svg" />
            </div>
            <h3 className="title">Implement Sign Sign-On</h3>
            <ul>
              <li>
                <Link to="/guide/web-sso"> Web SSO</Link>
              </li>
              <li>
                <Link to="/guide/fed-sso">Federated SSO</Link>
              </li>
            </ul>
          </div>
          {/*Single Sign On*/}
          {/*Integrate Third Parties*/}
          <div className="card">
            <div className="icon">
              <img src="images/intigration.svg" />
            </div>
            <h3 className="title">Integrate Third Parties</h3>
            <ul>
              <li>
                <Link to="/guide/webhook"> Setup Web Hooks</Link>
              </li>
              <li>
                <Link to="/guide/web-sso"> Enable Web SSO</Link>
              </li>
              <li>
                <Link to="/guide/saml">Connect SAML App </Link>
              </li>
              <li>
                <Link to="/guide/jwt"> Connect JWT App</Link>
              </li>
              <li>
                <Link to="/guide/oauth"> Connect OAuth App</Link>
              </li>
              <li>
                <Link to="/guide/oidc">Connect OIDC App </Link>
              </li>
              <li>
                <Link to="/guide/big-commerce">Integrate BigCommerce</Link>
              </li>
              <li>
                <Link to="/guide/shopify">Integrate Shopify</Link>
              </li>
              <li>
                <Link to="/guide/inbound-sso-saml">Inbound SSO SAML</Link>
              </li>
              <li>
                <Link to="/guide/inbound-sso-saml-salesforce">
                  Inbound SSO SAML - Salesforce
                </Link>
              </li>
              <li>
                <Link to="/guide/inbound-sso-saml-azure-ad">
                  Inbound SSO SAML - Azure AD
                </Link>
              </li>
              <li>
                <div className="read-more mt-0">
                  <Link to="/guide/3rd-party-all-integrations/">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#008ecf"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-plus"
                    >
                      <line x1={12} y1={5} x2={12} y2={19} />
                      <line x1={5} y1={12} x2={19} y2={12} />
                    </svg>
                    <span>More</span>
                  </Link>
                </div>
              </li>
            </ul>
          </div>
          {/*Integrate Third Parties*/}
          {/*Secure Authentication*/}
          <div className="card">
            <div className="icon">
              <img src="images/secure-authentication.svg" />
            </div>
            <h3 className="title">Utilize Secure Authentication</h3>
            <ul>
              <li>
                <Link to="/guide/captcha">Google reCAPTCHA </Link>
              </li>
              <li>
                <Link to="/guide/bruteforce">Secure Against Bruteforce </Link>
              </li>
              <li>
                <Link to="/guide/set-strong-password-policy">
                  Set Strong Password Policy
                </Link>
              </li>
              <li>
                <Link to="/guide/mfa"> Multi Factor Authentication</Link>
              </li>
              <li>
                <Link to="/guide/change-session-lifetime">
                  {" "}
                  Change Session Lifetime{" "}
                </Link>
              </li>
              {/* <li>
                <Link to="guide/enable-force-logout">Enable Force Logout</Link>
              </li> */}
              <li>
                <Link to="guide/block-disposable-email">
                  Block Disposable Email
                </Link>
              </li>
            </ul>
          </div>
          {/*Secure Authentication*/}
        </div>
      </section>
      {/*Section Recommended Resources*/}
      {/*Section Comprehensive Resources*/}
      <section className="resources comprehensive-resources py-72">
        <div className="section-header">
          <h2>Comprehensive Resources</h2>
          <p>
            Understand concepts of LoginRadius Identity Platform to fully
            utilize the offered features. Also, work with JavaScript Library,
            SDKs, and APIs to implement and customize features as per your
            application requirements.
          </p>
        </div>
        <div className="grid-50">
          {/*Concepts*/}
          <div className="card">
            <div className="icon">
              <img src="images/concepts.svg" />
            </div>
            <h3 className="title">Concepts</h3>
            <ul>
              <li>
                <Link to="concepts/idx">Auth Page (IDX)</Link>
              </li>
              <li>
                <Link to="concepts/common-passwords">Common Passwords</Link>
              </li>
              <li>
                <Link to="concepts/token-handle">Handle Token</Link>
              </li>
              <li>
                <Link to="concepts/localization">Localization</Link>
              </li>
              <li>
                <Link to="/concepts/sott">Secure One Time Token (SOTT)</Link>
              </li>
            </ul>
          </div>
          {/*Concepts*/}
          {/*SDKs*/}
          <div ref={sdkRef} className="card">
            <div className="icon">
              <img src="images/sdks-icon.svg" />
            </div>
            <h3 className="title">SDKs</h3>
            <ul>
              <li>
                <Link to="references/sdk/android-sdk">Android</Link>
              </li>
              <li>
                <Link to="references/sdk/dotnet-sdk">ASP.NET</Link>
              </li>
              <li>
                <Link to="references/sdk/golang-sdk">Golang</Link>
              </li>
              <li>
                <Link to="references/sdk/html5-sdk">HTML5</Link>
              </li>
              <li>
                <Link to="references/sdk/ios-sdk">iOS</Link>
              </li>
              <li>
                <Link to="references/sdk/java-sdk">Java</Link>
              </li>
              <li>
                <Link to="references/sdk/nodejs-sdk">Node.js</Link>
              </li>
              <li>
                <Link to="references/sdk/php-sdk">PHP</Link>
              </li>
              <li>
                <Link to="references/sdk/python-sdk">Python</Link>
              </li>
              <li>
                <Link to="references/sdk/react-sdk">React</Link>
              </li>
              <li>
                <Link to="references/sdk/react-native-sdk">React Native</Link>
              </li>
              <li>
                <Link to="references/sdk/ruby-sdk">Ruby</Link>
              </li>
            </ul>
          </div>
          {/*APIs*/}
          <div ref={apiRef} className="card">
            <div className="icon">
              <img src="images/api-icon.svg" />
            </div>
            <h3 className="title">APIs</h3>
            <ul>
              <li>
                <Link to="references/api/configuration">Configuration</Link>
              </li>
              <li>
                <Link to="references/api/authentication">Authentication</Link>
              </li>
              <li>
                <Link to="references/api/account">Account</Link>
              </li>
              <li>
                <Link to="references/api/social">Social</Link>
              </li>
              <li>
                <Link to="references/api/native-social-login">
                  Native Social Login
                </Link>
              </li>
              <li>
                <Link to="references/api/passwordless-login">
                  Passwordless Login
                </Link>
              </li>
              <li>
                <Link to="references/api/phone-authentication">
                  Phone Authentication
                </Link>
              </li>
              <li>
                <Link to="references/api/two-factor-authentication">
                  Two-Factor Authentication
                </Link>
              </li>
              <li>
                <Link to="references/api/roles-management">
                  Roles Management
                </Link>
              </li>
              <li>
                <Link to="references/api/sott">SOTT</Link>
              </li>
              <li>
                <Link to="references/api/jwt">JWT</Link>
              </li>
              <li>
                <Link to="references/api/OAuth/">OAuth</Link>
              </li>
              <li>
                <Link to="references/api/oidc">OIDC</Link>
              </li>
              <li>
                <Link to="references/api/webhooks">Webhooks</Link>
              </li>
            </ul>
          </div>
          {/*Javascript references*/}
          <div className="card">
            <div className="icon">
              <img src="images/references.svg" />
            </div>
            <h3 className="title">JavaScript Library</h3>
            <ul>
              <li>
                <Link to="references/javascript-library/getting-started">
                  Getting Started
                </Link>
              </li>
              <li>
                <Link to="references/javascript-library/hooks">Hooks</Link>
              </li>
              <li>
                <Link to="references/javascript-library/advanced-customizations">
                  Advanced Customizations
                </Link>
              </li>
              <li>
                <Link to="references/javascript-library/form-library">
                  Form Library
                </Link>
              </li>
              <li>
                <Link to="references/javascript-library/customizing-your-registration-schema">
                  Customizing Your Registration Schema
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Middle

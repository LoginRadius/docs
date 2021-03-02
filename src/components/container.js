import React from "react"
import Modal from "react-modal"
import { Link } from "gatsby"
import PopUp from "./modal.js"

const Middle = () => {
  return (
    <main>
      {/*Hero section*/}
      <section className="hero py-72">
        <div className="grid-50 d-flex align-items-center">
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
              <a href="#" className="btn btn-primary">
                Try 5 Minute Setup Guide
              </a>
              <a href="#" className="btn btn-outline">
                Curious How It Works?
              </a>
            </div>
          </div>
          <div className="wrapper">
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
          </div>
        </div>
      </section>
      {/*Hero section*/}
      {/*Tutorials section*/}
      <section className="tutorials py-72">
        <div className="section-header">
          <h2>Ready To Start Building?</h2>
          <p>
            Choose your application type and implement authentication in a few
            minutes
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
                <a href="/tutorial/angular">
                  <img src="images/angular.svg" width={20} />
                  <span>Angular</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/vue-dot-js.svg" width={20} />
                  <span>VueJs</span>
                </a>
              </li>
              <li>
                <a href="/tutorial/html-and-js-tutorial">
                  <img src="images/html5.svg" width={20} />
                  <span>HTML and JS</span>
                </a>
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
                <a href="#">
                  <img src="images/php.svg" width={20} />
                  <span>PHP</span>
                </a>
              </li>
              <li>
                <a href="/tutorial/java">
                  <img src="images/java.svg" width={20} />
                  <span>JAVA</span>
                </a>
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
                  icon: "images/node-dot-js.svg",
                  text: "ASP.NET Web Forms",
                },
                {
                  link: "/tutorial/dotnetcore-razor",
                  icon: "images/php.svg",
                  text: "ASP.NET Core Razor Pages",
                },
                {
                  link: "/tutorial/dotnetcore-mvc",
                  icon: "images/java.svg",
                  text: "ASP.NET Core MVC",
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
                <a href="#">
                  <img src="images/adobephonegap.svg" width={20} />
                  <span>PhoneGap</span>
                </a>
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
                <a href="#">
                  <img src="images/wordpress.svg" width={20} />
                  <span>WordPress</span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/drupal.svg" width={20} />
                  <span>Drupal </span>
                </a>
              </li>
              <li>
                <a href="#">
                  <img src="images/joomla.svg" width={20} />
                  <span>Joomla</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*Tutorials section*/}
      {/*Section Recommended Resources*/}
      <section className="resources py-72">
        <div className="section-header">
          <h2>Got Questions?</h2>
          <p>
            Find common use cases and answers to your how-to and next-step
            questions
          </p>
        </div>
        <div className="grid-50">
          {/*Login Methods we offer*/}
          <div className="card">
            <div className="icon">
              <img src="images/login-methods.svg" />
            </div>
            <h3 className="title">Login Methods</h3>
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
            <h3 className="title">User Management Options</h3>
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
                <a href="#">Manage Roles</a>
              </li>
            </ul>
          </div>
          {/*Explore user managment options*/}
          {/*Personalize interfaces and branding*/}
          <div className="card">
            <div className="icon">
              <img src="images/branding.svg" />
            </div>
            <h3 className="title">Interfaces and Branding Personalization</h3>
            <ul>
              <li>
                <a href="#">Customize Auth Page (IDX)</a>
              </li>
              <li>
                <a href="#">Advanced Editor </a>
              </li>
              <li>
                <a href="#">Change Email Templates</a>
              </li>
              <li>
                <a href="#">Add Fields to Registartion</a>
              </li>
              <li>
                <a href="#">Setup custom domain </a>
              </li>
            </ul>
          </div>
          {/*Personalize interfaces and branding*/}
          {/*Single Sign On*/}
          <div className="card">
            <div className="icon">
              <img src="images/sso.svg" />
            </div>
            <h3 className="title">Single Sign On</h3>
            <ul>
              <li>
                <a href="#">Web SSO </a>
              </li>
              <li>
                <a href="#">Federated SSO </a>
              </li>
            </ul>
          </div>
          {/*Single Sign On*/}
          {/*Integrate Third Parties*/}
          <div className="card">
            <div className="icon">
              <img src="images/intigration.svg" />
            </div>
            <h3 className="title">Third Parties Integration</h3>
            <ul>
              <li>
                <a href="#">Setup Web Hooks </a>
              </li>
              <li>
                <a href="#">Connect SAML App </a>
              </li>
              <li>
                <a href="#"> Connect JWT App</a>
              </li>
              <li>
                <a href="/guide/oauth"> Connect OAuth App</a>
              </li>
              <li>
                <a href="#">Connect OIDC App </a>
              </li>
              <li>
                <a href="#">Integrate BigCommerce</a>
              </li>
              <li>
                <a href="#">Integrate Shopify</a>
              </li>
            </ul>
          </div>
          {/*Integrate Third Parties*/}
          {/*Secure Authentication*/}
          <div className="card">
            <div className="icon">
              <img src="images/secure-authentication.svg" />
            </div>
            <h3 className="title">Secure Authentication</h3>
            <ul>
              <li>
                <a href="#">Google reCAPTCHA </a>
              </li>
              <li>
                <a href="#">Secure Against Bruteforce </a>
              </li>
              <li>
                <a href="#"> Set Strong Password policy</a>
              </li>
              <li>
                <Link to='/guide/mfa'> Multi Factor Authentication</Link>
              </li>
              <li>
                <Link to='/guide/change-session-lifetime'> Change Session Lifetime </Link>
              </li>
              <li>
                <Link to='guide/enable-force-logout'>Enable Force Logout</Link>
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
            Understand LoginRadius Identity Platform concepts, and work with
            SDKs and APIs
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
                <a href="#">IDX</a>
              </li>
            </ul>
          </div>
          {/*Concepts*/}
          {/*References*/}
          <div className="card">
            <div className="icon">
              <img src="images/references.svg" />
            </div>
            <h3 className="title">References</h3>
            <ul>
              <li>
                <a href="#">SDKs </a>
              </li>
              <li>
                <a href="#">APIs</a>
              </li>
            </ul>
          </div>
          {/*References*/}
        </div>
      </section>
      {/*Section Comprehensive Resources*/}
    </main>
  )
}

export default Middle

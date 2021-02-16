import React from "react"
import { Link } from "gatsby"

const Middle = () => {
  return (
      <main>
        {/*Hero section*/}
        <section className="hero py-72">
          <div className="grid-50 d-flex align-items-center">
            <div>
              <h1>Identity Platform Documents</h1>
              <p>
                Learn how to implement the LoginRadius Identity Platform for
                your application. Get the comprehensive guide including
                quick-starts, implementation tutorials, example code, features
                and more.
              </p>
              <p>
                You can find everything from SDKs in your favorite languages to
                APIs and sample demos using various technologies.
              </p>
              <div className="btn-group">
                <a href="#" className="btn btn-primary">
                  Try 5 minute Setup Guide
                </a>
                <a href="#" className="btn btn-outline">
                  Sign up for free
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
                      Create your account <span>(it’s free)</span>
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
            <h2>Tutorials</h2>
            <p>
              Explore our code and resources to get started in just few minutes.
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
                <Link to="/get-started-react">   
                    <img src="images/react.svg" width={20} />
                    <span>React</span>
                  </Link>
                </li>
                <li>
                  <a href="#">
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
              </ul>
            </div>
            <div className="card">
              <div className="icon"> 
                <img src="images/web-apps.svg" />
              </div>
              <h3 className="title">Web Apps</h3>
              <ul>
                <li>
                <Link to="/get-started-node-js">
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
                  <a href="#">
                    <img src="images/java.svg" width={20} />
                    <span>JAVA</span>
                  </a>
                </li>
              </ul>
              <div className="read-more">
                <a href="#">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={20}
                    height={20}
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
                </a>
              </div>
            </div>
            <div className="card">
              <div className="icon">
                <img src="images/mobile-apps.svg" />
              </div>
              <h3 className="title">Mobile Apps</h3>
              <ul>
                <li>
                  
                  <Link to="/get-started-android"> 
                    <img src="images/android.svg" width={20} />
                    <span>Android</span>
                  
                  </Link>
                </li>
                <li>
                  <a href="#">
                    <img src="images/ios.svg" width={20} />
                    <span>iOS</span>
                  </a>
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
            <h2>Recommended Resources</h2>
            <p>
              Whether you are a beginner or an experienced professional, our
              hands-on approach helps you arrive at your goals faster, with more
              confidence and at your own pace.
            </p>
          </div>
          <div className="grid-50">
            {/*Login Methods we offer*/}
            <div className="card">
              <div className="icon">
                <img src="images/login-methods.svg" />
              </div>
              <h3 className="title">Login Methods we offer</h3>
              <ul>
                <li>
                  <a href="#">Email/Password Login</a>
                </li>
                <li>
                  <a href="#">Social Login</a>
                </li>
                <li>
                  <a href="#">Phone Login</a>
                </li>
                <li>
                  <a href="#">Passwordless Login</a>
                </li>
              </ul>
            </div>
            {/*Login Methods we offer*/}
            {/*Explore user managment options*/}
            <div className="card">
              <div className="icon">
                <img src="images/user-managment.svg" />
              </div>
              <h3 className="title">Explore user managment options</h3>
              <ul>
                <li>
                  <a href="#">Mange Users</a>
                </li>
                <li>
                  <a href="#">Migrate User Data</a>
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
              <h3 className="title">Personalize interfaces and branding</h3>
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
              <h3 className="title">Integrate Third Parties</h3>
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
                  <a href="#"> Connect OAuth App</a>
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
                  <a href="#"> Multi Factor Authentication</a>
                </li>
                <li>
                  <a href="#"> Change Session Lifetime </a>
                </li>
                <li>
                  <a href="#">Enable Force Logout</a>
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
              Check out concepts, SDKs, and APIs to extensively use LoginRadius
              Identity Platform.
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

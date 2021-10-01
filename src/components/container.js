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

      {/* Quiz section */}
      <section className="quiz py-72">
        <div>
          <div className="btn-group">
            <div>
              <h2>Does LoginRadius Support my Use Case?</h2>
              <p>
                Answer a few questions and get a self-served implementation
                guide addressing your needs
              </p>
              <Link to="/questionnaire" className="btn btn-primary">
                Let's Get Started!
              </Link>
            </div>
            <div>
              <svg
                width="410"
                height="226"
                viewBox="0 0 410 226"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M169.463 182.02C172.084 196.519 190.621 216.863 201.378 208.228C211.17 200.368 200.739 161.36 190.739 166.86C180.739 172.36 205.239 193.512 215.883 192.34C228.175 190.986 220.366 163.36 217.103 165.466C215.714 166.364 217.022 170.616 217.459 171.567C227.239 188.86 257.239 184.36 251.992 149.49"
                  stroke="#41484E"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M0 98.0279C0 95.0486 2.41526 92.6333 5.39464 92.6333H170.605C173.585 92.6333 176 95.0486 176 98.0279V209.967H0V98.0279Z"
                  fill="#FAFAFA"
                />
                <line
                  x1="0.674316"
                  y1="109.829"
                  x2="176"
                  y2="109.829"
                  stroke="#E8E9EA"
                  stroke-width="0.67433"
                />
                <line
                  x1="0.674316"
                  y1="194.963"
                  x2="93.0575"
                  y2="194.963"
                  stroke="#E8E9EA"
                  stroke-width="0.337165"
                />
                <circle
                  cx="10.7893"
                  cy="101.4"
                  r="1.68582"
                  fill="white"
                  stroke="#41484E"
                  stroke-width="0.67433"
                />
                <circle
                  cx="17.5325"
                  cy="101.4"
                  r="1.68582"
                  fill="white"
                  stroke="#41484E"
                  stroke-width="0.67433"
                />
                <circle
                  cx="24.2759"
                  cy="101.4"
                  r="1.68582"
                  fill="white"
                  stroke="#41484E"
                  stroke-width="0.67433"
                />
                <rect
                  x="10.7893"
                  y="123.652"
                  width="73.5019"
                  height="8.09195"
                  rx="2.69732"
                  fill="#E8E9EA"
                />
                <rect
                  x="10.7893"
                  y="135.79"
                  width="66.7586"
                  height="5.39464"
                  rx="2.69732"
                  fill="#F1F1F1"
                />
                <rect
                  x="20.9043"
                  y="149.951"
                  width="43.1571"
                  height="5.39464"
                  rx="2.69732"
                  fill="#F1F1F1"
                />
                <rect
                  x="20.9043"
                  y="160.741"
                  width="43.1571"
                  height="5.39464"
                  rx="2.69732"
                  fill="#F1F1F1"
                />
                <rect
                  x="20.9043"
                  y="171.53"
                  width="43.1571"
                  height="5.39464"
                  rx="2.69732"
                  fill="#F1F1F1"
                />
                <rect
                  x="10.7893"
                  y="149.951"
                  width="7.41762"
                  height="5.39464"
                  rx="2.69732"
                  fill="#F1F1F1"
                />
                <rect
                  x="10.7893"
                  y="160.741"
                  width="7.41762"
                  height="5.39464"
                  rx="2.69732"
                  fill="#F1F1F1"
                />
                <rect
                  x="10.7893"
                  y="171.53"
                  width="7.41762"
                  height="5.39464"
                  rx="2.69732"
                  fill="#F1F1F1"
                />
                <path
                  d="M93.0574 110.166H176V209.967H93.0574V110.166Z"
                  fill="#E8E9EA"
                />
                <rect
                  x="65.4099"
                  y="197.829"
                  width="22.2529"
                  height="9.44061"
                  rx="1.34866"
                  fill="#F15E22"
                />
                <path
                  d="M73.1284 200.315C73.1284 200.275 73.1487 200.255 73.1891 200.255H73.6504C73.6908 200.255 73.7111 200.275 73.7111 200.315V204.442C73.7111 204.483 73.6908 204.503 73.6504 204.503H73.2073C73.179 204.503 73.1547 204.489 73.1345 204.461L71.2349 201.359C71.2309 201.347 71.2248 201.343 71.2167 201.347C71.2086 201.347 71.2046 201.353 71.2046 201.365L71.2106 204.442C71.2106 204.483 71.1904 204.503 71.15 204.503H70.6887C70.6483 204.503 70.628 204.483 70.628 204.442V200.315C70.628 200.275 70.6483 200.255 70.6887 200.255H71.1378C71.1661 200.255 71.1904 200.269 71.2106 200.297L73.1042 203.398C73.1082 203.411 73.1143 203.417 73.1224 203.417C73.1305 203.413 73.1345 203.405 73.1345 203.392L73.1284 200.315ZM77.1391 202.573C77.1553 202.739 77.1614 202.925 77.1573 203.131C77.1573 203.172 77.1371 203.192 77.0966 203.192H75.1606C75.1445 203.192 75.1364 203.2 75.1364 203.216C75.1364 203.354 75.1485 203.459 75.1728 203.532C75.2173 203.694 75.3063 203.821 75.4398 203.914C75.5774 204.003 75.7493 204.048 75.9557 204.048C76.2551 204.048 76.4857 203.924 76.6475 203.678C76.6678 203.637 76.6941 203.631 76.7264 203.659L77.0724 203.89C77.1007 203.914 77.1068 203.941 77.0906 203.969C76.9773 204.151 76.8154 204.295 76.6051 204.4C76.3987 204.505 76.164 204.558 75.9011 204.558C75.6057 204.558 75.3569 204.493 75.1546 204.363C74.9523 204.234 74.8006 204.05 74.6994 203.811C74.6023 203.572 74.5537 203.283 74.5537 202.943C74.5537 202.648 74.576 202.423 74.6205 202.27C74.6933 201.99 74.839 201.77 75.0575 201.608C75.276 201.446 75.541 201.365 75.8525 201.365C76.2611 201.365 76.5666 201.469 76.7689 201.675C76.9712 201.877 77.0946 202.177 77.1391 202.573ZM75.8525 201.869C75.6785 201.869 75.5349 201.914 75.4216 202.003C75.3083 202.088 75.2314 202.203 75.191 202.349C75.1627 202.438 75.1445 202.551 75.1364 202.688C75.1364 202.705 75.1445 202.713 75.1606 202.713H76.5504C76.5666 202.713 76.5747 202.705 76.5747 202.688C76.5666 202.555 76.5545 202.456 76.5383 202.391C76.4978 202.233 76.4169 202.108 76.2955 202.015C76.1782 201.918 76.0305 201.869 75.8525 201.869ZM77.5673 204.503C77.543 204.503 77.5269 204.497 77.5188 204.485C77.5107 204.469 77.5127 204.45 77.5248 204.43L78.5323 202.98C78.5404 202.968 78.5404 202.955 78.5323 202.943L77.5248 201.487L77.5127 201.456C77.5127 201.428 77.5309 201.414 77.5673 201.414H78.0589C78.0913 201.414 78.1156 201.426 78.1317 201.45L78.8418 202.488C78.8458 202.492 78.8519 202.494 78.86 202.494C78.8681 202.494 78.8742 202.492 78.8782 202.488L79.5822 201.45C79.5984 201.426 79.6227 201.414 79.655 201.414H80.183C80.2073 201.414 80.2235 201.422 80.2316 201.438C80.2397 201.45 80.2377 201.467 80.2255 201.487L79.2181 202.943C79.214 202.955 79.214 202.968 79.2181 202.98L80.2255 204.43L80.2377 204.461C80.2377 204.489 80.2195 204.503 80.183 204.503H79.6854C79.653 204.503 79.6287 204.491 79.6126 204.467L78.9086 203.429C78.9045 203.421 78.8984 203.417 78.8904 203.417C78.8823 203.417 78.8762 203.421 78.8721 203.429L78.1621 204.467C78.1459 204.491 78.1216 204.503 78.0893 204.503H77.5673ZM82.3377 201.833C82.3377 201.873 82.3174 201.893 82.277 201.893H81.6215C81.6053 201.893 81.5973 201.901 81.5973 201.918V203.526C81.5973 203.696 81.6357 203.819 81.7126 203.896C81.7894 203.969 81.9088 204.005 82.0706 204.005H82.2466C82.2871 204.005 82.3073 204.026 82.3073 204.066V204.442C82.3073 204.483 82.2871 204.503 82.2466 204.503C82.1172 204.511 82.0241 204.515 81.9675 204.515C81.66 204.515 81.4273 204.461 81.2695 204.351C81.1158 204.238 81.0389 204.032 81.0389 203.732V201.918C81.0389 201.901 81.0308 201.893 81.0146 201.893H80.6444C80.604 201.893 80.5837 201.873 80.5837 201.833V201.475C80.5837 201.434 80.604 201.414 80.6444 201.414H81.0146C81.0308 201.414 81.0389 201.406 81.0389 201.39V200.674C81.0389 200.633 81.0591 200.613 81.0996 200.613H81.5366C81.577 200.613 81.5973 200.633 81.5973 200.674V201.39C81.5973 201.406 81.6053 201.414 81.6215 201.414H82.277C82.3174 201.414 82.3377 201.434 82.3377 201.475V201.833Z"
                  fill="white"
                />
                <path
                  d="M234 41.028C234 38.0486 236.415 35.6333 239.395 35.6333H404.605C407.585 35.6333 410 38.0486 410 41.028V152.967H234V41.028Z"
                  fill="#FAFAFA"
                />
                <line
                  x1="234.674"
                  y1="52.8287"
                  x2="410"
                  y2="52.8287"
                  stroke="#D1D3D4"
                  stroke-width="0.67433"
                />
                <circle
                  cx="244.789"
                  cy="44.3996"
                  r="1.68582"
                  fill="white"
                  stroke="#41484E"
                  stroke-width="0.67433"
                />
                <circle
                  cx="251.533"
                  cy="44.3996"
                  r="1.68582"
                  fill="white"
                  stroke="#41484E"
                  stroke-width="0.67433"
                />
                <circle
                  cx="258.276"
                  cy="44.3996"
                  r="1.68582"
                  fill="white"
                  stroke="#41484E"
                  stroke-width="0.67433"
                />
                <rect
                  x="245"
                  y="66.6333"
                  width="77"
                  height="8"
                  rx="2.69732"
                  fill="#008ECF"
                />
                <rect
                  x="245"
                  y="78.6333"
                  width="149"
                  height="6"
                  rx="2.69732"
                  fill="#F1F1F1"
                />
                <rect
                  x="245"
                  y="92.6333"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#F1F1F1"
                />
                <rect
                  x="245"
                  y="124.633"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#F1F1F1"
                />
                <rect
                  x="245"
                  y="103.633"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#F1F1F1"
                />
                <rect
                  x="245"
                  y="135.633"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#F1F1F1"
                />
                <rect
                  x="245"
                  y="114.633"
                  width="60"
                  height="4"
                  rx="2"
                  fill="#F1F1F1"
                />
                <path
                  d="M220.775 27.2868L226.628 31.3423"
                  stroke="#F15E22"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M240.195 12.9518L240.38 24.9433"
                  stroke="#F15E22"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M217.681 0.999996L232.891 27.5858"
                  stroke="#F15E22"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M202.067 34.1914L222.065 38.041"
                  stroke="#F15E22"
                  stroke-miterlimit="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </section>
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
                  <span>HTML, CSS and Vanilla JS</span>
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
                  link: "/tutorial/php",
                  icon: "images/php.svg",
                  text: "PHP",
                },
                {
                  link: "/tutorial/java",
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

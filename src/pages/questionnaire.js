import React from "react"
import SelectSearch from "react-select-search"
import Footer from "../components/footer"
import { Link } from "gatsby"

import "./questionnaire.css"
import Logo from "../../public/images/logo.svg"
import ResultBanner from "../../public/images/questionnaire_graphics.svg"

const splashArt = animationClassName => {
  return (
    <React.Fragment>
      <div className="dd-animation">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1038.94 1080">
          <g className={`doc-anim-wrap ${animationClassName}`}>
            <g id="bc74a3fc-0131-456d-aefd-1fb594aec206" className="BG">
              <rect
                className="f41bc3bb-ba4a-426d-8173-ef2c5fbfc83f"
                width="1038.94"
                height="1080"
              />
            </g>
            <g
              id="a26c4be5-c767-40c1-9a86-6a628e91719e"
              className="doc-anim-icon1"
            >
              <g
                id="ac17aeba-ef89-43c4-a289-d4d835dc5637"
                data-name="Programming-Apps-Websites / Apps / app-window-password-correct"
              >
                <g
                  id="b8818282-5cda-4e51-82aa-1e8bc37c8982"
                  data-name="Group 223"
                >
                  <g
                    id="a166e83f-4ac2-4d00-a43e-829fda2956d7"
                    data-name="app-window-password-correct"
                  >
                    <path
                      id="a3093e4e-f974-48ea-8ad8-215891c40fb2"
                      data-name="Rectangle-path 154"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M193.75,779.07a8.55,8.55,0,0,1,8.55-8.55h81.21a8.55,8.55,0,0,1,8.55,8.55v59.84a8.55,8.55,0,0,1-8.55,8.55H202.3a8.55,8.55,0,0,1-8.55-8.55Z"
                    />
                    <path
                      id="a5d46176-185e-4dec-89f7-29bf3a1a3492"
                      data-name="Shape 1497"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M193.75,791.89h98.31"
                    />
                    <path
                      id="b41db869-f6d7-438e-9917-05b6f775e258"
                      data-name="Shape 1498"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M208.71,780.14a1.07,1.07,0,1,1-1.07,1.07,1.07,1.07,0,0,1,1.07-1.07"
                    />
                    <path
                      id="aaaca4b8-8158-4b53-a897-440c2cab71c3"
                      data-name="Shape 1499"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M221.53,780.14a1.07,1.07,0,1,1-1.07,1.07,1.07,1.07,0,0,1,1.07-1.07"
                    />
                    <path
                      id="ab3f9794-9509-4a82-8d19-6e1e4eac09f0"
                      data-name="Shape 1500"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M234.36,780.14a1.07,1.07,0,1,1-1.07,1.07,1.06,1.06,0,0,1,1.07-1.07"
                    />
                    <path
                      id="beda1745-3a30-4d7e-8ec9-336c9ef7a163"
                      data-name="Rectangle-path 155"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M206.57,811.17a2.14,2.14,0,0,1,2.14-2.14h38.47a2.14,2.14,0,0,1,2.14,2.14V824a2.14,2.14,0,0,1-2.14,2.14H208.71a2.14,2.14,0,0,1-2.14-2.14Z"
                    />
                    <path
                      id="a8313a41-b546-4a52-beb2-539cbd247aad"
                      data-name="Shape 1501"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M217.26,816.51a1.07,1.07,0,1,1-1.07,1.07,1.07,1.07,0,0,1,1.07-1.07"
                    />
                    <path
                      id="bff18fdb-9b7a-412a-b0e4-b3649ba17584"
                      data-name="Shape 1502"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M230.08,816.51a1.07,1.07,0,1,1-1.07,1.07,1.07,1.07,0,0,1,1.07-1.07"
                    />
                    <path
                      id="bbbeba0c-b2b3-4f8a-89ee-7cd1fedd25c3"
                      data-name="Shape 1503"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M257.86,815.4l7,7a2.14,2.14,0,0,0,3,0L281.37,809"
                    />
                  </g>
                </g>
              </g>
              <path
                className="addffc72-f979-4265-8803-52fb900dbd59"
                d="M382.62,780V676.87H279.48v0a33.7,33.7,0,0,0-67.4,0v0H108.93V950.55H382.62V847.41a33.7,33.7,0,0,1,0-67.4Z"
              />
            </g>
            <g
              id="b74ee70d-6bbc-44f6-9903-69358abac18c"
              className="doc-anim-icon2"
            >
              <g
                id="e3a2c2c1-4ffc-457b-8aaa-4b9fcc20dfcc"
                data-name="Programming-Apps-Websites / Plugins/Modules / module-hand-puzzle"
              >
                <g
                  id="be14fc6b-43e5-49e6-be62-a5fcc2d9fc73"
                  data-name="Group 29"
                >
                  <g
                    id="eb8e09f9-1378-4c5f-9ffa-6b48e6797cc1"
                    data-name="module-hand-puzzle"
                  >
                    <path
                      id="a47157ac-1390-4b87-a48d-a70f3036cab7"
                      data-name="Rectangle-path 11"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M469.76,824.85a2,2,0,0,1,2-2h11.75a2,2,0,0,1,2,2v27.42a2,2,0,0,1-2,2H471.72a2,2,0,0,1-2-2Z"
                    />
                    <path
                      id="b74e564e-72be-4f5c-8f30-eea93962dd97"
                      data-name="Shape 210"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M485.43,848.6c41.13,13.71,27.42,13.71,74.43-9.79a10.81,10.81,0,0,0-11.76-3.92l-16.91,5.36"
                    />
                    <path
                      id="a5636a7a-44c3-49fe-b49a-ff53486eb5f4"
                      data-name="Shape 211"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M485.43,826.81h11.75c9.22,0,15.67,7.83,17.63,7.83h13.71c3.92,0,3.92,7.84,0,7.84H507"
                    />
                    <path
                      id="a8d09191-6a6e-4953-8bfd-5acc3f1a51c0"
                      data-name="Shape 212"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M536.63,810.75a7.84,7.84,0,0,1,11.08-11.09,7.71,7.71,0,0,1,1.76,2.68,2,2,0,0,0,1.42,1.21,2,2,0,0,0,1.79-.54l6.11-6.11a3.92,3.92,0,0,0,0-5.54l-6.26-6.27a7.84,7.84,0,1,0-9.62-9.6l-6.26-6.27a3.92,3.92,0,0,0-5.54,0l-5.68,5.68a1.94,1.94,0,0,0-.57,1.58,2,2,0,0,0,.87,1.44,7.84,7.84,0,1,1-10.86,10.86,2,2,0,0,0-1.43-.87,2,2,0,0,0-1.59.56l-5.69,5.66a3.91,3.91,0,0,0,0,5.53l22.16,22.17a3.94,3.94,0,0,0,5.54,0l6.12-6.12a2,2,0,0,0,.53-1.79,2,2,0,0,0-1.2-1.42,7.73,7.73,0,0,1-2.68-1.75Z"
                    />
                  </g>
                </g>
              </g>
              <path
                className="a101bae7-53d6-454d-91bc-30fe588358bc"
                d="M656.31,780V676.87H553.17a33.7,33.7,0,0,1-67.4,0H382.62V780h0a33.7,33.7,0,0,0,0,67.4h0V950.55H656.31V847.41a33.7,33.7,0,1,0,0-67.4Z"
              />
            </g>
            <g
              id="beeb9e85-b4af-48b4-b38a-66c34b55bc68"
              className="doc-anim-icon3"
            >
              <g>
                <path
                  id="a5a97b4e-c343-48b8-a26e-5f51469f3644"
                  data-name="Rectangle-path 130"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M471.61,504.68a8.32,8.32,0,0,1,8.33-8.32H559a8.32,8.32,0,0,1,8.33,8.32v66.6A8.32,8.32,0,0,1,559,579.6H479.94a8.32,8.32,0,0,1-8.33-8.32Z"
                />
                <path
                  id="accba533-8b5a-41fb-a1fc-7f60bfe88cf6"
                  data-name="Shape 1381"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M471.61,517.17h95.74"
                />
                <path
                  id="eccd4b1f-630f-4622-ac51-7a81366b7791"
                  data-name="Shape 1382"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M486.18,505.72a1,1,0,1,1-1,1,1,1,0,0,1,1-1"
                />
                <path
                  id="a0c4b4e7-533d-4b35-a1d1-5f18efea20aa"
                  data-name="Shape 1383"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M498.67,505.72a1,1,0,1,1,0,2.08,1,1,0,1,1,0-2.08"
                />
                <path
                  id="bc407923-dbf8-4e9b-b953-1f5a4311dc96"
                  data-name="Shape 1384"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M511.15,505.72a1,1,0,1,1-1,1,1,1,0,0,1,1-1"
                />
                <path
                  id="a52105a7-8507-4893-85f0-2148c23b164f"
                  data-name="Rectangle-path 131"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M488.26,535.9a2.08,2.08,0,0,1,2.08-2.08h8.32a2.09,2.09,0,0,1,2.09,2.08v8.32a2.09,2.09,0,0,1-2.09,2.08h-8.32a2.08,2.08,0,0,1-2.08-2.08Z"
                />
                <path
                  id="a114df1c-43cd-4789-a03d-1c05584dc84e"
                  data-name="Rectangle-path 132"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M488.26,556.71a2.08,2.08,0,0,1,2.08-2.08h8.32a2.09,2.09,0,0,1,2.09,2.08V565a2.09,2.09,0,0,1-2.09,2.08h-8.32a2.08,2.08,0,0,1-2.08-2.08Z"
                />
                <path
                  id="b5c78f1c-bda5-4c68-8c43-3d07c918dcfa"
                  data-name="Rectangle-path 133"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M513.23,535.9a2.08,2.08,0,0,1,2.08-2.08h8.33a2.08,2.08,0,0,1,2.08,2.08v8.32a2.08,2.08,0,0,1-2.08,2.08h-8.33a2.08,2.08,0,0,1-2.08-2.08Z"
                />
                <path
                  id="b4a1ebae-089e-4851-b25d-17bbc3342b59"
                  data-name="Rectangle-path 134"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M513.23,556.71a2.08,2.08,0,0,1,2.08-2.08h8.33a2.08,2.08,0,0,1,2.08,2.08V565a2.08,2.08,0,0,1-2.08,2.08h-8.33a2.08,2.08,0,0,1-2.08-2.08Z"
                />
                <path
                  id="f93c2f74-b3d1-469d-a1ae-86db7ec14a4c"
                  data-name="Rectangle-path 135"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M538.21,535.9a2.08,2.08,0,0,1,2.08-2.08h8.32a2.08,2.08,0,0,1,2.08,2.08v8.32a2.08,2.08,0,0,1-2.08,2.08h-8.32a2.08,2.08,0,0,1-2.08-2.08Z"
                />
                <path
                  id="ac8ccb33-30b6-4931-8c86-a338052fe363"
                  data-name="Rectangle-path 136"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M538.21,556.71a2.08,2.08,0,0,1,2.08-2.08h8.32a2.08,2.08,0,0,1,2.08,2.08V565a2.08,2.08,0,0,1-2.08,2.08h-8.32a2.08,2.08,0,0,1-2.08-2.08Z"
                />
              </g>
              <path
                className="addffc72-f979-4265-8803-52fb900dbd59"
                d="M656.31,506.28V403.18H553.17v-.05a33.7,33.7,0,1,0-67.4,0v.05H382.62v103.1a33.7,33.7,0,1,1,0,67.4V676.87H485.77a33.7,33.7,0,0,0,67.4,0H656.31V573.68a33.7,33.7,0,1,1,0-67.4Z"
              />
            </g>
            <g
              id="b0e15327-55af-4162-98f9-b0489f048197"
              className="doc-anim-icon4"
            >
              <g
                id="b744f484-e5cf-44cf-9437-a90cec656d09"
                data-name="Programming-Apps-Websites / Databases / database-connect"
              >
                <g
                  id="aa01c700-d833-44f5-b37b-a0b6e6a79da4"
                  data-name="Group 126"
                >
                  <g
                    id="b7f67685-30b4-4136-ae4a-454d173b170a"
                    data-name="database-connect"
                  >
                    <path
                      id="ef5b5ba0-5d1e-401b-9ae7-c9dac15b1165"
                      data-name="Shape 857"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M498.43,246.76l42.1,32.72"
                    />
                    <path
                      id="ac34952b-ed14-489c-8f1d-d2957ed3b242"
                      data-name="Shape 858"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M498.43,279.48l42.1-32.72"
                    />
                    <path
                      id="bf703673-487c-416e-9f1f-1eb1f7b5ce27"
                      data-name="Oval 53"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M485.27,228.94c7.55,0,13.68-3.07,13.68-6.84s-6.13-6.84-13.68-6.84-13.68,3.06-13.68,6.84S477.72,228.94,485.27,228.94Z"
                    />
                    <path
                      id="ad66840a-be5e-4bcb-bf0e-50c27bdbf379"
                      data-name="Shape 849"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M499,233.5c0,3.77-6.13,6.84-13.68,6.84s-13.68-3.07-13.68-6.84"
                    />
                    <path
                      id="a2ec26a7-fa34-44be-ac19-e553d4bd612f"
                      data-name="Shape 850"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M499,222.1v22.79c0,3.78-6.13,6.84-13.68,6.84s-13.68-3.06-13.68-6.84V222.1"
                    />
                    <path
                      id="ad9249e9-6638-4258-a160-b97d71c7dab2"
                      data-name="Oval 54"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M553.67,228.94c7.55,0,13.68-3.07,13.68-6.84s-6.13-6.84-13.68-6.84S540,218.32,540,222.1,546.11,228.94,553.67,228.94Z"
                    />
                    <path
                      id="b868e1d3-574f-44ed-9671-14c0774a96db"
                      data-name="Shape 851"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M567.35,233.5c0,3.77-6.13,6.84-13.68,6.84S540,237.27,540,233.5"
                    />
                    <path
                      id="ac41e39a-172f-4027-a3e7-5e4d5946b7bf"
                      data-name="Shape 852"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M567.35,222.1v22.79c0,3.78-6.13,6.84-13.68,6.84S540,248.67,540,244.89V222.1"
                    />
                    <path
                      id="b8a1fc2d-672b-4aaf-991a-61b3d58df14b"
                      data-name="Oval 55"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M485.27,288.21c7.55,0,13.68-3.06,13.68-6.84s-6.13-6.84-13.68-6.84-13.68,3.07-13.68,6.84S477.72,288.21,485.27,288.21Z"
                    />
                    <path
                      id="a83a0079-666c-413b-973f-374021efb792"
                      data-name="Shape 853"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M499,292.77c0,3.78-6.13,6.84-13.68,6.84s-13.68-3.06-13.68-6.84"
                    />
                    <path
                      id="a063151b-0e7f-46f8-92f1-5815aa3f2783"
                      data-name="Shape 854"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M499,281.37v22.8c0,3.78-6.13,6.84-13.68,6.84s-13.68-3.06-13.68-6.84v-22.8"
                    />
                    <path
                      id="ad1a1ffe-07f5-4a03-953e-fefecd7c384c"
                      data-name="Oval 56"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M553.67,288.21c7.55,0,13.68-3.06,13.68-6.84s-6.13-6.84-13.68-6.84S540,277.6,540,281.37,546.11,288.21,553.67,288.21Z"
                    />
                    <path
                      id="ae229641-ba0b-4e34-bf17-ad20f7eba3e2"
                      data-name="Shape 855"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M567.35,292.77c0,3.78-6.13,6.84-13.68,6.84S540,296.55,540,292.77"
                    />
                    <path
                      id="bc9b8e81-99a5-43d7-91eb-9a99a965dda8"
                      data-name="Shape 856"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M567.35,281.37v22.8c0,3.78-6.13,6.84-13.68,6.84S540,308,540,304.17v-22.8"
                    />
                  </g>
                </g>
              </g>
              <path
                className="a101bae7-53d6-454d-91bc-30fe588358bc"
                d="M656.31,232.59V129.45H382.62V232.59a33.7,33.7,0,1,0,0,67.4V403.13H485.77a33.7,33.7,0,1,1,67.4,0H656.31V300a33.7,33.7,0,1,0,0-67.4Z"
              />
            </g>
            <g
              id="ed9eeb9b-5c1d-430b-9b35-96a54f2ba632"
              className="doc-anim-icon5"
            >
              <g>
                <path
                  id="b30beb92-8833-4383-adfb-9618c6e8fcc2"
                  data-name="Shape 7"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M283.74,552.94l6.43,6.43-6.43,6.42"
                />
                <path
                  id="bec0ec77-29a6-49a2-92f7-fa0436862810"
                  data-name="Shape 8"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M265.53,563.65l2.14,2.14"
                />
                <path
                  id="e14c6e2a-594a-40ab-9a4a-ab5d12c761f1"
                  data-name="Shape 9"
                  className="addffc72-f979-4265-8803-52fb900dbd59"
                  d="M278.92,552.94l-6.43,12.85"
                />
                <path
                  id="aa5f3a92-0d62-4a33-82e7-831e672183cd"
                  data-name="Rectangle-path 2"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M275.71,533.66h20.35a4.28,4.28,0,0,1,4.28,4.28v30a4.28,4.28,0,0,1-4.28,4.28H255.35a4.28,4.28,0,0,1-4.28-4.28v-2.68"
                />
                <path
                  id="bdadffbe-bc6e-4ed1-8247-7ffa1d0c71c7"
                  data-name="Shape 10"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M275.71,544.37h24.63"
                />
                <g
                  id="b9af12d2-6dec-49ed-9ba0-1351a1b1dd8e"
                  data-name="Computers-Devices-Electronics / Desktop-Computers / monitor"
                >
                  <g
                    id="b10f40c9-773c-4fc9-9eaa-3f254f74633c"
                    data-name="Group 79"
                  >
                    <g
                      id="f719516a-ea6c-4692-b59b-ce3b9e5b574d"
                      data-name="monitor"
                    >
                      <path
                        id="aec1ed48-ba31-40fd-9757-c25d8c6ba763"
                        data-name="Shape 386"
                        className="a101bae7-53d6-454d-91bc-30fe588358bc"
                        d="M220.49,573.3H246"
                      />
                      <path
                        id="e0ecdc70-c417-42a1-8058-12ccfddd3754"
                        data-name="Rectangle-path 46"
                        className="a101bae7-53d6-454d-91bc-30fe588358bc"
                        d="M198.29,509.87a3.17,3.17,0,0,1,3.17-3.17h66.61a3.17,3.17,0,0,1,3.17,3.17v47.57a3.17,3.17,0,0,1-3.17,3.18H201.46a3.17,3.17,0,0,1-3.17-3.18Z"
                      />
                      <line
                        className="a101bae7-53d6-454d-91bc-30fe588358bc"
                        x1="234.76"
                        y1="560.62"
                        x2="234.76"
                        y2="573.3"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <path
                className="a101bae7-53d6-454d-91bc-30fe588358bc"
                d="M416.33,540a33.7,33.7,0,0,0-33.71-33.7V403.13H279.48a33.7,33.7,0,1,1-67.4,0H108.93V676.82H212.08a33.7,33.7,0,0,1,67.4,0H382.62V573.68A33.7,33.7,0,0,0,416.33,540Z"
              />
            </g>
            <g
              id="aeacd734-a810-4553-99bd-4e0588674cc1"
              className="doc-anim-icon6"
            >
              <g>
                <g
                  id="ee8a1e62-f35f-4a7d-868b-59a653e49459"
                  data-name="Programming-Apps-Websites / Programming / programming-search-browser"
                >
                  <g
                    id="afee0c4a-5a41-4bd3-8216-12ee53fc7e2f"
                    data-name="Programming-Apps-Websites / Programming / programming-browser"
                  >
                    <g
                      id="a95f9136-c599-4158-8c8a-65a2a0886f59"
                      data-name="Group 2"
                    >
                      <g
                        id="ea1e7109-31b3-46a7-9f8d-262766165b3c"
                        data-name="programming-browser"
                      >
                        <path
                          id="a58a5dcc-48af-4115-82f4-5a6bf7daa806"
                          data-name="Shape 7"
                          className="addffc72-f979-4265-8803-52fb900dbd59"
                          d="M834.35,826.33l6.42,6.43-6.42,6.43"
                        />
                        <path
                          id="b0c6fe98-e642-45b6-a469-f403514d6a4e"
                          data-name="Shape 8"
                          className="addffc72-f979-4265-8803-52fb900dbd59"
                          d="M818.28,826.33l-6.43,6.43,6.43,6.43"
                        />
                        <path
                          id="b9276278-f177-4e82-8e6b-9f14c4018e40"
                          data-name="Shape 9"
                          className="addffc72-f979-4265-8803-52fb900dbd59"
                          d="M829.53,826.33l-6.43,12.86"
                        />
                        <path
                          id="bedcdb4c-2ed8-4202-aeba-f3e7eb099f94"
                          data-name="Rectangle-path 2"
                          className="a101bae7-53d6-454d-91bc-30fe588358bc"
                          d="M801.68,811.34a4.28,4.28,0,0,1,4.28-4.29h40.71a4.29,4.29,0,0,1,4.28,4.29v30a4.29,4.29,0,0,1-4.28,4.29H806a4.28,4.28,0,0,1-4.28-4.29Z"
                        />
                        <path
                          id="e938995e-d633-4741-9b82-a48d156c56a8"
                          data-name="Shape 10"
                          className="a101bae7-53d6-454d-91bc-30fe588358bc"
                          d="M801.68,817.77H851"
                        />
                        <path
                          id="f2b06802-f6dc-4111-9f78-9d59d9c17dae"
                          data-name="Shape 11"
                          className="a101bae7-53d6-454d-91bc-30fe588358bc"
                          d="M809.17,811.87a.54.54,0,1,1-.53.54.54.54,0,0,1,.53-.54"
                        />
                        <path
                          id="b3f1a586-5a71-46d9-a211-93e1bfb2e813"
                          data-name="Shape 12"
                          className="a101bae7-53d6-454d-91bc-30fe588358bc"
                          d="M815.6,811.87a.54.54,0,1,1-.53.54.54.54,0,0,1,.53-.54"
                        />
                        <path
                          id="fbd6c662-7740-43cb-9a61-cfab0d9ed6d4"
                          data-name="Shape 13"
                          className="a101bae7-53d6-454d-91bc-30fe588358bc"
                          d="M822,811.87a.54.54,0,1,1-.54.54.54.54,0,0,1,.54-.54"
                        />
                      </g>
                    </g>
                  </g>
                </g>
                <g
                  id="a4d54652-1b92-4e44-9719-1b50a22d04bf"
                  data-name="Computers-Devices-Electronics / Desktop-Computers / monitor"
                >
                  <g
                    id="bb26d116-c272-4b8e-bda4-c01f378679fd"
                    data-name="Group 79"
                  >
                    <g
                      id="a12b5679-4aaf-49f6-b95c-d067e28f2266"
                      data-name="monitor"
                    >
                      <path
                        id="a01e18ae-64a5-4278-8c4b-115671b4bfcb"
                        data-name="Shape 386"
                        className="a101bae7-53d6-454d-91bc-30fe588358bc"
                        d="M771.1,846.7l25.52.63"
                      />
                      <path
                        id="f29b3429-0340-47d0-8730-6abbaeec3c7d"
                        data-name="Rectangle-path 46"
                        className="a101bae7-53d6-454d-91bc-30fe588358bc"
                        d="M795.88,834H752.07a3.17,3.17,0,0,1-3.17-3.17V783.27a3.17,3.17,0,0,1,3.17-3.18h66.6a3.17,3.17,0,0,1,3.17,3.18v16.82"
                      />
                      <line
                        className="a101bae7-53d6-454d-91bc-30fe588358bc"
                        x1="785.37"
                        y1="834.01"
                        x2="785.37"
                        y2="846.7"
                      />
                    </g>
                  </g>
                </g>
              </g>
              <path
                className="addffc72-f979-4265-8803-52fb900dbd59"
                d="M826.86,676.87v0a33.71,33.71,0,0,0-67.41,0v0H656.31V780a33.7,33.7,0,1,1,0,67.4V950.55H930V676.87Z"
              />
            </g>
            <g
              id="f9029b43-2cf2-4c6b-a90e-29746e91c63e"
              className="doc-anim-icon7"
            >
              <g
                id="bbec3a07-465d-444b-8fcc-de7f3d2a3980"
                data-name="Programming-Apps-Websites / Apps / app-window-cloud"
              >
                <g
                  id="e802b4cf-db4e-4beb-b728-a7d51949e3f4"
                  data-name="Group 187"
                >
                  <g
                    id="f0cd4239-2981-47ba-a116-e5ac02c60168"
                    data-name="app-window-cloud"
                  >
                    <path
                      id="a795750a-2db4-4c66-8a56-4007d1be5f0e"
                      data-name="Rectangle-path 113"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M742.76,232a8.57,8.57,0,0,1,8.57-8.57h81.41a8.57,8.57,0,0,1,8.57,8.57v68.56a8.57,8.57,0,0,1-8.57,8.57H751.33a8.57,8.57,0,0,1-8.57-8.57Z"
                    />
                    <path
                      id="bc25bd20-1634-44c9-af57-5d7d3ad5be43"
                      data-name="Shape 1247"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M742.76,244.87h98.55"
                    />
                    <path
                      id="a27434be-703b-4fb4-b798-8c3ebfe82d07"
                      data-name="Shape 1248"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M757.76,233.08a1.08,1.08,0,1,1-1.07,1.07,1.07,1.07,0,0,1,1.07-1.07"
                    />
                    <path
                      id="b037eaea-528e-48aa-9501-795b7a298ddc"
                      data-name="Shape 1249"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M770.61,233.08a1.08,1.08,0,1,1-1.07,1.07,1.07,1.07,0,0,1,1.07-1.07"
                    />
                    <path
                      id="a30d0480-8525-4ccd-845b-c3575423065b"
                      data-name="Shape 1250"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M783.47,233.08a1.08,1.08,0,1,1-1.08,1.07,1.07,1.07,0,0,1,1.08-1.07"
                    />
                    <path
                      id="e8a37bd4-d0c7-4a3f-b635-72d8eecc7647"
                      data-name="Shape 1251"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M822.22,280.33a11.91,11.91,0,0,0-12.55-11.68,17,17,0,0,0-15.3-9.39,16.71,16.71,0,0,0-16.9,15.43,9,9,0,0,0-11,8.57c0,8.91,9.69,8.76,9.69,8.76h35.14a12.25,12.25,0,0,0,10.88-11.69Z"
                    />
                  </g>
                </g>
              </g>
              <path
                className="addffc72-f979-4265-8803-52fb900dbd59"
                d="M656.31,129.45V232.59a33.7,33.7,0,1,1,0,67.4V403.13H759.45a33.71,33.71,0,1,0,67.41,0H930V129.45Z"
              />
            </g>
            <g
              id="bdc3cac0-bdf2-4e85-bd3d-80078f0b0e47"
              className="doc-anim-icon8"
            >
              <path
                className="addffc72-f979-4265-8803-52fb900dbd59"
                d="M382.62,300a33.7,33.7,0,1,1,0-67.4h0V129.45H108.93V403.13H212.08a33.7,33.7,0,1,0,67.4,0H382.62V300Z"
              />
              <g>
                <path
                  id="b389581a-ce67-47b6-a841-c10b0a3ca2b3"
                  data-name="Rectangle-path 41"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M215,256.29a6.83,6.83,0,0,1,6.83-6.84h47.87a6.84,6.84,0,0,1,6.84,6.84v41a6.84,6.84,0,0,1-6.84,6.84H221.84a6.83,6.83,0,0,1-6.83-6.84Z"
                />
                <path
                  id="b39a5436-7657-4394-b04d-dc8c81aac5f0"
                  data-name="Oval 27"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M245.78,285.78a8.55,8.55,0,1,0-8.55-8.55A8.55,8.55,0,0,0,245.78,285.78Z"
                />
                <path
                  id="a23e1530-7c66-4017-bcfe-290b9b8a7638"
                  data-name="Shape 508"
                  className="a101bae7-53d6-454d-91bc-30fe588358bc"
                  d="M262.87,239.19a17.1,17.1,0,0,0-34.19,0v10.26h34.19Z"
                />
              </g>
            </g>
            <g
              id="b49ef998-a543-47f7-8ea7-4e1c956e8d91"
              className="doc-anim-icon9"
            >
              <g
                id="acc3ef37-9d5f-4bb2-90a7-73d0046baf3f"
                data-name="Internet-Networks-Servers / Servers / server-server-exchange"
              >
                <g
                  id="e957fbaf-1c6f-4663-8960-84e4bf76fae6"
                  data-name="Group 130"
                >
                  <g
                    id="fc002b04-3155-4d50-af69-4f674e44133d"
                    data-name="server-server-exchange"
                  >
                    <path
                      id="b280f37a-ca6c-4ca0-a80d-ca131304b7f3"
                      data-name="Shape 1138"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M762.52,525.72v-9.19a15.31,15.31,0,0,1,15.33-15.31H785"
                    />
                    <path
                      id="e346d329-603f-4274-a0dc-1567eda58a5f"
                      data-name="Shape 1139"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M770.7,517.56l-8.17,8.16-8.17-8.16"
                    />
                    <path
                      id="e8f324c5-dbc8-430e-8dcd-5510712df3d5"
                      data-name="Shape 1140"
                      className="addffc72-f979-4265-8803-52fb900dbd59"
                      d="M778.87,495.09l6.13,6.13-6.13,6.12"
                    />
                    <path
                      id="a8495bf3-ce6c-45ef-94ef-846ed6b6fb98"
                      data-name="Shape 1141"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M840.13,501.22a8.17,8.17,0,0,1-8.17,8.17H811.54a8.17,8.17,0,1,1,0-16.34H832A8.17,8.17,0,0,1,840.13,501.22Z"
                    />
                    <path
                      id="e0b51a09-f9c3-405e-a02a-9d184b99bd96"
                      data-name="Shape 1142"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M814.6,500.19a1,1,0,1,0,1,1,1,1,0,0,0-1-1h0"
                    />
                    <path
                      id="fb494bd2-2df6-43f9-a6d3-a702b581853f"
                      data-name="Shape 1143"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M840.13,517.56a8.16,8.16,0,0,1-8.17,8.16H811.54a8.17,8.17,0,1,1,0-16.33H832A8.17,8.17,0,0,1,840.13,517.56Z"
                    />
                    <path
                      id="bc2361db-9d1b-4aec-8ff7-3903d91d2ed6"
                      data-name="Shape 1144"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M814.6,516.53a1,1,0,1,0,1,1,1,1,0,0,0-1-1h0"
                    />
                    <path
                      id="fa1bb7f0-20fa-4aa4-80ca-fa65a3d9beff"
                      data-name="Shape 1145"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M840.13,533.89a8.17,8.17,0,0,1-8.17,8.17H811.54a8.17,8.17,0,1,1,0-16.34H832A8.17,8.17,0,0,1,840.13,533.89Z"
                    />
                    <path
                      id="f7bebaf0-a070-4598-bfb5-e6644e262f5f"
                      data-name="Shape 1146"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M814.6,532.87a1,1,0,1,0,1,1,1,1,0,0,0-1-1h0"
                    />
                    <path
                      id="bb35cacb-b8d6-44d6-b15a-ea731c16164a"
                      data-name="Shape 1147"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M783,546.15a8.17,8.17,0,0,1-8.17,8.17H754.35a8.17,8.17,0,0,1,0-16.34h20.43A8.17,8.17,0,0,1,783,546.15Z"
                    />
                    <path
                      id="b9e70b8c-0bcd-49f6-a699-126b4cd69f46"
                      data-name="Shape 1148"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M757.42,545.13a1,1,0,1,0,1,1,1,1,0,0,0-1-1h0"
                    />
                    <path
                      id="edc8323e-5992-4c4e-a806-fc07c7f0b7a3"
                      data-name="Shape 1149"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M783,562.49a8.17,8.17,0,0,1-8.17,8.17H754.35a8.17,8.17,0,0,1,0-16.34h20.43A8.17,8.17,0,0,1,783,562.49Z"
                    />
                    <path
                      id="f3e40be4-ffdf-4057-8ae9-c778c67f5c16"
                      data-name="Shape 1150"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M757.42,561.47a1,1,0,1,0,1,1,1,1,0,0,0-1-1h0"
                    />
                    <path
                      id="a9e59a5c-960e-4af1-acea-39930ba637f8"
                      data-name="Shape 1151"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M783,578.83a8.17,8.17,0,0,1-8.17,8.17H754.35a8.17,8.17,0,0,1,0-16.34h20.43A8.17,8.17,0,0,1,783,578.83Z"
                    />
                    <path
                      id="e87fc2a9-df90-4aa5-bd79-e4d247bc926f"
                      data-name="Shape 1152"
                      className="a101bae7-53d6-454d-91bc-30fe588358bc"
                      d="M757.42,577.81a1,1,0,1,0,1,1,1,1,0,0,0-1-1h0"
                    />
                  </g>
                </g>
              </g>
              <path
                className="a101bae7-53d6-454d-91bc-30fe588358bc"
                d="M826.86,403.18a33.7,33.7,0,0,1-67.4,0H656.31v103.1h0a33.7,33.7,0,1,0,0,67.4h0V676.87H759.46v0a33.71,33.71,0,0,1,67.41,0v0H930V403.18Z"
              />
            </g>
            <g
              id="b35a8506-29ee-4525-8deb-e9b100e382d6"
              className="doc-anim-icon10"
            >
              <rect
                className="addffc72-f979-4265-8803-52fb900dbd59"
                x="108.93"
                y="129.45"
                width="821.07"
                height="821.07"
              />
            </g>
            <g
              id="fbfd97f7-951e-4ab9-8cfa-ffe318c4ea8b"
              className="doc-anim-icon11"
            >
              <path
                id="b76f18b1-283a-4288-a782-01498e9e2947"
                data-name="Oval 41"
                className="a101bae7-53d6-454d-91bc-30fe588358bc"
                d="M519.47,708.63c97,0,175.66-75.5,175.66-168.63S616.48,371.37,519.47,371.37,343.81,446.87,343.81,540,422.45,708.63,519.47,708.63Z"
              />
              <path
                id="bf73d431-f2f0-4c0a-a69d-7fc2dd2cccde"
                data-name="Shape 290"
                className="addffc72-f979-4265-8803-52fb900dbd59"
                d="M597.75,491l-85,108.88a22.25,22.25,0,0,1-16,8.37,22.52,22.52,0,0,1-17.09-6.12l-43.91-42.16"
              />
            </g>
          </g>
        </svg>
      </div>
    </React.Fragment>
  )
}

const QuestionList = [
  {
    question:
      "Choose how consumers will register and log in to your application.",
    description: "",
    answers: {
      type: "multi",
      isRequired: true,
      choices: [
        "Email/Password Login",
        "Phone Login",
        "Social Login",
        "Passwordless Login - Email Magic Link",
        "Passwordless Login - SMS OTP",
      ],
    },
  },
  {
    question: "Will consumers log in using their internal identity provider?",
    description:
      "Choose yes, if your consumers are businesses who want their employees to log in using their internal identity providers like Salesforce, AzureAD, etc.",
    answers: {
      type: "single",
      isRequired: true,
      choices: ["Yes", "No"],
    },
  },
  {
    question: "Tell us all the internal identity providers your consumers use.",
    description: "",
    answers: {
      type: "multi",
      isRequired: true,
      choices: ["Azure AD", "Salesforce", "Other SAML enabled SSO providers"],
    },
  },
  {
    question: "Do you want to implement Outbound SSO using LoginRadius IDP?",
    description:
      "Choose the protocol you want to utilize for allowing consumers to log into your application via LoginRadius IDP",
    answers: {
      type: "multi",
      isRequired: false,
      choices: [
        "SSO SAML",
        "SSO JWT",
        "SSO OIDC",
        "SSO OAuth2",
        "Session-based SSO using LoginRadius JavaScript",
      ],
    },
  },
  {
    question:
      "Do you have consumer profile data in your app or in a third-party app and want to migrate it to LoginRadius?",
    description:
      "We have a straightforward migration process for you to migrate their profile data to LoginRadius.",
    answers: {
      type: "single",
      isRequired: true,
      choices: ["Yes", "No"],
    },
  },
  {
    question:
      "Choose the back-end technology of your application where you plan to implement LoginRadius.",
    description: "",
    answers: {
      type: "single",
      isRequired: true,
      choices: [
        "PHP",
        ".NET",
        "NodeJS",
        "Java",
        "Golang",
        "Python",
        "ROR",
        "BigCommerce",
        "WordPress",
        "Shopify",
        "Drupal",
        "Other",
      ],
    },
  },
  {
    question:
      "Choose the front-end technology of your application where you plan to implement LoginRadius.",
    description: "",
    answers: {
      type: "single",
      isRequired: true,
      choices: [
        "JavaScript",
        // "Pure JavaScript implementation",
        "AngularJS",
        "ReactJS",
        "VueJS",
      ],
    },
  },
  // {
  //   question:
  //     "Do you own multiple applications and want to enable SSO (single sign-on) among them for consumers?",
  //   description:
  //     "To allow your consumers access to these applications with a single set of login credentials and an active login session.",
  //   answers: {
  //     type: "single",
  //     isRequired: true,
  //     choices: ["Yes", "No"],
  //   },
  // },
  {
    question:
      "Are you planning to enhance the security aspects of your application and protect against account takeover? Choose your preferences:",
    description: "",
    answers: {
      type: "multi",
      isRequired: false,
      choices: [
        "Protect against brute force attack",
        "Set strong password policy",
        "Protect using MFA",
      ],
    },
  },
  {
    question:
      "Do you want to synchronize consumers' data to any third-party applications or across your applications? If yes, choose integrations from the list below:",
    description: "",
    answers: {
      type: "multiselectbox",
      isRequired: false,
      choices: [
        "AdRoll",
        "Adobe Analytics",
        "Adobe Analytics",
        "Adobe Campaign",
        "Adobe Experience Manager",
        "AdxStudio",
        "Age Verification",
        "Alert Logic",
        "Amazon AWS IAM",
        "Amazon Redshift",
        "Amazon SES",
        "Android",
        "Appnexus",
        "Atlassian",
        "Badgeville",
        "BigCommerce",
        "BigQuery",
        "Bitium",
        "Blue Shift",
        "BlueConic",
        "BoomContact LabTrain",
        "Bronto",
        "Bunchball",
        "Castle.io",
        "Centrify",
        "Chartio",
        "Constant Contact",
        "Customer.io",
        "Cxense",
        "Dataxu",
        "Desk",
        "Disqus",
        "DotNetDuke",
        "Doximity",
        "Eloqua",
        "Face ID",
        "Facebook Ads",
        "FreshDesk",
        "FreshSales",
        "Google Analytics",
        "Google Cloud IAM",
        "Google Identity",
        "Google Tag Manager",
        "HP ArcSight",
        "Hadoop",
        "Higher Logic",
        "HubSpot",
        "Hubspot",
        "IBM Campaign",
        "IBM Cloud Video",
        "IBM Cognos",
        "IBM QRada",
        "IBM Silverpop",
        "IBM Websphere",
        "Infusion Soft",
        "Intercom",
        "Ionic",
        "Ionic",
        "Jive-x",
        "Joomla",
        "Krux",
        "Libercus",
        "Litmus",
        "Loggly",
        "Looker",
        "Lotame",
        "Lytics",
        "MS Gateway",
        "Magento",
        "Mailchimp",
        "Mailgun",
        "Mandrill",
        "Marketo",
        "Micro Strategy",
        "Micros",
        "Microsoft Active Directory",
        "Microsoft Azure AD",
        "Microsoft Dynamic 365",
        "Microsoft Power BI",
        "Microsoft Sharepoint",
        "Mixpanel",
        "Monetate",
        "NetSuite",
        "New Relic",
        "Okta",
        "One Login",
        "Optimizely",
        "Oracle ATG Web Commerce",
        "Oracle BlueKai",
        "Oracle Identity",
        "Other systems using Webhook",
        "Page Suite",
        "PerfectMind",
        "Piano.io",
        "Ping Identity",
        "Prestashop",
        "Qlik",
        "RICS",
        "Redash",
        "Responsys",
        "Richrelevance",
        "SAP Business Objects",
        "SAP Hybris",
        "Salesforce",
        "Salesforce Demandware",
        "Salesforce Identity",
        "Salesforce Marketing Cloud",
        "Salesforce Pardot",
        "Selligent",
        "SendGrid",
        "Sendinblue",
        "Shopify",
        "Simpy Digi",
        "SiteFinity",
        "Sitecore",
        "Social9",
        "Solar Winds",
        "Splunk",
        "SugarCRM",
        "TIBCO Spotfire",
        "Tableau",
        "Touch ID",
        "Upaknee",
        "Viafoura",
        "WS Kinesis",
        "Wayin",
        "Webtrends",
        "WordPress",
        "WordPress VIP",
        "ZenDesk",
        "Zeta (previously Boomtrain)",
        "Zimbra",
        "Zoho",
        "kaltura",
        "klaviyo",
        "Other systems using Webhook",
      ],
    },
  },
  {
    question:
      "Are you planning to implement the selected use case to a Mobile App? If yes, choose app type:",
    description: "",
    answers: {
      type: "multi",
      isRequired: false,
      choices: ["Android", "iOS", "Hybrid/Ionic"],
    },
  },
]

const DocsList = [
  // "Email/Password Login",
  // "Phone Login",
  // "Social Login",
  // "Passwordless Login - Email Magic Link",
  // "Passwordless Login - SMS OTP"
  [
    {
      name: "Email/Password Login",
      body: {
        __html: `<span>Here is a guide to configure and customize Email/Password Login for your application. It also describes how to manage email templates for this login method.<br/>
      <a href="https://www.loginradius.com/docs/developer/guide/emailpassword-login/" target="_blank">https://www.loginradius.com/docs/developer/guide/emailpassword-login/</a><br/>
      In this case, Email (required) and Password (required) are the default registration form fields. You can add more fields to your registration form:<br/>
      <b>Via Dashboard:</b> <a href="https://www.loginradius.com/docs/developer/guide/custom-registration/" target="_blank">https://www.loginradius.com/docs/developer/guide/custom-registration/</a><br/>
      <b>Via JS:</b> <a href="https://www.loginradius.com/docs/developer/references/javascript-library/customizing-your-registration-schema" target="_blank">https://www.loginradius.com/docs/developer/references/javascript-library/customizing-your-registration-schema</a></span>`,
      },
    },
    {
      name: "Phone Login",
      body: {
        __html: `<span>Here is a guide to configure and customize Phone Login for your application. It also describes how to manage phone number verification, phone number change, and password reset SMS templates for this login method.<br/>
      <a href="https://www.loginradius.com/docs/developer/guide/phone-login/" target="_blank">https://www.loginradius.com/docs/developer/guide/phone-login/</a><br/>
      In this case, Phone Number (required), Email (optional), and Password (required) are the default registration form fields. You can add more fields to your registration form:<br/>
      <b>Via Dashboard:</b> <a href="https://www.loginradius.com/docs/developer/guide/custom-registration/" target="_blank">https://www.loginradius.com/docs/developer/guide/custom-registration/</a><br/>
      <b>Via JS:</b> <a href="https://www.loginradius.com/docs/developer/references/javascript-library/customizing-your-registration-schema" target="_blank">https://www.loginradius.com/docs/developer/references/javascript-library/customizing-your-registration-schema</a></span>`,
      },
    },
    {
      name: "Social Login",
      body: {
        __html: `<span>Here is a guide to configuring social login for your application. You can enable and configure a range of social providers based on your subscribed plan. <br/>
      <a href="https://www.loginradius.com/docs/developer/guide/social-login/" target="_blank">https://www.loginradius.com/docs/developer/guide/social-login/</a><br/>
      To get additional information from consumers when they sign up using Social Provider, you can configure the respective fields as required in the registration schema. For more information, refer to this document: <br/>
      <a href="https://www.loginradius.com/docs/developer/guide/custom-registration/" target="_blank">https://www.loginradius.com/docs/developer/guide/custom-registration/</a></span>`,
      },
    },
    {
      name: "Passwordless Login - Email Magic Link",
      body: {
        __html: `<span>Here is a guide to configuring passwordless login for your application using Email Magic. You can also manage email templates for passwordless login.<br/>
      <a href="https://www.loginradius.com/docs/developer/guide/passwordless-login" target="_blank">https://www.loginradius.com/docs/developer/guide/passwordless-login</a></span>`,
      },
    },
    {
      name: "Passwordless Login - SMS OTP",
      body: {
        __html: `<span>Here is a guide to configuring passwordless login for your application using OTP via SMS. You can also manage SMS templates for passwordless login.<br/>
      <a href="https://www.loginradius.com/docs/developer/guide/passwordless-login" target="_blank">https://www.loginradius.com/docs/developer/guide/passwordless-login</a></span>`,
      },
    },
  ],
  [],
  // "Azure AD",
  // "Salesforce",
  // "Other SAML enabled SSO providers"
  [
    {
      name: "Inbound SSO with Azure AD",
      body: {
        __html: `<span>Here is a guide to configuring Inbound/Employee SSO using Azure AD.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/inbound-sso-saml-azure-ad/" target="_blank">https://www.loginradius.com/docs/developer/guide/inbound-sso-saml-azure-ad/</a></span>`,
      },
    },
    {
      name: "Inbound SSO with Salesforce",
      body: {
        __html: `<span>Here is a guide to configuring Inbound/Employee SSO using Salesforce.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/inbound-sso-saml-salesforce/" target="_blank">https://www.loginradius.com/docs/developer/guide/inbound-sso-saml-salesforce/</a></span>`,
      },
    },
    {
      name: "Inbound SSO with SAML supported applications",
      body: {
        __html: `<span>Here is a guide to configuring Inbound/Employee SSO using applications that support SAML protocol.<br/>
        <a href="" target="_blank">Link not yet available</a></span>`,
      },
    },
  ],
  // "SSO SAML",
  // "SSO JWT",
  // "SSO OIDC",
  // "SSO OAuth2",
  // "Session-based SSO using LoginRadius JavaScript"
  [
    {
      name: "Outbound SSO - SAML",
      body: {
        __html: `<span>Here is a guide to implementing Outbound SSO using SAML protocol, where LoginRadius acts as an IDP. You can utilize any desired application as SP (service providers) that supports SAML.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/saml" target="_blank">https://www.loginradius.com/docs/developer/guide/saml</a></span>`,
      },
    },
    {
      name: "Outbound SSO - JWT",
      body: {
        __html: `<span>Here is a guide to implementing Outbound SSO using JWT protocol, where LoginRadius acts as an IDP. You can utilize any desired application as SP (service providers) that supports JWT.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/jwt/" target="_blank">https://www.loginradius.com/docs/developer/guide/jwt/</a></span>`,
      },
    },
    {
      name: "Outbound SSO - OIDC",
      body: {
        __html: `<span>Here is a guide to implementing Outbound SSO using OIDC protocol, where LoginRadius acts as an IDP. You can utilize any desired application as SP (service providers) that supports OIDC.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/oidc/" target="_blank">https://www.loginradius.com/docs/developer/guide/oidc/</a></span>`,
      },
    },
    {
      name: "Outbound SSO - OAuth",
      body: {
        __html: `<span>Here is a guide to implementing Outbound SSO using OAuth2 protocol, where LoginRadius acts as an IDP. You can utilize any desired application as SP (service providers) that supports OAuth2.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/oauth/" target="_blank">https://www.loginradius.com/docs/developer/guide/oauth/</a></span>`,
      },
    },
    {
      name: "Outbound SSO using JavaScript",
      body: {
        __html: `<span>Here is a guide to implementing session-based web SSO among your applications using LoginRadius JavaScript.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/web-sso/" target="_blank">https://www.loginradius.com/docs/developer/guide/web-sso/</a></span>`,
      },
    },
  ],
  // Data Migration Question
  [
    {
      name: "User Data Migration",
      body: {
        __html: `<span>Here is a guide to migrating user data from any third-party application to LoginRadius using the CSV file.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/migrate-user-data" target="_blank">https://www.loginradius.com/docs/developer/guide/migrate-user-data</a></span>`,
      },
    },
  ],
  // "PHP",
  // ".NET",
  // "NodeJS",
  // "Java",
  // "Golang",
  // "Python",
  // "ROR",
  // "BigCommerce",
  // "WordPress",
  // "Shopify",
  // "Drupal",
  // "Other",
  [
    {
      name: "PHP Back-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your PHP application. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/php/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/php/</a><br/>
        Refer to the <b>PHP SDK</b> document for more information on available methods:
        <a href="https://www.loginradius.com/docs/developer/references/sdk/php-sdk/" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/php-sdk/</a></span>`,
      },
    },
    {
      name: ".NET Back-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your .NET application. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <b>.NET Webforms:</b> <a href="https://www.loginradius.com/docs/developer/tutorial/dotnet-webforms/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/dotnet-webforms/</a><br />
        <b>.NET Core MVC:</b> <a href="https://www.loginradius.com/docs/developer/tutorial/dotnetcore-mvc/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/dotnetcore-mvc/</a><br />
        <b>.NET Razor:</b> <a href="https://www.loginradius.com/docs/developer/tutorial/dotnetcore-razor/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/dotnetcore-razor/</a><br/>
        Refer to the <b>.NET SDK</b> document for more information on available methods:
        <a href="https://www.loginradius.com/docs/developer/references/sdk/dotnet-sdk/" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/dotnet-sdk/</a></span>`,
      },
    },
    {
      name: "NodeJS Back-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your Nodejs application. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/node-js/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/node-js/</a><br/>
        Refer to the <b>NodeJS SDK</b> document for more information on available methods:
        <a href="https://www.loginradius.com/docs/developer/references/sdk/nodejs-sdk" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/nodejs-sdk</a></span>`,
      },
    },
    {
      name: "Java Back-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your Java application. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/java/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/java/</a><br/>
        Refer to the <b>Java SDK</b> document for more information on available methods:
        <a href="https://www.loginradius.com/docs/developer/references/sdk/java-sdk" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/java-sdk</a></span>`,
      },
    },
    {
      name: "Golang Back-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your Golang application. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/golang/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/golang/</a><br/>
        Refer to the <b>Golang SDK</b> document for more information on available methods:
        <a href="https://www.loginradius.com/docs/developer/references/sdk/golang-sdk/" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/golang-sdk/</a></span>`,
      },
    },
    {
      name: "Python Back-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your Python application. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/python/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/python/</a><br/>
        Refer to the <b>Python SDK</b> document for more information on available methods:
        <a href="https://www.loginradius.com/docs/developer/references/sdk/python-sdk/" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/python-sdk/</a></span>`,
      },
    },
    {
      name: "ROR Back-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your ROR application. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/ror/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/ror/</a><br/>
        Refer to the <b>ROR SDK</b> document for more information on available methods:
        <a href="https://www.loginradius.com/docs/developer/references/sdk/ruby-sdk/" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/ruby-sdk/</a></span>`,
      },
    },
    {
      name: "BigCommerce CMS",
      body: {
        __html: `<span>Here is a tutorial on installing the LoginRadius CIAM Plugin for the BigCommerce application. It also describes deploying the LoginRadius template code to your Stencil theme.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/big-commerce/" target="_blank">https://www.loginradius.com/docs/developer/guide/big-commerce/</a></span>`,
      },
    },
    {
      name: "WordPress CMS",
      body: {
        __html: `<span>Here is a tutorial on implementing LoginRadius features like user registration, login, profile, and log out for your WordPress application.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/wordpress/" target="_blank">https://www.loginradius.com/docs/developer/guide/wordpress/</a></span>`,
      },
    },
    {
      name: "Shopify CMS",
      body: {
        __html: `<span>Here is a tutorial to integrate LoginRadius features into your Shopify application with Shopify Multipass Hosted Plugin. This integration makes use of the LoginRadius JavaScript Interfaces along with the LoginRadius Hosted Plugin feature. <br/>
        <a href="https://www.loginradius.com/docs/developer/guide/shopify/" target="_blank">https://www.loginradius.com/docs/developer/guide/shopify/</a></span>`,
      },
    },
    {
      name: "Drupal CMS",
      body: {
        __html: `<span>Here is a tutorial on implementing LoginRadius user registration, login, profile, and log out for your Drupal application.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/drupal/" target="_blank">https://www.loginradius.com/docs/developer/guide/drupal/</a></span>`,
      },
    },
    {
      name: "Back-end Technology",
      body: {
        __html: `<span>Refer to our APIs for implementing LoginRadius features into your application irrespective of the technology or CMS.<br/>
        <a href="https://www.loginradius.com/docs/developer/#api" target="_blank">https://www.loginradius.com/docs/developer/#api</a></span>`,
      },
    },
  ],
  // "JavaScript",
  // "Pure JavaScript implementation",
  // "AngularJS",
  // "ReactJS",
  // "VueJS"
  [
    {
      name: "JavaScript Front-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with implementing the LoginRadius features for your Javascript-based application.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/html-and-js-tutorial/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/html-and-js-tutorial/</a><br/>
        This document covers how to utilize various features of LoginRadius using JavaScript. <br/>
        <a href="https://www.loginradius.com/docs/developer/references/javascript-library/getting-started/" target="_blank">https://www.loginradius.com/docs/developer/references/javascript-library/getting-started/</a><br/>
        Refer to the <b>HTML5 SDK</b> document for more information on available methods:<br/>
        <a href="https://www.loginradius.com/docs/developer/references/sdk/html5-sdk" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/html5-sdk</a></span>`,
      },
    },
    {
      name: "AngularJS Front-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with implementing the LoginRadius features for your AngularJS based application.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/angular/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/angular/</a></span>`,
      },
    },
    {
      name: "ReactJS Front-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with implementing the LoginRadius features for your ReactJS based application.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/react/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/react/</a><br/>
        Refer to the <b>ReactJS SDK</b> document for more information on available methods:<br/>
        <a href="https://www.loginradius.com/docs/developer/references/sdk/react-native-sdk" target="_blank">https://www.loginradius.com/docs/developer/references/sdk/react-native-sdk</a></span>`,
      },
    },
    {
      name: "VueJS Front-end Technology",
      body: {
        __html: `<span>Here is a tutorial to get started with implementing the LoginRadius features for your VueJS based application.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/vue/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/vue/</a></span>`,
      },
    },
  ],

  // Question 8 removed
  // [
  //   {
  //     name: "Implement Web SSO",
  //     body: {
  //       __html: `<span>Here is a guide to implementing web SSO among your applications.<br/>
  //       <a href="https://www.loginradius.com/docs/developer/guide/web-sso/" target="_blank">https://www.loginradius.com/docs/developer/guide/web-sso/</a></span>`,
  //     },
  //   },
  // ],

  // "Protect against brute force attack",
  // "Set strong password policy",
  // "Protect using MFA"
  [
    {
      name: "Protect against brute force attack",
      body: {
        __html: `<span>Here is a guide to configuring restrictions for consumers based on their failed login attempts.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/bruteforce/" target="_blank">https://www.loginradius.com/docs/developer/guide/bruteforce/</a></span>`,
      },
    },
    {
      name: "Set strong password policy",
      body: {
        __html: `<span>Here is a guide to configuring password rules to enhance the security of the consumers’ accounts.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/set-strong-password-policy/" target="_blank">https://www.loginradius.com/docs/developer/guide/set-strong-password-policy/</a></span>`,
      },
    },
    {
      name: "Protect using MFA",
      body: {
        __html: `<span>Here is a guide to configuring multi-factor authentication to add an extra layer of security for the consumers’ accounts.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/mfa/" target="_blank">https://www.loginradius.com/docs/developer/guide/mfa/</a></span>`,
      },
    },
  ],
  // Integration Question
  [
    {
      name: "Webhook",
      body: {
        __html: `<span>Here is a guide to configuring Webhook for LoginRadius events and automatically send a POST payload over HTTPS to the webhook’s configured URL in real-time.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/webhook/" target="_blank">https://www.loginradius.com/docs/developer/guide/webhook/</a></span>`,
      },
    },
    {
      name: "Integration - Shopify",
      body: {
        __html: `<span>Here is a tutorial to integrate LoginRadius features into your Shopify application with Shopify Multipass Hosted Plugin. This integration makes use of the LoginRadius JavaScript Interfaces along with the LoginRadius Hosted Plugin feature. <br/>
        <a href="https://www.loginradius.com/docs/developer/guide/shopify/" target="_blank">https://www.loginradius.com/docs/developer/guide/shopify/</a></span>`,
      },
    },
    {
      name: "Integration - BigCommerce",
      body: {
        __html: `<span>Here is a tutorial on installing the LoginRadius CIAM Plugin for the BigCommerce application. It also describes deploying the LoginRadius template code to your Stencil theme.<br/>
        <a href="https://www.loginradius.com/docs/developer/guide/big-commerce/" target="_blank">https://www.loginradius.com/docs/developer/guide/big-commerce/</a></span>`,
      },
    },
    {
      name: "Integrations",
      body: {
        __html: `<span>Here is a list of all integrations supported by LoginRadius. <br/>
        <a href="https://www.loginradius.com/docs/developer/guide/3rd-party-all-integrations/" target="_blank">https://www.loginradius.com/docs/developer/guide/3rd-party-all-integrations/</a><br/>
        You can contact us <a href="https://loginradiusassist.freshdesk.com/support/home" target="_blank">here</a> to get the desired third-party integration enabled.</span>`,
      },
    },
  ],
  // "Android",
  // "iOS",
  // "Hybrid/Ionic"
  [
    {
      name: "Android App",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your Android app. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/android/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/android/</a></span>`,
      },
    },
    {
      name: "iOS App",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your iOS app. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/ios/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/ios/</a></span>`,
      },
    },
    {
      name: "Hybrid App",
      body: {
        __html: `<span>Here is a tutorial to get started with the user registration, login, and view profile for your Hybrid app. It also describes the next steps that you might want to take after the initial implementation.<br/>
        <a href="https://www.loginradius.com/docs/developer/tutorial/ionic/" target="_blank">https://www.loginradius.com/docs/developer/tutorial/ionic/</a></span>`,
      },
    },
  ],
]

function search(options) {
  return value => {
    if (!value.length) {
      return options
    }

    let filteredOptions = []

    for (let option of options) {
      if (option.name.toLowerCase().includes(value)) {
        filteredOptions.push(option)
      }
    }

    return filteredOptions
  }
}

class Questionnaire extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      responses: QuestionList.map((question, index) => {
        if (question.answers.type === "single") {
          return [""]
        } else if (index === 8) {
          return [false]
        }
        let responseArray = []
        for (let _ of question.answers.choices) {
          responseArray.push(false)
        }
        return responseArray
      }),
      thirdPartyChoices: [],
      step: 1,
      errorMessage: "",
      showResultPage: false,
      encodedUrlParams: "",
      copyButtonClicked: false,
      pageReady: false,
    }
  }

  componentDidMount() {
    if (this.props.location.search) {
      this.decodeFromBase64ToState(
        this.props.location.search.replace("?id=", "")
      )
    } else {
      this.setState({ pageReady: true });
    }
  }

  onInputBlur = callback => {
    const { step } = this.state

    if (step === 0) {
      return callback()
    }

    const currentQuestion = QuestionList[step - 1]

    if (currentQuestion.answers.isRequired) {
      if (currentQuestion.answers.type === "single") {
        if (this.state.responses[this.state.step - 1][0] === "") {
          this.setState({
            errorMessage: "This question requires an option to be selected.",
          })
        } else {
          this.setState({ errorMessage: "" }, callback)
        }
      } else {
        const currentAnswers = this.state.responses[this.state.step - 1]
        for (let answer of currentAnswers) {
          if (answer) {
            return this.setState({ errorMessage: "" }, callback)
          }
        }

        return this.setState({
          errorMessage: "This question requires an option to be selected.",
        })
      }
    } else {
      return callback()
    }
  }

  encodeToBase64FromState = () => {
    let responsesSerialized = ""

    for (let i = 0; i < this.state.responses.length; i++) {
      if (QuestionList[i].answers.type === "multi") {
        let answerString = ""
        for (let answer of this.state.responses[i]) {
          answerString = answerString + (answer ? "1" : "0")
        }

        responsesSerialized = responsesSerialized + answerString + "|"
      } else {
        responsesSerialized =
          responsesSerialized + this.state.responses[i][0] + "|"
      }
    }

    let thirdPartyChoicesSerialized = ""

    for (let thirdPartyChoice of this.state.thirdPartyChoices) {
      thirdPartyChoicesSerialized =
        thirdPartyChoicesSerialized + thirdPartyChoice + "|"
    }

    responsesSerialized = responsesSerialized.slice(0, -1)
    thirdPartyChoicesSerialized = thirdPartyChoicesSerialized.slice(0, -1)
    let serializedString =
      Buffer.from(responsesSerialized).toString("base64") +
      "|" +
      Buffer.from(thirdPartyChoicesSerialized).toString("base64")

    const encodedUrlParams = Buffer.from(serializedString).toString("base64")

    return encodedUrlParams
  }

  decodeFromBase64ToState = encodedString => {
    try {
      const decodedUrlParam = Buffer.from(encodedString, "base64").toString()

      const [
        encodedResponses,
        encodedThirdPartyChoices,
      ] = decodedUrlParam.split("|")

      const decodedResponses = Buffer.from(
        encodedResponses,
        "base64"
      ).toString()
      const responseArray = decodedResponses.split("|")
      let responses = []
      for (let i = 0; i < responseArray.length; i++) {
        if (QuestionList[i].answers.type === "multi") {
          let answerArray = []
          for (let answer of responseArray[i]) {
            answerArray.push(answer === "1")
          }
          responses.push(answerArray)
        } else {
          responses.push([responseArray[i]])
        }
      }
      // for (let i = 0; i < responseArray.length; i++) {

      // }
      const decodedThirdPartyChoices = Buffer.from(
        encodedThirdPartyChoices,
        "base64"
      ).toString()
      const thirdPartyArray = decodedThirdPartyChoices.split("|")

      let thirdPartyChoices = []
      for (let thirdParty of thirdPartyArray) {
        thirdPartyChoices.push(thirdParty)
      }

      this.setState({
        responses,
        thirdPartyChoices,
        encodedUrlParams: encodedString,
        showResultPage: true,
        pageReady: true
      })
    } catch (e) {
      window.location.replace(this.props.location.pathname)
    }
  }

  render() {
    const { responses, thirdPartyChoices, showResultPage, encodedUrlParams, pageReady } = this.state
    const currentQuestion = QuestionList[this.state.step - 1]
    const lastIndexQuestion8 = QuestionList[8].answers.choices.length - 1
    let thirdPartyOptions = QuestionList[8].answers.choices.map(
      (choice, index) => {
        return {
          name: choice,
          value: index,
        }
      }
    )

    thirdPartyOptions = thirdPartyOptions.slice(0, -1)

    let flattenedDocsList = [];
    let technologyDocList = [];

    if (showResultPage && encodedUrlParams) {
      // generate docs page layout
      for (let i = 0; i < responses.length; i++) {
        if (QuestionList[i].answers.type === "multi") {
          for (let j = 0; j < responses[i].length; j++) {
            if (responses[i][j] === true) {
              flattenedDocsList.push(DocsList[i][j])
            }
          }
        } else if (QuestionList[i].answers.type === "single") {
          const docIndex = DocsList[i].findIndex(doc =>
            doc.name.includes(responses[i][0])
          )

          if (docIndex !== -1) {
            // if question at index 5 and 6, append to a different array
            if (i !== 5 && i !== 6) {
              flattenedDocsList.push(DocsList[i][docIndex])
            } else {
              technologyDocList.push(DocsList[i][docIndex]);
            }
          } else {}
        } else if (QuestionList[i].answers.type === "multiselectbox") {
          let remainingThirdPartyCount = thirdPartyChoices.length

          const shopifyIndex = QuestionList[8].answers.choices.findIndex(choice => choice === "Shopify");
          const bigCommerceIndex = QuestionList[8].answers.choices.findIndex(choice => choice === "BigCommerce");

          if (responses[8][0] === true) {
            flattenedDocsList.push(DocsList[i][0])
          }
          if (thirdPartyChoices.includes(shopifyIndex.toString())) {
            flattenedDocsList.push(DocsList[i][1])
            remainingThirdPartyCount--
          }
          if (thirdPartyChoices.includes(bigCommerceIndex.toString())) {
            flattenedDocsList.push(DocsList[i][2])
            remainingThirdPartyCount--
          }
          // meaning the user selected other third party integrations aside from Shopify and BigCommerce
          if (remainingThirdPartyCount > 0) {
            flattenedDocsList.push(DocsList[i][3])
          }
        }
      }
    }

    flattenedDocsList = technologyDocList.concat(flattenedDocsList);
    // for (let doc of DocsList) {
    //   for (let answer of doc) {
    //     flattenedDocsList.push(answer);
    //   }
    // }

    return !pageReady ? (
      <div className="dd-steps step2" id="step2">
        <div className="grid-50 override">
          <div className="dd-form" id="result_page_container">
            <div className="dd-content">
              <div
                className="dd-logo"
                style={{ display: "flex", flexDirection: "column" }}
              >
                <Link to="/">
                  <img src={Logo} width={228} />
                </Link>
              </div>

              <div><h3>Loading...</h3></div>
            </div>
          </div>
        </div>
      </div>
    ) : this.state.showResultPage ? (
      <React.Fragment>
        <div className="dd-steps step2" id="step2">
          <div className="grid-50 override">
            <div className="dd-form" id="result_page_container">
              <div className="dd-content">
                <div
                  className="dd-logo"
                  style={{ display: "flex", flexDirection: "column" }}
                >
                  <Link to="/">
                    <img src={Logo} width={228} />
                  </Link>
                </div>

                {encodedUrlParams ? <div style={{ display: "flex" }}>
                  <div className="qa grid-67">
                    <a
                      className="backbtn"
                      onClick={() =>
                        this.setState({
                          showResultPage: false,
                          step: 1,
                        })
                      }
                    >
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
                        className="feather feather-arrow-left"
                      >
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                      </svg>{" "}
                      Click here to change answers!
                    </a>
                    <h2>
                      This document contains sequential information on how to
                      implement your use case using LoginRadius. For any future
                      references, you can bookmark this link or download the
                      document as a PDF.
                    </h2>
                    <span>
                      <a href="https://accounts.loginradius.com/auth.aspx?return_url=https://dashboard.loginradius.com/login&action=register" target="_blank">Create an account</a> to get started if you don’t already have one! Also, get your <a href="https://www.loginradius.com/docs/developer/faq/#how-to-retrieve-api-key-and-secret" target="_blank">App Name, API Key, and API Secret</a> to use methods and APIs provided by LoginRadius.
                    </span>

                    {flattenedDocsList.map(doc => {
                      return (
                        <React.Fragment key={doc.name}>
                          <h3>{doc.name}</h3>
                          <div dangerouslySetInnerHTML={doc.body} />
                        </React.Fragment>
                      )
                    })}
                  </div>
                  <div className="no-print">
                    <div className="btn-box top-half">
                      <img src={ResultBanner} width={228} />
                    </div>
                    <div className="btn-box bottom-half">
                      <h3>
                        Print for future use. You can also bookmark the link
                      </h3>
                      {/* <h3>Download as PDF for future use. You can also bookmark the link</h3> */}
                      <div className="btn-group">
                        <a onClick={window.print} className="btn btn-primary">
                          {/* Download */}
                          Print
                        </a>
                        <a
                          onClick={() => {
                            this.setState({ copyButtonClicked: true }, () => {
                              navigator.clipboard.writeText(
                                window.location.href
                              )
                            })
                          }}
                          className="btn btn-outline"
                        >
                          {this.state.copyButtonClicked
                            ? "Copied Link"
                            : "Share"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div> : <div><h3>Loading...</h3></div>}
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </React.Fragment>
    ) : (
      <React.Fragment>
        <div
          style={{ overflow: "hidden" }}
          className="dd-steps step2"
          id="step2"
        >
          <div className="dd-close">
            <Link to="/">
              <img src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjxzdmcgaWQ9Ik91dGxpbmVkIiB2aWV3Qm94PSIwIDAgMzIgMzIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHRpdGxlLz48ZyBpZD0iRmlsbCI+PHBhdGggZD0iTTE2LDJBMTQsMTQsMCwxLDAsMzAsMTYsMTQsMTQsMCwwLDAsMTYsMlptMCwyNkExMiwxMiwwLDEsMSwyOCwxNiwxMiwxMiwwLDAsMSwxNiwyOFoiLz48cG9seWdvbiBwb2ludHM9IjE5LjU0IDExLjA1IDE2IDE0LjU5IDEyLjQ2IDExLjA1IDExLjA1IDEyLjQ2IDE0LjU5IDE2IDExLjA1IDE5LjU0IDEyLjQ2IDIwLjk1IDE2IDE3LjQxIDE5LjU0IDIwLjk1IDIwLjk1IDE5LjU0IDE3LjQxIDE2IDIwLjk1IDEyLjQ2IDE5LjU0IDExLjA1Ii8+PC9nPjwvc3ZnPg==" />
            </Link>
          </div>
          <div className="grid-50">
            <div className="dd-form">
              <div className="dd-content max-height-restricted">
                <div className="dd-logo">
                  <Link to="/">
                    <img src={Logo} width={228} />
                  </Link>
                </div>
                {this.state.step === 0 ? (
                  <div className="qa">
                    <h1>Does LoginRadius Support my Use Case?</h1>
                    <p>
                      Answer a few questions and get a self-served
                      implementation guide addressing your needs.
                    </p>
                  </div>
                ) : (
                  <div className="qa">
                    <h2>{currentQuestion.question}</h2>
                    <p>{currentQuestion.description}</p>
                    <ul
                      style={
                        currentQuestion.answers.choices.length > 5 &&
                        this.state.step !== 10
                          ? { display: "flex", flexWrap: "wrap" }
                          : undefined
                      }
                    >
                      {currentQuestion.answers.type !== "multiselectbox" &&
                        currentQuestion.answers.choices.map((choice, index) => {
                          if (currentQuestion.answers.type === "single") {
                            return (
                              <li
                                key={
                                  "answer_choice_" +
                                  this.state.step +
                                  "_" +
                                  index
                                }
                                style={
                                  currentQuestion.answers.choices.length > 5
                                    ? { width: "50%" }
                                    : undefined
                                }
                              >
                                <input
                                  type="radio"
                                  name="radio"
                                  id={
                                    "answer_choice_" +
                                    this.state.step +
                                    "_" +
                                    index
                                  }
                                  checked={
                                    this.state.responses[
                                      this.state.step - 1
                                    ][0] === choice
                                  }
                                  // onBlur={() => this.onInputBlur(() => {})}
                                  onChange={() => {
                                    let responsesCopy = this.state.responses
                                    responsesCopy[
                                      this.state.step - 1
                                    ][0] = choice
                                    // responsesCopy[this.state.step-1] = this.state.responses[this.state.step-1].map((_, responseIndex) => {
                                    //   if (responseIndex === index) {
                                    //     return true;
                                    //   } else {
                                    //     return false;
                                    //   }
                                    // });
                                    this.setState(
                                      { responses: responsesCopy },
                                      () => this.onInputBlur(() => {})
                                    )
                                  }}
                                />
                                {choice === "Pure JavaScript implementation" ? (
                                  <a
                                    href="https://www.notion.so/Pure-JavaScript-implementation-709fc8aa64334ebb8f5fc3f7cf51d3b7"
                                    target="_blank"
                                  >
                                    {choice}
                                  </a>
                                ) : (
                                  <label
                                    htmlFor={
                                      "answer_choice_" +
                                      this.state.step +
                                      "_" +
                                      index
                                    }
                                  >
                                    {choice}
                                  </label>
                                )}
                              </li>
                            )
                          } else if (currentQuestion.answers.type === "multi") {
                            return (
                              <li
                                key={
                                  "answer_choice_" +
                                  this.state.step +
                                  "_" +
                                  index
                                }
                              >
                                <input
                                  type="checkbox"
                                  name="checkbox"
                                  // implement pdf gen, permalink,

                                  id={
                                    "answer_choice_" +
                                    this.state.step +
                                    "_" +
                                    index
                                  }
                                  checked={
                                    !!this.state.responses[this.state.step - 1][
                                      index
                                    ]
                                  }
                                  // onBlur={() => this.onInputBlur(() => {})}
                                  onChange={() => {
                                    let responsesCopy = this.state.responses
                                    responsesCopy[this.state.step - 1][
                                      index
                                    ] = !responsesCopy[this.state.step - 1][
                                      index
                                    ]
                                    this.setState(
                                      { responses: responsesCopy },
                                      () => this.onInputBlur(() => {})
                                    )
                                  }}
                                />
                                <label
                                  htmlFor={
                                    "answer_choice_" +
                                    this.state.step +
                                    "_" +
                                    index
                                  }
                                >
                                  {choice}
                                </label>
                              </li>
                            )
                          }
                        })}
                      {currentQuestion.answers.type === "multiselectbox" && (
                        <React.Fragment>
                          <SelectSearch
                            options={thirdPartyOptions}
                            name="Integrations"
                            placeholder="Select Integrations"
                            filterOptions={search}
                            closeOnSelect={false}
                            value={this.state.thirdPartyChoices}
                            onChange={arg => {
                              this.setState({ thirdPartyChoices: arg })
                            }}
                            printOptions="on-focus"
                            multiple
                            search
                          />
                          <li
                            key={
                              "answer_choice_" +
                              this.state.step +
                              "_" +
                              lastIndexQuestion8
                            }
                          >
                            <input
                              type="checkbox"
                              name="checkbox"
                              id={
                                "answer_choice_" +
                                this.state.step +
                                "_" +
                                lastIndexQuestion8
                              }
                              checked={
                                !!this.state.responses[this.state.step - 1][0]
                              }
                              onChange={() => {
                                let responsesCopy = this.state.responses
                                responsesCopy[
                                  this.state.step - 1
                                ][0] = !responsesCopy[this.state.step - 1][0]
                                this.setState(
                                  { responses: responsesCopy },
                                  () => this.onInputBlur(() => {})
                                )
                              }}
                            />
                            <label
                              htmlFor={
                                "answer_choice_" +
                                this.state.step +
                                "_" +
                                lastIndexQuestion8
                              }
                            >
                              {
                                QuestionList[8].answers.choices[
                                  lastIndexQuestion8
                                ]
                              }
                            </label>
                          </li>
                        </React.Fragment>
                      )}
                    </ul>
                  </div>
                )}
                <div className="dd-error-message">
                  {this.state.errorMessage}
                </div>
              </div>
              <div className="dd-action">
                {this.state.step > 1 && (
                  <a
                    onClick={() => {
                      // this.onInputBlur(() => {
                      let stepsBackward = 1
                      if (
                        this.state.step === 4 &&
                        this.state.responses[1][0] === "No"
                      ) {
                        stepsBackward = 2
                      }
                      this.setState({
                        errorMessage: "",
                        step: this.state.step - stepsBackward,
                      })
                      // });
                    }}
                    className={`btn btn-secondary${
                      !!this.state.errorMessage ? " disabled" : ""
                    }`}
                  >
                    Back
                  </a>
                )}
                {this.state.step < QuestionList.length && (
                  <a
                    onClick={() => {
                      this.onInputBlur(() => {
                        let stepsForward = 1
                        if (
                          this.state.step === 2 &&
                          this.state.responses[1][0] === "No"
                        ) {
                          stepsForward = 2
                        }
                        this.setState({ step: this.state.step + stepsForward })
                      })
                    }}
                    className={`btn btn-primary${
                      !!this.state.errorMessage ? " disabled" : ""
                    }`}
                  >
                    {this.state.step === 0 ? "Let's do it!" : "Next"}
                  </a>
                )}

                {this.state.step === QuestionList.length && (
                  <a
                    onClick={() => {
                      this.onInputBlur(() => {
                        const encodedUrlParams = this.encodeToBase64FromState()

                        // this.props.location.search = "?id=" + encodedUrlParams;
                        window.location.replace(
                          this.props.location.pathname +
                            "?id=" +
                            encodedUrlParams
                        )
                        this.setState({
                          // showResultPage: true,
                          encodedUrlParams,
                        })
                      })
                    }}
                    className={`btn btn-primary${
                      !!this.state.errorMessage ? " disabled" : ""
                    }`}
                  >
                    Show Result
                  </a>
                )}
              </div>
            </div>

            {splashArt(
              "step" +
                (this.state.step > 2
                  ? this.state.step - 2
                  : this.state.step - 1)
            )}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

const QuestionnaireWrapper = ({ data, location }) => {
  // const siteTitle = data.site.siteMetadata?.title || `Title`
  return <Questionnaire location={location}></Questionnaire>
}

export default QuestionnaireWrapper

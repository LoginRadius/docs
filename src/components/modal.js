import React,{ useState } from "react"
import { Link } from "gatsby"
import Modal from 'react-modal'

function PopUp(){
    const [modalIsOpen, setModalIsOpen]= useState(false);
    return(
        <div>
            <button onClick={()=>setModalIsOpen(true)}>
                <div className="read-more">
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
                </div>
                </button>
            <Modal isOpen={modalIsOpen}>
                <h2>Select the technologies</h2>
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
                <li>
                  <Link to="/get-started-dotnet-webforms">
                    <img src="images/" width={20} />
                    <span>ASP.NET Web Forms</span>
                  </Link>
                </li>
                <li>
                  <Link to="/get-started-dotnetcore-razor">
                    <img src="images/" width={20} />
                    <span>ASP.NET Core Razor Pages</span>
                  </Link>
                </li>
              </ul>
                <p>place the options here</p>
                <button onClick={()=>setModalIsOpen(false)}>close</button>
            </Modal>
        </div>
    )
}

export default PopUp
import React,{ useState } from "react"
import { Link } from "gatsby"
import Modal from 'react-modal'

function PopUp(props){
    const [modalIsOpen, setModalIsOpen]= useState(false);
    return(
        <div>
            <a onClick={()=>setModalIsOpen(true)}>
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
                </a>
            <Modal isOpen={modalIsOpen} ariaHideApp={false}>
                <h2>Select the technologies</h2>
                <h3 className="title">Web Apps</h3>
              <ul>
                {props.data && props.data.map((item,index)=>(
                  <li key={index}>
                  <Link to={item.link}>
                  <img src={item.icon} width={20} />
                <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
                <button onClick={()=>setModalIsOpen(false)}>close</button>
            </Modal>
        </div>
    )
}

export default PopUp
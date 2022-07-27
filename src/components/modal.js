import React, { useState } from "react"
import { Link } from "gatsby"
import Modal from "react-modal"

function PopUp(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false)
  return (
    <div className="read-more">
      <a onClick={() => setModalIsOpen(true)}>
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
      <Modal isOpen={modalIsOpen} ariaHideApp={false}>
        <div className="card no-shadow p-0">
          <div className="popup-header">
            <h3 className="title">Select the technologies</h3>
            <a onClick={() => setModalIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                class="feather feather-x"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </a>
          </div>
          <div className="popup-content">
            <h4>Web Apps</h4>
            <ul>
              {props.data &&
                props.data.map((item, index) => (
                  <li key={index}>
                    <Link to={item.link}>
                      <img src={item.icon} width={20} alt="" />
                      <span>{item.text}</span>
                    </Link>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default PopUp

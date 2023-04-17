import React from 'react'
import './Modal.css'
import { AiFillGithub } from 'react-icons/ai'
import { FaLocationArrow } from 'react-icons/fa' 

const Modal = ({name, image, description, tech, github, site, modal, displayModal }) => {
  return (
    <div className='modal' onClick={() => displayModal(!modal)}>
      <div className='modal-container'>
        <img className='modal-img' src={image} alt="" />
        <div className="modal-content">
          <div className="modal-btn-div1">
            <a href={github} target='_blank' rel="noreferrer">Github <AiFillGithub/></a>
          </div>  
          <div className="modal-data">
            <h4>{name}</h4>
            <p>{description}</p>
            <ul>
              <li>Tech Stack:</li>
              {
                tech.map((item) => {
                  return <li>{item}</li>
                })
              }
            </ul>
          </div>
          <div className="modal-btn-div2">
            <a href={site} target='_blank' rel="noreferrer">Website <FaLocationArrow/></a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal

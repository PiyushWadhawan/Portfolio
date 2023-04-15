import React from 'react'
import './Modal.css'

const Modal = ({name, image, description, tech, modal, displayModal }) => {
  return (
    <div className='modal' onClick={() => displayModal(!modal)}>
      <div className='modal-container'>
        <img className='modal-img' src={image} alt="" />
        <h4>{name}</h4>
        <p>{description}</p>
        <ul>
          {
            tech.map((item) => {
              return <li>{item}</li>
              })
          }
        </ul>
      </div>
    </div>
  )
}

export default Modal

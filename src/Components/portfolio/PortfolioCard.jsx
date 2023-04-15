import React from 'react'

const PortfolioCard = ({name, image, description, tech, showModal}) => {
  return (
    <div className='port-card' onClick={() => showModal({name, image, description, tech})}>
        <img className='port-image' src={image} alt="" />
        <div className="cover">
            <span>{name}</span>
        </div>
    </div>
  )
}

export default PortfolioCard

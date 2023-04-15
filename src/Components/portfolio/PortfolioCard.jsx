import React from 'react'

const PortfolioCard = ({name, color, image}) => {
  return (
    <div className='port-card'>
        <img className='port-image' src={image} alt="" />
        <div className="cover">
            <span>{name}</span>
        </div>
    </div>
  )
}

export default PortfolioCard

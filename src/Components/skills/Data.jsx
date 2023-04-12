import React from 'react'
import { AiFillRightCircle } from 'react-icons/ai'
const Data = ({name, level}) => {
  return (
    <div className='skills-data'>
        <span className="icon"><AiFillRightCircle/></span>
        <div>
          <h3 className='skills-name'>{name}</h3>
            <p className='skills-level'>{level}</p>
        </div>
    </div>
  )
}

export default Data

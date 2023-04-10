import React from 'react'
import { BsMedium } from 'react-icons/bs'
import { AiFillGithub } from 'react-icons/ai'
import { BsLinkedin } from 'react-icons/bs'

const Social = () => {
  return (
    <div className='home-social'>
      <a href="https://piyush41.medium.com/" className="home-social-icon" target='_blank' rel="noreferrer">
        <BsMedium/>
      </a>
      <a href="https://github.com/PiyushWadhawan" className="home-social-icon" target='_blank' rel="noreferrer">
        <AiFillGithub/>
      </a>
      <a href="https://www.linkedin.com/in/piyush-wadhawan-b6065a190/" className="home-social-icon" target='_blank' rel="noreferrer">
        <BsLinkedin/>
      </a>
    </div>
  )
}

export default Social

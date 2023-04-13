import React from 'react'
import './About.css'
import Data from './Data'

const About = () => {
  return (
    <div id="about" className="about-container">

        <div className="about-heading">
            <p className="about-subtitle">Get to know more</p>
            <h1 className="about-title">About Me</h1>
        </div>
        <div className="about-content">
            <div className="about-img"></div>
            <Data/>
        </div>

    </div>
  )
}

export default About

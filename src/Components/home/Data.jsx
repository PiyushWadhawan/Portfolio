import React from 'react'
import { GiHand } from "react-icons/gi"
import { MdEmojiPeople } from "react-icons/md"
import { HiDocument } from "react-icons/hi"
import Resume from "../../Data/Resume.pdf"

const Data = () => {
  return (
    <div className="home-data">
        <h1 className="home-title">Hi, I'am Piyush <span className="home-hand"><GiHand/></span></h1>
        {/* <h3 className="home-subtitle">I'am</h3> */}
        <span className="typewriter">
          <h3 className="home-subtitle">Front-End Developer</h3>
        </span>
        <p className="home-description">I am a creative entry level developer, passionate about working on projects with other talent, contribute ideas and learn new things</p>
        <div className="home-btns">   
            <a href="#contact" className="button button-flex btn-size">
                Say Hello <MdEmojiPeople/>
            </a>
            <a download={Resume} href={Resume} className="button button-flex btn-light btn-size" target='_blank' rel="noreferrer">
                Resume <HiDocument/>
            </a>
        </div>
    </div>
  )
}

export default Data

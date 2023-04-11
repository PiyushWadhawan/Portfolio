import React from 'react'
import { GiHand } from "react-icons/gi"
import { MdEmojiPeople } from "react-icons/md"
import { HiDocument } from "react-icons/hi"

const Data = () => {
  return (
    <div className="home-data">
        <h1 className="home-title">Piyush Wadhawan <span className="home-hand"><GiHand/></span></h1>
        <h3 className="home-subtitle">Front-End Developer</h3>
        <p className="home-description">. I am a creative entry level developer, passionate about working on projects with other talent, contribute ideas and learn new things</p>
        <div className="home-btns">   
            <a href="#contact" className="button button-flex btn-size">
                Say Hello <MdEmojiPeople/>
            </a>
            <a href="https://drive.google.com/file/d/1Ta3QVtwA1P2r0V05ZzBts_mTQUXib1h8/view" className="button button-flex btn-light btn-size" target='_blank' rel="noreferrer">
                Resume <HiDocument/>
            </a>
        </div>
    </div>
  )
}

export default Data

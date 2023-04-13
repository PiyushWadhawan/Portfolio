import React from 'react'
import { FaUserGraduate } from 'react-icons/fa'
import { BsPersonWorkspace } from 'react-icons/bs'
import { HiDocument } from "react-icons/hi"
import Resume from "../../Data/Resume.pdf"

const Data = () => {
  return (
    <div className="about-data">
        <div className="about-qual">
            <div className="exp">
                <span><BsPersonWorkspace/></span>
                <h4>Experience</h4>
                <p>6 months</p>
                <p>Frontend Development</p>
            </div>
            <div className="edu">
                <span><FaUserGraduate/></span>
                <h4>Education</h4>
                <p>Currently pusruing Bachelors</p>
                <p>BTech CSE</p>
            </div>
        </div>
        <p className="about-description">I am a front-end developer aiming to become a full-stack developer in the future. I started learning web dvelopment about 6 months ago as I found it fun to design websites. I don't have any industry experience at the moment but have made a couple of frontend layouts using HTML, CSS, Javascript and React Js</p>
        <a download={Resume} href={Resume} className="button about-btn btn-size" target='_blank' rel="noreferrer">
          Resume <span className="span-icon"><HiDocument/></span>
        </a>
    </div>
  )
}

export default Data

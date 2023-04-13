import React from 'react'
import './Contact.css'
import { BiRightArrowAlt } from 'react-icons/bi'
import { HiMail } from 'react-icons/hi'
import { BsWhatsapp } from 'react-icons/bs'
import { SiMicrosoftoutlook } from 'react-icons/si'
import { MdEmojiPeople } from "react-icons/md"

const Contact = () => {
  return (
    <div className="contact-container">
        <div className="contact-heading">
            <p id="contact" className="contact-subtitle">Get in touch</p>
            <h1 className="contact-title">Contact Me</h1>
        </div>
        <div className="contact-content">

            <div className="contact-info">
                <h3>Talk to me</h3>
                <div className="contact-card">
                    <span className="contact-icon"><HiMail/></span>
                    <h3 className="contact-type">Email</h3>
                    <p className="info">abc@gmail.com</p>
                    <a href="" className="contact-link">Write me <BiRightArrowAlt/></a>
                </div>
                <div className="contact-card">
                    <span className="contact-icon"><BsWhatsapp/></span>
                    <h3 className="contact-type">Whatsapp</h3>
                    <p className="info">9934565721</p>
                    <a href="" className="contact-link">Write me <BiRightArrowAlt/></a>
                </div>
                <div className="contact-card">
                    <span className="contact-icon"><SiMicrosoftoutlook/></span>
                    <h3 className="contact-type">Outlook</h3>
                    <p className="info">abc@outlook.com</p>
                    <a href="" className="contact-link">Write me <BiRightArrowAlt/></a>
                </div>
            </div>

            <div className="contact-form">
                <h3 className="contact-head">Write me your project</h3>
                <form className="form">
                    <div className="form-div">
                        <label for="name" className="form-tag">Name</label>
                        <input id="name" type="text" name="name" className="form-input" placeholder='Enter your name'/>
                    </div>
                    <div className="form-div">
                        <label for="email" className="form-tag">Email</label>
                        <input id="email" type="text" name="email" className="form-input" placeholder='Enter your email id'/>
                    </div>
                    <div className="form-div">
                        <label for="project" className="form-tag">Project</label>
                        <textarea id="project" name="project" className="form-input" placeholder='Tell me about the project'/>
                    </div>
                </form>
                <a href="" className="button btn-size">Send Message <span className="span-icon"><MdEmojiPeople/></span></a>
            </div>

        </div>
    </div>
  )
}

export default Contact

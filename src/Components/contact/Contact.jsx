import React from "react";
import "./Contact.css";
import { BiRightArrowAlt } from "react-icons/bi";
import { HiMail } from "react-icons/hi";
import { RiTwitterXLine } from "react-icons/ri";
import { MdEmojiPeople } from "react-icons/md";
import { SiMicrosoftoutlook } from "react-icons/si";

const Contact = () => {
  return (
    <div id="contact" className="contact-container">
      <div className="contact-heading">
        <p className="contact-subtitle">Get in touch</p>
        <h1 className="contact-title">Contact Me</h1>
      </div>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Talk to me</h3>
          <div className="contact-card">
            <span className="contact-icon">
              <HiMail />
            </span>
            <h3 className="contact-type">Email</h3>
            <p className="info">wa.piyush@gmail.com</p>
            <a href="#contact" className="contact-link">
              Write me <BiRightArrowAlt />
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-icon">
              <SiMicrosoftoutlook />
            </span>
            <h3 className="contact-type">Outlook</h3>
            <p className="info">wa.piyush@gmail.com</p>
            <a href="#contact" className="contact-link">
              Write me <BiRightArrowAlt />
            </a>
          </div>
          <div className="contact-card">
            <span className="contact-icon">
              <RiTwitterXLine />
            </span>
            <h3 className="contact-type">X (formerly Twitter)</h3>
            <p className="info">@wa_piyush</p>
            <a href="#contact" className="contact-link">
              Write me <BiRightArrowAlt />
            </a>
          </div>
        </div>

        <div className="contact-form">
          <h3 className="contact-head">Send me a message</h3>
          <form className="form">
            <div className="form-div">
              <label htmlFor="name" className="form-tag">
                Name
              </label>
              <input
                id="name"
                type="text"
                name="name"
                className="form-input"
                placeholder="Enter your name"
              />
            </div>
            <div className="form-div">
              <label htmlFor="email" className="form-tag">
                Email
              </label>
              <input
                id="email"
                type="text"
                name="email"
                className="form-input"
                placeholder="Enter your email id"
              />
            </div>
            <div className="form-div">
              <label htmlFor="project" className="form-tag">
                Message
              </label>
              <textarea
                id="project"
                name="project"
                className="form-input"
                placeholder="Enter text here"
              />
            </div>
          </form>
          <a href="#contact" className="button btn-size">
            Send Message{" "}
            <span className="span-icon">
              <MdEmojiPeople />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;

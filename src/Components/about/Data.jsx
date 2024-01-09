import React from "react";
import { FaUserGraduate } from "react-icons/fa";
import { BsPersonWorkspace } from "react-icons/bs";
import { HiDocument } from "react-icons/hi";
import Resume from "../../Data/Resume.pdf";

const Data = () => {
  return (
    <div className="about-data">
      <div className="about-qual">
        <div className="exp">
          <span>
            <BsPersonWorkspace />
          </span>
          <h4>Experience</h4>
          <p>Campalin - 4 months</p>
          <p>Web Development Intern</p>
        </div>
        <div className="edu">
          <span>
            <FaUserGraduate />
          </span>
          <h4>Education</h4>
          <p>Bennett University</p>
          <p>BTech CSE</p>
        </div>
      </div>
      <p className="about-description">
        My name is Piyush and I am a full-stack developer (MERN). I started
        learning web dvelopment as I found it fun to design websites. I got
        started by creating simple web pages using html and css, gradually
        learning javascript after which I moved to MERN all the while learning
        AWS on the side to broaden the scope of my knowledge
      </p>
      <a
        download={Resume}
        href={Resume}
        className="button about-btn btn-size"
        target="_blank"
        rel="noreferrer"
      >
        Resume{" "}
        <span className="span-icon">
          <HiDocument />
        </span>
      </a>
    </div>
  );
};

export default Data;

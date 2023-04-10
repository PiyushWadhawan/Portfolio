import React, { useState } from 'react'
import './Header.css'
import { HiOutlineHome } from 'react-icons/hi'
import { SiAboutdotme } from 'react-icons/si'
import { GiSecretBook } from 'react-icons/gi'
import { BsPersonWorkspace } from 'react-icons/bs'
import { IoIosContact } from 'react-icons/io'
import { GrAppsRounded } from 'react-icons/gr'
import { AiOutlineClose } from 'react-icons/ai'

const Header = () => {

  const [ Toggle, showMenu ] = useState(false);

  return (
    <header className='header'>

      <nav className="nav container">
        <a href="index.html" className="nav-logo">Portfolio</a>

        <div className={Toggle ? "nav-menu show-menu": "nav-menu"}>

          <ul className="nav-list grid">
            <li className="nav-item">
              <a href="#home" className="nav-link active-link">
                <span className="nav-icon"><HiOutlineHome/></span>Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#about" className="nav-link">
              <span className="nav-icon"><SiAboutdotme/></span>About
              </a>
            </li>
            <li className="nav-item">
              <a href="skills" className="nav-link">
              <span className="nav-icon"><GiSecretBook/></span>Skills
              </a>
            </li>
            <li className="nav-item">
              <a href="#portfolio" className="nav-link">
              <span className="nav-icon"><BsPersonWorkspace/></span>Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a href="#contact" className="nav-link">
              <span className="nav-icon"><IoIosContact/></span>Contact
              </a>
            </li>
          </ul>

          {/* <span className="nav-close" onClick={() => showMenu(!Toggle)}><AiOutlineClose/></span>  */}

        </div>

        <div className='nav-toggle' onClick={() => showMenu(!Toggle)}>
          {Toggle ? <AiOutlineClose/> : <GrAppsRounded/>}
        </div>

      </nav>
    </header>
  )
}

export default Header



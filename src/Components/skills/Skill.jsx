import React from 'react'
import './Skill.css' 
import data from '../../Data/Skills-data.json'
import Data from './Data'

const Skill = () => {
  return (
    <div className="skills-container">
      <div className="skills-heading">
        <h1 id="skills" className='skills-title'>Skills</h1>
        <p className='skills-subtitle'>What all I know</p>
      </div>

        <div className="skills-content">
          {data.map((skill) => {
            return (
              <Data key={skill.id} name={skill.name} level={skill.level}/>
            )
          })}
        </div>

    </div>
  )
}

export default Skill;

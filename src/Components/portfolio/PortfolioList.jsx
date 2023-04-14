import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = ({projects}) => {
  return (
    <div className="port-content">
        {
            projects.map((project, index) => {
                return <PortfolioCard key={index} name={project.name} image={project.image}/>
        })} 
    </div>
  )
}

export default PortfolioList

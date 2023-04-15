import React from 'react'
import PortfolioCard from './PortfolioCard'

const PortfolioList = ({projects, showModal}) => {
  return (
    <div className="port-content">
        {
            projects.map((project, index) => {
                return <PortfolioCard key={index} name={project.name} image={project.image} description={project.description} tech={project.tech} showModal={showModal}/>
        })} 
    </div>
  )
}

export default PortfolioList

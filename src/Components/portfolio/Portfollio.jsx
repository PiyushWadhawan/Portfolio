import React, { useState } from 'react'
import './Portfolio.css'
import PortfolioList from './PortfolioList'
import project_data from '../../Data/Portfolio-data' 
import Pagination from './Pagination'

const Portfollio = () => {

    const [projects, setProject] = useState(project_data);

    const [ currentPage, setCurrentPage ] = useState(1);
    const [ cardsPerPage, setCardPerPage ] = useState(6); 

    const lastCardIndex = currentPage * cardsPerPage;
    const firstCardIndex = lastCardIndex - cardsPerPage;

    const currentProjects = projects.slice(firstCardIndex, lastCardIndex);

  return (
    <div id="portfolio" className="port-container">
        <div className="port-heading">
            <h1 className="port-title">Portfolio</h1>
            <p className="port-subtitle">View my work</p>
        </div>
        <PortfolioList projects={currentProjects}/>
        <Pagination totalCards={projects.length} cardsPerPage={cardsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage}/>
    </div>
  )
}

export default Portfollio

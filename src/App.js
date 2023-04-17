import './App.css';
import React, { useState } from 'react'
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Portfollio from './Components/portfolio/Portfollio';
import Skill from './Components/skills/Skill';
import Modal from './Modal';

function App() {

  const [ modal, displayModal ] = useState(0);
  const [daata, setDaata] = useState({
      name: "", 
      image: null,
      description: "",
      tech: []
  }) 

    const showModal = (name, image, description, tech, github, site) => {
      displayModal(!modal);
      setDaata(name, image, description, tech, github, site);
    }

  return (
    <div className="App">
      <Header/>
      {modal? <Modal name={daata.name} image={daata.image} description={daata.description} tech={daata.tech} github={daata.github} site={daata.site} modal={modal} displayModal={displayModal}/> : "" }
      <Home/>
      <About/>
      <Skill/>
      <Portfollio showModal={showModal}/>
      <Contact/>
    </div>
  );
}

export default App;

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

    // let modal_data = {
    //   name: "", 
    //   image: null
    // }

    const showModal = (name, image, description, tech) => {
      displayModal(!modal);
      // modal_data = { ...data };
      // console.log(modal_data);
      // console.log(daata);
      setDaata(name, image, description, tech);
    }

  return (
    <div className="App">
      <Header/>
      {modal? <Modal name={daata.name} image={daata.image} description={daata.description} tech={daata.tech} modal={modal} displayModal={displayModal}/> : "" }
      <Home/>
      <Portfollio showModal={showModal}/>
      <About/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;

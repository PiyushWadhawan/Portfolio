import './App.css';
import About from './Components/about/About';
import Contact from './Components/contact/Contact';
import Header from './Components/header/Header';
import Home from './Components/home/Home';
import Skill from './Components/skills/Skill';

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
      <Skill/>
      <Contact/>
    </div>
  );
}

export default App;

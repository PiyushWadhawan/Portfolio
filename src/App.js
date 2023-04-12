import './App.css';
import About from './Components/about/About';
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
    </div>
  );
}

export default App;

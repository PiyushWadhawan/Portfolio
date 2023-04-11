import './App.css';
import About from './Components/about/About';
import Header from './Components/header/Header';
import Home from './Components/home/Home';

function App() {

  return (
    <div className="App">
      <Header/>
      <Home/>
      <About/>
    </div>
  );
}

export default App;

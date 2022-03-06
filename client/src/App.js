import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />} />
      <Route path="/portfolio" element={<Portfolio />}/>
      <Route path="/contact" element={<Contact />}/>
    </Routes>

    </div>
  );
}

export default App;

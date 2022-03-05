import './App.css';
import {Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar';


function App() {
  return (
    <div className="App">
      <Navbar />
    <Routes>
      <Route path="/" element={<h1> Home Page</h1>}/>
      <Route path="/skills" element={<h1> Skills Page</h1>}/>
      <Route path="/portfolio" element={<h1> Portfolio Page</h1>}/>
      <Route path="/contact" element={<h1> Contact Me Page</h1>}/>
    </Routes>

    </div>
  );
}

export default App;

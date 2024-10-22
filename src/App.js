
import { Route, Routes,BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Home from './Components/Home';
import Start from './Components/Start';
import Credits from './Components/Credits';
import Skills from './Components/Skills';
import About from './Components/About';
import Creations from "./Components/Creations"
import Contact from "./Components/Contact"
import Openforhire from "./Components/Openforhire"
function App() {
  return (
    
    
      <div>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/start" element={<Start/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/creations" element={<Creations/>}/>
          <Route path="/credits" element={<Credits/>}/>
          <Route path="/skills" element={<Skills/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/openforhire" element={<Openforhire/>}/>
        </Routes>
      </div>
    
  );
}

export default App;

import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import "./index.css"
import "./App.css"
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/pages/home';
import About from './Components/pages/about';
import Projects from './Components/pages/projects';
import Contact from './Components/pages/contact';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  return (
    // ternary operator for classname
    // If isDarkMode is true: className becomes 'app dark-mode' (two classes)
    // If isDarkMode is false: className becomes 'app' (one class
    <BrowserRouter>
      <div className={isDarkMode ? 'app dark-mode' : 'app'}>
        <Navbar isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/projects" element={<Projects/>}/>
          <Route path="/contact" element={<Contact/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
}


export default App;

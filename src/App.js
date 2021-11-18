import React from "react";
import Navbar from "./Component/Navbar";
import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./Content/home";
import About from "./Content/about";
import Education from "./Content/education";
import Skills from "./Content/skills";
import Contact from "./Content/contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/education' element={<Education />} />
        <Route path='/skills' element={<Skills />} />
        <Route path='/contact' element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

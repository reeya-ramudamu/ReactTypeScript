import React from "react";
import logo from "./logo.svg";
import "./App.css";
import {Routes,Route } from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import Contactus from "./components/Contactus";
import Projects from "./components/Projects";

function App() {
  return (
    <>
    <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contactus" element={<Contactus />} />
          <Route path="/projects" element={<Projects />} />
         
        </Routes>
      </div>

    </>
  );
}

export default App;

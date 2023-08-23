import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import Project from "./Project";
import Nav from "./components/Nav";
import FooterSection from "./components/FooterSection";



const App = () => {

  return (
      <Router>
      <Nav/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/project" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <FooterSection/>
      </Router>
  );
};

export default App;

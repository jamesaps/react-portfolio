import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Navigation from "./components/Navigation";
import Home from "./components/pages/Home";
import Gallery from "./components/pages/Gallery";
import Contact from "./components/pages/Contact";

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="gallery" element={<Gallery />}></Route>
        <Route path="contact" element={<Contact />}></Route>
      </Routes>
    </Router>
  );
}

export default App;

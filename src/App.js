import React from "react";
import Head from "./page/Head";
import "./App.css";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Project } from "./page/Project";
import { Contact } from "./page/Contact";
import { BrowserRouter, Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter className="App">
      <div className="App">
        <Head />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Project" element={<Project />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
export default App;

import React from "react"
import Head from "./page/Head";
import { Home } from "./page/Home";
import { About } from "./page/About";
import { Project } from "./page/Project";
import { Contact } from "./page/Contact";
import { BrowserRouter , Router , Routes , Route , Link } from "react-router-dom";

function App () {
  return (
    <div>
      <BrowserRouter>
       <Head />
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/About" element={<About />} />
         <Route path="/Project" element={<Project />} />
         <Route path="/Contact" element={<Contact />} />
       </Routes>
       </BrowserRouter>
    </div>
  )
}
export default App;
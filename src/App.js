import React from "react"
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useRouteMatch,
  useParams,
  HashRouter
} from "react-router-dom"

import profilepicture from "./images/profile-picture.png"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Project1 from "./pages/Project1"
import Project2 from "./pages/Project2"
import Project3 from "./pages/Project3"

function App() {
  return (
    <div className="App">
      <HashRouter basename="">
        <div className="sidebar">
          <div>
            <h1>Ben Clothier</h1>
            <img id="profilepicture" src={profilepicture} alt="Profile Picture"/>
            <h2>Portfolio</h2>
          </div>
          <div className="links">
            <Link to="/"><p>About</p></Link>
            <Link to="/projects"><p>Projects</p></Link>
          </div>
        </div>
        <div className="main">
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/project1" element={<Project1/>} />
            <Route path="/project2" element={<Project2/>} />
            <Route path="/project3" element={<Project3/>} />
          </Routes>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

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
import emailIcon from "./images/email.png"
import linkedinIcon from "./images/linkedin.png"
import About from "./pages/About"
import Projects from "./pages/Projects"
import Project1 from "./pages/Project1"
import Project2 from "./pages/Project2"
import Project3 from "./pages/Project3"

function App() {
  return (
    <div className="App">
      <HashRouter basename="">
        
        <div className="main">
          <Routes>
            <Route path="/" element={<About/>} />
            <Route path="/projects" element={<Projects/>} />
            <Route path="/project1" element={<Project1/>} />
            <Route path="/project2" element={<Project2/>} />
            <Route path="/project3" element={<Project3/>} />
          </Routes>
        </div>
        <div className="sidebar">
          <header>
            <h1>Ben Clothier</h1>
            <img id="profilepicture" src={profilepicture} alt="Profile Picture"/>
            <h3>Portfolio</h3>
          </header>
          <div className="links">
              <Link to="/"><h1>About</h1></Link>
              <Link to="/projects"><h1>Projects</h1></Link>
          </div>
          <footer>
            <a href="mailto:ben.clothier8@icloud.com" target="_blank"><img id="emailIcon" src={emailIcon} alt="Email" width="30vw"/></a>
            <a href="https://www.linkedin.com/in/ben-clothier" target="_blank"><img id="linkedinIcon" src={linkedinIcon} alt="LinkedIn" width="30vw"/></a>
          </footer>
        </div>
      </HashRouter>
    </div>
  );
}

export default App;

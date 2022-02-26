import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useRouteMatch,
    useParams
  } from "react-router-dom"

import projectcover1 from "../images/Title.png"
import projectcover2 from "../images/NavMesh.png"
import projectcover3 from "../images/AlienMenu.png"
import projectcover4 from "../images/coming-soon.png"
import projectcover5 from "../images/open-gl.png"
import projectcover6 from "../images/KIRK.png"

function Projects() {
    return (
        <div className="mainpage">
            <h1>PROJECTS</h1>
            <div className="buttonpanel">
                <Link to="/project1">
                    <div className="imagebutton">
                        <img id="projectcover1" src={projectcover1} alt="Final Outpost"/>
                        <div className="hiddentext">Final Outpost</div>
                    </div>
                </Link>
                <Link to="/project2">
                    <div className="imagebutton">
                        <img id="projectcover2" src={projectcover2} alt="MULTIPLAYER SHOOTER DEMO"/>
                        <div className="hiddentext">Multiplayer Shooter Demo</div>
                    </div>
                </Link>
                <Link to="/project3">
                    <div className="imagebutton">
                        <img id="projectcover3" src={projectcover3} alt="ALIEN"/>
                        <div className="hiddentext">ALIEN</div>
                    </div>
                </Link>
                
                <div>
                    <div className="divider"/>
                    <h2>IN PROGRESS</h2>
                </div>
                <Link to="">
                <div className="imagebutton">
                    <img id="projectcover4" src={projectcover4} alt="coming-soon"/>
                    <div className="hiddentext">New Unity Game</div>
                </div>
                </Link>
                <Link to="">
                <div className="imagebutton">
                    <img id="projectcover5" src={projectcover5} alt="OpenGL"/>
                    <div className="hiddentext">OpenGL Test Game</div>
                </div>
                </Link>

                <div>
                    <div className="divider"/>
                    <h2>FUTURE PROJECTS</h2>
                </div>
                <Link to="">
                <div className="imagebutton">
                    <img id="projectcover6" src={projectcover6} alt="KIRK"/>
                    <div className="hiddentext">"KIRK"<br/>The Unity Build Server</div>
                </div>
                </Link>
            </div>
        </div>
    );
  }
  
  export default Projects;
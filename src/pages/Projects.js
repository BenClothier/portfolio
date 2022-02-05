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

function Projects() {
    return (
        <div className="mainpage">
            <h1>PROJECTS</h1>
            <div className="buttonpanel">
                <Link to="/project1">
                    <div className="imagebutton">
                        <img id="projectcover1" src={projectcover1} alt="Final Outpost"/>
                        <div className="hiddentext">FINAL OUTPOST</div>
                    </div>
                </Link>
                <Link to="/project2">
                    <div className="imagebutton">
                        <img id="projectcover2" src={projectcover2} alt="MULTIPLAYER SHOOTER DEMO"/>
                        <div className="hiddentext">MULTIPLAYER SHOOTER DEMO</div>
                    </div>
                </Link>
                <Link to="/project3">
                    <div className="imagebutton">
                        <img id="projectcover3" src={projectcover3} alt="ALIEN"/>
                        <div className="hiddentext">ALIEN</div>
                    </div>
                </Link>
            </div>
        </div>
    );
  }
  
  export default Projects;
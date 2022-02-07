import React from "react";

import picture1 from "../images/shooter-demo/1.png"
import picture2 from "../images/shooter-demo/2.png"

function Project2() {
    return (
        <div className="mainpage">
            <h1>MULTIPLAYER SHOOTER DEMO</h1>
            <h3>2020</h3>
            <h2>Amatuer Programmer | Unity/C# | PC</h2>
            <p>A 3D, first-person demo project focusing on multiplayer, skeletal animation, and whacky physics. Served as both an adventure into various aspects of game programming as well as proof of ability in the Unity engine. </p>
            <div className="gallery">
                <iframe src="https://www.youtube.com/embed/Tdv7wfd8MCM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <div className="caption"><p>Demonstration of multiplayer synchronisation across two running instances of the prototype</p></div>
                <img id="picture1" src={picture1} alt="picture1"/>
                <div className="caption"><p>Navigation mesh for NPCs</p></div>
                <iframe src="https://www.youtube.com/embed/hLU0HURoF-w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <div className="caption"><p>Playing the whole catalogue of character animations in sequence</p></div>
                <img id="picture2" src={picture2} alt="picture2"/>
                <div className="caption"><p>First-person hands model (*gun model imported from the Unity asset store)</p></div>
            </div>
        </div>
    );
  }
  
  export default Project2;
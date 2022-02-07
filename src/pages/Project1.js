import React from "react";

import picture1 from "../images/final-outpost/1.png"
import picture2 from "../images/final-outpost/2.png"
import picture3 from "../images/final-outpost/3.png"
import picture4 from "../images/final-outpost/4.png"

function Project1() {
    return (
        <div className="mainpage">
            <h1>FINAL OUTPOST</h1>
            <h3>2020 – Present</h3>
            <h2>Lead Programmer | Unity/C# | iOS/Android</h2>
            <p>You have been chosen as the leader of what you think is the last remaining outpost. You must manage your citizens and resources in order to build an impenetrable fortress. How long can you survive against the zombie onslaught?</p>
            <div className="gallery">
                <img id="picture1" src={picture1} alt="picture1"/>
                <div className="caption"><p>Final Outpost main menu</p></div>
                <iframe src="https://www.youtube.com/embed/XCUyMTKVGGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <iframe src="https://www.youtube.com/embed/7Pa68msNSBk" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <iframe src="https://www.youtube.com/embed/veLgNk3mhZc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <iframe src="https://www.youtube.com/embed/W3cpfulhr6I" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <img id="picture2" src={picture2} alt="picture2"/>
                <div className="caption"><p>Viewing the skill tree</p></div>
                <img id="picture3" src={picture3} alt="picture3"/>
                <div className="caption"><p>Playing the game in German</p></div>
                <img id="picture4" src={picture4} alt="picture4"/>
                <div className="caption"><p>Viewing achievements in Game Center</p></div>
            </div>
        </div>
    );
  }
  
  export default Project1;
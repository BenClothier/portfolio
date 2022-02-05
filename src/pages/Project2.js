import React from "react";

import picture1 from "../images/shooter-demo/1.png"
import picture2 from "../images/shooter-demo/2.png"

function Project2() {
    return (
        <div className="mainpage">
            <h1>MULTIPLAYER SHOOTER DEMO</h1>
            <p>Description.</p>
            <div className="gallery">
                <iframe src="https://www.youtube.com/embed/Tdv7wfd8MCM" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <img id="picture1" src={picture1} alt="picture1"/>
                <iframe src="https://www.youtube.com/embed/hLU0HURoF-w" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <img id="picture2" src={picture2} alt="picture2"/>

            </div>
        </div>
    );
  }
  
  export default Project2;
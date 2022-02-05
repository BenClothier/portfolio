import React from "react";

import picture1 from "../images/final-outpost/1.png"
import picture2 from "../images/final-outpost/2.png"

function Project1() {
    return (
        <div className="mainpage">
            <h1>FINAL OUTPOST</h1>
            <p>You have been chosen as the leader of what you think is the last remaining outpost. You must manage your citizens and resources in order to build an impenetrable fortress. How long can you survive against the zombie onslaught?</p>
            <div className="gallery">
                <iframe src="https://www.youtube.com/embed/XCUyMTKVGGg" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <img id="picture1" src={picture1} alt="picture1"/>
                <img id="picture2" src={picture2} alt="picture2"/>
            </div>
        </div>
    );
  }
  
  export default Project1;
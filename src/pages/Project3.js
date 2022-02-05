import React from "react";

import picture1 from "../images/alien/1.png"
import picture2 from "../images/alien/2.png"
import picture3 from "../images/alien/3.png"

function Project3() {
    return (
        <div className="mainpage">
            <h1>ALIEN</h1>
            <h3>2018</h3>
            <h2>Amatuer Programmer | Python | PC</h2>
            <p>A small arcade-style game based around the Alien franchise. You, Ellen Ripley, are tasked with searching the ship for the crew's cat, Jonesy, and escaping safely via the last remaining escape pod. However, there's something else lurking aboard; do you move quickly and risk getting hunted down, or do you move silently and risk it being too late to escape?</p>
            <div className="gallery">
                <iframe src="https://www.youtube.com/embed/xYfKqXWOLuo" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
                <img id="picture1" src={picture1} alt="picture1"/>
                <img id="picture2" src={picture2} alt="picture2"/>
                <img id="picture3" src={picture3} alt="picture3"/>

            </div>
        </div>
    );
  }
  
  export default Project3;
import React from "react";

import threeStars from "../images/3-stars.png"
import twoStars from "../images/2-stars.png"
import oneStar from "../images/1-star.png"

function About() {
    return (
        <div className="mainpage">
            <h1>ABOUT</h1>
            <div className="card">
                
                <p>
                    Hey! I'm Ben, a game programmer and designer living in the UK. I have recently released a game called Final Outpost on the App Store and Google Play Store with Exabyte Games. I am currently studying computer science at the University of Southampton.
                </p>
                <p>  
                    Here you can see the cool projects I’ve worked on that I think are significant to me. Although it’s currently a small list, I’m always looking for fun game-dev projects when I get the time and I also intend to take on further professional projects soon; watch this space!
                </p>
                <p>      
                    Feel free to contact me if you want to know more :)
                </p>
            </div>
            <h1>SKILLS</h1>
            <div className="card">
                <div class="row">
                    <div class="column">
                        <h2>Languages</h2>
                        <div className="divider" />
                        <div className="skillbox"><p>C#</p> <img id="threeStars" src={threeStars} alt="threeStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Python</p> <img id="threeStars" src={threeStars} alt="threeStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>C</p> <img id="twoStars" src={twoStars} alt="twoStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Java</p> <img id="twoStars" src={twoStars} alt="twoStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Haskell</p> <img id="twoStars" src={twoStars} alt="twoStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>C++</p> <img id="oneStar" src={oneStar} alt="oneStar"/></div>
                    </div>
                    <div class="column">
                        <h2>Tools</h2>
                        <div className="divider" />
                        <div className="skillbox"><p>Unity</p> <img id="threeStars" src={threeStars} alt="threeStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Visual Studio</p> <img id="threeStars" src={threeStars} alt="threeStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>GitHub / GitKraken</p> <img id="threeStars" src={threeStars} alt="threeStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Affinity Photo</p> <img id="twoStars" src={twoStars} alt="twoStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>JetBrains IDEs</p> <img id="twoStars" src={twoStars} alt="twoStars"/></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Blender</p> <img id="oneStar" src={oneStar} alt="oneStar"/></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default About;
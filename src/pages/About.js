import React from "react";

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
                        <h3>Languages</h3>
                        <div className="skillbox"><p>C#</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Python</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>C</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Java</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Haskell</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>C++</p></div>
                    </div>
                    <div class="column">
                        <h3>Tools</h3>
                        <div className="skillbox"><p>Unity</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Visual Studio</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>GitHub/GitKraken</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Affinity Photo</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>JetBrains IDEs</p></div>
                        <div className="divider" />
                        <div className="skillbox"><p>Blender</p></div>
                    </div>
                </div>
            </div>
        </div>
    );
  }
  
  export default About;
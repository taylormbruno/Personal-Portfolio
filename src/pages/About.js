import React from "react";
import Container from "../components/Container";

function About() {
    return (
        <Container>
            <div className="row m-2 p-4">
                <div className="col-md">
                    <img src="/assets/images/hw-photo.jpg" id="aboutImg" alt="Taylor Bruno" />    
                </div>
                <div className="col-md">  
                    <h3>
                        Full-Stack Web Developer passionate about approaching challenges from all angles and excited to collaborate with others to create meaningful web applications. Completed the certificate program in Full Stack Development from the University of North Carolina - Charlotte. 
                    </h3>
                </div>
            </div>
            <div className="skillList text-left">
                <h4 className="p-2">Technical Skills</h4> 
                <div className="row"> 
                    <div className="col-md">
                        <ul>
                            <li>Node.js</li>
                            <li>HTML and CSS, along with using CSS frameworks</li>
                            <li>JavaScript, ES6 and jQuery</li>
                            <li>MySQL and Sequelize</li>
                        </ul> 
                    </div>
                    <div className="col-md">
                        <ul>
                            <li>Web API's</li>
                            <li>React.js</li>
                            <li>MongoDB and Mongoose</li>
                        </ul> 
                    </div>
                </div>
            </div>
        </Container>
    );
  }


export default About;

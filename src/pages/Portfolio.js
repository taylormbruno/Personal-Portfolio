import React, { useState, useRef } from "react";
import Container from "../components/Container";
import projects from "./port.json";
import Jumbotron from "../components/Jumbotron"

function Portfolio() {
    const [active, setActive] = useState(projects[0]);

    const changeProject = (event) => {
        event.preventDefault();
        let projIndex = event.target.dataset.proj;
        console.log(projIndex);
        setActive(projects[projIndex]);
        console.log(active);
    }
    
    const scrollToRef = (ref) => window.scrollTo(0, ref);  
    const myRef = useRef(null);
    const executeScroll = () => scrollToRef(myRef);

    return (
        <Container>
            <h3 id="portHeader" ref={myRef}>Projects</h3>
            <Jumbotron activeProject={active} />
            <div className="row">
               {projects.map(obj => {
                    return(
                        <div className="col-md">
                            <div onClick={executeScroll}>
                                <img src={obj.image} class="miniImg" alt={obj.title} data-proj={obj.id} onClick={changeProject} />
                            </div>
                        </div>
                    );
                })} 
            </div>
        </Container>
    );
  }


export default Portfolio;

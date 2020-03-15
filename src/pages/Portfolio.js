import React, { useState } from "react";
import Container from "../components/Container";
import projects from "./port.json";
import Jumbotron from "../components/Jumbotron"

function Portfolio() {
    // eslint-disable-next-line
    const [active, setActive] = useState(projects[0]);

    const changeProject = (event) => {
        event.preventDefault();
        let projIndex = event.target.dataset.proj;
        console.log(projIndex);
        setActive(projects[projIndex]);
        console.log(active);
    }
    
    return (
        <Container>
            <h3 id="portHeader">Projects</h3>
            <Jumbotron activeProject={active} />
            <div className="row">
               {projects.map(obj => {
                    return(
                        <div className="col-md">
                            <img src={obj.image} class="miniImg" alt={obj.title} data-proj={obj.id} onClick={changeProject} />
                        </div>
                    );
                })} 
            </div>
        </Container>
    );
  }


export default Portfolio;

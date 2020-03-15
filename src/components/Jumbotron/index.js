
import React from "react";

function Jumbotron(props) {
  return (
    <div
      style={{ textAlign: "center" }}
      className="jumbotron">
      <div className="row">
        <div className="col-md">
          <img src={props.activeProject.image} alt="Project Landing Page" className="portImg"/>
        </div>
        <div className="col-md">
          <h3>{props.activeProject.title}</h3>
          <p>{props.activeProject.description}</p>
          <p>Built Using: {props.activeProject.builtWith}</p>
          <a href={props.activeProject.repo} class='portLink' target='_blank' rel="noopener noreferrer" >Github Repository</a> <br />
          <a href={props.activeProject.deployed} class='portLink' target='_blank' rel="noopener noreferrer" >Deployed Application</a>
        </div>
      </div>
    </div>
  );
}

export default Jumbotron;

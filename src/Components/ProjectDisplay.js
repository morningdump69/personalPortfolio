import React from "react";
import "../CSS/Project.css";

const ProjectDisplay = props => {
  return (
    <div className="outer">
      <div className="main-display" onClick={props.unClick}></div>
      <div className="displayed-project">
        <iframe className="project-iframe" src={props.source}></iframe>
      </div>
    </div>
  );
};

export default ProjectDisplay;

import React from "react";
import "../CSS/Project.css";

const ProjectDisplay = props => {
  return (
    <div className="outer">
      <div className="main-display" onClick={props.unClick}></div>
      <div className="displayed-project">
        <img src={props.image} />
      </div>
    </div>
  );
};

export default ProjectDisplay;

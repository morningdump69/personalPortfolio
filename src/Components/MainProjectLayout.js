import React from "react";
import "../CSS/Project.css";

const ProjectLayout = props => {
  return (
    <div className="square" onClick={props.click}>
      <img className="image" src={props.im} />
    </div>
  );
};

export default ProjectLayout;

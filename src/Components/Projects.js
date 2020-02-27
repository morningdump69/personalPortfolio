import React from "react";
import ProjectLayout from "./MainProjectLayout";
import "../CSS/MainProjectPage.css";

const myArray = [1, 2, 3];

const myProjects = () => {
  return (
    <div className="Container">
      {myArray.map(() => {
        return <ProjectLayout />;
      })}
    </div>
  );
};

export default myProjects;

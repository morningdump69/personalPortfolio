import React from "react";
import ProjectLayout from "./MainProjectLayout";
import "../CSS/MainProjectPage.css";
import calculator from "../Photos/calculator.png";
import cardgame from "../Photos/cardgame.png";
import drumkit from "../Photos/Drumkit.png";
import firstwebsite from "../Photos/firstwebsite.png";
import fruitmachine from "../Photos/fruitmachine.png";
import keycode from "../Photos/Keycode.png";
import todolist from "../Photos/Todolist.png";
import diegame from "../Photos/diegame.png";
import coffee from "../Photos/coffee.png";
import ProjectDisplay from "./ProjectDisplay";
import { render } from "@testing-library/react";

class Projects extends React.Component {
  state = {
    myImages: [
      calculator,
      coffee,
      cardgame,
      diegame,
      todolist,
      drumkit,
      keycode,
      fruitmachine,
      firstwebsite
    ],
    projectClicked: false,
    currentProject: 0
  };

  clickHandler = index => {
    this.setState({
      projectClicked: !this.state.projectClicked,
      currentProject: index
    });
  };

  removeClickHandler = () => {
    this.setState({ projectClicked: !this.state.projectClicked });
  };
  render() {
    return (
      <div className="Container">
        {this.state.projectClicked && (
          <ProjectDisplay
            unClick={this.removeClickHandler}
            image={this.state.myImages[this.state.currentProject]}
          />
        )}
        {this.state.myImages.map((image, index) => {
          return (
            <ProjectLayout im={image} click={() => this.clickHandler(index)} />
          );
        })}
      </div>
    );
  }
}

export default Projects;

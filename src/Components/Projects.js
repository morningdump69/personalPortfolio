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

class Projects extends React.Component {
  state = {
    tiles: [
      { image: calculator, src: "https://ross-burrows.github.io/Calculator/" },
      {
        image: coffee,
        src: "https://ross-burrows.github.io/coffee-react-challenge/"
      },
      {
        image: cardgame,
        src: "https://ross-burrows.github.io/card-game-challenge/"
      },

      { image: diegame, src: "https://ross-burrows.github.io/diegame/" },

      { image: todolist, src: "https://ross-burrows.github.io/todolist/" },

      { image: drumkit, src: "https://ross-burrows.github.io/drunkit/" },

      { image: keycode, src: "https://ross-burrows.github.io/keycode/" },
      {
        image: fruitmachine,
        src: "https://ross-burrows.github.io/fruitmachine/"
      },

      { image: firstwebsite, src: "https://ross-burrows.github.io/MyWebpage/" }
    ],
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
            source={this.state.tiles[this.state.currentProject].src}
          />
        )}

        {this.state.tiles.map((tile, index) => {
          return (
            <ProjectLayout
              im={tile.image}
              click={() => this.clickHandler(index)}
            />
          );
        })}
      </div>
    );
  }
}

export default Projects;

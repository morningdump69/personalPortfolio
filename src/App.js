import React from "react";
import "./App.css";
import Contact from "./Components/Contact";
import Nav from "./Components/Nav";
import Projects from "./Components/Projects";
import Home from "./Components/Home";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/Projects" component={Projects} />
        <Route path="/Contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;

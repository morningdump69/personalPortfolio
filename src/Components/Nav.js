import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="navbar">
      <div className="home">
        <Link to="/"> Home </Link>
      </div>
      <div className="projects">
        <Link to="/Projects"> Projects </Link>
      </div>
      <div className="contact">
        <Link to="/Contact"> Contact</Link>
      </div>
    </div>
  );
};

export default Nav;

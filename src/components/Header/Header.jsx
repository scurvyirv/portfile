import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

// this component includes the nav bar and its JS
function Header(props) {
  return (
    <header className="headerContainer">
      <h1 className="headerTitle"> Portfile by Irv </h1>
      <nav className="navContainer">
        <Link to="/">
          <button className="navButton">about me</button>
        </Link>

        <Link to="/contact">
          <button className="navButton">contact</button>
        </Link>

        <Link to="/projects">
          <button className="navButton">projects</button>
        </Link>

        <Link to="/resume">
          <button className="navButton">resume</button>
        </Link>
      </nav>
    </header>
  );
}

// export this component to the parent component App
export default Header;

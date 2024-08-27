import React from "react";
import "./Header.css";

// this component includes the nav bar and its JS
function Header(props) {
  return (
    <header className="headerContainer">
      <h1 className="headerTitle"> Portfile by Irv </h1>
      <nav className="navContainer">
        <button
          className="navButton"
          onClick={() => props.setCurrentPage("AboutMe")}
        >
          about me
        </button>
        <button
          className="navButton"
          onClick={() => props.setCurrentPage("Contact")}
        >
          contact
        </button>
        <button
          className="navButton"
          onClick={() => props.setCurrentPage("Projects")}
        >
          projects
        </button>
        <button
          className="navButton"
          onClick={() => props.setCurrentPage("Resume")}
        >
          resume
        </button>
      </nav>
    </header>
  );
}

// export this component to the parent component App
export default Header;

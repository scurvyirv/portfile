// import react and css
import React from "react";
import "./Projects.css";

// attempt to use flexbox and give sections and classes containers to float labels onto screenshots of projects with hyperlink to site
function Projects() {
  return (
    <section className="outerContainer">
      <article className="projectContainer">
        <a href="https://U-Plan-it.onrender.com">
          <img
            src="/images/SSproject2.png"
            alt="preview of fullstack event planner"
            className="images"
          ></img>
        </a>
        <h3 className="projectName">Fullstack Event Planner</h3>
      </article>
      <article className="projectContainer">
        <a href="https://debug-de-blog.onrender.com">
          <img
            src="/images/SSmvc.png"
            alt="preview of fullstack blogger"
            className="images"
          ></img>
        </a>
        <h3 className="projectName">Fullstack Blog Generator</h3>
      </article>
      <article className="projectContainer">
        <a href="https://scurvyirv.github.io/weather-spotter/">
          <img
            src="/images/SSserverside.png"
            alt="preview of weather app"
            className="images"
          ></img>
        </a>
        <h3 className="projectName">Server-side Weather Tracker</h3>
      </article>
      <article className="projectContainer">
        <a href="https://scurvyirv.github.io/logo-stop/">
          <img
            src="/images/SSOOP.png"
            alt="preview of SVG logo generator"
            className="images"
          ></img>
        </a>
        <h3 className="projectName">SVG Logo Generator</h3>
      </article>
      <article className="projectContainer">
        <a href="https://scurvyirv.github.io/ideas-illuminated/">
          <img
            src="/images/SSjs.png"
            alt="preview of javascript blogger"
            className="images"
          ></img>
        </a>
        <h3 className="projectName">Javascript Blog Generator</h3>
      </article>
      <article className="projectContainer">
        <a href="https://funkoswap.onrender.com">
          <img
            src="/images/SSreactFunko.png"
            alt="preview of Funko React app"
            className="images"
          ></img>
        </a>
        <h3 className="projectName">
          React Full Stack E-Commerce + Social Media
        </h3>
      </article>
      <article className="projectContainer">
        <a href="https://scurvyirv.github.io/identity/">
          <img
            src="/images/SSthirdparty.png"
            alt="preview of task manager"
            className="images"
          ></img>
        </a>
        <h3 className="projectName">Third Party Kanban Task Manager</h3>
      </article>
    </section>
  );
}

export default Projects;

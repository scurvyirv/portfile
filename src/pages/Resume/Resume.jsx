import React from "react";
import "./Resume.css";

// resume component
function Resume() {
  return (
    <section>
      <h3 className="resumeText">
        Feel free to download my resume by clicking this PDF!{" "}
        <a href="/images/sampleResume.pdf" download="sample resume">
          Download Resume
        </a>
      </h3>
      <ul className="resumeSkills">
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>Third-Party APIs</li>
        <li>Server-Side APIs</li>
        <li>Object-Oriented Programming</li>
        <li>Node</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Object Relational Mapping</li>
        <li>Fullstack Model View Controller</li>
        <li>MongoDB NoSQL</li>
        <li>Regular Expressions</li>
        <li>Webpacks</li>
        <li>React & Vite</li>
      </ul>
    </section>
  );
}

export default Resume;

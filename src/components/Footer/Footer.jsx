import React from "react";
import "./Footer.css";

//component for footer
function Footer() {
  return (
    <footer className="footerContainer">
      <ul className="footerList">
        <li className="footerLink">222-222-2222</li>
        <li className="footerLink">scurvyirv@example.com</li>
        <li className="footerLink">
          <a href="https://github.com/scurvyirv?tab=repositories">
            GitHub Profile
          </a>
        </li>
      </ul>
    </footer>
  );
}

export default Footer;

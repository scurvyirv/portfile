import AboutMe from "../../pages/AboutMe/AboutMe";
import Contact from "../../pages/Contact/Contact";
import Projects from "../../pages/Projects/Projects";

//this component includes the middle part of the page
function Content(props) {
  //define the logic to determine what state to render what page
  function renderPage() {
    if (props.currentPage === "AboutMe") {
      return <AboutMe />; //custom HTML component
    } else if (props.currentPage === "Contact") {
      return <Contact />;
    } else {
      return <Projects />;
    }
  }

  return <main>{renderPage()}</main>;
}

export default Content;

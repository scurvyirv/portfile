// import pages that are child components to Content defined by state
import AboutMe from "../../pages/AboutMe/AboutMe";
import Contact from "../../pages/Contact/Contact";
import Projects from "../../pages/Projects/Projects";
import Resume from "../../pages/Resume/Resume";

//this component includes the middle part of the page
function Content(props) {
  //define the logic to determine what state to render what page
  function renderPage() {
    if (props.currentPage === "AboutMe") {
      return <AboutMe />; //custom HTML component
    } else if (props.currentPage === "Contact") {
      return <Contact />;
    } else if (props.currentPage === "Projects") {
      return <Projects />;
    } else {
      return <Resume />;
    }
  }

  return <main>{renderPage()}</main>;
}

export default Content;

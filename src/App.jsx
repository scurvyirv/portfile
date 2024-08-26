// App is the central react page that contains the three components, header, footer, and content of our page
import "./App.css";

// Header defines the top area that includes the nav bar
import Header from "./components/Header/Header";

// Content is the middle area that will dynamically render depending on the state; default is AboutMe
import Content from "./components/Content/Content";

// Footer is the bottom area of the page
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  // defines state and uses function setCurrentPage
  const [currentPage, setCurrentPage] = useState("AboutMe");

  return (
    <>
      <Header setCurrentPage={setCurrentPage} />
      <Content currentPage={currentPage} />
      <Footer />
    </>
  );
}

export default App;

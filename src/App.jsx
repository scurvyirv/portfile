// App is the central react page that contains the three components, header, footer, and content of our page
import "./App.css";

// react router sets URLs depending on nav click
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// Header defines the top area that includes the nav bar
import Header from "./components/Header/Header";

// Content is the middle area that will dynamically render depending on the state; default is AboutMe
// import Content from "./components/Content/Content";

// Footer is the bottom area of the page
import Footer from "./components/Footer/Footer";
import { useState } from "react";

// outlet determines which component displays in content section
import { Outlet } from "react-router-dom";

function App() {
  // defines state and uses function setCurrentPage
  return (
    <>
      <Header />
      <Outlet />
      {/* <Content currentPage={currentPage} /> */}
      <Footer />
    </>
  );
}

export default App;

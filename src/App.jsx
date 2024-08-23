import "./App.css";
import Header from "./components/Header/Header";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";
import { useState } from "react";

function App() {
  //defines state and uses function setCurrentPage
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

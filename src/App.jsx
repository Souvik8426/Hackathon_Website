import React from "react";
import Navbar from "./components/Navbar";
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6 } from "./components/Svgs";
import Sponsors from "./components/Sponsors";
import TechEvents from "./components/TechEvents";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import FAQs from "./components/FAQ";
import About from "./components/About";
import Datatrix from "./assets/DATATRIX-fulltextogpy.png";
import Datathon from "./assets/DATATHON24-textogpy.png";
import HeaderButton from "./components/HeaderButton";
import HeaderImage from "./assets/HeaderImage.svg";

import "./App.css";

const App = () => {
  const svgList = [Svg1, Svg2, Svg3, Svg4, Svg5, Svg6]; // Add the SVGs you want to display here for Sponsors

  return (
    <div className="bg-transparent">
      <Navbar />
      <div className="App-container">
        <header className="App-header">
          <img src={Datatrix} width="300" height="200" alt="Datatrix Image" />
          <h1>Presents</h1>
          <img src={Datathon} height="20rem" alt="Datathon Image" />
          <h2>Details of the venue and the dates</h2>
          <div className="App">
            <HeaderButton />
          </div>
        </header>
        <div className="Image-container bg-transparent">
          <img src={HeaderImage} alt="SVG Image" className="w-100 h-100" />
        </div>
      </div>
      <About />
      <div className="bg-black text-white">
        <Sponsors svgs={svgList} />
      </div>
      <div className="bg-transparent text-white">
        <TechEvents />
      </div>
      <Timeline />
      <Gallery />
      <div className="bg-transparent">
        <FAQs />
      </div>
      <Footer />
    </div>
  );
};

export default App;

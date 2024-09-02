import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import TechEvents from "./components/TechEvents";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import FAQs from "./components/FAQ";
import About from "./components/About";
import Datatrix from "./assets/Datatrix_OG.png";
import Datathon from "./assets/DATATHON24-textogpy.png";
import HeaderButton from "./components/HeaderButton";
import Guvi from "./assets/images.png";

import "./App.css";

const App = () => {
  return (
    <div className="bg-transparent">
      <Navbar
        sections={[
          { text: "Home", id: "hero" },
          { text: "Tracks", id: "tech-events-section" },
          { text: "Gallery", id: "gallery-section" },
        ]}
      />
      <div className="App-container">
        <header id="hero" className="App-header mt-8">
          <img src={Datatrix} width="150" alt="Datatrix Image" />
          <h1>Presents</h1>
          <img src={Datathon} width="1100" alt="Datathon Image" />
          <h1 className="mt-4">Official Venue Partner</h1>
          <img src={Guvi} width="175" height="85" alt="Datatrix Image" />
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <link rel="stylesheet" href="https://youtube.com" />
            <h2 style={{ marginLeft: "8px", marginTop: "8px", }}>
              <a
                href="https://maps.app.goo.gl/dpYm7VKAxiyfwH7y9"
                target="Location"
                rel="noopener noreferrer"
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                Location: Guvi, IIT Madras Research Park
              </a>
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6.75 2.994v2.25m10.5-2.25v2.25m-14.252 13.5V7.491a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v11.251m-18 0a2.25 2.25 0 0 0 2.25 2.25h13.5a2.25 2.25 0 0 0 2.25-2.25m-18 0v-7.5a2.25 2.25 0 0 1 2.25-2.25h13.5a2.25 2.25 0 0 1 2.25 2.25v7.5m-6.75-6h2.25m-9 2.25h4.5m.002-2.25h.005v.006H12v-.006Zm-.001 4.5h.006v.006h-.006v-.005Zm-2.25.001h.005v.006H9.75v-.006Zm-2.25 0h.005v.005h-.006v-.005Zm6.75-2.247h.005v.005h-.005v-.005Zm0 2.247h.006v.006h-.006v-.006Zm2.25-2.248h.006V15H16.5v-.005Z"
              />
            </svg>
            <h2 style={{ marginLeft: "8px", marginTop: "8px" }}>
              Date: September 13th & 14th
            </h2>
          </div>
          <div style={{ display: "flex", alignItems: "center" }}>
            <svg viewBox="0 0 24 24" width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#ffffff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            <h2 style={{ marginLeft: "8px", marginTop: "8px" }}>Timings: 06:00 PM to 06:00 PM (24hrs)</h2>
          </div>
          <div className="App mb-[1rem]">
            <HeaderButton />
          </div>
        </header>
      </div>
      <div id="about-section">
        <About />
      </div>
      <div className="text-white custom-blur">
        <div id="tech-events-section">
          <TechEvents />
        </div>
      </div>
      <div id="timeline-section">
        <Timeline />
      </div>
      <div className="custom-blur">
        <div id="gallery-section">
          <Gallery />
        </div>
      </div>
      <div className="bg-transparent">
        <div id="faqs-section">
          <FAQs />
        </div>
      </div>
      <div id="footer-section">
        <Footer />
      </div>
    </div>
  );
};

export default App;

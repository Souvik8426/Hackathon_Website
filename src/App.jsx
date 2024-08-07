import React from 'react';
import Navbar from './components/Navbar';
import { Svg1, Svg2, Svg3, Svg4, Svg5, Svg6 } from './components/Svgs';
import Sponsors from './components/Sponsors';
import TechEvents from './components/TechEvents';
import Timeline from './components/Timeline';
import Footer from './components/Footer';
import { createRoot } from 'react-dom/client';
import Gallery from './components/Gallery';
import FAQs from './components/FAQ';

import './App.css'; // Assuming you have some CSS to style the app


const App = () => {
  const svgList = [Svg1, Svg2, Svg3, Svg4, Svg5, Svg6]; // Add the SVGs you want to display here for Sponsors
  const rootElement = document.getElementById('root');
  const root = createRoot(rootElement);

  return (
    <div className="App">
      <Navbar />
      <header className="App-header">
        <h1>Welcome to My Website</h1>
        <p>This is a simple React app with a modern navbar.</p>
      </header>
      <div className="sponsors-container bg-black text-white">
        <Sponsors svgs={svgList} />
      </div>
      <div className="bg-black text-white">
      <TechEvents />
      <Timeline />
      <Gallery />
      <FAQs />
      <Footer />
      </div>
    </div>
  );
};

export default App;

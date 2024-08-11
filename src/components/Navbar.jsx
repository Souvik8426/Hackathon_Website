import React, { useState } from 'react';
import GradientButton from './ButtonComponent';
import { Link, animateScroll as scroll } from 'react-scroll';
import datathonImage from '../assets/DATATHON24-textogpy.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-full px-4 py-2 bg-transparent shadow-md lg:px-8 lg:py-4 backdrop-blur-sm z-50">
      <div className="flex justify-between items-center mx-auto text-white">
        <div className="flex items-center">
          <Link to="hero" smooth={true} duration={500}>
            <img
              src={datathonImage}
              alt="Datathon24"
              className="w-[300px] h-auto max-w-[600px] max-h-[100px]"
            />
          </Link>
        </div>
        <div className="hidden lg:flex space-x-6">
          <Link to="hero" smooth={true} duration={500}>
            <GradientButton text="Home" />
          </Link>
          <Link to="tech-events" smooth={true} duration={500}>
            <GradientButton text="Events" />
          </Link>
          <Link to="gallery" smooth={true} duration={500}>
            <GradientButton text="Gallery" />
          </Link>
          <Link to="footer" smooth={true} duration={500}>
            <GradientButton text="Contact us" />
          </Link>
        </div>
        <button
          className="lg:hidden h-6 w-6 text-white"
          type="button"
          onClick={toggleMenu}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-2">
          <ul className="flex flex-col gap-5 px-2 text-center">
            <li>
              <Link to="hero" smooth={true} duration={500}>
                <a className="bg-gradient-to-r from-purple-900 via-purple-400 to-white-200 hover:from-purple-500 hover:via-white-200 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Home
                </a>
              </Link>
            </li>
            <li>
              <Link to="tech-events" smooth={true} duration={500}>
                <a className="bg-gradient-to-r from-purple-900 via-purple-400 to-white-200 hover:from-purple-500 hover:via-white-200 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Events
                </a>
              </Link>
            </li>
            <li>
              <Link to="gallery" smooth={true} duration={500}>
                <a className="bg-gradient-to-r from-purple-900 via-purple-400 to-white-200 hover:from-purple-500 hover:via-white-200 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Gallery
                </a>
              </Link>
            </li>
            <li>
              <Link to="footer" smooth={true} duration={500}>
                <a className="bg-gradient-to-r from-purple-900 via-purple-400 to-white-200 hover:from-purple-500 hover:via-white-200 hover:to-purple-400 text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 ease-in-out">
                  Contact us
                </a>
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

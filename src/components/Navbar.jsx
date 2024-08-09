import React, { useState } from 'react';
import GradientButton from './ButtonComponent';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed w-screen px-4 py-2 mx-auto text-white bg-transparent shadow-md lg:px-8 lg:py-4 backdrop-blur-sm z-50">
      <div className="flex items-center justify-between mx-auto text-blue-gray-900 backdrop-blur-sm">
        <a href="#"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
          Material Tailwind
        </a>
        <div className={`lg:flex ${isOpen ? 'block' : 'hidden'} flex-col lg:flex-row lg:items-center lg:gap-6`}>
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <li className="hidden lg:block"><GradientButton text="Get in touch" /></li>
            <li className="hidden lg:block"><GradientButton text="Get in touch" /></li>
            <li className="hidden lg:block"><GradientButton text="Get in touch" /></li>
            <li className="hidden lg:block"><GradientButton text="Get in touch" /></li>
          </ul>
        </div>
        <div className="hidden lg:flex items-center gap-x-1">
          <GradientButton text="Contact Us" />
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          type="button"
          onClick={toggleMenu}>
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
      {isOpen && (
        <div className="lg:hidden mt-2">
          <ul className="flex flex-col gap-2 px-4">
            <li><a href="#" className="block py-2 px-4 text-center text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md shadow-md hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition duration-300 ease-in-out">Get in touch</a></li>
            <li><a href="#" className="block py-2 px-4 text-center text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md shadow-md hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition duration-300 ease-in-out">Get in touch</a></li>
            <li><a href="#" className="block py-2 px-4 text-center text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md shadow-md hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition duration-300 ease-in-out">Get in touch</a></li>
            <li><a href="#" className="block py-2 px-4 text-center text-white bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-md shadow-md hover:from-purple-500 hover:via-pink-600 hover:to-red-600 transition duration-300 ease-in-out">Get in touch</a></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

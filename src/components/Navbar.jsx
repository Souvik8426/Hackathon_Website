import React from 'react';
import GradientButton from './ButtonComponent';

const Navbar = () => {
  return (
    <nav
      className="fixed block w-screen px-4 py-2 mx-auto text-white bg-transparent shadow-md lg:px-8 lg:py-4 backdrop-blur-sm">
      <div className="container flex items-center bg-transparent justify-between mx-auto text-blue-gray-900 backdrop-blur-sm">
        <a href="#"
          className="mr-4 block cursor-pointer py-1.5 font-sans text-base font-medium leading-relaxed text-inherit antialiased">
          Material Tailwind
        </a>
        <div className="hidden lg:block">
          <ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
            <GradientButton text="Get in touch" />
            <GradientButton text="Get in touch" />
            <GradientButton text="Get in touch" />
            <GradientButton text="Get in touch" />
          </ul>
        </div>
        <div className="flex items-center gap-x-1">
          <GradientButton text="Contact Us" />
        </div>
        <button
          className="relative ml-auto h-6 max-h-[40px] w-6 max-w-[40px] select-none rounded-lg text-center align-middle font-sans text-xs font-medium uppercase text-inherit transition-all hover:bg-transparent focus:bg-transparent active:bg-transparent disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none lg:hidden"
          text="Menu"
          type="button">
          <span className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16"></path>
            </svg>
          </span>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
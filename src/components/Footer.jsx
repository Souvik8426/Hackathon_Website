import React from 'react';
import Srm from '../assets/Group1.svg';
import Datatrix from "../assets/Datatrix_OG.png";

const Footer = () => {
  return (
    <footer className="bg-black font-titillium">
      <div className="px-4 p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">

          <span className="items-left px-4">
            <img src={Datatrix} alt="image-alt" width="125" height="24" className="inline-block mx-2" />
            <img src={Srm} alt="image-alt" width="125" height="24" className="inline-block mx-2" />
          </span>
          <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">
                Licensing
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <span className="relative flex justify-center py-5">
          <div
            className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-transparent bg-gradient-to-r from-transparent via-gray-500 to-transparent opacity-75"
          ></div>

          {/* <span className="relative text-white z-10 px-6">Made With Love</span> */}
        </span>
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024 Datatrix™. Styled with Tailwind CSS Designed and Developed by the Datatrix Team
        </span>
      </div>
    </footer>
  );
};

export default Footer;
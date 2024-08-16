import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-black font-titillium">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">

          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Hackathon
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
import React, { useState } from 'react';
import './HeaderButton.css';

const HeaderButton = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleClick = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };
  
  const handleInstagramAction = () => {
    window.open('https://www.instagram.com/datatrix_24', '_blank');
    console.log("Instagram-style button clicked");
    setIsModalOpen(false);
  };

  return (
    <>
      <button className="header-button" onClick={handleClick}>
        Register
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full" id="my-modal">
          <div className="relative top-20 mx-auto p-5 border border-transparent w-96 shadow-lg rounded-md bg-black">
            <div className="mt-3 text-center">
              <h1 className="text-lg leading-6 font-medium text-gray-900">Registration Closed!!!</h1>
              <div className="mt-10 px-7 py-3">
                <h5 className=" text-lg text-white">
                  Alas!
                </h5>
                <h5 className=" text-base text-white">
                  Our hackathon registrations are now closed. But don't worry! Follow us on Instagram to stay updated and make sure you don't miss out next time.
                </h5>
              </div>
              <div className="items-center px-4 py-3">
                <button
                  id="instagram-btn"
                  className="mt-3 px-4 py-2 text-white text-base font-medium rounded-md w-full shadow-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
                  style={{
                    background: 'linear-gradient(45deg, #405de6, #5851db, #833ab4, #c13584, #e1306c, #fd1d1d)',
                  }}
                  onClick={handleInstagramAction}
                >
                  Follow us on Instagram
                </button>
                <button
                  id="cancel-btn"
                  className="mt-3 px-4 py-2 bg-white text-gray-800 text-base font-medium rounded-md w-full shadow-sm border border-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-300"
                  onClick={handleClose}
                >
                  Will do it later ^_^
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HeaderButton;
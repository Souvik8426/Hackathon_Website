import React from 'react';
import { useNavigate } from 'react-router-dom';

const Card = ({
  eventName,
  eventDescription,
  eventImage,
  buttonText,
}) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/new-component');
  };

  return (
    <div
      className="w-[18em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]"
      style={{ minHeight: 'fit-content' }}
    >
      <div className="relative w-full h-[15em]">
        <img
          src={eventImage}
          alt={eventName}
          className="w-full h-full object-cover rounded-[1.5em]"
        />
      </div>

      <div className="pt-[1em]">
        <h1 className="text-[2em] font-titillium font-bold">{eventName}</h1>
        <p className="text-[0.85em]">{eventDescription}</p>
      </div>

      <button
        onClick={handleButtonClick}
        className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]"
      >
        <p>{buttonText}</p>
        <svg
          className="w-6 h-6 group-hover:translate-x-[10%] duration-300"
          stroke="currentColor"
          strokeWidth="1"
          viewBox="0 0 24 24"
          fill="white"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
      </button>
    </div>
  );
};

export default Card;

import React, { useState } from 'react';
import Traffic from '../assets/ProblemStatements/1.png';
import Health from '../assets/ProblemStatements/2.png';
import Urban from '../assets/ProblemStatements/3.png';
import Commerce from '../assets/ProblemStatements/4.png';

const TechEvents = () => {
  // State to manage which modal is open
  const [openModal, setOpenModal] = useState(null);

  // Function to open the modal
  const handleOpenModal = (modalId) => {
    setOpenModal(modalId);
  };

  // Function to close the modal
  const handleCloseModal = () => {
    setOpenModal(null);
  };

  return (
    <div className="h-auto w-screen py-10">
      <div className="text-6xl font-bold mb-5 text-white font-rampart text-center">
        <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-fuchsia-500 via-30% to-purple-500 to-90%">
          Tracks
        </span>
      </div>
      <div className="flex flex-wrap justify-center gap-8 w-screen px-4 md:px-10 font-titillium">

        {/* Traffic Accident Card */}
        <div className="w-[18em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]" style={{ minHeight: 'fit-content' }}>
          <div className="relative w-full h-[15em]">
            <img src={Traffic} alt="Traffic Accident Analysis & Prediction" className="w-full h-full object-cover rounded-[1.5em]" />
          </div>
          <div className="pt-[1em]">
            <h1 className="text-[2em] font-titillium font-bold">Traffic Accident Analysis & Prediction</h1>
            <p className="text-[0.85em]">Develop a model using historical accident data, weather conditions, and traffic patterns to identify key factors, predict high-risk areas, and forecast times for future traffic accidents.</p>
          </div>
          <button onClick={() => handleOpenModal('traffic-modal')} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Know More</p>
            <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Traffic Modal */}
        {openModal === 'traffic-modal' && (
          <div id="traffic-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-purple-950">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Traffic Accident Analysis & Prediction
                </h3>
                <button onClick={handleCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Develop a model using historical accident data, weather conditions, and traffic patterns to identify key factors, predict high-risk areas, and forecast times for future traffic accidents.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Use machine learning to analyze the data and create predictive models that can be used by authorities to improve road safety.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Health Outcomes Card */}
        <div className="w-[18em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]" style={{ minHeight: 'fit-content' }}>
          <div className="relative w-full h-[15em]">
            <img src={Health} alt="Health Outcomes Prediction" className="w-full h-full object-cover rounded-[1.5em]" />
          </div>
          <div className="pt-[1em]">
            <h1 className="text-[2em] font-titillium font-bold">Health Outcomes Prediction</h1>
            <p className="text-[0.85em]">Create a predictive model to forecast health outcomes for chronic patients using medical records, demographics, and treatment history. Predict events like hospital readmissions and disease progression, and suggest personalized treatments.</p>
          </div>
          <button onClick={() => handleOpenModal('health-modal')} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Know More</p>
            <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Health Modal */}
        {openModal === 'health-modal' && (
          <div id="health-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-purple-950">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Health Outcomes Prediction
                </h3>
                <button onClick={handleCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Create a predictive model to forecast health outcomes for chronic patients using medical records, demographics, and treatment history.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Predict events like hospital readmissions and disease progression, and suggest personalized treatments.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Urban Planning Card */}
        <div className="w-[18em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]" style={{ minHeight: 'fit-content' }}>
          <div className="relative w-full h-[15em]">
            <img src={Urban} alt="Urban Planning and Development" className="w-full h-full object-cover rounded-[1.5em]" />
          </div>
          <div className="pt-[1em]">
            <h1 className="text-[2em] font-titillium font-bold">Urban Planning and Development</h1>
            <p className="text-[0.85em]">Leverage urban data, land usage, and socio-economic factors to design models for city planning and development. Predict housing demands, infrastructure needs, and optimize resource allocation.</p>
          </div>
          <button onClick={() => handleOpenModal('urban-modal')} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Know More</p>
            <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Urban Modal */}
        {openModal === 'urban-modal' && (
          <div id="urban-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-purple-950">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Urban Planning and Development
                </h3>
                <button onClick={handleCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Leverage urban data, land usage, and socio-economic factors to design models for city planning and development.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Predict housing demands, infrastructure needs, and optimize resource allocation.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Commerce Insights Card */}
        <div className="w-[18em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]" style={{ minHeight: 'fit-content' }}>
          <div className="relative w-full h-[15em]">
            <img src={Commerce} alt="Commerce Insights and Predictions" className="w-full h-full object-cover rounded-[1.5em]" />
          </div>
          <div className="pt-[1em]">
            <h1 className="text-[2em] font-titillium font-bold">Commerce Insights and Predictions</h1>
            <p className="text-[0.85em]">Analyze sales data, market trends, and customer behavior to forecast business performance. Create models to optimize inventory, improve marketing strategies, and enhance customer satisfaction.</p>
          </div>
          <button onClick={() => handleOpenModal('commerce-modal')} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Know More</p>
            <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Commerce Modal */}
        {openModal === 'commerce-modal' && (
          <div id="commerce-modal" className="fixed inset-0 z-50 flex justify-center items-center w-screen h-screen bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-purple-950">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Commerce Insights and Predictions
                </h3>
                <button onClick={handleCloseModal} className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white">
                  <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4">
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Analyze sales data, market trends, and customer behavior to forecast business performance.
                </p>
                <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
                  Create models to optimize inventory, improve marketing strategies, and enhance customer satisfaction.
                </p>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default TechEvents;

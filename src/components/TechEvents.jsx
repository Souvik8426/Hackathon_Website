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
        <div className="w-[25em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]" style={{ minHeight: 'fit-content' }}>
          <div className="relative w-full h-[15em]">
            <img src={Traffic} alt="Traffic Accident Analysis & Prediction" className="w-full h-full object-cover rounded-[1.5em]" />
          </div>
          <div className="pt-[1em]">
            <h1 className="text-[2em] font-titillium font-bold">AI-Powered Supply Chain Optimization</h1>
            <p className="text-[0.85em]">Join the AI-Powered Supply Chain Optimization Hackathon to revolutionize inventory management and pricing strategies using advanced AI and machine learning. Develop innovative solutions that enhance supply chain efficiency and boost profitability, driving significant improvements in business operations.</p>
          </div>
          <button onClick={() => handleOpenModal('traffic-modal')} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Know More</p>
            <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Supply Chain Modal */}
        {openModal === 'traffic-modal' && (
          <div id="traffic-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-purple-950">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  AI-Powered Supply Chain Optimization Hackathon
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[80vh]">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Objective</h1>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  To revolutionize inventory management and pricing strategies by developing innovative AI-powered solutions that enhance supply chain efficiency and boost profitability, driving significant improvements in business operations.
                </p>
                <br />
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Problem Statement</h1>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Traditional supply chain management is often hampered by inefficiencies in inventory management and pricing strategies, leading to increased costs, stockouts, and missed revenue opportunities. Businesses struggle to adapt to dynamic market conditions, resulting in suboptimal decision-making that affects profitability. The challenge lies in leveraging advanced AI and machine learning technologies to address these inefficiencies and create a more agile, responsive, and profitable supply chain.
                </p>
                <br />
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Expected Outcomes</h1>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Optimized Inventory Management</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Develop AI-driven solutions that predict demand with high accuracy, optimize stock levels, and reduce excess inventory, minimizing holding costs and improving cash flow.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Dynamic Pricing Strategies</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Implement machine learning algorithms to create dynamic pricing models that respond to real-time market changes, maximizing revenue and ensuring competitive pricing.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Enhanced Supply Chain Efficiency</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Streamline supply chain processes through AI-powered analytics, improving order fulfillment rates, reducing lead times, and increasing overall operational efficiency.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Increased Profitability</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Boost business profitability by minimizing waste, reducing costs, and optimizing pricing strategies, leading to better financial performance and increased market share.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Scalable Solutions</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Create scalable AI and machine learning solutions that can be adapted across various industries, driving widespread improvements in supply chain management.
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Interial design Card */}
        <div className="w-[25em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]" style={{ minHeight: 'fit-content' }}>
          <div className="relative w-full h-[15em]">
            <img src={Health} alt="Health Outcomes Prediction" className="w-full h-full object-cover rounded-[1.5em]" />
          </div>
          <div className="pt-[1em]">
            <h1 className="text-[2em] font-titillium font-bold">AI-Powered Real Estate and Interior Design</h1>
            <p className="text-[0.85em]">Develop an AI-powered platform that utilizes advanced VR and AI technologies to revolutionize real estate and interior design. The platform should enhance the home-buying and interior design experiences by providing immersive visualizations, interactive property tours, and personalized design recommendations, ultimately transforming these industries.</p>
          </div>
          <button onClick={() => handleOpenModal('health-modal')} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Know More</p>
            <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Interior Design Modal */}
        {openModal === 'health-modal' && (
          <div id="health-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-purple-950">
              <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  AI-Powered Real Estate and Interior Design Innovation Hackathon
                </h3>
                <button
                  onClick={handleCloseModal}
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[80vh]">
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Objective</h1>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  To develop an AI-powered platform that integrates advanced VR and AI technologies, aiming to transform the real estate and interior design industries by enhancing the customer experience through immersive visualizations, interactive property tours, and personalized design recommendations.
                </p>
                <br />
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Problem Statement</h1>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  The traditional processes of buying real estate and designing interiors are often time-consuming, expensive, and rely heavily on the imagination of the clients. Potential buyers struggle to visualize properties without physically visiting them, and interior design choices often fail to meet client expectations due to a lack of personalized guidance. These challenges are exacerbated by the limited ability to foresee how design choices will look in real-time, leading to customer dissatisfaction and inefficiency in decision-making.
                </p>
                <br />
                <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Expected Outcomes</h1>
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Immersive Property Visualization</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Develop a platform that enables users to experience properties through immersive VR technology, allowing them to virtually walk through properties from anywhere in the world.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Interactive Property Tours</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Implement interactive features that allow users to explore various aspects of a property, such as floor plans, amenities, and neighborhood details, through an AI-powered virtual assistant.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Personalized Interior Design Recommendations</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Utilize AI to analyze user preferences, lifestyle, and current trends to provide personalized interior design suggestions. Users can visualize these suggestions in real-time using VR.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Enhanced Customer Engagement</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Increase customer engagement and satisfaction by providing a seamless, interactive, and immersive experience that reduces the need for multiple physical visits and consultations.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Reduced Decision-Making Time</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Accelerate the decision-making process for both buying properties and selecting interior designs by providing clear, visually rich, and personalized information to users.
                </p>
                <br />
                <h3 className="text-md font-semibold text-gray-900 dark:text-white">Industry Transformation</h3>
                <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                  Set a new standard in the real estate and interior design industries by leveraging AI and VR technologies, making the home-buying and design processes more efficient, accessible, and customer-centric.
                </p>
              </div>
            </div>
          </div>
        )}


        {/* Healthcare Planning Card */}
        <div className="w-[25em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]" style={{ minHeight: 'fit-content' }}>
          <div className="relative w-full h-[15em]">
            <img src={Urban} alt="Urban Planning and Development" className="w-full h-full object-cover rounded-[1.5em]" />
          </div>
          <div className="pt-[1em]">
            <h1 className="text-[2em] font-titillium font-bold">AI-Powered Healthcare Chatbot</h1>
            <p className="text-[0.85em]">Design an AI-powered assistant that can automatically furnish and stage rooms virtually based on different design styles. Your solution should allow users to visualize their spaces with different furniture and décor, applying various interior design themes, and making personalized recommendations based on user preferences.</p>
          </div>
          <button onClick={() => handleOpenModal('urban-modal')} className="h-fit w-fit px-[1em] py-[0.25em] border-[1px] rounded-full flex justify-center items-center gap-[0.5em] overflow-hidden group hover:translate-y-[0.125em] duration-200 backdrop-blur-[12px]">
            <p>Know More</p>
            <svg className="w-6 h-6 group-hover:translate-x-[10%] duration-300" stroke="currentColor" strokeWidth="1" viewBox="0 0 24 24" fill="white" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" strokeLinejoin="round" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        {/* Health Modal */}
        {
          openModal === 'urban-modal' && (
            <div id="urban-modal" className="fixed inset-0 z-50 flex justify-center items-center w-full h-full bg-black bg-opacity-50">
              <div className="relative p-4 w-full max-w-2xl max-h-full bg-white rounded-lg shadow dark:bg-purple-950">
                <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-purple-600">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                    AI-Powered Healthcare Chatbot for Symptom Analysis, Disease Prediction, and Medical Imaging Insights
                  </h3>
                  <button
                    onClick={handleCloseModal}
                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-purple-600 dark:hover:text-white"
                  >
                    <svg
                      className="w-3 h-3"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 14"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                      />
                    </svg>
                    <span className="sr-only">Close modal</span>
                  </button>
                </div>
                <div className="p-4 md:p-5 space-y-4 overflow-y-auto max-h-[80vh]">
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Objective</h1>
                  <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                    Develop an AI-driven chatbot that leverages publicly available healthcare datasets to assist patients and healthcare professionals in symptom analysis, disease prediction, and medical imaging interpretation. The chatbot should provide users with actionable insights based on their symptoms, medical history, and relevant clinical or imaging data.
                  </p>
                  <br />
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Problem Statement</h1>
                  <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                    Healthcare systems around the world are facing increasing pressure due to the growing number of patients, particularly those seeking timely diagnoses and treatments for various medical conditions. In underserved regions or busy urban areas, access to healthcare professionals can be limited, causing delays in diagnosis and treatment, which may result in worsening outcomes for patients.
                    <br /><br />
                    There is an urgent need for an intelligent and user-friendly digital tool that can assist in preliminary medical assessments, provide educational information, and offer data-driven recommendations. Your task is to design and build a conversational AI chatbot that can analyze symptoms, suggest potential diagnoses, and interpret medical imaging data to aid decision-making, all while ensuring patient privacy and data security.
                  </p>
                  <br />
                  <h1 className="text-lg font-semibold text-gray-900 dark:text-white">Expected Outcomes</h1>
                  <p className="text-base leading-relaxed text-gray-400 dark:text-gray-300">
                    Participants should develop a prototype of a chatbot capable of:
                    <ul className="list-disc list-inside">
                      <li>Understanding and interpreting user symptoms.</li>
                      <li>Cross-referencing symptoms with disease databases to suggest potential diagnoses.</li>
                      <li>Analyzing user-submitted medical images for preliminary insights.</li>
                      <li>Providing recommendations or next steps for seeking medical care.</li>
                    </ul>
                    By the end of the hackathon, teams should have a working chatbot prototype that demonstrates its potential to assist patients and healthcare professionals, ultimately improving healthcare access and decision-making.
                  </p>
                </div>
              </div>
            </div>
          )
        }



        {/* Commerce Insights Card */}
        {/* <div className="w-[18em] border-[0.8px] border-[#A555EC] rounded-[1.5em] text-white font-nunito p-[1em] flex justify-center items-start flex-col gap-[0.75em]" style={{ minHeight: 'fit-content' }}>
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
        </div> */}

        {/* Commerce Modal */}
        {/* {openModal === 'commerce-modal' && (
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
        )} */}

      </div >
    </div >
  );
};

export default TechEvents;

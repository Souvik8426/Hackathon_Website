import React from 'react';
import Card from './NewItem';
import Traffic from '../assets/ProblemStatements/1.png';
import Health from '../assets/ProblemStatements/2.png';
import Urban from '../assets/ProblemStatements/3.png';
import Commerce from '../assets/ProblemStatements/4.png';



const TechEvents = () => {
  return (
    <>
      <div className="h-auto w-screen py-10">
        <div className="text-6xl font-bold mb-5 text-white font-rampart text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-fuchsia-500 via-30% to-purple-500 to-90%">
            Tracks
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 w-screen px-4 md:px-10 font-titillium">
          <Card
            eventName="Traffic Accident Analysis & Prediction"
            eventDescription="Develop a model using historical accident data, weather conditions, and traffic patterns to identify key factors, predict high-risk areas, and forecast times for future traffic accidents."
            eventImage={Traffic}
            buttonText="Join Now"
          />
          <Card
            eventName="Health Outcomes Prediction"
            eventDescription="Create a predictive model to forecast health outcomes for chronic patients using medical records, demographics, and treatment history. Predict events like hospital readmissions and disease progression, and suggest personalized treatments."
            eventImage={Health}
            buttonText="Join Now"
          />
          <Card
            eventName="Real Estate Price Forecasting"
            eventDescription="Build a model to forecast real estate prices by analyzing historical sales data, location, size, amenities, and economic indicators. Predict future property values and identify potential investment opportunities."
            eventImage={Urban}
            buttonText="Join Now"
          />
          <Card
            eventName="Retail Inventory Management"
            eventDescription="Develop a system to optimize inventory for a retail chain using historical sales, seasonal trends, and promotions. Predict future needs, minimize stockouts, and reduce excess inventory efficiently."
            eventImage={Commerce}
            buttonText="Join Now"
          />
        </div>
      </div>
    </>
  );
};

export default TechEvents;

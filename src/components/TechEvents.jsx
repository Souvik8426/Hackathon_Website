import React from 'react';
import Card from './NewItem';

const TechEvents = () => {
  return (
    <>
      <div className="h-auto w-screen py-10">
        <div className="text-6xl font-bold mb-5 text-white font-rampart text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
            Problem Statement
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 w-screen px-4 md:px-10 font-titillium">
          <Card
            eventName="Traffic Accident Analysis and Prediction"
            eventDescription="Develop a model to analyze traffic accident data and predict high-risk areas and times for accidents. Use historical accident data, weather conditions, and traffic patterns to identify key factors contributing to accidents and predict when and where future accidents are most likely to occur."
            eventImage="https://example.com/image.jpg"
            buttonText="Join Now"
          />
          <Card
            eventName="Health Outcomes Prediction"
            eventDescription="Create a predictive model to forecast health outcomes for patients with chronic conditions. Utilize medical records, patient demographics, and historical treatment data to predict future health events, such as hospital readmissions or disease progression, and suggest personalized treatment plans."
            eventImage="https://example.com/image.jpg"
            buttonText="Join Now"
          />
          <Card
            eventName="Real Estate Price Forecasting"
            eventDescription="Build a model to forecast real estate prices in a specific region. Analyze historical property sales data, including features such as location, size, and amenities, as well as economic indicators, to predict future property values and identify investment opportunities."
            eventImage="https://example.com/image.jpg"
            buttonText="Join Now"
          />
          <Card
            eventName="Retail Inventory Management"
            eventDescription="Develop a system to optimize inventory management for a retail chain. Use historical sales data, seasonal trends, and promotional schedules to predict future inventory needs, minimize stockouts, and reduce excess inventory."
            eventImage="https://example.com/image.jpg"
            buttonText="Join Now"
          />
        </div>
      </div>
    </>
  );
};

export default TechEvents;

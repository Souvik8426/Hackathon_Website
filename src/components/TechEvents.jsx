import React from 'react';
import Card from './NewItem';

const TechEvents = () => {
  return (
    <>
      <div className="h-auto w-screen py-10">
        <div className="text-6xl font-bold mb-5 text-white font-rampart text-center">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">
            Problem Statement
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 w-screen px-4 md:px-10 font-titillium">
          <Card
            eventName="My Event"
            eventDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
            eventImage="https://example.com/image.jpg"
            buttonText="Join Now"
          />
          <Card
            eventName="My Event"
            eventDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
            eventImage="https://example.com/image.jpg"
            buttonText="Join Now"
          />
          <Card
            eventName="My Event"
            eventDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
            eventImage="https://example.com/image.jpg"
            buttonText="Join Now"
          />
          <Card
            eventName="My Event"
            eventDescription="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero dolorum blanditiis pariatur sequi magni."
            eventImage="https://example.com/image.jpg"
            buttonText="Join Now"
          />
        </div>
      </div>
    </>
  );
};

export default TechEvents;

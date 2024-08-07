import React from 'react'
import EventItems from './EventItems'
import Card from './NewItem'


const TechEvents = () => {
  return (
    <>
      <div className='bg-black h-[80rem] w-screen p-[4rem]'>
        <div className='bg-black text-6xl font-bold mb-5 text-white font-orbitron text-center'>
          <span className="bg-clip-text text-transparent bg-gradient-to-bl from-blue-400 via-purple-500 to-pink-500">
            Problem Statement
          </span>
        </div>
        <div className='grid grid-flow-row grid-rows-2 grid-cols-4 gap-[2rem] pt-[3rem]'>

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
  )
}

export default TechEvents
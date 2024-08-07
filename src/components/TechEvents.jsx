import React from 'react'
import EventItems from './EventItems'

const TechEvents = () => {
  return (
    <>
        <div className='bg-black h-[80rem] w-screen p-[4rem]'>
            <div className='bg-black text-6xl font-bold mb-5 text-white font-orbitron text-center'>
                <span>Technical Events</span>
            </div>
            <div className='grid grid-flow-row grid-rows-2 grid-cols-4 gap-[2rem] pt-[3rem]'>

                <EventItems/>
                <EventItems/>
                <EventItems/>
                <EventItems/>
            </div>
        </div>
    </>
  )
}

export default TechEvents
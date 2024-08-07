import React from 'react';

// Define the Sponsors component
const Sponsors = ({ svgs }) => {
    return (
        <section className="bg-black">
            <div className="px-4 pb-8 mx-auto lg:pb-16">
                <div className='bg-black text-6xl font-bold mb-5 text-white font-orbitron text-center'>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">
                        Sponsors
                    </span>
                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-12 sm:grid-cols-3 lg:grid-cols-6">
                    {svgs.map((Svg, index) => (
                        <div key={index}>{Svg}</div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Sponsors;

import React from 'react';

// Import your images here
import Image1 from '../assets/Sponsors/Sponsor1.png';
import Image2 from '../assets/Sponsors/Sponsor2.png';
import Image3 from '../assets/Sponsors/Sponsor3.png';

// Define the Sponsors component
const Sponsors = () => {
    const images = [Image1, Image2, Image3]; // Add all imported images to this array
    const repeatedImages = [...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images, ...images]; // Duplicate the array enough times to create a seamless loop

    return (
        <section className="py-8 bg-transparent overflow-hidden">
            <style>{`
                @keyframes marquee {
                    0% {
                        transform: translateX(0%);
                    }
                    100% {
                        transform: translateX(-50%);
                    }
                }

                .animate-marquee {
                    display: flex;
                    animation: marquee 15s linear infinite;
                }

                .marquee-container {
                    display: flex;
                    flex-direction: row;
                    width: 200%; /* Ensure the container is wide enough to contain two sets of images */
                }

                .marquee-container img {
                    padding: 10px;
                    max-height: 70px; /* Adjust the height as needed */
                    margin-right: 20px; /* Adjust the spacing as needed */
                }
            `}</style>
            <div className="px-4 pb-2 mx-auto lg:pb-4">
                <div className='text-6xl font-bold mb-5 text-white font-orbitron text-center'>
                    <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-fuchsia-500 via-30% to-purple-500 to-90%">
                        Sponsors
                    </span>
                </div>
                <div className="relative w-full h-full overflow-x-hidden">
                    <div className="marquee-container animate-marquee">
                        {repeatedImages.map((image, index) => (
                            <img key={index} src={image} alt={`Sponsor ${index + 1}`} />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Sponsors;

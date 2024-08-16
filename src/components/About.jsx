import React from 'react';
import AboutImage from '../assets/AboutUs.svg'; // Update with your image path

const About = () => {
    return (
        <div className="bg-gradient-to-b from-gray-900 to-black text-white p-10 rounded-lg shadow-lg">
            <div className="flex flex-col md:flex-row items-center">
                {/* Left Half: Image */}
                <div className="w-full md:w-1/2 flex justify-center items-center hidden md:flex">
                    <img src={AboutImage} alt="About Image" className="max-w-full max-h-full rounded-lg shadow-lg" />
                </div>
                {/* Right Half: Text */}
                <div className="w-full md:w-1/2 flex flex-col items-center mt-4 md:mt-0">
                    <div className="w-full max-w-2xl text-center">
                        <div className='text-6xl font-bold mb-5 text-white font-rampart text-center'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                About
                            </span>
                        </div>
                        <div className='text-6xl font-bold mb-5 text-white font-rampart text-center'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                                Datathon 2024
                            </span>
                        </div>
                        <p className="mt-6 text-lg leading-relaxed font-titillium">
                            Upcoming Biggest Data Science Hackathon: "Empowering change through data-driven solutions". Unlock the Power of Data at the Datatrix’s Datathon 2024 —where innovation ignites, creativity sparks, and data-driven brilliance takes center stage!
                        </p>

                        <p className="mt-4 text-lg leading-relaxed font-titillium">
                            Hosted by the trailblazing Big Data Analytics Department from SRM IST RAMAPURAM, this adrenaline-fueled event is your chance to dive deep into the world of data science and emerge with game-changing solutions that can revolutionize industries.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed font-titillium">
                            With expert mentors guiding your journey, and cutting-edge tools at your fingertips, this is your playground to disrupt, innovate, and make your mark. The datathon culminates in a high-energy showcase, where the boldest, most brilliant ideas will shine and be rewarded.
                        </p>

                        <p className="mt-4 text-lg leading-relaxed font-titillium">
                            We prioritize productivity and security, fostering effective teamwork and protecting intellectual property. For many, the relationships formed during the hackathon could lead to future collaborations or career opportunities, making this event a valuable stepping stone in their professional journey.
                            Are you ready to hack the future? Join us this September 13&14 for an unforgettable experience that promises to inspire, challenge, and unleash your potential. “Create. Collaborate. Conquer”.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;

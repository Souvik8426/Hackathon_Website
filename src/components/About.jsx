import React from 'react';

const About = () => {
    return (
        <div className="bg-gradient-to-b from-transparent via-black to-transparent custom-blur text-white p-6 md:p-10">
            <div className="w-screen md:w-1/2 mx-auto mt-4 md:mt-0 text-center">
                <div className='text-4xl md:text-6xl font-bold mb-5 text-white font-rampart'>
                    <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                        About
                    </span>
                </div>
                <div className='text-4xl md:text-6xl font-bold mb-5 text-white font-rampart'>
                    <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                        Datathon 2024
                    </span>
                </div>
                <p className="mt-4 md:mt-6 text-base md:text-lg leading-relaxed font-titillium mr-10">
                    Upcoming Biggest Data Science Hackathon: "Empowering change through data-driven solutions". Unlock the Power of Data at the Datatrix’s Datathon 2024 —where innovation ignites, creativity sparks, and data-driven brilliance takes center stage!
                </p>

                <p className="mt-4 text-base md:text-lg leading-relaxed font-titillium mr-10">
                    Hosted by the trailblazing Big Data Analytics Department from SRM IST RAMAPURAM, this adrenaline-fueled event is your chance to dive deep into the world of data science and emerge with game-changing solutions that can revolutionize industries.
                </p>

                <p className="mt-4 text-base md:text-lg leading-relaxed font-titillium mr-10">
                    With expert mentors guiding your journey, and cutting-edge tools at your fingertips, this is your playground to disrupt, innovate, and make your mark. The datathon culminates in a high-energy showcase, where the boldest, most brilliant ideas will shine and be rewarded.
                </p>

                <p className="mt-4 text-base md:text-lg leading-relaxed font-titillium mr-10">
                    We prioritize productivity and security, fostering effective teamwork and protecting intellectual property. For many, the relationships formed during the hackathon could lead to future collaborations or career opportunities, making this event a valuable stepping stone in their professional journey.
                    Are you ready to hack the future? Join us this September 13&14 for an unforgettable experience that promises to inspire, challenge, and unleash your potential.
                </p>
                <p className="mt-4 text-2xl md:text-4xl font-bold leading-relaxed font-titillium mr-10">
                    “Create. Collaborate. Conquer”
                </p>
            </div>
        </div>
    );
};

export default About;

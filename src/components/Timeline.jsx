import React from 'react';

const Timeline = () => {
    return (
        <section className="min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-transparent via-black to-transparent custom-blur">
            <div className="text-6xl font-bold mb-5 text-white font-rampart text-center py-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-fuchsia-500 via-30% to-purple-500 to-90%">
                    Timeline
                </span>
            </div>
            <div id="schedule" className="bg-transparent flex items-center font-titillium">
                <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 text-white">
                    {/* Registration */}
                    <div className="flex flex-row-reverse md:contents">
                        <div className="w-full max-w-[35rem] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1 ">August 19</h3>
                            <h5 className="text-sm text-violet-300">06:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Registration Opens: Mark your calendars for August 19 as registration kicks off for our
                                upcoming hackathon! Get ready to put your skills, creativity, and innovation to the test.
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                    </div>

                    {/* approval */}
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                        <div className="w-full max-w-[35rem] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">August 26</h3>
                            <h5 className="text-sm text-violet-300"></h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Approval Notifications: Keep an eye on your inbox between August 26 and September 7 for
                                confirmation of your participation. Approvals will be rolling out during this period.
                            </p>
                        </div>
                    </div>

                    {/* check in */}
                    <div className="flex flex-row-reverse md:contents">
                        <div className="w-full max-w-[35rem] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                September 13 : Day 01
                            </h3>
                            <h5 className="text-sm text-violet-300">10:00 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Check-In: Start your day by checking in for the most anticipated hackathon of the
                                year. Connect with fellow participants and gear up for an exciting experience.
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-start justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:contents">
                        <div className="w-full max-w-[35rem] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1 ">Inauguration & Speakers' Session</h3>
                            <h5 className="text-sm text-violet-300">10:30 AM - 11:00 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Join us for the grand opening ceremony followed by insightful sessions with industry experts
                                and thought leaders, designed to inspire and motivate you.
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-start justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:contents">
                        <div className="w-full max-w-[35rem] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Hackathon Begins
                            </h3>
                            <h5 className="text-sm text-violet-300">11:15 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                The hacking begins! Collaborate with your team and start transforming your ideas into reality
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-start justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:contents">
                        <div className="w-full max-w-[35rem] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Lunch
                            </h3>
                            <h5 className="text-sm text-violet-300">1:30 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Take a well-deserved break with a tasty lunch. Use this time to recharge and share your
                                experiences with other participants.
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-start justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                    </div>

                    <div className="flex flex-row-reverse md:contents">
                        <div className="w-full max-w-[35rem] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Mentor Round 01
                            </h3>
                            <h5 className="text-sm text-violet-300">8:00 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                The hackathon comes to a close. Submit your final projects and prepare for the judging phase.
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-start justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse md:contents">
                        <div className="w-full max-w-[35rem] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Dinner
                            </h3>
                            <h5 className="text-sm text-violet-300">8:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Refuel with a delicious dinner. Connect with fellow participants and discuss your progress.
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-start justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                    </div>
                    <div className="flex flex-row-reverse md:contents">
                        <div className="w-full max-w-[35rem] col-start-1 col-end-5 p-4 rounded-xl my-4 ml-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Mentor Round 02
                            </h3>
                            <h5 className="text-sm text-violet-300">11:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Demonstrate the progress you've made and the unique features of your product to the judges.
                                Show what sets your project apart.
                            </p>
                        </div>
                        <div className="col-start-5 col-end-6 md:mx-auto relative mr-10">
                            <div className="h-full w-6 flex items-start justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                    </div>

                    {/* Closing Ceremony */}
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                        <div className="w-full max-w-[35rem] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                September 14 : Day 02
                            </h3>
                            <h5 className="text-sm text-violet-300">12:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Begin Day 2 with a hearty breakfast. Recharge for another day of innovation and creativity.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                        <div className="w-full max-w-[35rem] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Mentoring Round 03
                            </h3>
                            <h5 className="text-sm text-violet-300">8:30 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Continue showcasing your project's progress and functionality to the judges, highlighting what
                                makes your project unique.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                        <div className="w-full max-w-[35rem] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Project Summation
                            </h3>
                            <h5 className="text-sm text-violet-300">11:15 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Wrap up your work and prepare your project for the final presentation.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                        <div className="w-full max-w-[35rem] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Final Judging
                            </h3>
                            <h5 className="text-sm text-violet-300">11:30 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Present your completed project to the judges and audience. Show how far you've come and the
                                new features you've added.
                            </p>
                        </div>
                    </div>
                    <div className="flex md:contents">
                        <div className="col-start-5 col-end-6 mr-10 md:mx-auto relative">
                            <div className="h-full w-6 flex items-center justify-center">
                                <div className="h-full w-1 bg-blue-200 pointer-events-none"></div>
                            </div>
                            <div className="w-6 h-6 absolute top-7 -mt-3 rounded-full border-4 border-purple-500 bg-purple-300 shadow-lg"></div>
                        </div>
                        <div className="w-full max-w-[35rem] col-start-6 col-end-10 p-4 rounded-xl my-4 mr-auto shadow-md border-2 border-[#A555EC] shadow-[#509f9b54]">
                            <h3 className="font-semibold text-lg mb-1">
                                Results Announcement and Closing Ceremony
                            </h3>
                            <h5 className="text-sm text-violet-300">1:00 PM - 2:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                The moment you've been waiting for is here! Discover the winners as we announce the results.
                                Make your final pitch and reflect on the incredible journey you've experienced. Celebrate the
                                innovation, collaboration, and connections made during Datathon'24. We're excited to see you
                                bring your ideas to life and look forward to igniting a spark of innovation together!                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

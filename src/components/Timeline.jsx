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
                                September 13 : Day 01,
                            </h3>
                            <h3 className="font-semibold text-lg mb-1 ">Check in and RSVP at Guvi</h3>
                            <h5 className="text-sm text-violet-300">04:30 PM to 05:00</h5>
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
                            <h3 className="font-semibold text-lg mb-1 ">Induction Ceremony</h3>
                            <h5 className="text-sm text-violet-300">05:00 PM to 06:00 PM</h5>
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
                            <h5 className="text-sm text-violet-300">06:00 PM</h5>
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
                                Overview and Presentation
                            </h3>
                            <h5 className="text-sm text-violet-300">6:15 PM to 6:45 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                During this time, we’ll provide a detailed overview of the event, including the rules, guidelines, and expectations.
                                You’ll also be introduced to the problem statements that you’ll be tackling over the next 24 hours. Our team will walk you through the resources available to you, key deadlines, and how to submit your final projects.
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
                            <h5 className="text-sm text-violet-300">09:00 PM to 10:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                End Day 1 with a delicious dinner. Refuel and unwind after a day of innovation and creativity.
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
                                September 14 : Day 02,
                            </h3>
                            <h3 className="font-semibold text-lg mb-1">
                                1st Mentoring round starts
                            </h3>
                            <h5 className="text-sm text-violet-300">12:00 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Our Technical Team will be on hand to review your progress, provide feedback, and help troubleshoot any technical challenges you may be facing. Whether you need assistance with coding, data analysis, or conceptual clarity, this session is designed to ensure that you’re on the right track.
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
                                Midnight refreshment
                            </h3>
                            <h5 className="text-sm text-violet-300">02:00 AM to 03:00 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Refuel and recharge with a selection of snacks and beverages, giving you the energy boost you need to power through the remaining hours of the hackathon.
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
                                Breakfast
                            </h3>
                            <h5 className="text-sm text-violet-300">07:00 AM to 08:00 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                Start Day 2 with a nourishing breakfast. Fuel up for another exciting day of innovation and creativity.
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
                                Second Mentoring round starts by Mentors
                            </h3>
                            <h5 className="text-sm text-violet-300">08:15 AM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                            In this round, mentors will review your progress, provide critical feedback, and help you overcome any remaining challenges. Whether you’re looking to fine-tune your solution or need advice on next steps, this mentoring round is designed to give you the support you need as you head into the final hours of the hackathon.
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
                                Lunch
                            </h3>
                            <h5 className="text-sm text-violet-300">11:30 AM to 12:30 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                After hours of intense work, this lunch session provides a chance to relax, recharge, and enjoy a meal with your fellow participants.
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
                                Project deployment and PPT
                            </h3>
                            <h5 className="text-sm text-violet-300">12:30 PM to 02:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                This crucial period is dedicated to finalizing your project and preparing your presentation.
                                During this time, you will deploy your solution, ensuring everything is working smoothly, and create a compelling PPT that clearly communicates your project's objectives, approach, and results.
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
                                Judging round
                            </h3>
                            <h5 className="text-sm text-violet-300">02:00 PM to 04:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                The Judging Round is a pivotal moment in the Datathon—it's where all your hard work and dedication pay off. Present confidently and clearly, and demonstrate why your project stands out among the rest. Best of luck!
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
                                Refreshments
                            </h3>
                            <h5 className="text-sm text-violet-300">04:00 PM to 05:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                This break provides a well-deserved opportunity to relax, socialize, and recharge after a full day of innovation and presentations.
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
                                Valediction and announcement of the winners
                            </h3>
                            <h5 className="text-sm text-violet-300">05:00 PM to 06:00 PM</h5>
                            <br />
                            <p className="leading-tight text-justify">
                                This is a moment of celebration and recognition for all your efforts. Gather to share in the excitement, congratulate your peers, and wrap up the event on a high note. Congratulations to everyone for their hard work and dedication!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

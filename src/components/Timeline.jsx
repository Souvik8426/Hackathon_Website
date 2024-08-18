import React from 'react';

const Timeline = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-transparent via-black to-transparent custom-blur">
            <div className="text-6xl font-bold mb-5 text-white font-rampart text-center py-10">
                <span className="bg-clip-text text-transparent bg-gradient-to-bl from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">
                    Timeline
                </span>
            </div>
            {/* component */}
            <div className="bg-transparent mx-auto w-full h-full container sm:flow-reverse">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border" style={{ left: '50%' }}></div>
                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">1</h1>
                        </div>
                        <div className="order-1 text-white bg-blur rounded-lg shadow-xl w-5/12 px-6 py-4 border border-[#A555EC]">
                            <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    {/* left timeline */}
                    <div className="mb-8 flex justify-between flex-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">2</h1>
                        </div>
                        <div className="order-1 text-white bg-blur rounded-lg shadow-xl w-5/12 px-6 py-4 border border-[#A555EC]">
                            <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    {/* right timeline */}
                    <div className="mb-8 flex justify-between items-center w-full right-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto font-semibold text-lg text-white">3</h1>
                        </div>
                        <div className="order-1 text-white bg-blur rounded-lg shadow-xl w-5/12 px-6 py-4 border border-[#A555EC]">
                            <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>

                    {/* left timeline */}
                    <div className="mb-8 flex justify-between flex-reverse items-center w-full left-timeline">
                        <div className="order-1 w-5/12"></div>
                        <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
                            <h1 className="mx-auto text-white font-semibold text-lg">4</h1>
                        </div>
                        <div className="order-1 text-white bg-blur rounded-lg shadow-xl w-5/12 px-6 py-4 border border-[#A555EC]">
                            <h3 className="mb-3 font-bold text-xl">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

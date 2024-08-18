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
            <div className="bg-transparent mx-auto w-full h-full container">
                <div className="relative wrap overflow-hidden p-10 h-full">
                    <div className="absolute border-white h-[24rem] border my-[3rem] hidden xl:block" style={{ left: '50%' }}></div>
                    <div className="absolute border-white h-[27rem] border my-[3rem] hidden sm:block 2xl:hidden" style={{ left: '50%' }}></div>
                    <div className="absolute border-white h-[30rem] border my-[4rem] hidden sm:block lg:hidden" style={{ left: '50%' }}></div>
                    {/* right timeline */}
                    <div className="mb-8 flex flex-col sm:flex-row justify-between items-center w-full right-timeline">
                        <div className="order-1 sm:w-5/12 w-full"></div>
                        <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full sm:mx-0 mx-auto">
                            <h1 className="mx-auto font-semibold text-lg text-grey-800">1</h1>
                        </div>
                        <div className="order-1 text-white bg-blur rounded-lg shadow-xl sm:w-5/12 w-full px-6 py-4 mt-4 sm:mt-0 border border-[#A555EC]">
                            <h3 className="mb-3 font-bold text-xl text-center sm:text-left">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100 text-center sm:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>

                    {/* left timeline */}
                    <div className="mb-8 flex flex-col sm:flex-row-reverse justify-between items-center w-full left-timeline">
                        <div className="order-1 sm:w-5/12 w-full"></div>
                        <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full sm:mx-0 mx-auto">
                            <h1 className="mx-auto text-grey-800 font-semibold text-lg">2</h1>
                        </div>
                        <div className="order-1 text-white bg-blur rounded-lg shadow-xl sm:w-5/12 w-full px-6 py-4 mt-4 sm:mt-0 border border-[#A555EC]">
                            <h3 className="mb-3 font-bold text-xl text-center sm:text-left">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100 text-center sm:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>

                    {/* right timeline */}
                    <div className="mb-8 flex flex-col sm:flex-row justify-between items-center w-full right-timeline">
                        <div className="order-1 sm:w-5/12 w-full"></div>
                        <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full sm:mx-0 mx-auto">
                            <h1 className="mx-auto font-semibold text-lg text-grey-800">3</h1>
                        </div>
                        <div className="order-1 text-white bg-blur rounded-lg shadow-xl sm:w-5/12 w-full px-6 py-4 mt-4 sm:mt-0 border border-[#A555EC]">
                            <h3 className="mb-3 font-bold text-xl text-center sm:text-left">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100 text-center sm:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>

                    {/* left timeline */}
                    <div className="mb-8 flex flex-col sm:flex-row-reverse justify-between items-center w-full left-timeline">
                        <div className="order-1 sm:w-5/12 w-full"></div>
                        <div className="z-20 flex items-center order-1 bg-white shadow-xl w-8 h-8 rounded-full sm:mx-0 mx-auto">
                            <h1 className="mx-auto text-grey-800 font-semibold text-lg">4</h1>
                        </div>
                        <div className="order-1 text-white bg-blur rounded-lg shadow-xl sm:w-5/12 w-full px-6 py-4 mt-4 sm:mt-0 border border-[#A555EC]">
                            <h3 className="mb-3 font-bold text-xl text-center sm:text-left">Lorem Ipsum</h3>
                            <p className="text-sm leading-snug tracking-wide text-opacity-100 text-center sm:text-left">Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;

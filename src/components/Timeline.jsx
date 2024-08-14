import React from 'react';

const Timeline = () => {
    return (
        <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-gradient-to-b from-lime-950 to-black">
            <div className="w-full max-w-screen mx-auto px-4 md:px-6">
                <div className="flex flex-col justify-center divide-y divide-slate-200">
                    <div className="w-full max-w-3xl mx-auto">
                        <div className='bg-black text-6xl font-bold mb-5 text-white font-orbitron text-center py-10'>
                            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-green-500 to-yellow-500">
                                Timeline
                            </span>
                        </div>
                        <div className="-my-1 mb-10">
                            <div className="relative pl-8 sm:pl-32 group">
                                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">The origin</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2020</time>
                                    <div className="text-xl font-bold text-white">Acme was founded in Milan, Italy</div>
                                </div>
                                <div className="text-green-200">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                            </div>

                            <div className="relative pl-8 sm:pl-32 py-6 group">
                                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">The milestone</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2021</time>
                                    <div className="text-xl font-bold text-white">Reached 5K customers</div>
                                </div>
                                <div className="text-red-200">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                            </div>

                            <div className="relative pl-8 sm:pl-32 py-6 group">
                                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">The acquisitions</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2022</time>
                                    <div className="text-xl font-bold text-white">Acquired various companies, including Technology Inc.</div>
                                </div>
                                <div className="text-purple-200">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                            </div>

                            <div className="relative pl-8 sm:pl-32 py-6 group">
                                <div className="font-medium text-indigo-500 mb-1 sm:mb-0">The IPO</div>
                                <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-indigo-600 after:border-4 after:box-content after:border-slate-50 after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                                    <time className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">May, 2023</time>
                                    <div className="text-xl font-bold text-white">Acme went public at the New York Stock Exchange</div>
                                </div>
                                <div className="text-orange-200">Pretium lectus quam id leo. Urna et pharetra pharetra massa massa. Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus risus.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Timeline;
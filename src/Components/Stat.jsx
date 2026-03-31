import React from 'react';

const Stat = () => {
    return (
        <div style={{ background: 'linear-gradient(to right, #7c3aed, #a855f7)' }}>

            <div className='container mx-auto flex justify-center py-10'>

                <div className="shadow-none border-none stats stats-vertical lg:stats-horizontal bg-transparent text-white">
                    <div className="stat">

                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
                                ></path>
                            </svg>
                        </div>

                        <div className="text-5xl">50K+</div>
                        <div className="stat-desc text-gray-200 text-sm mt-2">Active Users</div>
                    </div>

                    <div className="stat">

                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                                ></path>
                            </svg>
                        </div>

                        <div className="text-5xl">200+</div>
                        <div className="stat-desc text-gray-200 text-sm mt-2">Premium Tools</div>
                    </div>

                    <div className="stat">

                        <div className="stat-figure text-secondary">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block h-8 w-8 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M13 10V3L4 14h7v7l9-11h-7z"
                                ></path>
                            </svg>
                        </div>

                        <div className="text-5xl">4.9</div>
                        <div className="stat-desc text-gray-200 text-sm mt-2">Rating</div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Stat;
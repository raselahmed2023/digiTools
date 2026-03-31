import React from 'react';
import Play from '../assets/Play.png'
import Banner from "../assets/banner.png"

const Hero = () => {
    return (
        <div>

            <div className="hero bg-base-200 min-h-screen space-y-4">
                <div className="hero-content flex-col lg:flex-row-reverse gap-4">
                    <img
                        src={Banner}
                        className="max-w-sm rounded-lg shadow-2xl ml-5"
                    />
                    <div className=''>

                        <div className='flex gap-2 items-center border rounded-full p-2 w-70 h-8 border-purple-300'>

                            <div className="inline-grid *:[grid-area:1/1]">
                                <div className="status status-primary animate-ping"></div>
                                <div className="status status-primary"></div>
                            </div> 
                            <h1 className='text-purple-700'>New: AI-Powered Tools Available</h1>
                        </div>



                        <h1 className="text-5xl font-bold mt-3">Supercharge Your <br /> Digital Workflow</h1>
                        <p className="py-6">Access premium AI tools, design assets, templates, and productivity<br />
                            software—all in one place. Start creating faster today.<br />Explore Products
                        </p>
                        <button className="btn btn-primary rounded-full">Explore Products</button>
                        <button className="btn btn-outline btn-primary rounded-full ml-3"> <img src={Play} alt="" />Watch Demo</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Hero;
import React from 'react';

const WorkFlow = () => {
    return (
        <div style={{ background: 'linear-gradient(to right, #7c3aed, #a855f7)' }}>
            <div className='text-center mt-10 p-17'>
                <h2 className='text-4xl font-bold text-white'>Ready to Transform Your Workflow?</h2>
                <p className='mt-2 text-white '>Join thousands of professionals who are already using Digitools to work smarter.Start your free trial today.</p>
                <div className='flex gap-4 justify-center mt-6 mb-4'>
                    <button className="btn btn-soft btn-primary rounded-full">Explore Products</button>
                    <button className="btn btn-outline rounded-full text-white">View Pricing</button>
                </div>
                <p className='text-white'>14-day free trial • No credit card required • Cancel anytime</p>
            </div>
            
        </div>
    );
};

export default WorkFlow;
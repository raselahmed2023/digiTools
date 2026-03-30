import React, { useState } from 'react';

const Card = ({model}) => {
     const [isSubscibre, setIsSubcribe] = useState(false);
       const handleSubcription = () => {
        setIsSubcribe(true);
  }
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-sm ">
                <div className="card-body">
                    <div className=' absolute top-3 right-3'>
                        <span className={`badge badge-sms px-3 py-3 rounded-full
               ${model.tagType === 'best-seller' ? 'bg-yellow-100 text-yellow-700' : ""} 
               ${model.tagType === 'popular' ? 'bg-purple-100 text-purple-700' : ""} 
               ${model.tagType === 'new' ? 'bg-green-100 text-green-700' : ""} 
                   `}>{model.tag}</span>
                    </div>
                    <div className="text-3xl mb-2">{model.icon}</div>
                    <div className="">
                        <h2 className="text-3xl font-bold">{model.name}</h2>
                        <p className='mt-3 mb-3'>{model.description}</p>
                        <span className="text-xl font-bold">${model.price}/{model.period}</span>
                    </div>
                    <ul className="mt-2 flex flex-col gap-2 text-sm">
                        {model.features.map((feature, i) => (
                            <li>
                                <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24"
                                    stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                                <span>{feature}</span>
                            </li>))}
                    </ul>
                    <div className="mt-6 mb-4">
                        <button onClick={handleSubcription} className="btn btn-primary btn-block rounded-full">{isSubscibre ? "Added to Cart!" : "Buy Now"}
                        </button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Card;
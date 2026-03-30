import React, { use } from 'react';
import Card from './Card';

const Models = ({ modelPromise }) => {

    const models = use(modelPromise);

    return (
        <div className='py-20'>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center mt-5'>
                {models.map(model => <Card model={model}></Card>)}


            </div>

        </div>
    );
};

export default Models;
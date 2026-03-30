import React, { use } from 'react';
import Card from './Card';

const Models = ({ modelPromise, carts, setCarts }) => {

    const models = use(modelPromise);

    return (
        <div className='py-20'>


            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 justify-items-center mt-5'>
                {models.map(model => <Card key={model.id} model={model} carts={carts} setCarts={setCarts}></Card>)}


            </div>

        </div>
    );
};

export default Models;
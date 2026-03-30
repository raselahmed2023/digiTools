import React from 'react';

const Cart = ({ carts, setCarts }) => {
    const totalPrice = carts.reduce((sum, item) => sum + item.price, 0);

    const paymentCard = () => {
        setCarts([])
    }
    
    const cardDelete = (item) => {
        const filterArray = carts.filter(c => c.id !== item.id)
        setCarts(filterArray);

    }

    return (
        <div>

            <div className='border border-gray-200 rounded-lg container mx-auto p-8 mt-5 '>
                <h2 className='text-4xl font-bold mb-10'>Your Cart</h2>

                {
                    carts.length === 0 ? <p className='text-center text-2xl'>Your Card is Empty. <br />Buy Some Tools for more productive days.</p> :
                        <>
                            {carts.map(item => <div key={item.id} className=' rounded-lg p-3 shadow gap-5 mb-2 flex justify-between items-center'>
                                <div className='flex items-center gap-3 shadows-sm'>
                                    <span className='px-1 py-1 rounded-full bg-gray-100'>{item.icon}</span>
                                    <div>
                                        <h2 className='text-2xl font-bold'>{item.name}</h2>
                                        <p className='text-xl'>${item.price}</p>
                                    </div>
                                </div>
                                <div><p onClick={() => cardDelete(item)} className=' btn text-red-400'>Remove</p></div>
                            </div>)}
                            <div className='flex justify-between bg-gray-100 p-4 rounded-lg'>
                                <h3 className='font-bold text-2xl text-black'>Total</h3>
                                <p className='font-bold text-2xl text-black'>${totalPrice}</p>
                            </div>

                            <button onClick={paymentCard} className='btn bg-blue-700 p-6 w-full mt-3 text-xl rounded-full text-white'>Proceed to Checkout</button>
                        </>
                }

            </div>

        </div>
    );
};

export default Cart;
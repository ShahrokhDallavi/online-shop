import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

// Components
import Cart from './shared/Cart';

// helper
import ScrollToTop from '../helper/ScrollToTop';

// Context
import { CartContext } from '../context/CartContextProvider';

// Images
import emptycart from '../assets/emptycart.svg'

const ShopCart = () => {

    const {state, dispatch} = useContext(CartContext);

    return (
        <div className='min-h-screen pb-64'>
            <ScrollToTop />
            <div className='mx-4 pt-2'>
                {state.selectedItems.map(item => <Cart key={item.id} data={item} />)}
            </div>
            <div className="container flex flex-col justify-center items-center w-full">
                {
                    state.itemsCounter > 0 && <div className="fixed bottom-0 rounded-xl w-full bg-white/25 backdrop-blur pt-4 border-t-2 border-white/50 max-w-[600px] pb-24">
                        <p className='font-bold text-lg px-5 pb-2 tracking-wider'>Price Details</p>
                        <div>
                            
                        </div>
                        <p className="text-md tracking-wider px-5">Total Items: <span className="text-primaryColor font-bold">{state.itemsCounter}</span></p>
                        <p className="text-md tracking-wider px-5">Total Payments: <span className="text-primaryColor font-bold"><sup classNameName='text-sm'>$</sup>{state.total}</span></p>
                        <div className="flex justify-between text-white mt-4 px-5">
                            <button onClick={() => dispatch({type: "CHECKOUT"})} className="bg-primaryColor rounded-full px-16 md:px-44 py-2 shadow-xl">Check out</button>
                            <button onClick={() => dispatch({type: "CLEAR"})} className="bg-secondaryColor rounded-full px-8 py-2">Clear</button>
                        </div>
                    </div>
                }

                {
                    state.checkout && <div className="flex flex-col items-center text-center px-4 pt-44">
                        <div className="relative w-10 h-10 mb-8">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-check opacity-75"></span>
                            <span className="relative inline-flex items-center justify-center rounded-full h-10 w-10 bg-check ">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#fff" class="size-7">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 12.75 11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
                                </svg>
                            </span>
                        </div>
                        <h3 className="font-bold mb-4">Your Payment is Successfull</h3>
                        <h5 className="text-sm leading-relaxed">Thank you for your payment!<br/>We hope our products bring a smile to your face and add a touch of joy to your day.<br/>Thank you for your trust and support!</h5>
                        <button className="px-4 py-2 rounded-2xl bg-secondaryColor text-white mt-8">
                            <Link to="/products">Buy More</Link>
                        </button>
                    </div>
                }

                {
                    !state.checkout && state.itemsCounter === 0  && <div className="flex flex-col items-center text-center px-4 pt-32">
                        <img src={emptycart} alt='emptycart'className="w-64" />
                        <h5 className="text-lg font-bold mb-4">empty cart!</h5>
                        <h3 className="text-sm mb-8">You can return to the main page to see more products.</h3>
                        <Link to="/products">
                            <button className='flex bg-secondaryColor text-white px-4 py-2 rounded-2xl'>
                            back to shop
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ml-2" >
                                <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 21v-7.5a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V21m-4.5 0H2.36m11.14 0H18m0 0h3.64m-1.39 0V9.349M3.75 21V9.349m0 0a3.001 3.001 0 0 0 3.75-.615A2.993 2.993 0 0 0 9.75 9.75c.896 0 1.7-.393 2.25-1.016a2.993 2.993 0 0 0 2.25 1.016c.896 0 1.7-.393 2.25-1.015a3.001 3.001 0 0 0 3.75.614m-16.5 0a3.004 3.004 0 0 1-.621-4.72l1.189-1.19A1.5 1.5 0 0 1 5.378 3h13.243a1.5 1.5 0 0 1 1.06.44l1.19 1.189a3 3 0 0 1-.621 4.72M6.75 18h3.75a.75.75 0 0 0 .75-.75V13.5a.75.75 0 0 0-.75-.75H6.75a.75.75 0 0 0-.75.75v3.75c0 .414.336.75.75.75Z" />
                            </svg>
                            </button>
                        </Link>
                    </div>
                }
            </div>
        </div>
    );
};

export default ShopCart;
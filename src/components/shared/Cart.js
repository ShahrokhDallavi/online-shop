import React, { useContext } from 'react';

// Component
import ScrollToTop from '../../helper/ScrollToTop';

// Context
import { CartContext } from '../../context/CartContextProvider';

// Function
import { shorten } from '../../helper/function';

const Cart = (props) => {

    const {dispatch} = useContext(CartContext);
    const {image, title, price, quantity} = props.data;

    return (
        <div className="flex justify-between items-center bg-white border border-borderColor rounded-lg shadow-lg my-2 px-4 py-4">
            <ScrollToTop />
            <img src={image} alt="product" className="w-14" />
            <div className='font-bold mx-8'>
                <h3 className="text-sm text-black mb-2">{shorten(title)}</h3>
                <p className="text-secondaryColor"><sup classNameName='text-sm'>$</sup>{price}</p>
            </div>
            <div className="flex">
                {
                    quantity > 1 ?
                    <button onClick={() => dispatch({type: "DECREASE", payload: props.data})}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button> : 
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: props.data})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                        </svg>
                    </button> 
                }
                <div className="inline-flex justify-center text-primaryColor font-bold w-6 h-6 mx-2">
                    <span>{quantity}</span>
                </div>
                <button onClick={() => dispatch({type: "INCREASE", payload: props.data})}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default Cart;
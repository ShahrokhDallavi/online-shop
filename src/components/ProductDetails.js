import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

// Component
import ScrollToTop from '../helper/ScrollToTop';

// context
import { ProductsContext } from "../context/ProductContextProvider";
import { FavoritesContext } from "../context/FavoriteContextProvider";

// Modal component
const Modal = ({ message, onClose }) => (
    <div className="flex items-center justify-center fixed inset-0 z-50">
        <div className="bg-black/50 absolute inset-0"></div>
        <div className="bg-black/80 backdrop-blur rounded-3xl p-4 shadow-lg z-10 mx-8 text-center text-white">
            <p className="font-light px-8">{message}</p>
            <button onClick={onClose} className="mt-6 px-4 py-2 bg-primaryColor rounded-xl shadow-[0px_2px_20px_2px_rgba(255,91,0,0.3)]">Close</button>
        </div>
    </div>
);


const ProductDetails = () => {
    const { id } = useParams();
    const data = useContext(ProductsContext);
    const { addFavorite, favorites } = useContext(FavoritesContext);
    const [ message, setMessage ] =useState(""); 

    const product = data[id - 1];
    const { image, title, description, price, category } = product;

    const shareData = {
        image: image,
        title: title,
        text: description,
        url: id,
    };

    const handleShare = async () => {
        try {
            await navigator.share(shareData);
        } catch (err) {
            console.error('Error sharing:', err);
        }
    };

    const handleAddFavorite = () => {
        if (favorites.some (fav => fav.id === product.id)) {
            setMessage("Product has already been added to favorites!");
        } else {
            addFavorite(product);
            setMessage("Product added to favorites")
        }
    };

    const handeleCloseModal = () => {
        setMessage("");
    }
    
    return (
        <div className="text-black font-bold bg-white">
            <ScrollToTop />
            <div className='flex justify-end items-center p-5'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='mx-3' onClick={handleShare}>
                    <path fill="currentColor" d="M18 22q-1.25 0-2.125-.875T15 19q0-.175.025-.363t.075-.337l-7.05-4.1q-.425.375-.95.588T6 15q-1.25 0-2.125-.875T3 12t.875-2.125T6 9q.575 0 1.1.213t.95.587l7.05-4.1q-.05-.15-.075-.337T15 5q0-1.25.875-2.125T18 2t2.125.875T21 5t-.875 2.125T18 8q-.575 0-1.1-.212t-.95-.588L8.9 11.3q.05.15.075.338T9 12t-.025.363t-.075.337l7.05 4.1q.425-.375.95-.587T18 16q1.25 0 2.125.875T21 19t-.875 2.125T18 22m0-16q.425 0 .713-.287T19 5t-.288-.712T18 4t-.712.288T17 5t.288.713T18 6M6 13q.425 0 .713-.288T7 12t-.288-.712T6 11t-.712.288T5 12t.288.713T6 13m12 7q.425 0 .713-.288T19 19t-.288-.712T18 18t-.712.288T17 19t.288.713T18 20m0-1" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 256 256" className='mx-3 cursor-pointer' onClick={handleAddFavorite}>
                    <path fill="currentColor" d="M178 40c-20.65 0-38.73 8.88-50 23.89C116.73 48.88 98.65 40 78 40a62.07 62.07 0 0 0-62 62c0 70 103.79 126.66 108.21 129a8 8 0 0 0 7.58 0C136.21 228.66 240 172 240 102a62.07 62.07 0 0 0-62-62m-50 174.8c-18.26-10.64-96-59.11-96-112.8a46.06 46.06 0 0 1 46-46c19.45 0 35.78 10.36 42.6 27a8 8 0 0 0 14.8 0c6.82-16.67 23.15-27 42.6-27a46.06 46.06 0 0 1 46 46c0 53.61-77.76 102.15-96 112.8" />
                </svg>
            </div>
            {message && <Modal message={message} onClose={handeleCloseModal} />}
            <div className='w-full h-80'>
                <img src={image} alt="product" className="w-full h-64 px-5" />
            </div>
            <div className="border-t-2 border-borderColor rounded-t-3xl px-5">
                <h1 className="pt-4 text-xl">{title}</h1>
                <h2 className="text-primaryColor text-sm tracking-wider mt-2 mb-4">category: {category}</h2>
                <p className='pb-2 text-lg tracking-widest '>Description</p>
                <p className="text-justify text-sm leading-relaxed font-light">{description}</p>
                <div className="flex mt-6 items-center pb-5 border-b-2 border-seconderyColor mb-5">
                    <div className="flex">
                        <span className="mr-3">Color</span>
                        <button className="border-2 border-gray rounded-full w-6 h-6 focus:border-secondaryColor"></button>
                        <button className="border-2 border-gray ml-1 bg-error rounded-full w-6 h-6 focus:border-secondaryColor"></button>
                        <button className="border-2 border-gray ml-1 bg-primaryColor rounded-full w-6 h-6 focus:border-secondaryColor"></button>
                    </div>
                    <div className="flex ml-6 px-7 items-center">
                        <span className="mr-3">Size</span>
                        <div className="relative">
                            <select className="rounded border appearance-none border-gray py-2 focus:outline-none pl-3 pr-10">
                                <option>SM</option>
                                <option>M</option>
                                <option>L</option>
                                <option>XL</option>
                            </select>
                            <span className="absolute right-0 top-0 h-full w-10 text-center pointer-events-none flex items-center justify-center">
                                <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4" viewBox="0 0 24 24">
                                    <path d="M6 9l6 6 6-6"></path>
                                </svg>
                            </span>
                        </div>
                    </div>
                </div>
                <div className="flex items-center pb-24">
                    <span className="text-2xl"><sup className='text-sm'>$ </sup>{price}</span>
                    <button className="flex ml-auto text-white bg-primaryColor py-2 px-6 rounded-2xl font-medium"><Link to="/products">Back to shop </Link></button>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;
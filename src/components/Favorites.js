import React, { useContext } from 'react';

// Context
import { FavoritesContext } from '../context/FavoriteContextProvider';

// helper
import { shorten } from '../helper/function';
import ScrollToTop from '../helper/ScrollToTop';


const Favorites = () => {
    const { favorites, removeFavorite } = useContext(FavoritesContext);

    const handleRemove = (productId) => {
        removeFavorite(productId);
    };

    return (
        <div className="flex flex-col justify-start min-h-screen pb-24">
            <ScrollToTop />
            <div className="container pt-2">
                {favorites.length === 0 ? (
                    <div className='flex flex-col items-center text-center mt-48'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10em" height="10em" viewBox="0 0 24 24" className='opacity-25'>
	                        <path fill="gray" d="m19 23.3l-.6-.5c-2-1.9-3.4-3.1-3.4-4.6c0-1.2 1-2.2 2.2-2.2c.7 0 1.4.3 1.8.8c.4-.5 1.1-.8 1.8-.8c1.2 0 2.2.9 2.2 2.2c0 1.5-1.4 2.7-3.4 4.6zM6 22a2 2 0 0 1-2-2V4c0-1.11.89-2 2-2h1v7l2.5-1.5L12 9V2h6a2 2 0 0 1 2 2v9.08L19 13a6.005 6.005 0 0 0-5.2 9z" />
                        </svg>
                        <h5 className="text-lg font-bold my-4">No favorite products yet.</h5>
                        <h3 className="text-sm">You can add items to your favorites by clicking the heart icon on the product details page.</h3>
                    </div>
                ) : (
                    <ul>
                        {favorites.map((product) => (
                            <li key={product.id} className="bg-white border border-borderColor rounded-lg shadow-lg my-2 px-4 py-4">
                                <div className="flex items-center justify-between">
                                    <img src={product.image} alt={product.title} className="w-14" />
                                    <div className='flex flex-col items-center'>
                                        <h2 className="text-xl">{shorten(product.title)}</h2>
                                        <p className='text-sm'>{product.category}</p>
                                    </div>
                                    <button className="bg-secondaryColor p-2 rounded-full " onClick={() => handleRemove(product.id)}>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-5 h-5">
                                            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                                        </svg>
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default Favorites;
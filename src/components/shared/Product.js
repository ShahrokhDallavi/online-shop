import React, { useContext } from 'react';
import { Link } from "react-router-dom"

// function
import { shorten, isInCart, quantityCount} from '../../helper/function';

// Context
import { CartContext } from '../../context/CartContextProvider';
import { FavoritesContext } from '../../context/FavoriteContextProvider';

const Product = ({productData}) => {

    const {state, dispatch} = useContext(CartContext);
    const { addFavorite, removeFavorite,favorites } = useContext(FavoritesContext);
    const isFavorite = favorites.some(item => item.id === productData.id);

    const handleAddFavorite = () => {
        if (isFavorite) {
            removeFavorite(productData);
        } else {
            addFavorite(productData);
        }
    }

    return (
        <div className="bg-white rounded-lg m-2 p-3 shadow-lg text-xs">
            <div className='relative'>
                <Link to={`/products/${productData.id}`}>
                    <img src={productData.image} alt='product' className="w-36 h-24 mt-6" />
                </Link>
                <div className={`inline-flex items-center justify-center rounded-full w-6 h-6 cursor-pointer absolute bottom-24 right-1 ${isFavorite ? 'bg-error' : 'bg-gray'}`} onClick={handleAddFavorite}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24" className='p-1'>
	                    <path fill="white" d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137" />
                    </svg>
                </div>
            </div>
            <h3 className="font-bold  mt-8">{shorten(productData.title)}</h3>
            <p className="font-light ">{productData.category}</p>
            <p className="my-4 font-semibold text-sm"><sup>$</sup> {productData.price}</p>
            <div className="bg-secondaryColor text-white px-4 lg:px-1 py-2 rounded-2xl">
                <div className='flex items-center justify-center'>
                    {quantityCount(state,productData.id) === 1 &&
                    <button onClick={() => dispatch({type: "REMOVE_ITEM", payload: productData})}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ">
                        <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
                        </svg>
                    </button>}
                    {quantityCount(state,productData.id) > 1 && 
                    <button onClick={() => dispatch({type: "DECREASE", payload: productData})}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                        </svg>
                    </button>}
                    {quantityCount(state, productData.id) > 0 && <span className="font-bold text-sm text-primaryColor mx-6">{quantityCount(state, productData.id)}</span>}
                    {
                        isInCart(state, productData.id) ?
                        <button onClick={() => dispatch({type: "INCREASE", payload: productData})}>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                        </button> :
                        <div className='flex items-center justify-center' onClick={() => dispatch({type: "ADD_ITEM", payload: productData})}>
                            <p className='p-1'>Add to Cart</p>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                <path fill="currentColor" d="M17.437 19.934a1 1 0 1 1-2 0a1 1 0 0 1 2 0M6.22 15.668l-.945-10.9a.75.75 0 0 0-.749-.693H3.56a.5.5 0 0 1 0-1h.966a1.75 1.75 0 0 1 1.746 1.617l.139 1.818h13.03c.885 0 1.577.76 1.494 1.638l-.668 7.52a2.5 2.5 0 0 1-2.489 2.267H8.709a2.5 2.5 0 0 1-2.489-2.267m.274-8.158l.722 8.066a1.5 1.5 0 0 0 1.493 1.359h9.069a1.5 1.5 0 0 0 1.493-1.359l.668-7.518a.5.5 0 0 0-.498-.548zm4.454 12.424a1 1 0 1 1-2 0a1 1 0 0 1 2 0" />
                            </svg>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;
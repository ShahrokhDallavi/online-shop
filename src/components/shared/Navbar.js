import React, { useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';

// Context
import { CartContext } from '../../context/CartContextProvider';
import { FavoritesContext } from '../../context/FavoriteContextProvider';

const Navbar = () => {

    const {state} = useContext(CartContext);
    const {favorites} = useContext(FavoritesContext);
    const location = useLocation();

    const getColor = (paths) => paths.includes(location.pathname) ? 'text-[#FF5B00]' : 'text-[#CBCBCB]';
    const getIconColor = (paths) => paths.includes(location.pathname) ? '#FF5B00' : '#CBCBCB';

    return (
        <div className="fixed z-50 bottom-4 w-full px-4 max-w-[600px]">
            <div className='flex justify-around items-center py-3 bg-black/80 backdrop-blur-xl rounded-full'>
                <Link to="/products" className='inline-flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" viewBox="0 0 24 24">
                    <path fill={getIconColor(["/products"])} fill-rule="evenodd" d="M2.52 7.823C2 8.77 2 9.915 2 12.203v1.522c0 3.9 0 5.851 1.172 7.063C4.343 22 6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.212C22 19.576 22 17.626 22 13.725v-1.521c0-2.289 0-3.433-.52-4.381c-.518-.949-1.467-1.537-3.364-2.715l-2-1.241C14.111 2.622 13.108 2 12 2c-1.108 0-2.11.622-4.116 1.867l-2 1.241C3.987 6.286 3.038 6.874 2.519 7.823m6.927 7.575a.75.75 0 1 0-.894 1.204A5.766 5.766 0 0 0 12 17.75a5.766 5.766 0 0 0 3.447-1.148a.75.75 0 1 0-.894-1.204A4.267 4.267 0 0 1 12 16.25a4.267 4.267 0 0 1-2.553-.852" clip-rule="evenodd" />
                </svg>
                    <p className={`text-xs ${getColor(["/products"])}`}>Home</p>
                </Link>
                <Link to="/Cart" className="inline-flex flex-col items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill={getIconColor(["/Cart"])} d="M2.084 2.751a.75.75 0 0 1 .956-.459l.302.106c.616.217 1.14.401 1.552.603c.44.217.819.483 1.103.899c.282.412.398.865.452 1.362c.024.222.037.468.043.738h10.639c1.685 0 3.201 0 3.645.577c.444.577.27 1.447-.076 3.186l-.5 2.425c-.315 1.528-.473 2.293-1.025 2.742c-.551.45-1.332.45-2.893.45H10.98c-2.789 0-4.183 0-5.05-.914S5 12.582 5 9.64V7.038c0-.74 0-1.235-.041-1.615c-.04-.363-.11-.545-.2-.677c-.088-.129-.221-.25-.525-.398c-.322-.158-.761-.314-1.429-.549l-.261-.091a.75.75 0 0 1-.459-.957M7.5 18a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3m9 0a1.5 1.5 0 1 1 0 3a1.5 1.5 0 0 1 0-3" />
                    </svg>
                    <span className="bg-error rounded-full w-5 h-5 absolute inline-flex items-center justify-center text-white ml-6 top-1 text-xs">{state.itemsCounter}</span>
                    <p className={`text-xs ${getColor(["/Cart"])}`}>Cart</p>
                </Link>
                <Link to="/Favorites" className='inline-flex flex-col items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
	                    <path fill={getIconColor(["/Favorites"])} d="M2 9.137C2 14 6.02 16.591 8.962 18.911C10 19.729 11 20.5 12 20.5s2-.77 3.038-1.59C17.981 16.592 22 14 22 9.138c0-4.863-5.5-8.312-10-3.636C7.5.825 2 4.274 2 9.137" />
                    </svg>
                    <span className="bg-error rounded-full w-5 h-5 absolute inline-flex items-center justify-center text-white ml-6 top-1 text-xs">{favorites.length}</span>
                    <p className={`text-xs ${getColor(["/Favorites"])}`}>Favorite</p>
                </Link>
                <Link to="./loginbanner" className='inline-flex flex-col items-center'>
                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                    <g fill="none">
                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                    <path fill={getIconColor(["/loginbanner", "/login", "/signup"])} d="M12 13c2.396 0 4.575.694 6.178 1.672c.8.488 1.484 1.064 1.978 1.69c.486.615.844 1.351.844 2.138c0 .845-.411 1.511-1.003 1.986c-.56.45-1.299.748-2.084.956c-1.578.417-3.684.558-5.913.558s-4.335-.14-5.913-.558c-.785-.208-1.524-.506-2.084-.956C3.41 20.01 3 19.345 3 18.5c0-.787.358-1.523.844-2.139c.494-.625 1.177-1.2 1.978-1.69C7.425 13.695 9.605 13 12 13m0-11a5 5 0 1 1 0 10a5 5 0 0 1 0-10" />
                    </g>
                </svg>
                    <p className={`text-xs ${getColor(["/loginbanner", "/login", "/signup"])}`}>Login</p>
                </Link>
            </div>
        </div>
    );
};

export default Navbar;
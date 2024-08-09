import React, {  useState, createContext } from 'react';

export const FavoritesContext = createContext();

export const FavoritesContextProvider = ({ children }) => {
    const [favorites, setFavorites] = useState([]);

    const addFavorite = (product) => {
        if (!favorites.some(item => item.id === product.id))
        setFavorites([...favorites, product]);
    };

    const removeFavorite = (productId) => {
        setFavorites(favorites.filter(product => product.id !== productId));
    };

    const getFavoritesCount = () => favorites.concat.length

    return (
        <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite, getFavoritesCount }}>
            {children}
        </FavoritesContext.Provider>
    );
};

export default FavoritesContextProvider;
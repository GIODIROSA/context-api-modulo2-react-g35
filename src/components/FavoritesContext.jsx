import React, { createContext, useState } from "react";

export const FavoritesContext = createContext();

export const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (imagen) => {
    setFavorites([...favorites, imagen]);
  };

  const removeFavorite = (imagenId) => {
    setFavorites(favorites.filter((imagen) => imagen.id !== imagenId));
  };

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
};

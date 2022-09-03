import React from "react";
import { useEffect } from "react";

const Favorites = () => {
  useEffect(() => {
    fetchCharactersFavorite();
  }, []);
  const fetchCharactersFavorite = () => {
    const stringifiedFavoriteIds = localStorage.getItem("favoriteIds");
    console.log(stringifiedFavoriteIds);
  };
  return <div></div>;
};

export default Favorites;

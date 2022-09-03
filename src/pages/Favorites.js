import React from "react";

const Favorites = ({ character }) => {
  console.log(character);
  return <p>{character.fullName}</p>;
};

export default Favorites;

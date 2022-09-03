import React from "react";

// import Button from "./Button";

const Card = ({ character }) => {
  const handleFavoriteClick = () => {
    let stringyfiedFavoritesIds = localStorage.getItem("favoriteIds");
    // console.log(stringyfiedFavoritesIds);
    let favoriteIds = [];

    if (stringyfiedFavoritesIds) {
      favoriteIds = JSON.parse(stringyfiedFavoritesIds);
    }

    if (!favoriteIds.includes(character.id)) {
      favoriteIds.push(character.id);
      stringyfiedFavoritesIds = JSON.stringify(favoriteIds);
      localStorage.setItem("favoriteIds", stringyfiedFavoritesIds);
    }
  };

  return (
    <>
      <section className="card">
        <img src={character.imageUrl} alt={character.fullName} />
        <p>{character.fullName}</p>
        <p>From : {character.family}</p>
        <p>Title : {character.title}</p>
        {/* <Button character={character} /> */}
        <button onClick={handleFavoriteClick}>favorite</button>
      </section>
    </>
  );
};

export default Card;

import React from "react";

const Card = ({ character }) => {
  return (
    <section>
      <img src={character.imageUrl} alt={character.fullName} />
      <p>{character.fullName}</p>
      <p>From : {character.family}</p>
      <p>Title : {character.title}</p>
    </section>
  );
};

export default Card;

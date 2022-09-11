import { Link } from "react-router-dom";

const Card = ({ character }) => {
  console.log(character);
  return (
    <div className="card">
      <Link to={`/character/${character.id}`}>
        <img src={character.imageUrl} alt={character.fullName} />
        <p>{`${character.firstName} ${character.lastName}`}</p>
      </Link>
    </div>
  );
};

export default Card;

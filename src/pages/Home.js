import { useEffect, useState } from "react";
import Card from "../components/Card";

const Home = () => {
  const [characters, setCharacters] = useState([]);
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const request = await fetch(`https://thronesapi.com/api/v2/Characters`);
    const response = await request.json();
    setCharacters(response);
  };

  return (
    <main>
      <h1>Game of Throne</h1>
      <article className="cardContainer">
        {characters.map((character) => {
          return <Card character={character} />;
        })}
      </article>
    </main>
  );
};

export default Home;

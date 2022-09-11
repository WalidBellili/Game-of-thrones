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
  console.log(characters);
  return (
    <>
      {characters.map((character) => {
        return <Card character={character} />;
      })}
    </>
  );
};

export default Home;

import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Card from "../components/Card";

const Character = () => {
  const [characters, setCharacters] = useState([]);
  const params = useParams();
  useEffect(() => {
    fetchCharacters();
  }, []);

  const fetchCharacters = async () => {
    const request = await fetch(
      `https://thronesapi.com/api/v2/Characters/${params.id}`
    );
    const response = await request.json();
    setCharacters(response);
  };
  console.log(characters);
  return (
    <>
      <Card character={characters} />
    </>
  );
};

export default Character;
